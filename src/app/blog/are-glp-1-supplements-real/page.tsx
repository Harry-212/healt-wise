import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, ARE_GLP1_SUPPLEMENTS_REAL_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/are-glp-1-supplements-real";
const TITLE = "Are GLP-1 Supplements Real or Just Marketing? UK Safety Guide";
const DESCRIPTION =
  "Are GLP-1 supplements real? Learn what may help, what is hype, and how they differ from prescription GLP-1 medicines.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(ARE_GLP1_SUPPLEMENTS_REAL_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "are glp-1 supplements real, glp-1 supplements marketing, natural ozempic supplement, glp-1 booster uk, glp-1 supplements vs medicines, wegovy alternative supplement, mounjaro alternative supplement, weight loss supplements uk, pharmacy safety uk",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-19T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Are GLP-1 supplements real or just marketing? UK safety guide for weight loss supplement claims",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

export default function AreGlp1SupplementsRealPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-06-19",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}${PATH}`,
    },
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteOrigin()}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteOrigin()}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Are GLP-1 Supplements Real?",
        item: `${siteOrigin()}${PATH}`,
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are GLP-1 supplements real?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some GLP-1 supplements may contain real nutrition-support ingredients such as fibre, protein, vitamins, or probiotics. However, they are not the same as prescription GLP-1 medicines.",
        },
      },
      {
        "@type": "Question",
        name: "Do GLP-1 supplements work like Ozempic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A supplement should not be treated as working like Ozempic, Wegovy, or Mounjaro. Those are regulated medicines, while supplements usually follow different rules.",
        },
      },
      {
        "@type": "Question",
        name: "Can GLP-1 supplements help with weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They may support habits that help weight management, such as protein intake, fibre intake, and hydration. However, they should not be expected to produce prescription-style weight loss results.",
        },
      },
      {
        "@type": "Question",
        name: "Are natural GLP-1 boosters safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some may be safe for some adults, but safety depends on ingredients, dose, medical history, and other medicines. If you take prescription medication, speak to a pharmacist or clinician first.",
        },
      },
      {
        "@type": "Question",
        name: "Can supplements replace Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Supplements should not replace Mounjaro. Mounjaro is a prescription tirzepatide medicine, while supplements are not equivalent treatments.",
        },
      },
      {
        "@type": "Question",
        name: "Can supplements replace Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Wegovy is a prescription semaglutide medicine. Supplements may support nutrition, but they are not substitutes for prescribed weight loss treatment.",
        },
      },
      {
        "@type": "Question",
        name: "What are the safest GLP-1 supplement claims?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The safest claims are modest and nutrition-based, such as supporting protein intake, fibre intake, hydration, or diet quality. Avoid products promising fast fat loss or prescription-like effects.",
        },
      },
      {
        "@type": "Question",
        name: "Should I buy GLP-1 supplements online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only buy from transparent, reputable sellers and avoid products making unrealistic medical claims. If you are using prescription weight loss treatment, ask a pharmacist or prescriber before adding new supplements.",
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
            "@graph": [ARTICLE_SCHEMA, BREADCRUMB_SCHEMA, FAQ_SCHEMA],
          }),
        }}
      />
      <ArticleClient />
    </>
  );
}
