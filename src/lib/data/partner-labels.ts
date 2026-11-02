/**
 * Wording for the partner label shown on comparison tables and the partner
 * block. One place to change it: every component reads these constants.
 *
 * The label sits beside the price tables but never affects their order (see
 * `lib/compare/provider-ordering.ts`). Wording that could read as paid placement
 * is for Ammara and Jeff to decide; change it here and nowhere else.
 *
 * Keep this file dependency-free (read by `providers.ts`, which `next.config.ts`
 * and the plain-Node SEO tests import).
 */

/** Badge on a partner's row or card. */
export const PARTNER_BADGE_LABEL = "Featured Partner";

/** Heading of the block of partner cards above a comparison table. */
export const PARTNER_BLOCK_HEADING = "Featured partners";

/** Accessible name of that block, e.g. "Featured Mounjaro partners". */
export function partnerBlockAriaLabel(medicationLabel: string): string {
  return `Featured ${medicationLabel} partners`;
}
