import { isAffiliatePartner } from "./affiliate-partners";
import {
  MOUNJARO_DOSE_KEYS,
  type MounjaroUkProviderCompare,
} from "./mounjaro-uk-compare-providers";

type DoseKey = (typeof MOUNJARO_DOSE_KEYS)[number];

export type DoseStat<K extends string = string> = {
  dose: K;
  low: number;
  high: number;
  median: number;
  lowProvider: string;
  /** Providers with a listed price at this strength. */
  listed: number;
};

export type PriceInsights<K extends string = string> = {
  providerCount: number;
  doses: DoseStat<K>[];
  starter: DoseStat<K>;
  top: DoseStat<K>;
  /** Median of each provider's own starter → top price increase. */
  medianStepUp: number;
  /** Dose with the widest gap between lowest and highest listed price. */
  widest: DoseStat<K>;
};

export type MounjaroDoseStat = DoseStat<DoseKey>;
export type MounjaroPriceInsights = PriceInsights<DoseKey>;

/** One provider's listed price per strength; null = not listed. */
export type PriceRow<K extends string> = {
  id?: string;
  name: string;
  prices: Record<K, number | null>;
};

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function doseStat<K extends string>(
  rows: PriceRow<K>[],
  dose: K,
): DoseStat<K> | null {
  const priced = rows.filter((r) => (r.prices[dose] ?? 0) > 0);
  if (priced.length === 0) return null;
  const price = (r: PriceRow<K>) => r.prices[dose] as number;
  const affiliatePriced = priced.filter((r) =>
    r.id ? isAffiliatePartner(r.id) : false,
  );
  const lowPool = affiliatePriced.length > 0 ? affiliatePriced : priced;
  const lowest = lowPool.reduce((a, b) => (price(a) <= price(b) ? a : b));
  const values = priced.map(price);
  return {
    dose,
    low: price(lowest),
    high: Math.max(...values),
    // Rounded: an even-count median can land on odd pence (e.g. £179.48).
    median: Math.round(median(values)),
    lowProvider: lowest.name,
    listed: priced.length,
  };
}

/**
 * Figures for the page copy, derived from the live table so the text stays
 * correct whenever prices are updated in the admin.
 *
 * @param starterKey / topKey Strengths used for the per-provider step-up.
 */
export function buildDosePriceInsights<K extends string>(
  rows: PriceRow<K>[],
  doseKeys: readonly K[],
  starterKey: K = doseKeys[0],
  topKey: K = doseKeys[doseKeys.length - 1],
): PriceInsights<K> | null {
  const doses = doseKeys
    .map((k) => doseStat(rows, k))
    .filter((s): s is DoseStat<K> => s !== null);
  if (doses.length < 2) return null;

  const starter = doses.find((d) => d.dose === starterKey) ?? doses[0];
  const top = doses.find((d) => d.dose === topKey) ?? doses[doses.length - 1];
  const stepUps = rows
    .filter(
      (r) => (r.prices[starter.dose] ?? 0) > 0 && (r.prices[top.dose] ?? 0) > 0,
    )
    .map((r) => (r.prices[top.dose] as number) - (r.prices[starter.dose] as number));

  return {
    providerCount: rows.length,
    doses,
    starter,
    top,
    medianStepUp: stepUps.length > 0 ? Math.round(median(stepUps)) : 0,
    widest: doses.reduce((a, b) => (b.high - b.low > a.high - a.low ? b : a)),
  };
}

export function buildMounjaroPriceInsights(
  providers: MounjaroUkProviderCompare[],
): MounjaroPriceInsights | null {
  return buildDosePriceInsights(
    providers.map((p) => ({
      id: p.id,
      name: p.name,
      prices: Object.fromEntries(
        MOUNJARO_DOSE_KEYS.map((k) => [k, p.prices[k] > 0 ? p.prices[k] : null]),
      ) as Record<DoseKey, number | null>,
    })),
    MOUNJARO_DOSE_KEYS,
  );
}

export type CheapestAtDose = { id?: string; name: string; price: number };

/** The `n` cheapest listed providers at one strength, lowest first (affiliated partners prioritised). */
export function cheapestProvidersAtDose<K extends string>(
  rows: PriceRow<K>[],
  dose: K,
  n = 3,
): CheapestAtDose[] {
  const priced = rows.filter((r) => (r.prices[dose] ?? 0) > 0);
  const affiliatePriced = priced.filter((r) =>
    r.id ? isAffiliatePartner(r.id) : false,
  );
  const pool = affiliatePriced.length > 0 ? affiliatePriced : priced;
  return pool
    .map((r) => ({ id: r.id, name: r.name, price: r.prices[dose] as number }))
    .sort((a, b) => a.price - b.price)
    .slice(0, n);
}

export type CheapestAcrossDoses = {
  /** Provider cheapest at the most strengths. */
  leader: string;
  /** How many of `doseKeys` the leader is cheapest at. */
  leaderWins: number;
  totalDoses: number;
  /** Strengths the leader was NOT cheapest at, with who was and by how much. */
  exceptions: { dose: string; provider: string; marginPence: number }[];
};

/**
 * Which provider is cheapest most often across a set of strengths, for copy
 * like "X was cheapest for 5 of 6 doses". Ties broken by provider name so
 * the result is stable run to run.
 */
export function cheapestAcrossDoses<K extends string>(
  rows: PriceRow<K>[],
  doseKeys: readonly K[],
): CheapestAcrossDoses | null {
  const winners = doseKeys
    .map((dose) => {
      const cheapest = cheapestProvidersAtDose(rows, dose, 2);
      if (cheapest.length === 0) return null;
      return { dose, cheapest };
    })
    .filter((w): w is { dose: K; cheapest: CheapestAtDose[] } => w !== null);
  if (winners.length === 0) return null;

  const winCounts = new Map<string, number>();
  for (const w of winners) {
    const name = w.cheapest[0].name;
    winCounts.set(name, (winCounts.get(name) ?? 0) + 1);
  }
  const leader = [...winCounts.entries()].sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "en-GB"),
  )[0][0];

  const exceptions = winners
    .filter((w) => w.cheapest[0].name !== leader)
    .map((w) => ({
      dose: w.dose,
      provider: w.cheapest[0].name,
      marginPence: w.cheapest[1]
        ? Math.round((w.cheapest[1].price - w.cheapest[0].price) * 100)
        : 0,
    }));

  return {
    leader,
    leaderWins: winCounts.get(leader) ?? 0,
    totalDoses: winners.length,
    exceptions,
  };
}

export type MonthCostRow = { month: number; dose: string; low: number; typical: number };
export type FirstMonthsCostEstimate = {
  rows: MonthCostRow[];
  /** Sum of each month's lowest listed price — the cheapest reachable total, dose by dose. */
  totalLow: number;
  /** Sum of each month's typical (median) listed price. */
  totalTypical: number;
};

/**
 * Month-by-month cost for the first `months` strengths of the titration
 * ladder (one pen per month). Each month's low comes from affiliated providers
 * (when provided) and typical comes from all providers in the matrix.
 */
export function buildFirstMonthsCostEstimate<K extends string>(
  ladder: readonly K[],
  months: number,
  priceRows: Record<K, number | null>[],
  lowPriceRows?: Record<K, number | null>[],
): FirstMonthsCostEstimate {
  const steps = ladder.slice(0, months);
  const lowSource =
    lowPriceRows && lowPriceRows.length > 0 ? lowPriceRows : priceRows;
  const rows: MonthCostRow[] = steps.map((dose, idx) => {
    const allPrices = priceRows
      .map((row) => row[dose])
      .filter((p): p is number => p != null && p > 0);
    const lowPrices = lowSource
      .map((row) => row[dose])
      .filter((p): p is number => p != null && p > 0);
    const effectiveLowPrices = lowPrices.length > 0 ? lowPrices : allPrices;
    return {
      month: idx + 1,
      dose,
      low: effectiveLowPrices.length
        ? Math.round(Math.min(...effectiveLowPrices) * 100) / 100
        : 0,
      typical: allPrices.length ? Math.round(median(allPrices) * 100) / 100 : 0,
    };
  });

  const round2 = (n: number) => Math.round(n * 100) / 100;
  return {
    rows,
    totalLow: round2(rows.reduce((sum, r) => sum + r.low, 0)),
    totalTypical: round2(rows.reduce((sum, r) => sum + r.typical, 0)),
  };
}

const gbpWhole = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});
const gbpPence = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** £99, £137.99, £208.50 — whole pounds without trailing ".00". */
export function formatGbp(amount: number): string {
  const rounded = Math.round(amount * 100) / 100;
  return Number.isInteger(rounded)
    ? gbpWhole.format(rounded)
    : gbpPence.format(rounded);
}

export function formatDose(dose: string): string {
  return dose.replace("mg", " mg");
}
