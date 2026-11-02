import {
  FOUNDAYO_DOSES,
  PILL_PRICES_LAST_CHECKED_LABEL,
  cheapestAtDose,
  doseRange,
  formatPillGbp,
  type PillPriceRow,
} from "./pill-prices";

/** "1 provider" / "3 providers". Counts come from the rows, never typed. */
export function providerCount(n: number): string {
  return n === 1 ? "1 provider" : `${n} providers`;
}

/** "a", "a and b", "a, b and c". */
function joinNames(names: string[]): string {
  if (names.length <= 2) return names.join(" and ");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

/**
 * Copy for the unpublished Foundayo page, built from the rows so no count, price
 * or provider name can fall out of step with the data.
 */
export function buildFoundayoPriceCopy(rows: PillPriceRow[]) {
  const doses = FOUNDAYO_DOSES;
  const ranges = doses.map((_, i) => doseRange(rows, i));
  const cheapest = doses.map((_, i) => cheapestAtDose(rows, i));
  const first = ranges[0];
  const last = ranges[ranges.length - 1];
  const lowest = first.lowest;
  const highest = last.highest;
  const n = providerCount(rows.length);

  const description = `Compare Foundayo prices from ${n} by dose, from ${formatPillGbp(lowest)} to ${formatPillGbp(highest)} a month. Listed prices, last checked ${PILL_PRICES_LAST_CHECKED_LABEL}.`;

  const heroAnswer = `Foundayo prices in the UK, across the ${n} listed here, run from ${formatPillGbp(first.lowest)} to ${formatPillGbp(first.highest)} a month for the ${doses[0]} starting dose and from ${formatPillGbp(last.lowest)} to ${formatPillGbp(last.highest)} a month for the ${doses[doses.length - 1]} dose.`;

  const overallLowest = cheapest[0].overall;
  const everyDoseSameProvider = cheapest.every(
    (c) => c.overall.providers.join(" and ") === overallLowest.providers.join(" and "),
  );
  const pharmacyLowest = cheapest[0].pharmacy;

  const costAnswer = `Across the ${n} we list, one month of Foundayo costs between ${formatPillGbp(lowest)} and ${formatPillGbp(highest)}, depending on the dose. The ${doses[0]} dose is listed from ${formatPillGbp(first.lowest)} to ${formatPillGbp(first.highest)}. The ${doses[doses.length - 1]} dose is listed from ${formatPillGbp(last.lowest)} to ${formatPillGbp(last.highest)}. Prices were last checked on ${PILL_PRICES_LAST_CHECKED_LABEL}.`;

  const cheapestAnswer =
    `Of the ${n} we list, ${joinNames(overallLowest.providers)} ${everyDoseSameProvider ? "has the lowest listed price at every dose" : "has the lowest listed price at the starting dose"}, starting at ${formatPillGbp(overallLowest.price)} for ${doses[0]}.` +
    (pharmacyLowest && pharmacyLowest.providers.join(" and ") !== overallLowest.providers.join(" and ")
      ? ` On a pharmacy's own website, ${joinNames(pharmacyLowest.providers)} is lowest, starting at ${formatPillGbp(pharmacyLowest.price)}.`
      : "") +
    " Check the price, any fees and the stock at checkout before you order.";

  const pharmacyRows = rows.filter((r) => r.source === "pharmacy");
  const comparisonRows = rows.filter((r) => r.source === "comparison");
  const sourcesText =
    (pharmacyRows.length > 0
      ? `For ${providerCount(pharmacyRows.length)} (${joinNames(pharmacyRows.map((r) => r.provider))}) we read the price on the provider's own website. `
      : "") +
    (comparisonRows.length > 0
      ? `For ${comparisonRows.length === 1 ? "the other" : `the other ${comparisonRows.length}`}, the price comes from an independent comparison site and has not been checked at the provider's checkout.`
      : "");

  return { description, heroAnswer, costAnswer, cheapestAnswer, sourcesText, hasComparisonRows: comparisonRows.length > 0 };
}
