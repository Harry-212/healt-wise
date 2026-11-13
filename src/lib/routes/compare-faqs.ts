/** FAQ copy for `/compare/[slug]` — informational only; not medical advice. */

export type CompareFaqItem = {
  q: string;
  a: string;
  /** False keeps the question on the page but out of the FAQPage JSON-LD. */
  inSchema?: boolean;
};

/** Live figures that the price-based FAQ answers quote. */
export type CompareFaqPriceFigures = {
  wegovySixMonthsLow: string;
  mounjaroSixMonthsLow: string;
  wegovySixMonthsTypical: string;
  mounjaroSixMonthsTypical: string;
  wegovyStarterLow?: string;
  mounjaroStarterLow?: string;
  pricesChecked?: string;
};

export const COMPARE_PAGE_FAQS: Record<string, CompareFaqItem[]> = {
  "wegovy-vs-mounjaro": [
    {
      q: "Is Wegovy cheaper than Mounjaro?",
      a: "It depends on the dose. At the starting dose, the lowest price we found was {wegovyStarterLow} for Wegovy and {mounjaroStarterLow} for Mounjaro (checked {pricesChecked}). See section 3 for every dose.",
    },
    {
      q: "How much does Wegovy vs Mounjaro cost for the first month?",
      a: "The lowest first month price we found was {wegovyStarterLow} for Wegovy and {mounjaroStarterLow} for Mounjaro. See the partner table in section 3.1.",
    },
    {
      q: "How much does 6 months of Wegovy or Mounjaro cost?",
      a: "Our estimate is {wegovySixMonthsLow} for Wegovy and {mounjaroSixMonthsLow} for Mounjaro, using the lowest standard prices and the usual dose steps. It is an estimate and your plan may differ. See section 3.2.",
    },
    {
      q: "Why is Wegovy cheaper than Mounjaro at some doses?",
      a: "The two medicines have different manufacturers, different dose steps and different partner pricing, so the gap changes from dose to dose. We show the price at each dose rather than one average.",
    },
    {
      q: "What does the price include?",
      a: "This varies by partner. See section 4 for the pen, consultation, delivery and dose change details we could confirm.",
    },
    {
      q: "Are offers and codes included in the prices you show?",
      a: "No. Standard prices and offer prices are shown separately (section 3.3). Offers can change or end.",
    },
    {
      q: "How often are prices checked?",
      a: "Standard retail prices are reviewed monthly using each partner pharmacy’s website and information supplied directly by the pharmacy. The date shown ({pricesChecked}) is the date of the latest completed price verification. Prices may change between checks, so confirm the final price and any additional charges with the pharmacy before ordering.",
    },
    {
      q: "Is Mounjaro better than Wegovy?",
      a: "In the SURMOUNT-5 trial, people on the maximum dose of tirzepatide (Mounjaro) lost more weight on average than people on semaglutide (Wegovy), 20.2% against 13.7% at 72 weeks. Which one is suitable for you is a decision for your prescriber. See section 6.",
    },
    {
      q: "Is Wegovy the same as Mounjaro?",
      a: "No. They contain different active ingredients: semaglutide in Wegovy and tirzepatide in Mounjaro. See section 5.",
    },
    {
      q: "Can I get Wegovy or Mounjaro on the NHS?",
      a: "Both can be prescribed on the NHS only to people who meet set criteria, and access depends on where you live. See section 8 for the official guidance.",
    },
    {
      q: "Where can I see every dose price?",
      a: "On our Mounjaro price comparison and Wegovy price comparison pages.",
    },
  ],
};

export function getCompareFaqsForSlug(
  slug: string,
  figures?: CompareFaqPriceFigures,
): CompareFaqItem[] {
  const items = COMPARE_PAGE_FAQS[slug] ?? [];
  if (!figures) return items;
  return items.map((item) => ({
    ...item,
    a: item.a.replace(
      /\{(\w+)\}/g,
      (match, key: string) => figures[key as keyof CompareFaqPriceFigures] ?? match,
    ),
  }));
}

/** JSON-LD for FAQ rich results (Google may show FAQ rich results where eligible). */
export function compareFaqPageJsonLd(items: CompareFaqItem[], pageUrl?: string): Record<string, unknown> {
  const faqNode: Record<string, unknown> = {
    "@type": "FAQPage",
    mainEntity: items
      .filter((item) => item.inSchema !== false)
      .map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  faqNode["@context"] = "https://schema.org";

  if (pageUrl) {
    faqNode["@id"] = `${pageUrl}#faq`;
    faqNode["isPartOf"] = { "@id": `${pageUrl}#webpage` };
  }

  return faqNode;
}
