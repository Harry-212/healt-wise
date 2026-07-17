import { MOUNJARO_UK_COMPARE_PROVIDERS } from "@/lib/data/mounjaro-uk-compare-providers";
import { hasPharmacyPage } from "@/lib/routes/all-pharmacy-slugs";

export const FOOTER_EXPLORE_ALL_PHARMACIES_HREF =
  "/compare/best-weight-loss-treatments-uk";

const FOOTER_PHARMACY_TOP_N = 5;

const FOOTER_PINNED_PHARMACY = {
  href: "/pharmacies/bolt-pharmacy",
  label: "Bolt Pharmacy",
} as const;

/** Short footer list: Bolt first, then top-rated providers with a live profile page. */
export const FOOTER_PHARMACY_LINKS: ReadonlyArray<{
  href: string;
  label: string;
}> = [
  FOOTER_PINNED_PHARMACY,
  ...[...MOUNJARO_UK_COMPARE_PROVIDERS]
    .filter(
      (p) =>
        p.id !== "bolt-pharmacy" &&
        p.linkProfilePage !== false &&
        hasPharmacyPage(p.id),
    )
    .sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name))
    .slice(0, FOOTER_PHARMACY_TOP_N - 1)
    .map((p) => ({
      href: `/pharmacies/${p.id}`,
      label: p.name,
    })),
];
