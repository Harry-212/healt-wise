"use client";

import { HazardBox, PharmacyDossierPage, Points } from "./_dossier";

const providerUrl = "https://dotor.co.uk/";

export default function DotorPharmacyContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Dotor"
      fileRef="HW-DOTOR-2026"
      title="Dotor Weight Loss Treatment Review: Online Access to Mounjaro, Wegovy and Prescription Support in the UK"
      subtitle="Official dossier: how Dotor works, treatment options, delivery controls, pricing context and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Saxenda · Orlistat · Xenical · XLS Medical"
      providerName="Dotor"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Dotor" },
        { k: "Treatments", v: "Mounjaro · Wegovy · Saxenda · Orlistat · Xenical · XLS Medical" },
        { k: "Fulfilment", v: "In-house dispensing · DPD tracked delivery" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Weight loss can look straightforward on paper. Eat less. Move more. Stay consistent.
        </p>
        <p className="text-slate-800 leading-relaxed">
          But appetite regulation, metabolic factors, stress, emotional eating, and daily routines
          can make that harder than advice tends to admit. That may be one reason prescription
          treatments like Mounjaro and Wegovy have moved into mainstream discussion in the UK.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Dotor weight loss treatment is one of several UK online pharmacy services operating in
          that space. Through Dotor, eligible patients may access prescription medication, clinical
          review, tracked delivery, and pharmacy support — without needing a traditional GP
          appointment.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Dotor works, what treatments may be available, how delivery is
          managed, likely costs, and why some patients consider it.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is Dotor weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <p className="text-slate-800 leading-relaxed">
            Dotor provides online access to prescription and non-prescription weight management
            products, subject to medical review where required. Patients typically:
          </p>
          <Points
            items={[
              "Complete a confidential online consultation",
              "Receive prescriber review",
              "Get approved if treatment is suitable",
              "Have medication dispensed and delivered to their address",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            The model is simple — but what may differentiate Dotor is not only prescribing access.
            Delivery control and in-house dispensing can materially shape the patient experience.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What weight loss medications does Dotor offer?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              Injectable weight loss treatments
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">Available options may include:</p>
            <Points items={["Mounjaro", "Wegovy", "Saxenda"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              These medications may support weight loss by reducing appetite, increasing satiety,
              and helping some patients sustain lower calorie intake. That does not mean effortless
              results — but it may help make behaviour change more maintainable.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              Oral prescription treatments
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Not everyone wants injections. Dotor also appears to offer:
            </p>
            <Points items={["Orlistat", "Xenical"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              These work differently. Orlistat, for example, may reduce fat absorption from meals —
              a different mechanism with different trade-offs.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              Non-prescription weight management aid
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Dotor also lists non-prescription options such as:
            </p>
            <Points items={["XLS Medical Fat Binder"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              This is not a prescription medicine, but may appeal to people exploring non-
              prescription support.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why some patients choose Dotor
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Regulated prescribing and in-house dispensing
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Some online providers rely on third-party fulfilment. Dotor appears to combine
              prescribing and pharmacy dispensing within its own service model, which may support:
            </p>
            <Points items={["Product authenticity", "Faster coordination", "Regulatory oversight"]} />
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Clinical review before approval
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Before medication is prescribed, patients complete a medical assessment covering:
            </p>
            <Points items={["Weight and BMI", "Medical history", "Current medication use", "Lifestyle information"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Prescribers may request further information by email, phone or video. That may feel
              more thorough than minimal online forms — and that is generally a good thing.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Multiple treatment options (injections and tablets)
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Some people want weekly injections. Others prefer tablets. Some simply want a
              lower-cost entry point. Having options can matter because suitability is individual.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              4. Customer feedback signals
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Public reviews often highlight themes such as fast delivery, customer support quality,
              clear instructions and ease of ordering. Reviews are not perfect evidence — but they
              can still be useful signals.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How Dotor works
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            {
              t: "Step 1: Online assessment",
              d: "Confidential questionnaire to check whether treatment may be appropriate.",
            },
            {
              t: "Step 2: Clinical review",
              d: "A UK prescriber reviews the submission and may request further information. Not everyone qualifies.",
            },
            {
              t: "Step 3: Dispensing and dispatch",
              d: "If approved: prescription issued, medication dispensed in-house, then prepared for shipment.",
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
          Dotor delivery and home shipping
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">DPD tracked delivery options</p>
            <Points
              items={[
                "Next working day delivery",
                "Delivery before 10:30am (where available)",
                "Delivery before noon (where available)",
                "Weekend delivery options (where available)",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              DPD-style delivery management may allow tracking in real time and changes such as
              safe-place setup, neighbour receipt, redirection, or collection-point pickup.
            </p>
          </div>

          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Temperature-controlled packaging</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              For GLP-1 injections, Dotor appears to ship using insulated Woolcool packaging with
              ice packs to help maintain temperature during transit. Address accuracy and
              availability to receive deliveries may matter more for temperature-sensitive items.
            </p>
          </div>
        </div>
        <div className="mt-4 border border-slate-200/90 bg-white/80 p-5 shadow-sm">
          <p className="font-bold text-slate-900">Typical dispatch timeframes</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            Orders appear typically dispatched within <strong>1–2 working days</strong> after
            approval, though timelines can vary by stock and order volume.
          </p>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            How much does Dotor weight loss treatment cost?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing varies by medication and dose. Example entry pricing referenced publicly may
            include Mounjaro from around <strong>£134.99+</strong>, with higher doses increasing
            cost over time.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Oral treatments such as Orlistat / Xenical may start from around <strong>£19.99+</strong>{" "}
            depending on pack size and brand, while non-prescription products (e.g. XLS Medical)
            may sit around <strong>£75+</strong>.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Dotor does not appear to operate automatic recurring subscriptions. Paying per order
            may appeal to people who prefer flexibility.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Ongoing support and monitoring
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Dotor frames treatment as more than a checkout. Support may include clinical oversight,
            pharmacy guidance and help around dosing or side effects — which can be as important as
            the initial prescription.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Prescription weight loss medication is generally intended for patients with{" "}
            <strong>BMI over 30</strong> or <strong>BMI over 27</strong> with related conditions. A
            proper screening process is not optional.
          </p>
        </section>
      </div>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I get Mounjaro from Dotor?",
              a: "Yes. Mounjaro appears to be available through Dotor following a clinical assessment and approval process.",
            },
            {
              q: "Does Dotor offer Wegovy for weight loss?",
              a: "Yes. Wegovy appears among available prescription treatment options, subject to suitability checks.",
            },
            {
              q: "How much does Dotor weight loss treatment cost?",
              a: "Costs may start around £134.99 for Mounjaro, with oral options from around £19.99 depending on treatment and dose.",
            },
            {
              q: "Does Dotor use tracked delivery?",
              a: "Yes. DPD appears to provide tracked delivery, with timed and weekend options potentially available depending on location and cut-off times.",
            },
            {
              q: "Does Dotor offer subscription plans?",
              a: "Dotor appears to use individual order payments rather than recurring subscriptions, which may suit patients wanting flexibility.",
            },
            {
              q: "Are non-injection alternatives available?",
              a: "Yes. Options may include Orlistat and non-prescription aids such as XLS Medical Fat Binder.",
            },
          ].map((f) => (
            <div key={f.q} className="border-t border-slate-200/70 pt-4">
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-2 text-slate-800 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Conclusion
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          If you&apos;re looking for a private route to prescription weight loss treatment, Dotor
          appears to offer a credible option. Access to Mounjaro and Wegovy, combined with in-house
          dispensing, tracked DPD delivery and non-subscription ordering, gives it a slightly
          different profile from many competitors.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will it suit everyone? Probably not. Some patients may still prefer a traditional GP-led
          route. But for people prioritising convenience, delivery control and medically supervised
          support, Dotor may be worth considering as part of a longer-term plan.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}

