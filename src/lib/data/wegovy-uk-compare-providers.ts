/** Illustrative UK Wegovy pen prices for comparison — confirm live rates on each pharmacy. */

export const WEGOVY_UK_COMPARE_LAST_UPDATED = "April 2026";

export type WegovyUkCompareBadge = "mostPopular" | "bestValue";

export type WegovyUkProviderCompare = {
  id: string;
  name: string;
  deliveryNote: string;
  rating: number;
  /** Advertised “from” / headline figure where supplied (for reference). */
  headlineFrom: number;
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

export const WEGOVY_UK_COMPARE_PROVIDERS: WegovyUkProviderCompare[] = [
  {
    id: "swift-doctor",
    name: "Swift Doctor",
    deliveryNote: "inc £6 Del",
    rating: 4.9,
    headlineFrom: 135,
    prices: {
      "0.25mg": 105,
      "0.5mg": 105,
      "1mg": 105,
      "1.7mg": 155,
      "2.4mg": 205,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    badges: ["mostPopular"],
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "care-pharmacy",
    name: "Care Pharmacy",
    deliveryNote: "Free Del",
    rating: 4.9,
    headlineFrom: 154,
    prices: {
      "0.25mg": 100,
      "0.5mg": 130,
      "1mg": 130,
      "1.7mg": 180,
      "2.4mg": 230,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "pharmica",
    name: "Pharmica",
    deliveryNote: "Free Del",
    rating: 4.9,
    headlineFrom: 165,
    prices: {
      "0.25mg": 120,
      "0.5mg": 135,
      "1mg": 140,
      "1.7mg": 180,
      "2.4mg": 250,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "the-family-chemist",
    name: "The Family Chemist",
    deliveryNote: "inc £7 Del",
    rating: 4.8,
    headlineFrom: 129,
    prices: {
      "0.25mg": 105,
      "0.5mg": 105,
      "1mg": 105,
      "1.7mg": 152,
      "2.4mg": 177,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    badges: ["bestValue"],
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "cuva-health",
    name: "Cuva Health",
    deliveryNote: "inc £4 Del",
    rating: 4.8,
    headlineFrom: 130,
    prices: {
      "0.25mg": 88,
      "0.5mg": 94,
      "1mg": 100,
      "1.7mg": 154,
      "2.4mg": 214,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "fylde-clinic",
    name: "Fylde Clinic",
    deliveryNote: "Free Del",
    rating: 4.8,
    headlineFrom: 130,
    prices: {
      "0.25mg": 94,
      "0.5mg": 98,
      "1mg": 98,
      "1.7mg": 150,
      "2.4mg": 210,
    },
    updatedLabel: "3 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "chemist4u",
    name: "Chemist4U",
    deliveryNote: "Free Del",
    rating: 4.8,
    headlineFrom: 139,
    prices: {
      "0.25mg": 99,
      "0.5mg": 109,
      "1mg": 119,
      "1.7mg": 169,
      "2.4mg": 199,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "pharmulous",
    name: "Pharmulous",
    deliveryNote: "inc £5 Del",
    rating: 4.8,
    headlineFrom: 148,
    prices: {
      "0.25mg": 115,
      "0.5mg": 120,
      "1mg": 125,
      "1.7mg": 165,
      "2.4mg": 215,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "ashcroft-pharmacy",
    name: "Ashcroft Pharmacy",
    deliveryNote: "inc £7 Del",
    rating: 4.8,
    headlineFrom: 161,
    prices: {
      "0.25mg": 127,
      "0.5mg": 132,
      "1mg": 132,
      "1.7mg": 182,
      "2.4mg": 232,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "simply-meds-online",
    name: "Simply Meds Online",
    deliveryNote: "Free Del",
    rating: 4.8,
    headlineFrom: 162,
    prices: {
      "0.25mg": 110,
      "0.5mg": 120,
      "1mg": 150,
      "1.7mg": 200,
      "2.4mg": 230,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "click2pharmacy",
    name: "Click2Pharmacy",
    deliveryNote: "inc £5 Del",
    rating: 4.7,
    headlineFrom: 144,
    prices: {
      "0.25mg": 114,
      "0.5mg": 114,
      "1mg": 114,
      "1.7mg": 174,
      "2.4mg": 204,
    },
    updatedLabel: "3 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "simple-online-pharmacy",
    name: "Simple Online Pharmacy",
    deliveryNote: "inc £4 Del",
    rating: 4.7,
    headlineFrom: 144,
    prices: {
      "0.25mg": 103,
      "0.5mg": 123,
      "1mg": 129,
      "1.7mg": 173,
      "2.4mg": 193,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "tribelle",
    name: "TribElle",
    deliveryNote: "inc £6 Del",
    rating: 4.7,
    headlineFrom: 148,
    prices: {
      "0.25mg": 117,
      "0.5mg": 117,
      "1mg": 122,
      "1.7mg": 166,
      "2.4mg": 220,
    },
    updatedLabel: "3 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "oushk",
    name: "Oushk",
    deliveryNote: "inc £7 Del",
    rating: 4.7,
    headlineFrom: 161,
    prices: {
      "0.25mg": 132,
      "0.5mg": 136,
      "1mg": 146,
      "1.7mg": 186,
      "2.4mg": 206,
    },
    updatedLabel: "3 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "phlo-clinic",
    name: "Phlo Clinic",
    deliveryNote: "Free Del",
    rating: 4.7,
    headlineFrom: 163,
    prices: {
      "0.25mg": 119,
      "0.5mg": 139,
      "1mg": 169,
      "1.7mg": 189,
      "2.4mg": 199,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "voy",
    name: "Voy",
    deliveryNote: "Free Del",
    rating: 4.7,
    headlineFrom: 192,
    prices: {
      "0.25mg": 144,
      "0.5mg": 169,
      "1mg": 189,
      "1.7mg": 219,
      "2.4mg": 239,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "farmeci",
    name: "Farmeci",
    deliveryNote: "Free Del",
    rating: 4.6,
    headlineFrom: 135,
    prices: {
      "0.25mg": 91,
      "0.5mg": 114,
      "1mg": 114,
      "1.7mg": 159,
      "2.4mg": 195,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "cloud-pharmacy",
    name: "Cloud Pharmacy",
    deliveryNote: "inc £7 Del",
    rating: 4.6,
    headlineFrom: 144,
    prices: {
      "0.25mg": 122,
      "0.5mg": 127,
      "1mg": 132,
      "1.7mg": 157,
      "2.4mg": 182,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "pharmacy2u",
    name: "Pharmacy2U",
    deliveryNote: "inc £6 Del",
    rating: 4.6,
    headlineFrom: 149,
    prices: {
      "0.25mg": 101,
      "0.5mg": 121,
      "1mg": 151,
      "1.7mg": 176,
      "2.4mg": 196,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "iq-doctor",
    name: "IQ Doctor",
    deliveryNote: "inc £5 Del",
    rating: 4.6,
    headlineFrom: 154,
    prices: {
      "0.25mg": 128,
      "0.5mg": 133,
      "1mg": 133,
      "1.7mg": 179,
      "2.4mg": 199,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "getweightloss",
    name: "GetWeightLoss",
    deliveryNote: "Free Del",
    rating: 4.4,
    headlineFrom: 125,
    prices: {
      "0.25mg": 89,
      "0.5mg": 93,
      "1mg": 94,
      "1.7mg": 149,
      "2.4mg": 199,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "click-pharmacy",
    name: "Click Pharmacy",
    deliveryNote: "Free Del",
    rating: 4.5,
    headlineFrom: 152,
    prices: {
      "0.25mg": 100,
      "0.5mg": 130,
      "1mg": 140,
      "1.7mg": 180,
      "2.4mg": 210,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "asda-online-doctor",
    name: "Asda Online Doctor",
    deliveryNote: "Collect price",
    rating: 4.4,
    headlineFrom: 139,
    prices: {
      "0.25mg": 89,
      "0.5mg": 109,
      "1mg": 139,
      "1.7mg": 169,
      "2.4mg": 189,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "superdrug-online-doctor",
    name: "Superdrug Online Doctor",
    deliveryNote: "Collect price",
    rating: 4.4,
    headlineFrom: 156,
    prices: {
      "0.25mg": 99,
      "0.5mg": 119,
      "1mg": 166,
      "1.7mg": 192,
      "2.4mg": 205,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "boots-online-doctor",
    name: "Boots Online Doctor",
    deliveryNote: "Collect price",
    rating: 4.4,
    headlineFrom: 157,
    prices: {
      "0.25mg": 100,
      "0.5mg": 120,
      "1mg": 167,
      "1.7mg": 193,
      "2.4mg": 206,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "zava",
    name: "Zava",
    deliveryNote: "inc £4 Del",
    rating: 4.3,
    headlineFrom: 150,
    prices: {
      "0.25mg": 103,
      "0.5mg": 124,
      "1mg": 154,
      "1.7mg": 173,
      "2.4mg": 194,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "lloyds-pharmacy-online-doctor",
    name: "Lloyds Pharmacy Online Doctor",
    deliveryNote: "inc £5 Del",
    rating: 4.3,
    headlineFrom: 155,
    prices: {
      "0.25mg": 105,
      "0.5mg": 125,
      "1mg": 155,
      "1.7mg": 185,
      "2.4mg": 205,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
  {
    id: "medexpress",
    name: "MedExpress",
    deliveryNote: "inc £6 Del",
    rating: 4.3,
    headlineFrom: 156,
    prices: {
      "0.25mg": 106,
      "0.5mg": 126,
      "1mg": 156,
      "1.7mg": 186,
      "2.4mg": 206,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/how-to-get-wegovy",
  },
];

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
