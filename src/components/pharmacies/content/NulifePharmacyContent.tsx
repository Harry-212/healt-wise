"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.thenulife.com/weight-loss-management";

export default function NulifePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="NuLife Pharmacy"
      fileRef="HW-NULIFE-2026"
      title="NuLife Pharmacy Weight Loss Management: UK Programme, GLP-1 and Ongoing Support"
      subtitle="Official dossier: GPhC-supervised pathway, pharmacist-led assessment, holistic programme (nutrition, lifestyle), signed discreet delivery, timelines and cost context (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · GLP-1 pathways · programme support"
      providerName="NuLife Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "NuLife Pharmacy (UK online pharmacy — verify GPhC premises)" },
        {
          k: "Programme",
          v: "Consultation · prescribing where appropriate · education · follow-up monitoring",
        },
        {
          k: "Fulfilment",
          v: "Signed courier · plain packaging · temperature control where required · no returns after dispatch (POM)",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Nulife Pharmacy.webp"
      heroProviderLogoAlt="NuLife Pharmacy"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          NuLife Pharmacy promotes <strong>weight management</strong>, not a single SKU: pharmacist
          consultation, prescription medicines when clinically justified, educational content, and
          follow-up so patients are not dropped after the first box.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That programme mindset suits people who want structure around GLP-1 therapy — appetite
          control is only one lever; habits, nutrition, and side-effect vigilance still matter for
          durable outcomes.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Personalised pathway
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Detailed online intake — eligibility, contraindications, goals",
              "Pharmacist review — extra questions if risk flags appear",
              "Tailored plan — medicine choice, dosing, and lifestyle guidance where offered",
              "Ongoing monitoring — progress, side effects, dose titration within guidelines",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Delivery logistics
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Typical marketing timelines describe a few days for review, dispatch, then roughly{" "}
          <strong>4–7 days</strong> door-to-end for mainland UK — longer if checks stall. Signed
          receipt is often required; plan attendance so cold-chain pens are not left on a step.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Orders inside <strong>48 hours of dispatch</strong> commonly cannot be altered — accuracy at
          checkout matters.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Cost expectations
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Private injectable programmes often sit in a broad <strong>£150–£300+ per month</strong>{" "}
            band depending on molecule and dose; NuLife bundles consultation, support, and delivery
            components into headline offers — VAT and shipping lines should still be checked at
            checkout.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Sustainability focus
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Marketing stresses long-term habits over crash dieting — aligned with how GLP-1 drugs
            are meant to be used alongside food and movement change, not as a magic bypass.
          </p>
        </section>
      </div>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is shipping extra?",
              a: "Packaging and courier fees may be itemised separately from medicine — read the order summary.",
            },
            {
              q: "Can I skip follow-up?",
              a: "Skipping monitoring may affect whether repeats are issued — clinical services expect engagement.",
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
          NuLife fits buyers who want <strong>regulated supply plus programme depth</strong> — not
          the absolute lowest sticker price, but a fuller wrapper around GLP-1 care. Compare monthly
          totals on Health Wise and keep your GP loop informed where shared care applies.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit NuLife Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
