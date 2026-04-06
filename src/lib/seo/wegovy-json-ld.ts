function siteOrigin(): string {
  const u = process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof u === "string" && u.length > 0) return u.replace(/\/$/, "");
  return "https://www.health-wise.co.uk";
}

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
