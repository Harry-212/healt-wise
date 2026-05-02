import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/how-licensed-weight-loss-injections-uk-can-boost-your-journey";
const HERO_IMAGE = `${siteOrigin()}/blog/How%20Licensed%20Weight%20Loss%20Injections%20UK%20Can%20Boost%20Your%20Journey.webp`;

export const metadata: Metadata = {
  title: "How Licensed Weight Loss Injections UK Can Boost Your Journey",
  description:
    "How licensed MHRA-authorised weight loss injections in the UK (Mounjaro, Wegovy) work, NHS vs private access, benefits, side effects and realistic expectations.",
  keywords:
    "licensed weight loss injections UK, Mounjaro, Wegovy, MHRA, prescription weight loss UK, GLP-1",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "How Licensed Weight Loss Injections UK Can Boost Your Journey",
    description:
      "How licensed MHRA-authorised weight loss injections in the UK (Mounjaro, Wegovy) work, NHS vs private access, benefits, side effects and realistic expectations.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-21T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Licensed weight loss injections in the UK — MHRA-regulated treatment with clinical oversight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Licensed Weight Loss Injections UK Can Boost Your Journey",
    description:
      "How licensed MHRA-authorised weight loss injections in the UK (Mounjaro, Wegovy) work, NHS vs private access, benefits, side effects and realistic expectations.",
    images: [HERO_IMAGE],
  },
};

export default function LicensedWeightLossInjectionsUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Licensed Weight Loss Injections UK Can Boost Your Journey",
    description:
      "Licensed UK weight loss injections (Mounjaro, Wegovy): mechanisms, NHS vs private access, benefits, risks and maintenance — informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-05-21",
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
        name: "Are Licensed Weight Loss Injections in the UK Safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They can be appropriate for many people when prescribed and monitored properly, but they carry risks and must not be sourced from unregulated channels.",
        },
      },
      {
        "@type": "Question",
        name: "How Do I Know If I Am Eligible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligibility typically depends on BMI, health conditions, and NHS or private prescribing pathway criteria—your clinician should assess this.",
        },
      },
      {
        "@type": "Question",
        name: "What Is The Difference Between Mounjaro And Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mounjaro targets GLP-1 and GIP pathways; Wegovy targets GLP-1. Response and tolerability vary between individuals.",
        },
      },
      {
        "@type": "Question",
        name: "Can I Use Them During Pregnancy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generally no—these medicines are not usually recommended during pregnancy or breastfeeding.",
        },
      },
      {
        "@type": "Question",
        name: "How Long Will I Need The Injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Duration varies; treatment may continue for months or longer depending on review and clinical goals.",
        },
      },
      {
        "@type": "Question",
        name: "Will I Experience Side Effects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mild digestive side effects are relatively common; serious complications are uncommon but require prompt medical attention.",
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
