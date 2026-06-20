export const GLP1_SUPPLEMENTS_HERO_WEBP = "glp-1-supplement.webp";
export const GLP1_SUPPLEMENTS_INLINE_WEBP = "glp-1-supplement-2.webp";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
