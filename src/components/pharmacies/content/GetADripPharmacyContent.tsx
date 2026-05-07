"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://getadrip.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function GetADripPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Get A Drip"
      fileRef="HW-GETADRIP-2026"
      title="Get A Drip (UK): Clinic Led Weight Loss, Blood Tests and GLP‑1 Prescribing"
      subtitle="Wellness and IV clinic network expanded into a doctor led weight programme: CQC and GPhC framing (Get A Drip Pharma), mandatory nurse blood diagnostics, GMC doctor triage, private clinic reviews, monthly nurse monitoring, optional home dispatch with medical grade cold chain, plus longevity add ons. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · In clinic and pharmacy fulfilment"
      providerName="Get A Drip"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Get A Drip (CQC registered service; dispensing via GPhC pharmacy e.g. Get A Drip Pharma — GPhC 9012347 verify)",
        },
        {
          k: "Model",
          v: "Nurse blood draw · GMC doctor consultation · prescription if eligible · monthly nurse follow up · clinic collect or courier",
        },
        {
          k: "Fulfilment",
          v: "Medical grade 2–8°C shipping from GPhC pharmacy · premium clinic collection option",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/get a drip.webp"
      heroProviderLogoAlt="Get A Drip"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Get A Drip
          </a>{" "}
          built its brand on UK IV vitamin lounges before extending in 2026 into a{" "}
          <strong>specialised weight loss treatment programme</strong>. Unlike online only pharmacies, marketing
          stresses <strong>physical clinics</strong>, <strong>doctor led triage</strong> and hands on monitoring
          for medicines such as <strong>Mounjaro</strong> and <strong>Wegovy</strong>.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise distils their diagnostic first protocol, fulfilment choices and premium pricing bands so you
          can weigh clinic intensity against purely digital providers.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulation and clinical leadership</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Care Quality Commission registration cited alongside medicines dispensed from an in house GPhC registered pharmacy (branded Get A Drip Pharma in public copy).",
              "GMC registered doctors rather than algorithm only triage for personalised screening.",
              "Longevity positioning: nutrition and hydration expertise framing weight change as part of wider metabolic health.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Four step medical protocol</p>
        <Points
          items={[
            "Diagnostic blood test: mandatory venous sampling by qualified nurses reviewing liver, kidney and glucose markers before GLP‑1 therapy.",
            "Specialist consultation: doctors interpret labs and history, often at private clinics such as London Harley Street or other UK sites.",
            "Clinical prescription: UK licensed prescriptions for eligible patients (Mounjaro and similar lines where approved).",
            "Monthly in clinic assessments: nurse led reviews for progress, dose changes and side effect management face to face.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Key benefits (marketing)</p>
        <Points
          items={[
            "Face to face reassurance for injection anxiety or complex histories.",
            "Holistic tracking via repeat blood work beyond scale weight.",
            "Optional longevity services such as hyperbaric oxygen or ozone IV therapy in the wider ecosystem.",
            "Premium clinic environments pitched as private medical centres rather than retail counters.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Receiving medication</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Patients may <strong>collect pens during monthly visits</strong> or request{" "}
          <strong>pharmacy dispatch</strong> from the GPhC registered pharmacy when clinic pickup is impractical.{" "}
          <strong>Medical grade temperature controlled shipping</strong> targets roughly <strong>2°C to 8°C</strong>{" "}
          stability for GLP‑1 pens in transit.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Premium cost structure</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Diagnostics and professional reviews carry separate fees: <strong>initial blood panels and assessments
            often from about £150 upward</strong> depending on package.{" "}
            <strong>Monthly medication spend commonly lands around £150 to £300+</strong> by dose for{" "}
            <strong>Mounjaro</strong> or <strong>Wegovy</strong> style plans, with ongoing nursing check ins bundled
            into the positioning.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety narrative</p>
          <Points
            items={[
              "Diagnostic first workflow to mitigate renal, hepatic or glycaemic risks.",
              "Physical assessment access if adverse effects emerge.",
              "Inspection transparency via CQC and GPhC public reports.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Who the programme suits (summary)</p>
        <Points
          items={[
            "Patients wanting doctors to review real blood data before prescribing.",
            "People preferring in person support over app only journeys.",
            "Readers already interested in broader wellness or longevity services.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Get A Drip elevates obesity care toward <strong>medical procedure rigour</strong>: labs, clinics and
          follow up nursing woven around GLP‑1 prescribing rather than a quick retail purchase.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is blood testing mandatory?",
              a: "Yes — marketing describes nurse led blood diagnostics as a fixed prerequisite before prescribing.",
            },
            {
              q: "Who prescribes?",
              a: "GMC registered doctors review labs and history before issuing UK licensed prescriptions.",
            },
            {
              q: "Can I collect in clinic?",
              a: "Many patients collect pens during monthly assessments; courier dispatch is an alternative.",
            },
            {
              q: "How is cold chain managed?",
              a: "Medical grade refrigerated shipping is cited for 2–8°C pen stability.",
            },
            {
              q: "What budget should I expect?",
              a: "Initial professional and lab fees often start around £150+; monthly GLP‑1 spend may fall roughly £150–£300+ by strength.",
            },
            {
              q: "Are Get A Drip clinics CQC registered?",
              a: "Their narrative highlights CQC oversight alongside GPhC pharmacy dispensing — verify live registrations.",
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
          Get A Drip is built for patients who will pay more for gold standard monitoring: labs on file, doctors in
          clinic, nurses watching titration month to month, and optional longevity upsells. If that matches your risk
          tolerance and schedule, compare their all in costs with Health Wise dose listings; if you only need
          economical postage, lighter digital pharmacies may suffice.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Get A Drip
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
