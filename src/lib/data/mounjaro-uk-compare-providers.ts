/** Illustrative UK Mounjaro pen prices — confirm live rates on each pharmacy. */

export const MOUNJARO_UK_COMPARE_LAST_UPDATED = "April 2026";

export type MounjaroUkCompareBadge = "mostPopular" | "bestValue";

export type MounjaroUkProviderCompare = {
  id: string;
  name: string;
  deliveryNote: string;
  rating: number;
  headlineFrom: number;
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

export const MOUNJARO_UK_COMPARE_PROVIDERS: MounjaroUkProviderCompare[] = [
  {
    id: "swift-doctor",
    name: "Swift Doctor",
    deliveryNote: "Free Del",
    rating: 4.9,
    headlineFrom: 226,
    prices: {
      "2.5mg": 149,
      "5mg": 169,
      "7.5mg": 225,
      "10mg": 249,
      "12.5mg": 265,
      "15mg": 289,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    badges: ["mostPopular"],
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "care-pharmacy",
    name: "Care Pharmacy",
    deliveryNote: "Free Del",
    rating: 4.9,
    headlineFrom: 235,
    prices: {
      "2.5mg": 150,
      "5mg": 185,
      "7.5mg": 235,
      "10mg": 260,
      "12.5mg": 280,
      "15mg": 300,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "pharmica",
    name: "Pharmica",
    deliveryNote: "Free Del",
    rating: 4.9,
    headlineFrom: 256,
    prices: {
      "2.5mg": 160,
      "5mg": 200,
      "7.5mg": 260,
      "10mg": 285,
      "12.5mg": 310,
      "15mg": 320,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "fylde-clinic",
    name: "Fylde Clinic",
    deliveryNote: "Free Del",
    rating: 4.8,
    headlineFrom: 210,
    prices: {
      "2.5mg": 134,
      "5mg": 160,
      "7.5mg": 210,
      "10mg": 235,
      "12.5mg": 250,
      "15mg": 270,
    },
    updatedLabel: "3 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "pharmulous",
    name: "Pharmulous",
    deliveryNote: "inc £5 Del",
    rating: 4.8,
    headlineFrom: 222,
    prices: {
      "2.5mg": 150,
      "5mg": 170,
      "7.5mg": 220,
      "10mg": 245,
      "12.5mg": 265,
      "15mg": 280,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "the-family-chemist",
    name: "The Family Chemist",
    deliveryNote: "inc £7 Del",
    rating: 4.8,
    headlineFrom: 224,
    prices: {
      "2.5mg": 147,
      "5mg": 172,
      "7.5mg": 223,
      "10mg": 246,
      "12.5mg": 267,
      "15mg": 287,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    badges: ["bestValue"],
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "ashcroft-pharmacy",
    name: "Ashcroft Pharmacy",
    deliveryNote: "inc £7 Del",
    rating: 4.8,
    headlineFrom: 233,
    prices: {
      "2.5mg": 157,
      "5mg": 172,
      "7.5mg": 232,
      "10mg": 257,
      "12.5mg": 277,
      "15mg": 302,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "cuva-health",
    name: "Cuva Health",
    deliveryNote: "inc £4 Del",
    rating: 4.8,
    headlineFrom: 234,
    prices: {
      "2.5mg": 140,
      "5mg": 179,
      "7.5mg": 234,
      "10mg": 264,
      "12.5mg": 284,
      "15mg": 304,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "chemist4u",
    name: "Chemist4U",
    deliveryNote: "Free Del",
    rating: 4.8,
    headlineFrom: 241,
    prices: {
      "2.5mg": 148,
      "5mg": 188,
      "7.5mg": 248,
      "10mg": 278,
      "12.5mg": 288,
      "15mg": 298,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "simply-meds-online",
    name: "SimplyMeds Online",
    deliveryNote: "Free Del",
    rating: 4.8,
    headlineFrom: 253,
    prices: {
      "2.5mg": 180,
      "5mg": 190,
      "7.5mg": 250,
      "10mg": 280,
      "12.5mg": 300,
      "15mg": 320,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "click2pharmacy",
    name: "Click2 Pharmacy",
    deliveryNote: "inc £5 Del",
    rating: 4.7,
    headlineFrom: 230,
    prices: {
      "2.5mg": 151,
      "5mg": 179,
      "7.5mg": 228,
      "10mg": 255,
      "12.5mg": 275,
      "15mg": 294,
    },
    updatedLabel: "3 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "tribelle",
    name: "Tribelle",
    deliveryNote: "inc £6 Del",
    rating: 4.7,
    headlineFrom: 234,
    prices: {
      "2.5mg": 153,
      "5mg": 176,
      "7.5mg": 230,
      "10mg": 256,
      "12.5mg": 276,
      "15mg": 296,
    },
    updatedLabel: "3 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "phlo-clinic",
    name: "Phlo Clinic",
    deliveryNote: "Free Del",
    rating: 4.7,
    headlineFrom: 252,
    prices: {
      "2.5mg": 169,
      "5mg": 199,
      "7.5mg": 249,
      "10mg": 279,
      "12.5mg": 299,
      "15mg": 319,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "oushk",
    name: "Oushk",
    deliveryNote: "inc £7 Del",
    rating: 4.7,
    headlineFrom: 255,
    prices: {
      "2.5mg": 176,
      "5mg": 196,
      "7.5mg": 256,
      "10mg": 286,
      "12.5mg": 297,
      "15mg": 317,
    },
    updatedLabel: "3 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "simple-online-pharmacy",
    name: "Simple Online Pharmacy",
    deliveryNote: "inc £4 Del",
    rating: 4.7,
    headlineFrom: 264,
    prices: {
      "2.5mg": 173,
      "5mg": 204,
      "7.5mg": 264,
      "10mg": 304,
      "12.5mg": 314,
      "15mg": 324,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "voy",
    name: "Voy",
    deliveryNote: "Free Del",
    rating: 4.7,
    headlineFrom: 297,
    prices: {
      "2.5mg": 214,
      "5mg": 244,
      "7.5mg": 294,
      "10mg": 324,
      "12.5mg": 344,
      "15mg": 359,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "farmeci",
    name: "Farmeci",
    deliveryNote: "Free Del",
    rating: 4.6,
    headlineFrom: 234,
    prices: {
      "2.5mg": 145,
      "5mg": 179,
      "7.5mg": 239,
      "10mg": 259,
      "12.5mg": 279,
      "15mg": 299,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "cloud-pharmacy",
    name: "Cloud Pharmacy",
    deliveryNote: "inc £7 Del",
    rating: 4.6,
    headlineFrom: 241,
    prices: {
      "2.5mg": 172,
      "5mg": 182,
      "7.5mg": 242,
      "10mg": 267,
      "12.5mg": 282,
      "15mg": 302,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "pharmacy2u",
    name: "Pharmacy2U",
    deliveryNote: "inc £6 Del",
    rating: 4.6,
    headlineFrom: 251,
    prices: {
      "2.5mg": 176,
      "5mg": 196,
      "7.5mg": 251,
      "10mg": 286,
      "12.5mg": 296,
      "15mg": 306,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "iq-doctor",
    name: "IQ Doctor",
    deliveryNote: "inc £5 Del",
    rating: 4.6,
    headlineFrom: 253,
    prices: {
      "2.5mg": 180,
      "5mg": 200,
      "7.5mg": 250,
      "10mg": 280,
      "12.5mg": 300,
      "15mg": 310,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "click-pharmacy",
    name: "Click Pharmacy",
    deliveryNote: "Free Del",
    rating: 4.5,
    headlineFrom: 243,
    prices: {
      "2.5mg": 170,
      "5mg": 190,
      "7.5mg": 240,
      "10mg": 270,
      "12.5mg": 290,
      "15mg": 300,
    },
    updatedLabel: "4 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "getweightloss",
    name: "Get Weight Loss",
    deliveryNote: "Free Del",
    rating: 4.4,
    headlineFrom: 210,
    prices: {
      "2.5mg": 134,
      "5mg": 160,
      "7.5mg": 208,
      "10mg": 238,
      "12.5mg": 248,
      "15mg": 270,
    },
    updatedLabel: "4 April",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "asda-online-doctor",
    name: "Asda Online Doctor",
    deliveryNote: "Collect price",
    rating: 4.4,
    headlineFrom: 242,
    prices: {
      "2.5mg": 149,
      "5mg": 189,
      "7.5mg": 249,
      "10mg": 279,
      "12.5mg": 289,
      "15mg": 299,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "superdrug-online-doctor",
    name: "Superdrug Online Doctor",
    deliveryNote: "Collect price",
    rating: 4.4,
    headlineFrom: 264,
    prices: {
      "2.5mg": 176,
      "5mg": 189,
      "7.5mg": 267,
      "10mg": 302,
      "12.5mg": 314,
      "15mg": 334,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "boots-online-doctor",
    name: "Boots Online Doctor",
    deliveryNote: "Collect price",
    rating: 4.4,
    headlineFrom: 265,
    prices: {
      "2.5mg": 177,
      "5mg": 190,
      "7.5mg": 268,
      "10mg": 303,
      "12.5mg": 315,
      "15mg": 335,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "zava",
    name: "Zava",
    deliveryNote: "inc £4 Del",
    rating: 4.3,
    headlineFrom: 254,
    prices: {
      "2.5mg": 174,
      "5mg": 192,
      "7.5mg": 254,
      "10mg": 284,
      "12.5mg": 304,
      "15mg": 314,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "lloyds-pharmacy-online-doctor",
    name: "Lloyds Pharmacy Online Doctor",
    deliveryNote: "inc £5 Del",
    rating: 4.3,
    headlineFrom: 257,
    prices: {
      "2.5mg": 185,
      "5mg": 195,
      "7.5mg": 255,
      "10mg": 285,
      "12.5mg": 305,
      "15mg": 315,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
  {
    id: "medexpress",
    name: "MedExpress",
    deliveryNote: "inc £6 Del",
    rating: 4.3,
    headlineFrom: 258,
    prices: {
      "2.5mg": 186,
      "5mg": 196,
      "7.5mg": 256,
      "10mg": 286,
      "12.5mg": 306,
      "15mg": 316,
    },
    updatedLabel: "6 March",
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  },
];

export function getMounjaroCompareProviderById(
  id: string,
): MounjaroUkProviderCompare | undefined {
  return MOUNJARO_UK_COMPARE_PROVIDERS.find((p) => p.id === id);
}

export function startingPrice(p: MounjaroUkProviderCompare): number {
  return Math.min(...MOUNJARO_DOSE_KEYS.map((k) => p.prices[k]));
}

export function estimatedMonthlyCost(p: MounjaroUkProviderCompare): number {
  const sum = MOUNJARO_DOSE_KEYS.reduce((acc, k) => acc + p.prices[k], 0);
  return Math.round(sum / MOUNJARO_DOSE_KEYS.length);
}

export function dosePriceRangeByStrengthMounjaro(
  providers: MounjaroUkProviderCompare[],
): { dose: string; min: number; max: number; avg: number }[] {
  return MOUNJARO_DOSE_KEYS.map((k) => {
    const vals = providers.map((p) => p.prices[k]);
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
