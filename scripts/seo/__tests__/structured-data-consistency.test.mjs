import { test } from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { pathToFileURL } from "node:url";
import { checkSchema, checkSchemaIdConflicts } from "../rules/schema.mjs";

// Imports the REAL .ts source (not a hand-copied fixture) via a custom
// resolve hook for the `@/*` -> `src/*` alias, so this test can't silently
// drift from what the site actually renders. Node's built-in TypeScript
// type-stripping handles the .ts syntax itself.
register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const { sharedGraphJsonLd } = await import("@/lib/seo/shared-json-ld.ts");
const { ssotPageJsonLd } = await import("@/lib/seo/ssot-page-seo.ts");

/** Flattens a JSON-LD document's @graph into the {@id, node} list extract.mjs's extractJsonLd() would produce. */
function schemaNodesById(...documents) {
  const nodes = [];
  for (const doc of documents) {
    for (const node of doc["@graph"] || []) {
      if (node["@id"]) nodes.push({ id: node["@id"], node });
    }
  }
  return nodes;
}

function organizationCount(...documents) {
  return documents.flatMap((d) => d["@graph"] || []).filter((n) => n["@type"] === "Organization").length;
}

/**
 * Every page on the real site renders layout.tsx's sharedGraphJsonLd() plus
 * whatever page-specific JSON-LD it declares — this mirrors that for a
 * generic page (e.g. the homepage) and for /about/ssot.
 */
function pageRecord(url, ...documents) {
  return {
    url,
    httpStatus: 200,
    organizationCount: organizationCount(...documents),
    schemaNodesById: schemaNodesById(...documents),
    schemaTypes: [],
  };
}

test("Task 34 regression: /about/ssot no longer declares its own Organization node", () => {
  const graph = ssotPageJsonLd("2026-10-07")["@graph"];
  const orgNodes = graph.filter((n) => n["@type"] === "Organization");
  assert.equal(orgNodes.length, 0, "ssotPageJsonLd() must not declare an Organization node of its own");
});

test("Task 34 regression: /about/ssot + the shared graph produce exactly one Organization node, matching every other page", () => {
  const shared = sharedGraphJsonLd();
  const home = pageRecord("https://www.healthwise360.co.uk/", shared);
  const ssot = pageRecord("https://www.healthwise360.co.uk/about/ssot", shared, ssotPageJsonLd("2026-10-07"));

  assert.equal(home.organizationCount, 1);
  assert.equal(ssot.organizationCount, 1, "the previous bug declared 2 Organization nodes on /about/ssot");

  const findings = [
    ...checkSchema(home, { severities: { JSONLD_MULTIPLE_ORGANIZATION: "ERROR" } }),
    ...checkSchema(ssot, { severities: { JSONLD_MULTIPLE_ORGANIZATION: "ERROR" } }),
    ...checkSchemaIdConflicts([home, ssot], { severities: { JSONLD_ID_CONFLICT: "ERROR" } }),
  ];
  assert.equal(findings.length, 0, `expected no findings, got: ${JSON.stringify(findings)}`);
});

test("Task 34 sub-task 2: the shared Organization carries foundingDate but not the pending-ED-03 areaServed claim", () => {
  const org = sharedGraphJsonLd()["@graph"].find((n) => n["@type"] === "Organization");
  assert.equal(org.foundingDate, "2026");
  assert.equal(org.areaServed, undefined, "areaServed is Task 36's call (pending ED-03), not Task 34's to add");
});

test("Task 34 sub-task 3: the founder Person node on /about/ssot has the same description as the canonical profile page", () => {
  const person = ssotPageJsonLd("2026-10-07")["@graph"].find((n) => n["@type"] === "Person");
  // Mirrors the canonical Person node's description on /editorial-team/alistair-greenwood
  // (src/app/(informational)/editorial-team/alistair-greenwood/page.tsx's profilePageJsonLd) —
  // that file isn't importable here (a .tsx page component), so this is the
  // known-correct text as of the Task 34 fix; update both together if it changes.
  assert.equal(
    person.description,
    "Founder of Healthwise360 and weight-management pricing researcher. Not a healthcare professional.",
  );
});
