"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://swift-doctor.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function SwiftDoctorPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Swift Doctor"
      fileRef="HW-SWIFTDOCTOR-2026"
      title="Swift Doctor (UK): Fast Online Weight Loss Consultations and Tracked Delivery"
      subtitle="Digital obesity care provider emphasising rapid clinician review, prescription GLP-1 access where suitable, courier logistics with cold chain options, competitive illustrative pricing and responsive support channels. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Injectable and related prescription lines where offered"
      providerName="Swift Doctor"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Swift Doctor (GPhC 9012809 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Online questionnaire · clinician review · prescription if appropriate · pharmacy dispensing · courier delivery",
        },
        {
          k: "Fulfilment",
          v: "Royal Mail / DPD style partners · tracked and express tiers · insulated packs for cold medicines · PIN or signature options where required",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/swift doctor.webp"
      heroProviderLogoAlt="Swift Doctor"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Patients comparing UK GLP-1 providers often prioritise turnaround.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Swift Doctor
          </a>{" "}
          promotes itself as an online healthcare brand focused on weight loss prescriptions, remote
          approvals and doorstep delivery without traditional clinic friction.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises their stated strengths—speed, medical oversight, logistics and pricing—so
          you can benchmark them beside other regulated pharmacies on our site.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>What Swift Doctor says it is</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Public pages outline an online clinic supplying prescription weight treatments plus guidance.
            Patients complete digital paperwork, clinicians approve remotely and medicines ship direct,
            targeting users who want discreet, rapid access without GP waiting lists.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Reasons cited for choosing Swift Doctor</p>
        <Points
          items={[
            "Fast consultations: questionnaires completed in minutes with reviews often inside one to two days and sometimes same day per user reports.",
            "Personalised medical support: eligibility screening, dose progression advice and messaging style follow up including WhatsApp or email in testimonials.",
            "Reputation: Trustpilot scores near 4.9/5 appear in marketing summaries alongside praise for communication and reliability.",
            "Pricing: positioned as competitive versus other UK providers with occasional voucher or loyalty style incentives.",
            "Discretion: home ordering, no retail pharmacy queue and discreet outer packaging.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Four step workflow</p>
        <Points
          items={[
            "Online assessment covering BMI, history, prior therapies and lifestyle.",
            "Clinician review covering eligibility, verification and occasional extra questions.",
            "Prescription issuance and pharmacy preparation once approved.",
            "Tracked dispatch with secure packaging straight to your chosen address.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Couriers, packaging and timelines</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Swift Doctor references partners such as <strong>Royal Mail</strong> and <strong>DPD</strong> with{" "}
          <strong>tracked</strong>, <strong>next day</strong> or <strong>24 hour</strong> options where
          purchased. Reviews frequently emphasise <strong>same or next day dispatch</strong> after approval
          and <strong>parcel arrival inside about one to two days</strong>, while standard economy lanes may
          stretch toward three to five working days. Injectable shipments may use{" "}
          <strong>insulated boxes</strong>, <strong>ice packs</strong> and tamper aware containers. Some
          carriers require <strong>signature</strong> or <strong>PIN release</strong> for high value
          prescription items.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Logistics checklist (marketing)</p>
        <Points
          items={[
            "Rapid order processing once clinicians sign off.",
            "Courier integrations supplying tracking links and delivery notifications.",
            "Cold chain discipline for refrigerated medicines.",
            "Transparency via ETA updates.",
            "Secure delivery modes for sensitive prescriptions.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative costs</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Spend depends on molecule, strength and duration. Community reports cite ranges such as{" "}
            <strong>about £150 to £200 per pen</strong> for some GLP-1 SKUs. Consultations may be{" "}
            <strong>included</strong> or listed around <strong>£30</strong> for optional add ons with partial
            promo refunds mentioned anecdotally. Delivery is often folded into medicine pricing;{" "}
            <strong>express surcharges near £5 to £6</strong> appear in summaries, while other users report
            fully inclusive postage.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Discounts and repeats</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Promotional copy references <strong>intro codes</strong>, loyalty savings and seasonal offers.
            Longitudinal care includes <strong>easy reorders</strong>, dose titration support and reminders so
            weekly or monthly injections stay on schedule.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Strengths patients highlight</p>
        <Points
          items={[
            "Speed across review, dispatch and courier legs.",
            "Fully remote convenience.",
            "Responsive customer service and clinical messaging.",
            "Competitive headline pricing plus vouchers.",
            "High satisfaction scores in aggregated reviews.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Balanced considerations</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          GLP-1 therapy always demands eligibility screening, possible side effects and recurring monthly
          spend. Medical supervision mitigates but does not erase those realities.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "How fast is Swift Doctor?",
              a: "Marketing and reviews cite approvals within hours to a couple of days, frequent same or next day dispatch, and parcels often arriving within about one to two days.",
            },
            {
              q: "Which couriers are mentioned?",
              a: "Royal Mail and DPD appear in public summaries alongside tracked, next day or secured delivery variants.",
            },
            {
              q: "Does Swift Doctor ship cold medicines safely?",
              a: "They describe insulated packaging and coolant packs for refrigerated lines plus rapid transit to protect stability.",
            },
            {
              q: "What are indicative pen prices?",
              a: "User reports quote roughly £150–£200 per pen for some doses; confirm live checkout for your strength.",
            },
            {
              q: "Are consultations extra?",
              a: "Sometimes bundled; optional consults around £30 appear in anecdotes with promo refunds possible.",
            },
            {
              q: "Is Swift Doctor well reviewed?",
              a: "Aggregates cite Trustpilot near 4.9/5, though always read fresh feedback.",
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
          Swift Doctor sells velocity: brisk assessments, courier integrations patients praise, insulated
          cold chain discipline and pricing that often undercuts slower competitors when promos stack. If
          your priority is minimal downtime between decision and first injection, they belong on your short
          list alongside the regulated options indexed on Health Wise.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Swift Doctor
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
