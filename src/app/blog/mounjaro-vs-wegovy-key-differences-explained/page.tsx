import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogWebpPath, MOUWEG_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/mounjaro-vs-wegovy-key-differences-explained";
const HERO_IMAGE = `${siteOrigin()}${blogWebpPath(MOUWEG_HERO_WEBP)}`;

export const metadata: Metadata = {
  title:
    "How Mounjaro vs Wegovy: The Key Differences Explained Help You Choose",
  description:
    "See how mounjaro vs wegovy: the key differences explained helps you choose your ideal UK weight loss shot.",
  keywords:
    "mounjaro vs wegovy: the key differences explained",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title:
      "How Mounjaro vs Wegovy: The Key Differences Explained Help You Choose",
    description:
      "See how mounjaro vs wegovy: the key differences explained helps you choose your ideal UK weight loss shot.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-20T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Mounjaro vs Wegovy — comparing UK GLP-1 weight loss injections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Mounjaro vs Wegovy: The Key Differences Explained Help You Choose",
    description:
      "See how mounjaro vs wegovy: the key differences explained helps you choose your ideal UK weight loss shot.",
    images: [HERO_IMAGE],
  },
};

export default function MounjaroVsWegovyPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How Mounjaro vs Wegovy: The Key Differences Explained Help You Choose",
    description:
      "Tirzepatide (Mounjaro) vs semaglutide (Wegovy): mechanisms, trials, dosing, side effects, cost and UK access — informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-20",
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
        name: "Is Mounjaro more effective than Wegovy on average in trials?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Head-to-head and class comparisons often show greater average weight loss with tirzepatide than semaglutide at commonly used doses, but individual response, tolerability, and medical eligibility vary. Your prescriber should interpret trial data for you.",
        },
      },
      {
        "@type": "Question",
        name: "Do Mounjaro and Wegovy both use weekly injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both are typically given as once-weekly subcutaneous injections with gradual dose titration, though formats and strengths differ by product and market.",
        },
      },
      {
        "@type": "Question",
        name: "Which drug has a gentler titration schedule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy’s semaglutide pens often use smaller incremental steps from a very low starting dose. Mounjaro’s tirzepatide schedule uses different mg strengths—both require medical oversight during increases.",
        },
      },
      {
        "@type": "Question",
        name: "Are Mounjaro and Wegovy routinely available for weight loss on the NHS in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Access varies by nation, trust, and eligibility criteria. Many people obtain these medicines privately; NHS availability for obesity alone is often limited and criteria-based.",
        },
      },
      {
        "@type": "Question",
        name: "What side effects are common to both Mounjaro and Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gastrointestinal symptoms such as nausea, diarrhoea or constipation, and vomiting are frequently reported, especially after dose increases. Injection-site reactions and headache can also occur.",
        },
      },
      {
        "@type": "Question",
        name: "How do private costs for Mounjaro and Wegovy typically compare in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prices change with dose, pharmacy, and bundled services. Always request written quotes from regulated providers and compare licensed supply routes rather than unverified sellers.",
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
