"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

export default function BootsOnlineDoctorContent() {
  /** Paste your live code here later. */
  const discountCode = "";
  const hasDiscount = false;
  return (
    <PharmacyDossierPage
      slugLabel="Boots Online Doctor"
      fileRef="HW-BOOTS-2026"
      title="Boots Online Doctor Weight Loss Review: Access Wegovy and Prescription Support Through a Trusted UK Provider"
      subtitle="How the service works, what treatments may be available, delivery vs pharmacy collection, pricing expectations, and safety notes. Information only — not medical advice."
      scopeLabel="Scope: Wegovy · Saxenda · Orlistat"
      providerName="Boots Online Doctor"
      providerUrl="https://onlinedoctor.boots.com/weight-loss"
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Boots Online Doctor" },
        { k: "Treatments", v: "Wegovy · Saxenda · Orlistat" },
        { k: "Fulfilment", v: "Delivery · Collection" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/boots.webp"
      heroProviderLogoAlt="Boots Online Doctor"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Losing weight can sound straightforward until you actually try doing it for months.
          Calories, cravings, work stress, emotional eating, plateaus — real life tends to
          interfere.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That may be why prescription weight loss treatments have moved into mainstream UK
          healthcare conversations. For some patients, medications like Wegovy or Saxenda may offer
          support where lifestyle changes alone have not been enough.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Boots Online Doctor is one route people often consider, offering online consultations,
          prescription treatment, home delivery or pharmacy collection, and ongoing support — with
          the reassurance of a provider many people already know.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is Boots Online Doctor weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <p className="text-slate-800 leading-relaxed">
            Boots offers an online doctor service that may allow eligible patients to access
            prescription weight loss medication remotely, with clinical review before supply.
          </p>
          <Points
            items={[
              "Complete an online consultation questionnaire",
              "Receive a clinical review by a prescriber",
              "Get approved if medically suitable",
              "Choose delivery or Boots pharmacy collection",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why choose Boots?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Trusted access through an established UK provider
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Brand trust matters in healthcare. Boots is familiar, and that familiarity can
              increase confidence — especially for first-time patients.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to prescription options (injectable and oral)
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Boots Online Doctor may offer treatments including Wegovy, Saxenda, and Orlistat —
              giving a mix of injections and tablet options.
            </p>
            <Points items={["Wegovy", "Saxenda", "Orlistat"]} />
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Flexible fulfilment: delivery or collection
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Some patients prefer home delivery; others prefer picking up from a Boots location.
              Not every provider offers both — that flexibility can be a differentiator.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How Boots Online Doctor works
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            {
              title: "Step 1: Online consultation",
              text: "Questionnaire covering weight, BMI, medical history, lifestyle factors and current medications.",
            },
            {
              title: "Step 2: Clinical review",
              text: "A prescriber assesses suitability, medication choice, and safety considerations. Not everyone will qualify.",
            },
            {
              title: "Step 3: Fulfilment",
              text: "If approved: prescription issued, medication prepared, then delivery or collection arranged.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col border border-slate-200/90 bg-white/80 px-4 py-4 shadow-sm"
            >
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Delivery and collection
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Orders may be delivered to your address using secure packaging and courier dispatch, or
            arranged for collection from a Boots pharmacy (where available). Some deliveries may
            require a signature.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Boots states packaging is plain and unbranded, with no obvious indication of contents.
          </p>
        </section>

        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Cost (illustrative)
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Tablet options may range around <strong>£30–£100+</strong> monthly. Injectable
            treatment may range around <strong>£150–£300+</strong> per month, with higher doses
            often costing more over time. Always confirm live pricing on the provider site.
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
              q: "Can I get Wegovy through Boots Online Doctor?",
              a: "Yes, Wegovy may be available following a consultation and approval process.",
            },
            {
              q: "Does Boots Online Doctor offer Saxenda?",
              a: "Yes, Saxenda may be available, subject to suitability checks.",
            },
            {
              q: "Can Boots deliver weight loss medication to my home?",
              a: "Yes. Approved prescriptions may be delivered to your address; some shipments may require a signature.",
            },
            {
              q: "Can I collect from a Boots pharmacy?",
              a: "In some cases, yes — Boots may offer pharmacy collection as an alternative to delivery.",
            },
          ].map((item) => (
            <div key={item.q} className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
              <p className="font-bold text-slate-900">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </PharmacyDossierPage>
  );
}

