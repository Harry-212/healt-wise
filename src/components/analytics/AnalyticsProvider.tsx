"use client";

import { useCallback, useState } from "react";
import { type ConsentChoice } from "@/lib/analytics/consent";
import { CookieConsent } from "./CookieConsent";
import { GoogleAnalyticsClient } from "./GoogleAnalyticsClient";

export function AnalyticsProvider() {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);
  const handleConsent = useCallback((choice: ConsentChoice) => setConsent(choice), []);

  return (
    <>
      {/* Consent Mode "basic": gtag.js only loads once consent is granted. */}
      {consent === "granted" ? <GoogleAnalyticsClient /> : null}
      <CookieConsent onConsent={handleConsent} />
    </>
  );
}
