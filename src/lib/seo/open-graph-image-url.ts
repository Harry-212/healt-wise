/**
 * Prefer a larger crop for OG / WhatsApp / Facebook link previews (min ~300×200;
 * 1200×630 is a common target).
 */
export function openGraphSizedImageUrl(url: string): string {
  if (!url.includes("images.unsplash.com")) return url;
  return url.replace("fit=crop&w=800", "fit=crop&w=1200&h=630");
}
