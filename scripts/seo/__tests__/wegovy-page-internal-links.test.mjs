import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

// PenSEO check #168 found four 404s linked from /wegovy-price-comparison (blog slugs that do not exist).
// Every /blog/ and /helpful-guides/ link on the page must point at a real route folder.
const src = readFileSync("src/app/wegovy-price-comparison/page.tsx", "utf8");
const hrefs = [...new Set([...src.matchAll(/["'`](\/(?:blog|helpful-guides)\/[a-z0-9-]+)["'`]/g)].map((m) => m[1]))];

test("the page links to at least the four articles that used to 404", () => {
  for (const h of [
    "/blog/side-effects-of-wegovy-and-how-to-manage-them",
    "/helpful-guides/switching-wegovy-to-mounjaro-uk",
    "/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust",
    "/blog/wegovy-click-calculator-uk",
  ]) assert.ok(hrefs.includes(h), `${h} should be linked`);
});

// A route exists as its own folder, or (for /blog/) as an article served by the [slug] route.
const blogSource = readFileSync("src/lib/blog.ts", "utf8") + readFileSync("src/lib/generated/blog-article-slugs.ts", "utf8");

test("every blog and helpful-guide link on the Wegovy comparison page exists as a route", () => {
  assert.ok(hrefs.length >= 4);
  for (const h of hrefs) {
    const [, area, slug] = h.split("/");
    const ok = existsSync(`src/app/${area}/${slug}`) || (area === "blog" && blogSource.includes(slug));
    assert.ok(ok, `${h} has no folder under src/app/${area}/ and is not a registered blog slug`);
  }
});
