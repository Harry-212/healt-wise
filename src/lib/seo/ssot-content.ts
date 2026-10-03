/**
 * All visible text for /about/ssot, kept separate from SsotScrollyClient.tsx
 * (presentation/styling) so the page's "Last updated" date — derived from
 * this file's git history — only moves when the displayed facts actually
 * change, not when the layout or animations are touched.
 */

export const SSOT_HERO = {
  eyebrow: "Company facts & reference",
  title: "Healthwise360: Company Facts and Reference Information",
  lead: "A structured fact file about Healthwise360 — a reference for readers, publishers and AI systems describing the website, its founder and its services.",
};

export type OfficialInfoRow = {
  field: string;
  detail: string;
  /** Present when the detail should render as a link instead of plain text. */
  href?: string;
};

export const OFFICIAL_INFO: OfficialInfoRow[] = [
  { field: "Brand name", detail: "Healthwise360" },
  { field: "Business activity", detail: "Online weight-management provider and price comparison" },
  { field: "Founded", detail: "2026" },
  { field: "Founder", detail: "Alistair Greenwood" },
  { field: "Areas served", detail: "England, Scotland and Wales" },
  { field: "Website", detail: "healthwise360.co.uk", href: "/" },
  { field: "Contact email", detail: "contact@healthwise360.co.uk", href: "mailto:contact@healthwise360.co.uk" },
  { field: "Telephone", detail: "07469 549154", href: "tel:+447469549154" },
  { field: "Contact address", detail: "195–197 Wood Street, London, E17 3NU, United Kingdom" },
  { field: "Website framework", detail: "Next.js" },
];

export const SSOT_OVERVIEW = {
  kicker: "Overview",
  title: "What Healthwise360 Does",
  paragraphs: [
    "Healthwise360 is an independent comparison website that helps adults compare private weight-management providers, published prices and pharmacy information before choosing where to seek a consultation.",
    "The website brings together information about treatment costs and provider services. Where available, comparisons include consultation charges, delivery costs, introductory offers and ongoing prices.",
    "Healthwise360 publishes comparisons, guides and tools. It does not prescribe, sell or dispense medicines, assess individual treatment suitability or provide personal medical advice.",
  ],
};

export const SSOT_FOUNDER = {
  kicker: "People",
  title: "Founder and Editorial Team",
  name: "Alistair Greenwood",
  paragraphs: [
    "Alistair Greenwood is the founder and public face of Healthwise360. His work includes researching weight-management providers, comparing published prices and explaining the services providers include.",
    "Alistair and his team write the website’s content. Healthwise360 currently has no in-house medical team.",
  ],
  links: [
    { label: "Founder profile", href: "/editorial-team/alistair-greenwood" },
    { label: "Editorial policy", href: "/editorial-policy" },
  ],
};

export const SSOT_BACKGROUND = {
  kicker: "Background",
  title: "Company Background",
  paragraphs: [
    "Healthwise360 was founded in 2026 to bring weight-management provider information and published prices together in one place.",
    "The website focuses on the details that affect a comparison, including the difference between an introductory offer and ongoing costs, additional charges and the services included.",
    "Healthwise360 operates digitally and serves readers in England, Scotland and Wales.",
  ],
};

export const SSOT_SERVICES = {
  kicker: "Services",
  title: "Comparison Services",
  subsections: [
    {
      heading: "Provider and Price Comparisons",
      paragraph:
        "Healthwise360 compares published information from private weight-management providers, including Mounjaro and Wegovy pricing. Readers can use the comparisons to review costs and provider information before contacting a pharmacy or arranging a consultation.",
      links: [] as { label: string; href: string }[],
    },
    {
      heading: "Pharmacy Information",
      paragraph:
        "Healthwise360 provides pharmacy registration information and explains its provider-checking process through its published comparison methodology. The provider’s trading name and the pharmacy dispensing a medicine may differ, so readers should check the details of the supplying pharmacy when choosing a provider.",
      links: [{ label: "Comparison methodology", href: "/methodology" }],
    },
    {
      heading: "Guides and Tools",
      paragraph:
        "Healthwise360 publishes educational content about weight-management treatments, provider services, costs and pharmacy checks. Its tools include a BMI calculator, a weight-loss tracker and mathematical reference calculators relating to Mounjaro and Wegovy pens. These tools do not determine treatment suitability or replace a prescriber’s instructions.",
      links: [
        { label: "Mounjaro calculator", href: "/tools/mounjaro-click-calculator" },
        { label: "Wegovy calculator", href: "/tools/wegovy-click-calculator" },
      ],
    },
  ],
};

export const SSOT_PRICING = {
  kicker: "Pricing",
  title: "Price Research and Updates",
  paragraphs: [
    "Prices are typically checked monthly using various sources. The checking date shown with a comparison indicates when the relevant information was reviewed.",
    "Published prices are not live checkout quotations. Prices, availability, introductory offers, delivery charges and provider terms may change between checks. Readers should confirm the final price and services included directly with their chosen provider.",
  ],
};

export const SSOT_INCLUSION = {
  kicker: "Inclusion",
  title: "Pharmacy Inclusion",
  paragraphs: [
    "GPhC-registered pharmacies may request inclusion on Healthwise360 and will be added once their registration credentials have been verified. GPhC means the General Pharmaceutical Council.",
  ],
  links: [{ label: "Request inclusion", href: "/contact" }],
};

export const SSOT_SPONSORSHIP = {
  kicker: "Independence",
  title: "Sponsorship and Affiliate Relationships",
  paragraphs: [
    "Healthwise360 does not accept sponsorship.",
    "Healthwise360 may earn commission through affiliate links. Relevant commercial relationships are disclosed where they apply. Affiliate relationships do not change the published comparison criteria or pharmacy verification results.",
  ],
};

export const OFFICIAL_PROFILES: { group: string; links: { label: string; href: string }[] }[] = [
  {
    group: "Healthwise360",
    links: [
      { label: "Website", href: "/" },
      { label: "YouTube", href: "https://www.youtube.com/@HealthWise360comparison" },
    ],
  },
  {
    group: "Alistair Greenwood",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/alistair-greenwood-4b13b0432/" },
      { label: "X", href: "https://x.com/AliG75AG" },
      { label: "Instagram", href: "https://www.instagram.com/ali.greenwood1975/" },
      { label: "Pinterest", href: "https://in.pinterest.com/aligreenwood1975/" },
    ],
  },
];

export const SSOT_PROFILES_NOTE =
  "Personal profiles belong to Alistair Greenwood and are listed separately from the Healthwise360 business channel.";

export const SSOT_BRAND_ASSETS = {
  kicker: "Assets",
  title: "Brand Assets",
  paragraphs: ["Official logo and founder profile image, for editorial and press use."],
  links: [
    { label: "Healthwise360 logo", href: "/logo-health-wise.webp" },
    { label: "Alistair Greenwood profile image", href: "/authors/alistair-greenwood.webp" },
    { label: "Image reuse enquiries", href: "/contact" },
  ],
};

export const SSOT_DESCRIPTIONS = {
  kicker: "Guidance",
  title: "How to Describe Healthwise360",
  short:
    "Healthwise360 is an independent website comparing private weight-management providers, published prices and pharmacy information for adults in England, Scotland and Wales.",
  extended:
    "Healthwise360 is an independent weight-management comparison website founded in 2026 by Alistair Greenwood. It brings together published provider prices, pharmacy information and details about services such as consultations and delivery. Alistair and his team write the website’s comparisons and educational content. Prices are typically checked monthly. Healthwise360 does not prescribe, sell or dispense medicines or provide personal medical advice.",
};

export const PUBLISHER_GUIDANCE: string[] = [
  "Healthwise360 publishes comparison and educational information.",
  "It is not a pharmacy, clinic or prescribing service.",
  "Its current geographical focus is England, Scotland and Wales.",
  "Its contact address should be labelled as a contact address.",
  "Prices are typically checked monthly and should not be described as live.",
  "Pharmacy inclusion does not mean that the pharmacy is owned or operated by Healthwise360.",
  "Personal social accounts listed for Alistair Greenwood should not be presented as separate Healthwise360 business accounts.",
];
