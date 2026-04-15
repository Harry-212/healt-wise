import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Mounjaro Dosage for Weight Loss: Facts You Can Trust",
  description:
    "Find out how your mounjaro dosage for weight loss can deliver safe, effective results with trusted UK advice.",
  keywords: "mounjaro dosage for weight loss",
  alternates: {
    canonical: `${siteOrigin()}/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust`,
  },
  openGraph: {
    title: "Mounjaro Dosage for Weight Loss: Facts You Can Trust",
    description:
      "Find out how your mounjaro dosage for weight loss can deliver safe, effective results with trusted UK advice.",
    url: `${siteOrigin()}/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust`,
    type: "article",
    publishedTime: "2026-04-14T00:00:00.000Z",
  },
};

export default function MounjaroArticlePage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mounjaro Dosage for Weight Loss: Facts You Can Trust",
    description:
      "Learn how Mounjaro dosage for weight loss works, from starting at 2.5 mg to potential long-term success. Discover exactly how this GLP-1 & GIP medication helps curb appetite.",
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Mounjaro Guarantee Weight Loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mounjaro can greatly assist you in reducing appetite and improving blood sugar control, but results vary. Your overall success depends on how well dosage, diet, and exercise work in harmony. Think of Mounjaro as a tool that supports (rather than replaces) a balanced lifestyle.",
        },
      },
      {
        "@type": "Question",
        name: "Can You Skip Dose Increments to See Faster Results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is not recommended. Jumping directly to a higher dose before your body adjusts may lead to intense nausea, vomiting, or other discomfort. Gradual increments lower the risk of side effects. Always follow the dose schedule your GP recommends.",
        },
      },
      {
        "@type": "Question",
        name: "What Should You Do If You Experience Severe Nausea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Speak to your GP if you experience ongoing or severe nausea, especially during the early weeks. They may adjust your dose or advise a slower progression plan. Simple strategies like eating bland, low-fat foods and keeping hydrated can also help.",
        },
      },
      {
        "@type": "Question",
        name: "How Long Do You Stay on Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It varies by individual. Some continue treatment for several months until they reach a healthier weight, then reassess with their GP. Others remain on a maintenance dose for ongoing blood sugar control. Your provider can determine what is best for you and your health goals.",
        },
      },
      {
        "@type": "Question",
        name: "Is It Safe to Use Mounjaro If You Have a Family History of Thyroid Issues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should exercise extreme caution. Mounjaro is not recommended for those with a family history of thyroid cancer or Multiple Endocrine Neoplasia syndrome type 2. It is important to discuss your health history in detail with a medical professional before beginning treatment.",
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
