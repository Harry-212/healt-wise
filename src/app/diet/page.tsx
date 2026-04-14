import type { Metadata } from "next";
import { DietPageClient } from "@/components/lifestyle/diet/DietPageClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import { DIET_FAQ } from "@/lib/lifestyle/diet-content";
import { PILLAR_DIET } from "@/lib/lifestyle/pillar-routes";

export const metadata: Metadata = {
  title: "Diet for sustainable weight loss",
  description:
    "Science-backed diet strategies: balanced meals, sustainable calorie control, protein and fibre habits, sleep & stress—and how GLP-1 options can support nutrition in the UK.",
  alternates: {
    canonical: PILLAR_DIET,
  },
  openGraph: {
    title: "Diet smarter for sustainable weight loss",
    description:
      "Medically-informed diet pillar: realistic nutrition, calorie balance, habits, FAQs, and links to guides and treatments.",
    url: PILLAR_DIET,
    type: "article",
  },
};

function dietJsonLd() {
  const origin = siteOrigin();
  const url = `${origin}${PILLAR_DIET}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Diet smarter for sustainable weight loss",
    description:
      "Science-backed diet strategies for realistic, medically-informed weight loss without extreme restriction—balanced meals, calorie awareness, habits, and GLP-1 context.",
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-14",
    dateModified: "2026-04-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isAccessibleForFree: true,
    about: [
      { "@type": "Thing", name: "Weight loss diet" },
      { "@type": "Thing", name: "Nutrition" },
      { "@type": "Thing", name: "GLP-1 receptor agonist" },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DIET_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return { "@context": "https://schema.org", "@graph": [article, faqPage] };
}

export default function DietPage() {
  const jsonLd = dietJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DietPageClient />
    </>
  );
}
