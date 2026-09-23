"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  CONSENT_CHANGE_EVENT,
  getStoredConsent,
  type ConsentChoice,
} from "@/lib/analytics/consent";

/**
 * Google "Preferred Sources" button — lets readers mark Healthwise360 as a
 * preferred source in Google Search. Google's publisher script renders the
 * button in an iframe on load (not only on click), so it is gated behind
 * the same cookie consent as GA4 rather than loading unconditionally.
 * https://developers.google.com/search/docs/appearance/preferred-sources
 */
export function GooglePreferredSourceButton({
  className,
  theme = "light",
}: {
  className?: string;
  theme?: "light" | "dark";
}) {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
    const onChange = (e: Event) => {
      setConsent((e as CustomEvent<ConsentChoice>).detail);
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  if (consent !== "granted") return null;

  return (
    <>
      <Script
        id="google-preferred-source-publisher"
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="lazyOnload"
      />
      <div
        {...{ "google-add-preferred-source-btn": "" }}
        data-theme={theme}
        className={className}
      />
    </>
  );
}
