import { siteOrigin } from "@/lib/seo/site-origin";
import { FOUNDAYO_FAQ_ALL } from "@/lib/seo/foundayo-faqs-data";

export const FOUNDAYO_FAQS_PATH = "/foundayo-faqs";
export const FOUNDAYO_FAQS_TITLE =
  "Foundayo FAQ UK: Questions and Answers Before You Start";
export const FOUNDAYO_FAQS_DESCRIPTION =
  "Foundayo FAQs for the UK. Get answers on approval, NHS access, cost, who can take it, doses, food, alcohol, missed doses and side effects.";

/**
 * Graph from the approved schema file. No Drug, Product, Offer or
 * AggregateOffer nodes. Add reviewedBy / lastReviewed here only after the
 * medical reviewer has signed off.
 */
export function foundayoFaqsJsonLd(): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const url = `${base}${FOUNDAYO_FAQS_PATH}`;

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
        name: FOUNDAYO_FAQS_TITLE,
        headline: "Foundayo FAQ: Questions and Answers for the UK",
        description: FOUNDAYO_FAQS_DESCRIPTION,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@type": "Thing", name: "Foundayo (orforglipron)" },
        dateModified: "2026-10-22",
        audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-answer"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Foundayo FAQ", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: FOUNDAYO_FAQ_ALL.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
