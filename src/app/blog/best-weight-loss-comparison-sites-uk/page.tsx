import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import {
  blogImgPath,
  BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_HERO_WEBP,
} from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/best-weight-loss-comparison-sites-uk";
const TITLE =
  "We Tested 6 UK Weight Loss Treatment Comparison Websites So You Don't Have To: Here's the Honest Verdict";
const DESCRIPTION =
  "We reviewed 6 UK weight loss comparison sites: Healthwise360, PenCompare, Click.Compare, MedEazy, Monj, WegoCompare. Which covers price, safety, GPhC & more?";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "best weight loss comparison site UK, Mounjaro price comparison UK, Wegovy comparison UK, weight loss treatment comparison website UK, GLP-1 comparison site UK, compare Mounjaro price UK, GPhC verified pharmacy comparison, Mounjaro Wegovy Saxenda comparison website, best site to compare weight loss treatment UK, weight loss treatment price comparison tool UK, independent weight loss comparison UK, private prescription comparison UK, pencompare uk, compare weight loss injection UK 2026",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-07-19T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Honest review of six UK weight loss treatment comparison websites including Healthwise360 and PenCompare",
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

export default function BestWeightLossComparisonSitesPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360" },
    datePublished: "2026-07-19",
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
        name: "Is there one website that compares all three, Mounjaro, Wegovy, and Saxenda, equally?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click.Compare, MedEazy, PenCompare, and Healthwise360 all cover all three treatments. Monj is weighted toward Mounjaro, and WegoCompare toward Wegovy. For a genuinely equal three-treatment comparison with filtering by dose, Trustpilot, and provider, the Mounjaro vs Wegovy vs Saxenda hub at Healthwise360 is the most complete option. PenCompare's 48-provider pool also gives broad three-treatment coverage.",
        },
      },
      {
        "@type": "Question",
        name: "What is PenCompare and how does it differ from other comparison sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PenCompare is a UK comparison site for prescription weight loss treatments covering Mounjaro (tirzepatide), Wegovy (semaglutide), and Saxenda (liraglutide) across 48 regulated providers. It allows users to sort by price, reviews, or provider name, check GPhC registration status, use an eligibility checker, and read basic educational content. It is positioned as a Compare the Market for weight loss injections: functional and broad rather than deeply editorial.",
        },
      },
      {
        "@type": "Question",
        name: "How often are prices updated on these platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MedEazy and Monj update daily. Click.Compare updates weekly. Healthwise360 and PenCompare update regularly. In a market that saw significant Mounjaro price changes in late 2025, update frequency matters considerably more than it would in a stable market.",
        },
      },
      {
        "@type": "Question",
        name: "Do any of these platforms receive commissions from pharmacies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The platforms reviewed here all present themselves as independent. However, commercial models are not always fully disclosed. The safest approach is to treat any comparison platform's provider rankings as one input among several, not as an objective ordering, and to verify GPhC registration, Trustpilot ratings, and full fee structures independently before committing to any provider.",
        },
      },
      {
        "@type": "Question",
        name: "Which platform is best for finding the absolute cheapest current Mounjaro price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monj's checkout simulation methodology and Healthwise360's live price comparison both aim to surface accurate all-in pricing. MedEazy's daily updates make it strong for current data. Cross-referencing all three for a specific dose will give the most complete picture of current market pricing.",
        },
      },
      {
        "@type": "Question",
        name: "Which comparison site is best for someone completely new to GLP-1 research?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a first-time researcher who needs to understand what these treatments are, whether they qualify, what the realistic cost is across the full treatment journey, and which pharmacies are safe to use, Healthwise360 provides the broadest and most contextualised starting point. PenCompare's eligibility checker is also a useful first-step tool before engaging with any provider.",
        },
      },
      {
        "@type": "Question",
        name: "What is the single most important thing to check before using any comparison site's data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whether it discloses consultation fees, delivery charges, and any programme costs alongside the pen price. If it does not, the number you are comparing is not the number you will be charged.",
        },
      },
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Blog"
        sectionPath="/blog"
        pageName="We Tested 6 UK Weight Loss Treatment Comparison Websites"
        pagePath={PATH}
      />
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
