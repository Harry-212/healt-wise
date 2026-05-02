"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://slimmingdirect.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function SlimmingDirectPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Slimming Direct"
      fileRef="HW-SLIMMINGDIRECT-2026"
      title="Slimming Direct (UK): Clinician Led Online Weight Loss, GLP-1 and Delivery"
      subtitle="UK service framed as clinically supervised online weight loss via a pharmacy pathway, personalised plans, prescription GLP-1 and capsule options, discreet logistics and stated turnaround times. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Orlistat · GLP-1 injections where prescribed"
      providerName="Slimming Direct"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Slimming Direct (GPhC 1031513 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Online questionnaire · UK clinician review · prescription if suitable · pharmacy fulfilment · home delivery",
        },
        {
          k: "Fulfilment",
          v: "Discreet packs · cold chain where required · direct to address · tracking and support contact",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Slimming Direct.webp"
      heroProviderLogoAlt="Slimming Direct"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Sustainable loss often depends on the provider as much as the molecule.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Slimming Direct
          </a>{" "}
          describes a clinically led UK online programme combining prescription medicines, professional
          review and home delivery, including demand heavy GLP-1 injections where appropriate.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise condenses how their public pages and reviews characterise the pathway, logistics,
          pricing bands and safeguards so you can line them up beside our comparison tables.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Clinically led pharmacy backed service</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Marketing presents Slimming Direct as more than a supplement shop: a{" "}
            <strong>clinically supervised programme</strong> delivered with{" "}
            <strong>UK pharmacy involvement</strong>. Prescription only medicines sit behind medical
            assessment. Injectable and capsule options cited include <strong>GLP-1 therapies</strong> and{" "}
            <strong>orlistat</strong>, always subject to prescriber approval.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            Company facing copy references pharmacists, prescribers and wider clinicians tailoring care. That
            narrative stresses eligibility screening, safer prescribing habits, monitoring and
            evidence based treatment choices versus unregulated sellers.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Personalised plans</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Rather than one SKU for everyone, summaries describe plans shaped by{" "}
          <strong>medical history</strong>, <strong>weight and BMI</strong>, <strong>lifestyle</strong>{" "}
          and <strong>goals</strong>. An online assessment reportedly takes about five minutes; the clinical
          team then decides suitability. Approved journeys may bundle{" "}
          <strong>prescription medication</strong>, <strong>lifestyle coaching themes</strong> and{" "}
          <strong>ongoing clinical contact</strong> to support habit change beyond the first prescription.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Digital ordering sequence</p>
        <Points
          items={[
            "Online assessment covering health and goals.",
            "UK clinician review for safety and appropriateness.",
            "Prescription generation when approved.",
            "Dispensing and shipment to your home.",
            "Follow up consultations and support during treatment.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery speed (as described)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Reviews and service blurbs often cite <strong>quick processing after approval</strong>,{" "}
          <strong>about one to three working days</strong> for many parcels, and some patients reporting{" "}
          <strong>around two days</strong> from consultation to receipt. Treat timelines as illustrative;
          cold chain or clinician queries can extend them.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Secure discreet fulfilment</p>
        <Points
          items={[
            "Discreet outer packaging for confidentiality.",
            "Temperature controlled shipping with cool packs for injectable GLP-1 lines where stated.",
            "Direct shipment to the checkout address without a retail pharmacy visit.",
            "Handling aligned with UK pharmaceutical expectations for prescription medicines.",
            "Customer support contact if tracking or delivery issues arise.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Ongoing journey support</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Beyond dispatch, marketing highlights <strong>follow ups</strong>, professional access, dosing and
          side effect guidance, motivation and progress tracking, plus wellness style check ins framed as
          continuous care.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative pricing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Public summaries quote <strong>GLP-1 injections such as Mounjaro or Wegovy roughly £120 to
            £295 per month</strong> depending on strength, and <strong>orlistat from about £57.99</strong>.
            Slimming Direct positions itself as broadly in line with or sometimes under rival UK clinics on
            headline medication prices.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Extra fees and refund norms</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            If you cancel after clinical review but before prescribing, materials mention a{" "}
            <strong>clinical fee around £25 to £35</strong>. Monthly medication budgets apply because therapy
            is ongoing. Once medicine is dispensed and dispatched,{" "}
            <strong>refunds are generally unavailable</strong> except narrow regulatory exceptions, matching
            wider UK pharmacy practice rather than a discretionary policy.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Reputation snapshot</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Aggregate review commentary frequently praises fast service, straightforward ordering, helpful
          support, rapid delivery and smooth consultations. Third party summaries reference a{" "}
          <strong>Trustpilot score near 4.5 out of 5</strong>; treat scores as a snapshot that can move.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Safety and legitimacy themes</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Independent commentary often lists pharmacy compliance, secure payments and verified clinical
          oversight as reassurance markers versus anonymous marketplaces.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why Slimming Direct highlights differentiation</p>
        <Points
          items={[
            "Medical expertise across prescribing and monitoring.",
            "Personalisation instead of generic bundles.",
            "Fully remote pathway from assessment to delivery.",
            "Fast logistics narratives.",
            "Continuous professional support.",
            "Competitive headline pricing on several SKUs.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Slimming Direct clinically supervised?",
              a: "Their narrative describes UK clinicians and pharmacy professionals reviewing assessments before prescription medicines ship.",
            },
            {
              q: "How quickly does delivery arrive?",
              a: "Many summaries cite one to three working days after approval, with some faster anecdotes; confirm at checkout.",
            },
            {
              q: "Does Slimming Direct ship cold chain injectables?",
              a: "Customer reports describe insulated parcels with cool packs for GLP-1 lines; verify current packing notes on site.",
            },
            {
              q: "What costs should I budget?",
              a: "Illustrative bands mention roughly £120–£295 monthly for injectables by dose and about £57.99 starter pricing for orlistat, plus possible clinical fees if you cancel late in review.",
            },
            {
              q: "Can I get a refund after dispatch?",
              a: "Generally no for dispensed prescription medicines except narrow exceptions, consistent with UK pharmacy rules.",
            },
            {
              q: "How does Slimming Direct compare on Trustpilot?",
              a: "Third party summaries cite around 4.5/5; read recent reviews yourself before deciding.",
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
          Slimming Direct packages clinician gatekeeping, personalised planning, competitive illustrative
          pricing and quick discreet logistics into one digital obesity care story. Long term injectable
          budgets add up, but the brand argues safety and support justify the premium versus informal sellers.
          Validate every quote on live pages and against Health Wise tables for your dose.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Slimming Direct
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
