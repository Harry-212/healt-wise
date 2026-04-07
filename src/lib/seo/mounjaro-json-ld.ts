import { siteOrigin } from "@/lib/seo/site-origin";

export function mounjaroArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "What is Mounjaro? UK guide: how it works, weight loss & prices",
    description:
      "Independent UK guide to Mounjaro (tirzepatide): dual GIP/GLP-1 mechanism, SURMOUNT trial context, dosing titration, private prices, eligibility, safety, and how to compare providers.",
    url: `${base}/what-is-mounjaro`,
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

export const MOUNJARO_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "What is Mounjaro and how does it work?",
    answer:
      "Mounjaro (tirzepatide) is a prescription injection used for weight management in eligible adults. It activates both GIP and GLP-1 receptors, helping reduce appetite, slow stomach emptying, and support metabolic control alongside diet and exercise. It is not suitable for everyone—only a qualified clinician can decide.",
  },
  {
    question: "How much does Mounjaro cost in the UK?",
    answer:
      "Private Mounjaro prices vary by dose and provider. In our illustrative April 2026 sample, headline order prices often rise with strength; always confirm live pricing, consultation fees, and delivery on the pharmacy site before you pay.",
  },
  {
    question: "How is Mounjaro different from Wegovy?",
    answer:
      "Wegovy contains semaglutide (a GLP-1 receptor agonist). Mounjaro contains tirzepatide, which targets both GIP and GLP-1 pathways. Dosing schedules, trial data, side-effect profiles, and UK access differ. Compare options with your prescriber and our Wegovy vs Mounjaro hub.",
  },
];

export function mounjaroFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MOUNJARO_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const MOUNJARO_COMPARE_UK_FAQ_ITEMS: { question: string; answer: string }[] =
  [
    {
      question: "How much does Mounjaro cost in the UK?",
      answer:
        "Private Mounjaro pen prices depend on strength (2.5 mg up to 15 mg), the pharmacy, and whether consultation and delivery fees are bundled. Our comparison table shows illustrative starting and average-style monthly figures from a single snapshot—always confirm the live checkout price on the provider’s site.",
    },
    {
      question: "What is the cheapest Mounjaro UK provider?",
      answer:
        "The lowest listed starting pen price in our April 2026 snapshot changes when you filter the table; several online clinics compete closely. The cheapest headline price is not always the best value—check consultation rules, delivery, cold-chain handling, and aftercare before you choose.",
    },
    {
      question: "Do I need a prescription for Mounjaro?",
      answer:
        "Yes. Mounjaro (tirzepatide) is prescription-only in the UK. Legitimate private routes require an appropriate medical assessment by a qualified prescriber before a pharmacy can supply it.",
    },
    {
      question: "Why do Mounjaro prices vary between pharmacies?",
      answer:
        "Prices differ because of dose, bundled consultation fees, delivery and cold-chain logistics, promotions, and how each provider structures subscriptions or bundles. Use the table filters and the sections below to compare total value, not just the headline pen price.",
    },
  ];

export function mounjaroCompareUkFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MOUNJARO_COMPARE_UK_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
