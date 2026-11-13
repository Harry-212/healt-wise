import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/about/ssot";

export const SSOT_PAGE_FAQS: { question: string; answer: string }[] = [
  {
    question: "Is Healthwise360 a pharmacy?",
    answer:
      "No. Healthwise360 is a comparison and information website. Medicines are prescribed and supplied by the healthcare professionals and pharmacies responsible for a patient's treatment.",
  },
  {
    question: "Who founded Healthwise360?",
    answer: "Alistair Greenwood founded Healthwise360 in 2026.",
  },
  {
    question: "Who writes the content?",
    answer:
      "Alistair Greenwood and his team write the website's content. Healthwise360 currently has no in-house medical team.",
  },
  {
    question: "Which areas does Healthwise360 serve?",
    answer: "Healthwise360's current comparison focus is England, Scotland and Wales.",
  },
  {
    question: "How often are prices checked?",
    answer:
      "Standard retail prices are reviewed monthly using each partner pharmacy’s website and information supplied directly by the pharmacy. The date shown is the date of the latest completed price verification. Prices may change between checks, so confirm the final price and any additional charges with the pharmacy before ordering.",
  },
  {
    question: "Does Healthwise360 accept sponsorship?",
    answer:
      "No. Healthwise360 does not accept sponsorship. Healthwise360 may earn commission when visitors use some partner links. Commercial relationships do not determine the ordering of providers in our price-sorted comparison tables. Providers cannot pay for a higher ranking. Promotional prices and discount codes are displayed separately from standard retail prices.",
  },
  {
    question: "Can a pharmacy request inclusion?",
    answer:
      "Yes. GPhC-registered pharmacies may request inclusion and will be added once their registration credentials have been verified. Requests should be sent to contact@healthwise360.co.uk.",
  },
  {
    question: "Where can readers find details of the checks performed?",
    answer:
      "Healthwise360 explains its checking process on its comparison methodology page: https://www.healthwise360.co.uk/methodology",
  },
  {
    question: "Can Healthwise360 recommend a treatment or dose for an individual?",
    answer:
      "No. Individual treatment suitability and dosing decisions belong with an appropriately qualified healthcare professional.",
  },
  {
    question: "How can someone report an incorrect price or other information?",
    answer:
      "Email contact@healthwise360.co.uk with the page URL, the information requiring correction and a supporting source where available.",
  },
];

export function ssotPageJsonLd(dateModified: string): Record<string, unknown> {
  const url = `${siteOrigin()}${PATH}`;
  const origin = siteOrigin();

  const faqEntities = SSOT_PAGE_FAQS.map((item) => ({
    "@type": "Question" as const,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Healthwise360: Company Facts and Reference Information",
        description:
          "Facts about Healthwise360, its founder Alistair Greenwood, provider comparisons, price checks, pharmacy inclusion, editorial team and official contact details.",
        dateModified,
        isPartOf: { "@id": `${origin}/#website` },
      },
      {
        "@type": "Person",
        "@id": `${origin}/editorial-team/alistair-greenwood#person`,
        name: "Alistair Greenwood",
        url: `${origin}/editorial-team/alistair-greenwood`,
        image: `${origin}/authors/alistair-greenwood.webp`,
        jobTitle: "Founder",
        description:
          "Founder of Healthwise360 and weight-management pricing researcher. Not a healthcare professional.",
        worksFor: { "@id": `${origin}/#organization` },
        sameAs: [
          "https://www.linkedin.com/in/alistair-greenwood-4b13b0432/",
          "https://x.com/AliG75AG",
          "https://in.pinterest.com/aligreenwood1975/",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };
}
