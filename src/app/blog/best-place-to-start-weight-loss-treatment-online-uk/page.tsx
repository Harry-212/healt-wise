import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, BEST_PLACE_HERO_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/best-place-to-start-weight-loss-treatment-online-uk";
const TITLE = "Best Place to Start Weight Loss Treatment Online UK: Safety, Prices and Provider Checks";
const DESCRIPTION =
  "Compare safe UK weight loss treatment providers, prices, pharmacy checks and support before starting treatment.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(BEST_PLACE_HERO_PNG)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "best place to start weight loss treatment online uk, buy weight loss injections uk, weight loss treatment prices, mounjaro price list uk, wegovy price list uk, pharmacy safety uk, weight loss online clinic, compare weight loss providers, online prescription weight loss",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-23T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Best Place to Start Weight Loss Treatment Online UK covering safety, prices and provider checks",
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

export default function BestPlaceToStartWeightLossPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-06-23",
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
        name: "Best Place to Start Weight Loss Treatment Online UK",
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
        name: "What is the best place to start weight loss treatment online in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best place to start is a regulated UK provider or comparison service that checks eligibility, uses a proper clinical assessment, works with a registered pharmacy, explains full treatment prices clearly, and provides support after approval. Users should avoid unregulated sellers, social media offers, and unusually cheap treatment claims.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy weight loss injections online in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some people may access private weight loss treatment online after a clinical assessment and valid prescription. However, users should only use regulated providers and should avoid unregulated websites or social media sellers.",
        },
      },
      {
        "@type": "Question",
        name: "Is the cheapest weight loss treatment provider the best option?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. The cheapest provider may not include delivery, support, consultation, or clear maintenance pricing. Therefore, users should compare full monthly cost, safety checks, and provider support before deciding.",
        },
      },
      {
        "@type": "Question",
        name: "What should I check before starting weight loss treatment online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check the pharmacy registration, clinical assessment process, treatment suitability, total monthly price, delivery policy, support options, maintenance pricing, and whether the provider explains side effects clearly.",
        },
      },
      {
        "@type": "Question",
        name: "Why do weight loss treatment prices vary so much?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prices vary because providers may include different services. Some include consultation, delivery, coaching, app support, or follow-up reviews. Others may show a lower medicine-only or starter-dose price.",
        },
      },
      {
        "@type": "Question",
        name: "Should I compare Mounjaro and Wegovy before choosing a provider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mounjaro and Wegovy are different treatments with different pricing, dose structures, and suitability factors. Comparing treatment options first can help users make a more informed provider decision.",
        },
      },
      {
        "@type": "Question",
        name: "What are the warning signs of an unsafe seller?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Warning signs include no clinical assessment, no pharmacy registration details, social media sales, miracle-result claims, unusually low prices, bulk offers, and no clear side effect or suitability information.",
        },
      },
      {
        "@type": "Question",
        name: "Why use Health Wise before choosing a provider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Health Wise helps users compare weight loss treatment prices, pharmacy safety, provider differences, and support features. This gives users a clearer picture before they start a private consultation.",
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
