import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Task 124: the early-weight-loss guide is merged into the plateau guide. The old URL
// redirects once, permanently, to the plateau URL; it is out of the sitemap and nothing
// links to it; the plateau guide stays a normal indexable page.
const OLD_SLUG = "mounjaro-early-weight-loss-why-it-slows";
const OLD_PATH = `/helpful-guides/${OLD_SLUG}`;
const NEW_SLUG = "mounjaro-weight-loss-plateau";
const NEW_URL = `https://www.healthwise360.co.uk/helpful-guides/${NEW_SLUG}`;

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx)$/.test(name)) yield full;
  }
}

test("the old guide redirects once, permanently, straight to the plateau guide", () => {
  const config = readFileSync("next.config.ts", "utf8");
  const re = new RegExp(`source: "${OLD_PATH}",\\s*destination: "${NEW_URL}",\\s*permanent: true`);
  assert.match(config, re);
  assert.equal(config.split(`source: "${OLD_PATH}"`).length - 1, 1, "listed once");
  assert.ok(!config.includes(`source: "/helpful-guides/${NEW_SLUG}"`), "the target must not redirect again");
  assert.ok(!existsSync(`src/app${OLD_PATH}`), "the old route is gone, so the redirect always runs");
});

test("the old guide is out of the sitemap and the slug registry", () => {
  const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
  const start = sitemap.indexOf("EXCLUDED_SITEMAP_PATHS");
  const block = sitemap.slice(start, sitemap.indexOf("]);", start));
  assert.ok(block.includes(`"${OLD_PATH}"`));
  assert.ok(!readFileSync("src/lib/helpful-guide-slugs.ts", "utf8").includes(OLD_SLUG));
});

test("no source file links to the retired guide", () => {
  const offenders = [];
  for (const file of sourceFiles(join(process.cwd(), "src"))) {
    const rel = relative(process.cwd(), file).replaceAll("\\", "/");
    if (rel === "src/app/sitemap.ts") continue;
    if (readFileSync(file, "utf8").includes(OLD_SLUG)) offenders.push(rel);
  }
  assert.deepEqual(offenders, []);
});

test("the plateau guide is still a normal indexable page", () => {
  const page = readFileSync(`src/app/helpful-guides/${NEW_SLUG}/page.tsx`, "utf8");
  assert.ok(!/robots:\s*\{[^}]*index:\s*false/.test(page));
  assert.ok(page.includes(`slug: "${NEW_SLUG}"`), "keeps its own self-canonical slug");
  assert.ok(readFileSync("src/lib/helpful-guide-slugs.ts", "utf8").includes(`"${NEW_SLUG}"`));
});
