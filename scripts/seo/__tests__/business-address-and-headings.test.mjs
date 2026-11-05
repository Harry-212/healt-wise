import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

// Task 129 (Healthwise360): new business address, no map showing the old one.
// Task 133 follow-up: remaining "cheapest in the UK" headings.
const read = (p) => readFileSync(p, "utf8").replace(/\s+/g, " ");

test("business address is 88 Wood Street, E17 3NU everywhere it is written", () => {
  const c = read("src/lib/site-contact.ts");
  assert.ok(c.includes('street: "88 Wood Street"') && c.includes('postcode: "E17 3NU"'));
  for (const f of [
    "src/app/(informational)/privacy-policy/page.tsx",
    "src/lib/seo/ssot-content.ts",
    "src/components/locations/content/LondonLocationContent.tsx",
  ]) {
    assert.ok(read(f).includes("88 Wood Street"), f);
    assert.ok(!/195[-–]?(197)? ?Wood/.test(read(f)), f);
  }
});

test("the embedded map and Google Maps links are removed", () => {
  assert.ok(!existsSync("src/components/contact/BusinessLocationMap.tsx"));
  for (const f of ["src/app/contact/page.tsx", "src/components/layout/Footer.tsx", "src/lib/site-contact.ts"]) {
    const t = read(f);
    assert.ok(!t.includes("BusinessLocationMap") && !t.includes("google.com/maps"), f);
  }
});

test("price section headings no longer claim the cheapest in the UK", () => {
  assert.ok(!read("src/components/mounjaro/MounjaroCheapestSection.tsx").includes("Where is the cheapest Mounjaro in the UK?"));
  assert.ok(!read("src/components/wegovy/WegovyCheapestSection.tsx").includes("Where is the cheapest Wegovy in the UK?"));
  assert.ok(!read("src/components/prices/CheapestOptionsUkPage.tsx").includes("cheapest place to buy weight loss injections in the UK"));
});
