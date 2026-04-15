import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/mounjaro-weight-loss-benefits-backed-by-science";
const TITLE = "Mounjaro Weight Loss Benefits Backed by Science";
const DESCRIPTION =
  "Unlock mounjaro weight loss benefits backed by science to help you shed stubborn pounds with confidence.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "mounjaro weight loss",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-15T00:00:00.000Z",
  },
};

export default function MounjaroWeightLossBenefitsArticlePage() {
  const origin = siteOrigin();
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${origin}${PATH}`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What weight loss has Mounjaro shown in trials?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In a widely reported 72-week trial, participants achieved around a 20% reduction in body weight on Mounjaro versus about 14% on another GLP-1 option; individual results vary and require medical supervision.",
        },
      },
      {
        "@type": "Question",
        name: "Can I regain weight if I stop Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Studies such as SURMOUNT-4 suggest many people regain a substantial portion of lost weight after stopping unless strong diet, exercise, and follow-up plans are in place.",
        },
      },
      {
        "@type": "Question",
        name: "What are the most common side effects of Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nausea, vomiting, bloating, constipation, and diarrhoea are among the most commonly reported. Serious problems are rarer but need prompt medical attention.",
        },
      },
      {
        "@type": "Question",
        name: "Is Mounjaro a substitute for diet and exercise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Trials typically combine medication with lifestyle support. Sustainable results usually depend on ongoing habits, not injections alone.",
        },
      },
      {
        "@type": "Question",
        name: "Who should I speak to before starting Mounjaro in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Always discuss with a GMC-registered prescriber or your GP. Eligibility, NHS pathways, and private options differ; this site compares information and does not prescribe.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ ...ARTICLE_SCHEMA, "@graph": [ARTICLE_SCHEMA, FAQ_SCHEMA] }),
        }}
      />
      <ArticleClient />
    </>
  );
}
