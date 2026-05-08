import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/can-hormones-cause-belly-fat-after-40";
/** JPEG 1200×630 for Open Graph / WhatsApp (WebP previews are unreliable on WhatsApp). */
const SOCIAL_PREVIEW_IMAGE = `${siteOrigin()}/blog/2.1-fatloss-og.jpg`;

export const metadata: Metadata = {
  title: "Can Hormones Cause Belly Fat After 40",
  description:
    "Yes — hormones directly drive belly fat after 40. Learn how oestrogen, testosterone, cortisol, and insulin interact to cause abdominal weight gain, and what to do about it.",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Can Hormones Cause Belly Fat After 40",
    description:
      "Yes — hormones directly drive belly fat after 40. Learn how oestrogen, testosterone, cortisol, and insulin interact to cause abdominal weight gain, and what to do about it.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-08T00:00:00.000Z",
    images: [
      {
        url: SOCIAL_PREVIEW_IMAGE,
        alt: "Hormones and belly fat after 40 — oestrogen, testosterone, cortisol and insulin explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can Hormones Cause Belly Fat After 40",
    description:
      "Yes — hormones directly drive belly fat after 40. Learn how oestrogen, testosterone, cortisol, and insulin interact to cause abdominal weight gain, and what to do about it.",
    images: [SOCIAL_PREVIEW_IMAGE],
  },
};

export default function CanHormonesCauseBellyFatAfter40Page() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Can Hormones Cause Belly Fat After 40",
    description:
      "Hormones can directly drive belly fat after 40. Learn how oestrogen, testosterone, cortisol and insulin interact, common signs, and evidence-based steps that support hormonal balance.",
    image: [SOCIAL_PREVIEW_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-05-08",
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
        name: "Do hormones directly cause belly fat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Declining oestrogen can shift fat storage to the abdomen, lower testosterone can reduce muscle mass (raising body fat percentage), chronically elevated cortisol can fuel visceral fat accumulation, and insulin resistance can make fat harder to mobilise.",
        },
      },
      {
        "@type": "Question",
        name: "Can HRT help reduce belly fat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HRT doesn’t directly burn fat, but stabilising oestrogen can improve sleep, reduce stress reactivity, and improve insulin sensitivity—conditions that can make belly fat easier to manage. It isn’t appropriate for everyone; discuss risks and benefits with a GP.",
        },
      },
      {
        "@type": "Question",
        name: "Is cortisol the main hormone causing belly fat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cortisol is a major driver, but it typically works alongside other midlife shifts, including declining sex hormones and insulin resistance. The interplay between these factors explains the full picture.",
        },
      },
      {
        "@type": "Question",
        name: "Can balancing hormones help with weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Supporting hormonal balance through lifestyle, nutrition, stress management, and sometimes medical support can make the body more responsive to weight-management efforts. It’s a foundation rather than a standalone solution.",
        },
      },
      {
        "@type": "Question",
        name: "What foods help balance hormones after 40?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Mediterranean-style diet rich in vegetables, lean protein, healthy fats, and fibre—with fewer refined carbohydrates—supports hormonal health. Examples include oily fish (omega‑3s), flaxseed (lignans), and cruciferous vegetables (support oestrogen metabolism).",
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

