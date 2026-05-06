"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://getweightloss.co.uk/";

export default function GetWeightLossPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Get Weight Loss"
      fileRef="HW-GET-WEIGHT-LOSS-2026"
      title="Get Weight Loss Review: Online Access to Wegovy, Medically Supervised Weight Loss Treatment and UK Delivery"
      subtitle="Official dossier: digital clinical pathway, tracked delivery, optional extras, no-subscription model and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Wegovy · GLP-1 options · UK"
      providerName="Get Weight Loss"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Model", v: "UK digital clinical service" },
        { k: "Pricing example", v: "Wegovy ~£179.99/pen (4 doses) — confirm live" },
        { k: "Fulfilment", v: "Tracked UK delivery · cold-chain where needed" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Get Weightloss.webp"
      heroProviderLogoAlt="Get Weight Loss"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-indigo-900">Service Profile:</strong> Get Weight Loss operates within the UK’s regulated online pharmacy sector, providing access to clinically approved weight loss medications. Because no two weight loss journeys are exactly alike, understanding the specific clinical protocols, shipping methods, and pricing tiers of Get Weight Loss is a crucial step in finding the right healthcare partner.</p></div>
        <p className="text-slate-800 leading-relaxed">
          For a lot of people, losing weight is not really a motivation problem — it&apos;s a support
          problem. You can follow calorie targets, try intermittent fasting, walk more, even pay for
          gym memberships — and still feel stuck. Appetite, habits, hormones, stress, and daily life
          have a way of complicating things.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That may help explain why medically supervised treatments like Wegovy and other prescription
          weight loss options have drawn more attention across the UK. Get Weight Loss operates in that
          space: through its online clinical model, it offers medical assessments, prescription
          treatment when appropriate, tracked medication delivery, and follow-up support — all handled
          remotely.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Get Weight Loss works, what treatments may be available, how delivery
          is managed, pricing expectations, and why some people consider it.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          What is Get Weight Loss?
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Get Weight Loss is a UK-based digital clinical service that helps eligible adults access
            prescription weight loss treatment under medical supervision. The process is generally
            structured around:
          </p>
          <Points
            items={[
              "Online clinical consultation",
              "Prescriber review",
              "Prescription approval where appropriate",
              "Medication delivery to your address",
              "Ongoing support after treatment begins",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Where it may differ is the emphasis on a clinical pathway, rather than functioning as a
            simple checkout-based pharmacy — and that distinction matters. Prescription-only medicines
            should involve oversight.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why choose Get Weight Loss for weight loss treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Regulated clinical oversight, not just medication sales
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Consultations are reviewed by UK clinicians; prescriptions are only issued if considered
              appropriate; medicines are supplied through regulated channels. That helps distinguish the
              service from unverified online sellers — a difference that is not trivial given concerns
              around counterfeit products.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to prescription weight loss treatments
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Treatment options may include Wegovy and other GLP-1 or related prescription options,
              depending on clinical need. Wegovy may support weight management by helping regulate
              appetite and reducing calorie intake — increasing fullness, reducing hunger signals, and
              supporting more sustainable eating patterns. That does not make weight loss automatic.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Optional support beyond medication
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Get Weight Loss does not appear positioned only as a medication provider. Optional
              support may include follow-up check-ins, nutrition consultations, and blood testing
              services — appealing to patients who want more than a prescription alone, though whether
              someone needs those extras may depend on goals and budget.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How Get Weight Loss works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Online questionnaire",
              d: "Health assessment covering weight goals, medical history, current medications, and general health — confidential and designed to be completed online.",
            },
            {
              t: "Step 2: Clinical review",
              d: "A UK prescriber reviews the information; they may contact you if clarification is needed. Approval is not guaranteed — and frankly, that is probably a good sign.",
            },
            {
              t: "Step 3: Prescription issued (if suitable)",
              d: "Prescription is sent to the pharmacy team; medication is prepared; the order moves to dispatch.",
            },
            {
              t: "Step 4: Delivery to your address",
              d: "Medication is shipped using tracked UK delivery — often within around two working days after processing, though timing can vary.",
            },
            {
              t: "Step 5: Follow-up support",
              d: "Support may continue through usage guidance, progress check-ins, and lifestyle advice — where ongoing value often sits.",
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
          How Get Weight Loss delivery works
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Tracked UK delivery</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Orders appear sent using tracked services (e.g. Royal Mail tracked or equivalent),
              helping patients monitor orders and plan for receipt.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Temperature-controlled packaging</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Injectable medications like Wegovy may require appropriate storage conditions. Get Weight
              Loss appears to use temperature-controlled packaging where needed to help preserve
              medication integrity during transit.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">If you&apos;re not home for delivery</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Courier instructions may allow safe-place delivery, re-delivery, or collection guidance.
              Some circumstances may involve additional charges — worth knowing upfront.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Responsibility after delivery</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Once medication is delivered, responsibility generally passes to the patient — check
              contents promptly; report damaged or missing items quickly.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            How much does Get Weight Loss cost?
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            One listed example: <strong>Wegovy from around £179.99 per pen (4 doses)</strong>. Other
            treatment costs may vary. Optional services may carry separate costs — e.g. blood tests
            from around £89, nutrition consultations where selected.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            There appears to be <strong>no subscription requirement</strong> — patients may order month
            to month, pause, or stop without cancellation penalties. That flexibility is not universal
            among providers.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Ongoing support and monitoring
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Weight management tends to be dynamic. Get Weight Loss may support patients through
            follow-up reviews, treatment guidance, and lifestyle integration advice — closer to a care
            pathway than a simple online order.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Public reviews and customer feedback
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Based on publicly available review data, Get Weight Loss has reportedly held around a{" "}
          <strong>4.5/5</strong> rating on Trustpilot, with themes such as straightforward ordering,
          fast dispatch, and transparent pricing. Individual experiences can vary — but the pattern may
          still be useful context.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why medical supervision matters
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Prescription weight loss treatment is not suitable for everyone; these medicines generally
          require clinical assessment, prescriber oversight, and safe supply channels. Get Weight Loss
          appears built around that model.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider Get Weight Loss?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want medically supervised treatment, prefer online access,
          value month-to-month flexibility, want tracked delivery, and prefer avoiding subscription
          models. It may be less suitable for people wanting in-person, face-to-face support.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why some patients choose Get Weight Loss
        </p>
        <Points
          items={[
            "Clinical oversight — assessment before prescribing",
            "Transparent pricing — costs shown upfront",
            "No subscription commitment — order when needed",
            "Tracked delivery — medication shipped directly",
            "Optional support services — more than medication alone",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I get Wegovy through Get Weight Loss?",
              a: "Yes, Wegovy may be available through Get Weight Loss after clinical assessment and approval.",
            },
            {
              q: "How much does Get Weight Loss charge for Wegovy?",
              a: "Listed pricing has included around £179.99 per pen (4 doses), though costs may vary.",
            },
            {
              q: "Does Get Weight Loss use subscriptions?",
              a: "No, the service appears to offer month-to-month ordering rather than mandatory subscription billing.",
            },
            {
              q: "Does Get Weight Loss deliver medication to your home?",
              a: "Yes. Approved prescriptions are typically shipped via tracked UK delivery, often arriving within a few working days.",
            },
            {
              q: "Is Get Weight Loss regulated?",
              a: "Get Weight Loss operates through a clinically supervised prescribing model with medicines dispensed through regulated pharmacy channels.",
            },
            {
              q: "Are there support services beyond medication?",
              a: "Yes. Optional services may include nutrition consultations, blood testing and follow-up support.",
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
          If you&apos;re looking for a private route to medically supervised weight loss treatment, Get
          Weight Loss appears to offer a credible option. Access to treatments like Wegovy, combined with
          clinician review, transparent pricing, tracked delivery and optional support, gives it more
          substance than a simple online medication seller.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will it suit everyone? Probably not — some people may prefer traditional NHS or GP-led
          routes. But for those wanting regulated access, flexible ordering and structured support, Get
          Weight Loss may be worth considering as part of a longer-term weight management approach.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
