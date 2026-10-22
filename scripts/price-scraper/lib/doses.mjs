/** Pen strengths per medication, in titration order (matches the site's data keys). */
export const DOSES = {
  mounjaro: ["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"],
  wegovy: ["0.25mg", "0.5mg", "1mg", "1.7mg", "2.4mg", "7.2mg"],
};

export const MEDICATIONS = Object.keys(DOSES);

/** Plausible single-pen price range in GBP; anything outside is treated as noise. */
export const PRICE_BOUNDS = { min: 40, max: 700 };

/** "2.5mg" → 2.5 */
export function doseValue(dose) {
  return Number.parseFloat(dose);
}

/** 2.5 → "2.5mg" when it is a known strength of the medication, else null. */
export function doseKeyFor(medication, value) {
  return DOSES[medication].find((d) => doseValue(d) === value) ?? null;
}

export function isPlausiblePrice(n) {
  return Number.isFinite(n) && n >= PRICE_BOUNDS.min && n <= PRICE_BOUNDS.max;
}

/** "£1,234.50" / "169.00" / 169 → number (NaN when unparseable). */
export function parseGbp(v) {
  if (typeof v === "number") return v;
  if (typeof v !== "string") return Number.NaN;
  return Number.parseFloat(v.replace(/[£,\s]/g, ""));
}
