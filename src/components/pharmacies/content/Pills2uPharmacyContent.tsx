"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://pills2u.co.uk/condition/weight-loss/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function Pills2uPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Pills2U"
      fileRef="HW-PILLS2U-2026"
      title="Pills2U (UK): Mounjaro, Wegovy — Online Weight Loss Prescriber Pathway"
      subtitle="Official dossier: condition-led UK pharmacy shopfront, licensed prescriber review after questionnaire, GLP-1 injectables, fast tracked delivery claims, bundled pricing narrative, rural access, professional oversight, and long-term weight-management positioning (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · GLP-1 injectables"
      providerName="Pills2U"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Pills2U (GPhC 9012634 — verify premises on register)",
        },
        {
          k: "Pathway",
          v: "Choose treatment line · questionnaire · prescriber decision · pharmacy dispatch",
        },
        {
          k: "Fulfilment",
          v: "Tracked UK courier · discreet packaging · home or alternate secure address",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Pills2U.webp"
      heroProviderLogoAlt="Pills2U"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Pills2U operates as a <strong>UK-based online pharmacy</strong> where people
          searching for weight-loss medication can access clinically approved treatments with
          professional oversight and home delivery — aimed at convenience, privacy, and regulated
          supply instead of informal marketplace purchases.
        </p>
        <p className="text-slate-800 leading-relaxed">
          The <strong>condition hub</strong> pattern means you browse treatment lines, complete a
          medical questionnaire, receive a licensed prescriber decision, and only then obtain
          dispensed medication — a gatekeeping model designed for potent prescription therapies.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Clinically approved medications on offer</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing emphasises <strong>Mounjaro</strong> (tirzepatide) and <strong>Wegovy</strong>{" "}
          (semaglutide) for eligible adults. Expected effects in copy include appetite reduction,
          craving control, and regulation of hunger-related hormones — always read the SmPC and PIL
          for your specific pen, and use injections only as trained.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Supply is described as <strong>after medical assessment only</strong>; typical marketing
          eligibility mirrors other UK private providers (BMI over 30, or over 27 with related
          conditions). The prescriber may still decline if history, pregnancy, interacting drugs, or
          endocrine issues make GLP-1 therapy unsafe.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Safe, regulated service framing</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          They state prescriptions are reviewed by qualified professionals, pathways follow UK
          medical guidance, and confidentiality is protected — contrasted with unregulated online
          sellers where product authenticity and dosing oversight are uncertain. Health Wise still
          recommends you verify the current GPhC premises entry yourself.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>User-friendly ordering process</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Choose treatment — browse available weight-loss medicines online.",
              "Complete consultation — short medical questionnaire.",
              "Prescription review — licensed prescriber assesses suitability.",
              "Approval and dispensing — UK pharmacy prepares medication.",
              "Delivery — discreet shipment to your chosen address (home, work, or another secure location).",
            ]}
          />
        </HazardBox>
        <p className="mt-3 text-slate-800 leading-relaxed">
          The pathway is described as often completable in minutes versus traditional healthcare
          friction — real timelines still depend on clinician queues and cut-off times.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Fast discreet delivery and verification before dispatch</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Before shipping, their materials stress <strong>prescription verification</strong> (correct drug,
          dose, patient safety), <strong>secure discreet packaging</strong>, accurate address capture,
          and trusted UK couriers. For injectables, <strong>temperature-appropriate packaging</strong>{" "}
          is referenced where required so product integrity is maintained in transit — confirm cold
          chain wording on Pills2U’s live product pages.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          If approved before a daily cut-off, <strong>next-day delivery</strong> is often advertised;
          marketing also cites <strong>same-day review</strong> in many cases and dispatch within
          about <strong>24 hours</strong> of approval — treat as directional, not contractual.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery timeframes summarised</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Typical journey in their marketing: 1–2 days from order to receipt depending on review timing and courier.",
              "Factors: questionnaire completion time, approval timestamp, and delivery option selected.",
              "Fast start matters for structured plans — still plan fridge space before you click pay.",
            ]}
          />
        </HazardBox>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Cost structure</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Starting figures near <strong>£94.99</strong> are cited for some entry treatments; wider
            monthly bands around <strong>£150–£250</strong> depending on drug and dose. Bundles are
            described as including consultation, prescription approval, medication, and delivery —
            fewer hidden-fee surprises in the narrative, but always read line items at checkout.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Value versus alternatives</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Faster access than many NHS weight-loss medicine routes, pricing comparable to other UK
            online pharmacies with ~£200/month cited as a rough mid-market anchor in copy, inclusive
            service framing, and <strong>no mandatory long subscription</strong> in the positioning
            (order as needed after clinical clearance) — confirm whether your SKU auto-renews today.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Professional medical oversight</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Screening before treatment, ongoing suitability checks for repeats, and safe prescribing
          practices are emphasised — aligning with UK expectations for private GLP-1 supply rather
          than cosmetic retail.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Privacy and long-term management</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Secure consultations, discreet packaging, and confidential records are highlighted for a
          sensitive topic. Their copy also frames medicines as supporting <strong>sustainable</strong>{" "}
          weight loss, appetite control over time, and long-term health improvement under medical
          supervision rather than crash dieting.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Accessibility across the UK</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Because the service is online, marketing notes coverage for urban, rural, and underserved
          GP-access postcodes — courier reality still varies; tracked services help you plan receipt
          around work shifts or caring duties.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why Pills2U is summarised as a strong choice</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Their consolidated pitch: convenience (no GP appointments), speed (fast approvals and
          next-day options), safety (regulated pharmacy and prescribers), effectiveness (access to
          evidence-based GLP-1 brands), transparent pricing, and discretion — Health Wise maps those to
          checkable facts: GPhC entry, dose-matched price tables, and courier cold-chain behaviour.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Pills2U only for GLP-1 injections?",
              a: "Their weight-loss hub centres Mounjaro and Wegovy; other condition pages may exist on the wider site — stay within the clinically assessed lane you were approved for.",
            },
            {
              q: "What if I am declined after the questionnaire?",
              a: "A decline is a safety decision — follow up with your GP or an NHS specialist obesity service for alternative pathways.",
            },
            {
              q: "Does bundled pricing include everything?",
              a: "They advertise consultation, prescription, drug, and delivery as bundled in many SKUs — still confirm add-ons, dose changes, and repeat-review fees on the live checkout.",
            },
            {
              q: "How should shift workers receive cold-chain pens?",
              a: "Use a secure address where someone can refrigerate immediately; many couriers offer hold or redelivery options — plan before ordering.",
            },
            {
              q: "Can I trust speed claims during holiday peaks?",
              a: "Couriers and pharmacies backlog in peak seasons — build buffer stock only within legal prescribing limits; never share pens.",
            },
            {
              q: "How do I compare Pills2U with Pharmacy Advance or Pharmica?",
              a: "Use Health Wise tables for the same molecule, mg strength, and pens per month, then add each site’s delivery tier you would actually select.",
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
          In summary, the proposition is a <strong>modern regulated stack</strong>
          : prescriber-gated GLP-1 access, inclusive pricing story, rapid logistics claims, nationwide
          reach, confidentiality, and long-term management tone. Validate GPhC details, cold-chain
          handling, and per-dose pricing on Health Wise before you rely on any marketing timeline.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Pills2U
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
