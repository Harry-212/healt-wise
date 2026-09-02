import type { Metadata } from "next";
import { StressPageClient } from "@/components/lifestyle/stress/StressPageClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import { STRESS_FAQ } from "@/lib/lifestyle/stress-content";
import { PILLAR_STRESS } from "@/lib/lifestyle/pillar-routes";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Stress and weight loss",
  description:
    "How chronic stress, cortisol and emotional eating affect weight, and strategies that work alongside diet and exercise.",
  alternates: {
    canonical: PILLAR_STRESS,
  },
  openGraph: {
    title: "How stress affects your weight — and what you can do",
    description:
      "Stress & weight pillar: acute vs chronic stress, habits, system approach, FAQs, and links to diet, exercise, and guides.",
    url: PILLAR_STRESS,
    type: "article",
  },
};

function stressJsonLd() {
  const origin = siteOrigin();
  const url = `${origin}${PILLAR_STRESS}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How stress affects your weight — and what you can do about it",
    description:
      "Science-aligned guide to stress and weight: cortisol, cravings, sleep, emotional eating, acute vs chronic stress, coping strategies, and how this fits with nutrition, exercise, and medical weight loss.",
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360" },
    datePublished: "2026-04-14",
    dateModified: "2026-04-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isAccessibleForFree: true,
    about: [
      { "@type": "Thing", name: "Stress and weight gain" },
      { "@type": "Thing", name: "Emotional eating" },
      { "@type": "Thing", name: "Cortisol" },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: STRESS_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return { "@context": "https://schema.org", "@graph": [article, faqPage] };
}

export default function StressPage() {
  const jsonLd = stressJsonLd();

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Lifestyle"
        sectionPath="/tips"
        pageName="Stress and weight loss"
        pagePath="/stress"
      />
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StressPageClient />
    </>
  );
}
