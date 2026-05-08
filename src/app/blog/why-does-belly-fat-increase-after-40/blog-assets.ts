export const BELLY_FAT_AFTER_40_HERO_WEBP = "1.1 fatloss.webp";
export const BELLY_FAT_AFTER_40_INLINE_WEBP = "1.2 fatloss.webp";

export function blogWebpPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}

