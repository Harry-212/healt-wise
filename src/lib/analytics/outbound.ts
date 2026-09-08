declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function isOutboundHref(href: string): boolean {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return false;
  }
  try {
    const url = new URL(href, window.location.href);
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

export function trackOutboundClick(anchor: HTMLAnchorElement) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  let domain = anchor.href;
  try {
    domain = new URL(anchor.href).hostname;
  } catch {
    // keep raw href as fallback
  }

  window.gtag("event", "outbound_click", {
    link_url: anchor.href,
    link_domain: domain,
    link_text: anchor.textContent?.trim().slice(0, 100) ?? "",
    pharmacy: anchor.dataset.pharmacy ?? undefined,
    page_path: window.location.pathname,
    transport_type: "beacon",
  });
}
