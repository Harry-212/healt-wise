import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, PROTEIN_GLP_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/protein-for-glp-1-users-uk";
const TITLE = "Protein for GLP-1 Users UK: Food First, Supplements Second";
const DESCRIPTION =
  "Protein for GLP-1 users UK guide: food-first support for Wegovy, Mounjaro and weight loss treatment users.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(PROTEIN_GLP_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "protein for glp-1 users uk, protein wegovy, protein mounjaro, glp-1 diet support, protein powder weight loss, semaglutide nutrition, tirzepatide protein, wegovy pill nutrition, muscle loss glp-1",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-07-14T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Protein for GLP-1 users UK food first supplements second guide",
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

export default function ProteinForGlp1UsersUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-07-14",
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
        name: "Protein for GLP-1 Users UK",
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
        name: "Do GLP-1 users need more protein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some GLP-1 users may need to pay more attention to protein because appetite and portion sizes can reduce. However, protein needs vary by person, so users with medical conditions should ask a clinician or dietitian.",
        },
      },
      {
        "@type": "Question",
        name: "Is protein powder necessary on Wegovy or Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Protein powder is not necessary for everyone. It may help if someone struggles to eat enough protein from food, but whole foods should usually come first.",
        },
      },
      {
        "@type": "Question",
        name: "What are good protein foods for GLP-1 users?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Good options include eggs, fish, chicken, turkey, Greek yoghurt, cottage cheese, tofu, lentils, chickpeas, beans, and edamame. The best choices depend on appetite, digestion, budget, and personal preference.",
        },
      },
      {
        "@type": "Question",
        name: "Can protein help prevent muscle loss during weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Protein can support muscle maintenance, especially when combined with strength training or regular movement. However, it does not guarantee that all weight lost will be fat.",
        },
      },
      {
        "@type": "Question",
        name: "Can protein make GLP-1 side effects worse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can for some people, especially if meals are too large, too rich, or too low in fibre and fluid. Smaller protein-rich meals may be easier to tolerate, but severe or persistent side effects should be discussed with a clinician.",
        },
      },
      {
        "@type": "Question",
        name: "Are GLP-1 protein supplements the same as GLP-1 medicines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Protein supplements are nutrition products. Wegovy, Mounjaro, semaglutide, and tirzepatide are prescription medicines and should not be replaced with supplements.",
        },
      },
      {
        "@type": "Question",
        name: "Should I choose plant protein or animal protein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both can work. Animal proteins are often protein-dense, while plant proteins may also provide fibre. A balanced plan can include either or both, depending on preferences and tolerance.",
        },
      },
      {
        "@type": "Question",
        name: "What should I avoid in protein supplements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avoid products that promise medical-style weight loss, claim to replace GLP-1 medicines, or use exaggerated phrases such as natural Ozempic or Mounjaro alternative.",
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
