import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import { BLOG_DOES_MOUNJARO_WORK_HERO_IMAGE } from "@/lib/site-assets";

const HERO_IMAGE_ABSOLUTE = `${siteOrigin()}${BLOG_DOES_MOUNJARO_WORK_HERO_IMAGE}`;

export const metadata: Metadata = {
  title: "Does Mounjaro Really Work for Weight Loss? Find Out Here",
  description:
    "How does Mounjaro work for weight loss? Discover your eligibility, costs and UK providers in one guide.",
  keywords: "how does mounjaro work for weight loss",
  alternates: {
    canonical: `${siteOrigin()}/blog/does-mounjaro-really-work-for-weight-loss-find-out-here`,
  },
  openGraph: {
    title: "Does Mounjaro Really Work for Weight Loss? Find Out Here",
    description:
      "How does Mounjaro work for weight loss? Discover your eligibility, costs and UK providers in one guide.",
    url: `${siteOrigin()}/blog/does-mounjaro-really-work-for-weight-loss-find-out-here`,
    type: "article",
    publishedTime: "2026-04-14T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE_ABSOLUTE,
        alt: "Does Mounjaro Really Work for Weight Loss? Find Out Here",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Mounjaro Really Work for Weight Loss? Find Out Here",
    description:
      "How does Mounjaro work for weight loss? Discover your eligibility, costs and UK providers in one guide.",
    images: [HERO_IMAGE_ABSOLUTE],
  },
};

export default function MounjaroEffectivenessArticlePage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Does Mounjaro Really Work for Weight Loss? Find Out Here",
    description:
      "How does Mounjaro work for weight loss? Discover your eligibility, costs and UK providers in one guide.",
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-14",
    image: [HERO_IMAGE_ABSOLUTE],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}/blog/does-mounjaro-really-work-for-weight-loss-find-out-here`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need a prescription to try Mounjaro for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mounjaro is a prescription medication that is typically prescribed for type 2 diabetes. Using it off-label for weight loss should always be done under a doctor’s close supervision.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly will I notice results once I start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many participants in clinical trials began seeing changes in their appetite and initial weight loss within the first few weeks. However, individual progress varies, and you might need adjustments to achieve steady results.",
        },
      },
      {
        "@type": "Question",
        name: "Is Mounjaro FDA-approved for losing weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Currently, Mounjaro is only FDA-approved for type 2 diabetes. Its weight loss benefits come from its mechanism of action, but it remains an off-label treatment for obesity and overweight. Guidelines may change with further research and regulatory review.",
        },
      },
      {
        "@type": "Question",
        name: "What if I stop taking Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may experience a return of appetite and a gradual reversal of weight loss if you do not maintain the lifestyle habits that initially supported your progress. This is one reason Mounjaro is considered a longer-term therapy by many patients.",
        },
      },
      {
        "@type": "Question",
        name: "How do I manage the digestive side effects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can often reduce nausea, heartburn, and other gastrointestinal symptoms by opting for smaller, more frequent meals. Focus on a high-fibre, protein-rich diet, and be sure to stay well-hydrated.",
        },
      },
      {
        "@type": "Question",
        name: "When should I see my GP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consult your GP before starting or stopping Mounjaro. You should also speak with them if you experience any severe side effects, or if you have any questions about dose changes, managing cravings, or your general health.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...ARTICLE_SCHEMA, "@graph": [ARTICLE_SCHEMA, FAQ_SCHEMA] }) }}
      />
      <ArticleClient />
    </>
  );
}
