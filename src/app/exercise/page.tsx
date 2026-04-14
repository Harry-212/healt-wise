import type { Metadata } from "next";
import { ExercisePageClient } from "@/components/lifestyle/exercise/ExercisePageClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import { EXERCISE_FAQ } from "@/lib/lifestyle/exercise-content";
import { PILLAR_EXERCISE } from "@/lib/lifestyle/pillar-routes";

export const metadata: Metadata = {
  title: "Weight loss exercise guide",
  description:
    "How exercise supports fat loss and maintenance: moderate vs vigorous activity, cardio vs strength, simple moves, sleep & stress, and how to combine movement with diet and GLP-1 treatment in the UK.",
  alternates: {
    canonical: PILLAR_EXERCISE,
  },
  openGraph: {
    title: "Exercise that helps you lose weight — and keep it off",
    description:
      "Science-aligned exercise pillar: intensity, cardio + resistance, NEAT, system habits, FAQs, and links to diet, tips, and treatments.",
    url: PILLAR_EXERCISE,
    type: "article",
  },
};

function exerciseJsonLd() {
  const origin = siteOrigin();
  const url = `${origin}${PILLAR_EXERCISE}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Exercise that actually helps you lose weight — and keep it off",
    description:
      "Weight loss exercise guide: role of movement, benefits, intensity targets, cardio vs resistance training, simple exercises, and how exercise fits with nutrition and medical weight loss options.",
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
      { "@type": "Thing", name: "Weight loss exercise" },
      { "@type": "Thing", name: "Physical activity" },
      { "@type": "Thing", name: "Obesity management" },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: EXERCISE_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return { "@context": "https://schema.org", "@graph": [article, faqPage] };
}

export default function ExercisePage() {
  const jsonLd = exerciseJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExercisePageClient />
    </>
  );
}
