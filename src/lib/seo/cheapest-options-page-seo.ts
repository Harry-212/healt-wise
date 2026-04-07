import type { Metadata } from "next";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/prices/cheapest-options-uk";

export const CHEAPEST_OPTIONS_FAQS: { question: string; answer: string }[] = [
  {
    question:
      "What are the cheapest GLP-1 weight loss injections in the UK privately?",
    answer:
      "There is no single “cheapest” GLP-1 for everyone. Private UK listings vary by medicine (Wegovy, Mounjaro, Saxenda), dose, pack size, and whether consultation and delivery are bundled. Our Wegovy, Mounjaro, and Saxenda comparison tables list illustrative pen or pack prices across pharmacies so you can compare the same strength — you must still confirm live checkout prices and suitability with a prescriber.",
  },
  {
    question: "Is Wegovy or Mounjaro cheaper in the UK?",
    answer:
      "Starter listed prices in our snapshots often look lower for Wegovy at 0.25 mg than for Mounjaro at 2.5 mg in cash terms, but the medicines differ, titration schedules differ, and maintenance months may cost more at higher doses. Compare like-for-like doses on each brand’s comparison page rather than headline figures alone.",
  },
  {
    question: "How much does Saxenda cost per month in the UK privately?",
    answer:
      "Saxenda is a daily liraglutide pen; monthly cost depends on your titrated daily dose and whether you buy 1, 3, or 5 pen packs. Our Saxenda price comparison shows pack prices and £/mg-style hints per provider — totals are illustrative until your pharmacy confirms the basket.",
  },
  {
    question: "Why don’t the prices on this page match my pharmacy checkout?",
    answer:
      "Promotions, delivery bands, consultation fees, and stock bundles change frequently. Health Wise publishes research snapshots, not live quotes. Always verify the figure on the provider’s site before you pay.",
  },
  {
    question: "Can I use this guide to choose Wegovy, Mounjaro, or Saxenda?",
    answer:
      "No. This page compares illustrative prices only. GLP-1 medicines are prescription-only in the UK; a qualified clinician must assess eligibility, risks, drug interactions, and monitoring. Health Wise does not diagnose conditions or prescribe treatment.",
  },
];

export function cheapestOptionsUkMetadata(): Metadata {
  const title =
    "Cheapest Wegovy, Mounjaro & Saxenda UK Prices (2026) | GLP-1 Cost Guide";
  const description =
    "Compare cheapest private UK listings for Wegovy (semaglutide), Mounjaro (tirzepatide), and Saxenda (liraglutide). See illustrative price spreads, starter vs maintenance patterns, and links to full pharmacy tables — not medical advice.";

  const url = `${siteOrigin()}${PATH}`;

  return {
    title,
    description,
    keywords: [
      "cheapest GLP-1 UK",
      "cheapest wegovy UK",
      "mounjaro price UK cheapest",
      "saxenda cost UK private",
      "weight loss injections UK prices",
      "semaglutide price UK",
      "tirzepatide price UK",
      "liraglutide saxenda UK",
      "private prescription weight loss UK",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Health Wise",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function cheapestOptionsUkJsonLd(): Record<string, unknown> {
  const url = `${siteOrigin()}${PATH}`;
  const faqEntities = CHEAPEST_OPTIONS_FAQS.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Cheapest GLP-1 options UK — Wegovy, Mounjaro & Saxenda price guide",
        description:
          "Illustrative UK private price comparison for GLP-1 weight loss medicines with methodology and FAQs.",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };
}
