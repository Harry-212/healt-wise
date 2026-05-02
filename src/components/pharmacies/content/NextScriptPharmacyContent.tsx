"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://nextscript.co.uk/condition/weight-loss/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function NextScriptPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Next Script"
      fileRef="HW-NEXT-SCRIPT-2026"
      title="Next Script Weight Loss (UK): Mounjaro, Wegovy, Saxenda and Video-Verified Prescribing"
      subtitle="UK online prescribing pharmacy with a short health questionnaire, supporting uploads, first-order video consultation, clinical review, discreet fast dispatch, and bundled pricing on many funnels. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · Saxenda"
      providerName="Next Script"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Next Script (GPhC 9012568 — verify superintendent and premises on register)",
        },
        {
          k: "Treatments",
          v: "Mounjaro · Wegovy · Saxenda (subject to suitability)",
        },
        {
          k: "Fulfilment",
          v: "Home delivery · discreet packaging · dispatch often 24–48h after approval · cold chain norms for injectables",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Next Script.webp"
      heroProviderLogoAlt="Next Script"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          More UK patients now look for regulated online clinics instead of only NHS GP routes for
          obesity pharmacotherapy.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Next Script
          </a>{" "}
          markets a streamlined digital model: you stay remote while prescribers and a GPhC registered
          pharmacy handle assessment, approval, and supply.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Public copy builds on three principles: <strong>convenience</strong>, <strong>safety</strong>
          , and <strong>confidentiality</strong>. Unlike informal sellers, Next Script presents as a
          registered UK pharmacy where qualified professionals review every case before prescription
          only medicines release.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Modern treatment context</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Clinical weight management now commonly includes medicines such as{" "}
          <strong>Mounjaro</strong>, <strong>Wegovy</strong>, and <strong>Saxenda</strong> for
          eligible adults. Next Script frames access through a fully digital pathway so suitable
          patients can avoid routine face to face GP appointments while still meeting UK prescribing
          standards.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How the service works</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Step 1: Online consultation. Short health questionnaire covering current weight and BMI, medical history, existing medicines, and lifestyle. Usually only a few minutes and replaces an in person GP visit for qualifying pathways.",
              "Step 2: Supporting evidence. You may upload photo ID, proof of weight, and previous prescriptions if relevant so supply stays compliant and misuse is harder.",
              "Step 3: Video consultation on first orders. A brief video call with a clinician to confirm identity, verify health information, and check treatment fit. Marketing states this is typically only for the first order so repeats can move faster.",
              "Step 4: Clinical review and prescription. A qualified prescriber decides on suitability. If approved, a prescription issues and the pharmacy prepares medication to UK guidelines.",
              "Step 5: Dispatch and delivery. Dispensed from a UK pharmacy, packed discreetly, and shipped with fast standard shipping as part of the service narrative.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Delivery: discreet, reliable, temperature aware</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Next Script emphasises quick processing after approval, confidential outer packaging, and
          direct delivery to your home address. Review snippets often mention fast delivery, discreet
          packaging, and a smooth overall experience, though any regulated service can slip when
          verification or clinician slots queue up.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Timeframes:</strong> dispatch is often described within about{" "}
          <strong>24–48 hours after approval</strong>, with delivery usually within a few working days.
          Real world speed varies with stock, postcode, and how quickly you complete video steps.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Cold chain:</strong> the public weight loss page may not spell out every insulated
          box detail, but UK pharmacy norms for injectables like Wegovy and Mounjaro typically include
          insulated packaging, temperature control in transit, and tracked services so medicine stays
          fit for use. Plan prompt fridge storage on arrival per the patient information leaflet.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Direct to door:</strong> no high street queue, no counter collection unless you
          choose a different model elsewhere. Privacy is a common reason patients pick home delivery.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why patients shortlist Next Script</p>
        <Points
          items={[
            "Fully regulated positioning: GPhC registered pharmacy and licensed UK prescribers in marketing copy.",
            "Convenience: no traditional GP appointment, online consultation available around the clock for form completion, medication to your address.",
            "Efficiency: quick questionnaire, prescription approval, and delivery bands quoted as fast in reviews.",
            "Discretion: confidential consultations, secure payment themes, discreet outer cartons.",
            "Ongoing support: access to healthcare professionals, use guidance, and side effect questions framed as part of care versus a bare retail checkout.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Medicines described in marketing</p>
        <Points
          items={[
            "Mounjaro (tirzepatide).",
            "Wegovy (semaglutide).",
            "Saxenda (liraglutide).",
            "Mechanisms cited: appetite reduction, blood sugar support where relevant, longer fullness alongside lifestyle change.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Indicative pricing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Example bands from available summaries: <strong>Wegovy</strong> roughly{" "}
            <strong>£80–£189</strong>, <strong>Mounjaro</strong> roughly <strong>£131–£266</strong>,{" "}
            <strong>Saxenda</strong> roughly <strong>£68–£260</strong>, varying by dose, treatment
            stage, and stock.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Bundles often cover <strong>online consultation, clinical review, prescription, and
            medication supply</strong>, which can beat clinics that itemise each step separately.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Market context in the brief: UK private injection pricing often clusters around roughly{" "}
            <strong>£99–£170+ per month</strong> for Wegovy style plans and roughly{" "}
            <strong>£150–£200+</strong> for Mounjaro in many listings, so Next Script positions as
            broadly competitive. Confirm live basket numbers.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Extra costs to watch</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Higher doses, repeat cycles, or optional consult add ons can lift totals. Marketing often
            stresses <strong>no hidden fee</strong> themes on core bundles, but always read checkout
            line items for your exact strength.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Realistic service timeline (illustrative)</p>
        <Points
          items={[
            "Day 1: Complete consultation and upload documents.",
            "Days 2–3: Attend video consultation if required; prescriber reviews the file.",
            "Days 3–4: Approval and pharmacy dispatch.",
            "Days 4–6: Delivery to your address in many mainland cases.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Overall, many patients receive medication within a few working days, depending on
          availability and scheduling.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Customer feedback themes</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Ratings are described as strong, with praise for an easy consultation path, fast
          delivery, helpful support, and professional tone. Some users note occasional delays tied to
          booking video slots, which is common when clinicians are in the loop.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Versus other UK providers (headline)</p>
        <Points
          items={[
            "Faster access than long NHS waiting lists for private eligible patients.",
            "Prescribing through a regulated UK pharmacy narrative.",
            "Pricing often comparable or lower than some competitors in the same dose band.",
            "Discreet delivery and a simple online workflow.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Drawbacks to plan for</p>
        <Points
          items={[
            "First-time video consultation adds a scheduling step.",
            "Appointment availability can vary.",
            "Medication stock fluctuates across the market.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is the video call required on every repeat order?",
              a: "Public copy suggests first orders carry the video step so later repeats are faster; confirm the current rule for your account.",
            },
            {
              q: "Can consultation scheduling delay my parcel?",
              a: "Yes. Regulated pathways sometimes wait on clinician availability; build slack if you are switching from another supplier mid month.",
            },
            {
              q: "Does Next Script detail cold chain on the main page?",
              a: "Always read your order confirmation and PIL; UK injectable supply usually follows insulated tracked norms even when marketing copy stays high level.",
            },
            {
              q: "What if my dose is out of stock?",
              a: "Private GLP-1 supply can gap when demand spikes; ask support for realistic restock timelines before you pay.",
            },
            {
              q: "Is Saxenda the same cadence as weekly pens?",
              a: "No. Saxenda is a different molecule and daily injection schedule; follow the prescriber plan, not another patient’s pen calendar.",
            },
            {
              q: "Should I tell my NHS GP?",
              a: "Shared records help duplicate prescribing and blood test monitoring; ask how Next Script corresponds with your practice if needed.",
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
          Next Script combines <strong>regulated UK pharmacy supply</strong>,{" "}
          <strong>identity aware onboarding</strong> through first order video,{" "}
          <strong>competitive illustrative pricing</strong>, and a <strong>patient focused</strong>{" "}
          digital journey. If you want verified prescribing with a broad injectable menu, it belongs on
          your shortlist next to other Health Wise dossiers at the same dose and monthly budget.
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
