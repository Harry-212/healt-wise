import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import { WEEKLY_INJECTIONS_HERO_URL } from "./blog-assets";

const PATH = "/blog/weekly-weight-loss-injections-uk-what-they-may-actually-do";
const HERO_IMAGE = WEEKLY_INJECTIONS_HERO_URL;

export const metadata: Metadata = {
  title: "Weekly Weight Loss Injections in the UK: What They May Actually Do",
  description:
    "Weekly weight loss injections in the UK explained: how Wegovy and Mounjaro may affect appetite, access (NHS vs private), side effects, and what happens after stopping.",
  keywords: "weekly weight loss injections UK",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Weekly Weight Loss Injections in the UK: What They May Actually Do",
    description:
      "Weekly weight loss injections in the UK explained: how Wegovy and Mounjaro may affect appetite, access (NHS vs private), side effects, and what happens after stopping.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-25T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Weekly weight loss injections in the UK — prescription GLP-1 treatment discussed with a clinician",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly Weight Loss Injections in the UK: What They May Actually Do",
    description:
      "Weekly weight loss injections in the UK explained: how Wegovy and Mounjaro may affect appetite, access (NHS vs private), side effects, and what happens after stopping.",
    images: [HERO_IMAGE],
  },
};

export default function WeeklyWeightLossInjectionsUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Weekly Weight Loss Injections in the UK: What They May Actually Do",
    description:
      "A realistic guide to weekly weight loss injections in the UK (GLP-1 medicines): what Wegovy and Mounjaro may do, access routes, side effects, and long-term expectations — informational only, not medical advice.",
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
        name: "Which weekly weight loss injection is most effective in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trial averages often show larger weight loss with tirzepatide (Mounjaro) than semaglutide (Wegovy), but “most effective” depends on response, tolerability, access, and whether you can stay on a plan long enough. Your prescriber should help you choose.",
        },
      },
      {
        "@type": "Question",
        name: "Can you lose 10kg in 2 months with Ozempic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is possible for some people, but it is ambitious and depends on starting weight, dose, lifestyle, and individual response. Ozempic is primarily licensed for type 2 diabetes, while Wegovy is licensed for weight management in the UK—use the medicine that is clinically appropriate and prescribed to you.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 3-3-3 rule for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 3-3-3 rule is not an official NHS guideline. A common version is 3 balanced meals a day, 30 minutes of daily movement, and reducing 3 high-calorie trigger foods. Treat it as a simple habit framework rather than a medical rule.",
        },
      },
      {
        "@type": "Question",
        name: "How did Kelly Clarkson really lose her weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kelly Clarkson has discussed weight change in the context of diet, walking, health factors, and medical support under clinician guidance. Celebrity results usually involve multiple factors, so it is best not to assume one single “secret” applies to everyone.",
        },
      },
      {
        "@type": "Question",
        name: "Can you get weekly weight loss injections on the NHS in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes, but eligibility is strict and access varies by region. It often involves BMI thresholds, weight-related conditions, and referral into specialist weight management services with lifestyle support.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after you stop weekly injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many people find appetite increases again, and weight regain can occur if habits and support are not maintained. Stopping or switching should be planned with your prescriber, especially around dosing schedules and side effects.",
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

