import type { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { INJECTABLE_OBESITY_TREATMENTS_HERO } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/injectable-obesity-treatments-uk-what-works-and-what-doesnt";
const HERO_IMAGE = `${siteOrigin()}${INJECTABLE_OBESITY_TREATMENTS_HERO}`;

export const metadata: Metadata = {
  title: "Injectable Obesity Treatments UK: What Works and What Doesn't",
  description:
    "Injectable obesity treatments in the UK: how Wegovy, Mounjaro and Saxenda work, NHS vs private access, eligibility, side effects, costs and realistic expectations.",
  keywords:
    "injectable obesity treatments UK, Wegovy, Mounjaro, Saxenda, GLP-1, weight loss injections UK, NHS obesity treatment",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Injectable Obesity Treatments UK: What Works and What Doesn't",
    description:
      "Injectable obesity treatments in the UK: how Wegovy, Mounjaro and Saxenda work, NHS vs private access, eligibility, side effects, costs and realistic expectations.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-05-20T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Injectable obesity treatments in the UK — clinical options including Wegovy, Mounjaro and Saxenda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Injectable Obesity Treatments UK: What Works and What Doesn't",
    description:
      "Injectable obesity treatments in the UK: how Wegovy, Mounjaro and Saxenda work, NHS vs private access, eligibility, side effects, costs and realistic expectations.",
    images: [HERO_IMAGE],
  },
};

export default function InjectableObesityTreatmentsPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Injectable Obesity Treatments UK: What Works and What Doesn't",
    description:
      "UK injectable obesity treatments: mechanisms, NHS vs private access, Saxenda / Wegovy / Mounjaro comparison, eligibility, risks and cost context — informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-05-20",
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
        name: "Which weight loss injection is most effective in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trial averages often favour Mounjaro for greater average weight loss than some alternatives, but effectiveness depends on individual response, tolerability, adherence and access.",
        },
      },
      {
        "@type": "Question",
        name: "Can I lose 10kg in 2 months with Ozempic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some people lose quickly early on, but 10 kg in eight weeks may be ambitious for many and should not be assumed; discuss expectations with your prescriber.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 3-3-3 rule for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is commonly described as a simple habit framework (for example meals, movement and reducing trigger foods), not a formal universal NHS obesity protocol.",
        },
      },
      {
        "@type": "Question",
        name: "How did Kelly Clarkson lose weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Public comments have referenced dietary change, walking and clinician-guided medical support; celebrity outcomes usually involve multiple factors.",
        },
      },
      {
        "@type": "Question",
        name: "Do I still need diet and exercise with injectable obesity treatments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Medicines may help regulate appetite, but sustained habits and follow-up remain important.",
        },
      },
      {
        "@type": "Question",
        name: "How fast will I lose weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pace varies widely between people; rapid loss should not be assumed.",
        },
      },
      {
        "@type": "Question",
        name: "Can I switch between injectable obesity treatments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes, but only with clinical supervision and an appropriate switching plan.",
        },
      },
      {
        "@type": "Question",
        name: "Will NHS prescriptions continue indefinitely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily—continuation often depends on reviews, eligibility criteria and whether expected progress is achieved.",
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
