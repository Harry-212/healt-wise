import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/how-to-compare-uk-weight-loss-pens-and-find-the-best";
const HERO_IMAGE = `${siteOrigin()}/blog/How%20to%20Compare%20UK%20Weight%20Loss%20Pens%20and%20Find%20the%20Best.webp`;

export const metadata: Metadata = {
  title: "How to Compare UK Weight Loss Pens and Find the Best",
  description:
    "Learn how to compare UK weight loss pens—Saxenda, Wegovy and Mounjaro—for dosing, side effects, cost, NHS access and safe regulated prescribing.",
  keywords:
    "UK weight loss pens, compare weight loss pens UK, Saxenda, Wegovy, Mounjaro, prescription weight loss",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "How to Compare UK Weight Loss Pens and Find the Best",
    description:
      "Learn how to compare UK weight loss pens—Saxenda, Wegovy and Mounjaro—for dosing, side effects, cost, NHS access and safe regulated prescribing.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-23T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Compare UK weight loss pens to find the best choice for your treatment goals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Compare UK Weight Loss Pens and Find the Best",
    description:
      "Learn how to compare UK weight loss pens—Saxenda, Wegovy and Mounjaro—for dosing, side effects, cost, NHS access and safe regulated prescribing.",
    images: [HERO_IMAGE],
  },
};

export default function CompareUKWeightLossPensPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Compare UK Weight Loss Pens and Find the Best",
    description:
      "How to compare UK weight loss pens (Saxenda, Wegovy, Mounjaro): mechanisms, practical comparisons, safety, pricing and FAQs — informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-05-23",
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
        name: "Are Weight Loss Pens Safe For Everyone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Not universally. They require individual assessment by a qualified prescriber.",
        },
      },
      {
        "@type": "Question",
        name: "Do I Need A Prescription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. These medicines require proper prescribing and should not be sourced informally.",
        },
      },
      {
        "@type": "Question",
        name: "Which Pen Leads To The Most Weight Loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Current evidence often favours Mounjaro on average, though individual response and tolerability vary.",
        },
      },
      {
        "@type": "Question",
        name: "How Long Do I Have To Use Them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Possibly months; sometimes longer. Progress reviews with your clinician often guide duration.",
        },
      },
      {
        "@type": "Question",
        name: "What If I Experience Side Effects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Discuss them early with your prescriber or pharmacist—do not push through severe symptoms without advice.",
        },
      },
      {
        "@type": "Question",
        name: "Can I Buy These Pens From Social Media Or A Salon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Use regulated pharmacies and licensed prescribing routes only.",
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
