import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/discover-the-powerful-benefits-of-prescription-slimming-injections-uk";
const HERO_IMAGE = `${siteOrigin()}/blog/Discover%20the%20Powerful%20Benefits%20of%20Prescription%20Slimming%20Injections%20UK.webp`;

export const metadata: Metadata = {
  title: "Discover the Powerful Benefits of Prescription Slimming Treatments UK",
  description:
    "Discover prescription slimming injections in the UK: how Wegovy, Mounjaro and Saxenda work, eligibility, benefits, side effects, NHS vs private costs and safety.",
  keywords:
    "prescription slimming injections UK, Wegovy, Mounjaro, Saxenda, GLP-1, weight loss injections UK",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Discover the Powerful Benefits of Prescription Slimming Treatments UK",
    description:
      "Discover prescription slimming injections in the UK: how Wegovy, Mounjaro and Saxenda work, eligibility, benefits, side effects, NHS vs private costs and safety.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-22T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Prescription slimming treatments in the UK — regulated injectable options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover the Powerful Benefits of Prescription Slimming Treatments UK",
    description:
      "Discover prescription slimming injections in the UK: how Wegovy, Mounjaro and Saxenda work, eligibility, benefits, side effects, NHS vs private costs and safety.",
    images: [HERO_IMAGE],
  },
};

export default function PrescriptionSlimmingInjectionsUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Discover the Powerful Benefits of Prescription Slimming Treatments UK",
    description:
      "UK prescription slimming injections (Wegovy, Mounjaro, Saxenda): mechanisms, eligibility, benefits, risks, NHS vs private — informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-05-22",
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
        name: "Are Prescription Slimming Injections Available Over The Counter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. These medicines require a prescription and clinical supervision.",
        },
      },
      {
        "@type": "Question",
        name: "How Much Do They Cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Private costs often range roughly from £150 to £300 monthly depending on dose and provider; NHS access may be much cheaper if you qualify.",
        },
      },
      {
        "@type": "Question",
        name: "Are There Serious Side Effects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Serious complications appear uncommon but can occur; monitoring with a prescriber matters.",
        },
      },
      {
        "@type": "Question",
        name: "Who Is Eligible On The NHS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eligibility often depends on BMI thresholds, health risks, and local NHS service criteria.",
        },
      },
      {
        "@type": "Question",
        name: "Do You Still Need Diet And Exercise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Medication may support progress but does not replace foundational lifestyle habits.",
        },
      },
      {
        "@type": "Question",
        name: "How Long Must You Take Them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Duration varies; many people use treatment for months or longer, guided by medical review.",
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
