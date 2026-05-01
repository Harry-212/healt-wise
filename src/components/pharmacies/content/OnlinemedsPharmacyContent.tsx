"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://onlinemeds.co.uk/";

export default function OnlinemedsPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="OnlineMeds"
      fileRef="HW-ONLINEMEDS-2026"
      title="OnlineMeds (UK): Specialist Weight Loss Pharmacy, Wegovy, Mounjaro and Orlistat"
      subtitle="Official dossier: pharmacist prescriber questionnaire, personalised titration, free tracked UK delivery, discreet packaging, bundled pricing and follow-up (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Orlistat"
      providerName="OnlineMeds"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "OnlineMeds (UK specialist weight-loss pharmacy — verify GPhC premises)",
        },
        {
          k: "Pathway",
          v: "Online assessment · pharmacist prescriber review · regulated dispensing",
        },
        {
          k: "Fulfilment",
          v: "Free tracked UK delivery (stated) · plain outer packaging · home address",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/OnlineMeds.webp"
      heroProviderLogoAlt="OnlineMeds"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          OnlineMeds narrows its shopfront to <strong>weight management</strong> rather than
          general OTC noise — useful when you want reviewers and protocols tuned to GLP-1 titration,
          not random SKUs.
        </p>
        <p className="text-slate-800 leading-relaxed">
          A pharmacist prescriber model means the same professional family that understands drug
          interactions is signing off supply — different governance to non-clinical marketplaces.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Consultation → dispatch
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Questionnaire — BMI, history, meds, lifestyle (~5–10 minutes in marketing copy)",
              "Clinical review — safety and suitability before any basket is medically cleared",
              "Approval — prescription issued; pharmacy prepares order",
              "Dispatch — tracked, often prompt after approval",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Ongoing care
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Materials describe follow-up, side-effect help, and dose adjustments within prescribing
          rules — important because GLP-1 journeys are months-long, not single-shot retail.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Pricing snapshot
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Orlistat entry figures near <strong>£39.99</strong> sometimes appear in category
            marketing, while GLP-1 pens sit in wider private-market bands — bundled consultation and
            free delivery can make headline totals easier to compare than split-fee clinics.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Privacy
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Plain packaging and tracked drops reduce both stigma risk and lost-parcel anxiety —
            still monitor tracking during heatwaves for cold-chain lines.
          </p>
        </section>
      </div>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is OnlineMeds only for injections?",
              a: "No — oral Orlistat routes are commonly listed for suitable patients who prefer non-injectable therapy.",
            },
            {
              q: "How do repeats work?",
              a: "Account-based reordering is described for continuity — expect periodic clinical review for long-term supply.",
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
          OnlineMeds is aimed at patients who want <strong>specialist focus</strong>, pharmacist
          prescribing oversight, and inclusive delivery economics. Stack it against other UK
          dossiers on Health Wise using the same dose band to see real monthly cost differences.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit OnlineMeds
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
