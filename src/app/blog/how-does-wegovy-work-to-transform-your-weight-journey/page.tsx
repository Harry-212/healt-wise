import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "How Does Wegovy Work to Transform Your Weight Journey",
  description:
    "Find out how does Wegovy work to kickstart your weight loss, with guides on eligibility, cost and UK providers.",
  keywords: "how does wegovy work",
  alternates: {
    canonical: `${siteOrigin()}/blog/how-does-wegovy-work-to-transform-your-weight-journey`,
  },
  openGraph: {
    title: "How Does Wegovy Work to Transform Your Weight Journey",
    description:
      "Find out how does Wegovy work to kickstart your weight loss, with guides on eligibility, cost and UK providers.",
    url: `${siteOrigin()}/blog/how-does-wegovy-work-to-transform-your-weight-journey`,
    type: "article",
    publishedTime: "2026-04-14T00:00:00.000Z",
  },
};

export default function WegovyArticlePage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Does Wegovy Work to Transform Your Weight Journey",
    description:
      "Find out how does Wegovy work to kickstart your weight loss, with guides on eligibility, cost and UK providers.",
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}/blog/how-does-wegovy-work-to-transform-your-weight-journey`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly will I start losing weight on Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may notice changes in appetite within the first few weeks, but weight loss usually builds gradually over several months. In clinical trials, the most significant weight loss was seen over 6 to 12 months and continued up to 68 weeks when treatment and lifestyle changes were maintained.",
        },
      },
      {
        "@type": "Question",
        name: "Can Wegovy help me keep the weight off?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Wegovy is intended for long term weight management. In studies, people who stayed on Wegovy alongside diet and exercise were more likely to maintain clinically meaningful weight loss. However, if you stop the medication and do not continue with lifestyle changes, there is a risk of regaining weight over time.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wegovy suitable if I have type 2 diabetes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Semaglutide is used widely for type 2 diabetes, and some people with type 2 diabetes may be offered Wegovy specifically for weight management. Your prescriber will consider any existing diabetes medications, your blood sugar control and your overall cardiovascular risk before recommending Wegovy.",
        },
      },
      {
        "@type": "Question",
        name: "Will I lose muscle as well as fat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Weight loss with any method can involve some loss of lean mass. However, research suggests that semaglutide reduces body weight primarily by reducing fat mass rather than lean mass. Keeping up resistance exercise and adequate protein intake while on Wegovy can help protect muscle.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use Wegovy together with other weight loss medicines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should not use Wegovy with other semaglutide products or any GLP 1 receptor agonists. Combining it with other types of weight loss medicines depends on your individual case and must be decided by your healthcare provider.",
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
