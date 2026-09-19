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

function summarise(dose: string, totals: number[]): AnnualCostRow | null {
  if (totals.length === 0) return null;
  return {
    dose,
    low: Math.round(Math.min(...totals)),
    typical: Math.round(median(totals)),
  };
}

/**
 * @param ladder Pen strengths in titration order.
 * @param targets Strengths people commonly stay on (subset of `ladder`).
 * @param priceRows One entry per provider; `null` means the strength is not sold there.
 */
export function buildAnnualCostEstimates<K extends string>(
  ladder: readonly K[],
  targets: readonly K[],
  priceRows: Record<K, number | null>[],
): AnnualCostEstimates {
  const yearOne: AnnualCostRow[] = [];
  const ongoing: AnnualCostRow[] = [];

  for (const target of targets) {
    const steps = ladder.slice(0, ladder.indexOf(target));
    const pensAtTarget = PENS_PER_YEAR - steps.length;

    const yearOneTotals = priceRows.flatMap((row) => {
      const path = [...steps, target].map((k) => row[k]);
      if (path.some((p) => p == null)) return [];
      const stepCost = steps.reduce((sum, k) => sum + (row[k] as number), 0);
      return [stepCost + pensAtTarget * (row[target] as number)];
    });
    const ongoingTotals = priceRows.flatMap((row) =>
      row[target] == null ? [] : [PENS_PER_YEAR * (row[target] as number)],
    );

    const y1 = summarise(target, yearOneTotals);
    const on = summarise(target, ongoingTotals);
    if (y1) yearOne.push(y1);
    if (on) ongoing.push(on);
  }

  return { yearOne, ongoing };
}
