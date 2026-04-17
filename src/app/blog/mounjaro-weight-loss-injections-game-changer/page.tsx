import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/mounjaro-weight-loss-injections-game-changer";
const HERO_IMAGE = `${siteOrigin()}/blog/mounjaro%20weight%20loss%20injections.webp`;

export const metadata: Metadata = {
  title: "Could Mounjaro Weight Loss Injections Be Your Game-Changer?",
  description:
    "Could mounjaro weight loss injections be your breakthrough to finally conquer stubborn diet plateaus?",
  keywords: "mounjaro weight loss injections",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Could Mounjaro Weight Loss Injections Be Your Game-Changer?",
    description:
      "Could mounjaro weight loss injections be your breakthrough to finally conquer stubborn diet plateaus?",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-18T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Mounjaro weight loss injections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Could Mounjaro Weight Loss Injections Be Your Game-Changer?",
    description:
      "Could mounjaro weight loss injections be your breakthrough to finally conquer stubborn diet plateaus?",
    images: [HERO_IMAGE],
  },
};

export default function MounjaroInjectionsGameChangerPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Could Mounjaro Weight Loss Injections Be Your Game-Changer?",
    description:
      "An overview of Mounjaro (tirzepatide) injections for weight management: mechanism, eligibility context, NHS vs private access, side effects, and realistic expectations—informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-18",
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
        name: "Are Mounjaro weight loss injections a game-changer for everyone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They help many adults by reducing appetite and supporting calorie reduction, but results vary. Mounjaro works best alongside nutrition, activity, sleep, and medical follow-up—not as a standalone shortcut.",
        },
      },
      {
        "@type": "Question",
        name: "How do Mounjaro injections work for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tirzepatide activates GLP-1 and GIP receptors, influencing appetite, digestion, and glucose regulation. That can mean earlier fullness, fewer hunger signals, and steadier progress when paired with lifestyle change.",
        },
      },
      {
        "@type": "Question",
        name: "Who might qualify for Mounjaro on the NHS in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NHS access depends on national and local criteria, often including high BMI thresholds and weight-related health conditions. Many people who hope for NHS treatment do not meet every requirement; a clinician can assess your situation.",
        },
      },
      {
        "@type": "Question",
        name: "What are the most common side effects of Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gastrointestinal symptoms such as nausea, vomiting, diarrhoea, constipation, and abdominal discomfort are frequently reported, especially after dose changes. Most issues are mild to moderate and improve with time or dose titration under supervision.",
        },
      },
      {
        "@type": "Question",
        name: "Do you need to keep taking Mounjaro to maintain weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Weight can trend back up if treatment stops and habits have not been consolidated, which is why long-term lifestyle support matters. Decisions about continuing or stopping should be made with your prescriber.",
        },
      },
      {
        "@type": "Question",
        name: "How should I approach buying Mounjaro in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mounjaro is prescription-only. Use a regulated prescriber and pharmacy, verify credentials, and avoid unverified sellers. Compare legitimate providers and understand costs before you commit.",
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
