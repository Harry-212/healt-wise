import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, SEMAGLUTIDE_WHERE_TO_START_HERO_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/semaglutide-weight-loss-where-to-start-uk";
const TITLE = "Semaglutide Weight Loss: Where to Start Safely in the UK";
const DESCRIPTION =
  "Semaglutide weight loss UK guide: learn safe routes, prescription checks, price factors and pharmacy red flags.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(SEMAGLUTIDE_WHERE_TO_START_HERO_PNG)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "semaglutide weight loss where to start uk, semaglutide weight loss uk, buy semaglutide uk, wegovy price list uk, mounjaro price list uk, semaglutide cost comparison, pharmacy safety uk, wegovy tablets uk, semaglutide injections online, compare weight loss treatment prices",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-24T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Semaglutide Weight Loss UK guide covering safe routes, prescription checks, price factors and pharmacy safety",
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

export default function SemaglutideWhereToStartPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-06-24",
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
        name: "Semaglutide Weight Loss Where to Start Safely UK",
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
        name: "Can I buy semaglutide for weight loss online in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may be able to access semaglutide weight loss treatment through a regulated online consultation pathway. However, it should only be supplied after clinical assessment and with a valid prescription.",
        },
      },
      {
        "@type": "Question",
        name: "Is semaglutide the same as Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy contains semaglutide and is used for weight loss. Ozempic and Rybelsus also contain semaglutide, but they are used for type 2 diabetes rather than standard UK weight loss treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Is Ozempic used for weight loss in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ozempic contains semaglutide, but it is licensed for type 2 diabetes. Wegovy is the semaglutide brand used for weight loss.",
        },
      },
      {
        "@type": "Question",
        name: "Is Rybelsus a weight loss tablet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rybelsus contains semaglutide, but it is used for type 2 diabetes. It should not be confused with the newer semaglutide tablet approved for weight loss.",
        },
      },
      {
        "@type": "Question",
        name: "How much does semaglutide weight loss treatment cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost depends on provider, dose, format, delivery, consultation, and support. Therefore, users should compare dose-level pricing rather than relying only on a single 'from' price.",
        },
      },
      {
        "@type": "Question",
        name: "What should I check before choosing a semaglutide provider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check the clinical assessment process, pharmacy registration, price transparency, side effect support, delivery information, and ongoing aftercare.",
        },
      },
      {
        "@type": "Question",
        name: "Can semaglutide be bought without a prescription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Semaglutide weight loss treatment should only be supplied after a proper clinical assessment and valid prescription.",
        },
      },
      {
        "@type": "Question",
        name: "Is semaglutide available as a tablet for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the UK approved a semaglutide tablet for weight loss and weight management in June 2026. However, it remains prescription-only and should not be confused with supplements.",
        },
      },
      {
        "@type": "Question",
        name: "Is semaglutide cheaper than Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on provider, dose, format, and support package. In many cases, the starter dose price may not reflect the full long-term treatment cost.",
        },
      },
      {
        "@type": "Question",
        name: "What is the safest way to start semaglutide weight loss treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The safest way is to speak to a qualified healthcare professional, use a regulated provider, check pharmacy registration, and compare the full treatment cost before paying.",
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
