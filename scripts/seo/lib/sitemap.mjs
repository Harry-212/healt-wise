function normalise(url) {
  return url.replace(/\/$/, "").toLowerCase();
}

/** Fetches /sitemap.xml and returns the set of <loc> URLs, normalised (no trailing slash). */
export async function fetchSitemapUrls(baseUrl) {
  const res = await fetch(new URL("/sitemap.xml", baseUrl).toString(), {
    headers: { "User-Agent": "Healthwise360-SEO-Export/1.0" },
  });
  if (!res.ok) return new Set();

  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => normalise(m[1].trim()));
  return new Set(locs);
}

export function isInSitemap(url, sitemapUrls) {
  return sitemapUrls.has(normalise(url));
}
