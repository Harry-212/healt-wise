import { isAffiliatePartner } from "./affiliate-partners";
import {
  WEGOVY_DOSE_KEYS,
  type WegovyUkProviderCompare,
  wegovyPriceAmount,
} from "./wegovy-uk-compare-providers";
import {
  formatDose,
  formatGbp,
  type DoseStat,
  type PriceInsights,
  type PriceRow,
} from "./mounjaro-price-insights";

export { formatDose, formatGbp };
export type { DoseStat, PriceInsights };

export type WegovyDoseKey = (typeof WEGOVY_DOSE_KEYS)[number];
export type WegovyDoseStat = DoseStat<WegovyDoseKey>;
export type WegovyPriceInsights = PriceInsights<WegovyDoseKey>;

export type WegovyCheapestAtDose = {
  id: string;
  name: string;
  price: number;
};

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function doseStat(
  rows: { id: string; name: string; prices: Record<WegovyDoseKey, number | null> }[],
  dose: WegovyDoseKey,
): WegovyDoseStat | null {
  const priced = rows.filter((r) => (r.prices[dose] ?? 0) > 0);
  if (priced.length === 0) return null;
  const price = (r: (typeof rows)[number]) => r.prices[dose] as number;
  const affiliatePriced = priced.filter((r) => isAffiliatePartner(r.id));
  const lowPool = affiliatePriced.length > 0 ? affiliatePriced : priced;
  const lowest = lowPool.reduce((a, b) => (price(a) <= price(b) ? a : b));
  const values = priced.map(price);
  return {
    dose,
    low: price(lowest),
    high: Math.max(...values),
    median: Math.round(median(values)),
    lowProvider: lowest.name,
    listed: priced.length,
  };
}

export function buildWegovyPriceInsights(
  providers: WegovyUkProviderCompare[],
): WegovyPriceInsights | null {
  if (providers.length === 0) return null;

  const rows = providers.map((p) => ({
    id: p.id,
    name: p.name,
    prices: Object.fromEntries(
      WEGOVY_DOSE_KEYS.map((k) => [k, wegovyPriceAmount(p.prices[k])]),
    ) as Record<WegovyDoseKey, number | null>,
  }));

  const doses = WEGOVY_DOSE_KEYS.map((d) => doseStat(rows, d)).filter(
    (s): s is WegovyDoseStat => s !== null,
  );
  if (doses.length === 0) return null;

  const starter = doses.find((d) => d.dose === "0.25mg") ?? doses[0];
  const top = doses.find((d) => d.dose === "2.4mg") ?? doses[doses.length - 1];

  const stepUps: number[] = [];
  for (const r of rows) {
    const s = r.prices["0.25mg"];
    const t = r.prices["2.4mg"];
    if (s != null && s > 0 && t != null && t > 0) {
      stepUps.push(t - s);
    }
  }
  const medianStepUp = stepUps.length > 0 ? Math.round(median(stepUps)) : 0;

  const widest = doses.reduce((a, b) =>
    b.high - b.low > a.high - a.low ? b : a,
  );

  return {
    providerCount: providers.length,
    doses,
    starter,
    top,
    medianStepUp,
    widest,
  };
}

export function cheapestWegovyAtDose(
  providers: WegovyUkProviderCompare[],
  dose: WegovyDoseKey,
  n = 3,
): WegovyCheapestAtDose[] {
  const priced = providers
    .map((p) => ({
      id: p.id,
      name: p.name,
      price: wegovyPriceAmount(p.prices[dose]),
    }))
    .filter((p): p is WegovyCheapestAtDose => p.price != null && p.price > 0);
  const affiliatePriced = priced.filter((p) => isAffiliatePartner(p.id));
  const pool = affiliatePriced.length > 0 ? affiliatePriced : priced;
  return pool.sort((a, b) => a.price - b.price).slice(0, n);
}

export type WegovyMonthCostRow = {
  month: number;
  dose: string;
  low: number;
  typical: number;
};

export type WegovyFirstSixMonthsCostEstimate = {
  rows: WegovyMonthCostRow[];
  totalLow: number;
  totalTypical: number;
};

/**
 * Standard Wegovy titration ladder for the first 6 months:
 * Month 1: 0.25 mg, Month 2: 0.5 mg, Month 3: 1 mg, Month 4: 1.7 mg, Month 5: 2.4 mg, Month 6: 2.4 mg
 */
export const WEGOVY_TITRATION_FIRST_6_MONTHS: readonly WegovyDoseKey[] = [
  "0.25mg",
  "0.5mg",
  "1mg",
  "1.7mg",
  "2.4mg",
  "2.4mg",
];

export function buildWegovyFirstSixMonthsCostEstimate(
  providers: WegovyUkProviderCompare[],
): WegovyFirstSixMonthsCostEstimate {
  const insights = buildWegovyPriceInsights(providers);
  const doseStatMap = new Map<WegovyDoseKey, WegovyDoseStat>();
  if (insights) {
    for (const d of insights.doses) {
      doseStatMap.set(d.dose, d);
    }
  }

  const rows: WegovyMonthCostRow[] = WEGOVY_TITRATION_FIRST_6_MONTHS.map(
    (doseKey, idx) => {
      const stat = doseStatMap.get(doseKey);
      return {
        month: idx + 1,
        dose: doseKey,
        low: stat?.low ?? 0,
        typical: stat?.median ?? 0,
      };
    },
  );

  const totalLow = Math.round(rows.reduce((sum, r) => sum + r.low, 0) * 100) / 100;
  const totalTypical = Math.round(rows.reduce((sum, r) => sum + r.typical, 0) * 100) / 100;

  return {
    rows,
    totalLow,
    totalTypical,
  };
}

