import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import {
  blogImgPath,
  WEGOVY_CLICK_CALCULATOR_UK_HERO_WEBP,
} from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/wegovy-click-calculator-uk";
const TITLE =
  "Wegovy Click Calculator UK: How Many Clicks Per Dose? FlexTouch Guide 2026";
const DESCRIPTION =
  "Wegovy click calculator UK 2026: FlexTouch pen clicks per dose, 74-click reference, 7.2 mg update, dose chart for all 5 strengths and what the clicks mean.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(WEGOVY_CLICK_CALCULATOR_UK_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "wegovy click calculator, wegovy click calculator UK, wegovy clicks per dose, how many clicks wegovy, wegovy flextouch clicks, wegovy flextouch pen UK, semaglutide click calculator UK, wegovy dose chart UK, wegovy 74 clicks, wegovy 0.25mg clicks, wegovy 2.4mg clicks, wegovy 7.2mg pen UK, wegovy dose calculator UK, wegovy pen how many clicks full dose, wegovy flextouch selector clicks, wegovy clicks to mg, how to use wegovy flextouch pen UK, wegovy dose counter UK, semaglutide FlexTouch dose guide",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-07-19T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Wegovy FlexTouch click calculator UK guide for dose clicks and pen strengths",
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

export default function WegovyClickCalculatorUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-07-19",
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
        name: "What is a Wegovy click calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Wegovy click calculator compares a prescribed dose with the labelled strength of the selected FlexTouch pen and expresses that relationship as a mathematical click estimate. It uses 74 as the reference for a full dose on the UK FlexTouch pen. It is an educational mathematical tool, not a dosing instruction and not a replacement for the dose counter or prescriber guidance.",
        },
      },
      {
        "@type": "Question",
        name: "How many clicks is a full Wegovy dose in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The mathematical reference for a full Wegovy dose on the UK FlexTouch pen is 74 clicks, regardless of which pen strength is used. However, Novo Nordisk instructs patients not to set a dose by counting clicks. Always use the dose counter on the pen and follow your prescriber's instructions.",
        },
      },
      {
        "@type": "Question",
        name: "How many clicks is 0.25 mg Wegovy from a 0.5 mg pen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Using the formula (0.25 ÷ 0.5) × 74 = 37 clicks. This represents 50% of the full dose volume from a 0.5 mg pen. This is a mathematical estimate only, not a prescribing instruction.",
        },
      },
      {
        "@type": "Question",
        name: "How many clicks is a 2.4 mg full dose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From a 2.4 mg FlexTouch pen, a full dose corresponds to 74 clicks, the standard reference for the UK device. The 2.4 mg dose is the standard Wegovy maintenance dose, reached at week 17 of the UK titration schedule.",
        },
      },
      {
        "@type": "Question",
        name: "Why is the Wegovy click reference 74 and not 60 like Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The two pens have different dose volumes: Wegovy FlexTouch delivers 0.5 mL per full dose, while the Mounjaro KwikPen delivers 0.6 mL. The different volumes produce different click references, 74 for Wegovy and 60 for Mounjaro. The two figures are not interchangeable.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Wegovy 7.2 mg dose equal to 222 clicks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Healthwise360 specifically does not represent 7.2 mg as 222 clicks. The 7.2 mg dose is a complete prescribed weekly regimen, either using a dedicated 7.2 mg single-dose pen (from April 2026) or three separate 2.4 mg injections on the same day. It does not represent 222 consecutive clicks on one device.",
        },
      },
      {
        "@type": "Question",
        name: "What Wegovy pen strengths are available in the UK in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The standard UK FlexTouch range includes 0.25 mg, 0.5 mg, 1 mg, 1.7 mg, and 2.4 mg. Additionally, a 7.2 mg weekly dose has been approved by the MHRA for certain adult patients with obesity, available as a dedicated single-dose pen (from April 2026) or as three consecutive 2.4 mg injections.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Healthwise360 Wegovy click calculator store my dose information?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Calculations are completed in the browser and the dose entered is not saved or used to create a personal profile.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy the same as Ozempic for click calculation purposes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. While both contain semaglutide, Wegovy and Ozempic use different pen devices, different doses, and have different labelled strengths. Ozempic is a multi-dose diabetes pen with a rotating dose dial; Wegovy is a weight management treatment with a FlexTouch selector. Click calculations from one must never be transferred to the other.",
        },
      },
      {
        "@type": "Question",
        name: "How is the Wegovy FlexTouch different from the US Wegovy pen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The UK Wegovy FlexTouch pen has a rotating selector mechanism that produces multiple clicks during use and contains four labelled doses. Many US-focused online resources describe a single-injection autoinjector pen where one click delivers the entire dose. Those descriptions do not apply to the UK FlexTouch device. UK patients should use UK-specific resources and the current MHRA-approved patient leaflet.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="Wegovy Click Calculator UK"
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
