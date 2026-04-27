const GPHC_BASE = "https://www.pharmacyregulation.org/registers/pharmacy";

/**
 * GPhC “view pharmacy” page for a premises / registration number.
 * Picks the first 6–7 digit registration token from a free-text label
 * (e.g. "1034053" or "9010308 · 9012058" → first number).
 */
export function gphcPharmacyRegisterUrl(gphcRef: string): string {
  const match = gphcRef.match(/(\d{6,7})/);
  if (match) return `${GPHC_BASE}/${match[1]}`;
  return `${GPHC_BASE}/`;
}
