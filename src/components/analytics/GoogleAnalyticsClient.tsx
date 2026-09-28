"use client";

import { GA_MEASUREMENT_ID } from "@/lib/analytics/ga";
import Script from "next/script";
import { Suspense } from "react";
import { Ga4PageViews } from "./Ga4PageViews";

/**
 * Google Consent Mode "basic": this component is only ever rendered once the
 * visitor has granted analytics consent (see AnalyticsProvider), so gtag.js
 * loads and starts sending data immediately — no cookieless pings before
 * consent, and nothing to model while denied.
 */
export function GoogleAnalyticsClient() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
      </Script>
      <Suspense fallback={null}>
        <Ga4PageViews />
      </Suspense>
    </>
  );
}
