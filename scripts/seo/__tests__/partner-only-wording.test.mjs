import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Task 125 (HW-04): the price comparison pages describe selected partner pharmacies,
// not the whole UK market. Wording comes from Jeff's Exact wording tab, rows 22-33.
const read = (p) => readFileSync(p, "utf8").replace(/\s+/g, " ");

const FILES = {
  mjHero: "src/components/mounjaro/MounjaroCompareShaderHero.tsx",
  wgHero: "src/components/wegovy/WegovyCompareShaderHero.tsx",
  mjPage: "src/app/mounjaro-price-comparison/page.tsx",
  wgPage: "src/app/wegovy-price-comparison/page.tsx",
  mjDose: "src/components/mounjaro/MounjaroPriceByDoseSection.tsx",
  wgDose: "src/components/wegovy/WegovyPriceByDoseSection.tsx",
  wgSnapshot: "src/components/wegovy/WegovyPriceSnapshot.tsx",
  home: "src/components/ui/PriceSnapshotSection.tsx",
  homeFaqs: "src/lib/routes/home-faqs.ts",
  homeLd: "src/lib/seo/home-json-ld.ts",
  longForm: "src/components/compare/WegovyMounjaroLongFormContent.tsx",
  mjLd: "src/lib/seo/mounjaro-json-ld.ts",
  wgLd: "src/lib/seo/wegovy-json-ld.ts",
  note: "src/components/compare/ComparisonCoverageNote.tsx",
};

test("Mounjaro hero follows the Nov 2026 page content: partner scope, dose range and per-dose lowest prices", () => {
  const t = read(FILES.mjHero);
  assert.ok(t.includes("Our comparison covers selected GPhC registered partners, not the whole UK market."));
  assert.ok(t.includes("Lowest listed Mounjaro price UK by dose:"));
  assert.ok(t.includes("listed pen prices run from"));
  assert.ok(!/The cheapest (Mounjaro|Wegovy) in the UK is/.test(t));
});

test("hero sentences name the lowest listed partner price and the partner scope", () => {
  for (const f of [FILES.wgHero]) {
    const t = read(f);
    assert.match(t, /Among the partner pharmacies we checked, the lowest listed price for a (Mounjaro 2\.5|Wegovy 0\.25) mg starter pen is/);
    assert.match(t, /Our comparison covers selected partners, rather than the whole UK market\./);
    assert.ok(!/The cheapest (Mounjaro|Wegovy) in the UK is/.test(t));
    assert.ok(!t.includes("GPhC registered UK pharmacies, so you can find"));
  }
});

test("Wegovy heading, 1 mg note and starter summary no longer claim every pharmacy", () => {
  assert.ok(read(FILES.wgPage).includes("Compare Wegovy prices at our partner pharmacies"));
  assert.ok(!read(FILES.wgPage).includes("at every pharmacy"));
  assert.ok(read(FILES.wgDose).includes("shows the partner pharmacies in our table that list this strength"));
  assert.ok(!read(FILES.wgDose).includes("shows every pharmacy that sells it"));
  assert.ok(read(FILES.wgSnapshot).includes("The lowest listed Wegovy starter-pen price among the partner pharmacies we checked is"));
  assert.ok(!read(FILES.wgSnapshot).includes("The cheapest Wegovy price in the UK is"));
});

test("dose summaries are qualified as partner listings and keep the live values", () => {
  const listingLabel = {
    [FILES.mjDose]: "Three lowest priced partner listings:",
    [FILES.wgDose]: "Three lowest-priced partner listings:",
  };
  for (const f of [FILES.mjDose, FILES.wgDose]) {
    const t = read(f);
    assert.ok(t.includes("Among our checked partner listings, the lowest"));
    assert.ok(t.includes("The median price among our checked partner listings is"));
    assert.ok(t.includes(listingLabel[f]));
    assert.ok(!t.includes("Most pharmacies charge about"));
    assert.ok(!t.includes("Cheapest 3:"));
    assert.ok(t.includes("formatGbp(d.low)") && t.includes("formatGbp(d.median)") && t.includes("formatGbp(d.high)"));
  }
});

test("the median label is only used where the figure is a real median", () => {
  for (const f of ["src/lib/data/mounjaro-price-insights.ts", "src/lib/data/wegovy-price-insights.ts"]) {
    const t = read(f);
    assert.match(t, /function median\(values: number\[\]\): number \{ const sorted = \[\.\.\.values\]\.sort\(\(a, b\) => a - b\); const mid = Math\.floor\(sorted\.length \/ 2\); return sorted\.length % 2 \? sorted\[mid\] : \(sorted\[mid - 1\] \+ sorted\[mid\]\) \/ 2;/);
    assert.match(t, /median: Math\.round\(median\(values\)\)/);
  }
});

test("the coverage paragraph links to /methodology and sits above the table on all four pages", () => {
  const note = read(FILES.note);
  assert.ok(note.includes("We compare selected partner pharmacies, rather than the whole UK market."));
  assert.ok(note.includes("calculated from the partner listings included in this comparison. Check the price-check date and any applicable conditions before ordering."));
  assert.ok(note.includes('href="/methodology"') && note.includes("How our comparison works"));
  const before = (file, tableMarker) => {
    const t = read(file);
    const a = t.indexOf("<ComparisonCoverageNote");
    const b = t.indexOf(tableMarker);
    assert.ok(a > -1 && b > -1 && a < b, `${file}: note must come before ${tableMarker}`);
  };
  before(FILES.home, 'className="mt-6 overflow-x-auto');
  before(FILES.mjPage, "<MounjaroUkCompareTable");
  before(FILES.wgPage, "<WegovyUkCompareTable");
  before(FILES.longForm, "Wegovy vs Mounjaro prices at our latest check");
});

test("homepage anchor, FAQ and dataset match the supplied wording", () => {
  assert.ok(read(FILES.home).includes("See our partner pharmacies and listed doses"));
  assert.ok(read(FILES.home).includes('href="/compare/wegovy-vs-mounjaro"'), "destination unchanged");
  const faq = read(FILES.homeFaqs);
  assert.ok(faq.includes("Which of your partner pharmacies has the lowest listed price?"));
  assert.ok(faq.includes("The lowest listed price varies by medicine and dose."));
  assert.ok(!faq.includes("Which pharmacy has the cheapest weight loss injections?"));
  const ld = read(FILES.homeLd);
  assert.ok(!ld.includes("Typical price"), "the table no longer shows a typical column");
});

test("the Mounjaro and Wegovy FAQ schema no longer asks for the cheapest in the UK", () => {
  assert.ok(read(FILES.mjLd).includes("Which of our partner pharmacies has the lowest listed Mounjaro price?"));
  assert.ok(read(FILES.wgLd).includes("Which of our partner pharmacies has the lowest listed Wegovy price?"));
  assert.ok(!read(FILES.mjLd).includes("cheapest Mounjaro supplier in the UK"));
  assert.ok(!read(FILES.wgLd).includes("cheapest Wegovy provider in the UK"));
  assert.ok(!read(FILES.mjPage).includes("Find the cheapest Mounjaro in the UK"));
});
