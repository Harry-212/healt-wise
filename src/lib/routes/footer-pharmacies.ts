export const FOOTER_EXPLORE_ALL_PHARMACIES_HREF = "/pharmacies";

/** Footer pharmacy list: the affiliate partners; explore all via `FOOTER_EXPLORE_ALL_PHARMACIES_HREF`. */
export const FOOTER_PHARMACY_LINKS: ReadonlyArray<{
  href: string;
  label: string;
}> = [
  { href: "/pharmacies/dosedirect", label: "DoseDirect" },
  { href: "/pharmacies/i-prescribe", label: "i-Prescribe" },
  { href: "/pharmacies/pharmacy-me", label: "Pharmacy + Me" },
  { href: "/pharmacies/reach-online-pharmacy", label: "Reach Online Pharmacy" },
  { href: "/pharmacies/shemed", label: "SheMed" },
];
