import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, FIBRE_GLP_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/fibre-for-glp-1-users";
const TITLE = "Fibre for GLP-1 Users: Constipation and Fullness Support";
const DESCRIPTION =
  "Fibre for GLP-1 users guide: constipation support, fullness, foods, fluids and safe supplement checks.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(FIBRE_GLP_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "fibre for glp-1 users, constipation on wegovy, constipation on mounjaro, glp-1 fibre foods, semaglutide constipation support, tirzepatide digestion, fibre supplements glp-1, glp-1 fullness",
  alternates: { canonical: `${siteOrigin()}${PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-07-14T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Fibre for GLP-1 users constipation and fullness support guide",
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

export default function FibreForGlp1UsersPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://www.healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-07-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}${PATH}`,
    },
  };

  const breadcrumbSchema = {
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
        name: "Fibre for GLP-1 Users",
        item: `${siteOrigin()}${PATH}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do GLP-1 users need more fibre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some GLP-1 users may need to pay more attention to fibre because appetite and food intake can reduce. However, fibre should usually be increased gradually and alongside enough fluids.",
        },
      },
      {
        "@type": "Question",
        name: "Can fibre help constipation on Wegovy or Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fibre may help support bowel regularity, especially when combined with fluids and movement. However, severe or persistent constipation should be discussed with a pharmacist, prescriber, or doctor.",
        },
      },
      {
        "@type": "Question",
        name: "What are good fibre foods for GLP-1 users?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Good options include oats, berries, vegetables, lentils, beans, chickpeas, wholegrains, potatoes with skin, nuts, and seeds. Start with smaller portions if appetite is low or digestion feels sensitive.",
        },
      },
      {
        "@type": "Question",
        name: "Should I take a fibre supplement on GLP-1 treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not everyone needs a fibre supplement. Food-first fibre is usually a better starting point, but supplements may help some people if food intake is low or a clinician recommends them.",
        },
      },
      {
        "@type": "Question",
        name: "Can too much fibre make constipation worse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Increasing fibre too quickly or taking fibre without enough fluid may worsen bloating or constipation. Therefore, gradual changes are usually safer.",
        },
      },
      {
        "@type": "Question",
        name: "Is fibre the same as a GLP-1 supplement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Fibre is a nutrition support tool, not a prescription GLP-1 medicine. It should not be presented as a replacement for Wegovy, Mounjaro, semaglutide, tirzepatide, or Wegovy Pill.",
        },
      },
      {
        "@type": "Question",
        name: "What should I drink when increasing fibre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plain water is usually the simplest option. Soups, herbal teas, and water-rich foods may also help, but users should ask a clinician if they have fluid restrictions or ongoing vomiting or diarrhoea.",
        },
      },
      {
        "@type": "Question",
        name: "Can fibre help fullness during weight loss treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, fibre-rich foods may support fullness, especially when paired with protein. However, GLP-1 users should avoid forcing large portions if they already feel very full.",
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
            ...articleSchema,
            "@graph": [articleSchema, breadcrumbSchema, faqSchema],
          }),
        }}
      />
      <ArticleClient />
    </>
  );
}
