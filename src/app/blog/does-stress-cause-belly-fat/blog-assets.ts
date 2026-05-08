export const STRESS_BELLY_FAT_HERO_WEBP = "3.1 fatloss.webp";
export const STRESS_BELLY_FAT_INLINE_WEBP = "3.2 fatloss.webp";

export function blogWebpPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
