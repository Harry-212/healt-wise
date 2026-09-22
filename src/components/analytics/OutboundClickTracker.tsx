"use client";

import { useEffect } from "react";
import {
  isOutboundHref,
  isProviderLink,
  trackOutboundClick,
  trackProviderClick,
} from "@/lib/analytics/outbound";

export function OutboundClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || !isOutboundHref(anchor.href)) return;

      if (isProviderLink(anchor)) {
        trackProviderClick(anchor);
      } else {
        trackOutboundClick(anchor);
      }
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
