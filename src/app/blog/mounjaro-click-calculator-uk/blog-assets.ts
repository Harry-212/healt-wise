export const MOUNJARO_CLICK_CALCULATOR_UK_HERO_WEBP = "mounjaro-click-calculator-uk-hero-v2.png";
export const MOUNJARO_CLICK_CALCULATOR_UK_INLINE_WEBP = "mounjaro-click-calculator-uk-inline.png";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
