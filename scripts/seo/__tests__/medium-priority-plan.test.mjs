import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Medium Priority No Index Plan (2 Nov 2026), Agus steps: pages 1, 7 and 10 redirect
// permanently, pages 11, 17, 18 and 19 return 410 (page 17, /price-alerts, moved from noindex
// to 410 under Task 13), and none of them
// is in the sitemap or linked from the site.
const REDIRECTS = {
  "/blog/best-place-to-start-weight-loss-treatment-online-uk": "/pharmacies",
  "/blog/top-benefits-of-doctor-prescribed-weight-loss-injections-uk-for-you":
    "/helpful-guides/mounjaro-wegovy-health-benefits-uk",
  "/blog/weekly-weight-loss-injections-uk-what-they-may-actually-do":
    "/blog/weight-loss-treatment-uk-complete-guide",
};
const GONE = [
  "/helpful-guides/glp1-content-removed-weight-loss-advice-uk",
  "/support-weight-management",
  "/time-saver",
  "/price-alerts",
];
const NOINDEX = "/price-alerts";

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx)$/.test(name)) yield full;
  }
}

test("pages 1, 7 and 10 each have one permanent redirect, and the target does not redirect again", () => {
  const config = readFileSync("next.config.ts", "utf8");
  for (const [source, destination] of Object.entries(REDIRECTS)) {
    const re = new RegExp(`source: "${source}",\\s*destination: "${destination}",\\s*permanent: true`);
    assert.match(config, re, `${source} must redirect permanently to ${destination}`);
    assert.equal(config.split(`source: "${source}"`).length - 1, 1, `${source} must be listed once`);
    assert.ok(!config.includes(`source: "${destination}"`), `${destination} must not redirect again (chain)`);
  }
});

test("pages 11, 17, 18 and 19 return 410 and page 11's route is gone", () => {
  const gone = readFileSync("src/lib/seo/gone-paths.ts", "utf8");
  for (const path of GONE) {
    assert.equal(gone.split(`"${path}"`).length - 1, 1, `${path} must be in GONE_EXACT_PATHS once`);
  }
  assert.ok(!existsSync("src/app/helpful-guides/glp1-content-removed-weight-loss-advice-uk"));
});

test("every page in the plan is excluded from the sitemap", () => {
  const sitemap = readFileSync("src/app/sitemap.ts", "utf8");
  const start = sitemap.indexOf("EXCLUDED_SITEMAP_PATHS");
  const block = sitemap.slice(start, sitemap.indexOf("]);", start));
  for (const url of [...Object.keys(REDIRECTS), ...GONE, NOINDEX]) {
    assert.ok(block.includes(`"${url}"`), `${url} must be excluded from the sitemap`);
  }
});

test("redirected and removed pages are not linked from the site", () => {
  const retired = [...Object.keys(REDIRECTS), ...GONE];
  const offenders = [];
  for (const file of sourceFiles(join(process.cwd(), "src"))) {
    const rel = relative(process.cwd(), file).replaceAll("\\", "/");
    if (rel === "src/lib/seo/gone-paths.ts" || rel === "src/app/sitemap.ts") continue;
    const text = readFileSync(file, "utf8");
    for (const url of retired) {
      // A redirected page's own files still carry its path (canonical, share link).
      if (rel.startsWith(`src/app${url}/`)) continue;
      if (new RegExp(`["'\`]${url}["'\`/?#]`).test(text)) offenders.push(`${rel}: ${url}`);
    }
  }
  assert.deepEqual(offenders, []);
});
