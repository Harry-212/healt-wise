export function finding({ severity, url, rule, problem, expected, evidence }) {
  return { severity, url, rule, problem, expected, evidence, exception: null };
}

function normaliseEvidence(evidence) {
  return String(evidence ?? "").replace(/\s+/g, " ").trim();
}

/** DEV-02: a finding's identity is its severity, rule, URL and (normalised) evidence — not which rule invocation produced it. */
export function findingKey(f) {
  return [f.severity, f.rule, f.url, normaliseEvidence(f.evidence)].join("||");
}

/**
 * Collapses exact-duplicate findings (same severity, rule, URL and
 * normalised evidence) into one row carrying an `occurrences` count, so a
 * single underlying issue reported several times — e.g. by duplicate ledger
 * rows upstream, or a rule invoked more than once for the same page — is not
 * counted as several distinct issues. DEV-02: "Deduplicate findings by
 * severity, rule, URL and evidence"; "distinguish repeated events from
 * distinct findings".
 */
export function dedupeFindings(findings) {
  const byKey = new Map();
  for (const f of findings) {
    const key = findingKey(f);
    const existing = byKey.get(key);
    if (existing) {
      existing.occurrences += 1;
    } else {
      byKey.set(key, { ...f, occurrences: 1 });
    }
  }
  return [...byKey.values()];
}

function isExpired(exception, now) {
  return exception.expires ? new Date(exception.expires) < now : false;
}

/**
 * Marks findings suppressed by a matching, non-expired entry in seo-exceptions.json.
 * Expired exceptions are left to re-surface rather than silently dropped.
 */
export function applyExceptions(findings, exceptions, now = new Date()) {
  return findings.map((f) => {
    const match = exceptions.find(
      (e) => e.url === f.url && e.rule === f.rule && !isExpired(e, now),
    );
    return match ? { ...f, exception: match } : f;
  });
}
