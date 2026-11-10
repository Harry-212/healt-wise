import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

// Nov 2026 rewrite of /helpful-guides/mounjaro-nutrition-guide-uk ("What to Eat on Mounjaro").
// Food advice follows the UK patient leaflet, NHS pages and NHS hospital patient information.
// The page gives no protein figure, no clinical-review claim and builds FAQ text and FAQPage schema from one array.
const PAGE = "src/app/helpful-guides/mounjaro-nutrition-guide-uk/page.tsx";
const read = (p) => readFileSync(p, "utf8").replace(/\s+/g, " ");

test("SEO settings: title within 60 characters with the site suffix, description, canonical slug", () => {
  const t = read(PAGE);
  assert.ok(t.includes('slug: "mounjaro-nutrition-guide-uk"'));
  const title = t.match(/buildGuideShareMetadata\(\{[^}]*?title: "([^"]+)"/)[1];
  assert.equal(title, "What to Eat on Mounjaro UK: Foods to Avoid");
  assert.ok(`${title} | Healthwise360`.length <= 60, "title with suffix is over 60 characters");
  assert.ok(!/Diet Plan/i.test(title), "title must not promise a diet plan");
  const desc = t.match(/const META_DESCRIPTION = "([^"]+)"/)[1];
  assert.ok(desc.length >= 120 && desc.length <= 155, `description length ${desc.length}`);
});

test("FAQ: eight questions as H3, one source for visible text and FAQPage schema", () => {
  const t = read(PAGE);
  assert.equal((t.match(/\bq: "/g) || []).length, 8);
  assert.ok(t.includes("questionsAsHeadings"));
  assert.ok(t.includes("mainEntity: FAQ_ITEMS.map"));
  assert.ok(t.includes("items={FAQ_ITEMS}"));
});

test("no protein figure, no review claim, no medical schema", () => {
  const t = read(PAGE);
  assert.ok(!/1\.2.{0,3}1\.6\s*g|g\/kg/i.test(t), "no protein g/kg figure");
  assert.ok(!/Reviewed (by|on)|clinically reviewed|medically reviewed/i.test(t));
  assert.ok(!/MedicalWebPage|"Review"|"Product"/.test(t));
});

test("schema: site author name, publisher logo kept, original publish date, no 'editorial team' rename", () => {
  const t = read(PAGE);
  assert.ok(t.includes("author: { \"@type\": \"Organization\", name: SITE_ARTICLE_AUTHOR_NAME }"));
  assert.ok(t.includes("/logo-health-wise.webp"));
  assert.ok(t.includes('datePublished: "2026-04-09"') && t.includes('dateModified: "2026-11-10"'));
  assert.ok(!/Healthwise360 editorial team/i.test(t));
  assert.ok(read("src/lib/site-brand.ts").includes('SITE_ARTICLE_AUTHOR_NAME = "Healthwise360 Research Team"'));
});

test("11 sections plus FAQ, and no 'About this page and sources' section", () => {
  const t = read(PAGE);
  assert.equal((t.match(/<GuideSection\b/g) || []).length, 10);
  assert.ok(!/About this page and sources/i.test(t));
});

test("internal links point at live pages", () => {
  const t = read(PAGE);
  const hrefs = [
    "/what-is-mounjaro",
    "/helpful-guides/mounjaro-calorie-cycling-weight-loss",
    "/helpful-guides/mounjaro-side-effects-uk",
    "/helpful-guides/mounjaro-constipation-relief-uk",
    "/helpful-guides/mounjaro-weight-loss-plateau",
    "/helpful-guides/mounjaro-multivitamins-uk",
    "/blog/protein-for-glp-1-users-uk",
    "/blog/fibre-for-glp-1-users",
  ];
  for (const href of hrefs) {
    assert.ok(t.includes(`"${href}"`), `missing link ${href}`);
    const dir = href.startsWith("/blog/")
      ? `src/app${href}`
      : href === "/what-is-mounjaro"
        ? "src/app/(informational)/what-is-mounjaro"
        : `src/app${href}`;
    assert.ok(existsSync(`${dir}/page.tsx`), `no page for ${href}`);
  }
});

test("source links use the corrected NHS and BDA addresses", () => {
  const t = read(PAGE);
  assert.ok(t.includes("https://www.nhs.uk/medicines/tirzepatide/"));
  assert.ok(t.includes("https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/"));
  assert.ok(t.includes("https://www.bda.uk.com/find-a-dietitian.html"));
  assert.ok(!t.includes("tirzepatide-mounjaro/\"") || t.includes("cuh.nhs.uk"));
});

test("incoming links to the nutrition guide from the three pages that needed one", () => {
  for (const p of [
    "src/app/helpful-guides/mounjaro-side-effects-uk/page.tsx",
    "src/app/helpful-guides/mounjaro-multivitamins-uk/page.tsx",
    "src/app/(informational)/what-is-mounjaro/page.tsx",
  ]) {
    assert.ok(read(p).includes("/helpful-guides/mounjaro-nutrition-guide-uk"), p);
  }
});
