import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, BUY_INJECTIONS_CONFUSED_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/buy-weight-loss-injections-uk";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(BUY_INJECTIONS_CONFUSED_PNG)}`;

export const metadata: Metadata = {
  title: "Buy Weight Loss Injections UK: Compare Weight Loss Treatment Prices Safely",
  description:
    "If you want to buy weight loss injections UK safely, compare weight loss treatment prices, check UK pharmacy registration, and understand the full cost pathway.",
  keywords:
    "buy weight loss injections, buy weight loss injections uk, compare weight loss treatment prices, weight loss treatment cost compare",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Buy Weight Loss Injections UK: Compare Weight Loss Treatment Prices Safely",
    description:
      "If you want to buy weight loss injections UK safely, compare weight loss treatment prices, check UK pharmacy registration, and understand the full cost pathway.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-12T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Buy Weight Loss Injections UK: Compare Weight Loss Treatment Prices Safely",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Weight Loss Injections UK: Compare Weight Loss Treatment Prices Safely",
    description:
      "If you want to buy weight loss injections UK safely, compare weight loss treatment prices, check UK pharmacy registration, and understand the full cost pathway.",
    images: [HERO_IMAGE],
  },
};

export default function BuyWeightLossInjectionsPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Buy Weight Loss Injections UK: Compare Weight Loss Treatment Prices Safely",
    description:
      "If you want to buy weight loss injections UK safely, compare weight loss treatment prices, check UK pharmacy registration, and understand the full cost pathway.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360" },
    datePublished: "2026-06-12",
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
        name: "Can I legally buy weight loss injections online in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but only through a regulated route that includes a prescription assessment. These medicines are prescription-only, and the GPhC keeps the official register for pharmacy premises, while the MHRA warns against buying weight loss medicines online without a prescription.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a prescription for Mounjaro or Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mounjaro and Wegovy are not over-the-counter products. A clinician has to assess your eligibility, medical history, and current medicines before supply.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cheapest weight loss treatment price right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prices change often, so no fixed answer lasts long. In Healthwise360’s latest snapshot, the lowest listed entry prices were £130 for Mounjaro 2.5 mg and £79.99 for Wegovy 0.25 mg, while Boots, Asda, and Superdrug showed nearby starting prices on their own pages. Therefore, compare current listings before you pay.",
        },
      },
      {
        "@type": "Question",
        name: "Is Mounjaro cheaper than Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes at the starter level the difference is small, but Mounjaro often becomes more expensive at higher doses. Our dedicated weight loss treatment price comparison UK guide says the gap usually becomes clearer when comparing higher-dose Mounjaro pens with Wegovy maintenance pricing. So, compare the whole dose journey, not just month one.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get weight loss injections on the NHS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some people can, but access is limited and rule-based. NICE recommends semaglutide within specialist weight-management services, and NHS England says tirzepatide is being rolled out in phases with defined criteria. Therefore, many users still compare private routes while NHS eligibility and availability remain restricted.",
        },
      },
      {
        "@type": "Question",
        name: "Are weight loss injections better than pills for fat loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They can be very effective, but 'better' depends on the medicine, your health profile, and what you can stick with. Also, the page you are reading should stay focused on injections, because the MHRA only approved the first GLP-1 tablet for weight loss in the UK on June 11, 2026, which is creating a separate search path of its own. For sustainable fat loss, the strongest plan still combines treatment with food quality, movement, and consistency.",
        },
      },
      {
        "@type": "Question",
        name: "What should I compare before payment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Compare the medicine, the dose, the consultation fee, delivery cost, aftercare, maintenance policy, and pharmacy regulation. Our methodology is useful here because it focuses on total cost rather than headline price alone. Besides, regulation and follow-up support are part of value, and not optional extras.",
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
