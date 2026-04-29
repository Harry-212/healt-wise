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

const ENVIGORE_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy from Envigore?",
    answer:
      "Yes. Wegovy may be available through Envigore following a clinical assessment and approval.",
  },
  {
    question: "Does Envigore offer Mounjaro for weight loss?",
    answer:
      "Yes. Mounjaro appears to be available for eligible patients through Envigore's prescribing service.",
  },
  {
    question: "How much does Envigore weight loss treatment cost?",
    answer:
      "Standard GLP-1 treatment may start around £124–£129 per month, with higher doses potentially costing more.",
  },
  {
    question: "Does Envigore offer next-day or fast delivery?",
    answer:
      "Orders often appear to arrive within 1–2 working days after approval, usually with tracked delivery.",
  },
  {
    question: "Is Envigore regulated?",
    answer:
      "Envigore operates as a regulated dispensing provider with clinician and pharmacist oversight.",
  },
  {
    question: "Does Envigore offer support after you start treatment?",
    answer:
      "Yes. Support may include maintenance planning, dose reviews, coaching tools and follow-up check-ins.",
  },
];

const FARMECI_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy from Farmeci?",
    answer:
      "Yes, Wegovy may be available through Farmeci following a consultation and clinician approval.",
  },
  {
    question: "Does Farmeci offer Mounjaro for weight loss?",
    answer:
      "Yes, Mounjaro appears to be among available treatment options, subject to suitability review.",
  },
  {
    question: "How much does Farmeci weight loss treatment cost?",
    answer:
      "Some prices appear to start around £92 per dose or pen, though total costs may vary depending on medication, dosage and shipping.",
  },
  {
    question: "Does Farmeci deliver medication to your home?",
    answer:
      "Yes. Approved prescriptions are shipped directly to your chosen address, with tracking and cold-chain handling where required.",
  },
  {
    question: "Is Farmeci regulated?",
    answer:
      "Farmeci works with GPhC-registered partner pharmacies and independent prescribing clinicians.",
  },
  {
    question: "Are there consultation fees?",
    answer:
      "Farmeci generally appears to offer a free online consultation, though users should confirm any charges during checkout.",
  },
];

const FYLDE_CLINIC_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy from Fylde Clinic?",
    answer:
      "Yes, Wegovy may be available through Fylde Clinic after an online consultation and clinician approval.",
  },
  {
    question: "Does Fylde Clinic offer Mounjaro for weight loss?",
    answer:
      "Yes, Mounjaro appears to be one of its core weight loss treatments, subject to eligibility review.",
  },
  {
    question: "How much does Fylde Clinic weight loss treatment cost?",
    answer:
      "Pricing may start around £99 for Wegovy and £134 for Mounjaro, with higher doses costing more.",
  },
  {
    question: "Does Fylde Clinic provide temperature-controlled delivery?",
    answer:
      "Yes. Injectable medications appear to be shipped in insulated packaging designed to maintain 2–8°C during transit.",
  },
  {
    question: "Is Fylde Clinic regulated?",
    answer:
      "Fylde Clinic operates as a regulated UK provider using clinician review and pharmacist oversight before treatment is supplied.",
  },
  {
    question: "Is delivery included in the price?",
    answer:
      "Fylde Clinic states tracked UK delivery is included, with no separate shipping charge.",
  },
];

const GENMEDS_FAQ: FaqItem[] = [
  {
    question: "Can I buy Wegovy from Genmeds?",
    answer:
      "Yes, Wegovy appears available through Genmeds following a consultation and approval.",
  },
  {
    question: "Does Genmeds offer Mounjaro for weight loss?",
    answer: "Yes, Mounjaro is listed among available treatments.",
  },
  {
    question: "How much does Genmeds weight loss treatment cost?",
    answer:
      "Listed prices currently appear to start around £129.99 for Wegovy and £179.99 for Mounjaro, excluding any potential delivery or consultation costs that may apply at checkout.",
  },
  {
    question: "Does Genmeds deliver weight loss medication to your home?",
    answer:
      "Yes. Approved prescriptions appear delivered to your chosen address in discreet packaging, likely using courier services.",
  },
  {
    question: "Does Genmeds sell needles and sharps bins?",
    answer:
      "Yes. Support supplies such as pen needles, swabs and sharps bins are listed alongside treatment products.",
  },
  {
    question: "Is Genmeds a regulated UK pharmacy?",
    answer:
      "Yes, Genmeds operates as a UK-registered online pharmacy under regulatory standards.",
  },
];

const GET_WEIGHT_LOSS_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy through Get Weight Loss?",
    answer:
      "Yes, Wegovy may be available through Get Weight Loss after clinical assessment and approval.",
  },
  {
    question: "How much does Get Weight Loss charge for Wegovy?",
    answer:
      "Listed pricing has included around £179.99 per pen (4 doses), though costs may vary.",
  },
  {
    question: "Does Get Weight Loss use subscriptions?",
    answer:
      "No, the service appears to offer month-to-month ordering rather than mandatory subscription billing.",
  },
  {
    question: "Does Get Weight Loss deliver medication to your home?",
    answer:
      "Yes. Approved prescriptions are typically shipped via tracked UK delivery, often arriving within a few working days.",
  },
  {
    question: "Is Get Weight Loss regulated?",
    answer:
      "Get Weight Loss operates through a clinically supervised prescribing model with medicines dispensed through regulated pharmacy channels.",
  },
  {
    question: "Are there support services beyond medication?",
    answer:
      "Yes. Optional services may include nutrition consultations, blood testing and follow-up support.",
  },
];

const GETADRIP_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy from GetADrip?",
    answer:
      "Yes, Wegovy may be available through GetADrip after clinical assessment and approval.",
  },
  {
    question: "Does GetADrip offer Mounjaro for weight loss?",
    answer:
      "Yes, Mounjaro appears to be one of the prescription options available, subject to suitability checks.",
  },
  {
    question: "How much does GetADrip weight loss treatment cost?",
    answer:
      "Pricing may start around £109 per month for Wegovy and £159 per month for Mounjaro, depending on programme structure.",
  },
  {
    question: "Does GetADrip deliver medication to your home?",
    answer:
      "Yes. Approved prescriptions are shipped directly to patients, often through DPD using cold-chain delivery where required.",
  },
  {
    question: "Is GetADrip a regulated provider?",
    answer:
      "GetADrip provides treatment through UK-registered clinicians with medically reviewed prescribing.",
  },
  {
    question: "Is GetADrip different from a normal online pharmacy?",
    answer:
      "Potentially, yes. It appears to combine medication access with coaching, app tracking and longer-term support, rather than functioning purely as a dispensing service.",
  },
];

const GOODBODY_CLINIC_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy through GoodBody Clinic?",
    answer:
      "Yes, Wegovy appears available through GoodBody Clinic following medical assessment and approval.",
  },
  {
    question: "Does GoodBody Clinic include delivery in the price?",
    answer:
      "Delivery often appears included in programme pricing, which may help avoid unexpected shipping costs.",
  },
  {
    question: "How much does GoodBody Clinic weight loss treatment cost?",
    answer:
      "Some plans appear to start around £129 per month, with longer-term subscription bundles potentially reducing overall cost.",
  },
  {
    question: "Does GoodBody Clinic offer subscription treatment plans?",
    answer:
      "Yes. Patients may choose one-off purchases or subscription-based treatment plans, depending on medication and preference.",
  },
  {
    question: "Is GoodBody Clinic regulated?",
    answer:
      "GoodBody Clinic appears to operate through medically supervised prescribing and registered pharmacy fulfilment partners.",
  },
  {
    question: "Is GoodBody Clinic better than buying from a standard online seller?",
    answer:
      "For patients who want clinical oversight, support and regulated prescribing, it may offer advantages over unregulated or anonymous sellers.",
  },
];

const HAPPY_PHARMACY_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy from Happy Pharmacy?",
    answer:
      "Yes, Wegovy may be available through Happy Pharmacy after completing an online consultation and receiving approval.",
  },
  {
    question: "Does Happy Pharmacy offer Mounjaro for weight loss?",
    answer:
      "Yes, Mounjaro appears among available treatment options, subject to clinical suitability.",
  },
  {
    question: "How much does Happy Pharmacy weight loss treatment cost?",
    answer:
      "Costs may start around £89.99 for Wegovy, £139.99 for Mounjaro, and £34.98 for Orlistat, depending on treatment and dosage.",
  },
  {
    question: "Does Happy Pharmacy deliver medication to your home?",
    answer:
      "Yes. Approved prescriptions are shipped directly to your address using discreet, tracked delivery.",
  },
  {
    question: "Is Happy Pharmacy regulated?",
    answer:
      "Happy Pharmacy operates as a GPhC-regulated pharmacy provider supplying medication through a clinically reviewed process.",
  },
  {
    question: "Are non-injection options available?",
    answer:
      "Yes. Options may include Orlistat and Alli for patients preferring oral treatment.",
  },
];

const HEY_SLIM_FAQ: FaqItem[] = [
  {
    question: "Can I get Wegovy through Hey Slim?",
    answer:
      "Yes, Wegovy may be available through Hey Slim after clinician review and approval.",
  },
  {
    question: "Does Hey Slim offer Mounjaro for weight loss?",
    answer:
      "Yes, Mounjaro appears among available treatment options, subject to suitability checks.",
  },
  {
    question: "How much does Hey Slim weight loss treatment cost?",
    answer:
      "Costs may range from around £79–£159 initially for Wegovy, and £129–£269 initially for Mounjaro, with ongoing monthly costs varying by dose.",
  },
  {
    question: "Does Hey Slim include delivery?",
    answer:
      "Yes. Delivery appears included in treatment pricing, with shipping often taking around 1–2 business days.",
  },
  {
    question: "Is Hey Slim a regulated provider?",
    answer:
      "Hey Slim states treatment is provided through UK clinicians and a GPhC-registered pharmacy partner.",
  },
  {
    question: "Is Hey Slim better than a standard online pharmacy?",
    answer:
      "Possibly, if you value ongoing monitoring and clinician involvement. If you only want prescription fulfilment, a simpler pharmacy model may also suit some patients.",
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
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Envigore.
 */
export function envigorePharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/envigore";
  const url = `${origin}${path}`;
  const name =
    "Envigore weight loss review (UK) — Wegovy, Mounjaro, clinician-led support";
  const description =
    "Envigore: online assessment, pharmacist and prescriber review, cold-chain delivery, maintenance support and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Envigore", item: url },
      ]),
      {
        ...faqPageEntity(ENVIGORE_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Farmeci.
 */
export function farmeciPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/farmeci";
  const url = `${origin}${path}`;
  const name =
    "Farmeci weight loss review (UK) — Wegovy, Mounjaro, clinician-supervised support";
  const description =
    "Farmeci: online assessment, partner-pharmacy dispensing, cold-chain delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Farmeci", item: url },
      ]),
      {
        ...faqPageEntity(FARMECI_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Fylde Clinic.
 */
export function fyldeClinicPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/fylde-clinic";
  const url = `${origin}${path}`;
  const name =
    "Fylde Clinic weight loss review (UK) — Wegovy, Mounjaro, clinician-led support";
  const description =
    "Fylde Clinic: clinician-led assessment, temperature-controlled delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Fylde Clinic", item: url },
      ]),
      {
        ...faqPageEntity(FYLDE_CLINIC_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Genmeds.
 */
export function genmedsPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/genmeds";
  const url = `${origin}${path}`;
  const name =
    "Genmeds weight loss review (UK) — Wegovy, Mounjaro, pharmacy-led access";
  const description =
    "Genmeds: UK-registered online pharmacy, listed Wegovy and Mounjaro prices, accessories, delivery notes and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Genmeds", item: url },
      ]),
      {
        ...faqPageEntity(GENMEDS_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Get Weight Loss.
 */
export function getWeightLossPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/get-weight-loss";
  const url = `${origin}${path}`;
  const name =
    "Get Weight Loss review (UK) — Wegovy, medically supervised, no subscription";
  const description =
    "Get Weight Loss: digital clinical pathway, tracked delivery, optional extras, month-to-month ordering and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Get Weight Loss", item: url },
      ]),
      {
        ...faqPageEntity(GET_WEIGHT_LOSS_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — GetADrip.
 */
export function getADripPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/getadrip";
  const url = `${origin}${path}`;
  const name =
    "GetADrip weight loss review (UK) — Wegovy, Mounjaro, programme support";
  const description =
    "GetADrip: GLP-1 programmes, app and coaching, DPD delivery, subscription-style pricing and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "GetADrip", item: url },
      ]),
      {
        ...faqPageEntity(GETADRIP_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — GoodBody Clinic.
 */
export function goodBodyClinicPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/goodbody-clinic";
  const url = `${origin}${path}`;
  const name =
    "GoodBody Clinic weight loss review (UK) — Wegovy, medical support, delivery";
  const description =
    "GoodBody Clinic: programme-style Wegovy access, nurse and doctor oversight, subscriptions, delivery often included and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "GoodBody Clinic", item: url },
      ]),
      {
        ...faqPageEntity(GOODBODY_CLINIC_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Happy Pharmacy.
 */
export function happyPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/happy-pharmacy";
  const url = `${origin}${path}`;
  const name =
    "Happy Pharmacy weight loss review (UK) — Wegovy, Mounjaro, GPhC pharmacy";
  const description =
    "Happy Pharmacy: GPhC-regulated access, injections and tablets, discreet tracked delivery, pricing from guide and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Happy Pharmacy", item: url },
      ]),
      {
        ...faqPageEntity(HAPPY_PHARMACY_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Hey Slim.
 */
export function heySlimPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/hey-slim";
  const url = `${origin}${path}`;
  const name =
    "Hey Slim weight loss review (UK) — Wegovy, Mounjaro, clinician-led";
  const description =
    "Hey Slim: clinician-led programme, GLP-1 access, delivery included (stated), dose-dependent pricing and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Hey Slim", item: url },
      ]),
      {
        ...faqPageEntity(HEY_SLIM_FAQ),
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
