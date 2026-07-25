"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://farmeci.com/";

export default function FarmeciPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Farmeci"
      fileRef="HW-FARMECI-2026"
      title="Farmeci weight management review"
      subtitle="Independent provider review of Farmeci: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice)."
      scopeLabel="Scope: weight management · Mounjaro · Wegovy · UK"
      providerName="Farmeci"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Operator", v: "My Health Stop Ltd" },
        { k: "Treatments", v: "Mounjaro · Wegovy (where clinically appropriate)" },
        {
          k: "Fulfilment",
          v: "Registered partner pharmacies · home delivery · cold-chain where needed",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Farmeci.webp"
      heroProviderLogoAlt="Farmeci"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 shadow-sm">
          <p className="text-slate-800 leading-relaxed">
            <strong className="text-emerald-900">Provider review:</strong> Farmeci
            is a UK online weight management service offering clinician-reviewed
            prescribing with partner-pharmacy dispensing. This page summarises the
            consultation process, clinical support, registered pharmacy
            fulfilment, delivery fees, treatment prices and total monthly cost so
            you can compare providers objectively.
          </p>
        </div>
        <p className="text-slate-800 leading-relaxed">
          Through its online platform, Farmeci typically coordinates digital
          consultations, partner-pharmacy dispensing, and home delivery for
          eligible patients. The review below focuses on how the pathway works in
          practice—not promotional claims.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Consultation process
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Farmeci is operated by My Health Stop Ltd and works with
            GPhC-registered partner pharmacies and independent clinicians. The
            advertised pathway usually includes:
          </p>
          <Points
            items={[
              "Complete an online health assessment (BMI, history, medicines, lifestyle)",
              "Clinician review of suitability",
              "Prescription only if treatment is appropriate",
              "Dispensing via a registered partner pharmacy, then home shipping",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Clinical review is the safeguard: prescription weight management
            medicines should not be treated like ordinary consumer products.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Clinical support
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              Medical oversight
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Treatment begins with a consultation covering BMI, medical history,
              current medications, and relevant conditions. A clinician then
              decides whether treatment may be suitable. Only after approval can
              medication be prescribed.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              Ongoing guidance
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Public-facing materials describe dose guidance, injection-technique
              advice where relevant, expectations around side effects, and
              follow-up support. Confirm live what is included before you order.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Registered pharmacy &amp; fulfilment
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Online assessment",
              d: "A consultation covering weight and BMI, health conditions, current medications, and lifestyle factors.",
            },
            {
              t: "Step 2: Clinician review",
              d: "A prescribing clinician may approve treatment, request more information, or decide treatment is unsuitable.",
            },
            {
              t: "Step 3: Partner pharmacy dispensing",
              d: "If approved, medication is dispensed by a registered partner pharmacy and prepared for shipping.",
            },
          ].map((step) => (
            <div
              key={step.t}
              className="border border-slate-200/90 bg-white/80 p-4 shadow-sm"
            >
              <p className="font-bold text-slate-900">{step.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {step.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Delivery fees &amp; shipping
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">How delivery works</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Once approved, medication is packaged and sent to your chosen
              address. Tracking may be provided. Delivery timing can vary with
              stock and courier performance.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Cold-chain where required</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Temperature-sensitive pens may need refrigerated transport. Farmeci
              indicates cold-chain handling may be used where necessary—confirm
              packaging and signature rules at checkout.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Delivery fees</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Shipping may be charged separately depending on address, method, and
              cold-chain requirements. Fees should be disclosed before payment;
              always confirm the live total.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Farmeci treatment prices &amp; total monthly cost
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Costs depend on medication, dose and duration. Some treatment pages
            indicate prices starting around <strong>£92 per dose or pen</strong>,
            though actual figures change. Higher doses usually cost more.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Farmeci generally appears to offer a{" "}
            <strong>free online consultation</strong>—no separate assessment fee
            unless stated. When budgeting{" "}
            <strong>total monthly cost</strong>, include medication, any delivery
            fees, and follow-up orders if you continue treatment.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Refunds, cancellations and returns
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Prescription medicines generally cannot be returned once dispensed.
            Orders may sometimes be cancelled before dispatch, though fees may
            apply. Confirm administrative charges on Farmeci&apos;s live terms.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider Farmeci
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want clinician-reviewed weight
          management online, discreet home delivery, and partner-pharmacy
          fulfilment. It may be less suited to people who prefer face-to-face
          clinic care.
        </p>
        <Points
          items={[
            "Consultation process is fully online",
            "Clinical support via prescribing review",
            "Registered pharmacy dispensing partners",
            "Delivery fees and cold-chain handling disclosed at checkout",
            "Treatment prices should be checked live for total monthly cost",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Wegovy available through Farmeci?",
              a: "Wegovy may be available following a consultation and clinician approval—confirm live on Farmeci.",
            },
            {
              q: "Does Farmeci offer Mounjaro?",
              a: "Mounjaro appears among available options when clinically suitable after review.",
            },
            {
              q: "How much are Farmeci treatment prices?",
              a: "Some prices appear to start around £92 per dose or pen. Total monthly cost varies with medication, dose, delivery fees and repeat orders.",
            },
            {
              q: "Does Farmeci deliver to your home?",
              a: "Approved prescriptions are typically shipped to your address, with tracking and cold-chain handling where required.",
            },
            {
              q: "Is Farmeci linked to a registered pharmacy?",
              a: "Farmeci works with GPhC-registered partner pharmacies and independent prescribing clinicians—verify current registration details when you order.",
            },
            {
              q: "Are there consultation fees?",
              a: "Farmeci generally appears to offer a free online consultation; confirm any charges during checkout.",
            },
          ].map((f) => (
            <div
              key={f.q}
              className="border-t border-slate-200/70 pt-4 first:border-t-0 first:pt-0"
            >
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
          This Farmeci weight management review finds a clinician-reviewed online
          pathway with partner-pharmacy dispensing and home delivery. Compare
          consultation process, clinical support, delivery fees and total monthly
          cost against other UK providers before you decide—and always follow
          clinical advice.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
