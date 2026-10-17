import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/why-does-belly-fat-increase-after-40";
/** JPEG 1200×630 for Open Graph / WhatsApp (WebP previews are unreliable on WhatsApp). */
const SOCIAL_PREVIEW_IMAGE = `${siteOrigin()}/blog/1.1-fatloss-og.jpg`;

const TITLE = "Belly Fat After 40: Hormones and What Helps";
const DESCRIPTION =
  "Why belly fat increases after 40: how oestrogen, testosterone, cortisol and insulin drive visceral fat, practical solutions, and when GLP-1 treatments may help.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-08T00:00:00.000Z",
    images: [
      {
        url: SOCIAL_PREVIEW_IMAGE,
        alt: "Belly fat after 40 — hormones, causes, evidence-based solutions and GLP-1 treatment options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SOCIAL_PREVIEW_IMAGE],
  },
};

export default function WhyDoesBellyFatIncreaseAfter40Page() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [SOCIAL_PREVIEW_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://www.healthwise360.co.uk/logo-health-wise.webp" } },
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
        name: "Why does belly fat suddenly appear after 40?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It’s rarely sudden—changes are gradual and driven by declining sex hormones, reduced muscle mass, and lower insulin sensitivity. The perimenopausal transition in women and declining testosterone in men both shift fat storage toward the abdomen.",
        },
      },
      {
        "@type": "Question",
        name: "Is belly fat after 40 dangerous?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visceral belly fat (deep fat around organs) is associated with higher risks of cardiovascular disease, type 2 diabetes, and metabolic syndrome. It’s not purely cosmetic.",
        },
      },
      {
        "@type": "Question",
        name: "Can you lose belly fat after 40?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It often requires a strategy tailored to midlife biology: strength training, adequate protein, sleep, stress management, and moderate activity. Extreme calorie restriction and excessive cardio can be counterproductive for many people.",
        },
      },
      {
        "@type": "Question",
        name: "Why doesn't eating less work anymore after 40?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because the underlying drivers aren’t just calorie intake—hormonal changes, muscle loss, and insulin resistance can shift how your body stores and burns energy. Cutting calories without addressing these factors can reduce muscle and raise stress hormones, which may worsen belly fat.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to lose belly fat after 40?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With consistent, targeted effort, many people see measurable reductions in waist circumference within 8–12 weeks. Visceral fat can be metabolically responsive and may reduce relatively quickly with the right approach.",
        },
      },
    ],
  };

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="Why Does Belly Fat Increase After 40?"
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

