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
  const lowest = priced.reduce((a, b) => (price(a) <= price(b) ? a : b));
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
      name: p.name,
      prices: Object.fromEntries(
        MOUNJARO_DOSE_KEYS.map((k) => [k, p.prices[k] > 0 ? p.prices[k] : null]),
      ) as Record<DoseKey, number | null>,
    })),
    MOUNJARO_DOSE_KEYS,
  );
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
