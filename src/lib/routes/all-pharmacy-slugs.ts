import { MOUNJARO_UK_COMPARE_PROVIDERS } from "@/lib/data/mounjaro-uk-compare-providers";
import { SAXENDA_UK_COMPARE_PROVIDERS } from "@/lib/data/saxenda-uk-compare-providers";
import { WEGOVY_UK_COMPARE_PROVIDERS } from "@/lib/data/wegovy-uk-compare-providers";

/** Slugs with custom landing pages not (yet) in compare tables — keep in sync with `/pharmacies/[slug]`. */
export const EXTRA_PHARMACY_LANDING_SLUGS: readonly string[] = [
  "ayp-healthcare",
  "bolt-pharmacy",
  "cloud-pharmacy",
  "fella-health",
  "farmeci",
  "fylde-clinic",
  "genmeds",
  "get-weight-loss",
  "getadrip",
  "goodbody-clinic",
  "happy-pharmacy",
  "hey-slim",
  "medicspot",
  "pharmacy-xpress",
  "quickmeds",
];

/** Every `/pharmacies/:slug` that `generateStaticParams` builds (sitemap + llms must match). */
export function allPharmacySlugs(): string[] {
  const ids = new Set<string>();
  for (const p of WEGOVY_UK_COMPARE_PROVIDERS) ids.add(p.id);
  for (const p of MOUNJARO_UK_COMPARE_PROVIDERS) ids.add(p.id);
  for (const p of SAXENDA_UK_COMPARE_PROVIDERS) ids.add(p.id);
  for (const s of EXTRA_PHARMACY_LANDING_SLUGS) ids.add(s);
  return [...ids].sort();
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
