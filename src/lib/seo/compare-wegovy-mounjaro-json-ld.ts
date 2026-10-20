import { priceCheckDateKey } from "@/lib/data/price-check-dates";
import type { CompareFaqItem } from "@/lib/routes/compare-faqs";
import { siteOrigin } from "./site-origin";

export type CompareWegovyMounjaroJsonLdInput = {
  /** WebPage `name`, same as the SEO title. */
  name: string;
  description: string;
  /** ISO date (yyyy-mm-dd) the page content last changed. */
  contentModified: string;
  /** Price-check label from the live data, e.g. "20 September 2026". */
  pricesChecked: string;
  wegovyProviderCount: number;
  mounjaroProviderCount: number;
  wegovyLow: number;
  wegovyHigh: number;
  mounjaroLow: number;
  mounjaroHigh: number;
  faqItems: CompareFaqItem[];
};

function money(n: number): string {
  return n.toFixed(2);
}

/**
 * Page-level JSON-LD graph for `/compare/wegovy-vs-mounjaro` (client file
 * "Wegovy vs Mounjaro Page Schema", 16 Oct 2026). Price figures and counts
 * come from the live price data instead of being typed in.
 *
 * The client file also carries a minimal Organization node. The site-wide
 * graph in the root layout already declares `#organization` (and `#website`),
 * so it is left out here to keep one Organization node per page.
 */
export function compareWegovyMounjaroJsonLd(
  input: CompareWegovyMounjaroJsonLdInput,
): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const url = `${base}/compare/wegovy-vs-mounjaro`;
  const org = { "@id": `${base}/#organization` };
  const checkedIso = priceCheckDateKey(input.pricesChecked) ?? input.contentModified;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: input.name,
        headline: "Wegovy vs Mounjaro",
        description: input.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: org,
        about: [
          { "@type": "Thing", name: "Wegovy (semaglutide)" },
          { "@type": "Thing", name: "Mounjaro (tirzepatide)" },
        ],
        mainEntity: { "@id": `${url}#price-summary` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: input.contentModified,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-answer", "#cost-answer"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Wegovy vs Mounjaro", item: url },
        ],
      },
      {
        "@type": "Dataset",
        "@id": `${url}#price-summary`,
        name: "Wegovy and Mounjaro pen prices in the UK: summary",
        description: `Lowest, typical and highest price of one Wegovy pen (0.25 mg and 2.4 mg) and one Mounjaro pen (2.5 mg and 15 mg) in the UK, from the Healthwise360 price check on ${input.pricesChecked}. The Wegovy table covers ${input.wegovyProviderCount} providers and the Mounjaro table covers ${input.mounjaroProviderCount}.`,
        url,
        creator: org,
        publisher: org,
        dateModified: checkedIso,
        temporalCoverage: checkedIso,
        spatialCoverage: { "@type": "Place", name: "United Kingdom" },
        isAccessibleForFree: true,
        inLanguage: "en-GB",
        license: `${base}/terms-of-service`,
        measurementTechnique:
          "Listed prices checked on each provider website in the first week of every month",
        variableMeasured: [
          { "@type": "PropertyValue", name: "Lowest price", unitText: "GBP" },
          { "@type": "PropertyValue", name: "Typical price", unitText: "GBP" },
          { "@type": "PropertyValue", name: "Highest price", unitText: "GBP" },
        ],
        about: [
          { "@type": "Thing", name: "Wegovy (semaglutide)" },
          { "@type": "Thing", name: "Mounjaro (tirzepatide)" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: input.faqItems
          .filter((item) => item.inSchema !== false)
          .map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
      },
    ],
  };
}
