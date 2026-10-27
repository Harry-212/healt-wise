import { siteOrigin } from "@/lib/seo/site-origin";
import { WEGOVY_TABLET_FAQ_ALL } from "@/lib/seo/wegovy-tablet-faqs-data";

export const WEGOVY_TABLET_FAQS_PATH = "/wegovy-tablet-faqs";
export const WEGOVY_TABLET_FAQS_TITLE =
  "Wegovy Tablet FAQ UK: Questions and Answers Explained";
export const WEGOVY_TABLET_FAQS_DESCRIPTION =
  "Wegovy tablet FAQ for the UK. Plain answers on how the pill works, doses, when to take it and what to know before you start.";

/**
 * Graph from the approved schema file. No Drug, Product, Offer or
 * AggregateOffer nodes.
 */
export function wegovyTabletFaqsJsonLd(): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const url = `${base}${WEGOVY_TABLET_FAQS_PATH}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "Healthwise360",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          url: `${base}/logo-health-wise.webp`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        name: "Healthwise360",
        url: `${base}/`,
        inLanguage: "en-GB",
        publisher: { "@id": `${base}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: WEGOVY_TABLET_FAQS_TITLE,
        headline: "Wegovy Tablet UK FAQs: Your All Questions are Answered Here",
        description: WEGOVY_TABLET_FAQS_DESCRIPTION,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: {
          "@type": "Thing",
          name: "Wegovy tablet (oral semaglutide)",
        },
        dateModified: "2026-10-23",
        audience: {
          "@type": "PeopleAudience",
          suggestedMinAge: 18,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-answer"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${base}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Wegovy Tablet FAQ",
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: WEGOVY_TABLET_FAQ_ALL.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
