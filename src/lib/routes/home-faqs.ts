/** FAQ copy for the homepage — informational only; not medical advice. */

import type { CompareFaqItem } from "@/lib/routes/compare-faqs";

export function buildHomePageFaqs(
  wegovyStarterLow = "£72.89",
  mounjaroStarterLow = "£119.69",
  mounjaroTopHigh = "£359.95",
): CompareFaqItem[] {
  return [
    {
      q: "How much are weight loss injections in the UK?",
      a: `A starter pen costs from ${wegovyStarterLow} (Wegovy) or ${mounjaroStarterLow} (Mounjaro) a month. Higher doses cost more, up to ${mounjaroTopHigh} a month for Mounjaro 15 mg. Prices change often, so check our table for the latest price.`,
    },
    {
      q: "Which pharmacy has the cheapest weight loss injections?",
      a: "The cheapest pharmacy changes often and is different for each dose. Our price table shows the cheapest price from our latest check first, so you can compare weight loss treatment prices in the UK for every dose.",
    },
    {
      q: "Is Mounjaro or Wegovy better for weight loss?",
      a: "In the main trials, people lost 20.9% of their weight on Mounjaro 15 mg and 14.9% on Wegovy 2.4 mg. But the best choice depends on your health. A prescriber will help you decide.",
    },
    {
      q: "Can I get weight loss injections on the NHS?",
      a: "Sometimes. Depending on your BMI and any health conditions linked to your weight, the NHS may offer weight loss medicines. Rules are strict and waiting times can be long. Ask your GP.",
    },
    {
      q: "Where can I buy weight loss injections in the UK?",
      a: "From a GPhC registered pharmacy, online or in store, after a prescriber checks your health. You cannot buy them without a prescription.",
    },
    {
      q: "What types of weight loss injections are there?",
      a: "The main two are Mounjaro (tirzepatide) and Wegovy (semaglutide). Both are GLP-1 medicines that you inject once a week. Our GLP-1 price comparison for the UK covers both. Weight loss medication prices in the UK change often, so compare weight loss medication prices before you buy.",
    },
    {
      q: "Do all pharmacies offer support while you take the injections?",
      a: "No. Some include free check-ins, dose advice, and an app. Others only send the pen. Each pharmacy review shows what support is included.",
    },
    {
      q: "How often are prices checked?",
      a: "We update our weight loss injections UK price comparison regularly and show the date of the last check next to every price. Always confirm the final price on the pharmacy's website before you pay.",
    },
  ];
}

export const HOME_PAGE_FAQS: CompareFaqItem[] = buildHomePageFaqs();
