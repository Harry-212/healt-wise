/**
 * Turns compared rows into the update file that apply.mjs sends to the site:
 *   updates – `update` rows only (the site price to set + the price we expect
 *             to find, so a manual admin edit since the check is not overwritten)
 *   checked – providers whose page was read and needs no human review, so their
 *             "checked on" date moves forward even when nothing changed
 *   review  – listed for the reviewer, never applied automatically
 */
export function buildProposal(rows, runDate) {
  const byProviderMed = new Map();
  for (const r of rows) {
    const key = `${r.providerId}|${r.medication}`;
    if (!byProviderMed.has(key)) byProviderMed.set(key, []);
    byProviderMed.get(key).push(r);
  }

  const checked = [];
  for (const [key, list] of byProviderMed) {
    const read = list.filter((r) => r.action !== "manual");
    if (read.length === 0 || read.some((r) => r.action === "review")) continue;
    const [providerId, medication] = key.split("|");
    checked.push({ medication, providerId });
  }

  return {
    checkedOn: runDate,
    updates: rows
      .filter((r) => r.action === "update")
      .map((r) => ({
        medication: r.medication,
        providerId: r.providerId,
        provider: r.provider,
        dose: r.dose,
        price: r.sitePrice,
        expectedCurrent: r.current,
      })),
    checked,
    review: rows
      .filter((r) => r.action === "review")
      .map((r) => ({
        medication: r.medication,
        providerId: r.providerId,
        provider: r.provider,
        dose: r.dose,
        current: r.current,
        pharmacyStandard: r.pharmacy,
        sitePrice: r.sitePrice,
        comparatorMedian: r.consensus,
        deltaVsComparatorsPct: r.deltaVsConsensus,
        method: r.pharmacyMethod,
      })),
  };
}
