import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/mounjaro-weight-loss-before-and-after";
const HERO_IMAGE = `${siteOrigin()}/blog/mounjaro%20weight%20loss%20before%20and%20after.webp`;

export const metadata: Metadata = {
  title: "Your Ultimate Guide to Mounjaro Weight Loss Before and After",
  description:
    "Explore the mounjaro weight loss before and after results to see how you can finally conquer stubborn pounds.",
  keywords: "mounjaro weight loss before and after",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Your Ultimate Guide to Mounjaro Weight Loss Before and After",
    description:
      "Explore the mounjaro weight loss before and after results to see how you can finally conquer stubborn pounds.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-17T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Your Ultimate Guide to Mounjaro Weight Loss Before and After",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Ultimate Guide to Mounjaro Weight Loss Before and After",
    description:
      "Explore the mounjaro weight loss before and after results to see how you can finally conquer stubborn pounds.",
    images: [HERO_IMAGE],
  },
};

export default function MounjaroBeforeAfterArticlePage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Your Ultimate Guide to Mounjaro Weight Loss Before and After",
    description:
      "Explore Mounjaro weight loss before and after: how tirzepatide works, typical results, dosing context, and what shapes outcomes—informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-17",
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
        name: "What kind of Mounjaro weight loss before and after results are typical in studies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trial and real-world summaries often report meaningful average weight change over months of treatment, but individual results vary widely. Waist circumference and other measures can improve alongside scale weight. Your clinician can interpret what is realistic for you.",
        },
      },
      {
        "@type": "Question",
        name: "How soon might I notice changes after starting Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some people notice appetite changes within the first few weeks, while scale and waist changes usually build over months. Early progress is not guaranteed and should be tracked with your prescriber, especially around dose changes.",
        },
      },
      {
        "@type": "Question",
        name: "Will my before and after results match someone else’s?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Age, adherence, activity, dose schedule, and health conditions all influence pace and total loss. Comparisons can be motivating but are not predictions.",
        },
      },
      {
        "@type": "Question",
        name: "What factors most influence my personal Mounjaro outcomes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Diet quality, exercise, sleep, stress, medication timing, dose titration, and conditions such as PCOS or type 2 diabetes can all matter. Sustainable habits usually amplify medication-supported loss.",
        },
      },
      {
        "@type": "Question",
        name: "Is Mounjaro something I can start without a prescription in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mounjaro is a prescription medicine in the UK. You should only obtain it through a qualified prescriber and a regulated supply route; avoid unverified sellers.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I read more about dosing and injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use clinician-led resources on titration, side-effect monitoring, and injection technique. Health Wise publishes guides on Mounjaro dosage and injections for general education—always follow your own prescriber’s instructions.",
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
            "@graph": [ARTICLE_SCHEMA, FAQ_SCHEMA],
          }),
        }}
      />
      <ArticleClient />
    </>
  );
}
