export const BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_HERO_WEBP = "best-weight-loss-comparison-sites-uk-hero.png";
export const BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_INLINE_WEBP = "best-weight-loss-comparison-sites-uk-inline.png";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
