"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://happypharmacy.co.uk/pages/weight-loss";

export default function HappyPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Happy Pharmacy"
      fileRef="HW-HAPPY-2026"
      title="Happy Pharmacy Weight Loss Treatment Review: Online Access to Mounjaro, Wegovy and Regulated Prescription Support"
      subtitle="Official dossier: GPhC-regulated supply, injections and tablets, pricing context, discreet tracked delivery and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Orlistat · Alli · UK"
      providerName="Happy Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Regulation", v: "GPhC-registered UK online pharmacy" },
        { k: "From (guide)", v: "Mounjaro ~£139.99 · Wegovy ~£89.99" },
        { k: "Fulfilment", v: "Consultation · discreet tracked delivery" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Happy Pharmacy.webp"
      heroProviderLogoAlt="Happy Pharmacy"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-indigo-900">Service Profile:</strong> Happy Pharmacy operates within the UK’s regulated online pharmacy sector, providing access to clinically approved weight loss medications. Because no two weight loss journeys are exactly alike, understanding the specific clinical protocols, shipping methods, and pricing tiers of Happy Pharmacy is a crucial step in finding the right healthcare partner.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Losing weight often gets reduced to simple advice. Eat less. Move more. Stay disciplined. But
          for many people, it rarely feels that straightforward. Appetite can be difficult to manage;
          work routines get in the way; emotional eating shows up; sometimes biology seems to push back.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That may help explain why prescription treatments like Mounjaro and Wegovy have become more
          widely considered in the UK. Happy Pharmacy weight loss treatment is one provider operating in
          that space — through its online service, it offers consultations, access to prescription
          medications, discreet delivery, and ongoing support for eligible patients.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Happy Pharmacy works, what medications may be available, how delivery
          is handled, what treatment may cost, and why some patients consider it.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          What is Happy Pharmacy weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Happy Pharmacy is a GPhC-regulated pharmacy providing online access to prescription and
            over-the-counter weight loss treatments. Rather than arranging face-to-face appointments,
            patients typically:
          </p>
          <Points
            items={[
              "Choose a treatment",
              "Complete an online consultation",
              "Receive a clinical review",
              "Get medication delivered to their address",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            The appeal may be less about simplicity alone and more about access — delays, appointments,
            or limited prescribing availability can be barriers; online treatment may remove some of that
            friction.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why choose Happy Pharmacy for weight loss treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Access to regulated prescription weight loss medication
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Through a GPhC-regulated model, Happy Pharmacy appears to build in clinical review before
              prescribing, licensed dispensing, regulated supply channels, and professional oversight —
              which may reduce risks associated with unregulated sellers and counterfeit injections.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Clinically proven weight loss treatments
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Happy Pharmacy offers a mix of injectable and oral options: Mounjaro, Wegovy, Orlistat,
              Alli. GLP-1 medications may help regulate appetite through satiety pathways — increase
              fullness, reduce hunger, support lower calorie intake. Lifestyle changes are not optional.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Tablet-based alternatives
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Orlistat may reduce fat absorption; Alli may offer a lower-strength entry point — different
              approach, different trade-offs for those who do not want injections initially.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How Happy Pharmacy works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              t: "Step 1: Choose your treatment",
              d: "Mounjaro, Wegovy, Orlistat, or Alli — product pages generally explain what each may suit.",
            },
            {
              t: "Step 2: Complete online consultation",
              d: "Short health questionnaire covering BMI, medical history, and current medication use.",
            },
            {
              t: "Step 3: Clinical review",
              d: "A pharmacist or clinician assesses suitability — not everyone will qualify.",
            },
            {
              t: "Step 4: Prescription and delivery",
              d: "If approved: medication is dispensed, securely packaged, and sent to your address.",
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
          Happy Pharmacy delivery and home shipping
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">How delivery works</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Once approved: medication is prepared by the pharmacy, packaged discreetly, sent via
              tracked delivery — useful reassurance for prescription medication.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Fast processing</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Orders appear processed promptly after approval; many patients may receive treatment within a
              few working days — timing may vary.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Discreet packaging and tracking</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Happy Pharmacy states packaging is unbranded — no obvious indication of contents. Tracking
              may help monitor progress and raise issues if needed.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Safe handling</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Medication is dispensed through regulated channels — supporting authentic supply, safety
              controls, and compliance; protective packaging helps maintain quality in transit.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            How much does Happy Pharmacy weight loss treatment cost?
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Injectables:</strong> Mounjaro from around <strong>£139.99</strong>, Wegovy from around{" "}
            <strong>£89.99</strong> — higher doses may increase price. <strong>Tablets:</strong> Orlistat
            from <strong>£34.98</strong>, Alli from <strong>£39.98</strong>.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Costs may include consultation, prescription review, medication, and delivery — pricing
            appears transparent upfront.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Ongoing support
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Happy Pharmacy may provide dosage guidance, side-effect advice, and follow-up consultations —
            where long-term value often sits. Cheaper is not always better if support and safe prescribing
            matter.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why medical oversight matters
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Prescription weight loss treatment is not appropriate for everyone. It may be considered for
          people with <strong>BMI above 30</strong>, or <strong>BMI above 27</strong> with related health
          conditions — screening is necessary. Happy Pharmacy appears to build that into the process.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider Happy Pharmacy?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want medically supported weight loss, prefer online treatment
          access, need discreet delivery, value regulated providers, or have struggled with diet-only
          methods. It may be less ideal for ongoing in-person clinical care.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why some patients choose Happy Pharmacy
        </p>
        <Points
          items={[
            "Regulation — GPhC oversight",
            "Treatment choice — injections and tablets",
            "Competitive pricing — multiple price points",
            "Discreet delivery — medication shipped directly",
            "Support — follow-up beyond the first order",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I get Wegovy from Happy Pharmacy?",
              a: "Yes, Wegovy may be available through Happy Pharmacy after completing an online consultation and receiving approval.",
            },
            {
              q: "Does Happy Pharmacy offer Mounjaro for weight loss?",
              a: "Yes, Mounjaro appears among available treatment options, subject to clinical suitability.",
            },
            {
              q: "How much does Happy Pharmacy weight loss treatment cost?",
              a: "Costs may start around £139.99 for Mounjaro, £89.99 for Wegovy, and £34.98 for Orlistat, depending on treatment and dosage.",
            },
            {
              q: "Does Happy Pharmacy deliver medication to your home?",
              a: "Yes. Approved prescriptions are shipped directly to your address using discreet, tracked delivery.",
            },
            {
              q: "Is Happy Pharmacy regulated?",
              a: "Happy Pharmacy operates as a GPhC-regulated pharmacy provider supplying medication through a clinically reviewed process.",
            },
            {
              q: "Are non-injection options available?",
              a: "Yes. Options may include Orlistat and Alli for patients preferring oral treatment.",
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
          If you&apos;re looking for a private route to prescription weight loss treatment, Happy
          Pharmacy weight loss treatment appears to offer a credible option. Access to medications such
          as Mounjaro and Wegovy, combined with regulated prescribing, discreet delivery and ongoing
          support, gives it more depth than a basic online pharmacy model.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will it suit everyone? Probably not — some people may still prefer a traditional GP-led route.
          But for those prioritising convenience, safety and medically supervised support, Happy Pharmacy
          may be worth considering as part of a longer-term weight management strategy.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
