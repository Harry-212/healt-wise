import { test } from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { readFileSync } from "node:fs";

register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);

const { siteOrigin } = await import("@/lib/seo/site-origin.ts");
const { PRICE_CHECK_DATE_ISO } = await import("@/lib/data/price-check.ts");
const { whatIsMounjaroPageJsonLd } = await import("@/lib/seo/mounjaro-json-ld.ts");
const { whatIsWegovyPageJsonLd } = await import("@/lib/seo/wegovy-json-ld.ts");

const read = (f) => readFileSync(f, "utf8");
const base = siteOrigin();
const PERSON_ID = `${base}/editorial-team/alistair-greenwood#person`;

// Task 150: Jeff confirmed Alistair Greenwood as author. No clinical-review attribution is authorised.
const PAGES = [
  ["what-is-mounjaro", () => whatIsMounjaroPageJsonLd(), "src/app/(informational)/what-is-mounjaro/page.tsx"],
  ["what-is-wegovy", () => whatIsWegovyPageJsonLd(), "src/app/(informational)/what-is-wegovy/page.tsx"],
];

for (const [slug, build, pageFile] of PAGES) {
  test(`/${slug}: structured data names Alistair as author by reference, keeps publisher, adds no reviewer`, () => {
    const graph = build()["@graph"];
    const webpage = graph.find((n) => n["@type"] === "WebPage");
    assert.deepEqual(webpage.author, {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Alistair Greenwood",
      url: `${base}/editorial-team/alistair-greenwood`,
    });
    assert.deepEqual(webpage.publisher, { "@id": `${base}/#organization` });
    assert.equal(graph.filter((n) => n["@type"] === "Person").length, 0, "no second Person node on the page");
    const json = JSON.stringify(graph);
    assert.ok(!/reviewedBy|lastReviewed/.test(json), "no reviewer fields");
    assert.equal(webpage.dateModified, PRICE_CHECK_DATE_ISO, "dateModified matches the date shown as Last updated");
  });

  test(`/${slug}: visible byline links to the profile and the date is labelled Last updated`, () => {
    const src = read(pageFile);
    assert.match(src, /<GuideAuthorByline \/>/);
    assert.ok(!/Last reviewed/.test(src), "no 'Last reviewed' label");
    assert.match(src, /Last updated \$?\{/);
    // the byline sits immediately before the date in the trust-chip row
    assert.ok(src.indexOf("<GuideAuthorByline />") < src.indexOf("Last updated"));
  });
}

test("the byline component names and links Alistair and makes no clinical claim", () => {
  const src = read("src/components/ui/GuideAuthorByline.tsx");
  assert.match(src, /Written by/);
  assert.match(src, /href=\{ALISTAIR_GREENWOOD_PROFILE_PATH\}/);
  assert.ok(!/clinician|medically|reviewed by|GPhC|doctor/i.test(src));
  const ref = read("src/lib/seo/author-ref.ts");
  assert.match(ref, /\/editorial-team\/alistair-greenwood/);
});
