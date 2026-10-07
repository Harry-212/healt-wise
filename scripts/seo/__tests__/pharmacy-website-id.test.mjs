import { test } from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { checkSchemaIdConflicts } from "../rules/schema.mjs";

// Imports the REAL .ts source (see structured-data-consistency.test.mjs for
// the same approach on /about/ssot) so this can't silently drift from what
// the site actually renders.
register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const { sharedGraphJsonLd } = await import("@/lib/seo/shared-json-ld.ts");
const pharmacyModule = await import("@/lib/seo/pharmacy-landing-json-ld.ts");

const landingGraphFns = Object.entries(pharmacyModule).filter(([name]) => name.endsWith("LandingJsonGraph"));

function schemaNodesById(...documents) {
  const nodes = [];
  for (const doc of documents) {
    for (const node of doc["@graph"] || []) {
      if (node["@id"]) nodes.push({ id: node["@id"], node });
    }
  }
  return nodes;
}

function websiteCount(...documents) {
  return documents.flatMap((d) => d["@graph"] || []).filter((n) => n["@type"] === "WebSite").length;
}

test(`found pharmacy landing-page JSON-LD generators to check (expected >60)`, () => {
  assert.ok(landingGraphFns.length > 60, `only found ${landingGraphFns.length} — did the export naming change?`);
});

test("regression: no pharmacy landing page declares its own WebSite node any more", () => {
  const offenders = landingGraphFns.filter(([, fn]) => websiteCount(fn()) > 0).map(([name]) => name);
  assert.deepEqual(offenders, [], "these pharmacy pages still declare a duplicate WebSite node");
});

test("regression: every pharmacy landing page combined with the shared graph produces exactly one WebSite node and 0 JSONLD_ID_CONFLICT findings", () => {
  const shared = sharedGraphJsonLd();
  const home = { url: "https://www.healthwise360.co.uk/", schemaNodesById: schemaNodesById(shared) };

  for (const [name, fn] of landingGraphFns) {
    const doc = fn();
    const url = (doc["@graph"] || []).find((n) => n["@type"] === "WebPage")?.url || name;
    const page = { url, schemaNodesById: schemaNodesById(shared, doc) };

    assert.equal(websiteCount(shared, doc), 1, `${name}: expected exactly one WebSite node`);

    const findings = checkSchemaIdConflicts([home, page], { severities: { JSONLD_ID_CONFLICT: "ERROR" } });
    assert.equal(findings.length, 0, `${name}: expected 0 JSONLD_ID_CONFLICT findings, got ${JSON.stringify(findings)}`);
  }
});
