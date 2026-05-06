"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://onlinemeds.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function OnlinemedsPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="OnlineMeds"
      fileRef="HW-ONLINEMEDS-2026"
      title="OnlineMeds (UK): Specialist Weight Loss Pharmacy, Mounjaro, Wegovy and Orlistat"
      subtitle="UK pharmacy focused on weight management: pharmacist prescriber assessment, personalised plans, free tracked delivery, discreet packaging, bundled pricing, and follow-up care. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · Orlistat"
      providerName="OnlineMeds"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "OnlineMeds (GPhC 9012658 — verify premises on register)",
        },
        {
          k: "Pathway",
          v: "Online questionnaire · pharmacist prescriber review · regulated dispensing",
        },
        {
          k: "Fulfilment",
          v: "Free tracked UK delivery (as stated) · plain outer packaging · home address",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/OnlineMeds.webp"
      heroProviderLogoAlt="OnlineMeds"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-amber-100 bg-amber-50/30 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-amber-900">Independent Context:</strong> As part of your research into medically supported weight management, evaluating providers like OnlineMeds is highly recommended. This page is designed to give you a transparent overview of OnlineMeds's service model, from their online doctor assessments to how they securely dispatch temperature-sensitive treatments directly to your home.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Weight loss decisions online are noisy: conflicting advice, NHS capacity limits, and
          sellers with uneven safety standards.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            OnlineMeds
          </a>{" "}
          positions itself as a <strong>specialist UK online pharmacy</strong> dedicated to weight
          management rather than a general storefront, so protocols and staff attention lean toward
          screening, titration, and follow-up for obesity medicines.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Medicines such as <strong>Mounjaro</strong>, <strong>Wegovy</strong>, and{" "}
          <strong>Orlistat</strong> need careful eligibility checks, monitoring, and dosing advice.
          OnlineMeds describes a clinically led path so treatment matches your health profile instead of
          a generic basket click.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulated and clinically approved supply</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Public copy states that <strong>qualified pharmacist prescribers</strong> issue prescriptions,
          every patient completes a medical assessment, and medicines dispense from a registered UK
          pharmacy. That contrasts with unregulated sites that let users add prescription injectables
          to a cart without structured review.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Consultation process</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Step 1: Online medical questionnaire covering weight and BMI, medical history, current medicines, and lifestyle. Marketing cites about 5–10 minutes, faster than many traditional GP bookings.",
              "Step 2: Clinical review by a qualified prescriber to confirm safety, appropriateness, and personal fit. Extra information may be requested.",
              "Step 3: Prescription approval followed by pharmacy preparation and dispatch.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Personalised plans and ongoing care</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          OnlineMeds stresses tailored recommendations, individual dosing schedules, lifestyle and
          nutrition advice, and ongoing clinical support including follow-up guidance, side effect help,
          progress monitoring, and dose adjustments within prescribing rules. The intent is a full
          management programme rather than a one off retail purchase.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery: discreet, tracked, free UK</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          After approval, medicines dispense from a UK pharmacy into <strong>plain unbranded
          packaging</strong>, ship with <strong>tracked delivery</strong>, and route to your chosen
          address. Marketing highlights <strong>free delivery across the UK</strong> with full tracking,
          which matters for injectables that need careful handling and predictable receipt.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Speed is described as prompt after approval so treatment can start without unnecessary delay,
          subject to stock and courier performance.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Medicines in scope</p>
        <Points
          items={[
            "GLP-1 injections: Mounjaro and Wegovy among advanced options, framed for appetite reduction, satiety, and longer term loss with supervision.",
            "Oral Orlistat pathway for patients who prefer non-injectable therapy where suitable.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Long-term use and expectations</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Clinical use of obesity pharmacotherapy can continue for extended periods under supervision,
          with public education sometimes referencing therapy horizons of about <strong>16 months or
          longer</strong> depending on progress. OnlineMeds ties that to sustainable lifestyle change
          and improved health outcomes rather than crash dieting.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Cost snapshot</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Orlistat style entry pricing near <strong>£39.99</strong> sometimes appears in category
            marketing. GLP-1 injections typically sit in wider private bands; industry style figures often
            land roughly <strong>£150–£300+ per month</strong> including medication, assessment, and
            support in bundled offers.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            With OnlineMeds, headline pricing commonly bundles <strong>consultation, prescription,
            medication, delivery, and follow-up care</strong>, which can make total cost easier to
            compare than clinics that invoice each line separately.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>NHS access context</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            NHS access to obesity injections remains constrained for many patients, with long waits or
            strict criteria. Private routes such as OnlineMeds advertise immediate access without those
            queues for eligible private payers who prefer to start sooner.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why OnlineMeds stands out (summary)</p>
        <Points
          items={[
            "Specialist focus on weight management rather than mixed retail.",
            "Clinical oversight from qualified professionals.",
            "Fully online journey with home delivery.",
            "Privacy through discreet packaging and confidential service.",
            "Ongoing support after the first order.",
            "Transparent competitive pricing in bundled form.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Patient-centred philosophy</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing emphasises non judgemental support, evidence based advice, and realistic
          expectations instead of miracle promises, aiming for safe progress and sustainable results.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Repeat prescriptions</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Long term therapy needs continuity. OnlineMeds describes <strong>easy repeat ordering</strong>{" "}
          and account based management so supply can stay on track, with periodic clinical review
          expected for ongoing GLP-1 use.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is OnlineMeds only for injections?",
              a: "No. Orlistat routes exist for suitable patients who prefer tablets over pens.",
            },
            {
              q: "Is delivery really free nationwide?",
              a: "Marketing states free tracked UK delivery; confirm any exceptions for offshore postcodes or special courier upgrades on your order page.",
            },
            {
              q: "How do repeats work?",
              a: "Account-based reordering is described; expect clinical review intervals for long-term GLP-1 supply.",
            },
            {
              q: "Who prescribes?",
              a: "Public copy specifies qualified pharmacist prescribers, a different governance pattern from non-clinical marketplaces.",
            },
            {
              q: "Cold chain in heatwaves?",
              a: "Track parcels closely and refrigerate injectables promptly on arrival per the PIL.",
            },
            {
              q: "How do I compare monthly cost fairly?",
              a: "Use Health Wise tables for your exact dose, then check whether OnlineMeds bundles consult and delivery into the same headline as competitors.",
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
          OnlineMeds suits readers who want a <strong>weight-only pharmacy focus</strong>, pharmacist
          prescribing oversight, <strong>free tracked delivery</strong> in the marketing story, discreet
          logistics, and bundled follow-up. Line it up on Health Wise at the same Mounjaro or Wegovy dose
          you actually need rather than comparing starter strips only.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit OnlineMeds
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
