export const BMI_HERO_PNG = "bmi-calculator-hero.png";
export const BMI_INLINE_PNG = "bmi-calorie-tracking.png";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
