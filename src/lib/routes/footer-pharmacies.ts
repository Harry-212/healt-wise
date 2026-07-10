import { MOUNJARO_UK_COMPARE_PROVIDERS_BASE } from "@/lib/data/mounjaro-uk-compare-providers";
import { SAXENDA_UK_COMPARE_PROVIDERS } from "@/lib/data/saxenda-uk-compare-providers";
import { allPharmacySlugs } from "@/lib/routes/all-pharmacy-slugs";

export type FooterPharmacyLink = {
  href: string;
  label: string;
};

const FOOTER_PHARMACY_COLUMN_COUNT = 6;

/** Alias slugs that share a landing page with a canonical slug — omit from footer. */
const FOOTER_EXCLUDED_PHARMACY_SLUGS = new Set([
  "getadrip",
  "getweightloss",
  "pharmacy-xpress",
]);

/** Slug → display name when not present in compare provider seeds. */
const PHARMACY_NAME_BY_SLUG: Record<string, string> = {
  "fylde-clinic": "Fylde Clinic",
  "get-weight-loss": "Get Weight Loss",
  medicspot: "Medicspot",
};

function pharmacyNameBySlug(slug: string): string {
  const fromMap = PHARMACY_NAME_BY_SLUG[slug];
  if (fromMap) return fromMap;

  for (const provider of MOUNJARO_UK_COMPARE_PROVIDERS_BASE) {
    if (provider.id === slug) return provider.name;
  }
  for (const provider of SAXENDA_UK_COMPARE_PROVIDERS) {
    if (provider.id === slug) return provider.name;
  }

  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function chunkIntoColumns<T>(items: readonly T[], columnCount: number): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  const perColumn = Math.ceil(items.length / columnCount);

  for (let i = 0; i < columnCount; i++) {
    columns[i] = [...items.slice(i * perColumn, (i + 1) * perColumn)];
  }

  return columns;
}

/** Every UK pharmacy with a live `/pharmacies/:slug` landing page — sorted A→Z. */
export const FOOTER_ALL_PHARMACY_LINKS: readonly FooterPharmacyLink[] =
  allPharmacySlugs()
    .filter((slug) => !FOOTER_EXCLUDED_PHARMACY_SLUGS.has(slug))
    .map((slug) => ({
      href: `/pharmacies/${slug}`,
      label: pharmacyNameBySlug(slug),
    }))
    .sort((a, b) => a.label.localeCompare(b.label, "en", { sensitivity: "base" }));

/** Six balanced columns for the footer pharmacy directory. */
export const FOOTER_ALL_PHARMACY_COLUMNS: readonly (readonly FooterPharmacyLink[])[] =
  chunkIntoColumns(FOOTER_ALL_PHARMACY_LINKS, FOOTER_PHARMACY_COLUMN_COUNT);
