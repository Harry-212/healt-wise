"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.myjuniper.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function JuniperPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Juniper"
      fileRef="HW-JUNIPER-2026"
      title="Juniper (UK): Mounjaro, Wegovy, Monthly Programme, App and Remote Clinician Care"
      subtitle="How Juniper combines weekly injectable GLP-1 therapy with remote consultations, habit coaching, and digital tracking. Pricing, delivery, flexibility, and who the model suits. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · UK programme"
      providerName="Juniper"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Juniper (GPhC 9011842 — verify partner pharmacy and programme terms)",
        },
        { k: "Treatments", v: "Mounjaro · Wegovy (where clinically appropriate)" },
        {
          k: "Fulfilment",
          v: "UK home delivery · associate courier · VAT and shipping often in shown prices",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Juniper.webp"
      heroProviderLogoAlt="Juniper"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Losing a large amount of weight and keeping it off is hard. Many people find that classic
          diet plans and exercise work for a while, then stall, which is frustrating when life is
          already busy. Juniper markets itself as an online weight loss clinic rather than a simple
          product seller: medication sits inside a wider programme of clinician contact, app based
          tracking, coaching style support, and structured follow up.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise explains that positioning in plain language so you can decide whether a
          bundled monthly programme fits you better than a bare pharmacy listing. Always read
          Juniper&apos;s own terms, clinical criteria, and pricing on{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            myjuniper.co.uk
          </a>{" "}
          before you enrol.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>What the programme actually includes</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Public materials describe weekly injectable medicines that act on appetite and
            metabolism, commonly <strong>Mounjaro (tirzepatide)</strong> and{" "}
            <strong>Wegovy (semaglutide)</strong>, when a clinician judges them appropriate.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            <strong>Why medicated programmes get attention.</strong> Marketing explains that these
            agents can reduce hunger signals, slow stomach emptying so fullness lasts longer, and
            support metabolic control alongside diet change. Trial figures often cited for Wegovy in
            obesity studies include up to roughly <strong>20% body weight reduction over about 72
            weeks</strong> in trial populations; Mounjaro trial summaries are described in a similar
            effectiveness band when used under supervision with lifestyle support. Real world results
            still depend on adherence, side effect tolerance, and behaviour support, not the pen
            alone.
          </p>
          <Points
            items={[
              "Remote clinician assessment and treatment planning, not self prescribing.",
              "Monthly style programme billing that bundles medication, support, and tools for many users.",
              "Juniper app for progress, education, messaging, and habit prompts.",
              "Optional specialist coaching tiers where offered.",
              "UK delivery arranged after prescribing, via an associate courier network.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Step by step: how you start and continue</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
            <p className="font-bold text-slate-900">1. Eligibility quiz</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              A short online screen checks basics such as BMI and health flags so clearly unsuitable
              requests stop early and you do not waste time on the wrong pathway.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
            <p className="font-bold text-slate-900">2. Remote consultation</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              You book a video or phone appointment with a clinician who reviews history, discusses
              risks and benefits, and agrees a plan if treatment is suitable. This is regulated
              clinical work, not a cosmetic checkout.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
            <p className="font-bold text-slate-900">3. Monthly programme</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              If you continue, you sit inside a monthly structure that commonly covers your
              prescribed weekly medication, clinical check ins, app access, and delivery. Tiers can
              change what is bundled, so read the quote you are given.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
            <p className="font-bold text-slate-900">4. App and habit coaching</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              The app is used for tracking, recipes, workouts where offered, care team messaging, and
              motivation. Optional coaching can help with plateaus, motivation, and long term habits.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Service delivery: fully remote care and parcels</p>
        <div className="mt-3 space-y-3 text-slate-800 leading-relaxed">
          <p>
            Consultations, prescribing, and follow up are designed to happen online. That suits shift
            workers, parents, and rural patients, but it still needs honest answers in forms and a
            stable enough connection for video where required.
          </p>
          <p>
            After prescribing, Juniper arranges delivery to your UK shipping address through an
            associate courier. Public copy often states that <strong>VAT and shipping are included</strong>{" "}
            in the prices shown, but estimates are still estimates. Incomplete addresses or carrier
            disruption can delay boxes. If a parcel arrives damaged or late, their support team is the
            correct first contact.
          </p>
          <p>
            You remain responsible for someone being available to accept delivery where needed and
            for storing pens according to the PIL once they arrive. Many users report discreet outer
            packaging and straightforward receipt once the rhythm of the programme is established.
          </p>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Costs and flexibility</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Juniper openly publishes programme pricing guidance, commonly cited from around{" "}
            <strong>£164 per month</strong>, with the exact figure depending on which medicine and
            dose your clinician selects.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            That monthly fee typically covers the prescribed weekly injectable, ongoing clinical
            support and check ins, app tools, and delivery in the marketing bundle. Optional health
            coaching or higher support tiers may cost extra depending on what you pick.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Some patients use private insurance reimbursement where the policy allows. Juniper may
            provide invoices for eligible claims, but you should confirm with both your insurer and
            Juniper before assuming repayment. The programme is often described as monthly and
            flexible, without long term lock in contracts, though you must still read current terms
            for pause and cancel rules.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>What patients often say in reviews</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Review threads commonly praise responsive support, clear onboarding around first delivery,
            and personal help during questions about side effects or logistics. Tracking once
            medication is released is often described as straightforward.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            As with any medical programme, you will also see slower progress stories, side effect
            struggles, or frustration with app workflows. Read a date sorted sample rather than a
            handful of five star quotes.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Benefits that matter if you want a programme, not only a pen</p>
        <Points
          items={[
            "Scientifically scrutinised medicines when prescribed, rather than fad supplements.",
            "Personal clinician oversight from assessment through titration decisions.",
            "Integrated app workflows for meals, movement, habits, and goals.",
            "Doorstep delivery of medication with support if logistics go wrong.",
            "Transparent headline monthly pricing so you can budget in advance.",
            "Flexible commitment framing without multi year lock ins in public copy.",
            "Faster private access narrative versus long NHS waiting lists for people who do not meet NHS criteria.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Is Juniper the right shape for you?</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          If you only want the cheapest single pen with no support layer, a minimalist pharmacy
          listing may fit better. If you want structured remote care, coaching, and app based
          accountability around GLP-1 therapy, Juniper&apos;s positioning targets that segment at
          the trade off of recurring programme fees versus itemised pen only pricing.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Do I need a video call?",
              a: "Materials describe remote consultations by video or phone as part of suitability assessment. Exact requirements can change, so follow the booking flow you are given.",
            },
            {
              q: "Can I switch between Mounjaro and Wegovy later?",
              a: "Any switch is a clinical decision based on response, side effects, and supply. It is not a self serve toggle.",
            },
            {
              q: "Does Juniper replace my GP?",
              a: "No. Private programmes complement NHS care but do not automatically replace your GP record. Share updates where appropriate, especially if you take other medicines.",
            },
            {
              q: "Is the app mandatory?",
              a: "Much of the support layer assumes app use. Check device compatibility and whether you are happy with digital first follow up before enrolling.",
            },
            {
              q: "How should I compare monthly cost with IQ Doctor style pharmacies?",
              a: "Separate the programme fee into medication equivalent, delivery, and support hours, then compare dose matched pen pricing on Health Wise tables.",
            },
            {
              q: "What if I disagree with the clinician?",
              a: "Prescribing is a two way conversation. If you are declined or offered a different plan than you expected, ask for the clinical rationale and consider NHS alternatives if needed.",
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
          Choosing a weight loss route is personal. If you want evidence based injectable therapy
          wrapped in remote consultations, coaching, and digital tracking, Juniper&apos;s UK
          programme is a serious option to weigh alongside simpler pharmacy models. It stands out
          because medication is paired with ongoing support, transparent monthly pricing in public
          copy, and flexible commitment language rather than a single anonymous checkout.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Compare totals honestly, read current terms, and only proceed when you are comfortable with
          the clinician&apos;s plan for you, not only with a brand headline.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Juniper
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
