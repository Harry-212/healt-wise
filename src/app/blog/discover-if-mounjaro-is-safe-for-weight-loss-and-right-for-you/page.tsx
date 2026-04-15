import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Discover If Mounjaro Is Safe for Weight Loss and Right for You",
  description:
    "Wondering is mounjaro safe for weight loss? Get your UK eligibility, cost & provider insights before deciding.",
  keywords: "is mounjaro safe for weight loss",
  alternates: {
    canonical: `${siteOrigin()}/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you`,
  },
  openGraph: {
    title: "Discover If Mounjaro Is Safe for Weight Loss and Right for You",
    description:
      "Wondering is mounjaro safe for weight loss? Get your UK eligibility, cost & provider insights before deciding.",
    url: `${siteOrigin()}/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you`,
    type: "article",
    publishedTime: "2026-04-14T00:00:00.000Z",
  },
};

export default function MounjaroSafetyArticlePage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Discover If Mounjaro Is Safe for Weight Loss and Right for You",
    description:
      "Wondering is mounjaro safe for weight loss? Get your UK eligibility, cost & provider insights before deciding.",
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Mounjaro Officially Approved For Weight Loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In the United States, Mounjaro was originally approved for managing type 2 diabetes. While it has shown promise in weight management, it is only now gaining recognition in that area, partly due to the FDA’s recent approval of Zepbound for obesity. In the UK, your GP may prescribe it off-label if they believe benefits outweigh potential risks.",
        },
      },
      {
        "@type": "Question",
        name: "How Does Mounjaro Cause Weight Loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mounjaro helps regulate two hormones that control how quickly food leaves your stomach and how insulin is released. You typically feel full sooner and consume fewer calories. This can translate to steady weight loss over months, especially when paired with a healthy diet and exercise.",
        },
      },
      {
        "@type": "Question",
        name: "Who Should Avoid Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "People with a history of medullary thyroid cancer or Multiple Endocrine Neoplasia syndrome type 2 should avoid Mounjaro. It is also important to discuss any existing gallbladder or pancreatic problems with your GP beforehand.",
        },
      },
      {
        "@type": "Question",
        name: "Do You Need A Prescription For Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mounjaro requires a prescription from a qualified healthcare provider. Your GP will determine whether this medication is suitable based on your weight, overall health status, and medical history.",
        },
      },
      {
        "@type": "Question",
        name: "Can You Stop Mounjaro After Reaching Your Goal Weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You could discontinue Mounjaro after consulting your GP, but be aware that weight regain is common if you stop medication abruptly without an alternative strategy in place. A plan to maintain healthier habits is essential for sustaining any weight you have lost.",
        },
      },
      {
        "@type": "Question",
        name: "Are Lifestyle Changes Still Necessary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. While Mounjaro may help control hunger, lifestyle adjustments remain crucial for long-term stability. Regular physical activity, balanced nutrition, and mental health support all reinforce the medication’s benefits and reduce the likelihood of rebound weight gain.",
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
