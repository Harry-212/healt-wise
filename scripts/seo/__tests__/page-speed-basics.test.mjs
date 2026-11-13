import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";

const read = (p) => readFileSync(p, "utf8");

// PenSEO page speed (13 Nov 2026): LCP over 2.5 s on /, /about and /blog.

test("/blog reads no request data, so it can be prerendered and cached", () => {
  const src = read("src/app/blog/page.tsx").replace(/^\s*\/\/.*$/gm, ""); // ignore comments
  assert.ok(!/searchParams/.test(src), "searchParams makes the page render on every request");
  assert.ok(!/\bcookies\(|\bheaders\(|force-dynamic/.test(src));
});

// Next only runs middleware from src/ when the project has a src folder, and this project's middleware.ts
// sits at the repository root, so it is not built. The legacy redirect therefore lives in next.config.
test("legacy /blog?topic=<tag> URLs are still redirected, from next.config", () => {
  const cfg = read("next.config.ts");
  assert.match(cfg, /\.\.\.BLOG_FEED_TAGS\.map\(\(topic\) => \(\{\s*source: "\/blog",\s*has: \[\{ type: "query" as const, key: "topic", value: topic \}\],\s*destination: `\/blog\/topic\/\$\{topic\}`,\s*permanent: true,/);
});

test("site icons are small files, not the 1.1 MB original", () => {
  const assets = read("src/lib/site-assets.ts");
  assert.match(assets, /SITE_FAVICON_SRC = "\/icon-192\.png"/);
  assert.match(assets, /SITE_FAVICON_SMALL_SRC = "\/icon-48\.png"/);
  assert.match(assets, /SITE_APPLE_TOUCH_ICON_SRC = "\/apple-touch-icon\.png"/);
  for (const f of ["public/icon-192.png", "public/icon-48.png", "public/apple-touch-icon.png"]) {
    assert.ok(statSync(f).size < 100 * 1024, `${f} must stay under 100 KB`);
  }
  const layout = read("src/app/layout.tsx");
  assert.ok(!/newiconhealthwise360/.test(layout));
  assert.match(layout, /SITE_FAVICON_SMALL_SRC/);
  assert.match(layout, /SITE_APPLE_TOUCH_ICON_SRC/);
});
