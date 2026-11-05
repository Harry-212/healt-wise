import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Low Priority No Index Plan, page 3: /blog/why-does-belly-fat-increase-after-40 is the one belly fat
// page and receives links from the menopause, nutrition and protein pages. The merged and redirected
// belly fat addresses must not be linked.
const TARGET = "/blog/why-does-belly-fat-increase-after-40";
const SOURCES = [
  "src/app/helpful-guides/mounjaro-menopause-weight-loss-uk/page.tsx",
  "src/app/helpful-guides/mounjaro-nutrition-guide-uk/page.tsx",
  "src/app/blog/protein-for-glp-1-users-uk/ArticleClient.tsx",
];

test("menopause, nutrition and protein pages each link to the belly fat page", () => {
  for (const f of SOURCES) assert.ok(readFileSync(f, "utf8").includes(`"${TARGET}"`), f);
});

test("those pages do not link to the redirected hormones page or the stress page", () => {
  for (const f of SOURCES) {
    const t = readFileSync(f, "utf8");
    assert.ok(!t.includes("/blog/can-hormones-cause-belly-fat-after-40"), f);
    assert.ok(!t.includes("/blog/does-stress-cause-belly-fat"), f);
  }
});
