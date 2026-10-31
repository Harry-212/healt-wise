/** Illustrative UK Wegovy pen prices for comparison — confirm live rates on each pharmacy. */

import {
  MOUNJARO_UK_COMPARE_PROVIDERS,
  type MounjaroUkProviderCompare,
} from "./mounjaro-uk-compare-providers";

export const WEGOVY_UK_COMPARE_LAST_UPDATED = "20 September 2026";

export type WegovyUkCompareBadge = "mostPopular" | "bestValue";

/** "N/A" = the provider does not list this strength; "TBC" = not yet checked. */
export type WegovyPriceCell = number | "TBC" | "OOS" | "N/A";

export type WegovyUkProviderCompare = {
  id: string;
  name: string;
  deliveryNote: string;
  notes?: string;
  rating: number;
  /** Advertised “from” / headline figure where supplied (for reference). */
  headlineFrom: number;
  gphcRegNo: string;
  trustpilotUrl?: string;
  linkProfilePage?: boolean;
  prices: {
    "0.25mg": WegovyPriceCell;
    "0.5mg": WegovyPriceCell;
    "1mg": WegovyPriceCell;
    "1.7mg": WegovyPriceCell;
    "2.4mg": WegovyPriceCell;
    "7.2mg": WegovyPriceCell;
  };
  updatedLabel: string;
  consultationIncluded: boolean;
  badges?: WegovyUkCompareBadge[];
  ctaHref: string;
};

/** Pen strengths shown as table columns (order = titration ladder). */
export const WEGOVY_DOSE_KEYS: readonly (keyof WegovyUkProviderCompare["prices"])[] =
  ["0.25mg", "0.5mg", "1mg", "1.7mg", "2.4mg", "7.2mg"];

export type WegovyDoseColumnKey = (typeof WEGOVY_DOSE_KEYS)[number];

type WegovyPriceRow = WegovyUkProviderCompare["prices"];

export function wegovyPriceAmount(cell: WegovyPriceCell): number | null {
  if (typeof cell === "number") return cell;
  return null;
}

export function formatWegovyPriceCell(cell: WegovyPriceCell): string {
  if (typeof cell === "number") {
    return `£${cell.toFixed(2)}`;
  }
  return cell;
}

function numericWegovyPrices(prices: WegovyPriceRow): number[] {
  return WEGOVY_DOSE_KEYS.flatMap((k) => {
    const amount = wegovyPriceAmount(prices[k]);
    return amount == null ? [] : [amount];
  });
}

const WEGOVY_PRICE_ROWS: Record<string, WegovyPriceRow> = {
  dosedirect: {
    "0.25mg": 99.99,
    "0.5mg": 104.99,
    "1mg": 109.99,
    "1.7mg": 139.99,
    "2.4mg": 189.99,
    "7.2mg": "TBC",
  },
  "reach-online-pharmacy": {
    "0.25mg": 85.49,
    "0.5mg": 89.99,
    "1mg": 93.59,
    "1.7mg": 157.49,
    "2.4mg": 206.09,
    "7.2mg": 245.69,
  },
  "pharmacy-me": {
    "0.25mg": 76.94,
    "0.5mg": 76.94,
    "1mg": 76.94,
    "1.7mg": 130.14,
    "2.4mg": 183.34,
    "7.2mg": 185.24,
  },
  // i-Prescribe does not list Wegovy 7.2mg (checked 26 Oct 2026).
  "i-prescribe": {
    "0.25mg": 129.99,
    "0.5mg": 149.99,
    "1mg": 169.99,
    "1.7mg": 199.99,
    "2.4mg": 229.99,
    "7.2mg": "N/A",
  },
  // Standard (non-introductory) prices; first-order offers are not stored here.
  shemed: {
    "0.25mg": 139.0,
    "0.5mg": 139.0,
    "1mg": 139.0,
    "1.7mg": 159.0,
    "2.4mg": 159.0,
    "7.2mg": 239.0,
  },
};

const WEGOVY_EXTRA_PROVIDER_SEEDS: MounjaroUkProviderCompare[] = [];

/** Rows re-checked by the client on 20 Sep 2026; others keep their earlier label. */
const WEGOVY_CHECKED_20_SEP_2026 = new Set<string>([]);

/** Providers checked on a date other than the two the ternary below covers (20 Sep / fallback). */
const WEGOVY_UPDATED_LABEL_OVERRIDE: Record<string, string> = {
  "reach-online-pharmacy": "27 Sep 2026",
  "pharmacy-me": "12 Oct 2026",
  "i-prescribe": "26 Oct 2026",
  shemed: "26 Oct 2026",
};

function providerSeedToWegovy(
  provider: MounjaroUkProviderCompare,
): WegovyUkProviderCompare | null {
  const prices = WEGOVY_PRICE_ROWS[provider.id];
  if (!prices) return null;

  return {
    id: provider.id,
    name: provider.name,
    deliveryNote: provider.deliveryNote,
    rating: provider.rating,
    headlineFrom: Math.min(...numericWegovyPrices(prices)),
    gphcRegNo: provider.gphcRegNo,
    trustpilotUrl: provider.trustpilotUrl,
    linkProfilePage: provider.linkProfilePage,
    prices,
    updatedLabel:
      WEGOVY_UPDATED_LABEL_OVERRIDE[provider.id] ??
      (WEGOVY_CHECKED_20_SEP_2026.has(provider.id) ? "20 Sep 2026" : "May 2026"),
    consultationIncluded: provider.consultationIncluded,
    badges: provider.badges,
    ctaHref: "/what-is-wegovy#how-to-get-wegovy-uk",
  };
}

/** Build initial Wegovy provider list from Mounjaro base + price rows (seed only). */
export function buildWegovyProvidersFromSeed(): WegovyUkProviderCompare[] {
  return [...MOUNJARO_UK_COMPARE_PROVIDERS, ...WEGOVY_EXTRA_PROVIDER_SEEDS]
    .flatMap((provider) => {
      const row = providerSeedToWegovy(provider);
      return row ? [row] : [];
    })
    .sort((a, b) => a.name.localeCompare(b.name, "en-GB"));
}

/** Static snapshot for build-time consumers (homepage previews, sitemap, etc.). */
export const WEGOVY_UK_COMPARE_PROVIDERS: WegovyUkProviderCompare[] =
  buildWegovyProvidersFromSeed();

export function pharmacyProfileHref(providerId: string): string {
  return `/pharmacies/${providerId}`;
}

export function getWegovyCompareProviderById(
  id: string,
): WegovyUkProviderCompare | undefined {
  return WEGOVY_UK_COMPARE_PROVIDERS.find((p) => p.id === id);
}

export function startingPrice(p: WegovyUkProviderCompare): number {
  const listed = numericWegovyPrices(p.prices);
  return listed.length > 0 ? Math.min(...listed) : 0;
}

export function dosePriceRangeByStrength(
  providers: WegovyUkProviderCompare[],
): { dose: string; min: number; max: number; avg: number }[] {
  return WEGOVY_DOSE_KEYS.map((k) => {
    const vals = providers.flatMap((p) => {
      const amount = wegovyPriceAmount(p.prices[k]);
      return amount == null ? [] : [amount];
    });
    if (vals.length === 0) return { dose: k, min: 0, max: 0, avg: 0 };
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
