"use client";

import { useCallback, useState } from "react";
import { type ConsentChoice } from "@/lib/analytics/consent";
import { CookieConsent } from "./CookieConsent";
import { GoogleAnalyticsClient } from "./GoogleAnalyticsClient";
import { MicrosoftClarityClient } from "./MicrosoftClarityClient";

export function AnalyticsProvider() {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);
  const handleConsent = useCallback((choice: ConsentChoice) => setConsent(choice), []);

  return (
    <>
      <GoogleAnalyticsClient consent={consent} />
      {consent === "granted" && <MicrosoftClarityClient />}
      <CookieConsent onConsent={handleConsent} />
    </>
  );
}
