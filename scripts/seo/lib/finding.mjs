export function finding({ severity, url, rule, problem, expected, evidence }) {
  return { severity, url, rule, problem, expected, evidence, exception: null };
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
