export const FIBRE_GLP_HERO_WEBP = "fibre-glp.webp";
export const FIBRE_GLP_INLINE_WEBP = "fibre-glp-1.webp";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
