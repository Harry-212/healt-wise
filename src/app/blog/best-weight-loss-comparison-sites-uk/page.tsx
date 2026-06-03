import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_HERO_WEBP } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const PATH = "/blog/best-weight-loss-comparison-sites-uk";
const TITLE = "We Tested 5 UK Weight Loss Comparison Websites So You Don't Have To: Here is the Honest Verdict";
const DESCRIPTION = "We reviewed Click Compare, MedEazy, Monj, WegoCompare and Healthwise360 against 7 real criteria. The results might surprise you.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(BEST_WEIGHT_LOSS_COMPARISON_SITES_UK_HERO_WEBP)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "best weight loss comparison site UK, Mounjaro price comparison UK, Wegovy comparison UK, weight loss treatment comparison website UK, GLP-1 comparison site UK, GPhC verified pharmacy comparison, Mounjaro Wegovy Saxenda comparison website, independent weight loss comparison UK, best site compare weight loss treatment UK, private prescription comparison UK, weight loss treatment comparison tool 2026",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-06-03T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Honest comparison and reviews of five major UK weight loss prescription comparison websites",
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
    author: { "@type": "Organization", name: "Health Wise" },
    publisher: { "@type": "Organization", name: "Health Wise" },
    datePublished: "2026-06-03",
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
          text: "Click.Compare, MedEazy, and Healthwise360 all cover all three treatments. Monj is weighted toward Mounjaro, and WegoCompare toward Wegovy. For a genuinely equal three treatment comparison with filtering by dose, Trustpilot, and provider, the Mounjaro vs Wegovy vs Saxenda hub at Healthwise360 is the most complete option.",
        },
      },
      {
        "@type": "Question",
        name: "How often are prices updated on these platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MedEazy updates daily. Monj retests daily and removes providers that fail checks. Click.Compare updates weekly. Healthwise360 updates regularly with live data from verified pharmacies. In a market that saw significant Mounjaro price changes in late 2025, update frequency matters considerably more than it would in a stable market.",
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
        name: "Which platform is best for someone who is completely new to GLP-1 treatment research?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a first time researcher who needs to understand what these treatments are, whether they qualify, what the realistic cost is across the full treatment journey, and which pharmacies are safe to use, Healthwise360 provides the broadest and most contextualised starting point. Monj or MedEazy can supplement the price specific research once the broader context is established.",
        },
      },
      {
        "@type": "Question",
        name: "Which platform is best for finding the absolute cheapest current Mounjaro price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monj's checkout simulation methodology and Healthwise360's live price comparison both aim to surface accurate all in pricing. MedEazy's daily updates make it strong for current data. Cross referencing all three for a specific dose will give the most complete picture of current market pricing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use these websites to access NHS weight loss treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. NHS access to Wegovy and Mounjaro requires a GP referral to specialist weight management services. Comparison platforms are relevant to the private prescribing route only. WegoCompare and Healthwise360 both explain the NHS pathway context, which helps users understand whether to pursue that route before turning to private options.",
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
        pageName="We Tested 5 UK Weight Loss Comparison Websites So You Don't Have To"
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
