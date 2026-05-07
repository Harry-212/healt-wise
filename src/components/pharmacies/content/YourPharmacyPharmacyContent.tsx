"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://your-pharmacy.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function YourPharmacyPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="YourPharmacy"
      fileRef="HW-YOURPHARMACY-2026"
      title="YourPharmacy (UK): Fast Dispatch, NICE‑Aligned Review and Cold‑Chain GLP‑1"
      subtitle="YourPharmacy describes a GPhC licensed UK online pharmacy with doctor or prescriber triage, official wholesaler sourcing (including Novo Nordisk and Eli Lilly framing), thermal packaging for pens, Royal Mail Tracked 24 or DPD options and competitive bundled pricing. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · GLP‑1 supply where clinically approved"
      providerName="YourPharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "YourPharmacy (GPhC 9012029 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Digital consultation · professional review (NICE‑aligned eligibility) · e‑prescription · dispensing · rapid dispatch",
        },
        {
          k: "Fulfilment",
          v: "2–8°C thermal packs up to ~48h transit · Royal Mail Tracked 24 / DPD · plain unbranded outers · Safe Place where offered",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/YourPharmacy.webp"
      heroProviderLogoAlt="YourPharmacy"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Picking a weight loss pharmacy means balancing clinical rigour with everyday convenience.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            YourPharmacy
          </a>{" "}
          presents itself as a leading UK online pharmacy centring patient care from first assessment through
          discreet delivery, including regulated access to Mounjaro and Wegovy where appropriate.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise condenses their marketing claims on regulation, workflow, cold logistics and pricing so you can
          benchmark them on our site.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulation and sourcing</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "GPhC oversight with compliance framed around UK pharmacy law.",
              "Clinical triage by UK registered doctors or independent prescribers for every questionnaire.",
              "Medicines described as authentic UK stock from official wholesalers, referencing manufacturers such as Novo Nordisk and Eli Lilly in promotional education.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Four step process</p>
        <Points
          items={[
            "Digital consultation after choosing a treatment, capturing BMI, history and comorbidities.",
            "Professional review verifying eligibility against NICE oriented criteria for GLP‑1 therapy.",
            "Electronic prescription issuance to the dispensing team when approved.",
            "Same day or next day dispatch for many orders approved before cutoff, often within 24 hours.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Highlighted benefits</p>
        <Points
          items={[
            "Competitive pricing positioned to support long term therapy budgets.",
            "Streamlined reordering with history remembered for titration or strength changes.",
            "Professional advice on dosing, injection technique and common side effects such as nausea.",
            "Transparent bundles: visible prices typically include consultation, private prescription and medicine.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Injectable pens ship in <strong>advanced thermal packaging</strong> intended to hold{" "}
          <strong>2°C to 8°C</strong> for up to about <strong>48 hours</strong> in transit. Couriers referenced
          include <strong>Royal Mail Tracked 24</strong> and <strong>DPD</strong> with tracking and Safe Place options
          where the carrier supports it. Outer boxes are <strong>plain and unbranded</strong> with no hint of
          contents or service type.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative costs</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Marketing cites <strong>Mounjaro starting doses (2.5mg) around £139–£149</strong> with modest increases
            toward <strong>7.5mg–15mg maintenance</strong> tiers, and{" "}
            <strong>Wegovy introductory doses roughly £135–£145 monthly</strong>. Many plans advertise{" "}
            <strong>free tracked delivery</strong>, boosting perceived value.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety and legitimacy</p>
          <Points
            items={[
              "Automated identity checks aligning medical profiles with purchasers.",
              "GDPR aligned data handling claims.",
              "Care Quality Commission expectations for remote prescribing cited as a safety anchor.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why marketing says patients prefer YourPharmacy</p>
        <Points
          items={[
            "Strong reliability and fast shipping reputation.",
            "Intuitive site flows for repeat prescriptions.",
            "Competitive Mounjaro and Wegovy headline pricing.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The overall story merges traditional pharmacy assurance with e commerce speed so UK patients can access
          “life changing” GLP‑1 treatments with confidence in legality and discretion.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is YourPharmacy GPhC regulated?",
              a: "Their narrative presents full UK pharmacy licensing — verify the dispensing premises on the official register.",
            },
            {
              q: "How fast is dispatch?",
              a: "Many orders approved before cutoff dispatch within about 24 hours with same or next day messaging.",
            },
            {
              q: "How is cold chain maintained?",
              a: "Thermal packs target 2–8°C for up to roughly 48 hours during transit.",
            },
            {
              q: "What starting prices are quoted for Mounjaro and Wegovy?",
              a: "Illustrative bands mention Mounjaro ~£139–£149 at 2.5mg and Wegovy ~£135–£145 at low doses.",
            },
            {
              q: "Is delivery sometimes free?",
              a: "Marketing states many treatment plans include free tracked shipping.",
            },
            {
              q: "Does YourPharmacy reference NICE?",
              a: "Yes — eligibility checks are described as aligned with NICE guidance for GLP‑1 prescribing.",
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
          YourPharmacy combines brisk fulfilment claims, wholesaler authenticity messaging, insulated courier
          discipline and bundled headline prices that often include postage. Validate dose specific totals on their
          live checkout against Health Wise comparison cells before you lock in long term therapy.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit YourPharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
