import { test } from "node:test";
import assert from "node:assert/strict";
import { splitSitemapGaps } from "../lib/inventory.mjs";

function destination(url, overrides = {}) {
  return {
    url,
    error: false,
    sitemapInclusion: "No",
    discoverySources: ["internal-link"],
    indexNoindex: "index",
    canonicalSelfReferencing: true,
    ...overrides,
  };
}

test("DEV-05: a genuinely indexable page found only via internal links is a real sitemap gap", () => {
  const { missingFromSitemapUrls, noindexExcludedFromSitemap, otherExcludedFromSitemap } = splitSitemapGaps([
    destination("https://example.test/new-article"),
  ]);
  assert.deepEqual(missingFromSitemapUrls, ["https://example.test/new-article"]);
  assert.equal(noindexExcludedFromSitemap.length, 0);
  assert.equal(otherExcludedFromSitemap.length, 0);
});

test("DEV-05: the 18 non-London city pages (intentional noindex) are never reported as a sitemap gap", () => {
  const cities = ["reading", "oxford", "luton", "cambridge", "milton-keynes"];
  const destinations = cities.map((city) =>
    destination(`https://www.healthwise360.co.uk/blog/best-weight-loss-treatment-in-${city}`, {
      indexNoindex: "noindex",
      canonicalSelfReferencing: true,
      robotsMetaRaw: "noindex",
    }),
  );
  const { missingFromSitemapUrls, noindexExcludedFromSitemap } = splitSitemapGaps(destinations);
  assert.equal(missingFromSitemapUrls.length, 0, "a noindex page must never land in the sitemap-gap list");
  assert.equal(noindexExcludedFromSitemap.length, 5);
  assert.ok(noindexExcludedFromSitemap.every((d) => d.disposition.includes("not a sitemap gap")));
});

test("DEV-05: a page already listed in sitemap.xml is excluded from every bucket, even if also found via an internal link", () => {
  const d = destination("https://example.test/already-listed", {
    sitemapInclusion: "Yes",
    discoverySources: ["internal-link", "sitemap"],
  });
  const result = splitSitemapGaps([d]);
  assert.equal(result.missingFromSitemapUrls.length, 0);
  assert.equal(result.noindexExcludedFromSitemap.length, 0);
  assert.equal(result.otherExcludedFromSitemap.length, 0);
});

test("DEV-05: index-but-canonicalised-elsewhere pages are kept visible for review, not dropped or treated as a gap", () => {
  const d = destination("https://example.test/dup", {
    canonicalSelfReferencing: false,
    canonicalUrl: "https://example.test/canonical-target",
  });
  const { missingFromSitemapUrls, noindexExcludedFromSitemap, otherExcludedFromSitemap } = splitSitemapGaps([d]);
  assert.equal(missingFromSitemapUrls.length, 0);
  assert.equal(noindexExcludedFromSitemap.length, 0);
  assert.equal(otherExcludedFromSitemap.length, 1);
  assert.equal(otherExcludedFromSitemap[0].canonicalUrl, "https://example.test/canonical-target");
});

test("DEV-05: a failed fetch is excluded from all three buckets, not silently treated as any disposition", () => {
  const d = destination("https://example.test/broken", { error: "timeout" });
  const result = splitSitemapGaps([d]);
  assert.equal(result.missingFromSitemapUrls.length, 0);
  assert.equal(result.noindexExcludedFromSitemap.length, 0);
  assert.equal(result.otherExcludedFromSitemap.length, 0);
});
