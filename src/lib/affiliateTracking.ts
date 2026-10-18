/**
 * GA4 Affiliate Click Tracking Utility
 *
 * Listens for interactions on `a.hw360-cta` affiliate links and emits
 * `affiliate_click` events to Google Analytics 4 (via gtag) and GTM dataLayer.
 */

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

  const rawMonetised =
    anchor.dataset.hwMonetised ||
    anchor.getAttribute("data-hw-monetised");
  const monetised =
    rawMonetised == null ? true : rawMonetised.toLowerCase() === "true";

  return {
    provider:
      anchor.dataset.hwProvider ||
      anchor.getAttribute("data-hw-provider") ||
      "",
    provider_id:
      anchor.dataset.hwProviderId ||
      anchor.getAttribute("data-hw-provider-id") ||
      "",
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
    monetised,
  };
}

/**
 * Fires the `affiliate_click` event to gtag and dataLayer.
 */
export function trackAffiliateClick(
  anchor: HTMLAnchorElement
): AffiliateClickEventParams | null {
  if (typeof window === "undefined") return null;

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
 * Queries all `a.hw360-cta` elements, attaches mousedown + click listeners,
 * and maintains delegated capture listeners to ensure dynamically mounted links are tracked.
 * Returns a cleanup function.
 */
export function attachAffiliateTracking(): () => void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return () => {};
  }

  const handleAnchorInteraction = function (this: HTMLAnchorElement) {
    if (!shouldTrackInteraction(this)) return;
    trackAffiliateClick(this);
  };

  // Direct element listener attachment on all existing a.hw360-cta elements
  const anchors = Array.from(
    document.querySelectorAll<HTMLAnchorElement>("a.hw360-cta")
  );
  for (const anchor of anchors) {
    anchor.addEventListener("mousedown", handleAnchorInteraction);
    anchor.addEventListener("click", handleAnchorInteraction);
  }

  // Global delegated listener to catch dynamically added or replaced elements
  const handleDelegatedInteraction = (event: MouseEvent) => {
    const target = event.target as Element | null;
    const anchor = target?.closest("a.hw360-cta") as HTMLAnchorElement | null;
    if (!anchor) return;
    if (!shouldTrackInteraction(anchor)) return;
    trackAffiliateClick(anchor);
  };

  document.addEventListener("mousedown", handleDelegatedInteraction, {
    capture: true,
  });
  document.addEventListener("click", handleDelegatedInteraction, {
    capture: true,
  });

  return () => {
    for (const anchor of anchors) {
      anchor.removeEventListener("mousedown", handleAnchorInteraction);
      anchor.removeEventListener("click", handleAnchorInteraction);
    }
    document.removeEventListener("mousedown", handleDelegatedInteraction, {
      capture: true,
    });
    document.removeEventListener("click", handleDelegatedInteraction, {
      capture: true,
    });
  };
}

/** Backwards-compatible alias */
export const setupAffiliateTracking = attachAffiliateTracking;
