import { siteOrigin } from "@/lib/seo/site-origin";

export const WHAT_IS_WEGOVY_PILL_PATH = "/what-is-wegovy-pill";
export const WHAT_IS_WEGOVY_PILL_TITLE =
  "What Is the Wegovy Pill? UK Guide to the Wegovy Tablet";
export const WHAT_IS_WEGOVY_PILL_DESCRIPTION =
  "What is the Wegovy pill? A plain UK guide to how the Wegovy tablet works, who can take it, whether it works and where it stands in the UK.";

/**
 * Graph from the approved schema file. Exactly 4 nodes:
 * Organization, WebSite, WebPage, BreadcrumbList.
 * No Drug, Product, Offer, AggregateOffer, FAQPage or MedicalWebPage nodes.
 */
export function whatIsWegovyPillJsonLd(): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const url = `${base}${WHAT_IS_WEGOVY_PILL_PATH}`;

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
        name: WHAT_IS_WEGOVY_PILL_TITLE,
        headline: "What Is the Wegovy Pill? Everything You Need To Know About",
        description: WHAT_IS_WEGOVY_PILL_DESCRIPTION,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: {
          "@type": "Thing",
          name: "Wegovy tablet (oral semaglutide)",
        },
        dateModified: "2026-10-24",
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
            name: "What Is the Wegovy Pill",
            item: url,
          },
        ],
      },
    ],
  };
}
