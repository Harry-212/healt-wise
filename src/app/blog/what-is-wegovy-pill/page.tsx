import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, WHAT_IS_WEGOVY_PILL_HERO_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/what-is-wegovy-pill";
const TITLE = "What Is Wegovy Pill? Semaglutide Tablet Explained for UK Users";
const DESCRIPTION =
  "Learn what Wegovy Pill is, how semaglutide tablets work, who they may suit, and how they compare with injections.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(WHAT_IS_WEGOVY_PILL_HERO_PNG)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "what is wegovy pill, wegovy pill uk, semaglutide tablet uk, oral wegovy uk, wegovy tablet uk, wegovy pill vs injection, glp-1 tablet uk, wegovy pill side effects, wegovy pill dosage",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-07-02T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "What Is Wegovy Pill semaglutide tablet explained for UK users",
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

export default function WhatIsWegovyPillPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://www.healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-07-02",
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
        name: "What Is Wegovy Pill",
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
        name: "What is Wegovy Pill?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy Pill is a prescription-only semaglutide tablet for medically supervised weight loss and weight management. It is taken once daily and is designed for eligible adults who may benefit from GLP-1 treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy Pill the same as Wegovy injection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy Pill and Wegovy injection both involve semaglutide for weight loss. However, Wegovy Pill is taken daily as a tablet, while Wegovy injection is usually taken once weekly using a pen.",
        },
      },
      {
        "@type": "Question",
        name: "How does Wegovy Pill work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy Pill mimics GLP-1, a natural hormone involved in appetite and fullness. It may help reduce hunger, lower cravings, and support weight loss when combined with diet and lifestyle changes.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy Pill the same as Rybelsus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Rybelsus is a semaglutide tablet used for type 2 diabetes. Wegovy Pill is a semaglutide tablet for weight loss and weight management.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy Pill a GLP-1 supplement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Wegovy Pill is a prescription medicine, not a supplement. GLP-1 supplements may support general nutrition, but they should not be treated as replacements for regulated GLP-1 medicines.",
        },
      },
      {
        "@type": "Question",
        name: "Can I take Wegovy Pill with injectable GLP-1 treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You should not take oral Wegovy with injectable Wegovy, Mounjaro, Ozempic, Saxenda, or another GLP-1 treatment unless a qualified healthcare professional specifically advises it.",
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
