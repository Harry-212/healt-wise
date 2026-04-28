"use client";

import { HazardBox, PharmacyDossierPage, Points } from "./_dossier";

const providerUrl = "https://cuvahealth.co.uk/treatment/weight-loss";

export default function CuvaHealthContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Cuva Health"
      fileRef="HW-CUVA-2026"
      title="Cuva Health Weight Loss Treatment Review: Online Access to Mounjaro, Wegovy and Clinician-Led Support in the UK"
      subtitle="Official dossier: how Cuva Health works, clinician-led review, cold-chain delivery, pricing context and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Liraglutide"
      providerName="Cuva Health"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Cuva Health" },
        { k: "Treatments", v: "Mounjaro · Wegovy · Liraglutide" },
        { k: "Fulfilment", v: "Tracked 24 + cold-chain (where needed)" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Losing weight is often framed as a discipline problem. Eat less. Move more. Try harder.
          That explanation can feel too simplistic.
        </p>
        <p className="text-slate-800 leading-relaxed">
          For many people, appetite regulation, stress, hormonal factors, and long-term habits may
          play a bigger role than willpower alone. That may be one reason prescription treatments
          like Mounjaro and Wegovy have become much more widely discussed in the UK.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Cuva Health weight loss treatment sits in that category, but with a slightly different
          angle. Cuva Health appears to position itself more as a clinician-led weight management
          service — combining prescriptions, medical oversight, delivery and ongoing support into
          one model.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Cuva Health works, what treatments may be available, how delivery
          is handled, what pricing may look like, and why some people consider it for medically
          supervised weight loss.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is Cuva Health weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <p className="text-slate-800 leading-relaxed">
            Cuva Health offers online access to prescription weight loss medication, subject to
            clinical review. The process is not simply adding medication to a basket and checking
            out. Typically, it involves:
          </p>
          <Points
            items={[
              "Completing an online assessment",
              "Receiving clinician review",
              "Getting approved if suitable",
              "Having medication delivered to your address",
              "Accessing ongoing support after treatment begins",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            That extra support layer appears to be part of the appeal.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why choose Cuva Health?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Clinician-led rather than transaction-led care
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Prescribing appears tied to BMI criteria, medical history, current medications,
              potential interactions and broader suitability checks. That matters — prescription
              weight loss treatment should not be handled casually.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to clinically proven weight loss medications
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Cuva Health offers access to several prescription options, including:
            </p>
            <Points items={["Mounjaro", "Wegovy", "Liraglutide"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              These treatments may support weight management by increasing satiety, reducing hunger
              signals and supporting lower calorie intake — without replacing behaviour change.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How Cuva Health works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Online assessment",
              d: "Secure questionnaire covering weight, BMI, medical background, allergies and current medication use.",
            },
            {
              t: "Step 2: Clinical review",
              d: "UK-registered prescribers review eligibility and suitable medication options. Not everyone will qualify.",
            },
            {
              t: "Step 3: Prescription and supply",
              d: "If approved: prescription issued, medication dispensed, safety checks completed, then prepared for dispatch.",
            },
          ].map((s) => (
            <div key={s.t} className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
              <p className="font-bold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Delivery and cold-chain handling
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">How delivery works</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Approved orders may be sent via tracked delivery (often cited as Royal Mail Tracked
              24), with tracking provided after dispatch. Some deliveries may require a signature.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Cold-chain delivery for injections</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Temperature-sensitive treatments such as Wegovy and Mounjaro may require proper
              refrigeration. Cuva Health appears to use temperature-controlled packaging and
              cold-chain handling to help protect medication stability.
            </p>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Cuva states orders are shipped in plain packaging, supporting privacy.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            How much does Cuva Health weight loss treatment cost?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing depends on medication and dosage. Typical monthly costs may be around{" "}
            <strong>£199–£249</strong> for Wegovy and <strong>£200–£300</strong> for Mounjaro, with
            higher doses often increasing costs.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing may include medication, clinical assessment, prescription, secure delivery and
            ongoing support — which can affect value comparisons.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Who might consider Cuva Health?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            This service may suit people who want clinician-led weight loss support, prefer private
            online access, need secure home delivery and value ongoing guidance. It may be less
            ideal for those looking purely for the cheapest medication source.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Frequently asked questions
        </p>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {[
            {
              q: "Can I get Mounjaro through Cuva Health?",
              a: "Yes, Mounjaro may be available through Cuva Health following online assessment and clinical approval.",
            },
            {
              q: "Does Cuva Health offer Wegovy for weight loss?",
              a: "Yes, Wegovy appears among available treatment options, subject to eligibility checks.",
            },
            {
              q: "How much does Cuva Health weight loss treatment cost?",
              a: "Costs may range from around £199–£249 monthly for Wegovy and £200–£300 monthly for Mounjaro, depending on treatment and dose.",
            },
            {
              q: "Does Cuva Health use temperature-controlled delivery?",
              a: "Yes. Temperature-sensitive medications appear to be shipped using cold-chain packaging to help maintain effectiveness.",
            },
            {
              q: "Is Cuva Health regulated?",
              a: "Cuva Health operates as a UK-regulated online pharmacy, with prescribing handled through qualified clinicians.",
            },
            {
              q: "Is Cuva Health only a pharmacy or does it include support?",
              a: "It appears to include clinical review, follow-up support and some lifestyle guidance alongside medication supply.",
            },
          ].map((item) => (
            <div key={item.q} className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
              <p className="font-bold text-slate-900">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Conclusion</h2>
        <p className="mt-3 text-slate-800 leading-relaxed">
          If you’re looking for a private route into prescription weight loss treatment, Cuva
          Health appears to offer a credible option. Access to medications such as Mounjaro and
          Wegovy, combined with clinician review, cold-chain delivery and ongoing support, gives it
          a more structured feel than a simple online pharmacy model.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          It may not suit everyone, but for those wanting medically supervised treatment, discreet
          delivery and a more supported approach, it may be worth considering.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            View Cuva Health
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}

