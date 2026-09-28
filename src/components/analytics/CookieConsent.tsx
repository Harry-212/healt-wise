"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  type ConsentChoice,
  CONSENT_CHANGE_EVENT,
  OPEN_CONSENT_SETTINGS_EVENT,
  clearAnalyticsCookies,
  getStoredConsent,
  storeConsent,
} from "@/lib/analytics/consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGtagConsent(choice: ConsentChoice) {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: choice,
  });
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
}

function getServerConsent(): ConsentChoice | null {
  return null;
}

export function CookieConsent({ onConsent }: { onConsent: (choice: ConsentChoice) => void }) {
  // Stored consent is an external system (localStorage); reading it through
  // useSyncExternalStore keeps this in sync with other tabs/components
  // without a setState call in an effect body.
  const consent = useSyncExternalStore(subscribeToConsent, getStoredConsent, getServerConsent);
  const [reopened, setReopened] = useState(false);

  // Footer "Cookie settings" link reopens the banner so a choice can be
  // changed or withdrawn as easily as it was given (UK ICO).
  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT, open);
  }, []);

  useEffect(() => {
    if (consent) onConsent(consent);
  }, [consent, onConsent]);

  function handleChoice(choice: ConsentChoice) {
    storeConsent(choice);
    updateGtagConsent(choice);
    if (choice === "denied") clearAnalyticsCookies();
    setReopened(false);
  }

  const visible = consent === null || reopened;
  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[9999] border-t border-slate-200 bg-white px-4 py-4 shadow-lg sm:px-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          We use cookies for analytics (Google Analytics) to
          understand how visitors use this site. No personal data is sold or shared
          for advertising. You can change your choice at any time using
          &ldquo;Cookie settings&rdquo; in the footer.
          {reopened && consent && (
            <span className="mt-1 block font-medium text-slate-700">
              Current choice: {consent === "granted" ? "Accepted" : "Rejected"}
            </span>
          )}
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => handleChoice("denied")}
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => handleChoice("granted")}
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
