const MONTHS = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

/**
 * Parses the check-date labels used in the price data ("20 Sep 2026",
 * "20 September 2026", "April 2026") to a comparable yyyy-mm-dd key.
 * Month-only labels resolve to "yyyy-mm". Returns null when unrecognised.
 */
export function priceCheckDateKey(label: string | undefined): string | null {
  if (!label) return null;
  const m = label.trim().match(/^(?:(\d{1,2})\s+)?([A-Za-z]+)\s+(\d{4})$/);
  if (!m) return null;
  const month = MONTHS.indexOf(m[2].slice(0, 3).toLowerCase());
  if (month < 0) return null;
  const mm = String(month + 1).padStart(2, "0");
  return m[1] ? `${m[3]}-${mm}-${m[1].padStart(2, "0")}` : `${m[3]}-${mm}`;
}

export type PriceCheckSummary = {
  total: number;
  /** Providers whose own check date matches the latest update. */
  onLatest: number;
};

/**
 * How many providers were checked on the page's latest update date, so the
 * page can say so instead of implying every price was checked that day.
 */
export function summarisePriceChecks(
  providerLabels: (string | undefined)[],
  latestLabel: string,
): PriceCheckSummary {
  const latest = priceCheckDateKey(latestLabel);
  return {
    total: providerLabels.length,
    onLatest: providerLabels.filter(
      (l) => latest != null && priceCheckDateKey(l) === latest,
    ).length,
  };
}
