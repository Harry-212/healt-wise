"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.zavamed.com/uk/weight-loss-treatment.html";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function ZavaPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Zava"
      fileRef="HW-ZAVA-2026"
      title="Zava (UK): Online Doctor Weight Loss, Photo BMI Checks and Cold Delivery"
      subtitle="ZavaMed weight loss hub pairs UK doctor reviewed questionnaires with BMI photo verification, partner pharmacy dispensing, signature cold courier lanes for injectables, tablet postage options and bundled consultation pricing. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Liraglutide · Orlistat · Xenical · Mysimba · alli-style lines where listed"
      providerName="Zava"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Zava / partner pharmacy fulfilment (GPhC 9011147 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Questionnaire · BMI photo evidence · UK doctor review · partner dispensing · tracked delivery",
        },
        {
          k: "Fulfilment",
          v: "Cold chain signature service for injections · free 48h tablet post · express upgrades · Post Office collect options",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/zava.webp"
      heroProviderLogoAlt="Zava"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-amber-100 bg-amber-50/30 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-amber-900">Independent Context:</strong> As part of your research into medically supported weight management, evaluating providers like Zava is highly recommended. This page is designed to give you a transparent overview of Zava's service model, from their online doctor assessments to how they securely dispatch temperature-sensitive treatments directly to your home.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Demand for GLP‑1 weight therapies strains GP capacity, pushing patients toward audited digital clinics.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Zava UK
          </a>{" "}
          advertises prescription access reviewed by <strong>UK registered doctors</strong> without traditional
          clinic visits, spanning injectable and tablet portfolios.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises ZavaMed’s published workflow, logistics, pricing anchors and safeguards so you can
          judge fit beside other regulated dossiers on our site.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Treatment menu</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            <strong>Injectables:</strong> <strong>Wegovy</strong> (weekly semaglutide),{" "}
            <strong>Mounjaro</strong> (dual GLP‑1/GIP tirzepatide) and <strong>liraglutide</strong> (generic Saxenda
            style daily injections) for patients preferring established pen devices with hormonal appetite control.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            <strong>Tablets:</strong> <strong>Orlistat</strong>, <strong>Xenical</strong>,{" "}
            <strong>Mysimba</strong>, plus capsule ranges such as <strong>Orlos</strong> or <strong>alli</strong>{" "}
            where clinically suitable. Every SKU remains prescription only behind doctor approval.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Online pathway</p>
        <Points
          items={[
            "Digital questionnaire capturing age, BMI inputs, history and medicines.",
            "Photo based BMI verification for obesity prescribing governance.",
            "Doctor review often within ~24 hours (longer when volumes spike); unsuitable applicants are not charged.",
            "Approved scripts route to Zava’s partner pharmacy for assembly and dispatch.",
            "Ongoing resources include nutrition content and optional check ins via patient accounts.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery mechanics</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Refrigerated injections ship in <strong>insulated coolant packaging</strong> with{" "}
          <strong>signature required</strong> delivery; patients should refrigerate pens promptly. Tablets may use{" "}
          <strong>free 48 hour</strong> standard post, <strong>paid next day</strong> upgrades (often around £3.99 in
          summaries), optional Saturday surcharges, or <strong>free Post Office Click &amp; Collect</strong> where
          offered. Royal Mail tracking emails provide visibility after clinician approval.
        </p>
        <p className="mt-4 text-slate-800 leading-relaxed">
          Cold injections frequently aim for <strong>next working day by 1pm</strong> when ordered before published
          cutoffs; tablets commonly deliver in <strong>1–2 working days</strong> on standard lanes.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Address rules</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing requires valid UK residential addresses (typically excluding PO boxes or forwarding warehouses).
          Changes before approval may be supported; signed receipt ensures controlled drugs style accountability.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative pricing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Published bands cite <strong>Wegovy from about £99 per dose tier</strong>,{" "}
            <strong>Mounjaro from roughly £169.99</strong>, <strong>Mysimba near £99</strong>, and{" "}
            <strong>Orlistat/Xenical roughly £74.99–£89.95</strong>, bundling doctor review, approval, education and
            account messaging. <strong>Cold carriage</strong> may add about <strong>£3.99</strong> while tablet post
            can be free or express priced. Promo codes occasionally trim first orders. Declined medical cases avoid
            charges.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Why patients cite Zava</p>
          <Points
            items={[
              "Legitimate prescribing versus risky social sellers.",
              "Time savings versus waiting lists.",
              "Broad injectable and oral catalogue.",
              "Transparent shelf pricing and delivery fees.",
              "Continued education and secure messaging.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Practice reminders</p>
        <Points
          items={[
            "Follow titration instructions and maintain lifestyle changes.",
            "Plan home presence for signature cold deliveries.",
            "Read PILs for side effect profiles.",
            "Avoid unregulated injectable marketplaces warned about by MHRA.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Do I need BMI photos?",
              a: "Zava typically requests photographic verification so doctors can confirm eligibility alongside questionnaire data.",
            },
            {
              q: "How fast are doctor reviews?",
              a: "Marketing cites up to about 24 hours in many cases with possible delays during busy periods.",
            },
            {
              q: "What if I am declined?",
              a: "Their materials state you are not charged when a prescription is deemed unsafe or inappropriate.",
            },
            {
              q: "How are injectables shipped?",
              a: "Cold insulated parcels with signature delivery and next working day targets when cutoff rules are met.",
            },
            {
              q: "What prices anchor Wegovy and Mounjaro?",
              a: "Summaries mention roughly £99 entry Wegovy tiers and about £169.99 Mounjaro units before strength premiums.",
            },
            {
              q: "Can tablets arrive free?",
              a: "Standard 48 hour UK postage is often advertised as free with paid express upgrades available.",
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
          Zava blends doctor gatekeeping, biometric checks, partner pharmacy fulfilment and differentiated postage
          economics between fridge injections and shelf stable tablets. If signature friendly delivery works for your
          household, map their dose tier pricing against Health Wise comparisons before locking in repeat cycles.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Zava
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
