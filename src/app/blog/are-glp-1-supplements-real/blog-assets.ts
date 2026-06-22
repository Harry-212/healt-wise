export const ARE_GLP1_SUPPLEMENTS_REAL_HERO_WEBP = "are-glp-1-real.webp";
export const ARE_GLP1_SUPPLEMENTS_REAL_INLINE_WEBP = "are-glp-1-real-or-marketing.webp";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
