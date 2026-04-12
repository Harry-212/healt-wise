/**
 * Maps each guide slug to a relevant, free-to-use Unsplash thumbnail.
 * All photos are licensed under the Unsplash License (free for commercial use).
 * URLs use auto=format so browsers that support WebP receive WebP automatically.
 */

const Q = "?auto=format&fit=crop&w=800&q=80";
const U = "https://images.unsplash.com/photo-";

// Named image tokens — every token is used exactly once across GUIDE_IMAGES
const IMG = {
  /** Semaglutide / GLP-1 auto-injector pen */
  injectionPen:      `${U}1745939921744-ba8ef27940bf${Q}`,
  /** Feet on a white digital bathroom scale */
  weightScale:       `${U}1522844990619-4951c40f7eda${Q}`,
  /** Pharmacy medicine shelf (medications + bottles) */
  pharmacyShelf:     `${U}1696861286643-341a8d7a79e9${Q}`,
  /** Person holding their stomach in pain */
  stomachPain:       `${U}1769029174021-b305fa92f0ae${Q}`,
  /** Healthy chicken & rice bowl with vegetables */
  riceBowl:          `${U}1762631383628-77f92d18b184${Q}`,
  /** Colourful poke bowl — salmon, avocado, veg */
  pokeBowl:          `${U}1661257711676-79a0fc533569${Q}`,
  /** Hand holding a vitamin B12 supplement bottle */
  vitaminBottle:     `${U}1690959794962-d8b3a18aa784${Q}`,
  /** Open refrigerator filled with bottles — cold chain */
  refrigerator:      `${U}1542331325-bebfc9b990d7${Q}`,
  /** Plain grey cardboard delivery / dispatch box */
  deliveryBox:       `${U}1631010231888-777b6285ef84${Q}`,
  /** Obstetrician consulting a pregnant patient (CDC) */
  pregnantDoctor:    `${U}1632053652571-a6a45052bbbd${Q}`,
  /** Doctor writing in medical records while patient sits opposite */
  doctorWriting:     `${U}1758691463198-dc663b8a64e4${Q}`,
  /** Woman wrapped in a blanket in the snow — feeling cold */
  coldBlanket:       `${U}1673977905153-1f422a2888c3${Q}`,
  /** Man with head in toilet bowl — nausea / vomiting */
  toiletNausea:      `${U}1766315745904-5cdae512f0f1${Q}`,
  /** Senior hand holding white medication pills */
  seniorPills:       `${U}1624031000106-79254a8faa19${Q}`,
  /** Woman running on a forest trail — fitness & active health */
  running:           `${U}1590646299178-1b26ab821e34${Q}`,
  /** Colourful social media feed on a phone screen */
  socialMediaPhone:  `${U}1745398243022-0bf53a84c5dd${Q}`,
  /** Doctor consulting patient in a medical office */
  doctorConsult:     `${U}1758691462878-6edc3d3da1be${Q}`,
  /** Slim woman measuring waist with a tape measure — BMI tracking */
  tapeMeasure:       `${U}1768839722667-85bf00fe8b9a${Q}`,
  /** Close-up of skin with water droplets — skin health / sensitivity */
  skinTexture:       `${U}1771688221238-06ded2ea59c7${Q}`,
  /** Person holding a January calendar — fresh start / restart */
  calendarRestart:   `${U}1484981184820-2e84ea0af397${Q}`,
  /** Oatmeal bowl with assorted berries — high-fibre foods */
  fruitsBerries:     `${U}1517673400267-0251440c45dc${Q}`,
  /** Stethoscope with a red heart on a table — cardiovascular health */
  stethoscopeHeart:  `${U}1690787628851-d36e285c29b0${Q}`,
  /** Two blister packs of tablets (top view) — compare medications */
  pillBlister:       `${U}1715868655465-2276c4f93f1b${Q}`,
  /** White FedEx delivery truck on a city street — fast shipping */
  deliveryTruck:     `${U}1763561843671-195c87e2f685${Q}`,
  /** Laptop with lock / security concept — spotting fake pharmacies online */
  laptopSecurity:    `${U}1563986768609-322da13575f3${Q}`,
  /** Medical syringe on blue — sharps / injection pen disposal */
  syringeDisposal:   `${U}1587854692152-cbe660dbde88${Q}`,
  /** Van on desert road — travel & insurance abroad (verified Unsplash 200) */
  travelFlatlay:     `${U}1469854523086-cc02fe5d8800${Q}`,
  /** Aerial beach / summer — heat, sun & hydration (verified Unsplash 200) */
  heatHydration:     `${U}1548839140-29a749e1cf4d${Q}`,
  /** Woman's photo covered in "censored" text — content removal */
  censoredContent:   `${U}1746365589074-e9b02c198257${Q}`,
  /** Sliced fruit & vegetables flat lay — fibre / digestion / gut health */
  fiberFoods:        `${U}1543362906-acfc16c67564${Q}`,
} as const;

export const GUIDE_IMAGES: Record<string, string> = {

  // ── Medications ───────────────────────────────────────────────────────────
  /** GLP-1 pen — the injection itself */
  "mounjaro-weight-loss-injection-uk":               IMG.injectionPen,
  /** Bathroom scale — tracking plateau weight */
  "mounjaro-weight-loss-plateau":                    IMG.weightScale,
  /** Doctor filling in a chart — prescription process */
  "mounjaro-prescription-timeline-uk":               IMG.doctorConsult,
  /** Obstetrician + pregnant patient — fertility & contraception risks */
  "mounjaro-pregnancy-risk-fertility-contraception": IMG.pregnantDoctor,
  /** Delivery box — switching from one pen to another */
  "switching-wegovy-to-mounjaro-uk":                 IMG.deliveryBox,
  /** Supplement bottle — multivitamin discussion */
  "mounjaro-multivitamins-uk":                       IMG.vitaminBottle,
  /** Woman running — early rapid weight loss = active momentum */
  "mounjaro-early-weight-loss-why-it-slows":         IMG.running,
  /** Senior with medication — menopause + Mounjaro */
  "mounjaro-menopause-weight-loss-uk":               IMG.seniorPills,
  /** Oatmeal & berries bowl — broad health benefits of GLP-1 */
  "mounjaro-wegovy-health-benefits-uk":              IMG.fruitsBerries,
  /** Tape measure around waist — BMI cutoff / stopping decision */
  "mounjaro-bmi-cutoff-stopping-uk":                 IMG.tapeMeasure,
  /** Stethoscope + heart — assessing eligibility / health check */
  "mounjaro-eligibility-bmi-requirements-uk":        IMG.stethoscopeHeart,
  /** Calendar / January — fresh start after a break */
  "restarting-mounjaro-after-break-uk":              IMG.calendarRestart,

  // ── Pharmacy Safety ───────────────────────────────────────────────────────
  /** Fridge — cold-chain storage requirements */
  "mounjaro-delivery-storage-uk":                    IMG.refrigerator,
  /** Pharmacy shelf — verifying registered dispensaries */
  "how-we-verify-uk-pharmacies-gphc-safety-standards": IMG.pharmacyShelf,
  /** Phone with social feed — "online" vs local pharmacy concept */
  "local-vs-online-pharmacies-mounjaro-uk":          IMG.socialMediaPhone,
  /** Blister packs side-by-side — comparing / switching medication packs */
  "switching-pharmacies-mounjaro-wegovy-uk":         IMG.pillBlister,
  /** FedEx delivery truck — dispatch timeline & speed */
  "mounjaro-delivery-times-uk":                      IMG.deliveryTruck,

  // ── Safety Checks ─────────────────────────────────────────────────────────
  /** Laptop security — fake / rogue online pharmacy awareness */
  "fake-online-pharmacy-uk-how-to-spot-stay-safe":   IMG.laptopSecurity,
  /** Syringe — KwikPen needle & sharps disposal */
  "kwikpen-disposal-recycling-uk":                   IMG.syringeDisposal,
  /** Travel flat lay — insurance for medication abroad */
  "travel-insurance-mounjaro-users-uk":              IMG.travelFlatlay,
  /** Drinking water in sun — hot weather & dehydration risk */
  "mounjaro-hot-weather-safety-uk":                   IMG.heatHydration,

  // ── Nutrition ─────────────────────────────────────────────────────────────
  /** Chicken & rice bowl — calorie cycling meal prep */
  "mounjaro-calorie-cycling-weight-loss":            IMG.riceBowl,
  /** Colourful poke bowl — balanced nutrition while on GLP-1 */
  "mounjaro-nutrition-guide-uk":                     IMG.pokeBowl,

  // ── Side Effects ─────────────────────────────────────────────────────────
  /** Man with head in toilet — norovirus / vomiting */
  "norovirus-mounjaro-wegovy-uk":                    IMG.toiletNausea,
  /** Woman in cold blanket — unexplained cold sensation */
  "mounjaro-feeling-cold-why-fixes":                 IMG.coldBlanket,
  /** Close-up skin texture — injection-site skin sensitivity / nerve pain */
  "mounjaro-skin-pain-causes-treatment":             IMG.skinTexture,
  /** Sliced fruit & veg — high-fibre foods for constipation relief */
  "mounjaro-constipation-relief-uk":                 IMG.fiberFoods,
  /** Person holding stomach — general side-effects overview */
  "mounjaro-side-effects-uk":                        IMG.stomachPain,

  // ── Regulation ────────────────────────────────────────────────────────────
  /** Doctor writing medical records — GP notification process */
  "mounjaro-gp-notification-uk":                     IMG.doctorWriting,
  /** "Censored" text over image — GLP-1 content removal from platforms */
  "glp1-content-removed-weight-loss-advice-uk":      IMG.censoredContent,
};
