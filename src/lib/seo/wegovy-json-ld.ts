import { siteOrigin } from "@/lib/seo/site-origin";

export function wegovyArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "What is Wegovy? UK guide: how it works, side effects & prices",
    description:
      "Independent UK guide to Wegovy (semaglutide): mechanism, trial results, dosing, private prices, eligibility, safety, and how to compare providers.",
    url: `${base}/what-is-wegovy`,
    dateModified: "2026-04-06",
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

export const WEGOVY_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "How much does Wegovy cost in the UK?",
    answer:
      "Private Wegovy prices vary by dose and provider. In our illustrative April 2026 sample, headline monthly order prices for common pen strengths often fall roughly between about £169 and £269 before promotions—always confirm live pricing, consultation rules, and delivery on the pharmacy site.",
  },
  {
    question: "Is Wegovy available on the NHS?",
    answer:
      "Access depends on local criteria and eligibility. Some patients may receive GLP-1 treatments via NHS specialist weight-management pathways when criteria are met; many people obtain Wegovy through private online clinics or pharmacies after a consultation. Check NHS and local guidance for the latest position.",
  },
  {
    question: "How long before I see results with Wegovy?",
    answer:
      "In clinical trials, weight change accumulates over many months alongside diet and activity changes. Individual response varies; your prescriber may adjust dose over time. Do not expect instant results in the first week.",
  },
];

export function wegovyFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WEGOVY_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const WEGOVY_COMPARE_UK_FAQ_ITEMS: { question: string; answer: string }[] =
  [
    {
      question: "How much does Wegovy cost in the UK?",
      answer:
        "Private Wegovy pen prices depend on dose (0.25 mg up to 2.4 mg), the pharmacy, and whether consultation and delivery fees are bundled. Our comparison table shows illustrative starting and average-style monthly figures from a single snapshot—always confirm the live checkout price on the provider’s site.",
    },
    {
      question: "What is the cheapest Wegovy UK provider?",
      answer:
        "The lowest listed starting pen price in our April 2026 snapshot varies when you filter the table; several chains and online clinics compete closely. The cheapest headline price is not always the best value—check consultation rules, delivery, cold-chain handling, and aftercare before you choose.",
    },
    {
      question: "Do I need a prescription for Wegovy?",
      answer:
        "Yes. Wegovy (semaglutide) is prescription-only in the UK. Legitimate private routes require an appropriate medical assessment by a qualified prescriber before a pharmacy can supply it.",
    },
    {
      question: "Why do Wegovy prices vary between pharmacies?",
      answer:
        "Prices differ because of dose, bundled consultation fees, delivery and cold-chain logistics, promotions, and how each provider structures subscriptions or bundles. Use the table filters and the sections below to compare total value, not just the headline pen price.",
    },
  ];

export function wegovyCompareUkFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WEGOVY_COMPARE_UK_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
