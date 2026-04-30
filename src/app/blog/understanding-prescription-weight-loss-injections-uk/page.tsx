import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogWebpPath, UK_RX_INJECTIONS_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/understanding-prescription-weight-loss-injections-uk";
const HERO_IMAGE = `${siteOrigin()}${blogWebpPath(UK_RX_INJECTIONS_HERO_WEBP)}`;

export const metadata: Metadata = {
  title:
    "Understanding Prescription Weight Loss Treatments in the UK: What They May Actually Offer",
  description:
    "Explore uk prescription weight loss treatments and discover if they're the safe, effective boost you need.",
  keywords: "uk prescription weight loss treatments",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title:
      "Understanding Prescription Weight Loss Treatments in the UK: What They May Actually Offer",
    description:
      "Explore uk prescription weight loss treatments and discover if they're the safe, effective boost you need.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-25T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "UK prescription weight loss treatment — GLP-1 medicines with professional supervision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Understanding Prescription Weight Loss Treatments in the UK: What They May Actually Offer",
    description:
      "Explore uk prescription weight loss treatments and discover if they're the safe, effective boost you need.",
    images: [HERO_IMAGE],
  },
};

export default function UnderstandingPrescriptionWeightLossInjectionsUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Understanding Prescription Weight Loss Treatments in the UK: What They May Actually Offer",
    description:
      "GLP-1 class weight loss treatments in the UK: realistic expectations, Wegovy and Mounjaro, NHS vs private, risks, and long-term use — informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-25",
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
        name: "Are prescription weight loss treatments worth trying?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They may be worth considering if conventional approaches have not worked and you meet prescribing criteria. Whether they are worth it often depends on side effects, cost, and whether you can sustain changes around them.",
        },
      },
      {
        "@type": "Question",
        name: "Which works better: Wegovy or Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some evidence suggests Mounjaro may produce greater average weight loss than Wegovy in some populations, but individual response can vary significantly. A prescriber should assess what is appropriate for you.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get weight loss treatments through the NHS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Possibly, but eligibility is strict. Access usually requires meeting BMI and health criteria and referral into specialist weight management pathways, with availability that varies by region.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I stop treatments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Weight regain may occur, particularly if appetite returns and behavioural changes have not been maintained. Stopping or changing treatment should only be done with your prescriber’s advice.",
        },
      },
      {
        "@type": "Question",
        name: "Are online pharmacies safe for weight loss treatments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some online pharmacies are legitimate UK-registered services; some are not. Only regulated providers that require proper prescribing review and supply licensed medicines should be used. Avoid unverified sellers on social media.",
        },
      },
      {
        "@type": "Question",
        name: "Can genetics affect how well these treatments work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Emerging research suggests genetic differences may influence responsiveness to medicines like semaglutide and tirzepatide, but the science is still developing and is not yet a standard part of routine prescribing in most cases.",
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
