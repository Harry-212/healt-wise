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

function getDomain(href: string): string {
  try {
    return new URL(href).hostname;
  } catch {
    return href;
  }
}

/**
 * Origin + path only, no query string or hash — affiliate IDs and other
 * tracking parameters must not reach GA4 event data.
 */
function sanitizeLinkUrl(href: string): string {
  try {
    const url = new URL(href);
    return `${url.origin}${url.pathname}`;
  } catch {
    return href;
  }
}

export function isProviderLink(anchor: HTMLAnchorElement): boolean {
  return !!anchor.dataset.pharmacy;
}

export function trackProviderClick(anchor: HTMLAnchorElement) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "provider_click", {
    provider_name: anchor.dataset.pharmacy,
    provider_id: anchor.dataset.providerId ?? undefined,
    link_url: sanitizeLinkUrl(anchor.href),
    link_domain: getDomain(anchor.href),
    link_text: anchor.textContent?.trim().slice(0, 100) ?? "",
    page_path: window.location.pathname,
    transport_type: "beacon",
  });
}

export function trackOutboundClick(anchor: HTMLAnchorElement) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "outbound_click", {
    link_url: sanitizeLinkUrl(anchor.href),
    link_domain: getDomain(anchor.href),
    link_text: anchor.textContent?.trim().slice(0, 100) ?? "",
    page_path: window.location.pathname,
    transport_type: "beacon",
  });
}
