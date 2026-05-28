export const MOUNJARO_PRICE_UK_HERO_WEBP = "price mounjaro 2026.webp";
export const MOUNJARO_PRICE_UK_INLINE_WEBP = "2. price mounjaro 2026.webp";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
