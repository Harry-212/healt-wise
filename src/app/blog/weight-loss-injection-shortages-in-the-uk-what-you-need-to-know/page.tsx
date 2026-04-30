import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogWebpPath, SHORTAGES_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/weight-loss-injection-shortages-in-the-uk-what-you-need-to-know";
const HERO_IMAGE = `${siteOrigin()}${blogWebpPath(SHORTAGES_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: "What You Should Know About Weight Loss Treatment Shortages in the UK",
  description:
    "Stay ahead of weight loss treatment shortages in the UK: what you need to know to reach your goals.",
  keywords: "weight loss treatment shortages in the uk: what you need to know",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "What You Should Know About Weight Loss Treatment Shortages in the UK",
    description:
      "Stay ahead of weight loss treatment shortages in the UK: what you need to know to reach your goals.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-23T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "UK pharmacies and weight loss treatments — navigating stock and supply for GLP-1 medicines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What You Should Know About Weight Loss Treatment Shortages in the UK",
    description:
      "Stay ahead of weight loss treatment shortages in the UK: what you need to know to reach your goals.",
    images: [HERO_IMAGE],
  },
};

export default function WeightLossInjectionShortagesUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What You Should Know About Weight Loss Treatment Shortages in the UK",
    description:
      "Why GLP-1 weight loss treatments can be in short supply in the UK, how shortages may affect you, practical steps with your prescriber and pharmacy, and alternatives — informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-23",
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
        name: "Why are weight loss treatments sometimes out of stock in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Demand for GLP-1 class medicines has grown quickly, while manufacturing capacity, raw materials, batch release and distribution can lag behind. Different brands and strengths can be affected at different times.",
        },
      },
      {
        "@type": "Question",
        name: "Can you try another pharmacy if your usual one has no stock?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may need to check multiple regulated pharmacies for availability, but any change to where you obtain medicine should follow your prescriber’s instructions and UK dispensing rules. Do not buy from unverified sellers.",
        },
      },
      {
        "@type": "Question",
        name: "What should you do if you cannot get your next dose on time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact your prescriber or pharmacist promptly for advice. Do not improvise doses or switch products without medical guidance, as titration and monitoring requirements differ.",
        },
      },
      {
        "@type": "Question",
        name: "Are all weight loss treatments affected equally by shortages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. Availability can vary by product, strength, region and supplier. One brand may be easier to obtain than another at a given time.",
        },
      },
      {
        "@type": "Question",
        name: "Can a clinician suggest an alternative if your usual treatment is unavailable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes yes—alternatives depend on your medical history, eligibility and what is licensed and available. Only a qualified prescriber should decide whether to change medicine or dose.",
        },
      },
      {
        "@type": "Question",
        name: "How can you stay informed about supply while staying safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use reputable pharmacy updates, follow your clinician’s advice, and rely on regulated UK supply routes. Be wary of social media stock claims and counterfeit products.",
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
