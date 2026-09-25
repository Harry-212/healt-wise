/** Illustrative UK Wegovy pen prices for comparison — confirm live rates on each pharmacy. */

import {
  MOUNJARO_UK_COMPARE_PROVIDERS,
  type MounjaroUkProviderCompare,
} from "./mounjaro-uk-compare-providers";

export const WEGOVY_UK_COMPARE_LAST_UPDATED = "20 September 2026";

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
    "0.25mg": 88.97,
    "0.5mg": 108.97,
    "1mg": 138.97,
    "1.7mg": 168.97,
    "2.4mg": 188.97,
    "7.2mg": 258.97,
  },
  "ashcroft-pharmacy": {
    "0.25mg": 120,
    "0.5mg": 125,
    "1mg": 125,
    "1.7mg": 175,
    "2.4mg": 225,
    "7.2mg": 249,
  },
  "ayp-healthcare": {
    "0.25mg": 90.99,
    "0.5mg": 91.99,
    "1mg": 91.99,
    "1.7mg": 124.99,
    "2.4mg": 164.99,
    "7.2mg": 199.99,
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
    "0.25mg": 109,
    "0.5mg": 109,
    "1mg": 109,
    "1.7mg": 168.99,
    "2.4mg": 198.99,
    "7.2mg": 259.99,
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
    "7.2mg": 219.89,
  },
  "cuva-health": {
    "0.25mg": 89.99,
    "0.5mg": 99.99,
    "1mg": 99.99,
    "1.7mg": 151.99,
    "2.4mg": 205,
    "7.2mg": 206,
  },
  "dr-weightmans": {
    "0.25mg": 90,
    "0.5mg": 100,
    "1mg": 110,
    "1.7mg": 125,
    "2.4mg": 150,
    "7.2mg": 220,
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
    "0.5mg": 104,
    "1mg": 104,
    "1.7mg": 140,
    "2.4mg": 168,
    "7.2mg": 228,
  },
  genmeds: {
    "0.25mg": 134.99,
    "0.5mg": 159.99,
    "1mg": 169.99,
    "1.7mg": 199.99,
    "2.4mg": 239.99,
    "7.2mg": 259.99,
  },
  "get-a-drip": {
    "0.25mg": 109,
    "0.5mg": 119,
    "1mg": 129,
    "1.7mg": 140,
    "2.4mg": 160,
    "7.2mg": 229,
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
    "0.25mg": 89.99,
    "0.5mg": 110.99,
    "1mg": 129.99,
    "1.7mg": 159.99,
    "2.4mg": 194.99,
    "7.2mg": 259.99,
  },
  "hey-slim": {
    "0.25mg": 119,
    "0.5mg": 119,
    "1mg": 119,
    "1.7mg": 169,
    "2.4mg": 199,
    "7.2mg": 249,
  },
  "iq-doctor": {
    "0.25mg": 127.98,
    "0.5mg": 132.98,
    "1mg": 132.98,
    "1.7mg": 178.98,
    "2.4mg": 198.98,
    "7.2mg": 214.97,
  },
  "jood-life": {
    "0.25mg": 115,
    "0.5mg": 115,
    "1mg": 115,
    "1.7mg": 165,
    "2.4mg": 220,
    "7.2mg": "TBC",
  },
  juniper: {
    "0.25mg": 164,
    "0.5mg": 164,
    "1mg": 179,
    "1.7mg": 209,
    "2.4mg": 229,
    "7.2mg": 299,
  },
  "live-well-weight-loss": {
    "0.25mg": 105,
    "0.5mg": 109,
    "1mg": 109,
    "1.7mg": 159,
    "2.4mg": 199,
    "7.2mg": 209,
  },
  "lloyds-pharmacy-online-doctor": {
    "0.25mg": 99.99,
    "0.5mg": 119.99,
    "1mg": 149.99,
    "1.7mg": 179.99,
    "2.4mg": 199.99,
    "7.2mg": 249.99,
  },
  "lotus-weight-loss": {
    "0.25mg": 99,
    "0.5mg": 120,
    "1mg": 120,
    "1.7mg": 141,
    "2.4mg": 161,
    "7.2mg": 221,
  },
  "manchester-chemist": {
    "0.25mg": 130,
    "0.5mg": 150,
    "1mg": 170,
    "1.7mg": 200,
    "2.4mg": 230,
    "7.2mg": 360,
  },
  medexpress: {
    "0.25mg": 99.99,
    "0.5mg": 119.99,
    "1mg": 149.99,
    "1.7mg": 179.99,
    "2.4mg": 199.99,
    "7.2mg": 279.99,
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
    "0.5mg": 99.99,
    "1mg": 105.99,
    "1.7mg": 169.99,
    "2.4mg": 229.99,
    "7.2mg": 249.99,
  },
  "my-london-pharmacy": {
    "0.25mg": 91,
    "0.5mg": 104,
    "1mg": 104,
    "1.7mg": 140,
    "2.4mg": 168,
    "7.2mg": 228,
  },
  "next-script": {
    "0.25mg": 84.98,
    "0.5mg": 84.98,
    "1mg": 84.98,
    "1.7mg": 141.99,
    "2.4mg": 193.99,
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
    "0.25mg": 149,
    "0.5mg": 179,
    "1mg": 189,
    "1.7mg": 219,
    "2.4mg": 249,
    "7.2mg": 319,
  },
  onlinemeds: {
    "0.25mg": 116.99,
    "0.5mg": 116.99,
    "1mg": 116.99,
    "1.7mg": 168.99,
    "2.4mg": 221.99,
    "7.2mg": 226.99,
  },
  oushk: {
    "0.25mg": 115,
    "0.5mg": 125,
    "1mg": 130,
    "1.7mg": 170,
    "2.4mg": 190,
    "7.2mg": 260,
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
    "7.2mg": 234.99,
  },
  pharmacy2u: {
    "0.25mg": 99.99,
    "0.5mg": 114.99,
    "1mg": 144.99,
    "1.7mg": 169.99,
    "2.4mg": 189.99,
    "7.2mg": 249.99,
  },
  pharmica: {
    "0.25mg": 119.99,
    "0.5mg": 134.99,
    "1mg": 139.99,
    "1.7mg": 169.99,
    "2.4mg": 199.99,
    "7.2mg": 279.99,
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
    "7.2mg": 214.99,
  },
  pillsorted: {
    "0.25mg": 91,
    "0.5mg": 98,
    "1mg": 108,
    "1.7mg": 155,
    "2.4mg": 185,
    "7.2mg": 226,
  },
  pillsphere: {
    "0.25mg": 89,
    "0.5mg": 89,
    "1mg": 89,
    "1.7mg": 145,
    "2.4mg": 200,
    "7.2mg": "TBC",
  },
  "second-nature": {
    "0.25mg": 149,
    "0.5mg": 179,
    "1mg": 199,
    "1.7mg": 229,
    "2.4mg": 249,
    "7.2mg": 379,
  },
  shape8: {
    "0.25mg": 99.99,
    "0.5mg": 109.99,
    "1mg": 119.99,
    "1.7mg": 159.99,
    "2.4mg": 205.99,
    "7.2mg": "TBC",
  },
  "simple-online-pharmacy": {
    "0.25mg": 99,
    "0.5mg": 119,
    "1mg": 125,
    "1.7mg": 169,
    "2.4mg": 189,
    "7.2mg": 265,
  },
  "skin-and-shape": {
    "0.25mg": 119,
    "0.5mg": 132,
    "1mg": 136,
    "1.7mg": 176,
    "2.4mg": 250,
    "7.2mg": 275,
  },
  "slimming-direct": {
    "0.25mg": 90,
    "0.5mg": 100,
    "1mg": 105,
    "1.7mg": 150,
    "2.4mg": 205,
    "7.2mg": 239,
  },
  "superdrug-online-doctor": {
    "0.25mg": 99,
    "0.5mg": 119,
    "1mg": 166,
    "1.7mg": 192,
    "2.4mg": 205,
    "7.2mg": 285,
  },
  "swift-medi": {
    "0.25mg": 145.3,
    "0.5mg": 145.3,
    "1mg": 164.5,
    "1.7mg": 211.58,
    "2.4mg": 262.58,
    "7.2mg": "TBC",
  },
  "care-pharmacy": {
    "0.25mg": 99.99,
    "0.5mg": 129.99,
    "1mg": 129.99,
    "1.7mg": 179.99,
    "2.4mg": 229.99,
    "7.2mg": 249.99,
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
    "0.25mg": 99.79,
    "0.5mg": 129.99,
    "1mg": 144.99,
    "1.7mg": 169.99,
    "2.4mg": 189.99,
    "7.2mg": 289.99,
  },
  tribelle: {
    "0.25mg": 111,
    "0.5mg": 111,
    "1mg": 116,
    "1.7mg": 160,
    "2.4mg": 214,
    "7.2mg": 570,
  },
  voy: {
    "0.25mg": 144,
    "0.5mg": 169,
    "1mg": 189,
    "1.7mg": 219,
    "2.4mg": 239,
    "7.2mg": 309,
  },
  "well-pharmacy": {
    "0.25mg": 89,
    "0.5mg": 112,
    "1mg": 127,
    "1.7mg": 169,
    "2.4mg": 199,
    "7.2mg": 272,
  },
  weprescribe: {
    "0.25mg": 114.99,
    "0.5mg": 119.99,
    "1mg": 139.99,
    "1.7mg": 174.99,
    "2.4mg": 239.99,
    "7.2mg": 244.99,
  },
  yourpharmacy: {
    "0.25mg": 129,
    "0.5mg": 138,
    "1mg": 149,
    "1.7mg": 179,
    "2.4mg": 215,
    "7.2mg": 270,
  },
  zava: {
    "0.25mg": 99.99,
    "0.5mg": 119.99,
    "1mg": 149.99,
    "1.7mg": 168.99,
    "2.4mg": 189.99,
    "7.2mg": 259.99,
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

/** Rows re-checked by the client on 20 Sep 2026; others keep their earlier label. */
const WEGOVY_CHECKED_20_SEP_2026 = new Set<string>([
  "asda-online-doctor",
  "ashcroft-pharmacy",
  "ayp-healthcare",
  "bolt-pharmacy",
  "care-pharmacy",
  "click2pharmacy",
  "curely",
  "cuva-health",
  "dr-weightmans",
  "envigore",
  "farmeci",
  "genmeds",
  "get-a-drip",
  "getweightloss",
  "happy-pharmacy",
  "hey-slim",
  "iq-doctor",
  "jood-life",
  "juniper",
  "live-well-weight-loss",
  "lloyds-pharmacy-online-doctor",
  "lotus-weight-loss",
  "manchester-chemist",
  "medexpress",
  "medhut",
  "medicine-marketplace",
  "medino",
  "my-london-pharmacy",
  "next-script",
  "nulife-pharmacy",
  "numan",
  "onlinemeds",
  "oushk",
  "pharmacy-advance",
  "pharmacy-express",
  "pharmacy2u",
  "pharmica",
  "pills2u",
  "pillsorted",
  "pillsphere",
  "second-nature",
  "shape8",
  "simple-online-pharmacy",
  "skin-and-shape",
  "slimming-direct",
  "superdrug-online-doctor",
  "swift-medi",
  "the-family-chemist",
  "the-independent-pharmacy",
  "tribelle",
  "voy",
  "well-pharmacy",
  "weprescribe",
  "yourpharmacy",
  "zava",
]);

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
    updatedLabel: WEGOVY_CHECKED_20_SEP_2026.has(provider.id)
      ? "20 Sep 2026"
      : "May 2026",
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
