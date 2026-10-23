/**
 * Links comparator rows to our providers: GPhC number first (unambiguous),
 * then website domain, then a normalised name.
 */

export function normaliseName(s) {
  return String(s ?? "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/&/g, "and")
    .replace(/\b(online doctor|online pharmacy|pharmacy|chemist|clinic|uk|ltd|limited|health|healthcare|the|powered by \w+)\b/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export function buildMatcher(ourProviders) {
  const byGphc = new Map();
  const byDomain = new Map();
  const byName = new Map();
  for (const p of ourProviders) {
    if (p.gphc) byGphc.set(p.gphc, p.id);
    for (const d of p.domains ?? []) byDomain.set(d, p.id);
    const n = normaliseName(p.name);
    if (n) byName.set(n, p.id);
  }
  return (row) => {
    if (row.gphc && byGphc.has(row.gphc)) return { id: byGphc.get(row.gphc), via: "gphc" };
    if (row.domain && byDomain.has(row.domain)) return { id: byDomain.get(row.domain), via: "domain" };
    const n = normaliseName(row.name);
    if (n && byName.has(n)) return { id: byName.get(n), via: "name" };
    return null;
  };
}

/**
 * A GPhC number belongs to the dispensing pharmacy, and several brands can
 * share one (e.g. a clinic's plans listed separately). When one site maps
 * several differently-named entries onto the same provider, keep only those
 * that also match by domain or name; if none do, the match is ambiguous and
 * dropped rather than guessed.
 */
export function dropAmbiguousMatches(rows) {
  const groups = new Map();
  for (const r of rows) {
    const key = `${r.site}|${r.ourId}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  }
  const kept = [];
  const dropped = [];
  for (const group of groups.values()) {
    const names = new Set(group.map((r) => r.name));
    if (names.size <= 1) {
      kept.push(...group);
      continue;
    }
    const strong = group.filter((r) => r.via !== "gphc");
    if (strong.length > 0) kept.push(...strong);
    dropped.push(...group.filter((r) => !strong.includes(r)));
  }
  return { kept, dropped };
}
