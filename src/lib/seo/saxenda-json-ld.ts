import { siteOrigin } from "@/lib/seo/site-origin";

export function saxendaArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "What is Saxenda? UK guide: how it works, weight loss & prices",
    description:
      "Independent UK guide to Saxenda (liraglutide): GLP-1 mechanism, SCALE trial context, daily dosing titration, private prices, eligibility, safety, and how it compares to newer weekly injections.",
    url: `${base}/what-is-saxenda`,
    dateModified: "2026-04-07",
    reviewedBy: {
      "@type": "Person",
      name: "Health Wise editorial team",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Health Wise",
      url: base,
    },
  };
}

export const SAXENDA_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "What is Saxenda and how is it taken?",
    answer:
      "Saxenda (liraglutide) is a prescription GLP-1 injection for weight management in eligible adults. Unlike weekly pens such as Wegovy or Mounjaro, Saxenda is injected once daily. Your prescriber increases the dose gradually to improve tolerability.",
  },
  {
    question: "How much weight can you lose on Saxenda?",
    answer:
      "In major trials, average weight loss with liraglutide 3 mg plus lifestyle support was often in the region of roughly 5–8% of body weight over about a year compared with placebo—individual results vary widely and depend on adherence, dose, and lifestyle.",
  },
  {
    question: "Is Saxenda as strong as Mounjaro or Wegovy?",
    answer:
      "Headline trial averages for newer weekly agents have often been higher than historical liraglutide trials, but the right medicine depends on your health profile, preferences (daily vs weekly), access, cost, and prescriber advice—not headline percentages alone.",
  },
];

export function saxendaFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SAXENDA_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const SAXENDA_COMPARE_UK_FAQ_ITEMS: { question: string; answer: string }[] =
  [
    {
      question: "How much does Saxenda cost in the UK?",
      answer:
        "Private Saxenda prices depend on how many pens you order (often 1, 3, or 5), the pharmacy, and whether consultation and delivery fees are bundled. Our comparison table shows illustrative pack totals, £/mg, and repeat figures from a single snapshot—always confirm the live checkout price on the provider’s site.",
    },
    {
      question: "What is the cheapest Saxenda UK provider?",
      answer:
        "The lowest listed single-pen pack price in our April 2026 snapshot changes when you switch pack size in the table; Superdrug, Lloyds, and Boots often sit close together. The cheapest headline price is not always the best value—check consultation rules, delivery, cold-chain handling, and aftercare before you choose.",
    },
    {
      question: "Do I need a prescription for Saxenda?",
      answer:
        "Yes. Saxenda (liraglutide) is prescription-only in the UK. Legitimate private routes require an appropriate medical assessment by a qualified prescriber before a pharmacy can supply it.",
    },
    {
      question: "Why do Saxenda prices vary between pharmacies?",
      answer:
        "Prices differ because of pack size, bundled consultation fees, delivery and cold-chain logistics, member discounts or promotions, and how each provider structures repeats. Use the pack-size tabs and filters to compare total value, not just the headline pen price.",
    },
  ];

export function saxendaCompareUkFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SAXENDA_COMPARE_UK_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
