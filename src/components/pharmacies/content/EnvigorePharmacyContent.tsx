"use client";

import { HazardBox, PharmacyDossierPage, Points } from "./_dossier";

const providerUrl = "https://www.envigore.com/";

export default function EnvigorePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Envigore"
      fileRef="HW-ENVIGORE-2026"
      title="Envigore Weight Loss Treatment Review: Online Access to Wegovy, Mounjaro and Clinician-Led Support in the UK"
      subtitle="Official dossier: how Envigore works, programme-style support, delivery, pricing context and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Wegovy · Mounjaro · clinical programme · UK"
      providerName="Envigore"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Envigore" },
        { k: "Treatments", v: "Wegovy · Mounjaro (where appropriate)" },
        { k: "Fulfilment", v: "Tracked delivery · cold-chain (injectables)" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Weight loss can be framed as a discipline problem. Eat less. Move more. Stay consistent.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That advice is not wrong, exactly — but it can be incomplete. For many people, hunger
          signals, metabolic resistance, emotional eating or long-term weight cycling may complicate
          things. That may help explain why prescription treatments like Wegovy and Mounjaro have
          become a growing part of the conversation.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Envigore weight loss treatment appears to position itself as more than an online
          medication provider. Through a digital medical model, Envigore combines prescription
          access, clinical oversight, coaching support, tracked delivery and ongoing maintenance
          planning. That broader model may be part of what separates it from simple “buy
          medication online” services.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Envigore works, what treatments may be available, how delivery is
          handled, likely pricing, and why some patients consider it for longer-term weight
          management.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          What is Envigore weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Envigore provides online access to prescription weight loss treatment, subject to
            clinical assessment. The service generally includes:
          </p>
          <Points
            items={[
              "Online eligibility questionnaire",
              "Medical review by a pharmacist and prescriber",
              "Access to treatment where appropriate",
              "Home delivery of medication",
              "Ongoing support and maintenance tools",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            That last part matters. Some providers stop at the prescription. Envigore appears to put
            more emphasis on follow-up, which may appeal to people looking for structure rather than
            just supply.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why choose Envigore for weight loss treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Access to clinically proven weight loss medications
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Envigore offers prescription GLP-1 treatments including:
            </p>
            <Points items={["Wegovy", "Mounjaro"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              These medications may support weight management by influencing appetite regulation and
              satiety. They may help reduce hunger, increase fullness and support lower calorie
              intake. That does not mean effortless weight loss — but clinical evidence may suggest
              they can help some people sustain changes that are otherwise hard to maintain.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. A programme rather than medication alone
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Envigore does not appear positioned purely as a medication supplier. It appears
              structured more like a medical programme, with elements such as:
            </p>
            <Points
              items={[
                "Clinical consultations",
                "Personalised treatment planning",
                "Lifestyle guidance",
                "Behaviour support",
                "Progress check-ins",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Some patients may prefer a simpler, lower-cost medication-only route — both priorities
              can be valid.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Safety screening before prescribing
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Before treatment starts, patients complete a medical assessment covering:
            </p>
            <Points
              items={[
                "BMI",
                "Medical history",
                "Current medications",
                "Potential contraindications",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              That review appears to involve both pharmacist and clinician oversight — prescription
              medicines should not function like over-the-counter impulse purchases.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How Envigore works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Free online assessment",
              d: "A short questionnaire (often around 5–10 minutes) covering key health information and treatment suitability.",
            },
            {
              t: "Step 2: Medical review",
              d: "A registered pharmacist and prescribing clinician review the application and may determine whether treatment is appropriate and which medication may suit your needs. Not everyone will be approved.",
            },
            {
              t: "Step 3: Consultation where needed",
              d: "In some cases, a virtual consultation may follow so you can ask questions and finalise prescribing.",
            },
            {
              t: "Step 4: Approval and dispatch",
              d: "Once approved: prescription is processed, medication is dispensed and the order is shipped.",
            },
            {
              t: "Step 5: Ongoing support",
              d: "Support may continue after dispatch — follow-up guidance, motivational support and maintenance planning.",
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
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Envigore delivery and home shipping
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Fast delivery</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Orders often appear to arrive within <strong>1–2 working days</strong> after approval.
              For ongoing treatment, avoiding delays can matter more than people assume.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Tracked delivery</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Orders are generally sent with tracking; patients may receive a courier link to follow
              shipment progress.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Cold-chain shipping for injections</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Injectables like Wegovy and Mounjaro often require controlled temperatures. Envigore
              appears to use cold-chain packaging designed to maintain around{" "}
              <strong>2–8°C</strong> for up to <strong>48 hours</strong>, which may help support
              medication stability, effectiveness and safe transit.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Signature delivery and address management</p>
            <Points
              items={[
                "Some deliveries may require a signature",
                "Update delivery addresses where supported",
                "Adjust dates if travelling (where available)",
                "Track orders directly",
                "Contact support if delayed",
              ]}
            />
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Discreet packaging</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Envigore states medication is shipped in plain packaging with no obvious indication of
              contents.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            How much does Envigore weight loss treatment cost?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Costs depend on medication and dose. Standard GLP-1 pricing may start around{" "}
            <strong>£124–£129 per month</strong>; higher doses or more intensive plans may cost
            more.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Envigore also appears to offer wellness bundles starting around <strong>£99</strong> —
            these differ from prescription treatment and are worth separating when comparing value.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Delivery may be calculated at checkout; some promotions may include free shipping.
            Envigore appears to use a <strong>pay-as-you-go</strong> model rather than locking
            patients into long contracts.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Ongoing support and maintenance plans
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Envigore appears to include maintenance-oriented elements such as monthly check-ins,
            dose reviews, priority refills, habit support tools and progress tracking dashboards —
            which may help address rebound weight regain.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            If someone only wants the lowest-cost prescription access, there may be cheaper options
            elsewhere — but lower price does not always equal better value when support matters.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Real customer reviews and trust
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Envigore appears to hold strong customer ratings (around <strong>4.7/5</strong>), with
          feedback often referencing fast delivery, helpful support, a straightforward process and
          clinical professionalism. Reviews should always be read critically, but patterns can
          still be informative.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why medical oversight matters
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Prescription weight loss medication is not suitable for everyone. It may be considered for
          people with <strong>BMI over 30</strong>, or <strong>BMI over 27</strong> with related
          conditions. That is why assessment is necessary — Envigore appears to keep that front and
          centre.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Limitations to consider
        </p>
        <div className="mt-3 space-y-3 rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
          <p className="font-bold text-slate-900">UK only</p>
          <p className="text-slate-800 leading-relaxed">
            Prescription services appear limited to the UK; patients outside the UK may not be
            eligible.
          </p>
          <p className="font-bold text-slate-900 pt-2">Eligibility restrictions</p>
          <p className="text-slate-800 leading-relaxed">
            Some health conditions may rule out certain medications. Not everyone will qualify — and
            that is part of responsible prescribing.
          </p>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider Envigore?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want medically supervised weight loss, value coaching
          support as well as medication, prefer online access, need reliable home delivery and want
          maintenance planning — not just initial treatment. It may be less suitable for people only
          seeking the cheapest medication source.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I get Wegovy from Envigore?",
              a: "Yes. Wegovy may be available through Envigore following a clinical assessment and approval.",
            },
            {
              q: "Does Envigore offer Mounjaro for weight loss?",
              a: "Yes. Mounjaro appears to be available for eligible patients through Envigore's prescribing service.",
            },
            {
              q: "How much does Envigore weight loss treatment cost?",
              a: "Standard GLP-1 treatment may start around £124–£129 per month, with higher doses potentially costing more.",
            },
            {
              q: "Does Envigore offer next-day or fast delivery?",
              a: "Orders often appear to arrive within 1–2 working days after approval, usually with tracked delivery.",
            },
            {
              q: "Is Envigore regulated?",
              a: "Envigore operates as a regulated dispensing provider with clinician and pharmacist oversight.",
            },
            {
              q: "Does Envigore offer support after you start treatment?",
              a: "Yes. Support may include maintenance planning, dose reviews, coaching tools and follow-up check-ins.",
            },
          ].map((f) => (
            <div key={f.q} className="border-t border-slate-200/70 pt-4 first:border-t-0 first:pt-0">
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-2 text-slate-800 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Conclusion
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          If you are looking for more than simple prescription access, Envigore weight loss treatment
          appears to offer a broader model worth considering. Access to treatments like Wegovy and
          Mounjaro, combined with cold-chain delivery, clinician oversight and structured
          maintenance support, gives the service more depth than many medication-only providers.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will it suit everyone? Probably not. Some people may prefer lower-cost, stripped-back
          alternatives. But for patients who value support, flexibility and medically supervised
          long-term weight management, Envigore may be worth serious consideration.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
