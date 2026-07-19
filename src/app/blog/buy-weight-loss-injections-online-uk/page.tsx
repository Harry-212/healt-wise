import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import {
  blogImgPath,
  BUY_WEIGHT_LOSS_INJECTIONS_ONLINE_HERO_PNG,
} from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/buy-weight-loss-injections-online-uk";
const TITLE =
  "Buy Weight Loss Injections Online in the UK? Safe Price and Provider Guide";
const DESCRIPTION =
  "Learn how to buy weight loss injections online in the UK safely, compare prices, check providers, and avoid unsafe sellers.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(BUY_WEIGHT_LOSS_INJECTIONS_ONLINE_HERO_PNG)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "buy weight loss injections online uk, weight loss injections online, weight loss treatment price, compare weight loss treatment, mounjaro online uk, wegovy online uk, registered pharmacy weight loss, glp-1 medicines uk, safe online pharmacy",
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
        alt: "Buy weight loss injections online in the UK safe price and provider guide",
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

export default function BuyWeightLossInjectionsOnlineUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360" },
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
        name: "Buy Weight Loss Injections Online in the UK",
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
        name: "Can I buy weight loss injections online in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but only through a regulated provider that uses a clinical assessment and supplies treatment through a registered pharmacy. MHRA and NHS both warn against buying prescription-only weight loss medicines from unregulated sources.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a prescription for weight loss injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Wegovy, Mounjaro, and other GLP-1-style weight loss injections are prescription-only medicines in the UK. They should only be supplied after a qualified clinician has reviewed your suitability.",
        },
      },
      {
        "@type": "Question",
        name: "What BMI do I usually need for online weight loss treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many providers use a BMI of 30 or above, or 27 or above with weight-related conditions, as a starting point for assessment. However, the final decision depends on your full medical history and prescriber review.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cheapest way to buy weight loss injections online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cheapest visible option is not always the cheapest full pathway. Starter prices can change once the dose rises, and delivery, review fees, or maintenance policies may add to the total cost.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check whether an online pharmacy is regulated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the official GPhC register to check the pharmacy premises and registration status, and confirm that the provider clearly explains the clinical pathway and pharmacy identity.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy Ozempic online for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ozempic is licensed for type 2 diabetes, not standard UK weight management. Several providers explicitly say they do not recommend diabetes-only medicines as a substitute for approved weight loss treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Are weight loss injections safe for everyone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. They can be helpful for some eligible adults, but they are not suitable for everyone and can cause side effects. NHS and MHRA both emphasise assessment, counselling, and ongoing clinical supervision.",
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
