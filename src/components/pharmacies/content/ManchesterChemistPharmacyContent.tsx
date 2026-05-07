"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.manchesterchemist.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function ManchesterChemistPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Manchester Chemist"
      fileRef="HW-MANCHESTER-CHEMIST-2026"
      title="Manchester Chemist (UK): Independent Pharmacy, Pharmacist Review and National GLP‑1 Delivery"
      subtitle="Community independent pharmacy in Manchester combining digital questionnaires with pharmacist led review, private prescribing, dispensing from a physical site, free prescription delivery narratives, cold chain for Mounjaro and Wegovy, and pay as you go pricing. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · NICE aligned eligibility themes"
      providerName="Manchester Chemist"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v:
            "Manchester Chemist, Unit 11, 20–22 Mary Street, Manchester M3 1DZ (GPhC 9010938 — verify). Superintendent Pharmacist Mr Abdul Khalique (GPhC 2077647)",
        },
        {
          k: "Model",
          v: "Website questionnaire · pharmacist review · in house prescribing team · dispense from Manchester premises · courier",
        },
        {
          k: "Fulfilment",
          v: "Often free Rx delivery · tracked UK couriers · neutral unbranded outers · medical grade cooling for GLP‑1 pens",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/manchester chemist.webp"
      heroProviderLogoAlt="Manchester Chemist"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Manchester Chemist
          </a>{" "}
          markets a highly regulated, community rooted alternative to faceless corporate platforms. Based in central
          Manchester, they bridge high street accountability with online access for medicines such as{" "}
          <strong>Mounjaro</strong> and <strong>Wegovy</strong> when clinically appropriate.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise captures their pharmacist first story, superintendent oversight and delivery discipline for
          temperature sensitive pens.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulation and governance</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "GPhC registered UK pharmacy at Unit 11, 20–22 Mary Street, Manchester M3 1DZ.",
              "Superintendent Pharmacist Mr Abdul Khalique (GPhC registration 2077647) cited as responsible leader.",
              "Professional @nhs.net style email framing integration with wider NHS communication norms.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Four step pathway</p>
        <Points
          items={[
            "Clinical consultation: structured questionnaire covering BMI, conditions and medicines to flag interactions.",
            "Expert review: qualified pharmacist scrutinises submissions and contacts patients if data are incomplete or unsafe.",
            "Private prescription: in house prescribing team generates legal scripts when approved.",
            "Secure dispensing and dispatch: medicines prepared on site in Manchester rather than anonymous warehouses, then shipped nationally.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Why patients cite Manchester Chemist</p>
        <Points
          items={[
            "Local accountability with a real shop front and named superintendent.",
            "Pay as you go without rigid subscription lock in.",
            "Broader services such as blood testing and vitamin therapy for rounded care.",
            "Neighbourhood trust and long horizon relationships versus volume only ecommerce.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery handling</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing often highlights <strong>free prescription delivery</strong> alongside{" "}
          <strong>tracked secure couriers</strong> with real time monitoring. Orders travel in{" "}
          <strong>neutral unbranded packaging</strong> for confidentiality. <strong>GLP‑1 injections</strong> use{" "}
          <strong>medical grade cooling</strong> to keep pens within required temperature bands during transit.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative pricing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Public summaries anchor <strong>Mounjaro 2.5mg near £150</strong> and <strong>5mg near £170</strong>, with{" "}
            <strong>Wegovy starter doses often £130–£140</strong>. Consultation and private prescription fees are
            typically bundled when patients qualify, supporting straightforward budgeting without hidden subscription
            traps.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety against illicit pens</p>
          <Points
            items={[
              "Authentic UK supply chain sourcing for every pen.",
              "GPhC verification encouraged for patients.",
              "NICE and GPhC aligned BMI and eligibility guardrails.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why brick and mortar still matters here</p>
        <Points
          items={[
            "You deal with a verifiable pharmacy at a Manchester address.",
            "Pricing presented as stable without opaque subscription escalators.",
            "Direct superintendent pharmacist access for clinical questions.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Where is Manchester Chemist based?",
              a: "Marketing lists Unit 11, 20–22 Mary Street, Manchester M3 1DZ under GPhC registration.",
            },
            {
              q: "Who is the superintendent pharmacist?",
              a: "Materials name Mr Abdul Khalique (GPhC 2077647).",
            },
            {
              q: "Is delivery free?",
              a: "Promotional copy often advertises free delivery for qualifying prescriptions.",
            },
            {
              q: "How are GLP‑1 pens shipped?",
              a: "Cold chain compliant insulated logistics are described for Mounjaro and Wegovy.",
            },
            {
              q: "Do I need a subscription?",
              a: "They emphasise pay as you go flexibility rather than mandatory contracts.",
            },
            {
              q: "What Mounjaro and Wegovy prices are quoted?",
              a: "Examples cite Mounjaro 2.5mg ~£150, 5mg ~£170, and Wegovy starters ~£130–£140.",
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
          Manchester Chemist sells trust in a named superintendent, a real city centre dispensary and nationally
          shipped cold chain care without subscription pressure. If you want human accountability alongside digital
          convenience, their model is a useful counterpoint to anonymous marketplaces; still cross check each dose
          price on Health Wise grids before you reorder.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Manchester Chemist
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
