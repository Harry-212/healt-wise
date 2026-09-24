import {
  MOUNJARO_DOSE_KEYS,
  type MounjaroUkProviderCompare,
} from "./mounjaro-uk-compare-providers";

type DoseKey = (typeof MOUNJARO_DOSE_KEYS)[number];

export type MounjaroDoseStat = {
  dose: DoseKey;
  low: number;
  high: number;
  median: number;
  lowProvider: string;
};

export type MounjaroPriceInsights = {
  providerCount: number;
  doses: MounjaroDoseStat[];
  starter: MounjaroDoseStat;
  top: MounjaroDoseStat;
  /** Median of each provider's own 2.5 mg → 15 mg price increase. */
  medianStepUp: number;
  /** Dose with the widest gap between lowest and highest listed price. */
  widest: MounjaroDoseStat;
};

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function doseStat(
  providers: MounjaroUkProviderCompare[],
  dose: DoseKey,
): MounjaroDoseStat | null {
  const priced = providers.filter((p) => p.prices[dose] > 0);
  if (priced.length === 0) return null;
  const lowest = priced.reduce((a, b) => (a.prices[dose] <= b.prices[dose] ? a : b));
  const values = priced.map((p) => p.prices[dose]);
  return {
    dose,
    low: lowest.prices[dose],
    high: Math.max(...values),
    // Rounded: an even-count median can land on odd pence (e.g. £179.48).
    median: Math.round(median(values)),
    lowProvider: lowest.name,
  };
}

/**
 * Figures for the page copy, derived from the live table so the text stays
 * correct whenever prices are updated in the admin.
 */
export function buildMounjaroPriceInsights(
  providers: MounjaroUkProviderCompare[],
): MounjaroPriceInsights | null {
  const doses = MOUNJARO_DOSE_KEYS.map((k) => doseStat(providers, k)).filter(
    (s): s is MounjaroDoseStat => s !== null,
  );
  if (doses.length < 2) return null;

  const first = MOUNJARO_DOSE_KEYS[0];
  const last = MOUNJARO_DOSE_KEYS[MOUNJARO_DOSE_KEYS.length - 1];
  const stepUps = providers
    .filter((p) => p.prices[first] > 0 && p.prices[last] > 0)
    .map((p) => p.prices[last] - p.prices[first]);

  return {
    providerCount: providers.length,
    doses,
    starter: doses[0],
    top: doses[doses.length - 1],
    medianStepUp: stepUps.length > 0 ? Math.round(median(stepUps)) : 0,
    widest: doses.reduce((a, b) => (b.high - b.low > a.high - a.low ? b : a)),
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
