"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.thefamilychemist.co.uk";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function TheFamilyChemistPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="The Family Chemist"
      fileRef="HW-FAMILYCHEMIST-2026"
      title="The Family Chemist (UK): Regulated Online Weight Loss, Delivery Tiers and Clear Pricing"
      subtitle="UK online pharmacy presenting GPhC aligned governance, free consultation questionnaires, choice of weekly or daily injectables and tablets, tiered Royal Mail style delivery including fridge lines, and accessory add ons. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Nevolat · Orlistat · Xenical · Accessories"
      providerName="The Family Chemist"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "The Family Chemist (GPhC 9012915 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Free online questionnaire · clinician review · treatment choice if eligible · pharmacist dispensing · courier dispatch",
        },
        {
          k: "Fulfilment",
          v: "Standard / next day / Saturday / fridge Royal Mail · Local Collect · discreet packaging",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/the family chemist.webp"
      heroProviderLogoAlt="The Family Chemist"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            The Family Chemist
          </a>{" "}
          markets itself as a fully registered UK online pharmacy working within{" "}
          <strong>GPhC</strong> and <strong>MHRA</strong> aligned standards. Medicines, including weight loss
          lines, are described as dispensed under pharmacist oversight with clinical directors and independent
          prescribers reviewing cases before prescriptions release.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises that positioning alongside their stated logistics and price list so you can
          contrast them with other dossiers. Many unofficial sellers lack equivalent oversight; the pharmacy
          narrative stresses genuine UK supply routes as the safer alternative.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Digital pathway (four stages)</p>
        <Points
          items={[
            "Online consultation: short free questionnaire covering age, weight, BMI, medical history and current health.",
            "Choose treatment: weekly injections, daily injections or oral tablets depending on eligibility and goals.",
            "Clinical assessment: prescribers review details and may contact you for clarification before approval.",
            "Approval and dispatch: pharmacist dispensing then discreet shipment via partners such as Royal Mail.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The pitch merges clinical gatekeeping with home based convenience for patients who prefer not to
          attend in person appointments for initial access.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery options (as published)</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <ul className="list-disc space-y-3 pl-5 text-slate-800 leading-relaxed">
            <li>
              <strong>UK standard:</strong> about <strong>£2.99</strong>,{" "}
              <strong>free over roughly £20</strong>, <strong>1–3 working days</strong> after prescription
              approval, discreet packaging, suited to tablets and non fridge items.
            </li>
            <li>
              <strong>UK next day (signature):</strong> <strong>£6.99</strong>, next working day Monday to
              Friday with a <strong>2pm cutoff</strong>, for urgent needs after approval.
            </li>
            <li>
              <strong>UK Saturday (signature):</strong> <strong>£9.99</strong>, Saturday arrival when ordered
              before <strong>2pm Friday</strong>.
            </li>
            <li>
              <strong>Royal Mail fridge medicines:</strong> described as <strong>free</strong>,{" "}
              <strong>1–2 working days</strong> after approval, aimed at temperature sensitive weekly
              injections.
            </li>
            <li>
              <strong>Royal Mail Local Collect:</strong> <strong>£9.99</strong>,{" "}
              <strong>1–3 working days</strong> from approval, pickup at a chosen Post Office.
            </li>
          </ul>
          <p className="mt-4 text-slate-800 leading-relaxed">
            Clocking starts after <strong>prescriber or pharmacist approval</strong>, not at checkout.
            Updated regulatory messaging warns that <strong>new weight loss patients may wait up to about
            seven days</strong> for first approvals, so plan buffer before doses run out.
          </p>
        </HazardBox>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative product prices</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Marketing lists anchors such as <strong>Mounjaro from about £139.99</strong>,{" "}
            <strong>Wegovy from about £97.99</strong>, <strong>Nevolat from about £45</strong>,{" "}
            <strong>Orlistat about £25.99</strong>, <strong>Xenical about £49.99</strong>, plus accessories
            like <strong>needles (90) £4.99</strong>, <strong>Sharpsguard £7.95</strong>,{" "}
            <strong>alcohol swabs (100) £4.99</strong>, and a <strong>weight loss travel letter £20</strong>.
            Weekly GLP‑1 pens sit at a premium versus oral fat binders; transparent shelf pricing is framed as
            avoiding hidden fees alongside predictable carriage bands.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Why they say patients pick them</p>
          <Points
            items={[
              "Professional medical oversight rather than unchecked retail checkout.",
              "Regulated legitimate pharmacy supply with quality checks.",
              "Fully online ordering from consult through payment and tracking.",
              "Multiple discreet delivery speeds including fridge service.",
              "Clear headline pricing for medicines and carriage.",
              "Accessory SKUs (needles, sharps, swabs, travel letters) in one basket.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Considerations before you buy</p>
        <Points
          items={[
            "Approval latency: new obesity patients may face up to roughly seven days for first prescriptions under cited regulatory pacing.",
            "Postal variability: occasional courier delays happen; marketing mentions refunds when delays are carrier fault.",
            "Realistic expectations: medicines work best with diet, movement and long term habits rather than as instant fixes.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is The Family Chemist regulated?",
              a: "Their copy describes GPhC registration and MHRA aligned standards with pharmacist led dispensing — verify live premises on the official register.",
            },
            {
              q: "When does delivery timing start?",
              a: "Published notes say timelines begin after clinical approval, not immediately after you submit an order.",
            },
            {
              q: "How much is fridge delivery for injections?",
              a: "Marketing cites free Royal Mail fridge medicine delivery within about 1–2 working days after approval.",
            },
            {
              q: "What are entry prices for Mounjaro and Wegovy?",
              a: "Summaries quote about £139.99 and £97.99 respectively at starting tiers — confirm dose specific checkout.",
            },
            {
              q: "Can I collect from a Post Office?",
              a: "Local Collect is advertised at £9.99 with roughly 1–3 working day turnaround after approval.",
            },
            {
              q: "Could approval take a week?",
              a: "Yes — their materials flag up to about seven days for some new weight loss approvals under updated rules.",
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
          The Family Chemist combines regulated narratives, a structured questionnaire, broad SKU coverage
          from premium weekly injections to budget tablets, accessory merchandising, and unusually explicit
          delivery tariffs including free fridge lanes. Cross check every fee on live checkout and against
          Health Wise comparison rows for your GLP‑1 strength.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit The Family Chemist
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
