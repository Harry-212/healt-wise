import { getProvider } from "./providers";
import type { PillPriceRow, PillPriceSource } from "./pill-prices";

/**
 * Draft pill datasets (Foundayo, Wegovy pill). Only active partners may appear,
 * and each row names its partner by id so the name always comes from the central
 * provider data. A provider that is paused or removed there fails the tests here
 * until its row is deleted. Rows from the earlier whole-market collection
 * (24 October 2026) were removed on 2 November 2026 (Tasks 114 and 115).
 *
 * Evidence on file for each row:
 * - Solira: Solira's own Pricing Schedule PDFs (Foundayo and Wegovy pill), which
 *   Harry's team supplied and the client confirmed as current at 31 October 2026.
 * - Reach Online Pharmacy (Wegovy pill): read from the pharmacy's own website on
 *   24 October 2026. Awaiting Harry's re-check at 31 October 2026.
 *
 * Not publishable until the checklist in `reports/task-114-115-publication-checklist.md`
 * is complete (at least two partners with verified prices per dose, Harry's
 * confirmation, Jeff's approval).
 */
function row(providerId: string, prices: (number | null)[], source: PillPriceSource): PillPriceRow {
  const provider = getProvider(providerId);
  if (!provider) throw new Error(`pill-price-rows: unknown provider "${providerId}"`);
  return { providerId, provider: provider.name, prices, source };
}

/** Foundayo listed monthly prices (0.8, 2.5, 5.5, 9, 14.5, 17.2mg). */
export const FOUNDAYO_PRICE_ROWS: PillPriceRow[] = [
  row("solira", [79.99, 84.99, 89.99, 107.99, 134.99, 139.99], "pharmacy"),
];

/** Wegovy pill listed monthly prices (1.5, 4, 9, 25mg). */
export const WEGOVY_PILL_PRICE_ROWS: PillPriceRow[] = [
  row("solira", [79.99, 94.99, 114.99, 169.99], "pharmacy"),
  row("reach-online-pharmacy", [98.5, 115, 130, 185], "pharmacy"),
];
