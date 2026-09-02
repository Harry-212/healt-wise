import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, MOUNJARO_CLICK_CALCULATOR_UK_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/mounjaro-click-calculator-uk";
const TITLE = "Mounjaro Click Calculator UK: KwikPen Guide";
const DESCRIPTION = "Mounjaro KwikPen click calculator for UK patients. See how many clicks equal each dose across all 6 pen strengths.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(MOUNJARO_CLICK_CALCULATOR_UK_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "mounjaro click calculator, mounjaro click calculator UK, mounjaro kwikpen clicks, how many clicks mounjaro, mounjaro calculator, mounjaro kwikpen dose chart, mounjaro clicks per dose, tirzepatide pen clicks, mounjaro units to mg, mounjaro ml per dose UK, mounjaro 60 clicks, mounjaro 5mg how many clicks, mounjaro dose chart UK, kwikpen dial clicks, mounjaro pen strength, tirzepatide dose calculation, mounjaro off-label dose, mounjaro half dose clicks, mounjaro 2.5mg clicks 5mg pen",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-02T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Mounjaro KwikPen click calculator UK guide for doses, clicks, and conversions",
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

export default function MounjaroClickCalculatorUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: `${siteOrigin()}/logo-health-wise.webp` } },
    datePublished: "2026-06-02",
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
        name: "How many clicks is a full Mounjaro dose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A full prescribed Mounjaro dose on the UK KwikPen is always 60 clicks, regardless of the pen strength. This corresponds to 0.6 mL (60 units on a U-100 scale), which is the fixed volume of one complete injection.",
        },
      },
      {
        "@type": "Question",
        name: "How many clicks is 2.5 mg on a 5 mg Mounjaro pen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Using the formula (2.5 ÷ 5) × 60, it equals 30 clicks. This represents half of the full dose volume of the 5 mg pen.",
        },
      },
      {
        "@type": "Question",
        name: "How many clicks is 2.5 mg on a 7.5 mg Mounjaro pen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Using the formula (2.5 ÷ 7.5) × 60, it equals 20 clicks. This is exactly one third of the full dose volume from the 7.5 mg pen.",
        },
      },
      {
        "@type": "Question",
        name: "How many clicks is 5 mg on a 10 mg Mounjaro pen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Using the formula (5 ÷ 10) × 60, it equals 30 clicks. This represents half the full dose from a 10 mg pen.",
        },
      },
      {
        "@type": "Question",
        name: "How many clicks is 7.5 mg on a 15 mg Mounjaro pen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Using the formula (7.5 ÷ 15) × 60, it equals 30 clicks. This represents half the full dose volume from a 15 mg pen.",
        },
      },
      {
        "@type": "Question",
        name: "How many mL is one Mounjaro dose in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One full Mounjaro dose on the UK KwikPen is 0.6 mL, regardless of pen strength. This is different from the US single-dose pen, which delivers 0.5 mL per dose.",
        },
      },
      {
        "@type": "Question",
        name: "How many units is a Mounjaro dose on a U-100 syringe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On a U-100 syringe (where 100 units equals 1 mL), 0.6 mL is equivalent to 60 units. This standard holds for all UK KwikPen strengths.",
        },
      },
      {
        "@type": "Question",
        name: "Is counting Mounjaro clicks safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Counting clicks to measure a partial dose is considered off-label use. The KwikPen is designed for full doses, and partial dosing by clicks introduces a small mechanical margin of error. The Mounjaro click calculator at Healthwise360 is provided for informational understanding only. Always follow your prescriber's dosing instructions.",
        },
      },
      {
        "@type": "Question",
        name: "Does Mounjaro have a 5th dose hidden in the pen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is typically a small residual volume after four full doses, but it is not a reliable fifth dose. Eli Lilly does not endorse extracting it. The pen is designed and licensed for four prescribed doses.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the same formula for Wegovy click calculations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Wegovy is a single-dose auto-injector with no dial or click mechanism. The click calculator concept is specific to the Mounjaro multi-dose KwikPen format.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="Mounjaro Click Calculator UK: How Many Clicks Is Your Dose?"
        pagePath={PATH}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [ARTICLE_SCHEMA, FAQ_SCHEMA],
          }),
        }}
      />
      <ArticleClient />
    </>
  );
}
