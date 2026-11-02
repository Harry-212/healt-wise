import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, BEST_PLACE_HERO_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/best-place-to-start-weight-loss-treatment-online-uk";
const TITLE =
  "Best Place to Start Weight Loss Treatment Online UK: Safety, Prices and Provider Checks";
/** Search title: the full H1 below is 103 characters, well past what search results show. */
const META_TITLE = "Best Place to Start Weight Loss Treatment Online UK";
const DESCRIPTION =
  "Compare safe UK weight loss treatment providers, prices, pharmacy checks and support before starting treatment.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(BEST_PLACE_HERO_PNG)}`;

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: DESCRIPTION,
  keywords:
    "best place to start weight loss treatment online uk, buy weight loss injections uk, weight loss treatment prices, mounjaro price list uk, wegovy price list uk, pharmacy safety uk, weight loss online clinic, compare weight loss providers, online prescription weight loss",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-23T00:00:00.000Z",
    modifiedTime: "2026-11-02T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Best Place to Start Weight Loss Treatment Online UK covering safety, prices and provider checks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
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
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://www.healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-06-23",
    dateModified: "2026-11-02",
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
        name: "Is the cheapest weight loss treatment provider the best option?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. The cheapest provider may not include delivery, support, consultation, or clear maintenance pricing. Therefore, users should compare full monthly cost, safety checks, and provider support before deciding.",
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
