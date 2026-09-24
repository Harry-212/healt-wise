/**
 * Official UK and peer-reviewed sources for blog articles. Every URL was
 * checked on 24 Sep 2026 (NEJM papers via their DOI records, as nejm.org
 * blocks automated checks). Articles list further reading on the topics
 * they cover; they are not per-sentence citations.
 */
export type ArticleSource = {
  label: string;
  publisher: string;
  href: string;
};

const S = {
  nhsSemaglutide: {
    label: "Semaglutide: a medicine to manage type 2 diabetes or treat obesity",
    publisher: "NHS",
    href: "https://www.nhs.uk/medicines/semaglutide/",
  },
  nhsTirzepatide: {
    label: "Tirzepatide: a medicine to manage type 2 diabetes and treat obesity",
    publisher: "NHS",
    href: "https://www.nhs.uk/medicines/tirzepatide/",
  },
  nhsLiraglutide: {
    label: "Liraglutide: a medicine to treat type 2 diabetes or obesity",
    publisher: "NHS",
    href: "https://www.nhs.uk/medicines/liraglutide/",
  },
  emcWegovy: {
    label: "Wegovy FlexTouch — Summary of Product Characteristics",
    publisher: "Electronic Medicines Compendium (emc)",
    href: "https://www.medicines.org.uk/emc/product/13799/smpc",
  },
  emcMounjaro: {
    label: "Mounjaro KwikPen — Summary of Product Characteristics",
    publisher: "Electronic Medicines Compendium (emc)",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  emcSaxenda: {
    label: "Saxenda — Summary of Product Characteristics",
    publisher: "Electronic Medicines Compendium (emc)",
    href: "https://www.medicines.org.uk/emc/product/2313/smpc",
  },
  niceTa875: {
    label: "Semaglutide for managing overweight and obesity (TA875)",
    publisher: "NICE",
    href: "https://www.nice.org.uk/guidance/ta875",
  },
  niceTa1026: {
    label: "Tirzepatide for managing overweight and obesity (TA1026)",
    publisher: "NICE",
    href: "https://www.nice.org.uk/guidance/ta1026",
  },
  niceTa664: {
    label: "Liraglutide for managing overweight and obesity (TA664)",
    publisher: "NICE",
    href: "https://www.nice.org.uk/guidance/ta664",
  },
  niceNg246: {
    label: "Overweight and obesity management (NG246)",
    publisher: "NICE",
    href: "https://www.nice.org.uk/guidance/ng246",
  },
  nhsObesityTreatment: {
    label: "Overweight and obesity in adults: treatment",
    publisher: "NHS",
    href: "https://www.nhs.uk/conditions/obesity/treatment/",
  },
  nhsObesity: {
    label: "Overweight and obesity in adults",
    publisher: "NHS",
    href: "https://www.nhs.uk/conditions/obesity/",
  },
  nhsHealthyWeight: {
    label: "Healthy weight",
    publisher: "NHS",
    href: "https://www.nhs.uk/live-well/healthy-weight/",
  },
  nhsBmi: {
    label: "BMI calculator for adults",
    publisher: "NHS",
    href: "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults",
  },
  nhsEatWell: {
    label: "Eat well",
    publisher: "NHS",
    href: "https://www.nhs.uk/live-well/eat-well/",
  },
  nhsFibre: {
    label: "How to get more fibre into your diet",
    publisher: "NHS",
    href: "https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/",
  },
  nhsConstipation: {
    label: "Constipation",
    publisher: "NHS",
    href: "https://www.nhs.uk/conditions/constipation/",
  },
  nhsStress: {
    label: "10 stress busters",
    publisher: "NHS",
    href: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/",
  },
  nhsMenopause: {
    label: "Menopause",
    publisher: "NHS",
    href: "https://www.nhs.uk/conditions/menopause/",
  },
  mhra: {
    label: "Medicines and Healthcare products Regulatory Agency (MHRA)",
    publisher: "GOV.UK",
    href: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
  },
  yellowCard: {
    label: "Yellow Card: report a side effect",
    publisher: "MHRA",
    href: "https://yellowcard.mhra.gov.uk/",
  },
  drugSafetyUpdate: {
    label: "Drug Safety Update",
    publisher: "MHRA",
    href: "https://www.gov.uk/drug-safety-update",
  },
  fakeMeds: {
    label: "#FakeMeds: safely buy medication online",
    publisher: "MHRA",
    href: "https://fakemeds.campaign.gov.uk/",
  },
  gphcRegister: {
    label: "Register of pharmacies",
    publisher: "General Pharmaceutical Council (GPhC)",
    href: "https://www.pharmacyregulation.org/registers/pharmacy",
  },
  surmount1: {
    label: "Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1)",
    publisher: "Jastreboff AM et al. New England Journal of Medicine, 2022",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  step1: {
    label: "Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1)",
    publisher: "Wilding JPH et al. New England Journal of Medicine, 2021",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
  },
  scale: {
    label: "A Randomized, Controlled Trial of 3.0 mg of Liraglutide in Weight Management (SCALE)",
    publisher: "Pi-Sunyer X et al. New England Journal of Medicine, 2015",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1411892",
  },
} satisfies Record<string, ArticleSource>;

type SourceKey = keyof typeof S;

const BUYING_SAFELY: SourceKey[] = ["gphcRegister", "fakeMeds", "mhra"];

/** Blog slug → sources relevant to what the article covers. */
const ARTICLE_SOURCE_KEYS: Record<string, SourceKey[]> = {
  "are-glp-1-supplements-real": ["fakeMeds", "mhra", "yellowCard", "nhsHealthyWeight", "niceNg246"],
  "best-place-to-start-weight-loss-treatment-online-uk": [...BUYING_SAFELY, "nhsObesityTreatment", "niceNg246"],
  "best-weight-loss-comparison-sites-uk": [...BUYING_SAFELY, "nhsObesityTreatment"],
  "buy-weight-loss-injections-online-uk": [...BUYING_SAFELY, "niceTa875", "niceTa1026"],
  "buy-weight-loss-injections-uk": [...BUYING_SAFELY, "niceTa875", "niceTa1026", "yellowCard"],
  "buy-weight-loss-pills-uk": [...BUYING_SAFELY, "nhsObesityTreatment", "niceNg246"],
  "buy-weight-loss-tablets": [...BUYING_SAFELY, "nhsObesityTreatment", "yellowCard"],
  "can-hormones-cause-belly-fat-after-40": ["nhsMenopause", "nhsObesity", "nhsHealthyWeight", "niceNg246"],
  "can-i-buy-weight-loss-injections-online": [...BUYING_SAFELY, "niceTa875", "niceTa1026"],
  "can-i-buy-weight-loss-injections-uk": [...BUYING_SAFELY, "nhsObesityTreatment", "niceTa875", "niceTa1026"],
  "discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you": ["nhsTirzepatide", "emcMounjaro", "niceTa1026", "surmount1", "yellowCard"],
  "discover-the-powerful-benefits-of-prescription-slimming-injections-uk": ["nhsObesityTreatment", "niceTa875", "niceTa1026", "niceTa664", "gphcRegister"],
  "does-mounjaro-really-work-for-weight-loss-find-out-here": ["surmount1", "niceTa1026", "nhsTirzepatide", "emcMounjaro"],
  "does-stress-cause-belly-fat": ["nhsStress", "nhsHealthyWeight", "nhsObesity"],
  "easy-to-follow-wegovy-injection-instructions-you-can-trust": ["emcWegovy", "nhsSemaglutide", "yellowCard"],
  "fibre-for-glp-1-users": ["nhsFibre", "nhsConstipation", "nhsSemaglutide", "nhsTirzepatide"],
  "glp-1-supplements-uk": ["fakeMeds", "mhra", "yellowCard", "nhsHealthyWeight"],
  "how-does-wegovy-work-to-transform-your-weight-journey": ["nhsSemaglutide", "emcWegovy", "step1", "niceTa875"],
  "how-licensed-weight-loss-injections-uk-can-boost-your-journey": ["niceTa875", "niceTa1026", "nhsObesityTreatment", "gphcRegister"],
  "how-to-compare-uk-weight-loss-pens-and-find-the-best": ["gphcRegister", "emcWegovy", "emcMounjaro", "niceTa875", "niceTa1026"],
  "injectable-obesity-treatments-uk-what-works-and-what-doesnt": ["niceNg246", "niceTa875", "niceTa1026", "niceTa664", "nhsObesityTreatment"],
  "mounjaro-click-calculator-uk": ["emcMounjaro", "nhsTirzepatide", "yellowCard"],
  "mounjaro-dosage-for-weight-loss-facts-you-can-trust": ["emcMounjaro", "nhsTirzepatide", "niceTa1026"],
  "mounjaro-vs-ozempic-smart-comparisons-for-better-results": ["nhsTirzepatide", "nhsSemaglutide", "emcMounjaro", "niceTa1026"],
  "mounjaro-vs-wegovy-key-differences-explained": ["nhsTirzepatide", "nhsSemaglutide", "surmount1", "step1", "niceTa1026", "niceTa875"],
  "mounjaro-weight-loss-before-and-after": ["surmount1", "nhsTirzepatide", "niceTa1026"],
  "mounjaro-weight-loss-benefits-backed-by-science": ["surmount1", "niceTa1026", "emcMounjaro"],
  "mounjaro-weight-loss-injections-game-changer": ["surmount1", "nhsTirzepatide", "niceTa1026"],
  "mounjaro-weight-loss-results-change-your-life": ["surmount1", "nhsTirzepatide", "emcMounjaro"],
  "protein-for-glp-1-users-uk": ["nhsEatWell", "nhsHealthyWeight", "nhsSemaglutide", "nhsTirzepatide"],
  "semaglutide-weight-loss-where-to-start-uk": ["nhsSemaglutide", "niceTa875", "step1", "gphcRegister"],
  "side-effects-of-wegovy-and-how-to-manage-them": ["nhsSemaglutide", "emcWegovy", "yellowCard"],
  "the-surprising-mounjaro-side-effects-you-might-experience": ["nhsTirzepatide", "emcMounjaro", "yellowCard"],
  "the-truth-about-mounjaro-dosage-for-weight-loss-effectiveness": ["emcMounjaro", "nhsTirzepatide", "surmount1"],
  "top-benefits-of-doctor-prescribed-weight-loss-injections-uk-for-you": ["niceNg246", "niceTa875", "niceTa1026", "gphcRegister"],
  "understanding-prescription-weight-loss-injections-uk": ["niceTa875", "niceTa1026", "niceTa664", "nhsObesityTreatment"],
  "understanding-the-mounjaro-kwikpen-a-user-guide": ["emcMounjaro", "nhsTirzepatide", "yellowCard"],
  "weekly-weight-loss-injections-uk-what-they-may-actually-do": ["nhsSemaglutide", "nhsTirzepatide", "niceTa875", "niceTa1026"],
  "wegovy-click-calculator-uk": ["emcWegovy", "nhsSemaglutide", "yellowCard"],
  "wegovy-pill-uk": ["nhsSemaglutide", "mhra", "gphcRegister", "yellowCard"],
  "weight-loss-injection-shortages-in-the-uk-what-you-need-to-know": ["drugSafetyUpdate", "mhra", "gphcRegister", "fakeMeds"],
  "weight-loss-treatment-price-comparison-uk": ["gphcRegister", "niceTa875", "niceTa1026", "niceTa664"],
  "weight-loss-treatment-uk-complete-guide": ["niceNg246", "niceTa875", "niceTa1026", "niceTa664", "nhsObesityTreatment", "gphcRegister"],
  "what-is-bmi-calculator": ["nhsBmi", "nhsObesity", "niceNg246"],
  "what-is-wegovy-pill": ["nhsSemaglutide", "mhra", "yellowCard"],
  "why-does-belly-fat-increase-after-40": ["nhsMenopause", "nhsHealthyWeight", "nhsObesity"],
};

export function getArticleSources(slug: string): ArticleSource[] {
  return (ARTICLE_SOURCE_KEYS[slug] ?? []).map((k) => S[k]);
}
