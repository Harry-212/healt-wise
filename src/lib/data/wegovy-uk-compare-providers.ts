/** Illustrative UK Wegovy pen prices for comparison — confirm live rates on each pharmacy. */

import {
  MOUNJARO_UK_COMPARE_PROVIDERS,
  type MounjaroUkProviderCompare,
} from "./mounjaro-uk-compare-providers";

export const WEGOVY_UK_COMPARE_LAST_UPDATED = "August 2026";

export type WegovyUkCompareBadge = "mostPopular" | "bestValue";

export type WegovyPriceCell = number | "TBC" | "OOS";

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
  "asda-online-doctor": {
    "0.25mg": 92.47,
    "0.5mg": 112.47,
    "1mg": 142.47,
    "1.7mg": 172.47,
    "2.4mg": 192.47,
    "7.2mg": 252.47,
  },
  "ashcroft-pharmacy": {
    "0.25mg": 126.98,
    "0.5mg": 131.99,
    "1mg": 131.99,
    "1.7mg": 181.99,
    "2.4mg": 231.99,
    "7.2mg": "TBC",
  },
  "ayp-healthcare": {
    "0.25mg": 94.99,
    "0.5mg": 98.99,
    "1mg": 98.99,
    "1.7mg": 148.99,
    "2.4mg": 198.99,
    "7.2mg": "TBC",
  },
  "bolt-pharmacy": {
    "0.25mg": 119,
    "0.5mg": 129,
    "1mg": 139,
    "1.7mg": 179,
    "2.4mg": 199,
    "7.2mg": 259,
  },
  click2pharmacy: {
    "0.25mg": 113.99,
    "0.5mg": 113.99,
    "1mg": 113.99,
    "1.7mg": 173.98,
    "2.4mg": 203.98,
    "7.2mg": "TBC",
  },
  "cloud-pharmacy": {
    "0.25mg": 119.28,
    "0.5mg": 124.28,
    "1mg": 129.28,
    "1.7mg": 173.28,
    "2.4mg": 233.28,
    "7.2mg": 284.28,
  },
  curate: {
    "0.25mg": 108,
    "0.5mg": 128,
    "1mg": 135,
    "1.7mg": 178,
    "2.4mg": 204,
    "7.2mg": "TBC",
  },
  curely: {
    "0.25mg": 99.49,
    "0.5mg": 109.99,
    "1mg": 119.99,
    "1.7mg": 169.99,
    "2.4mg": 239.99,
    "7.2mg": "TBC",
  },
  "cuva-health": {
    "0.25mg": 87.99,
    "0.5mg": 93.98,
    "1mg": 99.98,
    "1.7mg": 153.98,
    "2.4mg": 213.98,
    "7.2mg": "TBC",
  },
  "dr-weightmans": {
    "0.25mg": 94.99,
    "0.5mg": 104.99,
    "1mg": 114.99,
    "1.7mg": 129.99,
    "2.4mg": 154.99,
    "7.2mg": 224.99,
  },
  envigore: {
    "0.25mg": 135,
    "0.5mg": 145,
    "1mg": 155,
    "1.7mg": 215,
    "2.4mg": 266,
    "7.2mg": "TBC",
  },
  farmeci: {
    "0.25mg": 91,
    "0.5mg": 114,
    "1mg": 114,
    "1.7mg": 159,
    "2.4mg": 195,
    "7.2mg": "TBC",
  },
  genmeds: {
    "0.25mg": 139.98,
    "0.5mg": 164.98,
    "1mg": 174.98,
    "1.7mg": 204.98,
    "2.4mg": 244.98,
    "7.2mg": "TBC",
  },
  "get-a-drip": {
    "0.25mg": 109,
    "0.5mg": 119,
    "1mg": 129,
    "1.7mg": 169,
    "2.4mg": 219,
    "7.2mg": "TBC",
  },
  getweightloss: {
    "0.25mg": 88.75,
    "0.5mg": 92.99,
    "1mg": 93.99,
    "1.7mg": 149,
    "2.4mg": 199,
    "7.2mg": "TBC",
  },
  "goodbody-clinic": {
    "0.25mg": 205,
    "0.5mg": 205,
    "1mg": 205,
    "1.7mg": 235,
    "2.4mg": 290,
    "7.2mg": "TBC",
  },
  "happy-pharmacy": {
    "0.25mg": 94.24,
    "0.5mg": 94.24,
    "1mg": 99.24,
    "1.7mg": 166.24,
    "2.4mg": 210.24,
    "7.2mg": "TBC",
  },
  "hey-slim": {
    "0.25mg": 119,
    "0.5mg": 119,
    "1mg": 119,
    "1.7mg": 169,
    "2.4mg": 199,
    "7.2mg": "TBC",
  },
  "iq-doctor": {
    "0.25mg": 127.99,
    "0.5mg": 132.98,
    "1mg": 132.98,
    "1.7mg": 178.98,
    "2.4mg": 198.98,
    "7.2mg": 360,
  },
  "jood-life": {
    "0.25mg": 90,
    "0.5mg": 90,
    "1mg": 90,
    "1.7mg": 150,
    "2.4mg": 234,
    "7.2mg": "TBC",
  },
  juniper: {
    "0.25mg": 149,
    "0.5mg": 149,
    "1mg": 164,
    "1.7mg": 194,
    "2.4mg": 214,
    "7.2mg": 299,
  },
  "live-well-weight-loss": {
    "0.25mg": 105,
    "0.5mg": 109,
    "1mg": 109,
    "1.7mg": 159,
    "2.4mg": 199,
    "7.2mg": "TBC",
  },
  "lloyds-pharmacy-online-doctor": {
    "0.25mg": 105.94,
    "0.5mg": 125.95,
    "1mg": 155.94,
    "1.7mg": 185.94,
    "2.4mg": 205.94,
    "7.2mg": 295.94,
  },
  "lotus-weight-loss": {
    "0.25mg": 99.99,
    "0.5mg": 120,
    "1mg": 120,
    "1.7mg": 141,
    "2.4mg": 161,
    "7.2mg": "TBC",
  },
  "manchester-chemist": {
    "0.25mg": 130,
    "0.5mg": 150,
    "1mg": 200,
    "1.7mg": 230,
    "2.4mg": 260,
    "7.2mg": "TBC",
  },
  medexpress: {
    "0.25mg": 103.94,
    "0.5mg": 123.94,
    "1mg": 153.94,
    "1.7mg": 183.94,
    "2.4mg": 203.94,
    "7.2mg": 253.94,
  },
  medhut: {
    "0.25mg": 89,
    "0.5mg": 93,
    "1mg": 95,
    "1.7mg": 148,
    "2.4mg": 198,
    "7.2mg": "TBC",
  },
  "medicine-marketplace": {
    "0.25mg": 92,
    "0.5mg": 92,
    "1mg": 92,
    "1.7mg": 117,
    "2.4mg": 135,
    "7.2mg": 202,
  },
  medino: {
    "0.25mg": 99.99,
    "0.5mg": 109,
    "1mg": 119.99,
    "1.7mg": 179.99,
    "2.4mg": 229.99,
    "7.2mg": "TBC",
  },
  "my-london-pharmacy": {
    "0.25mg": 91,
    "0.5mg": 114,
    "1mg": 114,
    "1.7mg": 159,
    "2.4mg": 195,
    "7.2mg": "TBC",
  },
  "next-script": {
    "0.25mg": 79.99,
    "0.5mg": 79.99,
    "1mg": 79.99,
    "1.7mg": 135,
    "2.4mg": 189,
    "7.2mg": "TBC",
  },
  "nulife-pharmacy": {
    "0.25mg": 88,
    "0.5mg": 91,
    "1mg": 95,
    "1.7mg": 149,
    "2.4mg": 199,
    "7.2mg": "TBC",
  },
  numan: {
    "0.25mg": 129,
    "0.5mg": 159,
    "1mg": 179,
    "1.7mg": 209,
    "2.4mg": 229,
    "7.2mg": 299,
  },
  onlinemeds: {
    "0.25mg": 119.99,
    "0.5mg": 119.99,
    "1mg": 119.99,
    "1.7mg": 168.99,
    "2.4mg": 224.99,
    "7.2mg": "TBC",
  },
  oushk: {
    "0.25mg": 129.99,
    "0.5mg": 133.99,
    "1mg": 143.99,
    "1.7mg": 183.99,
    "2.4mg": 203.99,
    "7.2mg": 304.99,
  },
  "pharmacy-advance": {
    "0.25mg": 105.99,
    "0.5mg": 119.99,
    "1mg": 132.99,
    "1.7mg": 184.99,
    "2.4mg": 219.99,
    "7.2mg": "TBC",
  },
  "pharmacy-express": {
    "0.25mg": 99.49,
    "0.5mg": 104.99,
    "1mg": 114.99,
    "1.7mg": 159.99,
    "2.4mg": 209.99,
    "7.2mg": "TBC",
  },
  pharmacy2u: {
    "0.25mg": 101.24,
    "0.5mg": 121.24,
    "1mg": 151.24,
    "1.7mg": 176.24,
    "2.4mg": 196.24,
    "7.2mg": 276.24,
  },
  pharmica: {
    "0.25mg": 119.99,
    "0.5mg": 134.99,
    "1mg": 139.99,
    "1.7mg": 169.99,
    "2.4mg": 209.99,
    "7.2mg": "TBC",
  },
  pharmulous: {
    "0.25mg": 124.98,
    "0.5mg": 134.98,
    "1mg": 144.98,
    "1.7mg": 174.98,
    "2.4mg": 224.98,
    "7.2mg": "TBC",
  },
  pills2u: {
    "0.25mg": 94.99,
    "0.5mg": 94.99,
    "1mg": 94.99,
    "1.7mg": 154.99,
    "2.4mg": 209.99,
    "7.2mg": 320,
  },
  pillsorted: {
    "0.25mg": 102.99,
    "0.5mg": 122.99,
    "1mg": 128.99,
    "1.7mg": 172.99,
    "2.4mg": 192.99,
    "7.2mg": "TBC",
  },
  pillsphere: {
    "0.25mg": 132.95,
    "0.5mg": 132.95,
    "1mg": 132.95,
    "1.7mg": 192.95,
    "2.4mg": 243.95,
    "7.2mg": "TBC",
  },
  "second-nature": {
    "0.25mg": 149,
    "0.5mg": 179,
    "1mg": 199,
    "1.7mg": 229,
    "2.4mg": 249,
    "7.2mg": 329,
  },
  shape8: {
    "0.25mg": 118.25,
    "0.5mg": 122.98,
    "1mg": 132.98,
    "1.7mg": 174.98,
    "2.4mg": 192.99,
    "7.2mg": "TBC",
  },
  "simple-online-pharmacy": {
    "0.25mg": 103,
    "0.5mg": 123,
    "1mg": 129,
    "1.7mg": 173,
    "2.4mg": 193,
    "7.2mg": 333,
  },
  "skin-and-shape": {
    "0.25mg": 123.99,
    "0.5mg": 136.99,
    "1mg": 140.99,
    "1.7mg": 180.99,
    "2.4mg": 254.99,
    "7.2mg": "TBC",
  },
  "slimming-direct": {
    "0.25mg": 145,
    "0.5mg": 184,
    "1mg": 184,
    "1.7mg": 244,
    "2.4mg": 284,
    "7.2mg": "TBC",
  },
  "superdrug-online-doctor": {
    "0.25mg": 103.5,
    "0.5mg": 123.5,
    "1mg": 170.5,
    "1.7mg": 196.5,
    "2.4mg": 209.5,
    "7.2mg": 289.5,
  },
  "swift-medi": {
    "0.25mg": 145.3,
    "0.5mg": 145.3,
    "1mg": 138.99,
    "1.7mg": 161.58,
    "2.4mg": 212.58,
    "7.2mg": "TBC",
  },
  "care-pharmacy": {
    "0.25mg": 99.99,
    "0.5mg": 129.99,
    "1mg": 129.99,
    "1.7mg": 179.99,
    "2.4mg": 229.99,
    "7.2mg": "TBC",
  },
  "the-family-chemist": {
    "0.25mg": 99.99,
    "0.5mg": 119.99,
    "1mg": 124.99,
    "1.7mg": 168.99,
    "2.4mg": 188.99,
    "7.2mg": 279.99,
  },
  "the-independent-pharmacy": {
    "0.25mg": 104.99,
    "0.5mg": 129.99,
    "1mg": 144.99,
    "1.7mg": 169.99,
    "2.4mg": 189.99,
    "7.2mg": 289.99,
  },
  tribelle: {
    "0.25mg": 114.99,
    "0.5mg": 114.99,
    "1mg": 119.99,
    "1.7mg": 163.99,
    "2.4mg": 217.99,
    "7.2mg": "TBC",
  },
  voy: {
    "0.25mg": 144,
    "0.5mg": 169,
    "1mg": 189,
    "1.7mg": 219,
    "2.4mg": 239,
    "7.2mg": 409,
  },
  "well-pharmacy": {
    "0.25mg": 93.95,
    "0.5mg": 143.95,
    "1mg": 153.95,
    "1.7mg": 201.95,
    "2.4mg": 209.95,
    "7.2mg": "TBC",
  },
  weprescribe: {
    "0.25mg": 121.49,
    "0.5mg": 126.49,
    "1mg": 146.49,
    "1.7mg": 181.49,
    "2.4mg": 246.49,
    "7.2mg": "TBC",
  },
  yourpharmacy: {
    "0.25mg": 133.95,
    "0.5mg": 142.95,
    "1mg": 153.95,
    "1.7mg": 183.95,
    "2.4mg": 219.95,
    "7.2mg": "TBC",
  },
  zava: {
    "0.25mg": 102.99,
    "0.5mg": 123.98,
    "1mg": 153.98,
    "1.7mg": 172.98,
    "2.4mg": 193.98,
    "7.2mg": 263.98,
  },
};

const WEGOVY_EXTRA_PROVIDER_SEEDS: MounjaroUkProviderCompare[] = [
  {
    id: "cloud-pharmacy",
    name: "Cloud Pharmacy",
    deliveryNote: "Confirm on site",
    rating: 4.6,
    headlineFrom: 119.28,
    gphcRegNo: "9012073",
    trustpilotUrl: "https://uk.trustpilot.com/review/www.cloudpharmacy.co.uk",
    prices: {
      "2.5mg": 0,
      "5mg": 0,
      "7.5mg": 0,
      "10mg": 0,
      "12.5mg": 0,
      "15mg": 0,
    },
    updatedLabel: "May 2026",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
];

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
    updatedLabel: "May 2026",
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
  return Math.min(...numericWegovyPrices(p.prices));
}

export function estimatedMonthlyCost(p: WegovyUkProviderCompare): number {
  const values = numericWegovyPrices(p.prices);
  const sum = values.reduce((acc, n) => acc + n, 0);
  return Math.round(sum / values.length);
}

export function dosePriceRangeByStrength(
  providers: WegovyUkProviderCompare[],
): { dose: string; min: number; max: number; avg: number }[] {
  return WEGOVY_DOSE_KEYS.map((k) => {
    const vals = providers.flatMap((p) => {
      const amount = wegovyPriceAmount(p.prices[k]);
      return amount == null ? [] : [amount];
    });
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
