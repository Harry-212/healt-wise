export const HORMONES_BELLY_FAT_AFTER_40_HERO_WEBP = "2.1 fatloss.webp";
export const HORMONES_BELLY_FAT_AFTER_40_INLINE_WEBP = "2.2 fatlos.webp";

export function blogWebpPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}

