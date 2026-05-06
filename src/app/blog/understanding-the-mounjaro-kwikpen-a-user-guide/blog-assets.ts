/** Filenames in `public/blog/` — `encodeURIComponent` for URL-safe paths (spaces, parentheses). */
export const KWIKPEN_HERO_WEBP = "feel.webp";

export const KWIKPEN_INLINE_HEALTHY_WEBP = "Healthy.webp";

export const KWIKPEN_INLINE_HUMAN_WEBP = "Human.webp";

export function blogWebpPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
