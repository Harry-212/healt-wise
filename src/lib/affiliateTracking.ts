/**
 * GA4 Affiliate Click Tracking Utility
 *
 * Listens for clicks on `a.hw360-cta` links and emits `affiliate_click` events
 * to Google Analytics 4 (via gtag) and GTM dataLayer. Only the verified
 * affiliate partners (see AFFILIATE_PARTNER_IDS) are ever sent; clicks on any
 * other provider are ignored.
 */

import { isAffiliatePartner } from "./data/affiliate-partners.ts";

export interface AffiliateClickEventParams {
  provider: string;
  provider_id: string;
  medication: string;
  dose: string;
  total_pence: number;
  total_gbp: number;
  link_url: string;
  page_path: string;
  placement: string;
  monetised: boolean;
  [key: string]: unknown;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * WeakMap to deduplicate immediate mousedown + click events on the same anchor
 * within a 500ms interaction window.
 */
const lastTrackedTimeMap = new WeakMap<HTMLAnchorElement, number>();

export function shouldTrackInteraction(
  anchor: HTMLAnchorElement,
  cooldownMs = 500
): boolean {
  const now = Date.now();
  const lastTime = lastTrackedTimeMap.get(anchor) ?? 0;
  if (now - lastTime < cooldownMs) {
    return false;
  }
  lastTrackedTimeMap.set(anchor, now);
  return true;
}

function resolveProviderId(anchor: HTMLAnchorElement, provider: string): string {
  const explicit =
    anchor.dataset.hwProviderId ||
    anchor.getAttribute("data-hw-provider-id") ||
    "";
  if (explicit) return explicit;
  return provider
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** True when the anchor belongs to one of the verified affiliate partners. */
export function isAffiliateAnchor(anchor: HTMLAnchorElement): boolean {
  const provider =
    anchor.dataset.hwProvider ||
    anchor.getAttribute("data-hw-provider") ||
    "";
  return isAffiliatePartner(resolveProviderId(anchor, provider));
}

/**
 * Extracts and formats the required affiliate tracking parameters from an anchor element.
 */
export function extractAffiliateEventParams(
  anchor: HTMLAnchorElement
): AffiliateClickEventParams {
  const rawTotalPence =
    anchor.dataset.hwTotalPence ||
    anchor.getAttribute("data-hw-total-pence") ||
    "0";
  const parsedPence = parseInt(rawTotalPence, 10);
  const total_pence = Number.isNaN(parsedPence) ? 0 : parsedPence;
  const total_gbp = Number((total_pence / 100).toFixed(2));

  const provider =
    anchor.dataset.hwProvider ||
    anchor.getAttribute("data-hw-provider") ||
    "";
  const provider_id = resolveProviderId(anchor, provider);

  return {
    provider,
    provider_id,
    medication:
      anchor.dataset.hwMedication ||
      anchor.getAttribute("data-hw-medication") ||
      "",
    dose:
      anchor.dataset.hwDose ||
      anchor.getAttribute("data-hw-dose") ||
      "",
    total_pence,
    total_gbp,
    link_url: anchor.href || "",
    page_path:
      typeof window !== "undefined" ? window.location.pathname : "",
    placement:
      anchor.dataset.hwPlacement ||
      anchor.getAttribute("data-hw-placement") ||
      "organic",
    // Derived from the partner list, not from the HTML attribute.
    monetised: isAffiliatePartner(provider_id),
  };
}

/**
 * Fires the `affiliate_click` event to gtag and dataLayer.
 */
export function trackAffiliateClick(
  anchor: HTMLAnchorElement
): AffiliateClickEventParams | null {
  if (typeof window === "undefined") return null;
  if (!isAffiliateAnchor(anchor)) return null;

  const eventParams = extractAffiliateEventParams(anchor);

  // 1. Fire GA4 event via window.gtag
  if (typeof window.gtag === "function") {
    window.gtag("event", "affiliate_click", {
      ...eventParams,
      transport_type: "beacon",
    });
  }

  // 2. Push to window.dataLayer if it exists
  if (typeof window.dataLayer !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "affiliate_click",
      ...eventParams,
    });
  }

  rememberAffiliateClick(eventParams);

  return eventParams;
}

const PENDING_KEY = "hw360_affiliate_pending";
/** A return later than this is treated as a new visit, not a "back". */
const RETURN_WINDOW_MS = 30 * 60 * 1000;

interface PendingAffiliateClick {
  provider: string;
  provider_id: string;
  medication: string;
  placement: string;
  page_path: string;
  clicked_at: number;
}

function rememberAffiliateClick(params: AffiliateClickEventParams): void {
  try {
    const pending: PendingAffiliateClick = {
      provider: params.provider,
      provider_id: params.provider_id,
      medication: params.medication,
      placement: params.placement,
      page_path: params.page_path,
      clicked_at: Date.now(),
    };
    window.sessionStorage.setItem(PENDING_KEY, JSON.stringify(pending));
  } catch {
    // Storage unavailable (private mode, tests): return tracking is best-effort.
  }
}

/**
 * Fires `affiliate_return` if the user comes back after an affiliate click.
 * The pending marker is consumed so each click yields at most one return.
 * `seconds_away` is the time between the click and coming back.
 */
export function trackAffiliateReturn(
  returnSource: string
): Record<string, unknown> | null {
  if (typeof window === "undefined") return null;

  let pending: PendingAffiliateClick | null = null;
  try {
    const raw = window.sessionStorage.getItem(PENDING_KEY);
    if (!raw) return null;
    window.sessionStorage.removeItem(PENDING_KEY);
    pending = JSON.parse(raw) as PendingAffiliateClick;
  } catch {
    return null;
  }

  const elapsedMs = Date.now() - Number(pending?.clicked_at);
  if (!pending || !Number.isFinite(elapsedMs) || elapsedMs < 0) return null;
  if (elapsedMs > RETURN_WINDOW_MS) return null;

  const eventParams = {
    provider: pending.provider,
    provider_id: pending.provider_id,
    medication: pending.medication,
    placement: pending.placement,
    click_page_path: pending.page_path,
    page_path: window.location.pathname,
    seconds_away: Math.round(elapsedMs / 1000),
    return_source: returnSource,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "affiliate_return", eventParams);
  }
  if (typeof window.dataLayer !== "undefined" && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "affiliate_return", ...eventParams });
  }
  return eventParams;
}

let initialReturnChecked = false;

function isBackForwardNavigation(): boolean {
  try {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    return nav?.type === "back_forward";
  } catch {
    return false;
  }
}

/**
 * Attaches a single delegated, capture-phase `click` listener that tracks
 * `a.hw360-cta` links, including ones mounted after this runs.
 * Also listens for the user coming back (bfcache restore, tab re-focus, or a
 * back navigation that reloads the page) to emit `affiliate_return`.
 * Returns a cleanup function.
 */
export function attachAffiliateTracking(): () => void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  // Back button without bfcache: the page reloads, so check once per load.
  if (!initialReturnChecked) {
    initialReturnChecked = true;
    if (isBackForwardNavigation()) trackAffiliateReturn("back_forward_load");
  }

  const handlePageShow = (event: PageTransitionEvent) => {
    if (event.persisted) trackAffiliateReturn("bfcache");
  };
  const handleVisibility = () => {
    if (document.visibilityState === "visible") {
      trackAffiliateReturn("tab_visible");
    }
  };
  window.addEventListener("pageshow", handlePageShow);
  document.addEventListener("visibilitychange", handleVisibility);

  const handleClick = (event: MouseEvent) => {
    const target = event.target as Element | null;
    const anchor = target?.closest("a.hw360-cta") as HTMLAnchorElement | null;
    if (!anchor) return;
    if (!shouldTrackInteraction(anchor)) return;
    trackAffiliateClick(anchor);
  };

  document.addEventListener("click", handleClick, { capture: true });
  return () => {
    document.removeEventListener("click", handleClick, { capture: true });
    window.removeEventListener("pageshow", handlePageShow);
    document.removeEventListener("visibilitychange", handleVisibility);
  };
}

/** Backwards-compatible alias */
export const setupAffiliateTracking = attachAffiliateTracking;
