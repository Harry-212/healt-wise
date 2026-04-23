import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

const FAQ_BASE = "https://schema.org";

type FaqItem = { question: string; answer: string };

const ASDA_FAQ: FaqItem[] = [
  {
    question: "Can I buy Wegovy online from Asda Online Doctor?",
    answer:
      "Yes, Wegovy may be available through Asda Online Doctor after completing a medical assessment and receiving doctor approval.",
  },
  {
    question: "Does Asda Online Doctor deliver weight loss injections to your home?",
    answer:
      "Yes, approved medications can be delivered directly to your address using discreet and secure delivery, including temperature-controlled packaging for injections.",
  },
  {
    question: "How much does Asda Online Doctor weight loss treatment cost?",
    answer:
      "Prices typically range from £90 to £250 per month, depending on medication type and dosage.",
  },
  {
    question: "Is Mounjaro available through Asda Online Doctor?",
    answer:
      "Yes, Mounjaro may be prescribed if clinically appropriate following an online consultation.",
  },
  {
    question: "Is Asda Online Doctor safe for buying weight loss medication?",
    answer:
      "Yes, the service uses UK-registered doctors and regulated pharmacies, helping ensure safe and legal access to prescription medication.",
  },
  {
    question: "Do I need a GP appointment before using Asda Online Doctor?",
    answer:
      "No, the service is fully online, so you can complete consultation and assessment without visiting a GP in person.",
  },
];

const AYP_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy through AYP Healthcare?",
    answer:
      "Yes, Wegovy may be available through AYP Healthcare following a consultation and approval process.",
  },
  {
    question: "Does AYP Healthcare offer Mounjaro for weight loss?",
    answer:
      "Yes, Mounjaro appears to be one of the treatments offered, subject to suitability checks.",
  },
  {
    question: "How much does AYP Healthcare weight management cost?",
    answer:
      "Pricing may range from around £130 to £350+ per month, depending on medication and dosage.",
  },
  {
    question: "Does AYP Healthcare deliver medication to your home?",
    answer:
      "Yes. Approved prescriptions are shipped directly to patients, often with secure and sometimes signed delivery.",
  },
  {
    question: "Is AYP Healthcare a regulated provider?",
    answer:
      "AYP Healthcare provides treatment through a medically supervised prescribing process, with pharmacy checks before dispatch.",
  },
  {
    question: "Is AYP Healthcare better than going through a GP?",
    answer:
      "That depends. Some patients may prefer faster private access online. Others may prefer traditional GP-led care. The better option often depends on personal circumstances.",
  },
];

const BOLT_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy from Bolt Pharmacy?",
    answer:
      "Yes, Wegovy may be available through Bolt Pharmacy following an online assessment and approval.",
  },
  {
    question: "Does Bolt Pharmacy offer Mounjaro for weight loss?",
    answer:
      "Yes, Mounjaro appears to be among available treatment options, subject to suitability checks.",
  },
  {
    question: "How much does Bolt Pharmacy weight loss treatment cost?",
    answer:
      "Costs may range from around £10–£70 for tablets and £120–£300+ monthly for injections, depending on medication and dosage.",
  },
  {
    question: "Does Bolt Pharmacy deliver weight loss injections to your home?",
    answer:
      "Yes. Approved prescriptions are shipped directly to your chosen address, often using tracked delivery.",
  },
  {
    question: "Is Bolt Pharmacy regulated?",
    answer:
      "Bolt Pharmacy operates as a regulated pharmacy provider supplying prescription medication through medical review.",
  },
  {
    question: "Are tablet alternatives available instead of injections?",
    answer:
      "Yes. Options may include Orlistat and Mysimba for patients preferring non-injectable treatment.",
  },
];

const ASHCROFT_FAQ: FaqItem[] = [
  {
    question: "Can I buy Wegovy online from Ashcroft Pharmacy?",
    answer:
      "Yes, Wegovy may be available through Ashcroft Pharmacy after completing an online consultation and receiving approval.",
  },
  {
    question: "Does Ashcroft Pharmacy offer Mounjaro weight loss injections?",
    answer:
      "Yes, Mounjaro is listed among available weight loss treatments, subject to suitability assessment.",
  },
  {
    question: "Does Ashcroft Pharmacy provide next-day delivery?",
    answer:
      "Next-day delivery may be available for eligible orders placed before 2pm Monday to Friday.",
  },
  {
    question: "How much does Ashcroft Pharmacy weight loss treatment cost?",
    answer:
      "Costs may range from around £11.99 for capsules to £300+ per month for higher-dose injections, depending on treatment.",
  },
  {
    question: "Is Ashcroft Pharmacy a regulated provider?",
    answer:
      "Ashcroft Pharmacy operates as a licensed pharmacy, supplying prescription treatment with medical screening.",
  },
  {
    question: "Are tablets available instead of injections?",
    answer: "Yes. Options may include Orlistat, Mysimba and Rybelsus.",
  },
];

function siteId(): string {
  return `${siteOrigin()}/#website`;
}

function websiteNode() {
  return {
    "@type": "WebSite" as const,
    "@id": siteId(),
    name: SITE_BRAND_NAME,
    url: siteOrigin(),
  };
}

function breadcrumbList(
  path: string,
  items: { name: string; item: string }[],
) {
  return {
    "@type": "BreadcrumbList" as const,
    "@id": `${siteOrigin()}${path}#breadcrumb`,
    itemListElement: items.map((b, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };
}

function faqPageEntity(faq: FaqItem[]) {
  return {
    "@type": "FAQPage" as const,
    mainEntity: faq.map((f) => ({
      "@type": "Question" as const,
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: f.answer,
      },
    })),
  };
}

const DEFAULT_CRUMB: { name: string; path: string } = {
  name: "UK price comparisons",
  path: "/prices/cheapest-options-uk",
};

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Asda Online Doctor.
 */
export function asdaPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/asda-online-doctor";
  const url = `${origin}${path}`;
  const name =
    "Asda Online Doctor weight loss (UK) — Wegovy, Mounjaro, Saxenda guide";
  const description =
    "How Asda Online Doctor works: online consultation, UK prescribers, Wegovy and Mounjaro pricing context, delivery and FAQs. Information from Health Wise — not medical advice.";

  return {
    "@context": FAQ_BASE,
    "@graph": [
      websiteNode(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId() },
      },
      breadcrumbList(path, [
        { name: "Home", item: origin },
        { name: DEFAULT_CRUMB.name, item: `${origin}${DEFAULT_CRUMB.path}` },
        { name: "Asda Online Doctor", item: url },
      ]),
      {
        ...faqPageEntity(ASDA_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — AYP Healthcare.
 */
export function aypPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/ayp-healthcare";
  const url = `${origin}${path}`;
  const name =
    "AYP Healthcare weight management (UK) — Wegovy, Mounjaro, online review";
  const description =
    "How AYP Healthcare online weight management works: consultations, Wegovy and Mounjaro context, delivery, monitoring and FAQs. Information from Health Wise — not medical advice.";

  return {
    "@context": FAQ_BASE,
    "@graph": [
      websiteNode(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId() },
      },
      breadcrumbList(path, [
        { name: "Home", item: origin },
        { name: DEFAULT_CRUMB.name, item: `${origin}${DEFAULT_CRUMB.path}` },
        { name: "AYP Healthcare", item: url },
      ]),
      {
        ...faqPageEntity(AYP_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Bolt Pharmacy.
 */
export function boltPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/bolt-pharmacy";
  const url = `${origin}${path}`;
  const name =
    "Bolt Pharmacy weight loss (UK) — Wegovy, Mounjaro, online review";
  const description =
    "Bolt Pharmacy: online weight loss, Wegovy and Mounjaro context, delivery, pricing and FAQs. Information from Health Wise — not medical advice.";

  return {
    "@context": FAQ_BASE,
    "@graph": [
      websiteNode(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId() },
      },
      breadcrumbList(path, [
        { name: "Home", item: origin },
        { name: DEFAULT_CRUMB.name, item: `${origin}${DEFAULT_CRUMB.path}` },
        { name: "Bolt Pharmacy", item: url },
      ]),
      {
        ...faqPageEntity(BOLT_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Ashcroft Pharmacy.
 */
export function ashcroftPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/ashcroft-pharmacy";
  const url = `${origin}${path}`;
  const name =
    "Ashcroft Pharmacy weight loss (UK) — Wegovy, Mounjaro, review & guide";
  const description =
    "Ashcroft Pharmacy online weight loss: consultation, range of treatments, delivery, safety and cost context. Information from Health Wise — not medical advice.";

  return {
    "@context": FAQ_BASE,
    "@graph": [
      websiteNode(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId() },
      },
      breadcrumbList(path, [
        { name: "Home", item: origin },
        { name: DEFAULT_CRUMB.name, item: `${origin}${DEFAULT_CRUMB.path}` },
        { name: "Ashcroft Pharmacy", item: url },
      ]),
      {
        ...faqPageEntity(ASHCROFT_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

type PharmacyProfileJsonInput = {
  slug: string;
  name: string;
  title: string;
  description: string;
};

/**
 * WebSite, WebPage, BreadcrumbList — for default pharmacy profile pages (no on-page FAQ).
 */
export function pharmacyProfileJsonGraph(
  input: PharmacyProfileJsonInput,
): Record<string, unknown> {
  const origin = siteOrigin();
  const path = `/pharmacies/${input.slug}`;
  const url = `${origin}${path}`;

  return {
    "@context": FAQ_BASE,
    "@graph": [
      websiteNode(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: input.title,
        description: input.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId() },
      },
      breadcrumbList(path, [
        { name: "Home", item: origin },
        { name: DEFAULT_CRUMB.name, item: `${origin}${DEFAULT_CRUMB.path}` },
        { name: input.name, item: url },
      ]),
    ],
  };
}
