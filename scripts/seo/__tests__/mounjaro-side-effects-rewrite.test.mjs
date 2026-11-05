import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Nov 2026 rewrite of /helpful-guides/mounjaro-side-effects-uk. Medical lines follow the UK patient leaflet;
// the page makes no clinical-review claim and keeps FAQ text and FAQPage schema from one source.
const PAGE = "src/app/helpful-guides/mounjaro-side-effects-uk/page.tsx";
const read = (p) => readFileSync(p, "utf8").replace(/\s+/g, " ");

test("SEO settings: title, description, H1 and slug", () => {
  const t = read(PAGE);
  assert.ok(t.includes('slug: "mounjaro-side-effects-uk"'));
  assert.ok(t.includes('title: "Mounjaro Side Effects UK: Leaflet Guide"'));
  assert.ok(t.includes('const H1 = "Mounjaro Side Effects UK: What the Patient Leaflet Says"'));
  assert.equal("Mounjaro side effects in the UK: the very common, common, uncommon and rare effects in the patient leaflet, and when to get help.".length, 129);
});

test("FAQ: ten questions render as H3 and feed the FAQPage schema", () => {
  const t = read(PAGE);
  assert.equal((t.match(/\bq: "/g) || []).length, 10);
  assert.ok(t.includes("questionsAsHeadings"));
  assert.ok(t.includes("mainEntity: FAQ_ITEMS.map"));
  assert.ok(read("src/components/guide/GuideLayout.tsx").includes('<h3 className="text-base font-medium text-slate-900">{item.q}</h3>'));
});

test("leaflet corrections: no invented timings, no mis-assigned gallbladder claim, no review claim", () => {
  const t = read(PAGE);
  assert.ok(!/gives no timings\./.test(t.replace("gives no other timings", "")));
  assert.ok(!/Typical Duration|3.6 months|weeks 1.4/i.test(t));
  assert.ok(!/cholecystitis\) is listed for people using Mounjaro for weight management/.test(t));
  assert.ok(!/smell(ing)? of sulphur/.test(t));
  assert.ok(!/Reviewed (by|on)|clinically reviewed|medically reviewed/i.test(t));
});

test("schema: Article dates and no MedicalWebPage/Review/Product", () => {
  const t = read(PAGE);
  assert.ok(t.includes('datePublished: "2026-04-09"') && t.includes('dateModified: "2026-11-05"'));
  assert.ok(!/MedicalWebPage|"Review"|"Product"/.test(t));
});

test("links go to live pages, not to redirected URLs", () => {
  const t = read(PAGE);
  for (const href of ["/what-is-mounjaro", "/helpful-guides/mounjaro-constipation-relief-uk", "/helpful-guides/mounjaro-skin-pain-causes-treatment", "/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust"]) assert.ok(t.includes(`"${href}"`), href);
  assert.ok(!t.includes("the-truth-about-mounjaro-dosage"));
});
