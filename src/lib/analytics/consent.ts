const CONSENT_KEY = "hw360_analytics_consent";
export const CONSENT_CHANGE_EVENT = "hw360-consent-change";
/** Fired by the footer "Cookie settings" link to reopen the consent banner. */
export const OPEN_CONSENT_SETTINGS_EVENT = "hw360-open-consent-settings";

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

export function openConsentSettings(): void {
  window.dispatchEvent(new Event(OPEN_CONSENT_SETTINGS_EVENT));
}

/**
 * Delete Google Analytics cookies (`_ga`, `_ga_<id>`) after consent is
 * withdrawn. GA sets them on the highest registrable domain
 * (e.g. `.healthwise360.co.uk`), so every parent domain of the current host
 * is tried, plus a host-only delete.
 */
export function clearAnalyticsCookies(): void {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  if (names.length === 0) return;

  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`; domain=.${parts.slice(i).join(".")}`);
  }

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}
