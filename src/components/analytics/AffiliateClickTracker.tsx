"use client";

import { useAffiliateTracking } from "@/hooks/useAffiliateTracking";

/**
 * Root-level client component that activates GA4 affiliate click tracking
 * across all pages and client-side navigations.
 */
export function AffiliateClickTracker() {
  useAffiliateTracking();
  return null;
}

export default AffiliateClickTracker;

