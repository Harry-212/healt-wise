export const WEIGHT_LOSS_TREATMENT_UK_COMPLETE_GUIDE_HERO_PNG =
  "weight-loss-treatment-uk-complete-guide-hero.png";
export const WEIGHT_LOSS_TREATMENT_UK_COMPLETE_GUIDE_INLINE_PNG =
  "weight-loss-treatment-uk-complete-guide-inline.png";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
