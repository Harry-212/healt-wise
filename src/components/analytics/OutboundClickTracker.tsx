"use client";

import { useEffect } from "react";
import { isOutboundHref, trackOutboundClick } from "@/lib/analytics/outbound";

/**
 * Sitewide GA4 outbound click tracking via event delegation, so every
 * external link (pharmacy CTAs included) is tracked without instrumenting
 * each page/component individually.
 */
export function OutboundClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || !isOutboundHref(anchor.href)) return;

      trackOutboundClick(anchor);
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
