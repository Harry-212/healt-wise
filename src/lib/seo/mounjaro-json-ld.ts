import { siteOrigin } from "@/lib/seo/site-origin";

export function mounjaroArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "What Is Mounjaro? UK Guide to Results, Doses & Costs",
    description:
      "Learn how Mounjaro works, who may qualify in the UK, expected results, dosage, side effects and typical private treatment costs.",
    url: `${base}/what-is-mounjaro`,
    dateModified: "2026-04-07",
    reviewedBy: {
      "@type": "Person",
      name: "Healthwise360 Research Team",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
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

export function mounjaroClickCalculatorArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mounjaro Click Calculator UK",
    description:
      "Educational calculator showing the proportional relationship between a UK Mounjaro KwikPen strength and a dose already prescribed to you. Not a dosing recommendation.",
    url: `${base}/tools/mounjaro-click-calculator`,
    dateModified: "2026-09-15",
    reviewedBy: {
      "@type": "Person",
      name: "Alistair Campbell",
      jobTitle: "Not medical doctor",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
    },
  };
}

export const MOUNJARO_CLICK_CALCULATOR_FAQ_ITEMS: {
  question: string;
  answer: string;
}[] = [
  {
    question: "How many clicks are in a Mounjaro KwikPen?",
    answer:
      "The manufacturer's instructions do not recommend using click counting to set a Mounjaro dose. The UK KwikPen is designed to deliver four fixed labelled doses using the dose window. Any click-based information shown by an educational calculator should therefore be treated as a mathematical reference rather than official dosing guidance.",
  },
  {
    question: "Can I use a 10 mg Mounjaro pen to take 5 mg?",
    answer:
      "Do not use a higher-strength pen to administer a lower dose unless your prescriber has specifically instructed you to do so. A mathematical calculator may show a proportional relationship between two amounts, but it does not determine whether that administration method is medically appropriate.",
  },
  {
    question: "Can I use this calculator to change my Mounjaro dose?",
    answer:
      "No. The calculator should only be used to understand a dose that has already been prescribed. Any increase, decrease or change in Mounjaro treatment should be discussed with the healthcare professional responsible for your prescription.",
  },
  {
    question: "Is click counting approved by Eli Lilly?",
    answer:
      "The standard UK Mounjaro KwikPen instructions do not provide a click-counting method for setting partial doses. The manufacturer instructs users to administer the labelled dose using the dose window and the instructions supplied with the pen.",
  },
  {
    question: "Is there a fifth dose in a Mounjaro KwikPen?",
    answer:
      "The Mounjaro KwikPen is designed to provide four labelled doses. Although some liquid may appear to remain after those doses have been used, the manufacturer instructs patients to discard the pen after the fourth dose.",
  },
  {
    question: "What should I do if my pen strength does not match my prescribed dose?",
    answer:
      "Contact your prescribing provider or dispensing pharmacy before using the pen. Do not use an online calculator to resolve a discrepancy between your prescription and the strength of the pen you have received.",
  },
];

export function mounjaroClickCalculatorFaqJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${base}/tools/mounjaro-click-calculator`,
    mainEntity: MOUNJARO_CLICK_CALCULATOR_FAQ_ITEMS.map((item) => ({
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
