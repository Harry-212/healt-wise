import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/the-truth-about-mounjaro-dosage-for-weight-loss-effectiveness";
const TITLE = "The Truth About Mounjaro Dosage for Weight Loss Effectiveness";
const DESCRIPTION =
  "Find the ideal mounjaro dosage for weight loss to maximise your results with clear, expert-backed guidance.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "mounjaro dosage for weight loss",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-15T00:00:00.000Z",
  },
};

export default function MounjaroDosageTruthArticlePage() {
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
        name: "How does Mounjaro dosing usually increase for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many UK pathways titrate every few weeks (often about four) from a low starting dose up toward a maximum, with adjustments based on tolerance, side effects, and clinical goals—always under prescriber supervision.",
        },
      },
      {
        "@type": "Question",
        name: "Do higher Mounjaro doses always mean more weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trials often show greater average weight change at higher tolerated doses, but individual response varies. Rushing titration can worsen side effects; some people do well staying at a moderate maintenance dose.",
        },
      },
      {
        "@type": "Question",
        name: "What side effects are common when the dose goes up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nausea, vomiting, diarrhoea, bloating, and reduced appetite are commonly reported, especially after dose increases. Most improve with time; persistent symptoms need medical review.",
        },
      },
      {
        "@type": "Question",
        name: "Can I stop Mounjaro once I reach my goal weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Studies suggest many people regain weight after stopping tirzepatide without strong maintenance habits. Discuss tapering, maintenance dosing, and lifestyle plans with your clinician—do not stop suddenly without advice.",
        },
      },
      {
        "@type": "Question",
        name: "Is this article medical advice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Health Wise provides independent information and comparisons. Dosing decisions must be made by a qualified prescriber who knows your history.",
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
