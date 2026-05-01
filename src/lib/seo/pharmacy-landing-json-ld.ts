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
      "Costs may range from around £200–£300 monthly for Mounjaro and £199–£249 monthly for Wegovy, depending on treatment and dose.",
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
      "Pricing may start around £134 for Mounjaro and £99 for Wegovy, with higher doses costing more.",
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
      "Listed prices currently appear to start around £179.99 for Mounjaro and £129.99 for Wegovy, excluding any potential delivery or consultation costs that may apply at checkout.",
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
      "Pricing may start around £159 per month for Mounjaro and £109 per month for Wegovy, depending on programme structure.",
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
      "Costs may start around £139.99 for Mounjaro, £89.99 for Wegovy, and £34.98 for Orlistat, depending on treatment and dosage.",
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
      "Costs may range from around £129–£269 initially for Mounjaro, and £79–£159 initially for Wegovy, with ongoing monthly costs varying by dose.",
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

const IQ_DOCTOR_FAQ: FaqItem[] = [
  {
    question: "Can I get Mounjaro through IQ Doctor?",
    answer:
      "Mounjaro may be available after an online consultation and prescriber review, if clinically appropriate.",
  },
  {
    question: "Does IQ Doctor offer Wegovy and Saxenda?",
    answer:
      "Yes. Wegovy and Saxenda are among the weight loss treatments commonly listed, subject to suitability and approval.",
  },
  {
    question: "How does delivery work at IQ Doctor?",
    answer:
      "Approved orders are typically dispatched via tracked carriers such as Royal Mail or DPD, with cold-chain packaging where required for injectables.",
  },
  {
    question: "How much does IQ Doctor weight loss treatment cost?",
    answer:
      "Indicative public pricing often starts around £174.99 for Mounjaro, £122.99 for Wegovy, and lower figures for tablets such as Orlistat — always confirm live prices on their site.",
  },
  {
    question: "Is IQ Doctor a regulated UK pharmacy service?",
    answer:
      "IQ Doctor presents as a UK-regulated online pathway with prescriber review and pharmacy dispensing; verify current registration details on the GPhC register before ordering.",
  },
  {
    question: "What happens if my prescription is not approved?",
    answer:
      "If a prescriber decides treatment is not suitable, the pathway is typically declined and patients are usually refunded rather than supplied.",
  },
];

const JUNIPER_FAQ: FaqItem[] = [
  {
    question: "Does Juniper offer Mounjaro and Wegovy?",
    answer:
      "Juniper’s programme commonly includes weekly injectable GLP-1 options such as Wegovy and Mounjaro where clinically appropriate after assessment.",
  },
  {
    question: "How does Juniper’s weight loss programme work?",
    answer:
      "Patients typically complete eligibility screening, attend a remote clinician consultation, receive a personalised plan if suitable, then receive medication and app-based support on a flexible monthly basis.",
  },
  {
    question: "How much does Juniper cost per month?",
    answer:
      "Public-facing figures often cite programme pricing from around £164 per month depending on medication and dose — confirm the latest quote on Juniper’s own site.",
  },
  {
    question: "Is Juniper a subscription?",
    answer:
      "Pricing is often described as monthly and flexible, without long-term lock-ins — patients can usually pause or cancel according to Juniper’s terms.",
  },
  {
    question: "How is medication delivered?",
    answer:
      "Medication is dispatched to a UK address via a courier network, with shipping and VAT commonly included in advertised prices.",
  },
  {
    question: "Is Juniper the same as buying from a standard online pharmacy?",
    answer:
      "Juniper positions itself as a broader programme combining prescribing, coaching, and digital tools — not only one-off dispensing.",
  },
];

const LIVE_WELL_WEIGHT_LOSS_FAQ: FaqItem[] = [
  {
    question: "Does Live Well Weight Loss offer Mounjaro and Wegovy?",
    answer:
      "Yes. The service focuses on GLP-1 injectables including Mounjaro and Wegovy, subject to pharmacist prescriber assessment.",
  },
  {
    question: "Is Live Well Weight Loss a GPhC-registered pharmacy?",
    answer:
      "The provider describes supply through a GPhC-registered UK pharmacy with specialist weight management oversight — always verify the current premises registration on the GPhC register.",
  },
  {
    question: "How much do Mounjaro and Wegovy pens cost at Live Well?",
    answer:
      "Public listings often show Mounjaro pens roughly £144–£289 and Wegovy roughly £105–£199 depending on strength — confirm live pricing before checkout.",
  },
  {
    question: "Is delivery discreet?",
    answer:
      "Live Well emphasises plain outer packaging and tracked delivery so patients can monitor arrival.",
  },
  {
    question: "Do I get ongoing support after the first prescription?",
    answer:
      "The service describes check-ins, dose adjustments where appropriate, and longer-term maintenance-style support for some patients.",
  },
  {
    question: "Can I compare Live Well with other UK pharmacies?",
    answer:
      "Yes. Use independent comparison tables and always cross-check eligibility, prescribing rules, and cold-chain delivery requirements on each provider’s site.",
  },
];

const LLOYDS_ONLINE_DOCTOR_FAQ: FaqItem[] = [
  {
    question: "Does Lloyds Pharmacy Online Doctor offer Mounjaro and Wegovy?",
    answer:
      "These GLP-1 injectables are commonly listed for suitable patients after an online consultation and clinician approval.",
  },
  {
    question: "How much is the consultation?",
    answer:
      "Public copy often cites new patient consultations from around £69.99 — confirm current fees and any promotions on the official site.",
  },
  {
    question: "Can I collect from a Lloyds Pharmacy store?",
    answer:
      "Same-day collection may be available from participating stores when stock allows; home delivery and ParcelShop options are also advertised.",
  },
  {
    question: "Is next-day delivery available?",
    answer:
      "Paid next-day style options are commonly offered when orders are approved in time on working days; standard free delivery may take longer.",
  },
  {
    question: "Are tablets like Orlistat available?",
    answer:
      "Yes. Oral options such as Orlistat and Xenical are typically part of the weight loss range, subject to suitability.",
  },
  {
    question: "Is messaging with clinicians included?",
    answer:
      "Materials describe ongoing messaging and follow-up within service hours — check live access rules before you rely on same-day replies.",
  },
];

const LOTUS_WEIGHT_LOSS_FAQ: FaqItem[] = [
  {
    question: "Does Lotus offer Mounjaro and Wegovy?",
    answer:
      "Lotus markets weekly GLP-1 injectables including Wegovy and Mounjaro where clinically appropriate after assessment.",
  },
  {
    question: "Is Lotus CQC registered?",
    answer:
      "Lotus describes registration with the Care Quality Commission for regulated activities — verify the latest registration entry on the CQC website.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Marketing often references free next-working-day dispatch for orders placed before a weekday cut-off — remote areas may take longer.",
  },
  {
    question: "Does Lotus deliver to PO Boxes?",
    answer:
      "Public terms commonly exclude PO Boxes and parcel lockers; use a residential or workplace address.",
  },
  {
    question: "What is The Lotus Programme?",
    answer:
      "It is a structured 12-week support layer with tracking tools, meal and movement guidance, and community access — often sold alongside or separately from medication.",
  },
  {
    question: "Is Orlistat available without injections?",
    answer:
      "Yes. Oral Orlistat may suit patients who are not ready for injectables, subject to prescriber approval.",
  },
];

const MEDEXPRESS_FAQ: FaqItem[] = [
  {
    question: "Can I get Mounjaro or Wegovy from MedExpress?",
    answer:
      "MedExpress lists GLP-1 weight loss medicines for eligible patients following online consultation and clinician review.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard options are often quoted around 1–3 days after dispatch, with express next-day tiers where offered — see checkout for your basket.",
  },
  {
    question: "Are injectables sent cold?",
    answer:
      "Temperature-sensitive lines are typically shipped in refrigerated or insulated packaging; follow product storage instructions on arrival.",
  },
  {
    question: "Does MedExpress sell Orlistat and Xenical?",
    answer:
      "Oral fat-absorption medicines are commonly available alongside injectable options, depending on medical suitability.",
  },
  {
    question: "Is the consultation fully online?",
    answer:
      "Yes. The pathway is designed so suitable patients do not need a face-to-face GP or pharmacy visit for prescribing decisions.",
  },
  {
    question: "Are delivery fees separate from medication?",
    answer:
      "Delivery bands are usually shown at checkout — factor them into total monthly cost alongside consultation and medication.",
  },
];

const MEDICINE_MARKETPLACE_FAQ: FaqItem[] = [
  {
    question: "Is Medicine Market Place a UK pharmacy?",
    answer:
      "The operator presents as a UK-based digital pharmacy with superintendent pharmacist oversight — verify registration details on the GPhC register before ordering.",
  },
  {
    question: "Does it sell prescription weight loss medicines?",
    answer:
      "Prescription lines typically require an online consultation and approval; OTC supplements and aids may be sold without a prescription where legal.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Many orders dispatch within 1–2 working days with tracked carriers; allow roughly 3–5 working days end-to-end depending on stock and location.",
  },
  {
    question: "Is there free delivery?",
    answer:
      "Threshold-based free delivery is often advertised for orders over a minimum value — cold-chain items may be excluded.",
  },
  {
    question: "Can I track my parcel?",
    answer:
      "Tracked services are commonly used; tracking numbers usually appear in dispatch emails.",
  },
  {
    question: "Why might verification take longer?",
    answer:
      "Some prescription journeys include extra ID or health checks — slower onboarding can reflect safety screening rather than delay for its own sake.",
  },
];

const MEDICSPOT_FAQ: FaqItem[] = [
  {
    question: "Does Medicspot offer Mounjaro?",
    answer:
      "Medicspot markets GLP-1 class programmes including Mounjaro where clinically appropriate after assessment and ongoing review.",
  },
  {
    question: "Is Medicspot fully online?",
    answer:
      "Consultation, prescribing decisions, coaching touchpoints, and delivery are designed to be remote-first with secure messaging and tracked home delivery.",
  },
  {
    question: "How does billing work?",
    answer:
      "Public materials often describe 28-day subscription cycles for medication — confirm cancellation rules and what each renewal includes on the official site.",
  },
  {
    question: "Will I need my NHS GP details?",
    answer:
      "Medicspot’s model may ask for GP or Summary Care Record context so prescribers can check safety — have accurate practice details ready.",
  },
  {
    question: "Can I return medication after dispatch?",
    answer:
      "Prescription medicines generally cannot be returned once dispatched — eligibility and address accuracy matter before approval.",
  },
  {
    question: "What support is included beyond the pen?",
    answer:
      "Coaching, behaviour-change content, and community channels are commonly bundled to support adherence, not only the drug itself.",
  },
];

const MEDINO_FAQ: FaqItem[] = [
  {
    question: "How does Medino supply prescription weight loss medicines?",
    answer:
      "Medino describes pharmacist-led pathways, including PGD supply where legally permitted, so eligible patients can access certain medicines without a traditional GP prescription.",
  },
  {
    question: "Is delivery free?",
    answer:
      "Marketing often highlights free next-day delivery on many lines — confirm your basket and product rules at checkout.",
  },
  {
    question: "What treatments might be available?",
    answer:
      "Ranges can include weekly injectables (semaglutide/tirzepatide-class), daily injectables, and oral fat-absorption medicines — subject to assessment.",
  },
  {
    question: "What if I am not suitable?",
    answer:
      "Responsible providers decline supply when unsafe; Medino states unsuitable orders may be refunded rather than fulfilled.",
  },
  {
    question: "Are prices all-inclusive?",
    answer:
      "Many SKUs bundle consultation, medicine, and delivery into a headline price — still verify what your chosen pack includes.",
  },
  {
    question: "How fast after approval?",
    answer:
      "Many patients receive orders within roughly 24–48 hours of approval when stock and couriers align — not a guarantee for every postcode.",
  },
];

const MSH_WEIGHT_LOSS_FAQ: FaqItem[] = [
  {
    question: "Does MSH Weight Loss offer Wegovy and Mounjaro?",
    answer:
      "MSH advertises semaglutide and tirzepatide programmes alongside some oral options, subject to prescriber approval and titration plans.",
  },
  {
    question: "How is medication delivered?",
    answer:
      "DPD signed-for next-day delivery is commonly described, with cold-chain packaging for injectables and Monday–Friday dispatch norms.",
  },
  {
    question: "What is the 28-day subscription?",
    answer:
      "Billing and resupply often align to four-week cycles with wellbeing surveys — read current Ts&Cs for pause, cancel, and admin fees.",
  },
  {
    question: "Are weekend deliveries available?",
    answer:
      "Some marketing references weekend delivery surcharges — optional extras rather than the default NHS-style weekday drop.",
  },
  {
    question: "What roughly does it cost per month?",
    answer:
      "Illustrative bands in public copy often sit roughly £129–£319 depending on molecule and dose — always confirm live checkout pricing.",
  },
  {
    question: "Why signature on delivery?",
    answer:
      "Signed receipt helps prove cold-chain handover and reduces porch theft risk for high-value prescription lines.",
  },
];

const MY_LONDON_PHARMACY_FAQ: FaqItem[] = [
  {
    question: "Is My London Pharmacy UK-regulated?",
    answer:
      "It presents as a UK online pharmacy with clinician review — verify the supplying premises on the GPhC register before first order.",
  },
  {
    question: "How fast is delivery?",
    answer:
      "Next-working-day style delivery is commonly advertised after approval, subject to stock and courier cut-offs.",
  },
  {
    question: "Do I need a long consultation?",
    answer:
      "Marketing cites a short digital questionnaire for suitable patients; complex histories may need more back-and-forth.",
  },
  {
    question: "What medicines are focused on?",
    answer:
      "Modern GLP-1/GIP injectable pathways are central in marketing, alongside personalised plans — suitability is clinician-decided.",
  },
  {
    question: "Is there a patient portal?",
    answer:
      "Materials describe online tools for progress, messaging, and prescription management — feature depth may vary by plan.",
  },
  {
    question: "Does the name mean London-only?",
    answer:
      "Despite the brand, nationwide home delivery is typically offered — rurality may add a day versus urban next-day claims.",
  },
];

const NEXT_SCRIPT_FAQ: FaqItem[] = [
  {
    question: "Does Next Script offer Mounjaro, Wegovy and Saxenda?",
    answer:
      "Public listings commonly include GLP-1 weekly injectables and Saxenda-style options subject to clinician approval after your questionnaire and checks.",
  },
  {
    question: "Why is there a video consultation on first order?",
    answer:
      "A short video call is often used to verify identity and clinical details for new patients — repeat orders may be faster once you are established.",
  },
  {
    question: "How fast is delivery after approval?",
    answer:
      "Marketing often cites dispatch within about 24–48 hours on working days, with delivery in a few further working days — stock and verification can shift timelines.",
  },
  {
    question: "Is Next Script GPhC-registered?",
    answer:
      "The service presents as a UK-registered pharmacy pathway — always confirm the current premises on the GPhC register before ordering.",
  },
  {
    question: "What proof might I need to upload?",
    answer:
      "ID, weight evidence, or prior prescription copies may be requested so prescribers can meet UK regulatory expectations for high-risk medicines.",
  },
  {
    question: "Are prices bundled?",
    answer:
      "Many SKUs bundle consultation, review, and medicine — compare headline totals against split-fee competitors.",
  },
];

const NULIFE_PHARMACY_FAQ: FaqItem[] = [
  {
    question: "Is NuLife Pharmacy only medication?",
    answer:
      "Marketing describes a management programme with consultation, medicines where appropriate, nutrition resources, and follow-up rather than a single checkout item.",
  },
  {
    question: "How does delivery work?",
    answer:
      "Plain packaging, temperature control where needed, and signed-for courier delivery are commonly described — someone usually needs to be available to sign.",
  },
  {
    question: "Can I change my delivery date?",
    answer:
      "Some flows let you pick a preferred day; changes inside 48 hours of dispatch may be restricted — read live Ts&Cs.",
  },
  {
    question: "What if I need extra clinical checks?",
    answer:
      "Additional questions can add a day or two — that delay reflects safety screening, not poor service by default.",
  },
  {
    question: "Are refunds possible if unsuitable?",
    answer:
      "Responsible clinics often refund when treatment cannot be supplied; dispensed medicines generally cannot be returned under UK rules.",
  },
  {
    question: "Who reviews my case?",
    answer:
      "Pharmacist-led review is commonly stated — verify professional credentials and registration on site.",
  },
];

const NUMAN_FAQ: FaqItem[] = [
  {
    question: "Does Numan offer Wegovy and Mounjaro?",
    answer:
      "Numan’s programme commonly centres on GLP-1 weekly injectables and dual incretin options where clinically appropriate after assessment.",
  },
  {
    question: "How does the subscription work?",
    answer:
      "Many plans bill on a ~28-day cycle with automated resupply and tracking — pause, cancel, or reschedule options depend on current account tools and terms.",
  },
  {
    question: "Is the first assessment free?",
    answer:
      "Marketing often describes a free initial eligibility assessment — confirm whether medication fees apply only after approval.",
  },
  {
    question: "How is medication delivered?",
    answer:
      "Royal Mail-style discreet home delivery with notifications is commonly advertised, with cold-chain awareness for injectables.",
  },
  {
    question: "What support is included?",
    answer:
      "Coaching, in-app messaging, and clinician access are typical differentiators versus bare pharmacy listings.",
  },
  {
    question: "What does monthly pricing cover?",
    answer:
      "Bundles may include medicine, reviews, coaching, and delivery — read the basket breakdown for your dose tier.",
  },
];

const ONLINEMEDS_FAQ: FaqItem[] = [
  {
    question: "Who prescribes at Onlinemeds?",
    answer:
      "Public copy describes pharmacist prescribers reviewing questionnaires before supply from a UK-registered pharmacy.",
  },
  {
    question: "Is delivery free?",
    answer:
      "Marketing often highlights free tracked UK delivery — confirm at checkout for your product and postcode.",
  },
  {
    question: "Which medicines are listed?",
    answer:
      "GLP-1 injectables such as Wegovy and Mounjaro plus orals like Orlistat commonly appear, subject to suitability.",
  },
  {
    question: "Is follow-up included?",
    answer:
      "Materials describe ongoing support, side-effect guidance, and dose titration within clinical rules rather than one-off dispensing only.",
  },
  {
    question: "How discreet is packaging?",
    answer:
      "Plain outer cartons without obvious branding are a recurring theme for privacy-sensitive categories.",
  },
  {
    question: "How does pricing compare?",
    answer:
      "Bundled consultation, prescription, medicine, and delivery can simplify totals versus itemised clinic bills — still compare live quotes.",
  },
];

const OUSHK_FAQ: FaqItem[] = [
  {
    question: "How does Oushk verify new patients?",
    answer:
      "A structured pathway often includes online forms plus video verification of identity and metrics before prescribing.",
  },
  {
    question: "Can I schedule delivery in advance?",
    answer:
      "Marketing references choosing delivery dates and courier options — useful if you need signature availability.",
  },
  {
    question: "Does Oushk offer next-day delivery?",
    answer:
      "Next-day UK delivery is commonly advertised for many orders after approval — remote areas or stock issues may differ.",
  },
  {
    question: "Is Oushk GPhC-registered?",
    answer:
      "The brand presents as a UK pharmacy with prescriber oversight — verify premises and superintendent details on the GPhC register.",
  },
  {
    question: "What treatments are in scope?",
    answer:
      "Injectable GLP-1 pathways and oral options such as fat-absorption tablets may be listed depending on assessment outcome.",
  },
  {
    question: "What if delivery fails?",
    answer:
      "Couriers may redeliver or return to pharmacy; small redelivery fees sometimes apply — read courier comms quickly for cold-chain items.",
  },
];

const PHARMACY_ADVANCE_FAQ: FaqItem[] = [
  {
    question: "How does the Pharmacy Advance online weight-loss pathway work?",
    answer:
      "Typical flow: secure questionnaire (health, BMI, meds), pharmacist or prescriber review, then dispensing and UK delivery in discreet packaging if suitable — timelines vary by stock and cut-offs.",
  },
  {
    question: "Which GLP-1 treatments might be offered?",
    answer:
      "Marketing often lists Mounjaro (tirzepatide), Wegovy (semaglutide), and Saxenda (liraglutide) for eligible patients — availability and titration follow prescriber decision, not marketing copy.",
  },
  {
    question: "Is cold-chain delivery mentioned for injectables?",
    answer:
      "Yes — injectable pens are often shipped with 2–8°C packaging claims; still minimise time at room temperature and follow the leaflet inside the pack.",
  },
  {
    question: "How fast is delivery after approval?",
    answer:
      "Public timelines often cite ~1–2 days processing plus ~1–3 working days tracked delivery (Royal Mail-style) — remote postcodes, bank holidays, or stock can extend this.",
  },
  {
    question: "Is Pharmacy Advance GPhC-registered?",
    answer:
      "The brand presents as a UK pharmacy — always verify the exact premises and superintendent pharmacist on the GPhC register before you rely on any claim.",
  },
  {
    question: "What about ongoing reviews?",
    answer:
      "Responsible providers schedule follow-ups for side effects, dose changes, and progress — confirm what Pharmacy Advance includes for your product on their current service page.",
  },
];

const PHARMACY2U_FAQ: FaqItem[] = [
  {
    question: "What regulation applies to Pharmacy2U’s online doctor service?",
    answer:
      "Pharmacy2U commonly advertises GPhC pharmacy registration plus CQC oversight for regulated activities — verify current registration badges and entries on official registers.",
  },
  {
    question: "Which weight-loss medicines appear in marketing?",
    answer:
      "Typical listings include Mounjaro, Wegovy, Saxenda, and sometimes Orlistat — suitability is decided only after clinician review of your questionnaire.",
  },
  {
    question: "How fast can orders arrive?",
    answer:
      "Marketing references rapid clinician review (sometimes within hours) and next-day style courier delivery after dispatch — cut-off times and product lines affect real dates.",
  },
  {
    question: "What delivery fees are quoted for online doctor weight loss?",
    answer:
      "Their online doctor weight-loss lane often quotes express delivery around £6.25 per order — always confirm live postage at checkout because tiers change.",
  },
  {
    question: "Is there a two-month supply option?",
    answer:
      "Pharmacy2U sometimes advertises a two-month supply for existing patients after reassessment — eligibility is clinical, not automatic.",
  },
  {
    question: "Who might be eligible?",
    answer:
      "Common UK private criteria are BMI ≥30, or ≥27 with weight-related comorbidities — the prescriber makes the final decision and may refuse if unsafe.",
  },
];

const PHARMICA_FAQ: FaqItem[] = [
  {
    question: "How does Pharmica’s consultation work?",
    answer:
      "You usually complete a short online questionnaire, then a pharmacist-led suitability check before any prescription-only treatment is supplied — exact steps are on Pharmica’s live flow.",
  },
  {
    question: "What delivery options does Pharmica advertise?",
    answer:
      "Marketing lists first-class, tracked 24h, guaranteed next-day windows, and even same-day courier in parts of London — pricing and cut-offs differ by service level.",
  },
  {
    question: "Is packaging discreet?",
    answer:
      "Pharmica promotes plain outer packaging and confidential handling — still treat all prescription parcels as sensitive until you open them.",
  },
  {
    question: "What price bands are mentioned?",
    answer:
      "Illustrative public price copy ranges from low tens of pounds for some capsules up through £100+ bands for injectable programmes — use Health Wise comparisons and the provider checkout for live numbers.",
  },
  {
    question: "How should I verify Pharmica’s credentials?",
    answer:
      "Cross-check GPhC pharmacy registration, superintendent details, and any distance-selling badges shown on-site — do not rely on third-party summaries alone.",
  },
  {
    question: "Does Pharmica include the private prescription fee in the headline?",
    answer:
      "Many SKUs are advertised as including consultation/prescription in the bundle — read the basket breakdown to see what is itemised.",
  },
];

const PILLS2U_FAQ: FaqItem[] = [
  {
    question: "What is Pills2U’s high-level process?",
    answer:
      "Choose a treatment line, complete a medical questionnaire, wait for a licensed prescriber decision, then pharmacy dispensing and tracked UK delivery — speed depends on review queues and cut-offs.",
  },
  {
    question: "Which injectables are commonly listed?",
    answer:
      "Marketing emphasises Mounjaro and Wegovy for suitable adults — Saxenda or tablets may or may not appear seasonally; check the live catalogue.",
  },
  {
    question: "How quickly can parcels arrive?",
    answer:
      "Public marketing mentions same-day review in many cases, dispatch within about 24 hours of approval, and next-day delivery where couriers allow — not guaranteed for every postcode.",
  },
  {
    question: "Is pricing all-inclusive?",
    answer:
      "Some bundles are described as covering consultation, prescription, medication, and delivery — still compare against Health Wise tables because dose strength dominates monthly cost.",
  },
  {
    question: "Is Pills2U a regulated UK pharmacy?",
    answer:
      "The brand presents as UK-based with prescriber oversight — verify the current GPhC entry, address, and responsible pharmacist before ordering.",
  },
  {
    question: "What if I need temperature-controlled shipping?",
    answer:
      "For GLP-1 pens, ask the pharmacy how they pack cold chain, what to do if delivery is delayed, and how long the pen may sit at room temperature per the PIL.",
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
    "Asda Online Doctor weight loss (UK) — Mounjaro, Wegovy, Saxenda guide";
  const description =
    "How Asda Online Doctor works: online consultation, UK prescribers, Mounjaro and Wegovy pricing context, delivery and FAQs. Information from Health Wise — not medical advice.";

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
    "AYP Healthcare weight management (UK) — Mounjaro, Wegovy, online review";
  const description =
    "How AYP Healthcare online weight management works: consultations, Mounjaro and Wegovy context, delivery, monitoring and FAQs. Information from Health Wise — not medical advice.";

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
    "Bolt Pharmacy weight loss (UK) — Mounjaro, Wegovy, online review";
  const description =
    "Bolt Pharmacy: online weight loss, Mounjaro, Wegovy and Saxenda context, delivery, pricing and FAQs. Information from Health Wise — not medical advice.";

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
    "Cloud Pharmacy weight loss review (UK) — Mounjaro, Wegovy, online prescribing";
  const description =
    "Cloud Pharmacy: online consultation, Mounjaro and Wegovy context, delivery and temperature handling, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
    "Curely weight loss review (UK) — Mounjaro, Wegovy, online prescribing";
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
    "Envigore weight loss review (UK) — Mounjaro, Wegovy, clinician-led support";
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
    "Farmeci weight loss review (UK) — Mounjaro, Wegovy, clinician-supervised support";
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
    "Fylde Clinic weight loss review (UK) — Mounjaro, Wegovy, clinician-led support";
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
    "Genmeds weight loss review (UK) — Mounjaro, Wegovy, pharmacy-led access";
  const description =
    "Genmeds: UK-registered online pharmacy, listed Mounjaro and Wegovy prices, accessories, delivery notes and FAQs. Information from Health Wise — not medical advice.";

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
    "GetADrip weight loss review (UK) — Mounjaro, Wegovy, programme support";
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
    "Happy Pharmacy weight loss review (UK) — Mounjaro, Wegovy, GPhC pharmacy";
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
    "Hey Slim weight loss review (UK) — Mounjaro, Wegovy, clinician-led";
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
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — IQ Doctor.
 */
export function iqDoctorPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/iq-doctor";
  const url = `${origin}${path}`;
  const name =
    "IQ Doctor weight loss review (UK) — Mounjaro, Wegovy, tablets, delivery";
  const description =
    "IQ Doctor: online consultation, prescriber review, Royal Mail/DPD delivery, cold chain, indicative pricing and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "IQ Doctor", item: url },
      ]),
      {
        ...faqPageEntity(IQ_DOCTOR_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Juniper.
 */
export function juniperPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/juniper";
  const url = `${origin}${path}`;
  const name =
    "Juniper weight loss review (UK) — Mounjaro, Wegovy, programme & app";
  const description =
    "Juniper: remote clinician consultation, monthly programme, app and coaching, UK delivery and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Juniper", item: url },
      ]),
      {
        ...faqPageEntity(JUNIPER_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Live Well Weight Loss.
 */
export function liveWellWeightLossPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/live-well-weight-loss";
  const url = `${origin}${path}`;
  const name =
    "Live Well Weight Loss review (UK) — Mounjaro, Wegovy, GPhC pharmacy";
  const description =
    "Live Well Weight Loss: pharmacist prescriber assessment, transparent pen pricing, discreet tracked delivery, reviews context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Live Well Weight Loss", item: url },
      ]),
      {
        ...faqPageEntity(LIVE_WELL_WEIGHT_LOSS_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Lloyds Pharmacy Online Doctor.
 */
export function lloydsPharmacyOnlineDoctorLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/lloyds-pharmacy-online-doctor";
  const url = `${origin}${path}`;
  const name =
    "Lloyds Pharmacy Online Doctor weight loss (UK) — Mounjaro, Wegovy, tablets";
  const description =
    "Lloyds Online Doctor: clinician questionnaire, injections and tablets, delivery and collection options, consultation and medication pricing context. Information from Health Wise — not medical advice.";

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
        { name: "Lloyds Pharmacy Online Doctor", item: url },
      ]),
      {
        ...faqPageEntity(LLOYDS_ONLINE_DOCTOR_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Lotus Weight Loss.
 */
export function lotusWeightLossPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/lotus-weight-loss";
  const url = `${origin}${path}`;
  const name =
    "Lotus Weight Loss review (UK) — Mounjaro, Wegovy, CQC clinic, programme";
  const description =
    "Lotus Weight Loss: CQC-registered pathway, GLP-1 injectables, Orlistat, Lotus Programme, discreet next-day delivery and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Lotus Weight Loss", item: url },
      ]),
      {
        ...faqPageEntity(LOTUS_WEIGHT_LOSS_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — MedExpress.
 */
export function medExpressPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/medexpress";
  const url = `${origin}${path}`;
  const name =
    "MedExpress weight loss review (UK) — Mounjaro, Wegovy, online pharmacy";
  const description =
    "MedExpress: regulated online consultation, GLP-1 and oral options, discreet delivery tiers, indicative fees and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "MedExpress", item: url },
      ]),
      {
        ...faqPageEntity(MEDEXPRESS_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Medicine Market Place.
 */
export function medicineMarketplacePharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/medicine-marketplace";
  const url = `${origin}${path}`;
  const name =
    "Medicine Market Place review (UK) — online pharmacy, weight loss, delivery";
  const description =
    "Medicine Market Place: Preston-based digital pharmacy, weight loss category, tracked delivery, free delivery thresholds and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Medicine Market Place", item: url },
      ]),
      {
        ...faqPageEntity(MEDICINE_MARKETPLACE_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Medicspot.
 */
export function medicspotPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/medicspot";
  const url = `${origin}${path}`;
  const name =
    "Medicspot weight loss review (UK) — Mounjaro, coaching, subscription";
  const description =
    "Medicspot: clinician assessment, NHS record checks, health coaching, 28-day billing, discreet delivery and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Medicspot", item: url },
      ]),
      {
        ...faqPageEntity(MEDICSPOT_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Medino.
 */
export function medinoPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/medino";
  const url = `${origin}${path}`;
  const name =
    "Medino weight loss review (UK) — pharmacist supply, PGD, fast delivery";
  const description =
    "Medino: online questionnaire, pharmacist review, PGD pathways where applicable, inclusive pricing bands, next-day delivery and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Medino", item: url },
      ]),
      {
        ...faqPageEntity(MEDINO_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — MSH Weight Loss.
 */
export function mshWeightLossPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/msh-weight-loss";
  const url = `${origin}${path}`;
  const name =
    "MSH Weight Loss review (UK) — Mounjaro, Wegovy, nurse support, DPD";
  const description =
    "MSH Weight Loss: 28-day subscription, DPD signed delivery, cold chain, wellbeing surveys, illustrative monthly pricing and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "MSH Weight Loss", item: url },
      ]),
      {
        ...faqPageEntity(MSH_WEIGHT_LOSS_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — My London Pharmacy.
 */
export function myLondonPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/my-london-pharmacy";
  const url = `${origin}${path}`;
  const name =
    "My London Pharmacy weight loss review (UK) — GLP-1, next-day delivery";
  const description =
    "My London Pharmacy: quick online assessment, GLP-1 pathways, discreet tracked delivery, portal support, pricing context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "My London Pharmacy", item: url },
      ]),
      {
        ...faqPageEntity(MY_LONDON_PHARMACY_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Next Script.
 */
export function nextScriptPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/next-script";
  const url = `${origin}${path}`;
  const name =
    "Next Script weight loss review (UK) — Wegovy, Mounjaro, Saxenda, video consult";
  const description =
    "Next Script: online questionnaire, document upload, first-order video consult, GPhC pharmacy supply, discreet delivery, pricing bands and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Next Script", item: url },
      ]),
      {
        ...faqPageEntity(NEXT_SCRIPT_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Nulife Pharmacy.
 */
export function nulifePharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/nulife-pharmacy";
  const url = `${origin}${path}`;
  const name =
    "NuLife Pharmacy weight loss review (UK) — programme, GLP-1, signed delivery";
  const description =
    "NuLife Pharmacy: regulated pathway, weight management programme, pharmacist review, discreet signed delivery, support layer and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "NuLife Pharmacy", item: url },
      ]),
      {
        ...faqPageEntity(NULIFE_PHARMACY_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Numan.
 */
export function numanPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/numan";
  const url = `${origin}${path}`;
  const name =
    "Numan weight loss review (UK) — Wegovy, Mounjaro, subscription, coaching";
  const description =
    "Numan: digital assessment, personalised GLP-1 plans, coaching, 28-day deliveries, Royal Mail discreet shipping, subscription pricing and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Numan", item: url },
      ]),
      {
        ...faqPageEntity(NUMAN_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — OnlineMeds.
 */
export function onlinemedsPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/onlinemeds";
  const url = `${origin}${path}`;
  const name =
    "OnlineMeds weight loss review (UK) — Wegovy, Mounjaro, pharmacist prescribers";
  const description =
    "OnlineMeds: specialist weight-loss pharmacy, pharmacist prescriber review, free tracked delivery, discreet packaging, Orlistat and GLP-1 context and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "OnlineMeds", item: url },
      ]),
      {
        ...faqPageEntity(ONLINEMEDS_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Oushk Pharmacy.
 */
export function oushkPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/oushk";
  const url = `${origin}${path}`;
  const name =
    "Oushk Pharmacy weight loss review (UK) — online doctor, GLP-1, delivery";
  const description =
    "Oushk Pharmacy: video-verified pathway, UK prescribers, GLP-1 and oral options, DPD/Royal Mail delivery choices, scheduling and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Oushk Pharmacy", item: url },
      ]),
      {
        ...faqPageEntity(OUSHK_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Pharmacy Advance.
 */
export function pharmacyAdvancePharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/pharmacy-advance";
  const url = `${origin}${path}`;
  const name =
    "Pharmacy Advance weight loss review (UK) — Mounjaro, Wegovy, consultation, delivery";
  const description =
    "Pharmacy Advance: online questionnaire, prescriber/pharmacist review, GLP-1 injectables, tracked discreet delivery, cold-chain claims and cost context. Information from Health Wise — not medical advice.";

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
        { name: "Pharmacy Advance", item: url },
      ]),
      {
        ...faqPageEntity(PHARMACY_ADVANCE_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Pharmacy2U.
 */
export function pharmacy2uPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/pharmacy2u";
  const url = `${origin}${path}`;
  const name =
    "Pharmacy2U weight loss review (UK) — Mounjaro, Wegovy, online doctor, delivery";
  const description =
    "Pharmacy2U: GPhC/CQC-regulated presentation, online doctor questionnaire, GLP-1 options, express delivery fees, two-month supply notes and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Pharmacy2U", item: url },
      ]),
      {
        ...faqPageEntity(PHARMACY2U_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Pharmica.
 */
export function pharmicaPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/pharmica";
  const url = `${origin}${path}`;
  const name =
    "Pharmica weight loss review (UK) — Mounjaro, Wegovy, delivery tiers, pricing";
  const description =
    "Pharmica: pharmacist-led checks, wide delivery tier options, discreet packaging claims, capsule and injectable ranges, and cost context. Information from Health Wise — not medical advice.";

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
        { name: "Pharmica", item: url },
      ]),
      {
        ...faqPageEntity(PHARMICA_FAQ),
        "@id": `${url}#faq`,
        url,
      },
    ],
  };
}

/**
 * JSON-LD @graph: WebSite, WebPage, BreadcrumbList, FAQPage — Pills2U.
 */
export function pills2uPharmacyLandingJsonGraph(): Record<string, unknown> {
  const origin = siteOrigin();
  const path = "/pharmacies/pills2u";
  const url = `${origin}${path}`;
  const name =
    "Pills2U weight loss review (UK) — Mounjaro, Wegovy, prescriber review, delivery";
  const description =
    "Pills2U: online questionnaire, licensed prescriber review, GLP-1 injectables, fast tracked delivery claims, bundled pricing notes and FAQs. Information from Health Wise — not medical advice.";

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
        { name: "Pills2U", item: url },
      ]),
      {
        ...faqPageEntity(PILLS2U_FAQ),
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
    "Ashcroft Pharmacy weight loss (UK) — Mounjaro, Wegovy, review & guide";
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
