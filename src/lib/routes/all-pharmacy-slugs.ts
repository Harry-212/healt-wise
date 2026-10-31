import { AFFILIATE_PARTNER_IDS } from "@/lib/data/affiliate-partners";

/**
 * Only the affiliate partners have a `/pharmacies/:slug` profile page. Every other
 * pharmacy was removed on 2026-10-31 and answers 410 Gone (see `lib/seo/gone-paths.ts`).
 */

/** Every `/pharmacies/:slug` that `generateStaticParams` builds (sitemap + llms must match). */
export function allPharmacySlugs(): string[] {
  return [...AFFILIATE_PARTNER_IDS].sort();
}

let cachedPharmacyPageSlugs: Set<string> | null = null;

/** Memoised set of slugs that have a real `/pharmacies/:slug` page. */
export function pharmacyPageSlugSet(): Set<string> {
  if (!cachedPharmacyPageSlugs) {
    cachedPharmacyPageSlugs = new Set(allPharmacySlugs());
  }
  return cachedPharmacyPageSlugs;
}

/** True when a `/pharmacies/:slug` page exists (so linking won't 404). */
export function hasPharmacyPage(slug: string): boolean {
  return pharmacyPageSlugSet().has(slug.trim());
}
