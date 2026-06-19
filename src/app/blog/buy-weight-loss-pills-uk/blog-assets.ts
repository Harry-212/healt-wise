export const BUY_WEIGHT_LOSS_PILLS_HERO_WEBP = "buy-weight-loss-piils-1.webp";
export const BUY_WEIGHT_LOSS_PILLS_INLINE_WEBP = "buy-weight-loss-piils-2.webp";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
