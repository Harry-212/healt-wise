"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://shape8.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function Shape8PharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Shape8"
      fileRef="HW-SHAPE8-2026"
      title="Shape8 (UK): Metabolic Weight Clinic, Mounjaro, Wegovy, Data Aware Support"
      subtitle="Modern weight management clinic combining GLP‑1 prescribing with a holistic transformation story: advanced online screening, clinician verification without instant approval shortcuts, titration planning, tech integrated tracking, partner GPhC pharmacy dispensing, medical grade cold chain, Royal Mail Tracked 24 style shipping, discreet boxes and straightforward all in pricing themes. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Metabolic and behavioural support"
      providerName="Shape8"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v:
            "Shape8 UK healthcare entity; medicines via partner GPhC registered pharmacies (Health Wise compare row lists 1124246 — verify role on register)",
        },
        {
          k: "Model",
          v: "Shape8 screening · clinician verification · tailored titration · partner pharmacy dispense · overnight dispatch narrative",
        },
        {
          k: "Fulfilment",
          v: "2–8°C insulated packs and coolants · plain non descript outers · premium tracked 24h style couriers",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Shape8.webp"
      heroProviderLogoAlt="Shape8"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Shape8
          </a>{" "}
          frames weight care as a <strong>holistic transformation</strong>, not only a pharmaceutical sale. They supply
          modern GLP‑1 medicines such as <strong>Mounjaro</strong> and <strong>Wegovy</strong> while layering{" "}
          <strong>tech forward</strong> tracking and <strong>clinician feedback</strong> so medication translates toward
          durable metabolic change.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise outlines their screening depth, metabolic focus, partner pharmacy model and delivery assurances for
          readers weighing clinic style programmes.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Trusted, regulated positioning</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Regulated operations via partnership with GPhC registered pharmacies for legal dispensing.",
              "Specialist medical team in obesity and metabolic medicine narratives.",
              "Injectable pens from verified UK wholesalers with temperature stabilised handling.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>How the service works</p>
        <Points
          items={[
            "Step 1 · Shape8 screening beyond basic BMI: weight history, lifestyle habits and metabolic goals.",
            "Step 2 · Clinician verification focusing on suitability and contraindications rather than instant approval.",
            "Step 3 · Tailored dosing plan with titration schedule from starter to maintenance as you adapt.",
            "Step 4 · Secure dispensing: prescription to partner pharmacy, double checked preparation, overnight dispatch narrative.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Key benefits (marketing)</p>
        <Points
          items={[
            "Metabolic focus: education on food noise and hormone regulation science.",
            "Tech integrated tracking for weight progress and dose days.",
            "High privacy fully remote service without high street visits.",
            "No hidden fees: pricing typically covers consultation, private prescription and delivery.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          GLP‑1 medicines need refrigeration; Shape8 describes <strong>medical grade insulation</strong> and cooling
          agents holding about <strong>2°C to 8°C</strong> in transit. Parcels arrive in{" "}
          <strong>plain non descript boxes</strong> for home or workplace confidentiality. Most orders use{" "}
          <strong>premium couriers</strong> such as <strong>Royal Mail Tracked 24</strong> with real time style
          tracking from pharmacy to door.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing themes</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Mounjaro</strong> <strong>2.5 mg</strong> starters often quoted about <strong>£140 to £160</strong>{" "}
            with higher tiers stepping up. <strong>Wegovy</strong> monthly style plans from about{" "}
            <strong>£130 to £150</strong>. <strong>All inclusive service</strong> language covers clinician review,
            dispensing and temperature controlled delivery.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety and legitimacy</p>
          <Points
            items={[
              "BMI safeguards: typically BMI 30+ or 27+ with weight related comorbidities.",
              "Verified UK entity messaging versus offshore unregulated sites.",
              "Clinician guidance on managing common GLP‑1 side effects to stay on track.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why patients choose Shape8 (summary)</p>
        <Points
          items={[
            "Wanting a structured transformation programme not only a product.",
            "Tech savvy tracking and monitoring preferences.",
            "Reliable cold chain and discreet packaging expectations.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Shape8’s pitch is <strong>digital convenience</strong> paired with <strong>deep clinical expertise</strong>{" "}
          and a <strong>metabolic health</strong> lens on long term weight loss in the UK.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Shape8 only an online pharmacy?",
              a: "They describe partner GPhC pharmacies dispensing while Shape8 runs the digital clinic and screening journey.",
            },
            {
              q: "Do they titrate doses?",
              a: "Marketing includes a clear titration schedule from starter toward maintenance as you adapt.",
            },
            {
              q: "What screening is used?",
              a: "Shape8 screening is described as richer than BMI only, covering history, lifestyle and metabolic goals.",
            },
            {
              q: "How is delivery tracked?",
              a: "Royal Mail Tracked 24 style premium services with tracking from pharmacy to doorstep.",
            },
            {
              q: "What price bands are quoted?",
              a: "Illustrative copy cites Mounjaro 2.5mg about £140 to £160 and Wegovy plans about £130 to £150.",
            },
            {
              q: "Are there hidden fees?",
              a: "They promote straightforward pricing covering consultation, prescription and specialised cold delivery.",
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
          Shape8 appeals if you want screening depth, titration clarity and tracking tools around GLP‑1 therapy. Compare
          their illustrative bands with Health Wise tables and confirm partner pharmacy details on live terms before you
          commit.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Shape8
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
