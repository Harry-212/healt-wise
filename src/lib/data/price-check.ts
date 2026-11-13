/**
 * The one price-check date for every live Mounjaro and Wegovy retail price.
 *
 * Everything that shows or declares when prices were checked (visible text,
 * the compare and profile tables, page metadata, JSON-LD) reads this value, so
 * a new price check is one edit here and never a page-by-page change. The live
 * price store's own "last updated" labels are not used for display.
 *
 * Keep this file dependency-free: it is read by plain-Node SEO tests.
 *
 * Scope: Mounjaro and Wegovy retail prices. The unpublished Foundayo and
 * Wegovy pill drafts keep their own dates (`pill-prices.ts`) until Harry
 * confirms those prices.
 */

/** yyyy-mm-dd. Harry confirmed all Mounjaro and Wegovy retail prices on this date. */
export const PRICE_CHECK_DATE_ISO = "2026-10-31";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatIso(iso: string, short: boolean): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) throw new Error(`PRICE_CHECK_DATE_ISO must be yyyy-mm-dd, got "${iso}"`);
  const month = MONTHS[Number(m[2]) - 1];
  if (!month) throw new Error(`PRICE_CHECK_DATE_ISO has no month "${m[2]}"`);
  return `${Number(m[3])} ${short ? month.slice(0, 3) : month} ${m[1]}`;
}

/** "31 October 2026": prose, page copy, schema descriptions. */
export const PRICE_CHECK_DATE_LONG = formatIso(PRICE_CHECK_DATE_ISO, false);

/** "31 Oct 2026": table cells ("Updated" columns). */
export const PRICE_CHECK_DATE_SHORT = formatIso(PRICE_CHECK_DATE_ISO, true);

/**
 * The one approved price-check-frequency wording (Task 142, Option C, approved by Harry
 * on 11 November 2026). Every visible statement, FAQ answer and JSON-LD field about how
 * often prices are checked uses this text. It never states a date: the date shown next to
 * it comes from PRICE_CHECK_DATE_LONG, so it stays the latest completed verification.
 */
export const PRICE_CHECK_FREQUENCY_TEXT =
  "Standard retail prices are reviewed monthly using each partner pharmacy’s website and information supplied directly by the pharmacy. The date shown is the date of the latest completed price verification. Prices may change between checks, so confirm the final price and any additional charges with the pharmacy before ordering.";

/**
 * `dateModified` for a page that shows prices: the later of the page's own
 * content-edit date and the price-check date, so schema never claims the page
 * was last modified before the prices on it were checked.
 */
export function dateModifiedWithPriceCheck(contentModifiedIso: string): string {
  return contentModifiedIso > PRICE_CHECK_DATE_ISO ? contentModifiedIso : PRICE_CHECK_DATE_ISO;
}
