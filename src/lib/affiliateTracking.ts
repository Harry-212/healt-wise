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

  return eventParams;
}

/**
 * Attaches a single delegated, capture-phase `click` listener that tracks
 * `a.hw360-cta` links, including ones mounted after this runs.
 * Returns a cleanup function.
 */
export function attachAffiliateTracking(): () => void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

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
  };
}

/** Backwards-compatible alias */
export const setupAffiliateTracking = attachAffiliateTracking;
