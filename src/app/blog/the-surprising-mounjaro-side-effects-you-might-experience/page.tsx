import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import { BLOG_SURPRISING_MOUNJARO_SIDE_EFFECTS_HERO_IMAGE } from "@/lib/site-assets";

const PATH = "/blog/the-surprising-mounjaro-side-effects-you-might-experience";
const TITLE = "The Surprising Mounjaro Side Effects You Might Experience";
const DESCRIPTION =
  "Discover surprising mounjaro side effects you might experience and how you can manage them with confidence.";

const HERO_IMAGE_ABSOLUTE = `${siteOrigin()}${BLOG_SURPRISING_MOUNJARO_SIDE_EFFECTS_HERO_IMAGE}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "mounjaro side effects",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-24T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE_ABSOLUTE,
        alt: "The Surprising Mounjaro Side Effects You Might Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_IMAGE_ABSOLUTE],
  },
};

export default function MounjaroSideEffectsArticlePage() {
  const origin = siteOrigin();
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-24",
    image: [HERO_IMAGE_ABSOLUTE],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${origin}${PATH}`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Will side effects subside over time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most side effects diminish as your body adapts, typically within four to eight weeks. Gastrointestinal reactions in particular tend to peak after dose increases and then taper off. Maintaining your prescribed titration schedule can help make this adjustment easier.",
        },
      },
      {
        "@type": "Question",
        name: "Can Mounjaro affect my mood?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While mood changes are not a direct pharmacological effect of tirzepatide, you might notice fluctuations in energy or appetite that influence your emotional state. Feeling light-headed during hypoglycaemia or fatigued from digestive upset can leave you irritable. Always discuss significant mood shifts with your doctor, especially if you have a history of depression or anxiety.",
        },
      },
      {
        "@type": "Question",
        name: "Do side effects differ by dose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, increasing the dose often correlates with a temporary rise in side effect intensity, particularly gastrointestinal symptoms. Your clinician will balance the benefits of a higher dose against potential discomfort, adjusting the schedule if needed. If you struggle with a particular dose, a slower titration may be advised.",
        },
      },
      {
        "@type": "Question",
        name: "How can I report side effects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In the UK you can notify suspected adverse reactions to your healthcare provider or directly through the MHRA Yellow Card scheme. Reporting helps regulators monitor safety and may improve guidance for other patients. Always keep a clear record of your symptoms, doses and any interventions.",
        },
      },
      {
        "@type": "Question",
        name: "Can Mounjaro side effects cause hair loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hair loss is not directly listed as a common side effect of Mounjaro. However, rapid weight loss from any cause can sometimes trigger temporary hair thinning. If you experience significant hair loss, speak with your healthcare provider to ensure you are meeting your nutritional needs.",
        },
      },
      {
        "@type": "Question",
        name: "Are there long-term side effects of taking Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mounjaro is relatively new, but long-term trials have shown it is generally well-tolerated. However, continuous monitoring by your healthcare team is advised to manage any potential changes in organ function or ongoing gastrointestinal discomfort over the long term.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...ARTICLE_SCHEMA, "@graph": [ARTICLE_SCHEMA, FAQ_SCHEMA] }),
        }}
      />
      <ArticleClient />
    </>
  );
}
