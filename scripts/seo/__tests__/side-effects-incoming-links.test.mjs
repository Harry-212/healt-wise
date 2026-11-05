import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// SEO settings brief for /helpful-guides/mounjaro-side-effects-uk: ten pages link to it. The brief listed two
// redirected pages as sources; the links live on their destinations instead.
const TARGET = "/helpful-guides/mounjaro-side-effects-uk";
const SOURCES = [
  "src/app/(informational)/what-is-mounjaro/page.tsx",
  "src/app/helpful-guides/mounjaro-constipation-relief-uk/page.tsx",
  "src/app/helpful-guides/mounjaro-skin-pain-causes-treatment/page.tsx",
  "src/app/helpful-guides/mounjaro-eligibility-bmi-requirements-uk/page.tsx",
  "src/app/helpful-guides/switching-wegovy-to-mounjaro-uk/page.tsx",
  "src/app/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust/ArticleClient.tsx",
  "src/app/blog/mounjaro-click-calculator-uk/ArticleClient.tsx",
  "src/app/blog/mounjaro-weight-loss-benefits-backed-by-science/ArticleClient.tsx",
  "src/app/helpful-guides/mounjaro-nutrition-guide-uk/page.tsx",
  "src/app/helpful-guides/mounjaro-weight-loss-plateau/page.tsx",
];

test("ten pages link to the side effects guide", () => {
  for (const f of SOURCES) assert.ok(readFileSync(f, "utf8").includes(`"${TARGET}"`), f);
});

test("links are not placed on redirected pages", () => {
  for (const f of [
    "src/app/blog/the-truth-about-mounjaro-dosage-for-weight-loss-effectiveness",
    "src/app/blog/understanding-the-mounjaro-kwikpen-a-user-guide",
  ]) {
    let t = "";
    try { t = readFileSync(`${f}/page.tsx`, "utf8"); } catch { continue; }
    assert.ok(!t.includes(TARGET), f);
  }
});
