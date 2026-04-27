/** Illustrative UK Wegovy pen prices for comparison — confirm live rates on each pharmacy. */

import {
  MOUNJARO_UK_COMPARE_PROVIDERS,
  type MounjaroUkProviderCompare,
} from "./mounjaro-uk-compare-providers";

export const WEGOVY_UK_COMPARE_LAST_UPDATED = "April 2026";

export type WegovyUkCompareBadge = "mostPopular" | "bestValue";

export type WegovyUkProviderCompare = {
  id: string;
  name: string;
  deliveryNote: string;
  rating: number;
  /** Advertised “from” / headline figure where supplied (for reference). */
  headlineFrom: number;
  gphcRegNo: string;
  trustpilotUrl?: string;
  linkProfilePage?: boolean;
  prices: {
    "0.25mg": number;
    "0.5mg": number;
    "1mg": number;
    "1.7mg": number;
    "2.4mg": number;
  };
  updatedLabel: string;
  consultationIncluded: boolean;
  badges?: WegovyUkCompareBadge[];
  ctaHref: string;
};

function r2(n: number) {
  return Math.round(n * 100) / 100;
}

/**
 * Wegovy table uses the same provider list as Mounjaro. Strength prices are
 * approximated from the Mounjaro six-point ladder (illustrative — replace with
 * live Wegovy checks when you have a dedicated Wegovy sheet).
 */
function mounjaroRowToWegovy(
  m: MounjaroUkProviderCompare,
): WegovyUkProviderCompare {
  const p = m.prices;
  const a = p["2.5mg"];
  const b = p["5mg"];
  const c = p["7.5mg"];
  const d = p["10mg"];
  const prices = {
    "0.25mg": r2(a * 0.48),
    "0.5mg": r2(a * 0.56),
    "1mg": r2(b * 0.5),
    "1.7mg": r2(c * 0.52),
    "2.4mg": r2(d * 0.55),
  };
  const start = Math.min(...Object.values(prices));
  return {
    id: m.id,
    name: m.name,
    deliveryNote: m.deliveryNote,
    rating: m.rating,
    headlineFrom: r2(start),
    gphcRegNo: m.gphcRegNo,
    trustpilotUrl: m.trustpilotUrl,
    linkProfilePage: m.linkProfilePage,
    prices,
    updatedLabel: m.updatedLabel,
    consultationIncluded: m.consultationIncluded,
    badges: m.badges,
    ctaHref: "/what-is-wegovy#how-to-get-wegovy-uk",
  };
}

export const WEGOVY_UK_COMPARE_PROVIDERS: WegovyUkProviderCompare[] =
  MOUNJARO_UK_COMPARE_PROVIDERS.map(mounjaroRowToWegovy);

/** Pen strengths shown as table columns (order = titration ladder). */
export const WEGOVY_DOSE_KEYS: readonly (keyof WegovyUkProviderCompare["prices"])[] =
  ["0.25mg", "0.5mg", "1mg", "1.7mg", "2.4mg"];

export type WegovyDoseColumnKey = (typeof WEGOVY_DOSE_KEYS)[number];

export function pharmacyProfileHref(providerId: string): string {
  return `/pharmacies/${providerId}`;
}

export function getWegovyCompareProviderById(
  id: string,
): WegovyUkProviderCompare | undefined {
  return WEGOVY_UK_COMPARE_PROVIDERS.find((p) => p.id === id);
}

export function startingPrice(p: WegovyUkProviderCompare): number {
  return Math.min(...WEGOVY_DOSE_KEYS.map((k) => p.prices[k]));
}

export function estimatedMonthlyCost(p: WegovyUkProviderCompare): number {
  const sum = WEGOVY_DOSE_KEYS.reduce((acc, k) => acc + p.prices[k], 0);
  return Math.round(sum / WEGOVY_DOSE_KEYS.length);
}

export function dosePriceRangeByStrength(
  providers: WegovyUkProviderCompare[],
): { dose: string; min: number; max: number; avg: number }[] {
  return WEGOVY_DOSE_KEYS.map((k) => {
    const vals = providers.map((p) => p.prices[k]);
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const avg = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
    return { dose: k, min, max, avg };
  });
}

export function averagePriceAcrossDoses(providers: WegovyUkProviderCompare[]): {
  dose: string;
  avg: number;
}[] {
  return dosePriceRangeByStrength(providers).map(({ dose, avg }) => ({
    dose,
    avg,
  }));
}
