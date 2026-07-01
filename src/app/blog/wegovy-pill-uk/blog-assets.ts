export const WEGOVY_PILL_HERO_PNG = "wegovy-pills.png";
export const WEGOVY_PILL_INLINE_PNG = "data-wegovy-pill.png";

export function blogImgPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
