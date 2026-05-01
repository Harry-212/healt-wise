"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.oushkpharmacy.com/online-doctor/weight-loss";

export default function OushkPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Oushk Pharmacy"
      fileRef="HW-OUSHK-2026"
      title="Oushk Pharmacy Weight Loss (UK): Online Doctor, GLP-1 and Scheduled Delivery"
      subtitle="Official dossier: health questionnaire, video verification, UK prescriber review, injectable and oral options, DPD/Royal Mail choices, next-day claims, pricing bands (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · GLP-1 injectables · oral options"
      providerName="Oushk Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Oushk Pharmacy (GPhC-registered — verify premises on register)" },
        {
          k: "Pathway",
          v: "Online doctor · video ID/weight check · prescription if suitable · choose delivery slot",
        },
        {
          k: "Fulfilment",
          v: "DPD / Royal Mail tracked · signature options · next-day UK (advertised) · discreet outer pack",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Oushk Pharmacy&apos;s weight-loss route is explicitly <strong>online-doctor led</strong>:
          you complete structured questions, verify identity and metrics (often via short video), and
          only then access prescription-only injectables or tablets — a pattern designed to deter
          casual misuse of potent appetite drugs.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Marketing also highlights <strong>delivery scheduling</strong> — helpful when you need a
          signature line and cannot risk a missed cold-chain drop.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Step-by-step
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Consultation form — history, meds, BMI, goals",
              "Verification — video check of ID and measurements where required",
              "Prescriber decision — eligibility, product, titration plan",
              "Checkout — pick delivery method and date window",
              "Receipt — track, sign if needed, refrigerate injectables promptly",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Speed narrative
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Same-day form completion, <strong>24–48 hour</strong> review bands, immediate checkout after
          approval, and <strong>next-day</strong> courier claims are common marketing beats — real
          life includes stock, bank holidays, and rural postcodes.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Cost bands
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Illustrative UK private ranges in the brief sit around <strong>£40–£100/mo</strong> for
            some tablet plans and <strong>£150–£300+/mo</strong> for injectable programmes — exact
            Oushk SKUs change; use live pricing.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            If delivery fails
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Couriers may retry or return goods to the pharmacy; small redelivery fees can apply.
            React quickly — temperature-sensitive pens may not survive repeated failed drops.
          </p>
        </section>
      </div>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I change address after ordering?",
              a: "Many pharmacies lock addresses once processing starts — edit before confirmation where possible.",
            },
            {
              q: "Is video mandatory forever?",
              a: "Video is emphasised for verification on onboarding; repeat pathways may differ — check current policy.",
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
          Oushk targets patients who accept <strong>extra verification friction</strong> in exchange
          for regulated supply, courier choice, and scheduled delivery — a reasonable trade-off when
          buying potent prescription injectables online.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Oushk Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
