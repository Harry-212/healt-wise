import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogWebpPath, WEGOVY_SIDE_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/side-effects-of-wegovy-and-how-to-manage-them";
const HERO_IMAGE = `${siteOrigin()}${blogWebpPath(WEGOVY_SIDE_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: "Effective Tips for Handling Side Effects of Wegovy Yourself",
  description:
    "Boost your weight loss with friendly tips on side effects of Wegovy and how to manage them in the UK.",
  keywords: "side effects of wegovy and how to manage them",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Effective Tips for Handling Side Effects of Wegovy Yourself",
    description:
      "Boost your weight loss with friendly tips on side effects of Wegovy and how to manage them in the UK.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-22T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Fatigue and low energy on Wegovy — tips to rest and manage tiredness during UK weight loss treatment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Effective Tips for Handling Side Effects of Wegovy Yourself",
    description:
      "Boost your weight loss with friendly tips on side effects of Wegovy and how to manage them in the UK.",
    images: [HERO_IMAGE],
  },
};

export default function WegovySideEffectsPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Effective Tips for Handling Side Effects of Wegovy Yourself",
    description:
      "UK-focused, non-prescriptive tips for common Wegovy (semaglutide) side effects—digestion, energy, mood—and when to seek medical advice. Informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-22",
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
        name: "What are the most common Wegovy side effects when you start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many people report gastrointestinal symptoms such as nausea, diarrhoea or constipation, especially after dose increases. Headache, fatigue and dizziness can also occur. Symptoms often improve as your body adjusts, but report anything severe or persistent to your prescriber.",
        },
      },
      {
        "@type": "Question",
        name: "How can you reduce nausea on Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Strategies people often find helpful include smaller meals, eating slowly, staying hydrated, avoiding very fatty or large portions, and splitting food across the day. Always follow your clinician’s advice—do not change your dose without medical guidance.",
        },
      },
      {
        "@type": "Question",
        name: "Can your prescriber change your Wegovy dose if side effects are difficult?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dose adjustments should only be made by a qualified prescriber. If side effects are ongoing or severe, contact your healthcare professional promptly rather than adjusting the pen yourself.",
        },
      },
      {
        "@type": "Question",
        name: "When should you seek urgent medical advice on Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seek urgent care for severe abdominal pain, persistent vomiting, signs of allergic reaction, or symptoms that concern you. GLP-1 medicines have important warnings in official information—read your patient leaflet and follow local guidance.",
        },
      },
      {
        "@type": "Question",
        name: "Does tiredness from Wegovy usually improve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fatigue can occur early on or around titration. Sleep routine, hydration, balanced meals and gentle activity may help. If fatigue is severe or persistent, discuss it with your clinician to rule out other causes.",
        },
      },
      {
        "@type": "Question",
        name: "Can Wegovy affect mood or mental wellbeing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Appetite and energy changes can coincide with mood shifts. If you notice persistent low mood, anxiety, or thoughts of self-harm, seek professional help immediately. Always tell your prescriber about mental health symptoms.",
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
