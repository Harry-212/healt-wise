"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://tribelle.co.uk/treatments/injectable-weight-loss";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function TribellePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Tribelle"
      fileRef="HW-TRIBELLE-2026"
      title="Tribelle (UK): Clinician Led Injectable Weight Loss and Tracked Delivery"
      subtitle="GPhC registered online pharmacy narrative for GLP‑1 injectables, roughly 24 hour clinical review claims, personalised plans, discreet tracked parcels and no mandatory subscription pricing. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Injectable GLP‑1 where prescribed"
      providerName="Tribelle"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Tribelle (GPhC 9012688 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Secure consultation · clinician review ~24h · personalised plan · pharmacy dispensing · tracked delivery",
        },
        {
          k: "Fulfilment",
          v: "Discreet unbranded parcels · often same-day dispatch narratives · ~2–3 working day transit cited",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/tribelle.webp"
      heroProviderLogoAlt="Tribelle"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Excess weight intersects metabolism, mood and long term health; diet alone fails many adults.
          Injectable prescription therapies now sit beside lifestyle change.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Tribelle
          </a>{" "}
          describes a UK regulated, clinician led digital clinic supplying evidence based GLP‑1 medicines with
          home delivery.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise outlines how their marketing explains science, service steps, logistics, costs and support
          without replacing your prescriber’s individual advice.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Science snapshot (educational)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          GLP‑1 receptor agonists such as <strong>tirzepatide (Mounjaro)</strong> and{" "}
          <strong>semaglutide (Wegovy)</strong> mimic incretin hormones to blunt appetite, slow gastric emptying
          and stabilise glucose, which together support calorie deficit when paired with behaviour change.
          Population trials report meaningful weight change for responders, though individual curves vary with
          adherence and tolerance.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why Tribelle highlights its model</p>
        <Points
          items={[
            "GPhC registered pharmacy with licensed partners handling dispensing.",
            "Prescriptions only after qualified clinicians review history, risks and contraindications.",
            "Digital consultations finished in minutes with ~24 hour review claims.",
            "Personalised titration and lifestyle coaching themes rather than generic leaflets.",
            "Ongoing check ins, secure messaging and side effect troubleshooting.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Five step journey</p>
        <Points
          items={[
            "Confidential online form capturing health history, medicines and goals.",
            "Clinical assessment for BMI linked conditions, suitability and red flags.",
            "Approved patients receive medication choice, injection training themes and expectation setting.",
            "Pharmacy dispensing with rapid dispatch and tracked discreet parcels.",
            "Continued renewals, progress reviews and dose adjustments when clinically appropriate.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Injectable catalogue (marketing figures)</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            <strong>Mounjaro pen:</strong> tirzepatide, weekly injections with staged dose increases; summaries
            cite up to roughly <strong>25% body weight change</strong> in selected trial narratives and about{" "}
            <strong>£147 per pen</strong> subject to strength.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            <strong>Wegovy pen:</strong> semaglutide, weekly self injection; marketing mentions craving control
            and about <strong>£111 per pen</strong> depending on strength.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            Both belong to the GLP‑1 class and require lifestyle reinforcement for sustainable outcomes.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Delivery experience</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          After approval, medicines reportedly dispatch quickly (often same day in promotional copy), travel via{" "}
          <strong>tracked courier</strong> in <strong>plain packaging</strong>, and typically arrive within about{" "}
          <strong>2–3 working days</strong> though peak demand can stretch timelines.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Costs and bundles</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Tribelle emphasises <strong>no compulsory subscription</strong>: pay per prescription cycle with
            transparent checkout. Independent guides often bracket private GLP‑1 care around{" "}
            <strong>£200–£300 monthly</strong> once consultation, drug and courier fees combine. Tribelle argues
            the ticket covers assessment, wholesale sourced medicines, professional fees, tracked postage and
            longitudinal support.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety rationale</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Injectable agents demand screening for interactions, escalation planning and adverse event coaching.
            Tribelle frames structured oversight as the safeguard versus grey market pens lacking medical records.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Reputation notes</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          External reviews frequently praise professionalism, communication clarity and smooth logistics; Trustpilot
          aggregates are cited as strong though scores fluctuate with volume.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Reasons patients summarise choosing Tribelle</p>
        <Points
          items={[
            "MHRA pathway medicines with clinician approval.",
            "Fully remote onboarding.",
            "Tailored plans rather than one SKU fits all.",
            "Fast discreet tracked shipping.",
            "Transparent non subscription pricing.",
            "Continued clinical contact.",
            "Positive peer feedback on Trustpilot style platforms.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Tribelle regulated?",
              a: "Marketing presents a GPhC registered online pharmacy with licensed dispensing partners — verify entries on the official register.",
            },
            {
              q: "How fast is clinician review?",
              a: "Their copy targets about 24 hours for assessment turnaround.",
            },
            {
              q: "Must I subscribe?",
              a: "No mandatory subscription is advertised; you purchase prescriptions as needed.",
            },
            {
              q: "What pen prices are quoted?",
              a: "Illustrative marketing cites roughly £147 for Mounjaro pens and £111 for Wegovy pens before dose adjustments.",
            },
            {
              q: "How long does delivery take?",
              a: "Many summaries describe about 2–3 working days after dispatch with tracking.",
            },
            {
              q: "Do they offer ongoing support?",
              a: "Yes — follow ups, messaging and titration support appear central to the proposition.",
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
          Tribelle markets a complete injectable obesity pathway: science literate positioning, rapid reviews,
          personalised counselling, logistics patients rate highly and pricing pitched as transparent bundles.
          Compare their live pen totals with Health Wise Mounjaro rows for each titration step before committing.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Tribelle
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
