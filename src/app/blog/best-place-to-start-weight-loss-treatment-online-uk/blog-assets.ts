export const BEST_PLACE_HERO_PNG = "best-place-to-start-weight-loss-hero.png";
export const BEST_PLACE_INLINE_PNG = "best-place-to-start-weight-loss-inline.png";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
