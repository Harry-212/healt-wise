import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Task 13: /price-alerts is retired with a direct HTTP 410 Gone. The URL used to be a
// noindex page with a disabled form and no backend; it must never come back as 200,
// a redirect or a noindex-only page, and nothing may link to it or list it in the sitemap.
const PATH = "/price-alerts";

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx|mjs)$/.test(name)) yield full;
  }
}

test("/price-alerts is registered once as a 410 path", async () => {
  const gone = readFileSync("src/lib/seo/gone-paths.ts", "utf8");
  assert.equal(gone.split(`"${PATH}"`).length - 1, 1);
  const { GONE_EXACT_PATHS } = await import("../../../src/lib/seo/gone-paths.ts");
  assert.ok(GONE_EXACT_PATHS.includes(PATH));
});

test("next.config rewrites every gone path to the 410 handler and does not redirect /price-alerts", () => {
  const config = readFileSync("next.config.ts", "utf8");
  assert.match(config, /GONE_EXACT_PATHS\.map\(\(source\) => \(\{\s*source,\s*destination: GONE_REWRITE_DESTINATION/);
  assert.ok(!config.includes(`source: "${PATH}"`), "/price-alerts must not be listed in redirects()");
  assert.match(readFileSync("src/app/api/gone/route.ts", "utf8"), /status: 410/);
});

test("the old page, its form and its noindex handling are deleted", () => {
  assert.ok(!existsSync("src/app/(informational)/price-alerts"));
  assert.ok(!existsSync("src/app/price-alerts"));
});

test("nothing in the source links to /price-alerts and it stays out of the sitemap", () => {
  const offenders = [];
  for (const file of sourceFiles(join(process.cwd(), "src"))) {
    const rel = relative(process.cwd(), file).replaceAll("\\", "/");
    if (rel === "src/lib/seo/gone-paths.ts" || rel === "src/app/sitemap.ts") continue;
    if (new RegExp(`["'\`]${PATH}["'\`/?#]`).test(readFileSync(file, "utf8"))) offenders.push(rel);
  }
  assert.deepEqual(offenders, []);
  const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
  const start = sitemap.indexOf("EXCLUDED_SITEMAP_PATHS");
  assert.ok(sitemap.slice(start, sitemap.indexOf("]);", start)).includes(`"${PATH}"`));
});
