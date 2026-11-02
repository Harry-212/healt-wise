import { siteOrigin } from "@/lib/seo/site-origin";

export type PillFaq = { question: string; answer: string };

type PillPriceJsonLdInput = {
  path: string;
  title: string;
  headline: string;
  description: string;
  aboutName: string;
  breadcrumbName: string;
  dateModified: string;
  faqs: PillFaq[];
};

/**
 * Graph from the approved schema files. One node of each type, no Drug,
 * Product, Offer or AggregateOffer. Add reviewedBy / lastReviewed only after the
 * medical reviewer has signed off.
 */
export function pillPriceJsonLd(input: PillPriceJsonLdInput): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const url = `${base}${input.path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // Organization and WebSite are defined once, in the site-wide graph
      // (`shared-json-ld.ts`); this page references them by @id.
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: input.title,
        headline: input.headline,
        description: input.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@type": "Thing", name: input.aboutName },
        dateModified: input.dateModified,
        audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
        mainEntity: { "@id": `${url}#faq` },
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
          { "@type": "ListItem", position: 2, name: input.breadcrumbName, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        inLanguage: "en-GB",
        mainEntity: input.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}
