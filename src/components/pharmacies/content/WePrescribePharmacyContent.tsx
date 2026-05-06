"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://weprescribe.co.uk/condition/weight-loss/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function WePrescribePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="WePrescribe"
      fileRef="HW-WEPRESCRIBE-2026"
      title="WePrescribe (UK): Pharmacist Led Weight Loss Prescribing and Tracked Delivery"
      subtitle="UK licensed online pharmacy describing pharmacist prescriber review, structured questionnaires, GLP‑1 and oral obesity medicines, discreet tracked Royal Mail options, cold chain injectables and referral style discounts where offered. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Saxenda · Orlistat · Xenical · alli where listed"
      providerName="WePrescribe"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "WePrescribe (GPhC 9012132 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Choose treatment · medical questionnaire · UK prescriber review · pharmacy dispensing · delivery",
        },
        {
          k: "Fulfilment",
          v: "Discreet unmarked parcels · tracking · Royal Mail tiers · fridge packs for GLP‑1 lines",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/WePrescribe.webp"
      heroProviderLogoAlt="WePrescribe"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-amber-100 bg-amber-50/30 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-amber-900">Independent Context:</strong> As part of your research into medically supported weight management, evaluating providers like WePrescribe is highly recommended. This page is designed to give you a transparent overview of WePrescribe's service model, from their online doctor assessments to how they securely dispatch temperature-sensitive treatments directly to your home.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Millions of UK adults need medical support beyond willpower; prescription therapies such as{" "}
          <strong>Wegovy</strong>, <strong>Mounjaro</strong>, <strong>Saxenda</strong> and{" "}
          <strong>Orlistat</strong> require lawful prescribing routes.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            WePrescribe
          </a>{" "}
          presents itself as a UK licensed online pharmacy where{" "}
          <strong>pharmacist prescribers and clinicians</strong> assess questionnaires before any prescription
          only medicine ships.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise focuses on how their public pathway differs from grey market sellers MHRA frequently warns
          about, plus what patients report regarding carriage speeds and budgeting.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Clinician led regulated prescribing</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Rather than retail checkout, patients complete <strong>online medical forms</strong> covering
            history, medicines and conditions. A <strong>UK registered pharmacist prescriber or clinician</strong>{" "}
            decides appropriateness for controlled obesity medicines. That mirrors legal requirements: POM supply
            demands documented judgement, especially for GLP‑1 agents with cardiovascular and gastrointestinal
            considerations.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Structured patient journey</p>
        <Points
          items={[
            "Select the therapy line that matches prescriber guidance (e.g. Wegovy, Mounjaro, Orlistat, Saxenda, alli, Xenical).",
            "Submit allergies, symptoms and concurrent drugs.",
            "Await clinical review outcome.",
            "If approved, prescriptions route to regulated dispensing with courier booking.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          That sequencing aims to prevent click-to-buy misuse of potent metabolic medicines.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Treatments commonly referenced</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Category pages list <strong>alli</strong>, <strong>Mounjaro</strong>, <strong>Orlistat</strong>,{" "}
          <strong>Saxenda</strong>, <strong>Wegovy</strong> and <strong>Xenical</strong>. Injectable GLP‑1 options
          focus on appetite signalling; Orlistat and Xenical limit dietary fat absorption in the gut. Clinicians
          usually insist on parallel nutrition and activity coaching for durable outcomes.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery handling</p>
        <Points
          items={[
            "Discreet unbranded parcels with tracking numbers from dispatch to door.",
            "GLP‑1 lines often use tracked services landing in about 2–3 working days standard or next working day premium where purchased.",
            "Cold shipments use insulated packaging; manufacturer guidance cited allows up to ~72 hours transit even if ice packs thaw, provided timelines stay within labelled limits.",
            "Signatures may be required; Royal Mail neighbour policies mean patients should retrieve parcels quickly.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Broader pharmacy SKUs may use <strong>Tracked 48</strong>, <strong>Tracked 24</strong> or{" "}
          <strong>Special Delivery by 1pm</strong> tiers depending on urgency.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative costs</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Marketing examples cite <strong>Wegovy pens roughly £114.99 at low doses up to about £239.99</strong>{" "}
            for higher strengths before bundles shift. Independent surveys often place private GLP‑1 monthly
            spend around <strong>£150–£300</strong> depending on dose and service wrap. Consultation payments
            typically settle before dispensing triggers. Referral or voucher schemes may rebate future orders when
            promotional terms qualify.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety reminders</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Screening covers BMI thresholds, pregnancy status, pancreatitis history, drug interactions and prior
            weight management attempts. Buying identical molecules from unknown social listings bypasses those
            checks and breaks UK law.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Advantages and limitations (balanced)</p>
        <Points
          items={[
            "Pros: UK legitimate pharmacy narrative, structured assessment, traceable delivery, multi speed postage, occasional referral savings.",
            "Cons: Private pricing without NHS subsidy, cumulative monthly spend, potential delays if questionnaires or evidence uploads stall.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>How we think about “programme” marketing elsewhere</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Some articles blur prescription clinics with supplement subscriptions; WePrescribe’s positioning stays
          on the pharmacy side of that line. When you evaluate any vendor, ask whether a named prescriber reviews
          your file, whether a GPhC pharmacy dispatches stock, and whether tracking IDs prove chain of custody.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Who prescribes at WePrescribe?",
              a: "Marketing highlights UK licensed pharmacist prescribers and clinicians reviewing questionnaires before prescriptions release.",
            },
            {
              q: "How fast is injectable delivery?",
              a: "Summaries cite about 2–3 working days for standard tracked GLP‑1 shipments or faster paid tiers.",
            },
            {
              q: "What about cold chain?",
              a: "Insulated packs aim to keep fridge medicines within manufacturer windows, noting up to ~72 hour transit allowances when guidance permits.",
            },
            {
              q: "Are there referral discounts?",
              a: "Terms mention referral or promo schemes subject to qualifying consultations — read live conditions.",
            },
            {
              q: "Which medicines are listed?",
              a: "Weight loss hub references alli, Mounjaro, Orlistat, Saxenda, Wegovy and Xenical among others.",
            },
            {
              q: "Could uploads delay approval?",
              a: "Yes — missing clinical evidence can postpone review and dispatch timelines.",
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
          WePrescribe markets pharmacist anchored obesity care with transparent logistics expectations and
          illustrative pen pricing that spans starter through maintenance strengths. Pair their checkout with
          Health Wise dose rows to see whether their headline totals beat peers for the strength you titrate
          toward next.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit WePrescribe
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
