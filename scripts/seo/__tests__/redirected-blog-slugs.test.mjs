import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Task 119 QA: a post whose URL is a permanent redirect must not appear in the blog
// feed, the blog index links, the sitemap slugs or llms.txt (live check found four
// internal links and four llms.txt entries that answered 308).
register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const blog = await import("@/lib/blog.ts");

function redirectSourceSlugs() {
  const config = readFileSync("next.config.ts", "utf8");
  return [...config.matchAll(/source:\s*"\/blog\/([a-z0-9-]+)"/g)].map((m) => m[1]);
}

test("no blog post in the feed or the sitemap slugs is a redirect source in next.config.ts", () => {
  const redirected = new Set(redirectSourceSlugs());
  assert.ok(redirected.size > 30, "expected to find the blog redirects in next.config.ts");
  const feed = blog.getAllPostsMeta().map((p) => p.slug);
  const sitemap = blog.getAllBlogSitemapSlugs();
  assert.deepEqual(feed.filter((s) => redirected.has(s)), [], "redirected slugs in the blog feed");
  assert.deepEqual(sitemap.filter((s) => redirected.has(s)), [], "redirected slugs in the sitemap and llms.txt list");
});
