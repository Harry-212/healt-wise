const CONSENT_KEY = "hw360_analytics_consent";
export const CONSENT_CHANGE_EVENT = "hw360-consent-change";

export type ConsentChoice = "granted" | "denied";

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === "granted" || value === "denied") return value;
  } catch {
    // Private browsing or storage blocked
  }
  return null;
}

export function storeConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Silently fail if storage unavailable
  }
  // Notify other component trees on the same page (e.g. Footer, guide
  // pages) that don't share AnalyticsProvider's local state.
  window.dispatchEvent(
    new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }),
  );
}
