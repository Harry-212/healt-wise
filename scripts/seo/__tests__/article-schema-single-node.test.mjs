import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Task 118 follow-up: an article page must emit its Article node once. Spreading the
// Article object at the top level of a JSON-LD document that also lists it in
// "@graph" defines the same entity twice (about 64 pages did).
function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx)$/.test(name)) yield full;
  }
}

test("no JSON-LD document spreads a node at the top level and repeats it in @graph", () => {
  const spreadThenGraph = /\.\.\.([A-Za-z_]\w*),\s*["']@graph["']:\s*\[([^\]]*)\]/g;
  const offenders = [];
  for (const file of sourceFiles(join(process.cwd(), "src"))) {
    const text = readFileSync(file, "utf8");
    for (const m of text.matchAll(spreadThenGraph)) {
      if (new RegExp(`\\b${m[1]}\\b`).test(m[2])) offenders.push(`${relative(process.cwd(), file)}: ...${m[1]}`);
    }
  }
  assert.deepEqual(offenders, [], "keep only \"@context\" and \"@graph\" at the top level");
});
