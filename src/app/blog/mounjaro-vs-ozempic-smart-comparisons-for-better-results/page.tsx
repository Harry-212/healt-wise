import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/mounjaro-vs-ozempic-smart-comparisons-for-better-results";
const TITLE = "Mounjaro vs Ozempic: Smart Comparisons for Better Results";
const DESCRIPTION =
  "Mounjaro vs Ozempic: find which treatment fits your diabetes goals in the UK with clear, confident advice.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "mounjaro vs ozempic",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-24T00:00:00.000Z",
  },
};

export default function MounjaroVsOzempicArticlePage() {
  const origin = siteOrigin();
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-24",
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
        name: "How soon will you see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most people notice appetite suppression and slight weight changes within two to four weeks. Significant reductions often become clear after three months of consistent use.",
        },
      },
      {
        "@type": "Question",
        name: "Can you switch between Mounjaro and Ozempic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but only under medical supervision. Your clinician will recommend an appropriate equivalent starting dose and schedule to avoid overlapping side effects.",
        },
      },
      {
        "@type": "Question",
        name: "Are injections painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The pens use very fine needles, so discomfort is minimal for most users. Applying a cold pack beforehand or injecting after a warm shower can further reduce any sting.",
        },
      },
      {
        "@type": "Question",
        name: "Do these drugs affect blood sugar if you’re not diabetic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They can lower glucose levels, so your doctor may advise periodic monitoring even if you’ve never had type 2 diabetes.",
        },
      },
      {
        "@type": "Question",
        name: "Will you regain weight after stopping treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Potentially, yes. These medications help reshape appetite and metabolism, but lasting change also depends on diet, activity levels and lifestyle habits once treatment ends.",
        },
      },
      {
        "@type": "Question",
        name: "Are Mounjaro and Ozempic available on the NHS for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ozempic is available on the NHS for type 2 diabetes but rarely for weight loss alone. Mounjaro's obesity indication is not universally covered and depends on strict criteria, such as a BMI over 35 with comorbidities. Both can be accessed privately off-label for weight management.",
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
