"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { attachAffiliateTracking } from "@/lib/affiliateTracking";

/**
 * Reusable hook that attaches GA4 affiliate click tracking listeners to `a.hw360-cta` elements.
 * Runs on initial mount and re-attaches/verifies on client-side route changes.
 */
export function useAffiliateTracking(): void {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = attachAffiliateTracking();
    return cleanup;
  }, [pathname]);
}

/**
 * Provider / Wrapper component that activates affiliate tracking across page changes
 * and wraps layout children.
 */
export function AffiliateTrackingProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  useAffiliateTracking();
  return React.createElement(React.Fragment, null, children);
}

export default useAffiliateTracking;
