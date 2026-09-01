import { Metadata } from "next";
import ArticleClient from "./ArticleClient";
import { blogImgPath, WEGOVY_PILL_HERO_PNG } from "./blog-assets";
import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/blog/wegovy-pill-uk";
const TITLE = "Wegovy Pill UK: Price, Availability, Results and Safety Guide";
const DESCRIPTION =
  "Wegovy Pill UK guide: compare price, availability, results, dosage, side effects and tablet vs injection options.";
const HERO_IMAGE = `${siteOrigin()}${blogImgPath(WEGOVY_PILL_HERO_PNG)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "wegovy pill uk, wegovy tablet uk, oral semaglutide uk, wegovy pill price uk, wegovy pill vs injection, wegovy pill results, wegovy pill dosage, wegovy pill side effects, glp-1 pill uk, weight loss tablet uk",
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "article",
    publishedTime: "2026-07-01T00:00:00.000Z",
    images: [
      {
        url: HERO_IMAGE,
        alt: "Wegovy Pill UK price availability results and safety guide",
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

export default function WegovyPillUkPage() {
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESCRIPTION,
    image: [HERO_IMAGE],
    author: { "@type": "Organization", name: "Healthwise360 Research Team" },
    publisher: { "@type": "Organization", name: "Healthwise360", logo: { "@type": "ImageObject", url: "https://healthwise360.co.uk/logo-health-wise.webp" } },
    datePublished: "2026-07-01",
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
        name: "Wegovy Pill UK",
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
        name: "What is Wegovy Pill?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy Pill is a prescription-only GLP-1 medication in tablet form. It contains semaglutide and is designed to support medically supervised weight loss and weight management. Unlike Wegovy Pen, which is injected weekly, Wegovy Pill is taken once daily as an oral tablet.",
        },
      },
      {
        "@type": "Question",
        name: "How is Wegovy Pill different from the Wegovy injection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy Pill is taken once daily as a tablet, while Wegovy Pen is taken once weekly as an injection. The tablet avoids needles and may be stored differently, but it must be taken on an empty stomach with strict timing. The injection does not require the same daily fasting routine.",
        },
      },
      {
        "@type": "Question",
        name: "What dose of Wegovy Pill do new users usually start with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "New users usually start with the lowest dose, 1.5mg once daily. The dose may then increase gradually to 4mg, 9mg, and 25mg if suitable. However, dose changes should always be reviewed by a clinician, and some people may stay on a lower dose for longer.",
        },
      },
      {
        "@type": "Question",
        name: "How effective is Wegovy Pill for weight loss?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In OASIS 4, oral semaglutide 25mg was studied over 64 weeks alongside lifestyle changes, with average weight loss reported around 16.6%. However, individual results vary, and the study does not guarantee what one person will lose.",
        },
      },
      {
        "@type": "Question",
        name: "How do you take Wegovy Pill correctly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wegovy Pill is usually taken once daily in the morning on an empty stomach. It should be swallowed whole with a small amount of plain water. Users should wait before eating, drinking, or taking other oral medicines, and they should not split, crush, or chew the tablet.",
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
