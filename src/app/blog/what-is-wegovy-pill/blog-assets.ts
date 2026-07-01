export const WHAT_IS_WEGOVY_PILL_HERO_PNG = "what-is-wegovy-1.png";
export const WHAT_IS_WEGOVY_PILL_INLINE_PNG = "what-is-wegovy-2.png";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
