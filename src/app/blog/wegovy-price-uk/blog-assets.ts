export const WEGOVY_PRICE_UK_HERO_WEBP = "wegovy price uk.webp";
export const WEGOVY_PRICE_UK_INLINE_WEBP = "2 wegovy price uk.webp";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
