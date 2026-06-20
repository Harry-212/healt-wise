import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, GLP1_SUPPLEMENTS_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/glp-1-supplements-uk";
const TITLE = "GLP-1 Supplements UK: What Helps, What's Hype and What to Avoid";
const DESCRIPTION =
  "GLP-1 supplements UK guide: protein, fibre, vitamins, safety checks and what not to confuse with medicine.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(GLP1_SUPPLEMENTS_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "glp-1 supplements uk, glp-1 support supplements, protein on mounjaro, fibre on wegovy, natural ozempic supplement, weight loss supplements uk, glp-1 nutrition support, appetite support supplements, pharmacy safety uk, mounjaro supplements, wegovy supplements",
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
        alt: "GLP-1 supplements UK guide covering protein, fibre, vitamins and safe nutrition support",
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

export default function Glp1SupplementsUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
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
        name: "GLP-1 Supplements UK",
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
        name: "Are GLP-1 supplements the same as Mounjaro or Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. GLP-1 supplements are not the same as Mounjaro or Wegovy. Mounjaro and Wegovy are prescription medicines, while supplements are usually nutrition or wellness products.",
        },
      },
      {
        "@type": "Question",
        name: "Do GLP-1 supplements work for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some supplements may support diet quality, protein intake, fibre intake, or hydration. However, they should not be treated as proven replacements for prescription weight loss treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Can supplements replace Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Supplements should not be positioned as a replacement for Mounjaro. If you are considering treatment, speak to a clinician and compare regulated weight loss treatment options safely.",
        },
      },
      {
        "@type": "Question",
        name: "Can supplements replace Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Wegovy is a prescription medicine, while supplements are not equivalent medical treatments. A supplement may support general nutrition, but it should not be marketed as a substitute for Wegovy.",
        },
      },
      {
        "@type": "Question",
        name: "What supplements do people commonly consider on GLP-1 treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "People often consider protein powder, fibre supplements, vitamin D, multivitamins, electrolytes, probiotics, or digestive support. However, the right choice depends on diet, symptoms, medical history, and professional advice.",
        },
      },
      {
        "@type": "Question",
        name: "Is protein important while using GLP-1 treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Protein can be important because reduced appetite may make it harder to eat enough. However, many people can meet protein needs through food, and supplements are only one possible support option.",
        },
      },
      {
        "@type": "Question",
        name: "What helps constipation on GLP-1 treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fibre, fluids, regular meals, and movement may help some people. However, if constipation is severe, painful, or persistent, users should speak to their prescriber or pharmacist.",
        },
      },
      {
        "@type": "Question",
        name: 'Are "natural Ozempic" supplements safe?',
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Be careful with "natural Ozempic" claims. The phrase can be misleading because supplements are not the same as prescription GLP-1 medicines. Always check ingredients and avoid products making unrealistic claims.',
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
