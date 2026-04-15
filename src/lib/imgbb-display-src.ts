/**
 * Turn an ImgBB *page* URL (https://ibb.co.com/XXXX) into a same-origin URL
 * that resolves to the direct image via `/api/imgbb`. Direct `i.ibb.co.com`
 * URLs are returned unchanged.
 */
export function imgbbDisplaySrc(url: string): string {
  const u = url.trim();
  if (!u) return u;
  try {
    const parsed = new URL(u);
    const host = parsed.hostname.toLowerCase();
    const isPageHost =
      host === "ibb.co.com" ||
      host === "www.ibb.co.com" ||
      host === "ibb.co" ||
      host === "www.ibb.co";
    if (isPageHost) {
      return `/api/imgbb?u=${encodeURIComponent(u)}`;
    }
  } catch {
    return u;
  }
  return u;
}
