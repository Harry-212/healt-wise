import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

// Task 136: the Huel pages were removed (PR #112) and answered 404. They are retired with a
// direct 410, must stay out of the sitemap, and nothing may link to them.
const PATHS = ["/protein-and-fitness", "/eat-healthier"];

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx|mjs)$/.test(name)) yield full;
  }
}

test("the Huel paths are registered once each as 410 paths", async () => {
  const gone = readFileSync("src/lib/seo/gone-paths.ts", "utf8");
  const { GONE_EXACT_PATHS } = await import("../../../src/lib/seo/gone-paths.ts");
  for (const path of PATHS) {
    assert.equal(gone.split(`"${path}"`).length - 1, 1, `${path} must be listed exactly once`);
    assert.ok(GONE_EXACT_PATHS.includes(path), `${path} must be in GONE_EXACT_PATHS`);
  }
});

test("no page route exists for the Huel paths", () => {
  const routes = readdirSync("src/app");
  for (const path of PATHS) assert.ok(!routes.includes(path.slice(1)), `${path} must not have a route`);
});

test("nothing in src links to the Huel paths", () => {
  const allowed = new Set([join("src", "lib", "seo", "gone-paths.ts")]);
  for (const file of sourceFiles("src")) {
    if (allowed.has(file)) continue;
    const text = readFileSync(file, "utf8");
    for (const path of PATHS) {
      assert.ok(!text.includes(`"${path}"`) && !text.includes(`'${path}'`), `${file} must not reference ${path}`);
    }
  }
});
