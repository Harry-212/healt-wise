"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.swiftmedi.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function SwiftMediPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Swift Medi"
      fileRef="HW-SWIFTMEDI-2026"
      title="SwiftMedi (UK): Digital GLP‑1 Access, ID Verification and Cold‑Chain Delivery"
      subtitle="SwiftMedi presents a regulated UK digital pathway: GPhC pharmacy partners, UK clinician prescribing, ID and live photo checks aligned with CQC/GPhC expectations, insulated cold chain for injectables, Tracked 24 style postage and bundled consultation pricing. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · GLP‑1 injectables where prescribed"
      providerName="SwiftMedi"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "SwiftMedi / partner pharmacies (GPhC 9012840 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Questionnaire · ID & live photo · clinical review (~24h) · e‑prescription · dispensing · tracked courier",
        },
        {
          k: "Fulfilment",
          v: "WoolCool-style insulated packs · ice packs · plain tamper‑evident outers · Royal Mail Tracked 24 or premium couriers",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/swift medi.webp"
      heroProviderLogoAlt="SwiftMedi"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Demand for Wegovy and Mounjaro makes picking a clinically sound platform as important as picking a dose.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            SwiftMedi
          </a>{" "}
          markets itself as a leading UK digital healthcare route that stresses regulation, authentic stock and
          transparent service rather than social media grey markets.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises their public claims on governance, onboarding, logistics and illustrative costs so
          you can line them up with our comparison tables.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Trusted regulated framing</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Partner pharmacies registered with the General Pharmaceutical Council (GPhC).",
              "Prescriptions issued by UK registered clinicians or independent prescribers.",
              "Medicines described as genuine licensed products from reputable wholesalers, contrasted with unregulated social sellers.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Five step journey</p>
        <Points
          items={[
            "Online medical questionnaire covering BMI, history and current medicines to judge GLP‑1 suitability.",
            "Verification and live photo upload plus ID to meet UK safety standards (CQC/GPhC style governance) and confirm the patient receiving treatment.",
            "Clinical review typically within about 24 hours; staff may message through a secure portal for missing details.",
            "Electronic prescription generation and immediate pharmacy dispensing once approved.",
            "Rapid packing and shipment via secure tracked couriers.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Why SwiftMedi highlights its offer</p>
        <Points
          items={[
            "Discretion: secure consultations and fully unbranded outer packs.",
            "Specialist obesity focus with titration guidance for dose increases.",
            "No in person appointments: full pathway on phone or computer.",
            "Clinical aftercare for side effects or plan adjustments.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery method</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Injectable lines such as <strong>Mounjaro</strong> are described as travelling in{" "}
          <strong>specialised insulated packaging</strong> (for example WoolCool or comparable systems) with{" "}
          <strong>ice packs</strong> to maintain cold chain integrity. Outer cartons are{" "}
          <strong>plain and tamper evident</strong> without wording such as “Weight Loss” or “Pharmacy” on the
          label. Most parcels use <strong>Royal Mail Tracked 24</strong> or premium couriers with live tracking and
          predictable windows.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative pricing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Marketing positions pricing as competitive and usually <strong>inclusive of consultation and
            prescription fees</strong>. Cited bands include{" "}
            <strong>Mounjaro 2.5mg roughly £140–£150</strong>, <strong>maintenance 10mg–15mg about £250–£290+</strong>
            , and <strong>Wegovy from about £130 at introductory strengths up to £290+ monthly at 2.4mg</strong>.
            Figures move with stock, promotions and dose.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety and legitimacy</p>
          <Points
            items={[
              "Batch traceability so pens link back to manufacturers.",
              "Clinician oversight framed around cardiac and metabolic safety, not retail checkout.",
              "Medical records protected with industry standard encryption.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Closing themes from SwiftMedi’s narrative</p>
        <Points
          items={[
            "Fully regulated legal UK operation.",
            "Expertise in injectable cold chain logistics.",
            "Digital interface for reorders and parcel tracking.",
            "Competitive pricing with no hidden prescription surcharges in stated bundles.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Their pitch is bridging traditional pharmacy diligence with modern convenience: rigorous checks plus fast
          discreet delivery for patients who want medically supervised GLP‑1 access without high street queues.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Does SwiftMedi use GPhC pharmacies?",
              a: "Their materials state they work with GPhC registered pharmacies — verify the active dispensing site on the official register.",
            },
            {
              q: "Why ID and a live photo?",
              a: "Marketing ties this to UK safety standards (CQC/GPhC expectations) so prescriptions match the correct individual and eligibility is confirmed.",
            },
            {
              q: "How fast is clinical review?",
              a: "Summaries cite about 24 hours with secure portal follow up if more data is needed.",
            },
            {
              q: "How are injectables kept cold?",
              a: "Insulated packs such as WoolCool style liners plus ice packs are described to maintain cold chain.",
            },
            {
              q: "What Mounjaro and Wegovy prices are quoted?",
              a: "Illustrative copy mentions Mounjaro starter tiers ~£140–£150 and high doses ~£250–£290+, Wegovy from ~£130 up to £290+ at 2.4mg.",
            },
            {
              q: "Are pens traceable?",
              a: "Yes — batch tracking back to manufacturers is advertised as part of their safety story.",
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
          SwiftMedi sells a safety first digital obesity lane: verified identity, prescriber led GLP‑1 access,
          traceable stock and cold chain aware couriers, with headline pricing that bundles clinical fees. Compare
          their live checkout with Health Wise Mounjaro rows for each titration step you expect next.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit SwiftMedi
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
