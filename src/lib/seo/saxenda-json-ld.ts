import { siteOrigin } from "@/lib/seo/site-origin";

export function saxendaArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "What Is Saxenda? UK Guide to Daily Doses & Costs",
    description:
      "Learn how Saxenda works, who may qualify in the UK, daily dosing, expected results, side effects and typical private treatment costs.",
    url: `${base}/what-is-saxenda`,
    dateModified: "2026-04-07",
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
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
        "Private Saxenda prices depend on how many pens you order (1, 3 or 5), the pharmacy, and whether consultation and delivery fees are bundled. Our comparison table lists the price of each pack size and the price per mg, with the date prices were checked—always confirm the final checkout price on the provider’s site.",
    },
    {
      question: "What is the cheapest Saxenda UK provider?",
      answer:
        "The cheapest provider can change with pack size, so compare the same pack size across providers first. Use the price per mg to compare different pack sizes, and check any consultation or delivery charges before comparing totals.",
    },
    {
      question: "Do I need a prescription for Saxenda?",
      answer:
        "Yes. Saxenda (liraglutide) is prescription-only in the UK. Legitimate private routes require an appropriate medical assessment by a qualified prescriber before a pharmacy can supply it.",
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
