"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://pharmacyadvance.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function PharmacyAdvanceContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Pharmacy Advance"
      fileRef="HW-PHARMACY-ADVANCE-2026"
      title="Pharmacy Advance (UK): Mounjaro, Wegovy, Saxenda — Online Consultation and Delivery"
      subtitle="Official dossier: end-to-end online weight-loss service, secure questionnaire, pharmacist or prescriber review, regulated dispensing, Royal Mail–style tracked delivery, cold-chain claims for injectables, indicative pricing, privacy and GPhC context (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Saxenda · GLP-1 injectables"
      providerName="Pharmacy Advance"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Pharmacy Advance (GPhC 9012423 — verify premises on register)",
        },
        {
          k: "Pathway",
          v: "Online questionnaire · clinical review · prescription if suitable · home delivery",
        },
        {
          k: "Fulfilment",
          v: "Tracked UK delivery · discreet outer pack · cold-chain packaging where stated",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/pharmacy advanced.webp"
      heroProviderLogoAlt="Pharmacy Advance"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-blue-900">About Pharmacy Advance:</strong> Navigating online weight loss treatments can be complex. Pharmacy Advance is one of several UK-registered services offering prescription medication alongside professional guidance. Before proceeding with any treatment, it is essential to review the specific fulfillment policies, consultation requirements, and support structures that Pharmacy Advance provides.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Marketing summaries for Pharmacy Advance typically position the brand as a{" "}
          <strong>regulated UK online pharmacy</strong> for prescription weight-loss treatment,
          emphasising safety, convenience, clinical oversight, and reliable delivery. The narrative
          suits people who want to avoid long GP waits or in-person clinic friction while staying
          on a legitimate prescribing route.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise distils those claims here for comparison with other providers — always{" "}
          <strong>confirm live</strong> eligibility, pricing, delivery rules, and follow-up policy on
          Pharmacy Advance&apos;s own site before you pay.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Fully online service (three-step model)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Public-facing copy describes a digital-first pathway that mirrors traditional care without
          default face-to-face GP visits. The advertised flow usually breaks down as:
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Online consultation — secure medical questionnaire covering health, BMI, history, and current medicines so treatment can be individualised.",
              "Pharmacist or prescriber review — a qualified professional decides suitability; only appropriate patients should receive medication.",
              "Delivery to your door — once approved, medication is dispensed and shipped to your home in packaging described as discreet.",
            ]}
          />
        </HazardBox>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Stock levels, prescriber workload, bank holidays, and rural postcodes still change real
          turnaround versus marketing headlines.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Treatments commonly referenced (GLP-1 class)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Their category pages commonly list the following prescription injectables for UK private
          pathways where clinically appropriate (not generic supplements):
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-800 leading-relaxed">
          <li>
            <strong>Mounjaro</strong> (tirzepatide) — dual incretin pathway; dose and titration only
            per prescriber decision and SmPC.
          </li>
          <li>
            <strong>Wegovy</strong> (semaglutide, weekly) — GLP-1 receptor agonist; efficacy and
            risks per official product information.
          </li>
          <li>
            <strong>Saxenda</strong> (liraglutide, daily) — still within the GLP-1 agonist family in
            marketing copy; availability depends on current clinical assessment.
          </li>
        </ul>
        <p className="mt-3 text-slate-800 leading-relaxed">
          These medicines help regulate appetite and glucose; meaningful weight change in trials is
          tied to <strong>long-term lifestyle change</strong> alongside medication — not
          &quot;injections alone&quot;.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Patient safety and regulation</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          The brand stresses <strong>GPhC registration</strong>, prescribing only after clinical
          assessment, and dispensing by qualified professionals. UK authorities and press have
          highlighted unsafe or unregulated weight-loss injection sellers — using a licensed
          pharmacy with mandatory consultation improves traceability and reduces counterfeit risk,
          but does not remove pharmacological side-effect risk.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          With consultation and approval, the narrative states patients receive appropriate
          medication, side-effect considerations, and scope for ongoing monitoring — confirm follow-up
          cadence and contact channels on Pharmacy Advance&apos;s current service pages.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Personalised care and ongoing support</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Unlike basic retailers, their materials position follow-up reviews to monitor progress,
          adjust dose where appropriate, and manage adverse effects. Plans are tied to BMI, medical
          history, and treatment response so patients are not left unsupported after the first order.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Fast, tracked, discreet delivery (and cold chain)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Delivery reliability matters for prescription medicines. Their logistics messaging commonly
          includes:
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Processing often quoted at 1–2 days after approval; delivery commonly 1–3 working days; next-day options may exist depending on service.",
              "Discreet outer packaging — plain, unbranded, no obvious contents labelling.",
              "Temperature-controlled transit for injectables — packaging aimed at roughly 2–8°C during shipping; critical for Mounjaro and Wegovy stability claims.",
              "Carriers such as Royal Mail; fully tracked delivery, email updates and tracking links, signature on delivery for certain lines.",
              "Failed delivery — parcels may be returned to the pharmacy and reassessed before resend to protect medication integrity.",
            ]}
          />
        </HazardBox>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing sometimes suggests medication within <strong>24–48 hours</strong> after
          dispatch for many UK addresses — treat that as best-case, not a guarantee for every
          postcode or season.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Flexible delivery and postage expectations</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          They advertise free standard delivery on eligible orders, paid upgrades for urgency, and
          secure handling for sensitive medicines. As a wider UK market benchmark (not
          Pharmacy-specific), delivery tiers are often described as free 2–3 day, roughly{" "}
          <strong>£3–£6</strong> tracked services, and small premiums for next-day — reconcile any
          benchmark with the checkout line items on Pharmacy Advance when you order.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative treatment prices (check live)</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Illustrative public price points sometimes quoted online include Wegovy from around{" "}
            <strong>£105.99</strong>, Mounjaro from around <strong>£154.99</strong>, Saxenda from
            around <strong>£159.99</strong> — often positioned to include consultation and
            prescription issuance in the bundle narrative. Higher strengths and maintenance months
            cost more; compare <strong>like-for-like dose</strong> on Health Wise tables.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Total monthly cost framing</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Total spend includes drug, clinical assessment, prescription, dispensing, packaging, and
            delivery. Industry-style copy often places rough monthly expectations around{" "}
            <strong>£100–£150+</strong> at entry dose bands for some GLP-1 lines, rising with dose
            escalation — illustrative of
            the wider UK private market, not a quote for your basket today.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Value versus NHS and in-person private clinics</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Their positioning contrasts digital access (no waiting lists narrative, privacy, flexible
          timing) with traditional routes and lower travel overhead versus bricks-and-mortar private
          clinics. Health Wise does not replace your clinician; private care is a personal trade-off
          of cost, continuity, and GP documentation.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Direct-to-address delivery flow</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          After prescription approval, medication is dispensed and checked, packed securely and
          discreetly, shipped via a tracked courier, and delivered to your home or chosen address —
          reducing retail pharmacy visits for busy or remote patients and shortening time-to-start
          when logistics align.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Privacy and confidentiality</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          They highlight discreet packaging, secure online consultations, and confidential records —
          relevant where stigma still discourages people from seeking obesity treatment.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Typical eligibility (marketing — not Health Wise rules)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Common private marketing thresholds on their pages: BMI over 30, or over 27 with
          weight-related health risks, age roughly 18–75, and no conflicting conditions — the
          prescriber may still
          refuse unsafe combinations or incomplete histories.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>End-to-end timeline (marketing claims)</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Consultation: about 10–15 minutes in typical user-facing estimates.",
              "Review: often within 24 hours (may be faster or slower operationally).",
              "Dispatch: within 1–2 days after approval.",
              "Delivery: 1–3 working days — total journey sometimes quoted as roughly 2–4 days.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Why regulated online pharmacies matter</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Demand for weight-loss injections has grown; authorities warn about unsafe prescribing,
          fake medicines, and absent clinical oversight from unverified sellers. A GPhC-registered
          pharmacy with mandatory consultation is intended to improve odds of genuine product,
          proper medical review, and support channels — you should still verify premises and
          superintendent details yourself on the register.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Does Pharmacy Advance replace my GP?",
              a: "No. It is a private digital route. Keep your GP informed for chronic conditions, pregnancy, and drug interactions — online prescribers may direct you to urgent services when red flags appear.",
            },
            {
              q: "What if my parcel is delayed in hot weather?",
              a: "Contact the pharmacy and courier immediately; follow room-temperature limits on the PIL for pens. Do not use a pen you believe exceeded cold-chain limits without pharmacist advice.",
            },
            {
              q: "Are follow-ups automatic?",
              a: "Follow-up reviews and dose adjustments are part of their service story — frequency, fees, and messaging channels must be confirmed on Pharmacy Advance’s current policy pages.",
            },
            {
              q: "How do I compare Mounjaro price fairly?",
              a: "Use Health Wise Mounjaro comparison for the same mg strength and pack duration so monthly cost is apples-to-apples.",
            },
            {
              q: "If I want Mounjaro, will I still see Saxenda on the site?",
              a: "Catalogues list multiple GLP-1 lines; the prescriber chooses what is indicated and safe for you — marketing breadth does not mean you can self-select any injectable.",
            },
            {
              q: "Where do I verify GPhC registration?",
              a: "Use the premises details shown on Pharmacy Advance’s site and match them to the General Pharmaceutical Council register entry.",
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
        <p className={sectionLabel}>Conclusion</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Taken together, Pharmacy Advance presents a full-stack patient journey:{" "}
          <strong>regulated UK pharmacy</strong>, structured online consultation, access to commonly
          advertised GLP-1 treatments, fast discreet delivery with cold-chain messaging,
          transparent-looking headline pricing, and ongoing support themes. Pair that positioning with{" "}
          <strong>live dose-level pricing</strong> on Health Wise and independent GPhC verification
          before starting therapy.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Pharmacy Advance
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
