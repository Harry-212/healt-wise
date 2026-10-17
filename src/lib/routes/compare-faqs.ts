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
};

export const COMPARE_PAGE_FAQS: Record<string, CompareFaqItem[]> = {
  "wegovy-vs-mounjaro": [
    {
      q: "Is Mounjaro better than Wegovy?",
      a: "In a head to head trial, people lost more weight on Mounjaro: 20.2% against 13.7% over 72 weeks. But better depends on you. Cost, side effects and your health all matter. A prescriber will help you choose.",
    },
    {
      q: "Is Wegovy as good as Mounjaro?",
      a: "Wegovy also works well. In its main trial, people lost 14.9% of their body weight on average. Mounjaro led to more weight loss in the head to head trial, but Wegovy costs less. The best choice depends on you.",
    },
    {
      q: "Is Wegovy or Mounjaro more effective?",
      a: "On average, Mounjaro was more effective in the head to head trial. Each person responds in their own way, so a prescriber looks at your health and your goals.",
    },
    {
      q: "Is Wegovy the same as Mounjaro?",
      a: "No. They have different medicines. Wegovy has semaglutide and Mounjaro has tirzepatide. They have different makers and different doses. Never swap one for the other without a prescriber.",
    },
    {
      q: "Why are people switching from Mounjaro to Wegovy?",
      a: "Cost is a common reason. Lilly raised the price it charges UK pharmacies in September 2025, and Wegovy usually costs less for the same month. Some people switch because of side effects or supply. A prescriber must plan any switch.",
    },
    {
      q: "Which costs less, Wegovy or Mounjaro?",
      a: "Wegovy costs less for the same month of treatment. In our Wegovy vs Mounjaro price comparison, the first 6 months add up to {wegovySixMonthsLow} for Wegovy and {mounjaroSixMonthsLow} for Mounjaro at the lowest prices. At typical prices they add up to {wegovySixMonthsTypical} and {mounjaroSixMonthsTypical}.",
    },
    {
      q: "Which has fewer side effects?",
      a: "They are about the same. Both mainly cause stomach problems such as nausea, vomiting, diarrhoea and constipation. Read the patient leaflet for the full list.",
    },
    {
      q: "Can I switch from Wegovy to Mounjaro, or the other way?",
      a: "Yes, but only with a prescriber. They will choose a safe starting dose for the new medicine. Do not stop or change on your own.",
    },
    {
      q: "Can I take Wegovy and Mounjaro together?",
      a: "No. They work in a similar way, so you should never take both at the same time. Your prescriber will choose one.",
    },
    {
      q: "Can I get Wegovy or Mounjaro on the NHS?",
      a: "Sometimes. Some GPs in England can prescribe Mounjaro, and Wegovy is given through NHS specialist weight management services. Rules and waiting times differ by area. Ask your GP.",
    },
    {
      q: "Are the prices on this page live checkout prices?",
      a: "No. They are the prices listed on each provider website when we checked them, not live checkout prices. Delivery or consultation fees may be extra, so confirm the final total with the provider.",
      inSchema: false,
    },
    {
      q: "How often do you check prices?",
      a: "We check every price in the first week of each month. The date of the last check is shown next to the prices.",
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
