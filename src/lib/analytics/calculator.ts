import { sanitizeLinkUrl } from "./outbound";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Task 35: one event per genuine calculator action. No dose, pen strength,
 * medicine choice, personal information or other calculator input is ever
 * sent as a parameter — only page/link identity, same allow-list shape as
 * `trackProviderClick`.
 */
function sendCalculatorEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", name, {
    page_path: window.location.pathname,
    transport_type: "beacon",
    ...params,
  });
}

/** First genuine interaction with a calculator's inputs (pen strength or dose). */
export function trackCalculatorStart() {
  sendCalculatorEvent("calculator_start");
}

/** First time a calculation produces a valid result in this interaction. */
export function trackCalculatorComplete() {
  sendCalculatorEvent("calculator_complete");
}

/** Click on an in-article link from a calculator blog post to its /tools page. */
export function trackCalculatorArticleToTool(href: string) {
  sendCalculatorEvent("calculator_article_to_tool", {
    link_url: sanitizeLinkUrl(href),
  });
}

/** Click on a calculator page's link/CTA to the price comparison page. */
export function trackCalculatorToPriceComparison(href: string) {
  sendCalculatorEvent("calculator_to_price_comparison", {
    link_url: sanitizeLinkUrl(href),
  });
}
