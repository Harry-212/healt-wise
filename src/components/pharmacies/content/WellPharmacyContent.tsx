"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://well.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function WellPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Well Pharmacy"
      fileRef="HW-WELL-2026"
      title="Well Pharmacy (UK): Medicated Weight Loss, Pharmacist Follow Ups and Delivery"
      subtitle="National pharmacy brand combining online or in branch consultations, GLP‑1 and oral prescribing where suitable, monthly monitoring themes, discreet home delivery via Royal Mail style services and eligibility screening aligned to UK obesity guidelines. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Orlistat · Prescription only supply"
      providerName="Well Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Well Pharmacy (GPhC 9010492 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Online questionnaire / video consult or in store review · prescriber decision · dispensing · optional delivery",
        },
        {
          k: "Fulfilment",
          v: "Discreet parcels · standard ~3–5 working days (~£3.95) or express ~24h (~£4.95) · free above threshold where stated",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Well Pharmacy.webp"
      heroProviderLogoAlt="Well Pharmacy"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-emerald-900">Provider Overview:</strong> Well Pharmacy is presented as a UK pharmacy-led route into medically supported weight management, combining assessment, prescribing where appropriate, and fulfilment through a large national network. To compare providers fairly, it helps to understand the operational details — consultation steps, review criteria, follow-ups, and delivery or collection options. This dossier provides independent context about Well Pharmacy to support a more informed choice.</p></div>
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Well
          </a>{" "}
          describes medicated obesity support that pairs pharmacological tools with pharmacist coaching rather than
          selling pens as retail commodities. Their narrative spans clinical assessment, prescription decisions when
          criteria fit, lifestyle messaging and logistics that mirror wider UK pharmacy networks.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise captures how marketing contrasts structured programmes with informal supplement sellers and
          why ongoing reviews matter for GLP‑1 titration safety.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Treatments cited</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            <strong>Injectable GLP‑1 / dual agonists:</strong> summaries list <strong>Mounjaro (tirzepatide)</strong>{" "}
            and <strong>Wegovy (semaglutide)</strong> for appetite suppression, slower gastric emptying and fuller
            feeling between meals. Both remain POM with BMI led eligibility.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            <strong>Oral therapy:</strong> <strong>Orlistat</strong> capsules block absorption of some dietary
            fat; marketing cites roughly <strong>8–10%</strong> weight change ranges in suitable cohort studies when
            paired with calorie control.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>How the service is described</p>
        <Points
          items={[
            "Assessment online via forms and often video review, or in store with measurements and private counselling.",
            "Eligibility commonly framed around BMI 30+, or BMI 27+ with weight related comorbidities, age bands such as 18–75 unless contra-indicated.",
            "If appropriate, prescribers discuss medicine choice and monitoring cadence.",
            "Monthly follow ups assess progress, lifestyle adherence and tolerability with dose adjustments when judged safe.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery and address handling</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Approved prescriptions may be collected from Well pharmacies or shipped in{" "}
          <strong>discreet packaging</strong>. Marketing cites <strong>standard Royal Mail</strong> delivery in
          about <strong>3–5 working days</strong> for roughly <strong>£3.95</strong> or{" "}
          <strong>free beyond qualifying basket values</strong>, plus <strong>express ~24 hour</strong> options near{" "}
          <strong>£4.95</strong>. Couriers may offer neighbour or safe place drops per carrier rules; patients can
          adjust preferences in tracking apps or contact Well support after dispatch.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Eligibility and safety framing</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Exclusions typically include pregnancy, breastfeeding, certain endocrine cancers, severe GI disease and
          other physician judged risks. Structured eligibility protects patients because GLP‑1 pathways alter
          hormones affecting multiple organs.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative pricing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Public summaries anchor <strong>Orlistat from about £45.99</strong>,{" "}
            <strong>Wegovy from roughly £89</strong> and <strong>Mounjaro from about £149</strong> before dose
            escalation. Service fees may bundle initial consults with ongoing monthly check ins depending on pathway;
            confirm whether clinical time is itemised or folded into SKU pricing.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Why structured programmes matter</p>
          <Points
            items={[
              "Prescriber screening before first pen.",
              "Pharmacist accessibility for practical questions.",
              "Scheduled reviews rather than silent auto refills.",
              "Lifestyle counselling complementary to medication.",
              "Tracked logistics with flexible receipt options.",
            ]}
          />
        </section>
      </div>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I use Well online and in store?",
              a: "Marketing describes both remote consultations with video elements and face to face reviews in Well pharmacies.",
            },
            {
              q: "How often are follow ups?",
              a: "Monthly reviews are cited for monitoring progress and adjusting therapy.",
            },
            {
              q: "What delivery fees appear?",
              a: "Illustrative bands mention ~£3.95 standard and ~£4.95 express with free carriage above stated order values.",
            },
            {
              q: "Which injectables are named?",
              a: "Mounjaro and Wegovy feature prominently in educational copy alongside oral Orlistat.",
            },
            {
              q: "Who is eligible?",
              a: "Typical messaging references BMI 30+ or BMI 27+ with comorbidities subject to clinical judgement.",
            },
            {
              q: "Is Well regulated?",
              a: "Materials present a UK pharmacy framework with GPhC oversight — verify premises on the register.",
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
          Well’s obesity proposition leans on hybrid access (digital plus high street), pharmacist continuity,
          prescription injectables and oral alternatives, and carriage pricing typical of large pharmacy chains.
          Compare their active SKUs and consult bundles with Health Wise tables to see whether their headline sums
          suit your maintenance dose budget.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Well
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
