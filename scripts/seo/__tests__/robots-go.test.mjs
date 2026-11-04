import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// /go/* are cloaked affiliate redirects (307) to partner sites. Crawlers have nothing
// to index there and following them pulls in partner-site content, so robots blocks them.
const robots = readFileSync("src/app/robots.ts", "utf8");

test("robots.txt disallows the cloaked affiliate redirect path", () => {
  assert.match(robots, /disallow:\s*\[[^\]]*"\/go\/"/);
});

test("robots.txt keeps the existing disallows and still allows the rest of the site", () => {
  for (const p of ["/api/", "/my-hub", "/auth/", "/admin-dashboard"]) {
    assert.ok(robots.includes(`"${p}"`), `${p} must stay disallowed`);
  }
  assert.match(robots, /allow:\s*"\/"/);
  assert.ok(robots.includes("sitemap.xml"));
});

test("no /go/ URL is listed in the sitemap", () => {
  const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
  assert.ok(!sitemap.includes('"/go/'));
});
