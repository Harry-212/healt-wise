import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Easy-to-Follow Wegovy Injection Instructions You Can Trust",
  description:
    "Follow clear wegovy injection instructions to confidently start your UK weight loss journey today.",
  keywords: "wegovy injection instructions",
  alternates: {
    canonical: `${siteOrigin()}/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust`,
  },
  openGraph: {
    title: "Easy-to-Follow Wegovy Injection Instructions You Can Trust",
    description:
      "Follow clear wegovy injection instructions to confidently start your UK weight loss journey today.",
    url: `${siteOrigin()}/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust`,
    type: "article",
    publishedTime: "2026-04-14T00:00:00.000Z",
  },
};

export default function WegovyInjectionInstructionsArticlePage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Easy-to-Follow Wegovy Injection Instructions You Can Trust",
    description:
      "Follow clear wegovy injection instructions to confidently start your UK weight loss journey today.",
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust`,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you have to inject Wegovy with food?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Wegovy injections can be given with or without food at any time of day. This is different from Wegovy tablets, which must be taken once daily on an empty stomach with a small amount of water and followed by a 30 minute wait before eating or taking other medicines.",
        },
      },
      {
        "@type": "Question",
        name: "Can you switch between Wegovy injection and tablets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Switching between the two forms is possible, but it needs medical supervision. Clinical information from novoMEDLINK notes that patients who do not tolerate a 25 mg once daily tablet may consider switching to a 1.7 mg once weekly pen, with dose adjustments as needed. Any change should be planned with your prescriber so dose timing and escalation are handled safely.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if you inject into the wrong place?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you accidentally inject into a muscle or an area that is very sore, you might experience more discomfort than usual. As long as the full dose has been given, you usually do not need to repeat it. However, if you are unsure whether you received the dose properly, contact your healthcare professional for personalised advice before using another pen.",
        },
      },
      {
        "@type": "Question",
        name: "How long can a Wegovy pen stay out of the fridge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unopened pens can be kept at room temperature, between 8°C and 30°C, for up to 28 days, provided they are protected from light and not exposed to direct heat. Once this period has passed, the pen must be discarded, even if there is still medicine left.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to inject cold Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can inject Wegovy straight from the fridge, and the medicine will still work. If injecting cold fluid feels uncomfortable, you can let the pen come up to room temperature naturally before use. Do not apply external heat and do not leave the pen out longer than allowed in the storage instructions.",
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
