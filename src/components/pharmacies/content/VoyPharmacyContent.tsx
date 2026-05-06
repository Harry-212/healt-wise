"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.joinvoy.com/weight-loss";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function VoyPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Voy"
      fileRef="HW-VOY-2026"
      title="Voy (UK): Weight Loss Service Overview, Delivery and Budgeting"
      subtitle="Join Voy’s weight loss vertical sits in a busy market of apps, clinics and pharmacies; Health Wise summarises what to expect from legitimate digital obesity pathways (assessment, prescribing, fulfilment, costs) and points you to Voy’s live pages for specifics. Information only, not medical advice."
      scopeLabel="Scope: Prescription weight management where clinically offered · Confirm medicines on site"
      providerName="Voy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Voy (GPhC 9012134 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Digital signup · clinical suitability checks where advertised · pharmacy fulfilment if prescribed",
        },
        {
          k: "Fulfilment",
          v: "Confirm carriage, cold chain and cutoff rules on joinvoy.com",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/voy.webp"
      heroProviderLogoAlt="Voy"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-slate-900">Why research Voy?</strong> Every online pharmacy has a distinct approach to patient care, pricing, and medication delivery. This independent dossier breaks down how Voy handles weight management consultations, offering you a clear look at their service structure so you can compare it against your personal health needs and preferences.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Choosing a weight loss service today means weighing effectiveness, credibility and how the programme
          fits your routine, not only the brand on the pen.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Voy
          </a>{" "}
          promotes medically oriented support alongside digital convenience; the details that matter (eligible
          medicines, clinician types, subscription rhythm, courier partners) live on their live weight loss hub,
          which you should read in full before paying.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise uses the same lens we apply everywhere: confirm who prescribes, who dispenses, how cold
          medicines travel, what repeats cost, and how personal data is handled. Those fundamentals separate
          regulated care from supplement dropships or social media injectables.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>What reputable digital obesity routes share</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "A structured intake capturing BMI, comorbidities and medicines to spot contraindications.",
              "Prescription only supply lines routed through UK pharmacies governed by GPhC standards.",
              "Transparent pricing for consultations, drugs and postage instead of opaque bundles.",
              "Tracked logistics with guidance on signatures, neighbours or safe places where carriers allow.",
              "Clear escalation paths if side effects or delays arise.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Illustrative Mounjaro pricing context</p>
        <PharmacyPriceCompareHint />
        <p className="mt-3 text-slate-800 leading-relaxed">
          Our comparison grid lists Voy among UK Mounjaro suppliers with headlineFrom near the premium end of the
          table; open Voy’s checkout to see whether consultation bundles, subscriptions or loyalty perks change
          the effective monthly cost for your dose.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Questions worth answering on Voy’s site</p>
        <Points
          items={[
            "Which GLP‑1 or adjunct medicines are currently prescribed and how titration schedules work.",
            "Whether care is asynchronous only or includes video or telephone reviews.",
            "Dispatch timelines after approval and options for refrigerated shipments.",
            "How repeats and dose increases are authorised without unsafe gaps.",
            "Cancellation, refund and complaint policies relevant to private healthcare.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Voy a regulated UK pharmacy?",
              a: "Our dataset associates Voy with GPhC 9012134 — cross-check the dispensing entry on the official register before ordering.",
            },
            {
              q: "Where do I confirm medicines and prices?",
              a: "Use Voy’s weight loss URL directly; Health Wise tables give directional Mounjaro comparisons only.",
            },
            {
              q: "Do I still need lifestyle change?",
              a: "Yes — every ethical provider pairs pharmacotherapy with nutrition, movement and behavioural support.",
            },
            {
              q: "How should I compare Voy with other brands?",
              a: "Stack total monthly cost at your dose, approval speed, cold chain quality and clinician access hours.",
            },
            {
              q: "What if my BMI is borderline?",
              a: "Eligibility rules are clinical — complete Voy’s questionnaire honestly and expect possible declines.",
            },
            {
              q: "Can Health Wise guarantee availability?",
              a: "No — stock and formulary choices change; treat our dossier as orientation, not inventory truth.",
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
        <p className={sectionLabel}>Closing view</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Voy enters the conversation when patients want a digitally native obesity programme with pharmacy grade
          fulfilment. Because public landing copy evolves quickly, pair this overview with their latest weight
          loss pages and with Health Wise pricing grids so you understand both clinical guardrails and pounds per
          month before you start.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Voy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
