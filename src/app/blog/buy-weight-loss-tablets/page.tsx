import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, BUY_TABLETS_CONFUSED_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/buy-weight-loss-tablets";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(BUY_TABLETS_CONFUSED_PNG)}`;

export const metadata: Metadata = {
  title: "Buy Weight Loss Tablets in the UK: Compare Prices, Safety, and the Best Treatment for You",
  description:
    "Buy weight loss tablets in the UK. Compare prices, safety, and prescription options before you choose.",
  keywords:
    "buy weight loss tablets, buy weight loss tablets uk, weight loss tablets uk",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: "Buy Weight Loss Tablets in the UK: Compare Prices, Safety, and the Best Treatment for You",
    description:
      "Buy weight loss tablets in the UK. Compare prices, safety, and prescription options before you choose.",
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-13T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Buy Weight Loss Tablets in the UK: Compare Prices, Safety, and the Best Treatment for You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Weight Loss Tablets in the UK: Compare Prices, Safety, and the Best Treatment for You",
    description:
      "Buy weight loss tablets in the UK. Compare prices, safety, and prescription options before you choose.",
    images: [HERO_IMAGE],
  },
};

export default function BuyWeightLossTabletsPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Buy Weight Loss Tablets in the UK: Compare Prices, Safety, and the Best Treatment for You",
    description:
      "Buy weight loss tablets in the UK. Compare prices, safety, and prescription options before you choose.",
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-06-13",
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
        name: "Can I buy weight loss tablets online in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but the route depends on the product. Prescription-only products such as Orlistat 120mg, Xenical, and Mysimba need a clinical review or prescription pathway, while lower-dose Alli and Orlos can be obtained through a pharmacy route without a standard prescription.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cheapest weight loss tablet in the UK right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Among the major pages reviewed here on June 13, 2026, the lowest visible entry price was Pharmacy Online’s Orlistat 120mg from £16.95, followed by Oxford’s Orlistat from £29.99 and Oxford’s Orlos from £18.98. However, you should still compare consultation, delivery, and strength before deciding.",
        },
      },
      {
        "@type": "Question",
        name: "Is Alli the same as Orlistat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alli contains orlistat, but it is a lower 60mg dose. Prescription Orlistat and Xenical use 120mg. Therefore, they are related products, but not identical in strength or buying route.",
        },
      },
      {
        "@type": "Question",
        name: "What is the strongest prescription weight loss pill?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In current UK pharmacy comparisons, Mysimba and prescription-strength orlistat products are the main prescription oral options. However, “strongest” depends on what you mean because Mysimba targets appetite, while Orlistat and Xenical target fat absorption. Superdrug also makes that distinction in its comparison page.",
        },
      },
      {
        "@type": "Question",
        name: "Are weight loss tablets available on the NHS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some are. NHS guidance confirms that orlistat can be prescribed when eligibility criteria are met. Superdrug also notes that Orlistat and Xenical may be available on the NHS, while Mysimba is private-only in the UK.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to buy weight loss tablets from any online shop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The MHRA warns against buying prescription-only weight-loss medicines without a prescription, and the GPhC says you should check the pharmacy register before buying medicines online. Therefore, a proper clinical assessment and a regulated pharmacy route matter more than a cheap headline price.",
        },
      },
      {
        "@type": "Question",
        name: "Are new oral GLP-1 weight loss tablets available yet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The MHRA approved the first GLP-1 tablet for weight loss in the UK on June 11, 2026. However, live market availability is still early and uneven. Pharmacy Online already shows a pre-order entry, while Oxford lists a Wegovy pill entry as out of stock, so you should expect rapid changes.",
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
