import { finding } from "../lib/finding.mjs";

const REVIEW_WORTHY_TYPES = ["MedicalWebPage", "SoftwareApplication"];

/** JSON-LD validity (per page), Organization duplicates, type suitability, and Schema-vs-visible mismatches. */
export function checkSchema(record, { severities }) {
  if (record.httpStatus !== 200) return [];
  const findings = [];

  for (const block of record.schemaInvalidBlocks || []) {
    findings.push(
      finding({
        severity: severities.JSONLD_INVALID,
        url: record.url,
        rule: "JSONLD_INVALID",
        problem: "A JSON-LD block does not parse as valid JSON.",
        expected: "All JSON-LD blocks parse without error.",
        evidence: block.error,
      }),
    );
  }

  if (record.organizationCount > 1) {
    findings.push(
      finding({
        severity: severities.JSONLD_MULTIPLE_ORGANIZATION,
        url: record.url,
        rule: "JSONLD_MULTIPLE_ORGANIZATION",
        problem: "The page emits more than one Organization node.",
        expected: "At most one Organization node per page.",
        evidence: `organizationCount: ${record.organizationCount}`,
      }),
    );
  }

  const reviewType = (record.schemaTypes || []).find((t) => REVIEW_WORTHY_TYPES.includes(t));
  if (reviewType) {
    findings.push(
      finding({
        severity: severities.SCHEMA_TYPE_SUITABILITY,
        url: record.url,
        rule: "SCHEMA_TYPE_SUITABILITY",
        problem: `The page uses the "${reviewType}" Schema type.`,
        expected: `${reviewType} is used only where genuinely appropriate.`,
        evidence: `schemaTypes: ${(record.schemaTypes || []).join(", ")}`,
      }),
    );
  }

  if (
    record.authorVisible &&
    record.authorSchema?.length &&
    !record.authorSchema.includes(record.authorVisible)
  ) {
    findings.push(
      finding({
        severity: severities.SCHEMA_VS_VISIBLE_MISMATCH,
        url: record.url,
        rule: "SCHEMA_VS_VISIBLE_MISMATCH",
        problem: "The author in Schema does not match the visible byline.",
        expected: "Schema author matches the visible page.",
        evidence: `schema: ${record.authorSchema.join(", ")} | visible: ${record.authorVisible}`,
      }),
    );
  }

  return findings;
}

/** Stable JSON.stringify (sorted keys) so two objects with the same content compare equal regardless of key order. */
function stableStringify(value) {
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  if (value && typeof value === "object") {
    const keys = Object.keys(value).sort();
    return `{${keys.map((k) => `${JSON.stringify(k)}:${stableStringify(value[k])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

/**
 * Cross-page: the same @id used for different content on different pages. A
 * shared singleton (the same Organization/WebSite node repeated identically
 * site-wide, as Phase 2's shared Schema generators are meant to produce) is
 * expected and not flagged — only a genuine mismatch is.
 */
export function checkSchemaIdConflicts(allRecords, { severities }) {
  const idToEntries = new Map();
  for (const record of allRecords) {
    for (const { id, node } of record.schemaNodesById || []) {
      if (!idToEntries.has(id)) idToEntries.set(id, []);
      idToEntries.get(id).push({ url: record.url, node, signature: stableStringify(node) });
    }
  }

  const findings = [];
  for (const [id, entries] of idToEntries) {
    const signatures = new Set(entries.map((e) => e.signature));
    if (signatures.size <= 1) continue;

    for (const entry of entries) {
      const conflicting = entries.filter((e) => e.url !== entry.url && e.signature !== entry.signature);
      if (!conflicting.length) continue;
      findings.push(
        finding({
          severity: severities.JSONLD_ID_CONFLICT,
          url: entry.url,
          rule: "JSONLD_ID_CONFLICT",
          problem: "The same Schema @id is used for different content on another page.",
          expected: "A Schema @id identifies the same node everywhere it is used.",
          evidence: `@id "${id}" differs from its version on: ${conflicting.map((c) => c.url).join(", ")}`,
        }),
      );
    }
  }
  return findings;
}
