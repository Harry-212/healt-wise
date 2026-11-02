import { activeProviders } from "@/lib/data/providers";

export const FOOTER_EXPLORE_ALL_PHARMACIES_HREF = "/pharmacies";

/** Footer pharmacy list: the active partners, A–Z; explore all via `FOOTER_EXPLORE_ALL_PHARMACIES_HREF`. */
export const FOOTER_PHARMACY_LINKS: ReadonlyArray<{
  href: string;
  label: string;
}> = activeProviders().map((p) => ({
  href: `/pharmacies/${p.id}`,
  label: p.name,
}));
