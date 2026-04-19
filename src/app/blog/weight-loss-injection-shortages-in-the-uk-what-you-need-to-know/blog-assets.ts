export const SHORTAGES_HERO_WEBP = "pharmacies.webp";

export const SHORTAGES_INLINE_DEMAND_WEBP = "demand.webp";

export function blogWebpPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
