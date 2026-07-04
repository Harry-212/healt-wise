/**
 * Same-origin static assets should bypass `/_next/image`. On our Hostinger
 * deploy that route returns `Content-Disposition: attachment`, so opening an
 * optimized image in a new tab downloads instead of displaying inline.
 */
export function shouldServeImageDirect(src: string): boolean {
  const s = src.trim();
  if (!s.startsWith("/") || s.startsWith("/api/")) return false;
  return true;
}
