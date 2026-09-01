import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, WEGOVY_PRICE_UK_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/wegovy-price-uk";
const TITLE =
  "Wegovy Price UK 2026: How Much Does Each Dose Cost and Is It Worth It?";
const DESCRIPTION =
  "How much does Wegovy cost in the UK in 2026? Full price breakdown by dose, monthly estimates, NHS vs private, and how it compares to Mounjaro.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(WEGOVY_PRICE_UK_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "wegovy price UK, how much does wegovy cost UK, wegovy cost per dose, semaglutide price UK, wegovy monthly cost UK, semaglutide injection UK, GLP 1 weight loss UK, wegovy starter dose, wegovy 2.4mg cost, wegovy vs mounjaro price, private prescription semaglutide UK, wegovy NHS vs private, wegovy titration cost",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-28T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: TITLE,
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

export default function WegovyPriceUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-05-28",
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
        name: "What is the cheapest dose of Wegovy available in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 0.25 mg starter dose is the most affordable, available from approximately £130 per pen at some GPhC registered pharmacies. This dose is used only during the first four weeks of treatment. Prices increase with each subsequent dose step.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Wegovy 2.4 mg cost in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 2.4 mg maintenance dose, which is the highest licensed Wegovy dose for weight management, ranges from approximately £240 to £295 per pen across GPhC registered pharmacies in 2026. This is the price most long term users will pay on a monthly basis.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy cheaper than Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At starter doses, both treatments are priced within a similar range. At maintenance doses, Wegovy tends to be slightly less expensive than Mounjaro, approximately £240 to £295 versus £260 to £340, though the gap varies by provider. However, individual clinical response and suitability are more important than price alone.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get Wegovy on the NHS for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy is available through NHS specialist weight management services for patients who meet specific eligibility criteria. However, the rollout is phased and access depends on location and clinical suitability. Most UK patients currently access Wegovy privately. For NHS eligibility information, speak with your GP.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Wegovy price increase with each dose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each pen contains a higher concentration of semaglutide at higher doses. Novo Nordisk prices each dose strength differently at the manufacturing level, and pharmacies follow the same stepped pricing structure. The price at 2.4 mg reflects the higher active ingredient concentration compared to the 0.25 mg starter pen.",
        },
      },
      {
        "@type": "Question",
        name: "Are there hidden fees when buying Wegovy privately?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in many cases. Consultation fees, delivery charges, and programme or monitoring fees are commonly charged separately from the pen price. Always request a full cost breakdown, including all fees, before placing an order with any provider.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I compare Wegovy prices from multiple UK pharmacies at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Wegovy and weight loss treatment price comparison at Healthwise360 displays independently verified pricing from over 60 GPhC registered pharmacies across all dose strengths, with no commercial affiliation to any provider. The full weight loss treatment price comparison guide also covers all three treatments side by side.",
        },
      },
    ],
  };

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="Wegovy Price UK 2026: How Much Does Each Dose Cost and Is It Worth It?"
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
