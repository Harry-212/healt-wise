"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.numan.com/weight-loss";

export default function NumanPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Numan"
      fileRef="HW-NUMAN-2026"
      title="Numan Weight Loss (UK): Wegovy, Mounjaro, Coaching and Subscription Care"
      subtitle="Official dossier: free initial eligibility assessment, personalised GLP-1 plans, in-app clinician and coach access, ~28-day resupply, discreet Royal Mail-style delivery, subscription pricing (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · digital programme"
      providerName="Numan"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Numan (UK digital healthcare — weight management programme)" },
        {
          k: "Treatments",
          v: "Mounjaro · Wegovy (where clinically appropriate) · lifestyle coaching",
        },
        {
          k: "Fulfilment",
          v: "Home delivery · tracking · ~48h first order narrative · ongoing ~28-day cycles",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Numan.webp"
      heroProviderLogoAlt="Numan"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Numan bundles <strong>prescription GLP-1 therapy</strong> with behavioural coaching and
          digital touchpoints — a model aimed at people who failed lifestyle-only attempts but want
          more than a silent monthly parcel.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Marketing often opens with a <strong>free eligibility assessment</strong>; medication fees
          apply once a clinician approves a named plan. That split keeps tyre-kickers from paying
          upfront while preserving clinical gatekeeping.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Programme mechanics
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Assessment — history, BMI, habits, comorbidities",
              "Personalised plan — Wegovy or Mounjaro where suitable, plus nutrition and coaching",
              "Ongoing care — messaging, progress tools, side-effect guidance",
              "Subscription logistics — automated ~28-day resupply with account controls for dates",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Science positioning
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Public education copy references trial-weight ranges for semaglutide and dual incretin
          therapy — useful context, but your curve will depend on adherence, GI tolerance, and
          concurrent diet quality.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Indicative monthly costs
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Example marketing bands include starter-style figures from around{" "}
            <strong>£139/mo</strong>, <strong>Wegovy ~£149–£299</strong>, and{" "}
            <strong>Mounjaro ~£199–£339</strong> by dose — referral or intro promos may shave early
            months. Annualised private spend can be large; budget honestly.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Flexibility
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pause, cancel, or reschedule language is common in digital subscription healthcare —
            still read cooling-off and medical-review rules so you know what happens if you miss a
            check-in.
          </p>
        </section>
      </div>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Does someone need to be home for delivery?",
              a: "Injectable lines often need receipt and fridge storage quickly — plan signature availability when possible.",
            },
            {
              q: "Is Numan NHS-funded?",
              a: "No — this is a private digital route; NHS shared care varies by GP practice.",
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
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Conclusion
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Numan competes as a <strong>full-stack digital clinic</strong> for obesity — medicine plus
          coaching plus logistics. If you value that bundle and can sustain the subscription, it is
          a mainstream UK choice; if you only want bare dispensing, compare simpler pharmacies too.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Numan
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
