import { GA_MEASUREMENT_ID } from "@/lib/analytics/ga";
import Script from "next/script";
import { Suspense } from "react";
import { Ga4PageViews } from "./Ga4PageViews";

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
      </Script>
      <Suspense fallback={null}>
        <Ga4PageViews />
      </Suspense>
    </>
  );
}
