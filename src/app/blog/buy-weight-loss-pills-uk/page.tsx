import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, BUY_WEIGHT_LOSS_PILLS_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/buy-weight-loss-pills-uk";
const TITLE = "Buy Weight Loss Pills UK: Safe Options";
const DESCRIPTION =
  "Buy weight loss pills UK safely. Compare orlistat, Mysimba, GLP-1 tablets, prices, risks and pharmacy checks.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(BUY_WEIGHT_LOSS_PILLS_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "buy weight loss pills uk, weight loss pills uk, orlistat uk, mysimba uk, semaglutide tablet uk, wegovy pill uk, alli orlos uk, prescription weight loss pills uk, pharmacy weight loss pills, weight loss pill prices uk, fat absorption pills uk, glp-1 tablet weight loss uk, safe weight loss pills online uk, weight loss pill comparison uk",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-19T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Buy weight loss pills UK safely with price and treatment comparison guidance",
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

export default function BuyWeightLossPillsUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-06-19",
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
        name: "Buy Weight Loss Pills UK",
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
        name: "Can I buy weight loss pills online in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, some weight loss pills can be bought online in the UK, but regulated treatments should come from a registered pharmacy and may require a prescription or pharmacist suitability check. Avoid unregulated websites, social media sellers, and offers that skip medical assessment.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best weight loss pill in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no single best weight loss pill for everyone. Orlistat may suit people looking for a fat absorption treatment, Mysimba may suit some people looking for appetite support, and semaglutide tablets may suit eligible adults looking for an oral GLP-1 option.",
        },
      },
      {
        "@type": "Question",
        name: "Are weight loss pills cheaper than injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Often, older oral options such as orlistat may have a lower starting price than GLP-1 injections. However, the total weight loss treatment price depends on pack size, provider fees, delivery, follow-up, and how long the treatment continues.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy orlistat without a prescription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lower-dose orlistat products such as Alli or Orlos may be available from a pharmacy. However, prescription-strength options such as Xenical or prescription orlistat usually require a private or NHS prescription.",
        },
      },
      {
        "@type": "Question",
        name: "Is Mysimba the same as orlistat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Orlistat mainly reduces fat absorption from food, while Mysimba acts on appetite and food intake pathways. Therefore, the right choice depends on your health profile, eating habits, suitability, and clinical review.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a weight loss pill version of Wegovy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The MHRA approved a semaglutide tablet for weight loss and weight management in the UK on 11 June 2026. However, it is prescription-only and availability may depend on private providers and future NHS decisions.",
        },
      },
      {
        "@type": "Question",
        name: "Are fat burners the same as weight loss pills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Many fat burners are supplements, not regulated obesity medicines. They should not be treated as equal to prescription weight loss treatment.",
        },
      },
      {
        "@type": "Question",
        name: "What should I check before buying weight loss pills?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check the pharmacy registration, consultation process, active ingredient, treatment suitability, side effects, total cost, delivery fees, and follow-up support. Also, use a BMI calculator before comparing treatment options.",
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
