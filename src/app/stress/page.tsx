import type { Metadata } from "next";
import { StressPageClient } from "@/components/lifestyle/stress/StressPageClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import { STRESS_FAQ } from "@/lib/lifestyle/stress-content";
import { PILLAR_STRESS } from "@/lib/lifestyle/pillar-routes";

export const metadata: Metadata = {
  title: "Stress and weight loss | Health Wise",
  description:
    "How chronic stress, cortisol, sleep, and emotional eating affect weight—and practical strategies that work alongside diet, exercise, and GLP-1 treatment in the UK.",
  alternates: {
    canonical: PILLAR_STRESS,
  },
  openGraph: {
    title: "How stress affects your weight — and what you can do | Health Wise",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StressPageClient />
    </>
  );
}
