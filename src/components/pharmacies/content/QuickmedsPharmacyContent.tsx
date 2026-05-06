"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://quickmeds.co.uk/online-clinic/weight-loss/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function QuickmedsPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Quickmeds"
      fileRef="HW-QUICKMEDS-2026"
      title="Quickmeds (UK): GPhC Online Clinic, Mounjaro, Wegovy and Fast Royal Mail Delivery"
      subtitle="GPhC registered online pharmacy clinic combining short consultations, personalised plans, GLP-1 and oral weight medicines where suitable, same-day dispatch claims, tracked Royal Mail tiers, and discreet packaging. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · Orlistat · appetite-regulating therapies where listed"
      providerName="Quickmeds"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Quickmeds (GPhC 9012521 — verify premises on register)",
        },
        {
          k: "Pathway",
          v: "Online questionnaire · prescriber review · secure checkout · pharmacy dispatch",
        },
        {
          k: "Fulfilment",
          v: "Same-day dispatch (cut-off dependent) · Royal Mail Tracked 24/48 · Special Delivery options",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Quickmeds.webp"
      heroProviderLogoAlt="Quickmeds"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-slate-900">Why research Quickmeds?</strong> Every online pharmacy has a distinct approach to patient care, pricing, and medication delivery. This independent dossier breaks down how Quickmeds handles weight management consultations, offering you a clear look at their service structure so you can compare it against your personal health needs and preferences.</p></div>
        <p className="text-slate-800 leading-relaxed">
          UK patients comparing private obesity care often prioritise <strong>regulation</strong>,{" "}
          <strong>speed</strong>, and <strong>discretion</strong>.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Quickmeds
          </a>{" "}
          markets its online clinic inside a <strong>GPhC registered</strong> pharmacy framework so
          prescription-only medicines such as <strong>Mounjaro</strong>, <strong>Wegovy</strong>, or{" "}
          <strong>Orlistat</strong> route through consultation and professional review rather than casual
          resale.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises their stated pathway, logistics, price anchors, and why reviewers rate
          the service highly on Trustpilot style surfaces.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why Quickmeds presents as trustworthy</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Every patient completes a medical consultation before supply.",
              "Qualified healthcare professionals review eligibility.",
              "Medicines issue only when clinically appropriate.",
              "Ongoing support is described throughout treatment.",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            That structure aims to reduce counterfeit risk common on unregulated sites and reassures
            buyers they receive licensed medicines appropriate to their history.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Key benefits in marketing copy</p>
        <Points
          items={[
            "Convenient fully online clinic without in-person GP visits or long NHS queues for private payers.",
            "Personalised recommendations after individual assessment rather than one-size prescribing.",
            "Access to GLP-1 injections plus oral options such as Orlistat and other metabolic or appetite-focused medicines where listed.",
            "Medicines framed to reduce appetite, prolong fullness, support calorie control, and improve long-term management alongside lifestyle coaching.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Fast discreet delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Orders ship in <strong>plain packaging</strong> without obvious contents labelling, supporting
          confidentiality for sensitive treatments.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How the service works</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              t: "Step 1: Online consultation",
              d: "Short questionnaire on weight, BMI, medical history, medicines, and lifestyle, often only a few minutes.",
            },
            {
              t: "Step 2: Clinical review",
              d: "Prescriber decides eligibility, medicine choice, and starting dose; team may contact you for clarification.",
            },
            {
              t: "Step 3: Prescription and checkout",
              d: "Select approved treatment, pay securely, order moves to dispensing.",
            },
            {
              t: "Step 4: Delivery",
              d: "Pharmacy prepares medication, packs discreetly, ships via tracked services.",
            },
          ].map((s) => (
            <div key={s.t} className="border border-slate-200/90 bg-[#fbf9f4] p-5">
              <p className="font-bold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Delivery methods and timeframes</p>
        <Points
          items={[
            "Same-day dispatch when orders clear before the advertised weekday cut-off.",
            "Next-day delivery options alongside Royal Mail Tracked 24 and Tracked 48.",
            "Special Delivery referenced where premium signed receipt matters.",
            "Many patients receive medication within about 24–48 hours after approval subject to stock and postcode.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Potential delays include extra medical questions, stock limits, or orders placed after cut-off,
          sometimes pushing dispatch another day or two.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Managing delivery to your address</p>
        <Points
          items={[
            "Prescriptions verified and medicines accuracy-checked before release.",
            "Delivery addresses validated at checkout.",
            "Proactive email, phone, or messaging updates if dispatch shifts.",
            "Injectable cold chain packaging aims to limit heat exposure and shorten transit where possible.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Expected costs</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Illustrative UK injection pricing referenced alongside Quickmeds often sits around{" "}
            <strong>£175–£250 per month</strong>, typically bundling medication, online consultation, and
            clinical support.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Some injectable starter promotions cite figures near <strong>£169.95</strong>; oral routes may
            cost less. Long-term annual spend themes land roughly{" "}
            <strong>£2,000–£3,000</strong> when therapy continues across titration.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Value narrative</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Higher monthly fees buy medical oversight, licensed supply, rapid logistics, and support
            channels versus unmanaged OTC products or uncertain grey-market injectables.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Versus NHS and traditional clinics</p>
        <Points
          items={[
            "Faster private access after approval compared with many NHS referral waits.",
            "No travel or time off for clinic visits when digital triage suffices.",
            "Trustpilot-style ratings reported as strong with praise for service speed and care quality.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Summary advantages</p>
        <Points
          items={[
            "Regulated UK pharmacy positioning.",
            "Quick digital consultation.",
            "Personalised treatment planning.",
            "Access to proven prescription medicines where suitable.",
            "Same-day dispatch and next-day delivery narratives.",
            "Discreet confidential parcels.",
            "Transparent headline pricing themes.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "What is the dispatch cut-off?",
              a: "Check Quickmeds live checkout text; same-day dispatch claims depend on weekday time limits.",
            },
            {
              q: "Can I use Tracked 48 to save money?",
              a: "If offered, slower tiers trade speed for fee savings but extend fridge urgency for injectables.",
            },
            {
              q: "Does Quickmeds sell only injections?",
              a: "Marketing lists GLP-1 pens plus Orlistat and related oral strategies for eligible patients.",
            },
            {
              q: "How do Trustpilot scores help?",
              a: "They signal service consistency but should sit beside GPhC verification and your clinician’s advice.",
            },
            {
              q: "What if stock runs out?",
              a: "Expect dispatch slips; regulated pharmacies should communicate delays rather than substitute silently.",
            },
            {
              q: "Should I inform my GP?",
              a: "Shared records help duplicate prescribing checks and blood monitoring when GLP-1 therapy continues.",
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
          Quickmeds targets readers who want <strong>GPhC backed speed</strong>: short forms, prescriber
          gates, Royal Mail tracking, and discreet packs. Compare their live quote with Health Wise tables
          for your exact Mounjaro or Wegovy strength before assuming headline “from” prices hold at higher
          doses.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Quickmeds
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
