"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.mshweightloss.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function MshWeightLossPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="MSH Weight Loss"
      fileRef="HW-MSH-2026"
      title="MSH Weight Loss (UK): Mounjaro, Wegovy, Nurse Support and DPD Delivery"
      subtitle="UK clinic style programme with online assessment, personalised prescribing, specialist nurse support, 28-day subscription cycles, signed next-day courier delivery, and bundled monthly pricing themes. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · Rybelsus (where listed)"
      providerName="MSH Weight Loss"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "MSH Weight Loss (GPhC 9012599 — verify CQC/MHRA claims on live registers and site)",
        },
        {
          k: "Model",
          v: "28-day subscription · monthly wellbeing surveys · nurse and clinical support",
        },
        {
          k: "Fulfilment",
          v: "DPD next-day signed · Royal Mail some regions · cold chain injectables · Mon–Fri dispatch typical",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/MSH Weight Loss.webp"
      heroProviderLogoAlt="MSH Weight Loss"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Choosing a UK online weight loss clinic means weighing trust, clinical depth, and whether
          logistics match injectable cold chain rules.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            MSH Weight Loss
          </a>{" "}
          presents as a regulated clinic pathway rather than a single checkout: prescribing where
          suitable, ongoing monitoring, and courier delivery engineered around temperature sensitive
          pens.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises their public narrative on assessment, medicines, subscription
          rhythm, fees, and delivery controls so you can line it up next to other providers on our
          comparison pages.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>What MSH Weight Loss is</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          MSH describes access to prescription medicines such as{" "}
          <strong>tirzepatide (Mounjaro)</strong>, <strong>semaglutide (Wegovy)</strong>, and{" "}
          <strong>Rybelsus tablets</strong> where
          clinically appropriate, plus personalised clinical support. Positioning contrasts with
          generic diet sheets or unregulated supplements by focusing on biological appetite and
          metabolic pathways.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Three pillars recur in marketing: <strong>medical assessment and prescription</strong>,{" "}
          <strong>ongoing clinical support</strong>, and <strong>home delivery of medication</strong>
          , framed as an end-to-end service rather than a one-off product sale.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How the programme works</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="mt-2 font-semibold text-slate-900">1. Online assessment</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            BMI, medical history, current medicines, and goals feed a suitability decision. Typical
            private thresholds cited are <strong>BMI 30 or above</strong> or{" "}
            <strong>BMI 27 with related health conditions</strong>, aligned with common obesity
            medicine criteria.
          </p>
          <p className="mt-4 font-semibold text-slate-900">2. Personalised prescription plan</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            If approved, a prescriber issues a tailored plan. Weekly injectables such as Mounjaro or
            Wegovy and oral options may appear with <strong>dose escalation schedules</strong>. Public
            copy explains mechanisms as <strong>reduced hunger signalling</strong>,{" "}
            <strong>slower gastric emptying</strong>, and <strong>longer fullness</strong>, which can
            make adherence easier for some patients when combined with lifestyle change.
          </p>
          <p className="mt-4 font-semibold text-slate-900">3. Ongoing clinical support</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            Marketing highlights <strong>specialist weight loss nurses</strong>, regular check ins,{" "}
            <strong>monthly wellbeing surveys</strong>, and nutrition or lifestyle guidance so patients
            are not isolated after the first delivery.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Delivery: couriers, speed, and cold chain</p>
        <div className="mt-3 space-y-3 text-slate-800 leading-relaxed">
          <p>
            <strong>Primary courier:</strong> <strong>DPD next-day signed-for</strong> service for
            secure delivery with signature proof and tracking. <strong>Royal Mail</strong> may be
            used for some regions.
          </p>
          <p>
            After prescription approval, medicines are described as{" "}
            <strong>dispatched promptly</strong>, often <strong>next working day</strong> on mainland
            UK, so many patients see parcels
            within about <strong>24–48 hours of approval</strong> excluding exceptions such as
            islands, weather, or stock.
          </p>
          <p>
            <strong>Cold chain:</strong> injectables such as Mounjaro and Wegovy ship with{" "}
            <strong>temperature controlled packaging</strong>. Dispatch is usually{" "}
            <strong>Monday to Friday</strong>; <strong>weekend delivery</strong> may be available for an{" "}
            <strong>additional fee</strong> where offered.
          </p>
          <p>
            <strong>Address rules:</strong> delivery address may be <strong>locked after processing</strong>{" "}
            because orders tie to the approved prescription; responsibility shifts to the patient
            after dispatch. Signature on delivery supports accountability.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Subscription rhythm and monitoring</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          MSH uses a <strong>28-day subscription</strong> aligned to common dosing cycles: automatic
          renewal, continuous supply when still eligible, and regular health monitoring. Patients are
          expected to complete <strong>monthly wellbeing surveys</strong> to remain on programme so
          doses, side effects, and eligibility can be reviewed safely.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Indicative monthly costs</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Wegovy (semaglutide):</strong> from about <strong>£129</strong> on starter dose
            tiers up to roughly <strong>£239</strong> on higher doses; introductory discounts may
            reduce month one in promotions.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Mounjaro (tirzepatide):</strong> entry dose around <strong>£189</strong> per month
            style bundles up to about <strong>£319</strong> on top strengths in marketing examples.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Bundles often include consultation, support, medication, and delivery with{" "}
            <strong>delivery frequently included</strong> in the headline; confirm live Ts&amp;Cs.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Extra fees to read in terms</p>
          <Points
            items={[
              "Optional weekend delivery surcharge where selectable.",
              "Around £15 administration fee if cancelling before dispatch in some policies.",
              "Higher doses cost more as titration advances.",
            ]}
          />
          <p className="mt-3 text-slate-800 leading-relaxed">
            MSH also notes that reduced food intake can lower grocery and takeaway spend for some
            households, partially offsetting medication cost, though personal budgets vary widely.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why choose MSH over lighter-touch sellers</p>
        <Points
          items={[
            "Regulated UK healthcare framing with references to oversight bodies such as CQC, GPhC, and MHRA in marketing copy (verify current registrations yourself).",
            "Personalised plans by health profile, goals, and tolerance.",
            "Fast signed courier delivery suited to accountable prescription supply.",
            "Continuous nurse support, check ins, and dose reviews tied to survey responses.",
            "Public expectations include up to around 10% body weight change within six months for some patients when therapy and lifestyle align.",
            "Privacy and convenience: online first pathway with discreet logistics.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery management in sequence</p>
        <Points
          items={[
            "Patient completes assessment.",
            "Clinician reviews data.",
            "Prescription approves when criteria met.",
            "Pharmacy prepares medication.",
            "Courier dispatches for next-day style receipt.",
            "Patient signs for cold chain or controlled supply.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The intent is traceability, correct dosage release, and no shipment without a positive
          clinical decision.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Differentiators and drawbacks</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          MSH contrasts itself with vendors that only ship boxes by layering integrated clinical
          oversight, support systems, transparent headline pricing, and courier infrastructure suited
          to injectables.
        </p>
        <Points
          items={[
            "Monthly cost can feel high as doses rise.",
            "Subscriptions auto-renew until actively cancelled.",
            "Prescription items cannot be returned after dispatch.",
            "Strict eligibility criteria apply.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Who it suits</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing aims at people living with obesity or overweight who need medical support beyond
          dieting alone, readers who want home delivered continuity, and patients comfortable with
          monthly surveys and nurse touchpoints. Typical spend themes cluster roughly between{" "}
          <strong>£129 and £319 per month</strong> depending on molecule and dose, with delivery often
          bundled.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is MSH the same as buying from any online pharmacy?",
              a: "They frame the offer as a clinic programme with monitoring and surveys, not a single anonymous transaction.",
            },
            {
              q: "Why must I complete monthly surveys?",
              a: "To keep prescribing within safety rules and document progress, side effects, and continued eligibility.",
            },
            {
              q: "Can I change my address after paying?",
              a: "Marketing warns addresses may be locked after processing to match the approved prescription; fix errors before that gate.",
            },
            {
              q: "What if I need weekend delivery?",
              a: "Optional weekend lanes may carry a surcharge; read checkout options.",
            },
            {
              q: "How fast after approval?",
              a: "Next working day after dispatch is commonly advertised for mainland UK; remote postcodes can take longer.",
            },
            {
              q: "Does Rybelsus replace injectables?",
              a: "It is a different oral semaglutide format with its own criteria; confirm what your clinician authorises on programme.",
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
          MSH Weight Loss targets readers who want <strong>structured UK private obesity care</strong>
          with nurse visibility, predictable <strong>28-day</strong> resupply, signed courier delivery,
          and cold chain handling for GLP-1 class pens. Compare all-in monthly totals on Health Wise,
          diary your renewal date, and read cancellation and weekend fee clauses before you subscribe.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit MSH Weight Loss
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
