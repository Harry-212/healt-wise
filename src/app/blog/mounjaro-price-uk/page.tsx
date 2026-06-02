import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, MOUNJARO_PRICE_UK_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/mounjaro-price-uk";
const TITLE =
  "Mounjaro Price UK 2026: How Much Does Each Dose Cost and Where to Find It";
const DESCRIPTION =
  "How much does Mounjaro cost in the UK in 2026? Full price breakdown by dose, monthly estimates, and what to check before buying from any pharmacy.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(MOUNJARO_PRICE_UK_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "mounjaro price UK, how much does mounjaro cost UK, mounjaro cost per dose, tirzepatide price UK, mounjaro monthly cost, tirzepatide pen, GLP 1 weight loss injection, mounjaro starter dose, mounjaro maintenance dose, GPhC pharmacy, private prescription UK, mounjaro dose titration",
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

export default function MounjaroPriceUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
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
        name: "What is the cheapest dose of Mounjaro available in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 2.5 mg starter dose is the most affordable, available from approximately £130 per pen from some GPhC registered providers. However, this dose is only used for the first four weeks of treatment. Prices increase with each dose step through the titration schedule.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Mounjaro 15 mg cost in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 15 mg pen, Mounjaro's maximum licensed dose, ranges from approximately £260 to £340 per pen across GPhC registered pharmacies. This is the maintenance stage price for patients who progress to the highest dose level.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get Mounjaro cheaper with a subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some pharmacies offer lower per pen pricing for patients on a monthly subscription plan versus single pen purchases. However, the savings vary and may be offset by subscription terms. Compare the total all in cost, including any subscription fees, before committing.",
        },
      },
      {
        "@type": "Question",
        name: "Does Mounjaro require a prescription in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mounjaro (tirzepatide) is a prescription only medicine in the UK. A clinical assessment from a licensed prescriber is a legal requirement before it can be dispensed, regardless of where you purchase it.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Mounjaro more expensive than Wegovy at higher doses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At maintenance level doses, Mounjaro tends to sit at a slightly higher price point than Wegovy across most providers. This reflects the manufacturer's pricing structure for tirzepatide versus semaglutide, alongside pharmacy margin. However, the gap varies by provider and dose.",
        },
      },
      {
        "@type": "Question",
        name: "Is Mounjaro price regulated in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Unlike NHS drug pricing, which is subject to government negotiation, private market prices for Mounjaro are set by individual pharmacies. This is why prices vary between providers for the same dose.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I see a live comparison of Mounjaro prices from different pharmacies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Mounjaro price comparison tool at Healthwise360 lists verified, regularly updated pricing from over 60 GPhC registered pharmacies across all dose strengths, with no commercial affiliation to any provider.",
        },
      },
    ],
  };

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="Mounjaro Price UK 2026: How Much Does Each Dose Cost and Where to Find It"
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
