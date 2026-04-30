"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.curatehealth.co.uk/collections/weight-loss";

export default function CuratePharmacyContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Curate"
      fileRef="HW-CURATE-2026"
      title="Curate Weight Loss Treatment Review: Online Access to Wegovy, Saxenda and Prescription Support in the UK"
      subtitle="Official dossier: how Curate works, treatments that may be available, delivery vs collection, pricing context and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Wegovy · Saxenda · Orlistat"
      providerName="Curate"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Curate" },
        { k: "Treatments", v: "Wegovy · Saxenda · Orlistat" },
        { k: "Fulfilment", v: "Delivery · Collection" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Weight loss tends to be talked about as though it’s mostly a discipline problem. Eat
          less. Move more. Stay consistent. That advice isn’t wrong — it’s just incomplete.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Appetite regulation, stress, hormonal factors, old habits, even sitting at a desk all
          day can make progress harder than generic advice suggests. That may help explain why
          prescription treatments such as Wegovy and Saxenda have become increasingly considered in
          the UK.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Curate weight loss treatment sits within that space. Through its online platform, Curate
          offers access to prescription medication, clinical assessment, ongoing support, and a
          choice of home delivery or pharmacy collection.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Curate works, what treatments may be available, how delivery and
          collection are handled, what pricing may look like, and why some people consider it.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is Curate weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <p className="text-slate-800 leading-relaxed">
            Curate offers online access to prescription weight loss medication, subject to a
            clinical review. Patients typically:
          </p>
          <Points
            items={[
              "Complete an online consultation",
              "Receive a prescriber review",
              "Get approved if treatment is appropriate",
              "Choose delivery or pharmacy collection",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            The appeal may be not only convenience — but optionality. Collection can suit people
            who prefer pickup or want a bit more in-person reassurance.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why choose Curate?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Easier access to prescription weight loss medication
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Curate appears designed to reduce friction. Managing treatment online may suit people
              who prefer private access, need faster routes, want flexibility in how medication is
              received, or have struggled using traditional pathways.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to clinically proven treatments
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Curate offers access to prescription medications including:
            </p>
            <Points items={["Wegovy", "Saxenda", "Orlistat"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Treatments like Wegovy and Saxenda may help support weight management by influencing
              appetite regulation — increasing fullness, reducing hunger signals and supporting
              lower calorie intake.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Oral alternatives are available
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Not everyone wants injections. Orlistat works differently, potentially reducing fat
              absorption — a different mechanism with different trade-offs.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How Curate works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Online consultation",
              d: "Questionnaire covering weight, BMI, medical history, lifestyle factors and current medication use.",
            },
            {
              t: "Step 2: Clinical review",
              d: "A prescriber reviews your consultation and decides whether you qualify and which medication may suit your goals.",
            },
            {
              t: "Step 3: Prescription and fulfilment",
              d: "If approved: medication is dispensed and you choose delivery or pharmacy collection.",
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
          Delivery and pharmacy collection
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Home delivery</p>
            <Points
              items={[
                "Secure packaging",
                "Tracked delivery (often)",
                "Discreet, plain packaging",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Timing varies, though orders often appear to be dispatched within a few working days
              after approval.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Pharmacy collection</p>
            <Points
              items={[
                "Pickup option (where available)",
                "May suit those preferring not to receive medication at home",
                "Can feel more reassuring for some patients",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Some deliveries may require a signature for added security.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            How much does Curate weight loss treatment cost?
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing depends on medication and dosage. Tablet costs may range around{" "}
            <strong>£30–£100+</strong> per month. Injection costs may sit around{" "}
            <strong>£150</strong> at lower levels and <strong>£300+</strong> at higher doses, with
            escalation increasing costs over time.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Costs may include consultation, prescription, medication, and delivery or collection.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Ongoing support and why guidance matters
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Weight management is rarely static. Curate may offer progress reviews, ongoing
            monitoring and treatment adjustments over time.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Prescription weight loss treatment is generally considered for people with BMI above
            30, or BMI above 27 with related health conditions — which is why assessment is
            necessary.
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
              q: "Can I get Wegovy from Curate?",
              a: "Yes, Wegovy may be available through Curate after an online consultation and approval.",
            },
            {
              q: "Does Curate offer Saxenda for weight loss?",
              a: "Yes, Saxenda appears among available treatment options, subject to suitability checks.",
            },
            {
              q: "How much does Curate weight loss treatment cost?",
              a: "Costs may range from around £30–£100+ for tablets and £150–£300+ per month for injections, depending on medication and dosage.",
            },
            {
              q: "Does Curate deliver weight loss medication to your home?",
              a: "Yes. Approved prescriptions may be delivered directly to your address, often with tracked shipping.",
            },
            {
              q: "Can I collect my medication instead?",
              a: "Yes. Curate appears to offer pharmacy collection as an alternative to home delivery.",
            },
            {
              q: "Is Curate a regulated provider?",
              a: "Curate supplies prescription medication through a medically reviewed process involving licensed pharmacy fulfilment.",
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
          If you’re looking for a private route to prescription weight loss treatment, Curate
          appears to offer a practical option. Access to medications such as Wegovy and Saxenda,
          paired with online assessment, flexible delivery or collection, and ongoing support, may
          make it appealing for patients prioritising convenience and flexibility.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          It may not suit everyone, but for people wanting medically supervised support with a
          choice of fulfilment options, it may be worth considering.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Curate
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}

