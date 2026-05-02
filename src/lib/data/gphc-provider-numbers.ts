/**
 * GPhC pharmacy / premises numbers for compare-table display.
 * Confirm live register entries at https://www.pharmacyregulation.org/registers/pharmacy
 */
export const GPHC_NUMBER_BY_PROVIDER_ID: Record<string, string> = {
  "swift-doctor": "9011244",
  "care-pharmacy": "9010308 · 9012058",
  pharmica: "9010537",
  "fylde-clinic": "9011195",
  pharmulous: "9011504",
  "the-family-chemist": "9011210",
  "ashcroft-pharmacy": "9012896",
  "cuva-health": "9012581",
  chemist4u: "9011784",
  "simply-meds-online": "9011037",
  click2pharmacy: "9010298",
  tribelle: "9011933",
  "phlo-clinic": "9011116",
  oushk: "9012610",
  voy: "9012117",
  farmeci: "9012351",
  "cloud-pharmacy": "9012073",
  pharmacy2u: "9011310",
  "iq-doctor": "9011130",
  "click-pharmacy": "9011460",
  getweightloss: "9011333",
  "asda-online-doctor": "9011364 (dispensing pharmacy)",
  "superdrug-online-doctor": "9010471 (dispensing pharmacy)",
  "boots-online-doctor": "1035624 (main premises)",
  zava: "9011019",
  "lloyds-pharmacy-online-doctor": "1034444",
  medexpress: "9010617",
};

export function gphcNumberForProvider(providerId: string): string | undefined {
  return GPHC_NUMBER_BY_PROVIDER_ID[providerId];
}
