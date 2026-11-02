import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { checkSchemaIdConflicts } from "../rules/schema.mjs";

// Task 118: Organization and WebSite are defined once, in the site-wide graph that every
// page already renders. Page graphs only reference them by @id. Before this, six page
// types redefined both with different properties (duplicate @id on live pages).
register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const { sharedGraphJsonLd } = await import("@/lib/seo/shared-json-ld.ts");
const { homePageJsonLdGraph } = await import("@/lib/seo/home-json-ld.ts");
const { wegovyTabletFaqsJsonLd } = await import("@/lib/seo/wegovy-tablet-faqs-json-ld.ts");
const { whatIsWegovyPillJsonLd } = await import("@/lib/seo/what-is-wegovy-pill-json-ld.ts");
const { foundayoFaqsJsonLd } = await import("@/lib/seo/foundayo-faqs-json-ld.ts");
const { pillPriceJsonLd } = await import("@/lib/seo/pill-price-json-ld.ts");

const PAGES = {
  home: () => homePageJsonLdGraph(),
  "wegovy-tablet-faqs": () => wegovyTabletFaqsJsonLd(),
  "what-is-wegovy-pill": () => whatIsWegovyPillJsonLd(),
  "foundayo-faqs": () => foundayoFaqsJsonLd(),
  "pill price page": () =>
    pillPriceJsonLd({
      path: "/example",
      title: "t",
      headline: "h",
      description: "d",
      aboutName: "a",
      breadcrumbName: "b",
      dateModified: "2026-10-31",
      faqs: [],
    }),
};

function nodes(doc) {
  return doc["@graph"] || [];
}

function byType(docs, type) {
  return docs.flatMap(nodes).filter((n) => n["@type"] === type);
}

test("each page graph plus the shared graph has exactly one Organization and one WebSite", () => {
  const shared = sharedGraphJsonLd();
  for (const [label, build] of Object.entries(PAGES)) {
    const page = build();
    assert.equal(byType([shared, page], "Organization").length, 1, `${label}: Organization`);
    assert.equal(byType([shared, page], "WebSite").length, 1, `${label}: WebSite`);
    assert.equal(byType([page], "Organization").length, 0, `${label} must not redefine Organization`);
    assert.equal(byType([page], "WebSite").length, 0, `${label} must not redefine WebSite`);
  }
});

test("the shared graph with each page graph has no @id conflict", () => {
  const shared = sharedGraphJsonLd();
  const index = (...docs) => {
    const list = [];
    for (const doc of docs) for (const n of nodes(doc)) if (n["@id"]) list.push({ id: n["@id"], node: n });
    return list;
  };
  for (const [label, build] of Object.entries(PAGES)) {
    const page = build();
    const url = nodes(page).find((n) => n["@type"] === "WebPage")?.url || "/";
    const findings = checkSchemaIdConflicts(
      [
        { url: "https://www.healthwise360.co.uk/", schemaNodesById: index(shared) },
        { url, schemaNodesById: index(shared, page) },
      ],
      { severities: { JSONLD_ID_CONFLICT: "ERROR" } },
    );
    assert.equal(findings.length, 0, `${label}: ${JSON.stringify(findings)}`);
  }
});

test("only the shared graph defines the Organization and WebSite entities", () => {
  const SRC = join(process.cwd(), "src");
  const offenders = [];
  function* files(dir) {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) yield* files(full);
      else if (/\.(ts|tsx)$/.test(name)) yield full;
    }
  }
  for (const file of files(SRC)) {
    const rel = relative(process.cwd(), file).replaceAll("\\", "/");
    if (rel === "src/lib/seo/shared-json-ld.ts") continue;
    const text = readFileSync(file, "utf8");
    // a node that gives itself the shared @id is a redefinition; a bare { "@id": ... } is a reference
    if (/"@type":\s*"(Organization|WebSite)",\s*"@id":\s*`\$\{[^}]+\}\/#(organization|website)`/.test(text)) {
      offenders.push(rel);
    }
    if (/"@type":\s*"WebSite",\s*"@id"/.test(text)) offenders.push(rel);
  }
  assert.deepEqual([...new Set(offenders)], []);
});
