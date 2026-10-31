/**
 * GPhC pharmacy / premises numbers for compare-table display.
 * Confirm live register entries at https://www.pharmacyregulation.org/registers/pharmacy
 */
export const GPHC_NUMBER_BY_PROVIDER_ID: Record<string, string> = {
  "i-prescribe": "9012850",
  shemed: "9012578",
};

export function gphcNumberForProvider(providerId: string): string | undefined {
  return GPHC_NUMBER_BY_PROVIDER_ID[providerId];
}
