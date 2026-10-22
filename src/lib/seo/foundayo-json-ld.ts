import { siteOrigin } from "@/lib/seo/site-origin";

export const FOUNDAYO_FAQS = [
  {
    question: "Is Foundayo the same as orforglipron?",
    answer:
      "Yes. Foundayo is the brand name and orforglipron is the medicine inside it. They are one tablet, made by Eli Lilly.",
  },
  {
    question: "Do I need to fast before taking Foundayo?",
    answer:
      "No. You can take Foundayo at any time of day, with or without food. You do not need to measure water.",
  },
  {
    question: "Is Foundayo the same as Mounjaro?",
    answer:
      "No. Foundayo contains orforglipron and is a tablet. Mounjaro contains tirzepatide and is a weekly injection. They are different medicines.",
  },
  {
    question: "Can I get Foundayo without a prescription?",
    answer:
      "No. Foundayo is a prescription only medicine in the UK. A prescriber must check your health first.",
  },
  {
    question: "Can Foundayo be used for type 2 diabetes?",
    answer:
      "Yes. It is licensed for some adults whose type 2 diabetes is not well controlled, alongside diet and exercise. A prescriber decides if it suits you.",
  },
  {
    question: "Is Foundayo safe in pregnancy?",
    answer:
      "No. Do not use Foundayo in pregnancy or while breastfeeding. Stop it at least 3 weeks before a planned pregnancy. Use extra contraception as explained above.",
  },
  {
    question: "Will Foundayo be available on the NHS?",
    answer:
      "Not yet. NICE is checking Foundayo for use on the NHS in England and its decision is due on 18 November 2026.",
  },
  {
    question: "How much does Foundayo cost in the UK?",
    answer:
      "Prices depend on the provider, the dose and what is included. We do not quote an unchecked price on this page.",
  },
];

export function whatIsFoundayoJsonLd(): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const url = `${base}/what-is-foundayo`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Foundayo UK: What Is the Orforglipron Weight Loss Pill?",
        headline: "What Is Foundayo (Orforglipron) in the UK?",
        description:
          "Foundayo UK explained. See what orforglipron is, how the once daily weight loss pill works and what to know before you ask a prescriber.",
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: {
          "@type": "Thing",
          name: "Foundayo (orforglipron)",
        },
        dateModified: "2026-10-21",
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
            name: "What Is Foundayo",
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: FOUNDAYO_FAQS.map((item) => ({
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

