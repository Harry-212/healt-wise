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

const BOOTS_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy through Boots Online Doctor?",
    answer:
      "Yes, Wegovy may be available through Boots Online Doctor following a consultation and approval process.",
  },
  {
    question: "Does Boots Online Doctor offer Saxenda?",
    answer:
      "Yes, Saxenda appears to be among the weight loss treatments available, subject to suitability checks.",
  },
  {
    question: "How much does Boots Online Doctor weight loss treatment cost?",
    answer:
      "Costs may range from around £30–£100+ for tablets and £150–£300+ monthly for injections, depending on treatment and dosage.",
  },
  {
    question: "Can Boots deliver weight loss medication to my home?",
    answer:
      "Yes. Approved prescriptions may be delivered to your address using secure delivery, and some shipments may require a signature.",
  },
  {
    question: "Can I collect weight loss treatment from Boots Pharmacy?",
    answer:
      "In some cases, yes. Boots may offer pharmacy collection as an alternative to home delivery.",
  },
  {
    question: "Is Boots Online Doctor a regulated provider?",
    answer:
      "Yes, treatment is provided through a medically reviewed prescribing process using regulated pharmacy supply channels.",
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

const CLICK2_FAQ: FaqItem[] = [
  {
    question: "Can I buy Mounjaro online from Click2Pharmacy?",
    answer:
      "Yes, Mounjaro may be available through Click2Pharmacy following an online consultation and approval.",
  },
  {
    question: "How much does Mounjaro cost at Click2Pharmacy?",
    answer:
      "Pricing may start around £140–£180 per month for lower doses, rising to £200–£300+ for higher strengths.",
  },
  {
    question: "Does Click2Pharmacy deliver Mounjaro to your home?",
    answer:
      "Yes. Approved prescriptions may be delivered directly using secure courier shipping.",
  },
  {
    question: "Is Mounjaro delivered in temperature-controlled packaging?",
    answer:
      "Click2Pharmacy states insulated or cold-chain packaging may be used where required to help maintain medication stability.",
  },
  {
    question: "Is Click2Pharmacy regulated?",
    answer:
      "Click2Pharmacy operates as a pharmacy provider supplying prescription medication through medical review and regulated dispensing.",
  },
  {
    question: "Who is Mounjaro generally prescribed for?",
    answer:
      "It may be considered for people with BMI over 30, or BMI over 27 with certain related health conditions, subject to clinical assessment.",
  },
];

const CLOUD_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy from Cloud Pharmacy?",
    answer:
      "Yes, Wegovy may be available through Cloud Pharmacy after an online consultation and approval.",
  },
  {
    question: "Does Cloud Pharmacy offer Mounjaro for weight loss?",
    answer:
      "Yes, Mounjaro appears among available treatment options, subject to suitability checks.",
  },
  {
    question: "How much does Cloud Pharmacy weight loss treatment cost?",
    answer:
      "Costs may range from around £20–£100+ for tablets and £130–£300+ per month for injections, depending on medication and dosage.",
  },
  {
    question: "Does Cloud Pharmacy deliver weight loss injections to your home?",
    answer:
      "Yes. Approved prescriptions are shipped directly to your address, often using tracked delivery and temperature-controlled packaging where required.",
  },
  {
    question: "Is Cloud Pharmacy regulated?",
    answer:
      "Cloud Pharmacy operates as a licensed pharmacy provider supplying prescription medication through a medically reviewed process.",
  },
  {
    question: "Are non-injection alternatives available?",
    answer:
      "Yes. Options may include Orlistat and Mysimba for patients who prefer oral treatment.",
  },
];

const CURATE_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy from Curate?",
    answer:
      "Yes, Wegovy may be available through Curate after an online consultation and approval.",
  },
  {
    question: "Does Curate offer Saxenda for weight loss?",
    answer:
      "Yes, Saxenda appears among available treatment options, subject to suitability checks.",
  },
  {
    question: "How much does Curate weight loss treatment cost?",
    answer:
      "Costs may range from around £30–£100+ for tablets and £150–£300+ per month for injections, depending on medication and dosage.",
  },
  {
    question: "Does Curate deliver weight loss medication to your home?",
    answer:
      "Yes. Approved prescriptions may be delivered directly to your address, often with tracked shipping.",
  },
  {
    question: "Can I collect my medication instead?",
    answer:
      "Yes. Curate appears to offer pharmacy collection as an alternative to home delivery.",
  },
  {
    question: "Is Curate a regulated provider?",
    answer:
      "Curate supplies prescription medication through a medically reviewed process involving licensed pharmacy fulfilment.",
  },
];

const CURELY_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy from Curely?",
    answer:
      "Yes, Wegovy may be available through Curely after completing a consultation and approval process.",
  },
  {
    question: "Does Curely offer Mounjaro for weight loss?",
    answer:
      "Yes, Mounjaro appears among available treatment options, subject to suitability checks.",
  },
  {
    question: "How much does Curely weight loss treatment cost?",
    answer:
      "Costs may range from lower-priced oral treatments up to £230+ per pen for some higher-dose injections, depending on medication and strength.",
  },
  {
    question: "Does Curely offer tracked delivery?",
    answer:
      "Yes. Curely appears to offer Tracked 48, Tracked 24 and next-day special delivery options, with free tracked delivery over £20 in some cases.",
  },
  {
    question: "Is Curely a regulated pharmacy?",
    answer:
      "Curely operates as a UK-regulated online pharmacy with pharmacist-led review and licensed dispensing.",
  },
  {
    question: "Are non-injection alternatives available?",
    answer: "Yes. Options may include Orlistat, Xenical and Alli.",
  },
];

const CUVA_FAQ: FaqItem[] = [
  {
    question: "Can I get Mounjaro through Cuva Health?",
    answer:
      "Yes, Mounjaro may be available through Cuva Health following online assessment and clinical approval.",
  },
  {
    question: "Does Cuva Health offer Wegovy for weight loss?",
    answer:
      "Yes, Wegovy appears among available treatment options, subject to eligibility checks.",
  },
  {
    question: "How much does Cuva Health weight loss treatment cost?",
    answer:
      "Costs may range from around £199–£249 monthly for Wegovy and £200–£300 monthly for Mounjaro, depending on treatment and dose.",
  },
  {
    question: "Does Cuva Health use temperature-controlled delivery?",
    answer:
      "Yes. Temperature-sensitive medications appear to be shipped using cold-chain packaging to help maintain effectiveness.",
  },
  {
    question: "Is Cuva Health regulated?",
    answer:
      "Cuva Health operates as a UK-regulated online pharmacy, with prescribing handled through qualified clinicians.",
  },
  {
    question: "Is Cuva Health only a pharmacy or does it include support?",
    answer:
      "It appears to include more than medication supply, with clinical review and ongoing support forming part of the service.",
  },
];

const DOTOR_FAQ: FaqItem[] = [
  {
    question: "Can I get Mounjaro from Dotor?",
    answer:
      "Yes. Mounjaro appears to be available through Dotor following a clinical assessment and approval process.",
  },
  {
    question: "Does Dotor offer Wegovy for weight loss?",
    answer:
      "Yes. Wegovy appears among available prescription treatment options, subject to suitability checks.",
  },
  {
    question: "Does Dotor use tracked delivery?",
    answer:
      "Yes. DPD appears to provide tracked delivery, with timed and weekend options potentially available depending on location and cut-off times.",
  },
  {
    question: "Does Dotor offer subscription plans?",
    answer:
      "Dotor appears to use individual order payments rather than recurring subscriptions, which may suit patients wanting flexibility.",
  },
  {
    question: "Are non-injection alternatives available?",
    answer:
      "Yes. Options may include oral treatments such as Orlistat / Xenical and non-prescription aids such as XLS Medical Fat Binder.",
  },
  {
    question: "How much does Dotor weight loss treatment cost?",
    answer:
      "Costs may start around £134.99+ for Mounjaro, with oral options from around £19.99+ depending on treatment and dose.",
  },
];

const DR_WEIGHTMANS_FAQ: FaqItem[] = [
  {
    question: "Can I track my weight-loss product order?",
    answer:
      "Often yes. Many providers (including services like Dr Weightmans) may offer tracking updates by email or via an online portal, depending on the delivery method used.",
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Delivery may range from 1–3 business days for expedited shipping to 3–7 business days for standard delivery, depending on location, stock and fulfilment.",
  },
  {
    question: "Do prescription weight-loss products require cold-chain delivery?",
    answer:
      "Some may. Certain injectable products (e.g. Wegovy) may require temperature-controlled shipping and handling instructions on receipt.",
  },
  {
    question: "What costs are usually included?",
    answer:
      "Costs may include product pricing, shipping fees, consultation charges and, in some cases, ongoing support fees. Always check the checkout breakdown.",
  },
  {
    question: "Is medical review required before ordering?",
    answer:
      "For prescription-based treatments, medical review is generally necessary and should be expected.",
  },
  {
    question: "Are online weight-loss providers safe?",
    answer:
      "They may be, provided they use regulated supply chains, proper clinical oversight and transparent support policies. Avoid unverified sellers.",
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
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Boots Online Doctor.
 */
export function bootsPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/boots-online-doctor";
  const url = `${origin}${path}`;
  const name =
    "Boots Online Doctor weight loss (UK) — Wegovy, Saxenda, online review";
  const description =
    "Boots Online Doctor: prescription weight loss support, Wegovy and Saxenda context, delivery or pharmacy collection, costs and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Boots Online Doctor", item: url },
      ]),
      {
        ...faqPageEntity(BOOTS_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Click2Pharmacy (Mounjaro).
 */
export function click2pharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/click2pharmacy";
  const url = `${origin}${path}`;
  const name =
    "Click2Pharmacy Mounjaro review (UK) — buying Mounjaro injections online";
  const description =
    "Click2Pharmacy: Mounjaro-focused online consultation, prescription approval, delivery notes, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Click2Pharmacy", item: url },
      ]),
      {
        ...faqPageEntity(CLICK2_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Cloud Pharmacy.
 */
export function cloudPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/cloud-pharmacy";
  const url = `${origin}${path}`;
  const name =
    "Cloud Pharmacy weight loss review (UK) — Wegovy, Mounjaro, online prescribing";
  const description =
    "Cloud Pharmacy: online consultation, Wegovy and Mounjaro context, delivery and temperature handling, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Cloud Pharmacy", item: url },
      ]),
      {
        ...faqPageEntity(CLOUD_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Curate.
 */
export function curatePharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/curate";
  const url = `${origin}${path}`;
  const name =
    "Curate weight loss review (UK) — Wegovy, Saxenda, online prescribing";
  const description =
    "Curate: online consultation, Wegovy and Saxenda context, delivery or collection, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Curate", item: url },
      ]),
      {
        ...faqPageEntity(CURATE_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Curely.
 */
export function curelyPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/curely";
  const url = `${origin}${path}`;
  const name =
    "Curely weight loss review (UK) — Wegovy, Mounjaro, online prescribing";
  const description =
    "Curely: pharmacist-led consultation, regulated supply, tracked delivery options, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Curely", item: url },
      ]),
      {
        ...faqPageEntity(CURELY_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Cuva Health.
 */
export function cuvaHealthPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/cuva-health";
  const url = `${origin}${path}`;
  const name =
    "Cuva Health weight loss review (UK) — Mounjaro, Wegovy, clinician-led support";
  const description =
    "Cuva Health: clinician-led review, cold-chain delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Cuva Health", item: url },
      ]),
      {
        ...faqPageEntity(CUVA_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Dotor.
 */
export function dotorPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/dotor";
  const url = `${origin}${path}`;
  const name = "Dotor weight loss review (UK) — Mounjaro, Wegovy, tracked delivery";
  const description =
    "Dotor: online assessment, prescriber review, in-house dispensing, DPD tracked delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Dotor", item: url },
      ]),
      {
        ...faqPageEntity(DOTOR_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Dr Weightmans.
 */
export function drWeightmansPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/dr-weightmans";
  const url = `${origin}${path}`;
  const name =
    "Dr Weightmans weight loss review (UK) — clinically supported products, delivery & guidance";
  const description =
    "Dr Weightmans: clinically guided weight management overview, ordering flow, delivery expectations, cost components and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Dr Weightmans", item: url },
      ]),
      {
        ...faqPageEntity(DR_WEIGHTMANS_FAQ),
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
