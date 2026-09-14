import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, PRICE_COMPARISON_HERO_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/weight-loss-treatment-price-comparison-uk";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(PRICE_COMPARISON_HERO_PNG)}`;

const META_DESCRIPTION =
  "Compare UK weight loss treatment prices in 2026. See Mounjaro, Wegovy and Saxenda costs by dose, plus consultation, delivery and ongoing fees.";

export const metadata: Metadata = {
  title: "Weight Loss Treatment Price Comparison UK 2026 | Costs",
  description: META_DESCRIPTION,
  keywords:
    "weight loss treatment price, weight loss treatment price cost compare, weight loss treatment UK, fat loss treatment cost UK, mounjaro price UK, wegovy price UK",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Weight Loss Treatment Price Comparison UK 2026 | Costs",
    description: META_DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-27T00:00:00.000Z",
    modifiedTime: "2026-09-13T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Weight Loss Treatment Price Comparison UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weight Loss Treatment Price Comparison UK 2026 | Costs",
    description: META_DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

export default function WeightLossTreatmentPriceComparisonPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Weight Loss Treatment Price Comparison UK 2026: Mounjaro, Wegovy & Saxenda",
    description:
      "Compare UK weight loss treatment prices in 2026. See Mounjaro, Wegovy and Saxenda costs by dose, plus consultation, delivery and ongoing fees.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://www.healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-05-27",
    dateModified: "2026-09-13",
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
        name: "What is the cheapest weight loss treatment in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no single cheapest option in every situation. Starter doses of some private treatments can begin at around £130, but introductory pricing does not necessarily represent the cost later in treatment. The most meaningful comparison is usually the price of the treatment and dose you have actually been prescribed across several providers.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Mounjaro cost per month in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Private Mounjaro prices can range from roughly £130 at lower doses to £340 or more at higher doses, depending on the provider. Prices frequently change, so check current provider-level data before purchasing.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Wegovy cost privately in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical private prices for the commonly prescribed Wegovy dose range can run from approximately £130 to £295+, depending on dose and provider. Additional charges can increase the overall monthly cost.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy cheaper than Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can be at some dose levels and with some providers, particularly when comparing higher Mounjaro doses. However, neither treatment is universally cheaper — provider prices and promotions change, so compare the specific doses relevant to you.",
        },
      },
      {
        "@type": "Question",
        name: "Do weight loss treatment prices increase when the dose increases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often, yes. Higher-strength Mounjaro and Wegovy doses can cost substantially more than starter doses. This is why comparing only the first month's price can give an unrealistic idea of longer-term costs.",
        },
      },
      {
        "@type": "Question",
        name: "Are there costs in addition to the medication?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There can be. Depending on the provider, additional costs may include consultations, delivery, subscriptions, clinical monitoring and other programme charges. Check the complete pricing structure before committing to treatment.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check whether an online pharmacy is legitimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check the details of the pharmacy supplying your medicine and confirm its registration through the General Pharmaceutical Council register. Do not rely only on branding or an online review score — you should also expect an appropriate clinical assessment before prescription-only weight-management medicine is supplied.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I compare weight loss treatment prices from different UK providers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Healthwise360 maintains an interactive comparison matrix covering more than 60 UK weight-management providers. You can filter and compare provider prices at individual dose levels and review corresponding pharmacy and provider information.",
        },
      },
    ],
  };

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="Weight Loss Treatment Price Comparison UK"
        pagePath={PATH}
      />
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
