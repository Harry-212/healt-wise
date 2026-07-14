export const PROTEIN_GLP_HERO_WEBP = "protein-glp.webp";
export const PROTEIN_GLP_INLINE_WEBP = "protein-glp-1.webp";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
