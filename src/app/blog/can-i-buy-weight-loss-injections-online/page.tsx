import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, CAN_I_BUY_INJECTIONS_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/can-i-buy-weight-loss-injections-online";
const TITLE =
  "Can I Buy Weight Loss Injections Online in the UK? Safe Prices, Providers, and What to Check";
const DESCRIPTION =
  "Yes, you can buy weight loss injections online in the UK, but only safely through a regulated pharmacy after a clinical assessment. Compare prices, providers and what to check first.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(CAN_I_BUY_INJECTIONS_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "buy weight loss injections online uk, can i buy weight loss injections online, weight loss injections online uk, buy mounjaro online uk, buy wegovy online uk, online weight loss injection prices uk, regulated weight loss pharmacy uk, gphc registered pharmacy weight loss, tirzepatide online uk, semaglutide online uk, weight loss injection cost uk, safe weight loss injections online",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-15T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Can you buy weight loss injections online in the UK safely from a regulated provider",
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

export default function CanIBuyWeightLossInjectionsOnlineUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360" },
    datePublished: "2026-06-15",
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
        name: "Can I Buy Weight Loss Injections Online in the UK?",
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
        name: "Can I legally buy weight loss injections online in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but only through a regulated service and after a proper clinical assessment. Tirzepatide and semaglutide are prescription-only medicines in the UK.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a prescription for weight loss injections online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Legitimate UK online services should involve clinician review before supply. If a site offers prescription-only injections without that step, treat it as a major red flag.",
        },
      },
      {
        "@type": "Question",
        name: "Which online weight loss injection is usually cheaper?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter prices for Wegovy are often lower than starter prices for Mounjaro on provider pages, but the cheapest route depends on dose, bundle structure, delivery, and add-on support. That is why dose-by-dose comparison matters more than a single from number.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy weight loss injections online without seeing a doctor in person?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often yes, because many UK services use online questionnaires, photo checks, or remote video consultation instead of face-to-face appointments. However, the clinical review still needs to happen.",
        },
      },
      {
        "@type": "Question",
        name: "Are online prices the full cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. Some services show promo prices, starter-dose prices, or bundled support prices. Therefore, always check later doses, delivery, prescription review, support, and maintenance pricing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get weight loss injections on the NHS instead?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes, yes. NHS access exists, but it usually depends on eligibility and service pathway, and semaglutide is generally routed through specialist services. Tirzepatide rollout is also phased in England.",
        },
      },
      {
        "@type": "Question",
        name: "What is the safest way to buy weight loss injections online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use a regulated UK provider, verify registration, complete the clinical assessment honestly, and avoid social media sellers or unusually cheap offers. The MHRA has issued repeated warnings about illegal online sales and counterfeit products.",
        },
      },
      {
        "@type": "Question",
        name: "What if I reach my goal weight and want to stay on treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Maintenance rules vary by provider. That is why checking maintenance policies before you start is sensible, especially if you expect your care to continue beyond the initial weight-loss phase.",
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
