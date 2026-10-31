/** Illustrative UK Mounjaro pen prices — confirm live rates on each pharmacy. */

export const MOUNJARO_UK_COMPARE_LAST_UPDATED = "20 September 2026";

export type MounjaroUkCompareBadge = "mostPopular" | "bestValue";

const TRUSTPILOT_URL_BY_PROVIDER_ID: Record<string, string> = {
  "pharmacy-me": "https://uk.trustpilot.com/review/pharmacyme.co.uk",
  "i-prescribe": "https://uk.trustpilot.com/review/i-prescribe.co.uk",
  shemed: "https://uk.trustpilot.com/review/shemed.co.uk",
};

export type MounjaroUkProviderCompare = {
  id: string;
  name: string;
  deliveryNote: string;
  notes?: string;
  rating: number;
  headlineFrom: number;
  /** GPhC pharmacy premises number (link uses the first 6–7 digit token). */
  gphcRegNo: string;
  /** Company Trustpilot URL if known; otherwise search is used in the table. */
  trustpilotUrl?: string;
  /**
   * When false, the provider name is not linked to /pharmacies/{id} (e.g. page not ready).
   * @default true
   */
  linkProfilePage?: boolean;
  prices: {
    "2.5mg": number;
    "5mg": number;
    "7.5mg": number;
    "10mg": number;
    "12.5mg": number;
    "15mg": number;
  };
  updatedLabel: string;
  consultationIncluded: boolean;
  badges?: MounjaroUkCompareBadge[];
  ctaHref: string;
};

export const MOUNJARO_DOSE_KEYS: readonly (keyof MounjaroUkProviderCompare["prices"])[] =
  ["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"];

export type MounjaroDoseColumnKey = (typeof MOUNJARO_DOSE_KEYS)[number];

export const MOUNJARO_UK_COMPARE_PROVIDERS_BASE: MounjaroUkProviderCompare[] = [
  {
    id: "dosedirect",
    name: "DoseDirect",
    deliveryNote:
      "Included — tracked, cold-chain, same-day dispatch before 1pm Mon-Fri",
    rating: 4.6,
    headlineFrom: 134.99,
    gphcRegNo: "9012841",
    trustpilotUrl: "https://uk.trustpilot.com/review/dosedirect.co.uk",
    prices: {
      "2.5mg": 134.99,
      "5mg": 155.99,
      "7.5mg": 207.99,
      "10mg": 231.99,
      "12.5mg": 248.99,
      "15mg": 267.99,
    },
    updatedLabel: "8 Oct 2026",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "reach-online-pharmacy",
    name: "Reach Online Pharmacy",
    deliveryNote:
      "From £4.99 (standard, 2-3 days); tracked 24/48h £5.99; guaranteed 1pm next-day (temp-controlled) £9.99",
    rating: 4.5,
    headlineFrom: 139.49,
    gphcRegNo: "1093332",
    trustpilotUrl: "https://uk.trustpilot.com/review/reachonlinepharmacy.com",
    prices: {
      "2.5mg": 139.49,
      "5mg": 158.39,
      "7.5mg": 217.99,
      "10mg": 239.39,
      "12.5mg": 267.29,
      "15mg": 290.69,
    },
    updatedLabel: "27 Sep 2026",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "pharmacy-me",
    name: "Pharmacy + Me",
    deliveryNote: "Royal Mail Tracked 24 £4.99",
    rating: 4.5,
    headlineFrom: 126.34,
    gphcRegNo: "9012604",
    trustpilotUrl: "https://uk.trustpilot.com/review/pharmacyme.co.uk",
    prices: {
      "2.5mg": 126.34,
      "5mg": 128.24,
      "7.5mg": 195.69,
      "10mg": 221.34,
      "12.5mg": 239.39,
      "15mg": 259.34,
    },
    updatedLabel: "12 Oct 2026",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "i-prescribe",
    name: "i-Prescribe",
    deliveryNote: "Royal Mail Tracked from £4.99",
    notes: "Code First10 (£10 off first order) · Code HW360 on repeat orders",
    rating: 4.7,
    headlineFrom: 160.0,
    gphcRegNo: "9012850",
    trustpilotUrl: "https://uk.trustpilot.com/review/i-prescribe.co.uk",
    prices: {
      "2.5mg": 160.0,
      "5mg": 190.0,
      "7.5mg": 260.0,
      "10mg": 290.0,
      "12.5mg": 320.0,
      "15mg": 340.0,
    },
    updatedLabel: "23 Oct 2026",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "shemed",
    name: "SheMed",
    deliveryNote: "Free discreet tracked delivery",
    notes: "Code HEALTH20 (20% off first order) · At-home blood screening included",
    rating: 4.6,
    headlineFrom: 229.0,
    gphcRegNo: "9012578",
    trustpilotUrl: "https://uk.trustpilot.com/review/shemed.co.uk",
    prices: {
      "2.5mg": 229.0,
      "5mg": 229.0,
      "7.5mg": 279.0,
      "10mg": 279.0,
      "12.5mg": 319.0,
      "15mg": 319.0,
    },
    updatedLabel: "26 Oct 2026",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
];

export const MOUNJARO_UK_COMPARE_PROVIDERS: MounjaroUkProviderCompare[] =
  MOUNJARO_UK_COMPARE_PROVIDERS_BASE.map((p) => ({
    ...p,
    trustpilotUrl: TRUSTPILOT_URL_BY_PROVIDER_ID[p.id] ?? p.trustpilotUrl,
  }));

export function getMounjaroCompareProviderById(
  id: string,
): MounjaroUkProviderCompare | undefined {
  return MOUNJARO_UK_COMPARE_PROVIDERS.find((p) => p.id === id);
}

/** Listed pen prices; a missing or zero price means the strength is not listed. */
function listedPrices(p: MounjaroUkProviderCompare): number[] {
  return MOUNJARO_DOSE_KEYS.map((k) => p.prices[k]).filter((n) => n > 0);
}

export function startingPrice(p: MounjaroUkProviderCompare): number {
  const listed = listedPrices(p);
  return listed.length > 0 ? Math.min(...listed) : 0;
}

export function dosePriceRangeByStrengthMounjaro(
  providers: MounjaroUkProviderCompare[],
): { dose: string; min: number; max: number; avg: number }[] {
  return MOUNJARO_DOSE_KEYS.map((k) => {
    const vals = providers.map((p) => p.prices[k]).filter((n) => n > 0);
    if (vals.length === 0) return { dose: k, min: 0, max: 0, avg: 0 };
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const avg = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
    return { dose: k, min, max, avg };
  });
}

export function averagePriceAcrossDosesMounjaro(
  providers: MounjaroUkProviderCompare[],
): { dose: string; avg: number }[] {
  return dosePriceRangeByStrengthMounjaro(providers).map(({ dose, avg }) => ({
    dose,
    avg,
  }));
}
