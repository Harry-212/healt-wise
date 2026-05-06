import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import { BLOG_WEGOVY_COSTS_TRUTH_HERO_IMAGE } from "@/lib/site-assets";

const HERO_IMAGE_ABSOLUTE = `${siteOrigin()}${BLOG_WEGOVY_COSTS_TRUTH_HERO_IMAGE}`;

export const metadata: Metadata = {
  title: "The Truth About Wegovy Weight Loss Medication Costs in the UK",
  description:
    "Discover real UK costs for wegovy weight loss medication, see if you qualify and compare providers today.",
  keywords: "wegovy weight loss medication",
  alternates: {
    canonical: `${siteOrigin()}/blog/the-truth-about-wegovy-weight-loss-medication-costs-in-the-uk`,
  },
  openGraph: {
    title: "The Truth About Wegovy Weight Loss Medication Costs in the UK",
    description:
      "Discover real UK costs for wegovy weight loss medication, see if you qualify and compare providers today.",
    url: `${siteOrigin()}/blog/the-truth-about-wegovy-weight-loss-medication-costs-in-the-uk`,
    type: "article",
    publishedTime: "2026-04-14T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE_ABSOLUTE,
        alt: "The Truth About Wegovy Weight Loss Medication Costs in the UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Truth About Wegovy Weight Loss Medication Costs in the UK",
    description:
      "Discover real UK costs for wegovy weight loss medication, see if you qualify and compare providers today.",
    images: [HERO_IMAGE_ABSOLUTE],
  },
};

export default function WegovyCostsArticlePage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Truth About Wegovy Weight Loss Medication Costs in the UK",
    description:
      "Discover real UK costs for wegovy weight loss medication, see if you qualify and compare providers today.",
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-14",
    image: [HERO_IMAGE_ABSOLUTE],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}/blog/the-truth-about-wegovy-weight-loss-medication-costs-in-the-uk`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Wegovy available on the NHS for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy can be prescribed in the UK under NHS criteria for adults with obesity and specific health risks, in line with guidelines. Access is limited and prioritised, and waiting lists or strict eligibility rules may apply. If you do not meet the criteria, you would usually need to seek private treatment.",
        },
      },
      {
        "@type": "Question",
        name: "How long will I need to stay on Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trials such as STEP 4 and STEP 5 have followed people for 1 to 2 years or more, and show that staying on Wegovy helps sustain and further improve weight loss, while stopping it tends to increase the risk of weight regain. Your clinician will review progress regularly, but you should prepare for Wegovy to be a medium to long term treatment, not a short course.",
        },
      },
      {
        "@type": "Question",
        name: "Can I switch between Wegovy injection and pill?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both injectable and tablet forms contain semaglutide and have shown weight loss benefits in trials, but they are not simply interchangeable, and availability of the pill differs across countries. Any switch would need to be supervised by a clinician who can adjust the dose safely and monitor side effects.",
        },
      },
      {
        "@type": "Question",
        name: "What if I miss a dose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Treatment instructions can vary slightly, so your prescribing information will give the exact steps. In general, missing an occasional dose might cause some fluctuations in appetite or side effects once you restart. If you miss doses regularly, your clinician may need to adjust your plan.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy safe if I have diabetes or heart disease?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy has been studied in adults with obesity or overweight, including many with type 2 diabetes and cardiovascular risk factors. It may reduce the risk of major heart events in adults with known heart disease and excess weight. However, if you are on other diabetes medicines such as insulin or sulfonylureas, your risk of low blood sugar can increase, so you need careful monitoring and dose adjustments. It is essential to discuss your full medical history with your clinician before starting.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...ARTICLE_SCHEMA, "@graph": [ARTICLE_SCHEMA, FAQ_SCHEMA] }) }}
      />
      <ArticleClient />
    </>
  );
}
