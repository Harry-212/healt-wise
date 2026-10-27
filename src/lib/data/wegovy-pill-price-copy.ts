import {
  PILL_PRICES_LAST_CHECKED_LABEL,
  WEGOVY_PILL_DOSES,
  cheapestAtDose,
  doseRange,
  formatPillGbp,
  stepUpTotals,
  type PillPriceRow,
} from "./pill-prices";
import { WEGOVY_PILL_PRICE_ROWS } from "./pill-price-rows";
import type { PillFaq } from "../seo/pill-price-json-ld";

/**
 * Harry to confirm the 25mg tablet is on sale. Set to false to drop the 25mg
 * dose everywhere on /wegovy-pill-price-comparison: the tab, the cards, the
 * step up totals, the meta description, the hero and the FAQ answers.
 */
export const WEGOVY_PILL_25MG_ON_SALE = true;

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five"];

export const WEGOVY_PILL_PAGE_DOSES = WEGOVY_PILL_25MG_ON_SALE
  ? WEGOVY_PILL_DOSES
  : WEGOVY_PILL_DOSES.slice(0, -1);

export const WEGOVY_PILL_PAGE_ROWS: PillPriceRow[] = WEGOVY_PILL_PRICE_ROWS.map((r) => ({
  ...r,
  prices: r.prices.slice(0, WEGOVY_PILL_PAGE_DOSES.length),
}));

/** "a", "a and b", "a, b and c". */
export function joinList(items: string[]): string {
  if (items.length <= 2) return items.join(" and ");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

export function buildWegovyPillPriceCopy() {
  const doses = WEGOVY_PILL_PAGE_DOSES;
  const rows = WEGOVY_PILL_PAGE_ROWS;
  const ranges = doses.map((_, i) => doseRange(rows, i));
  const cheapest = doses.map((_, i) => cheapestAtDose(rows, i));
  const totals = stepUpTotals(rows);

  const firstDose = doses[0];
  const lastDose = doses[doses.length - 1];
  const lowest = ranges[0].lowest;
  const highest = ranges[ranges.length - 1].highest;
  const lowestTotal = totals[0].total;
  const highestTotal = totals[totals.length - 1].total;
  const gap = Math.round((highestTotal - lowestTotal) * 100) / 100;

  const countWord = NUMBER_WORDS[doses.length];
  /** "1.5, 4, 9 and 25mg" */
  const bareDoses = `${joinList(doses.map((d) => d.replace("mg", "")))}mg`;
  const laterDoses = joinList(doses.slice(1));

  const description = `Compare Wegovy pill prices from ${rows.length} UK providers by dose, from ${formatPillGbp(lowest)} to ${formatPillGbp(highest)} a month. Listed prices, last checked ${PILL_PRICES_LAST_CHECKED_LABEL}.`;

  const heroAnswer = `Listed Wegovy pill prices from ${rows.length} UK providers run from ${formatPillGbp(lowest)} a month for the ${firstDose} dose to ${formatPillGbp(highest)} a month for the ${lastDose} dose. Pick a dose below to see every provider, cheapest first. Listed prices, last checked ${PILL_PRICES_LAST_CHECKED_LABEL}, confirm at checkout.`;

  const at = (i: number) => cheapest[i].overall;
  const rest = doses.slice(1).map((_, k) => at(k + 1));
  const restShareProvider = rest.every(
    (r) => r.providers.join(" and ") === rest[0].providers.join(" and "),
  );
  const cheapestAnswer =
    `For the ${firstDose} dose the lowest listed price is ${formatPillGbp(at(0).price)} at ${at(0).providers.join(" and ")}. ` +
    (restShareProvider
      ? `For ${laterDoses} the lowest listed prices are ${joinList(rest.map((r) => formatPillGbp(r.price)))} at ${rest[0].providers.join(" and ")}.`
      : doses
          .slice(1)
          .map((d, k) => `For ${d} it is ${formatPillGbp(rest[k].price)} at ${rest[k].providers.join(" and ")}.`)
          .join(" "));

  const faqs: PillFaq[] = [
    {
      question: "How much does the Wegovy pill cost in the UK?",
      answer: `On this page, listed monthly prices run from ${formatPillGbp(lowest)} for the ${firstDose} dose to ${formatPillGbp(highest)} for the ${lastDose} dose. Listed prices, last checked ${PILL_PRICES_LAST_CHECKED_LABEL}, confirm at checkout.`,
    },
    { question: "What is the cheapest Wegovy pill price?", answer: cheapestAnswer },
    {
      question: "Do Wegovy pill prices change by dose?",
      answer: `Yes. Each dose has its own price, and prices rise with the dose. The ${firstDose} dose is the lowest priced and the ${lastDose} dose the highest.`,
    },
    {
      question: `How much do all ${countWord} doses cost?`,
      answer: `One month at each of ${joinList(doses)} costs from ${formatPillGbp(lowestTotal)} to ${formatPillGbp(highestTotal)} across the providers on this page, a gap of ${formatPillGbp(gap)}.`,
    },
    {
      question: "Is the Wegovy pill cheaper than the injection?",
      answer:
        "We do not compare the two on this page because the injection is priced and dosed differently. Compare the listed monthly price of each against your prescriber's advice.",
    },
    {
      question: "Does the listed price include delivery?",
      answer:
        "Not always. Some providers list delivery separately or add it at checkout, so check the final total before you order.",
    },
    {
      question: "Is the Wegovy pill available on the NHS?",
      answer:
        "Not at the moment. The MHRA approved the tablet on 11 June 2026, and the NHS has not made it available yet.",
    },
    {
      question: "Why do prices differ between providers?",
      answer:
        "Providers set their own prices and include different services. Some prices also come from comparison sites, which is why each row shows its source.",
    },
  ];

  return {
    doses,
    rows,
    ranges,
    cheapest,
    totals,
    gap,
    countWord,
    bareDoses,
    laterDoses,
    description,
    heroAnswer,
    faqs,
  };
}
