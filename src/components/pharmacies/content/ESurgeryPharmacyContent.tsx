"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://e-surgery.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function ESurgeryPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="e-Surgery"
      fileRef="HW-ESURGERY-2026"
      title="e-Surgery (UK): Sustainable Online Pharmacy, Pharmacist Prescribers and Cold‑Chain Pens"
      subtitle="Norwich based GPhC pharmacy (9012167) emphasising independent pharmacist prescribers, Trustpilot Excellent positioning, recyclable discreet packs, Royal Mail Tracked tiers with free Tracked 24 upgrades over £30, and competitive Wegovy and Mounjaro pricing. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Injectable weight loss where prescribed · Sharps accessories"
      providerName="e-Surgery"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "e-Surgery, Norwich (GPhC 9012167 — verify on register)",
        },
        {
          k: "Model",
          v: "Choose treatment · online consultation · pharmacist prescriber approval · in‑house dispensing · delivery",
        },
        {
          k: "Fulfilment",
          v: "Tracked 24 / 48 / Special Next Day 1pm · free Tracked 24 upgrade over ~£30 · cold 2–8°C packs · recyclable plain outers",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/e-Surgery.webp"
      heroProviderLogoAlt="e-Surgery"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Sustainable weight management still depends on clinical rigour first;{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            e-Surgery
          </a>{" "}
          markets a UK “sustainable” online pharmacy that pairs rapid access with environmental touches such as
          recyclable packaging, while supplying regulated Wegovy and Mounjaro pathways for eligible patients.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises their accreditation story, four step funnel, eco delivery claims and price ladder
          so you can compare with other GPhC dossiers here.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Accredited service narrative</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "GPhC registered pharmacy (9012167) based in Norwich.",
              "UK registered independent pharmacist prescribers reviewing consultations.",
              "Trustpilot “Excellent” positioning with 600,000+ satisfied customers cited in marketing.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Four steps from browse to door</p>
        <Points
          items={[
            "Choose injectable SKU and strength (starting or maintenance).",
            "Complete online health questions mirroring GP style history taking: BMI, conditions, allergies.",
            "Prescriber approval often within a few hours to confirm safety and efficacy fit.",
            "Dispensing from the UK pharmacy with direct delivery to your address.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Key benefits</p>
        <Points
          items={[
            "Sustainable positioning via recyclable packs for eco conscious patients.",
            "Free Ask‑a‑Pharmacist digital advice before or during therapy.",
            "Fully remote service without appointments or waiting rooms.",
            "Complimentary tracking on most orders for delivery visibility.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery handling</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Primary postage is <strong>Royal Mail Tracked 24</strong> with <strong>Tracked 48</strong> or{" "}
          <strong>Special Next Day by 1pm</strong> upgrades. Orders <strong>over about £30</strong> automatically
          upgrade to <strong>Tracked 24 at no extra cost</strong> in public copy. Medication arrives in{" "}
          <strong>plain recyclable outers</strong> balancing privacy with lower plastic waste. Injectable pens use{" "}
          <strong>temperature controlled packaging</strong> targeting <strong>2°C–8°C</strong> until handover.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative pricing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            e-Surgery advertises <strong>among the lowest UK entry pens</strong> in their category story:{" "}
            <strong>Wegovy from about £99.99</strong> at the lowest dose.{" "}
            <strong>Mounjaro 2.5mg roughly £109.95–£149.95</strong> (promotion dependent),{" "}
            <strong>mid 5mg–7.5mg tiers about £139.95–£239.00</strong>, and{" "}
            <strong>10mg–15mg maintenance up to around £299.00</strong>. Bundles typically include medicine,
            prescriber fee and private prescription in one headline price.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety protocols</p>
          <Points
            items={[
              "BMI gating: generally BMI 30+ or BMI 27+ with weight related comorbidities.",
              "Transparent regulation: patients can verify pharmacy and prescriber credentials via GPhC lookup.",
              "Sharps bins and needles promoted for safe home injection disposal.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why patients choose e-Surgery (marketing recap)</p>
        <Points
          items={[
            "Competitive Wegovy and Mounjaro shelf pricing.",
            "Fast approval and next day capable postage.",
            "Plastic reduction through recyclable packaging choices.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The brand promises a seamless bridge between pharmacist expertise and digital convenience with transparent
          economics and robust medical review so weight loss care stays effective and professionally supervised.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "What is e-Surgery’s GPhC number?",
              a: "Marketing lists 9012167 with a Norwich base — confirm on the live GPhC register.",
            },
            {
              q: "Who reviews consultations?",
              a: "Independent pharmacist prescribers registered in the UK review questionnaires.",
            },
            {
              q: "Is there a free Tracked 24 upgrade?",
              a: "Orders over about £30 are described as auto-upgrading to Royal Mail Tracked 24 at no extra charge.",
            },
            {
              q: "What Wegovy and Mounjaro prices are advertised?",
              a: "Examples cite Wegovy from ~£99.99 and Mounjaro starter bands ~£109.95–£149.95 up to ~£299 at high maintenance strengths.",
            },
            {
              q: "How does cold chain work?",
              a: "Temperature-controlled packaging targets 2–8°C for injectable pens until delivery.",
            },
            {
              q: "Can I get sharps disposal supplies?",
              a: "Yes — sharps bins and needles are promoted for safe administration at home.",
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
          e-Surgery blends aggressive introductory pen pricing, pharmacist led prescribing, eco minded packaging and
          flexible Royal Mail speed tiers including complimentary Tracked 24 upgrades on larger baskets. If
          sustainability and low entry doses matter to you, stack their basket against Health Wise cells for your
          next titration month.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit e-Surgery
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
