import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, PRICE_COMPARISON_HERO_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/weight-loss-treatment-price-comparison-uk";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(PRICE_COMPARISON_HERO_PNG)}`;

export const metadata: Metadata = {
  title: "Weight Loss Treatment Price Comparison UK 2026: Mounjaro and Wegovy",
  description:
    "Compare weight loss treatment prices in the UK 2026 covering Mounjaro, Wegovy and Saxenda. Cost per dose, monthly estimates and what to check before you start.",
  keywords:
    "weight loss treatment price, weight loss treatment price cost compare, weight loss treatment UK, fat loss treatment cost UK, mounjaro price UK, wegovy price UK",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Weight Loss Treatment Price Comparison UK 2026: Mounjaro and Wegovy",
    description:
      "Compare weight loss treatment prices in the UK 2026 covering Mounjaro, Wegovy and Saxenda. Cost per dose, monthly estimates and what to check before you start.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-27T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Weight Loss Treatment Price Comparison UK 2026: Mounjaro and Wegovy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weight Loss Treatment Price Comparison UK 2026: Mounjaro and Wegovy",
    description:
      "Compare weight loss treatment prices in the UK 2026 covering Mounjaro, Wegovy and Saxenda. Cost per dose, monthly estimates and what to check before you start.",
    images: [HERO_IMAGE],
  },
};

export default function WeightLossTreatmentPriceComparisonPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Weight Loss Treatment Price Comparison UK 2026: Mounjaro and Wegovy",
    description:
      "Compare weight loss treatment prices in the UK 2026 covering Mounjaro, Wegovy and Saxenda. Cost per dose, monthly estimates and what to check before you start.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://www.healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-05-27",
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
          text: "Based on independent monitoring, Mounjaro 2.5 mg (starter dose) from some GPhC-registered pharmacies begins from around £130 per pen. Wegovy starter doses follow a similar range. Saxenda pricing is structured differently due to its daily dosing. However, 'cheapest' at the starter stage may not reflect the most cost-effective option over the full treatment course, as dose escalation significantly affects monthly costs.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy cheaper than Mounjaro in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At lower doses, both treatments are priced within a similar range. The difference becomes more apparent at higher doses: Mounjaro at 12.5 mg to 15 mg tends to cost more per pen than Wegovy at its 2.4 mg maintenance dose across most providers. However, this varies and should be checked against live pharmacy pricing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get weight loss treatment free on the NHS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy is now available through a limited NHS specialist weight management pathway. Mounjaro has received NICE approval and is in the process of being rolled out through NHS commissioning. However, access remains constrained by local availability and eligibility criteria. Most people in the UK currently access these treatments privately due to NHS capacity limitations.",
        },
      },
      {
        "@type": "Question",
        name: "Are there additional costs beyond the medication price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Consultation fees, delivery charges, and in some cases ongoing monitoring or programme fees are commonly charged separately. These can add a meaningful amount to the total monthly cost. Reviewing the full pricing structure of a provider, and not just the pen price, is strongly recommended before committing.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if an online pharmacy is safe and legitimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check that the pharmacy holds a valid GPhC registration number, which can be verified on the official GPhC register. Our platform only lists pharmacies that have been verified against this standard, and also include Trustpilot ratings to support further due diligence.",
        },
      },
      {
        "@type": "Question",
        name: "Will treatment costs increase as my dose goes up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All three GLP-1 treatments use a titration model in which the dose is gradually increased over several months. Because higher-strength pens carry higher prices, your monthly cost will typically rise as you move through the titration schedule. Planning for this cost progression from the outset is an important part of budgeting for treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I compare prices from multiple pharmacies in one place?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our interactive weight loss treatment comparison hub is an independent UK platform that displays live-updated prices from over 60 GPhC-registered pharmacies in a single interactive table. This covers Mounjaro, Wegovy, and Saxenda across all dose strengths, with no preference shown to any provider.",
        },
      },
    ],
  };

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="Weight Loss Treatment Price Comparison UK 2026: Mounjaro and Wegovy"
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
