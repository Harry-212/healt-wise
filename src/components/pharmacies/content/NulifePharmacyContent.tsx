"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.thenulife.com/weight-loss-management";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function NulifePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="NuLife Pharmacy"
      fileRef="HW-NULIFE-2026"
      title="NuLife Pharmacy Weight Loss Management: UK Programme, GLP-1 Pathways and Ongoing Support"
      subtitle="GPhC supervised online pharmacy offering clinically supervised weight management, pharmacist-led assessment, holistic education, signed discreet delivery, and transparent pricing themes. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · GLP-1 pathways · programme support"
      providerName="NuLife Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "NuLife Pharmacy (GPhC 9012931 — verify premises and superintendent on register)",
        },
        {
          k: "Programme",
          v: "Consultation · prescribing where appropriate · nutrition and lifestyle layers · follow-up",
        },
        {
          k: "Fulfilment",
          v: "Signed courier · plain packaging · temperature control where required · limited changes within 48h of dispatch",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Nulife Pharmacy.webp"
      heroProviderLogoAlt="NuLife Pharmacy"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Choosing a safe, medically supported weight loss route matters when unregulated products and
          quick fix marketing flood search results.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            NuLife Pharmacy
          </a>{" "}
          positions itself as a UK online pharmacy offering clinically supervised treatments,
          personalised care plans, and discreet home delivery rather than anonymous checkout supply.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises how they describe regulation, programme depth, logistics, and cost
          context so you can compare NuLife with other dossiers on the same dose band.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulated and trusted supply</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          NuLife highlights supervision under the <strong>General Pharmaceutical Council (GPhC)</strong>
          , meaning medicines should be released only after clinical assessment, with qualified
          pharmacists reviewing orders, patient safety prioritised, and confidentiality maintained. That
          contrasts with informal sellers where counterfeit or inappropriate weight loss medicines are
          a real risk.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Complete management programme</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing stresses a <strong>programme</strong>, not a single SKU:
        </p>
        <Points
          items={[
            "Medical consultation with qualified pharmacists.",
            "Prescription weight loss medicines when clinically appropriate.",
            "Nutritional support and educational resources.",
            "Ongoing monitoring and follow-up care.",
            "Lifestyle and fitness guidance where offered in the bundle.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The goal is structured support so patients are not left alone after the first parcel.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Personalised treatment plans</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            After a detailed online consultation, the team assesses eligibility, selects suitable
            medicines, tailors recommendations, and confirms safe dosing. Extra information or follow
            up consultations may be requested before approval when risk flags appear.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Simple online journey</p>
        <Points
          items={[
            "Select a weight loss programme online.",
            "Complete a medical questionnaire.",
            "Undergo pharmacist review.",
            "Receive approval for treatment when suitable.",
            "Place the medication order.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The digital first flow is pitched as quick and low friction for daily life.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Processing and approval timing</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          NuLife emphasises fast processing, but timelines depend on how quickly you complete the
          consultation, how accurate your details are, and whether further clinical checks apply.
          Orders are typically reviewed by the pharmacy team at least about <strong>48 hours before</strong>{" "}
          the delivery date you select, leaving room for safety checks and prescription approval. Extra
          clarification can delay dispatch deliberately when needed.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Discreet delivery features</p>
        <Points
          items={[
            "Direct delivery to your chosen address.",
            "Plain discreet outer packaging.",
            "Temperature controlled handling for certain medicines.",
            "Signed-for delivery for security; someone should be available because medicines may not be left unattended.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Typical delivery timeline</p>
        <Points
          items={[
            "Days 1–2: Online consultation and order placement.",
            "Days 2–4: Clinical review and approval.",
            "Days 3–5: Medication dispatch.",
            "Days 4–7: Delivery to your address in many mainland cases.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Delays can occur if additional medical checks are required. Patients can often choose a
          preferred delivery date. Orders usually <strong>cannot be changed within 48 hours of
          dispatch</strong>, so double check details early.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How NuLife manages logistics</p>
        <Points
          items={[
            "Address verification at checkout.",
            "Pre-dispatch clinical review for suitability and compliance.",
            "Secure packaging to protect integrity in transit.",
            "Courier services that require signature on delivery.",
            "Patient responsibility to receive the parcel and follow storage instructions, especially for cold items.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Ongoing support and sustainability</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          NuLife promotes continuous guidance from healthcare professionals, nutritional advice and
          videos, follow-up consultations where needed, and monitoring of progress and side effects.
          Long term framing encourages healthy eating, activity, behaviour change, and maintenance
          planning rather than crash dieting alone.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing and what affects cost</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Exact prices sit on NuLife’s live site. Industry style ranges for private injectable
            programmes often fall roughly between <strong>£150 and £300+ per month</strong> depending on
            molecule, dose, treatment length, and support level.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Costs commonly bundle <strong>consultation and assessment, prescription and dispensing,
            ongoing clinical support, nutritional resources, secure delivery, and packaging</strong>.
            Prices are usually shown in GBP with VAT unless stated otherwise.{" "}
            <strong>Shipping and packaging fees may be charged separately.</strong> Dispensed
            medicines typically <strong>cannot be refunded</strong> under regulatory rules, while{" "}
            <strong>refunds may apply if treatment is deemed unsuitable</strong> before supply. Standard
            cancellation fees may apply in some policies.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Transparency and safety</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Marketing aims for clear checkout pricing without hidden prescription fees, building trust
            for budgeting. Safety measures include strict assessments before prescribing, progress
            monitoring, UK regulatory compliance, and secure handling of personal and medical data.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Patient feedback</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          NuLife references strong patient feedback and a high Trustpilot style TrustScore in
          promotional material, with themes such as knowledgeable pharmacists, easy ordering,
          effective outcomes for some users, and responsive support. Independent reviews still deserve
          a balanced read alongside GPhC verification.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why NuLife stands out (summary)</p>
        <Points
          items={[
            "Regulated UK pharmacy positioning.",
            "Personalised care rather than generic checkout.",
            "Convenient online access without in person visits.",
            "Fast reliable delivery with signature security.",
            "Ongoing support throughout treatment.",
            "Holistic focus on long term health, not only short term scale movement.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Considerations</p>
        <Points
          items={[
            "Costs may exceed the cheapest discount sellers.",
            "Someone must be present to sign.",
            "No returns after lawful dispensing of medicines.",
            "Approval can take longer when extra checks are needed.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Are shipping fees included in the medicine price?",
              a: "Marketing often itemises shipping and packaging separately from the medicine line; read the basket breakdown.",
            },
            {
              q: "Can I change my delivery date after approval?",
              a: "Policies typically lock changes within about 48 hours of dispatch; contact support early if plans shift.",
            },
            {
              q: "What if I am declined?",
              a: "Responsible pathways may refund or stop the order rather than supply when unsafe; check the live refund wording.",
            },
            {
              q: "Do I need to attend a physical pharmacy?",
              a: "The model is home delivery after online review for suitable patients.",
            },
            {
              q: "Is NuLife only GLP-1 injections?",
              a: "Programme copy centres on prescription obesity care; confirm the exact formulary on site for orals versus injectables.",
            },
            {
              q: "How does NuLife compare on monthly cost?",
              a: "Use Health Wise price tables for your dose, then add any separate postage lines NuLife shows at checkout.",
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
          NuLife Pharmacy targets readers who want a <strong>regulated UK programme</strong> with
          pharmacist leadership, education, follow up, and secure signed delivery. If you need the
          lowest sticker price alone, other sellers may undercut on medicine cost, but NuLife’s pitch
          is the combination of professional care, monitoring, and sustainable habit support alongside
          prescription tools.
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
