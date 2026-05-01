"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://nextscript.co.uk/condition/weight-loss/";

export default function NextScriptPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Next Script"
      fileRef="HW-NEXT-SCRIPT-2026"
      title="Next Script Weight Loss (UK): Wegovy, Mounjaro, Saxenda and Video-Verified Prescribing"
      subtitle="Official dossier: short questionnaire, ID and weight evidence, first-order video consult, clinical review, discreet dispatch, indicative price bands (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Saxenda"
      providerName="Next Script"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Next Script (GPhC-registered UK pharmacy — verify on register)" },
        {
          k: "Treatments",
          v: "Mounjaro · Wegovy · Saxenda (subject to suitability)",
        },
        {
          k: "Fulfilment",
          v: "Home delivery · discreet packaging · dispatch often 24–48h after approval (working days)",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Next Script.webp"
      heroProviderLogoAlt="Next Script"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Next Script pitches a <strong>digital-first obesity clinic</strong>: you complete an
          online health form, upload supporting evidence where asked, attend a short{" "}
          <strong>video consultation on first orders</strong>, then receive a prescribing decision
          and pharmacy-dispatched medication — without a traditional GP appointment.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That extra verification step exists to reduce misuse of high-risk injectables and to
          align with UK expectations for private supply. Repeats are typically faster once you are an
          established patient.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Five-step flow
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Online questionnaire — BMI, history, medicines, lifestyle",
              "Uploads — ID, proof of weight, prior scripts if relevant",
              "Video consult (first order) — identity and clinical cross-check",
              "Prescriber decision — approve, adjust, or decline",
              "Pharmacy dispatch — discreet pack, tracked to your door",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Delivery and cold chain
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Industry-standard UK pharmacy practice for GLP-1 pens usually means insulated transit and
          tracked services; confirm cold-chain wording on your order confirmation. Plan someone to
          receive the parcel — injectables should not sit in sunlit porches.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Indicative pricing
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Brief-level example bands include <strong>Wegovy ~£80–£189</strong>,{" "}
            <strong>Mounjaro ~£131–£266</strong>, and <strong>Saxenda ~£68–£260</strong> depending on
            dose and stock — always confirm live basket pricing.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Why people shortlist Next Script
          </p>
          <Points
            items={[
              "Regulated UK pharmacy narrative with prescriber review",
              "Video gate on first order — stronger than email-only triage",
              "Bundled consultation + medicine pricing in many funnels",
              "Discreet logistics and reported quick turnarounds in reviews",
            ]}
          />
        </section>
      </div>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is the video call every repeat?",
              a: "Public copy suggests video verification is focused on first orders — confirm current rules for your account.",
            },
            {
              q: "Can consultation slots delay dispatch?",
              a: "Yes — regulated services sometimes queue behind clinician availability; build a buffer if you are switching from another supplier.",
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
          If you want a UK route that leans into <strong>identity-verified prescribing</strong> and
          a broad injectable menu (Mounjaro, Wegovy, Saxenda), Next Script is a coherent option —
          balanced against the small extra friction of video onboarding on first purchase.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Next Script
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
