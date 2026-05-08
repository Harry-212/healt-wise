import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/does-stress-cause-belly-fat";
/** JPEG 1200×630 for Open Graph / WhatsApp (WebP previews are unreliable on WhatsApp). */
const SOCIAL_PREVIEW_IMAGE = `${siteOrigin()}/blog/3.1-fatloss-og.jpg`;

export const metadata: Metadata = {
  title: "Does Stress Cause Belly Fat?",
  description:
    "Chronic stress raises cortisol, and cortisol directly fuels belly fat storage. Understand the stress-belly fat link and evidence-based strategies to break the cycle.",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Does Stress Cause Belly Fat?",
    description:
      "Chronic stress raises cortisol, and cortisol directly fuels belly fat storage. Understand the stress-belly fat link and evidence-based strategies to break the cycle.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-09T00:00:00.000Z",
    images: [
      {
        url: SOCIAL_PREVIEW_IMAGE,
        alt: "Stress, cortisol and belly fat: evidence-based overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Stress Cause Belly Fat?",
    description:
      "Chronic stress raises cortisol, and cortisol directly fuels belly fat storage. Understand the stress-belly fat link and evidence-based strategies to break the cycle.",
    images: [SOCIAL_PREVIEW_IMAGE],
  },
};

export default function DoesStressCauseBellyFatPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Does Stress Cause Belly Fat?",
    description:
      "How chronic stress raises cortisol and promotes visceral belly fat, why the cycle is hard to break after 40, and evidence-based steps including sleep, movement, and stress reduction.",
    image: [SOCIAL_PREVIEW_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-05-09",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}${PATH}`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can stress really make you gain belly fat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Chronic stress elevates cortisol, which can directly promote visceral (abdominal) fat storage. This is a documented hormonal pathway, not a vague claim.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take for stress belly fat to go away?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When cortisol load is reduced through consistent sleep, stress management, and appropriate movement, many people see measurable waist reductions within about 8–12 weeks. Visceral fat can be relatively responsive when the underlying stress-sleep loop improves.",
        },
      },
      {
        "@type": "Question",
        name: "Is stress belly different from regular belly fat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often yes in character: stress-driven fat is commonly more visceral (deeper), can feel firmer, and may resist exercise-only fixes until cortisol and sleep improve.",
        },
      },
      {
        "@type": "Question",
        name: "Does exercise help with stress belly fat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but type matters. Moderate activity like walking, yoga, or easy cycling tends to support cortisol regulation. Very high-volume high-intensity training can raise cortisol and backfire if you are already under heavy life stress or sleep deprived.",
        },
      },
      {
        "@type": "Question",
        name: "What supplements help with cortisol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some evidence supports adaptogens (for example ashwagandha) and magnesium forms used for sleep and relaxation, but supplements should complement foundational sleep, nutrition, movement, and stress skills—not replace them. Discuss with a clinician, especially if you take medicines.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...ARTICLE_SCHEMA,
            "@graph": [ARTICLE_SCHEMA, FAQ_SCHEMA],
          }),
        }}
      />
      <ArticleClient />
    </>
  );
}
