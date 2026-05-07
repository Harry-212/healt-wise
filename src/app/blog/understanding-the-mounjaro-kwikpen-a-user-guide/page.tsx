import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogWebpPath, KWIKPEN_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/understanding-the-mounjaro-kwikpen-a-user-guide";
const HERO_IMAGE = `${siteOrigin()}${blogWebpPath(KWIKPEN_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: "Feel confident on your journey - A Simple Guide",
  description:
    "Get confident with understanding the mounjaro kwikpen: a user guide to your UK weight loss treatment journey.",
  keywords: "understanding the mounjaro kwikpen: a user guide",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Feel confident on your journey - A Simple Guide",
    description:
      "Get confident with understanding the mounjaro kwikpen: a user guide to your UK weight loss treatment journey.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-04-21T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Woman preparing for a healthy routine — confidence with the Mounjaro KwikPen user journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feel confident on your journey - A Simple Guide",
    description:
      "Get confident with understanding the mounjaro kwikpen: a user guide to your UK weight loss treatment journey.",
    images: [HERO_IMAGE],
  },
};

export default function MounjaroKwikpenUserGuidePage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Feel confident on your journey - A Simple Guide",
    description:
      "How the Mounjaro KwikPen works, safe use, storage, comparison with other UK treatments, and planning your journey — informational only, not medical advice.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-04-21",
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
        name: "What is the Mounjaro KwikPen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Mounjaro KwikPen is a prefilled injector pen used to deliver tirzepatide as a subcutaneous injection. It is designed so you can follow a prescribed dose without mixing medicine yourself, but you should always follow your clinician’s instructions and the product information.",
        },
      },
      {
        "@type": "Question",
        name: "How often is Mounjaro usually injected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mounjaro is typically given once weekly on a consistent day, with dose changes only as directed by a prescriber. Never change your schedule or strength without medical advice.",
        },
      },
      {
        "@type": "Question",
        name: "How should you store the KwikPen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Follow the storage instructions on your pack and patient information—commonly refrigeration is used where recommended, and freezing must be avoided. If you are unsure, ask your pharmacist or prescriber.",
        },
      },
      {
        "@type": "Question",
        name: "Can you reuse or refill a KwikPen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. KwikPens are intended as single-patient devices for the labelled number of doses. Do not attempt to refill or reuse a pen.",
        },
      },
      {
        "@type": "Question",
        name: "Where can you inject Mounjaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Subcutaneous treatments are commonly given in areas such as the abdomen, thigh, or upper arm, rotating sites as advised to reduce irritation. Confirm technique with your clinician or trained healthcare professional.",
        },
      },
      {
        "@type": "Question",
        name: "Does Mounjaro replace healthy eating and exercise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Injectable medicines support weight management alongside diet, activity, sleep, and other lifestyle factors your prescriber recommends. Results vary between individuals.",
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
