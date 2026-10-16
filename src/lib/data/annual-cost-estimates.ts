/**
 * Year-one and ongoing cost estimates derived from the live comparison
 * prices, so the annual figures never drift from the table above them.
 *
 * One pen = four weekly doses, so a year is 13 pens. Year one assumes the
 * standard ladder: one pen at each strength below the target, then the
 * target strength for the remaining pens.
 */
export const PENS_PER_YEAR = 13;

export type AnnualCostRow = {
  dose: string;
  /** Cheapest listed provider. */
  low: number;
  /** Median across providers that list every strength needed. */
  typical: number;
};

export type AnnualCostEstimates = {
  yearOne: AnnualCostRow[];
  ongoing: AnnualCostRow[];
};

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

function summarise(
  dose: string,
  allTotals: number[],
  lowTotals?: number[],
): AnnualCostRow | null {
  if (allTotals.length === 0) return null;
  const effectiveLow =
    lowTotals && lowTotals.length > 0 ? lowTotals : allTotals;
  return {
    dose,
    low: Math.round(Math.min(...effectiveLow)),
    typical: Math.round(median(allTotals)),
  };
}

/**
 * @param ladder Pen strengths in titration order.
 * @param targets Strengths people commonly stay on (subset of `ladder`).
 * @param priceRows One entry per provider; `null` means the strength is not sold there.
 * @param lowPriceRows Optional subset of affiliated provider rows for computing `low`.
 */
export function buildAnnualCostEstimates<K extends string>(
  ladder: readonly K[],
  targets: readonly K[],
  priceRows: Record<K, number | null>[],
  lowPriceRows?: Record<K, number | null>[],
): AnnualCostEstimates {
  const yearOne: AnnualCostRow[] = [];
  const ongoing: AnnualCostRow[] = [];
  const lowSource =
    lowPriceRows && lowPriceRows.length > 0 ? lowPriceRows : priceRows;

  for (const target of targets) {
    const steps = ladder.slice(0, ladder.indexOf(target));
    const pensAtTarget = PENS_PER_YEAR - steps.length;

    const computeYearOne = (rows: Record<K, number | null>[]) =>
      rows.flatMap((row) => {
        const path = [...steps, target].map((k) => row[k]);
        if (path.some((p) => p == null)) return [];
        const stepCost = steps.reduce((sum, k) => sum + (row[k] as number), 0);
        return [stepCost + pensAtTarget * (row[target] as number)];
      });

    const computeOngoing = (rows: Record<K, number | null>[]) =>
      rows.flatMap((row) =>
        row[target] == null ? [] : [PENS_PER_YEAR * (row[target] as number)],
      );

    const yearOneTotals = computeYearOne(priceRows);
    const yearOneLowTotals = computeYearOne(lowSource);
    const ongoingTotals = computeOngoing(priceRows);
    const ongoingLowTotals = computeOngoing(lowSource);

    const y1 = summarise(target, yearOneTotals, yearOneLowTotals);
    const on = summarise(target, ongoingTotals, ongoingLowTotals);
    if (y1) yearOne.push(y1);
    if (on) ongoing.push(on);
  }

  return { yearOne, ongoing };
}
