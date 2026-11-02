import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Tasks 109 and 110: the comparison page and the locations archive redirect straight
// to the retained London guide, with no internal links to the retired URLs.
const GUIDE = "/blog/weight-loss-treatment-london";
const RETIRED = [
  "/best-weight-loss-treatment-comparison-london",
  "/blog/topic/locations",
  "/blog/uk-weight-loss",
];

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx)$/.test(name)) yield full;
  }
}

test("each retired URL has one permanent redirect to the guide, in a single hop", () => {
  const config = readFileSync("next.config.ts", "utf8");
  for (const source of RETIRED) {
    const re = new RegExp(
      `source: "${source}",\\s*destination: "https://www\\.healthwise360\\.co\\.uk${GUIDE}",\\s*permanent: true`,
    );
    assert.match(config, re, `${source} must redirect permanently to ${GUIDE}`);
    assert.equal(config.split(`source: "${source}"`).length - 1, 1, `${source} must be listed once`);
  }
  // Above the apex rule, so the apex host is also one hop.
  const apex = config.indexOf("Apex -> www");
  for (const source of RETIRED) assert.ok(config.indexOf(`source: "${source}"`) < apex, `${source} must sit above the apex rule`);
});

test("the retired routes are gone and the guide is not a redirect target itself", () => {
  assert.ok(!existsSync("src/app/best-weight-loss-treatment-comparison-london"));
  assert.ok(!existsSync("src/app/blog/uk-weight-loss"));
  assert.ok(!readFileSync("next.config.ts", "utf8").includes(`source: "${GUIDE}"`));
});

test("no source file links to a retired URL; the sitemap only lists them as excluded", () => {
  const offenders = [];
  for (const file of sourceFiles(join(process.cwd(), "src"))) {
    const rel = relative(process.cwd(), file).replaceAll("\\", "/");
    if (rel === "src/lib/seo/gone-paths.ts" || rel === "src/app/sitemap.ts") continue;
    const text = readFileSync(file, "utf8");
    for (const url of RETIRED) {
      if (new RegExp(`["'\`]${url}["'\`/?#]`).test(text)) offenders.push(`${rel}: ${url}`);
    }
  }
  assert.deepEqual(offenders, []);

  const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
  const excludedBlock = sitemap.slice(sitemap.indexOf("Redirected pages"), sitemap.indexOf("]);", sitemap.indexOf("Redirected pages")));
  assert.ok(excludedBlock.includes("/best-weight-loss-treatment-comparison-london"), "old comparison URL is in the exclusion list");
  const staticPaths = sitemap.slice(sitemap.indexOf("const STATIC_PATHS"), sitemap.indexOf("] as const", sitemap.indexOf("const STATIC_PATHS")));
  for (const url of RETIRED) assert.ok(!staticPaths.includes(`"${url}"`), `${url} must not be a static sitemap path`);
});

test("the blog has no Locations topic any more", () => {
  const feed = readFileSync("src/lib/blog-feed.ts", "utf8");
  assert.ok(!/"locations"/.test(feed));
  assert.ok(!/id: "locations"/.test(readFileSync("src/app/blog/BlogClient.tsx", "utf8")));
});
