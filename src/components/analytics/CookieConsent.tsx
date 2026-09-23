"use client";

import { useEffect, useState } from "react";
import { type ConsentChoice, getStoredConsent, storeConsent } from "@/lib/analytics/consent";

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

export function CookieConsent({ onConsent }: { onConsent: (choice: ConsentChoice) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      onConsent(stored);
    } else {
      setVisible(true);
    }
  }, [onConsent]);

  function handleChoice(choice: ConsentChoice) {
    storeConsent(choice);
    updateGtagConsent(choice);
    onConsent(choice);
    setVisible(false);
  }

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
          for advertising. You can change your choice at any time in our{" "}
          <a href="/privacy-policy" className="font-medium text-emerald-700 underline hover:text-emerald-800">
            privacy policy
          </a>.
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
