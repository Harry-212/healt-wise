/**
 * DEV-01 fix: separates the "request ledger" (one row per fetch attempt —
 * every requested URL, including legacy aliases and internal links that all
 * redirect to the same place) from the "destination inventory" (one row per
 * unique final URL). Before this, a page reached via several different
 * requested paths produced several near-identical inventory rows — e.g. the
 * Mounjaro price page appeared 9 times with different inherited page types,
 * because each row kept whatever classification its own requested path
 * happened to produce.
 *
 * Preserves query parameters in the destination key (DEV-01: "preserve query
 * parameters unless an explicit equivalence policy proves they can be
 * removed") — this is deliberately stricter than the path-only normalisation
 * used for sitemap/frontier comparisons elsewhere, which answer a different
 * question ("did we already queue this path to crawl?", "is this path listed
 * in sitemap.xml?") rather than "is this the same final destination?".
 */
export function destinationKey(url) {
  try {
    const u = new URL(url);
    const pathname = u.pathname.replace(/\/$/, "").toLowerCase() || "/";
    return u.search ? `${pathname}${u.search}` : pathname;
  } catch {
    return String(url).replace(/\/$/, "").toLowerCase();
  }
}

/**
 * Groups ledger rows (one per fetch attempt) by final destination. Rows that
 * errored before a final URL was known are kept as their own ledger entries
 * but grouped by their requested URL instead (there is no final destination
 * to merge them into).
 *
 * The canonical destination row is the first successful fetch in BFS/crawl
 * order; other ledger rows for the same destination contribute their
 * requestedUrl and discoverySource into the destination's alias lists rather
 * than producing a second inventory row. Because page type is now classified
 * from the final URL (see export.mjs's exportOne), every row in a group is
 * expected to already agree on pageType — group membership itself doubles as
 * a consistency check.
 */
export function buildDestinationInventory(ledgerRecords) {
  const destinations = new Map(); // destinationKey -> destination record

  for (const record of ledgerRecords) {
    const key = record.error ? `error:${destinationKey(record.requestedUrl)}` : destinationKey(record.url);

    if (!destinations.has(key)) {
      destinations.set(key, {
        ...record,
        requestedUrlAliases: [record.requestedUrl],
        discoverySources: record.discoverySource ? [record.discoverySource] : [],
      });
      continue;
    }

    const existing = destinations.get(key);
    if (!existing.requestedUrlAliases.includes(record.requestedUrl)) {
      existing.requestedUrlAliases.push(record.requestedUrl);
    }
    if (record.discoverySource && !existing.discoverySources.includes(record.discoverySource)) {
      existing.discoverySources.push(record.discoverySource);
    }
  }

  return [...destinations.values()];
}
