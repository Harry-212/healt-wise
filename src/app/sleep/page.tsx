import type { Metadata } from "next";
import { SleepPageClient } from "@/components/lifestyle/sleep/SleepPageClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import { SLEEP_FAQ } from "@/lib/lifestyle/sleep-content";
import { PILLAR_SLEEP } from "@/lib/lifestyle/pillar-routes";

export const metadata: Metadata = {
  title: "Sleep and weight loss | Health Wise",
  description:
    "How sleep affects appetite, metabolism, and weight: poor sleep and weight gain, practical sleep hygiene, hormones, and how rest links with diet, exercise, stress, and GLP-1 treatment in the UK.",
  alternates: {
    canonical: PILLAR_SLEEP,
  },
  openGraph: {
    title: "Sleep better. Lose weight more easily. | Health Wise",
    description:
      "Sleep & weight pillar: the sleep–weight cycle, impact cards, key insight, tips, system approach, FAQs, and internal links.",
    url: PILLAR_SLEEP,
    type: "article",
  },
};

function sleepJsonLd() {
  const origin = siteOrigin();
  const url = `${origin}${PILLAR_SLEEP}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sleep better. Lose weight more easily.",
    description:
      "Science-aligned guide to sleep and weight loss: appetite hormones, cravings, metabolism, practical sleep tips, and integration with nutrition, exercise, stress management, and medical weight loss.",
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
      { "@type": "Thing", name: "Sleep and weight loss" },
      { "@type": "Thing", name: "Sleep deprivation" },
      { "@type": "Thing", name: "Obesity" },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SLEEP_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return { "@context": "https://schema.org", "@graph": [article, faqPage] };
}

export default function SleepPage() {
  const jsonLd = sleepJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SleepPageClient />
    </>
  );
}
