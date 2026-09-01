import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, CAN_I_BUY_HERO_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/can-i-buy-weight-loss-injections-uk";
const TITLE = "Can I Buy Weight Loss Injections in the UK? Safe Provider and Price Guide";
const DESCRIPTION =
  "Can I buy weight loss injections in the UK? Learn safe routes, provider checks, prices and red flags before treatment.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(CAN_I_BUY_HERO_PNG)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "buy weight loss injections uk, can i buy weight loss injections in the uk, compare weight loss treatment prices, mounjaro price list uk, wegovy price list uk, weight loss injections online, private weight loss clinic, safe pharmacy online, weight loss treatment cost",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-29T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Can I Buy Weight Loss Injections in the UK Safe Provider and Price Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

export default function CanIBuyWeightLossInjectionsPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://www.healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-06-29",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteOrigin()}${PATH}`,
    },
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteOrigin()}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteOrigin()}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Can I Buy Weight Loss Injections in the UK",
        item: `${siteOrigin()}${PATH}`,
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I buy weight loss injections in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you may be able to access weight loss injections in the UK through a regulated consultation pathway. However, they are prescription medicines and should only be supplied after clinical assessment.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy weight loss injections online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Online access may be available through regulated UK providers. However, a legitimate service should include a medical questionnaire, clinician review, and regulated pharmacy supply.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a prescription for weight loss injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Prescription weight loss injections require proper clinical assessment and a valid prescription before supply.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get weight loss injections on the NHS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some people may be eligible through NHS pathways, but access depends on clinical criteria, local services, and the treatment pathway. Private access is different and usually involves ongoing cost.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cheapest weight loss injection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cheapest option depends on the medicine, dose, provider, delivery fee, consultation model, and support package. Therefore, users should compare full treatment cost, not only the starting price.",
        },
      },
      {
        "@type": "Question",
        name: "Are weight loss injections safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They can be suitable for some eligible adults when prescribed and monitored properly. However, they may cause side effects and are not right for everyone.",
        },
      },
      {
        "@type": "Question",
        name: "Which is better, Mounjaro or Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no single best answer. The right option depends on clinical suitability, price, side effects, medical history, and prescriber advice.",
        },
      },
      {
        "@type": "Question",
        name: "What should I check before paying?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check the clinical assessment process, pharmacy registration, dose-level prices, delivery fees, side effect guidance, support options, and maintenance rules.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy weight loss injections without seeing a doctor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may not need an in-person appointment, but you still need clinical assessment. A remote consultation or questionnaire should be reviewed by an appropriate healthcare professional.",
        },
      },
      {
        "@type": "Question",
        name: "Should I choose the cheapest provider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. A cheaper provider may not include the same support, delivery, review process, or maintenance guidance. Compare total value, not only price.",
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
            "@graph": [ARTICLE_SCHEMA, BREADCRUMB_SCHEMA, FAQ_SCHEMA],
          }),
        }}
      />
      <ArticleClient />
    </>
  );
}
