import { activeProviders } from "./providers";

/**
 * GPhC pharmacy / premises numbers for compare-table display, derived from the
 * central provider data. Confirm live register entries at
 * https://www.pharmacyregulation.org/registers/pharmacy
 */
export const GPHC_NUMBER_BY_PROVIDER_ID: Record<string, string> =
  Object.fromEntries(activeProviders().map((p) => [p.id, p.gphcNumber]));

export function gphcNumberForProvider(providerId: string): string | undefined {
  return GPHC_NUMBER_BY_PROVIDER_ID[providerId];
}
