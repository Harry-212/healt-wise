import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import {
  blogImgPath,
  SAXENDA_MOUNJARO_WEGOVY_PRICE_UK_HERO_PNG,
} from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/saxenda-vs-mounjaro-vs-wegovy-price-uk";
const TITLE =
  "Saxenda vs Mounjaro vs Wegovy: Which Is the Cheapest Weight Loss Treatment in the UK?";
const DESCRIPTION =
  "Saxenda vs Mounjaro vs Wegovy price comparison UK 2026. Full cost breakdown by dose, annual estimates, what each treatment actually costs long term and how to compare properly.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(SAXENDA_MOUNJARO_WEGOVY_PRICE_UK_HERO_PNG)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "saxenda vs mounjaro vs wegovy price, saxenda vs mounjaro price UK, wegovy vs mounjaro cost UK, cheapest weight loss injection UK, compare weight loss treatment price UK, GLP 1 price comparison UK, weight loss injection cost UK 2026, tirzepatide vs semaglutide vs liraglutide price, saxenda price UK, mounjaro cost per month UK, wegovy monthly cost UK, cheapest GLP 1 UK, private weight loss treatment comparison, maintenance dose cost UK, annual cost weight loss treatment UK, GPhC pharmacy comparison UK",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-05T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Saxenda vs Mounjaro vs Wegovy UK price comparison guide",
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

export default function SaxendaMounjaroWegovyPriceUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://www.healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-06-05",
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
        name: "Is Saxenda cheaper than Mounjaro and Wegovy in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At the starter dose, Saxenda is typically the cheapest option, beginning at around £79 to £120 per month compared with £128 to £180 for Mounjaro and Wegovy starters. At maintenance doses, Saxenda's monthly cost of £150 to £290 is generally lower than Wegovy and Mounjaro. However, Saxenda requires daily injections and has lower average clinical weight loss benchmarks than the newer weekly options.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy or Mounjaro cheaper in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At starter doses, both are priced similarly. At maintenance doses, Wegovy at £240 to £295 for 2.4 mg is typically cheaper than Mounjaro at £249 to £375 for 15 mg across most UK providers. The gap widened after the Mounjaro price increase in late 2025.",
        },
      },
      {
        "@type": "Question",
        name: "Which treatment produces the most weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on clinical trial data, Mounjaro (tirzepatide) shows the highest average weight loss at approximately 15 to 20% of body weight in the SURMOUNT trials. Wegovy shows approximately 12 to 15% in the STEP trials, while Saxenda shows approximately 5 to 8% in the SCALE trials. Individual outcomes vary significantly.",
        },
      },
      {
        "@type": "Question",
        name: "Can I switch between treatments if I find a cheaper option?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Switching between GLP 1 treatments is clinically possible but requires prescriber guidance. The titration schedules and dosing protocols differ between Saxenda, Wegovy, and Mounjaro, and the switch process needs clinical oversight. Do not switch treatments without discussing it with a licensed prescriber.",
        },
      },
      {
        "@type": "Question",
        name: "Are there cheaper alternatives to all three?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Orlistat and Mysimba are available at lower price points through some UK private pharmacies, though they have significantly different mechanisms and average efficacy profiles. NHS prescribing of these options through GP services is also available in some cases. These are not GLP 1 treatments and are outside the scope of this comparison.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I compare all three treatments side by side with live prices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Mounjaro vs Wegovy vs Saxenda comparison at Healthwise360 covers all three treatments across all dose strengths with live pricing from more than 64 GPhC registered pharmacies. The cheapest options UK hub provides a verified low cost snapshot updated regularly.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="Saxenda vs Mounjaro vs Wegovy Price UK"
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
