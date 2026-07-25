import type { Metadata } from "next";

/**
 * Standard pharmacy profile SEO:
 * Primary — "{Provider} weight management review"
 * Secondary — treatment prices, consultation, delivery fees, clinical support,
 * registered pharmacy, provider review, total monthly cost
 */

export function pharmacyReviewTitle(providerName: string): string {
  return `${providerName} weight management review`;
}

export function pharmacyReviewDescription(providerName: string): string {
  return `${providerName} weight management review: treatment prices, consultation process, delivery fees, clinical support, registered pharmacy context and total monthly cost. Independent provider review from Healthwise360 — not medical advice.`;
}

export function pharmacyReviewH1(providerName: string): string {
  return pharmacyReviewTitle(providerName);
}

export function pharmacyReviewSubtitle(providerName: string): string {
  return `Independent provider review of ${providerName}: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice).`;
}

export function pharmacyReviewMetadata(opts: {
  providerName: string;
  canonical: string;
}): Metadata {
  const title = pharmacyReviewTitle(opts.providerName);
  const description = pharmacyReviewDescription(opts.providerName);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: opts.canonical },
    openGraph: {
      type: "website",
      url: opts.canonical,
      title,
      description,
    },
  };
}

/** Slugs with custom dossier landings — keep in sync with `/pharmacies/[slug]` branches. */
export const PHARMACY_LANDING_PROVIDER_NAMES: Record<string, string> = {
  "ayp-healthcare": "AYP Healthcare",
  "bolt-pharmacy": "Bolt Pharmacy",
  "boots-online-doctor": "Boots Online Doctor",
  click2pharmacy: "Click2Pharmacy",
  chequp: "CheqUp Pharmacy",
  "cloud-pharmacy": "Cloud Pharmacy",
  curate: "Curate",
  curely: "Curely",
  "cuva-health": "Cuva Health",
  dotor: "Dotor",
  "dr-weightmans": "Dr Weightmans",
  "e-surgery": "e-Surgery",
  envigore: "Envigore",
  farmeci: "Farmeci",
  "fella-health": "Fella Health",
  "fylde-clinic": "Fylde Clinic",
  genmeds: "Genmeds",
  "get-a-drip": "Get A Drip",
  getadrip: "Get A Drip",
  "get-weight-loss": "GetWeightLoss",
  getweightloss: "GetWeightLoss",
  "goodbody-clinic": "GoodBody Clinic",
  "happy-pharmacy": "Happy Pharmacy",
  "hey-slim": "Hey Slim",
  "iq-doctor": "IQ Doctor",
  "jood-life": "Jood Life Pharmacy",
  juniper: "Juniper",
  "live-well-weight-loss": "Live Well Weight Loss",
  "lloyds-pharmacy-online-doctor": "Lloyds Online Doctor",
  "lotus-weight-loss": "Lotus Weight Loss",
  "manchester-chemist": "Manchester Chemist",
  medexpress: "MedExpress",
  medhut: "MedHut",
  "medicine-marketplace": "Medicine Market Place",
  medicspot: "Medicspot",
  medino: "Medino",
  "msh-weight-loss": "MSH Weight Loss",
  "my-london-pharmacy": "My London Pharmacy",
  "next-script": "Next Script",
  "nulife-pharmacy": "NuLife Pharmacy",
  numan: "Numan",
  onlinemeds: "OnlineMeds",
  oushk: "Oushk Pharmacy",
  "pharmacy-advance": "Pharmacy Advance",
  "pharmacy-express": "Pharmacy Xpress",
  "pharmacy-xpress": "Pharmacy Xpress",
  pharmacy2u: "Pharmacy2U",
  pharmica: "Pharmica",
  pharmulous: "Pharmulous",
  pills2u: "Pills2U",
  pillsorted: "PillSorted",
  pillsphere: "PillSphere",
  quickmeds: "Quickmeds",
  "second-nature": "Second Nature",
  shape8: "Shape8",
  "skin-and-shape": "Skin & Shape Pharmacy",
  "care-pharmacy": "The Care Pharmacy",
  "simple-online-pharmacy": "Simple Online Pharmacy",
  "slimming-direct": "Slimming Direct",
  "superdrug-online-doctor": "Superdrug Online Doctor",
  "swift-doctor": "Swift Doctor",
  "swift-medi": "SwiftMedi",
  "the-family-chemist": "The Family Chemist",
  "the-independent-pharmacy": "The Independent Pharmacy",
  tribelle: "Tribelle",
  voy: "Voy",
  weprescribe: "WePrescribe",
  "well-pharmacy": "Well Pharmacy",
  yourpharmacy: "YourPharmacy",
  zava: "Zava",
  "asda-online-doctor": "Asda Online Doctor",
  "ashcroft-pharmacy": "Ashcroft Pharmacy",
};

export function landingProviderName(slug: string): string | undefined {
  return PHARMACY_LANDING_PROVIDER_NAMES[slug];
}
