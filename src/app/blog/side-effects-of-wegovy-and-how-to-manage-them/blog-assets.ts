export const WEGOVY_SIDE_HERO_WEBP = "tired.webp";

export const WEGOVY_SIDE_INLINE_WEGOVY_WEBP = "wegovy.webp";

/** Second inline visual — side-effect / self-care theme (pair with `wegovy.webp`). */
export const WEGOVY_SIDE_INLINE_SIDE_WEBP = "side (1).webp";

export function blogWebpPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
