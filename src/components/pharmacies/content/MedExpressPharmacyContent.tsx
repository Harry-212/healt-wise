"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.medexpress.co.uk/clinics/weight-loss";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function MedExpressPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="MedExpress"
      fileRef="HW-MEDEXPRESS-2026"
      title="MedExpress Weight Loss Clinic (UK): Mounjaro, Wegovy, Orals and Regulated Online Pharmacy"
      subtitle="Clinician led weight loss clinic on a regulated UK online pharmacy: licensed medicines, short remote consultation, patient treatment choice where suitable, refrigerated injectables, tiered delivery and collection rules. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · Xenical · Alli · Orlistat (where listed)"
      providerName="MedExpress"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "MedExpress Pharmacy (GPhC 9012633 — verify live register; superintendent details on site)",
        },
        {
          k: "Treatments",
          v: "GLP-1 injectables · Orlistat-class orals (subject to suitability)",
        },
        {
          k: "Fulfilment",
          v: "Home delivery · Standard / Express tiers · Post Office collect (select non-injectables)",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/MedExpress.webp"
      heroProviderLogoAlt="MedExpress"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          MedExpress positions its weight loss clinic inside a fully regulated UK online pharmacy:
          prescription medicines are UK licensed and prescribing sits with qualified clinicians, so
          eligible patients can complete assessment and checkout without a GP surgery visit or
          walk-in pharmacy appointment when the pathway fits.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That governance matters for appetite modifying medicines where BMI, comorbidities,
          contraindications, and escalation or titration plans need professional judgement. Public
          copy references experienced medical directors and prescribers guiding treatment selection.
          Health Wise summarises how{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            medexpress.co.uk
          </a>{" "}
          frames the service; confirm fees, eligibility, and product availability live before you
          order.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Treatments in scope</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            <strong>GLP-1 class injectables.</strong> Marketing highlights{" "}
            <strong>Mounjaro</strong> and <strong>Wegovy</strong> for adults with obesity where
            clinically appropriate. Trial figures cited in promotional material include roughly{" "}
            <strong>22.5% mean body weight change over about 72 weeks</strong> for Mounjaro in study
            populations used as an example, and similarly strong directional outcomes for Wegovy in
            trials; individual responses differ with adherence, dose, and baseline health.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            <strong>Orlistat pathway.</strong> Options such as <strong>Xenical</strong>,{" "}
            <strong>Alli</strong>, and generic <strong>orlistat</strong> reduce fat absorption and
            suit patients seeking oral weight management with a different mechanism. Marketing notes
            typically more modest loss potential than GLP-1 routes but often broader accessibility from
            an eligibility perspective where clinically suitable.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            Offering several licensed lines lets clinicians match medicine to history, preference,
            and monitoring capacity rather than forcing one SKU for everyone.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Service delivery step by step</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          MedExpress describes an online first journey built for speed while keeping prescribing
          decisions human reviewed:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              t: "Step 1: Quick consultation",
              d: "Eligibility and health questionnaire framed as about two minutes: symptoms, history, and weight goals replace an in person visit for qualifying cases.",
            },
            {
              t: "Step 2: Clinician review",
              d: "Clinical team checks safety and appropriateness using criteria such as BMI and relevant flags before any prescription issues.",
            },
            {
              t: "Step 3: Treatment selection",
              d: "Once eligible, you choose among UK licensed options presented for your profile, whether a GLP-1 injectable or an oral orlistat style medicine.",
            },
            {
              t: "Step 4: Delivery",
              d: "After checkout and approval, medicines ship to your chosen address; injectables use refrigerated packaging. Post Office collection may apply to selected non GLP-1 lines.",
            },
          ].map((s) => (
            <div key={s.t} className="border border-slate-200/90 bg-[#fbf9f4] p-5">
              <p className="font-bold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-slate-800 leading-relaxed">
          No face to face pharmacy step is required on supported journeys, which suits privacy,
          mobility limits, or crowded NHS waiting lists, subject always to clinical suitability.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery management</p>
        <div className="mt-3 space-y-3 text-slate-800 leading-relaxed">
          <p>
            <strong>Discreet packaging:</strong> treatments ship in plain outer cartons so contents
            stay confidential.
          </p>
          <p>
            <strong>Tiers and timing:</strong> <strong>Standard</strong> delivery is typically quoted
            around <strong>£2.90</strong> with arrival often <strong>1–3 days after dispatch</strong>
            . <strong>Express</strong> is often around <strong>£3.95</strong> for delivery within
            about <strong>24 hours of dispatch</strong>. <strong>Post Office collection</strong> may
            run near <strong>£3.95</strong> for eligible treatments, usually ready within roughly{" "}
            <strong>1–3 days</strong>, while{" "}
            <strong>some weight loss injectables are excluded from collection</strong> because of cold
            chain and handling rules. Options and prices appear at checkout and can shift by product
            or promotion.
          </p>
          <p>
            <strong>Injectables:</strong> GLP-1 pens travel in insulated or refrigerated packaging.
            Carriers may include Royal Mail or DPD depending on medicine and lane; tracking is
            supplied so you can plan receipt and refrigerate promptly when the patient information
            leaflet requires it.
          </p>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Costs to expect</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            GLP-1 headline pricing varies by brand and dose; marketing sometimes shows packs from
            around <strong>£69.99</strong> upward on promotional strips, with many listings framed as
            monthly treatment bundles. Oral lines often start lower per month in examples.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Introductory savings:</strong> first order promotions such as{" "}
            <strong>£30 or £40 off</strong> qualifying baskets appear periodically subject to terms.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Build a true monthly budget from consultation if billed separately, medicine net price,
            delivery tier, and any subscription rhythm MedExpress offers at the time.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Support and education</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Beyond dispensing, the clinic promotes <strong>weight loss health guides</strong> and
            lifestyle framing so patients understand medicines, side effect expectations, and habits
            that reinforce outcomes.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Clinical follow up:</strong> the team remains contactable after prescribing for
            practical questions on starting doses or navigating early weeks on a new drug class.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why shoppers shortlist MedExpress</p>
        <Points
          items={[
            "Remote consultation plus prescribing without traditional GP or pharmacy visits for eligible patients.",
            "UK licensed medicines under regulated pharmacy governance.",
            "Discreet parcels and tiered delivery speeds with transparent headline fees.",
            "Patient choice step among suitable licensed alternatives at checkout.",
            "Established brand familiarity versus short lived marketplace sellers.",
            "Forum and review narratives often praise convenience, prompt dispatch, discreet service, and clinical reassurance.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Safety framing</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Choosing where to buy GLP-1 or orlistat supplies is a balance of safety, convenience, cost,
          and continuity of advice. MedExpress markets itself as clinically led with transparent
          postage lines and educational layering; cross check every claim against your own NHS or
          private clinician plan if you already receive overlapping care.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I collect GLP-1 pens from a Post Office?",
              a: "Marketing limits collection to select non injectable treatments; cold chain injectables usually require courier delivery to your address.",
            },
            {
              q: "How long does the questionnaire take?",
              a: "Public copy cites roughly two minutes for the initial eligibility flow before clinician review.",
            },
            {
              q: "Do trial percentages apply to me personally?",
              a: "Figures like 22.5% over 72 weeks are study averages; your trajectory depends on dose titration, adherence, diet, activity, and monitoring.",
            },
            {
              q: "Are intro discounts always available?",
              a: "£30–£40 style offers rotate with campaigns; read current basket terms before relying on them.",
            },
            {
              q: "Do I still need lifestyle change?",
              a: "Yes. Medicines adjust appetite or absorption; durable loss still rests on nutrition, movement, sleep, and behaviour.",
            },
            {
              q: "Which carrier delivers my pen?",
              a: "Royal Mail or DPD may be used depending on product and lane; tracking clarifies the active courier.",
            },
          ].map((f) => (
            <div key={f.q} className="border-t border-slate-200/70 pt-4 first:border-t-0 first:pt-0">
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-2 text-slate-800 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <p className={sectionLabel}>Closing view</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          MedExpress bundles regulated prescribing, GLP-1 and oral breadth, refrigerated injectable
          logistics where needed, modest explicit delivery fees, rotating introductory savings, and
          patient education in one storefront narrative. Stack that against other Health Wise dossiers
          on price bands, programme add ons, and how much clinical messaging you want after the first
          parcel lands.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit MedExpress
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
