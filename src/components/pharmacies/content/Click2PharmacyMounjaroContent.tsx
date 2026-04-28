"use client";

import { HazardBox, PharmacyDossierPage, Points } from "./_dossier";

const providerUrl = "https://click2pharmacy.co.uk/product/mounjaro-weight-loss-injections/";

export default function Click2PharmacyMounjaroContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Click2Pharmacy"
      fileRef="HW-CLICK2-2026"
      title="Click2Pharmacy Mounjaro Review: Buying Mounjaro Weight Loss Injections Online in the UK"
      subtitle="Official dossier: how Click2Pharmacy’s Mounjaro pathway works, what makes Mounjaro different, delivery notes, pricing context, and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro"
      providerName="Click2Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Click2Pharmacy" },
        { k: "Focus", v: "Mounjaro weight loss injections" },
        { k: "Fulfilment", v: "Home delivery" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          For some people, losing weight is not really about knowing what to do. They already know.
          Eat less. Move more. Avoid snacking late. Stay consistent.
        </p>
        <p className="text-slate-800 leading-relaxed">
          The difficulty is doing those things when hunger, cravings, or stalled progress keep
          getting in the way. That may be part of why medications like Mounjaro have generated so
          much attention in the UK.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Click2Pharmacy Mounjaro weight loss injections aim to offer a practical route into that
          treatment — through online consultation, prescription approval, and home delivery.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Click2Pharmacy works, what makes Mounjaro different, pricing,
          delivery, and whether the service may be worth considering.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is Click2Pharmacy Mounjaro weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <p className="text-slate-800 leading-relaxed">
            Click2Pharmacy offers access to prescription weight loss treatment centered around
            Mounjaro, subject to medical review. The process is handled online. Typically,
            patients:
          </p>
          <Points
            items={[
              "Complete a consultation",
              "Receive a clinical assessment",
              "Are approved if suitable",
              "Have medication delivered to their address",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            The bigger appeal may be avoiding friction — because for many people, the barrier is
            not willingness. It’s access.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why choose Click2Pharmacy for Mounjaro?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Convenient online access to Mounjaro
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Traditional routes can be slow. GP appointments may take time, specialist access can
              be inconsistent, and some patients want a more private option. With Click2Pharmacy,
              much of the process can happen remotely. That may suit people who:
            </p>
            <Points
              items={[
                "Want faster access to treatment",
                "Prefer online healthcare",
                "Need privacy",
                "Have busy schedules",
              ]}
            />
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to Mounjaro — one of the most discussed injections
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              A major reason people use the service is access to Mounjaro. Interest comes from
              clinical outcomes, but also from how it works.
            </p>
            <p className="mt-4 font-bold text-slate-900">How Mounjaro may support weight loss</p>
            <Points
              items={[
                "Help reduce hunger",
                "Increase fullness",
                "Lower food cravings",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              That may allow some patients to naturally consume fewer calories — not effortlessly,
              but perhaps more sustainably.
            </p>
            <p className="mt-4 font-bold text-slate-900">
              Why patients are interested in Mounjaro
            </p>
            <Points
              items={[
                "Weekly dosing fits routines",
                "Weight loss may be gradual rather than extreme",
                "Hunger reduction may support adherence",
              ]}
            />
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How Click2Pharmacy works
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            {
              t: "Step 1: Online consultation",
              d: "Health questionnaire covering weight, BMI, medical history and current medications.",
            },
            {
              t: "Step 2: Clinical assessment",
              d: "A prescriber reviews suitability and may assess whether Mounjaro is appropriate and which dose may be suitable.",
            },
            {
              t: "Step 3: Prescription and delivery",
              d: "If approved: prescription issued, medication prepared, packaged and dispatched.",
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
          Delivery for Mounjaro injections
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">How delivery works</p>
            <Points
              items={[
                "Medication is dispensed after approval",
                "Securely packaged",
                "Sent by courier",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Timings vary, but delivery commonly arrives within a few working days.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Temperature control and privacy</p>
            <Points
              items={[
                "Insulated / cold-chain measures may be used where needed",
                "Plain, confidential packaging",
                "Signature delivery may be required",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Temperature control matters because Mounjaro is temperature-sensitive.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            How much does Click2Pharmacy Mounjaro cost?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing depends on dose and stage of treatment. Patients may expect roughly{" "}
            <strong>£140–£180</strong> monthly for lower doses and <strong>£200–£300+</strong> at
            higher doses. Dose escalation often affects cost.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing may include consultation, medical assessment, prescription, medication and
            delivery — a bundled structure that can simplify comparisons.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Ongoing support and medical oversight
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Treatment tends to involve adjustment over time. Click2Pharmacy may provide support
            through medical advice, treatment monitoring and dose adjustments.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Mounjaro is prescription-only and generally considered for people with BMI above 30, or
            BMI above 27 with related health conditions — which makes screening necessary.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Frequently asked questions
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {[
            {
              q: "Can I buy Mounjaro online from Click2Pharmacy?",
              a: "Yes, Mounjaro may be available through Click2Pharmacy following an online consultation and approval.",
            },
            {
              q: "How much does Mounjaro cost at Click2Pharmacy?",
              a: "Pricing may start around £140–£180 per month for lower doses, rising to £200–£300+ for higher strengths.",
            },
            {
              q: "Does Click2Pharmacy deliver Mounjaro to your home?",
              a: "Yes. Approved prescriptions may be delivered directly using secure courier shipping.",
            },
            {
              q: "Is Mounjaro delivered in temperature-controlled packaging?",
              a: "Click2Pharmacy states insulated or cold-chain packaging may be used where required to help maintain medication stability.",
            },
            {
              q: "Is Click2Pharmacy regulated?",
              a: "Click2Pharmacy operates as a pharmacy provider supplying prescription medication through medical review and regulated dispensing.",
            },
            {
              q: "Who is Mounjaro generally prescribed for?",
              a: "It may be considered for people with BMI over 30, or BMI over 27 with certain related health conditions, subject to clinical assessment.",
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
          If you’re looking for online access to Mounjaro weight loss injections, Click2Pharmacy
          appears to offer a practical and credible option. Access to Mounjaro, combined with
          online consultations, temperature-conscious delivery and ongoing support, gives the
          service substance beyond simply selling medication.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          It may not be the right fit for everyone, but for those prioritising convenience, privacy
          and quicker access to medically supervised treatment, it’s one provider worth considering.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            View Click2Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}

