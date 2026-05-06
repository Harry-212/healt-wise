"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.numan.com/weight-loss";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function NumanPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Numan"
      fileRef="HW-NUMAN-2026"
      title="Numan Weight Loss (UK): Mounjaro, Wegovy, Coaching and Subscription Care"
      subtitle="Digital healthcare programme combining prescription GLP-1 therapy where appropriate, clinician oversight, behavioural coaching, subscription logistics, and discreet home delivery. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · coaching · in-app support"
      providerName="Numan"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Numan (GPhC 9011408 for pharmacy supply — verify linked premises on register)",
        },
        {
          k: "Treatments",
          v: "Mounjaro · Wegovy (subject to eligibility) · lifestyle coaching",
        },
        {
          k: "Fulfilment",
          v: "Courier delivery (e.g. Royal Mail) · tracking · ~48h first order narrative · ~28-day ongoing cycles",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Numan.webp"
      heroProviderLogoAlt="Numan"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-indigo-900">Service Profile:</strong> Numan operates within the UK’s regulated online pharmacy sector, providing access to clinically approved weight loss medications. Because no two weight loss journeys are exactly alike, understanding the specific clinical protocols, shipping methods, and pricing tiers of Numan is a crucial step in finding the right healthcare partner.</p></div>
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Numan
          </a>{" "}
          markets a personalised, clinically guided weight programme that goes beyond generic diet
          sheets or over the counter supplements. Prescription options such as{" "}
          <strong>Mounjaro (tirzepatide)</strong> and <strong>Wegovy (semaglutide)</strong> may
          appear where suitable, layered with coaching and digital tools so patients are not managing
          injectables in isolation.
        </p>
        <p className="text-slate-800 leading-relaxed">
          From sign-up through delivery, the journey is described as fully online for convenience.
          Health Wise distils how Numan frames eligibility, science, logistics, and subscription
          economics so you can benchmark against other UK dossiers.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How the programme works</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="font-semibold text-slate-900">Step 1: Online consultation</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            A <strong>free online assessment</strong> collects medical history, weight and BMI,
            lifestyle habits, and existing conditions. Qualified clinicians review eligibility for
            prescription obesity medicines under UK standards.
          </p>
          <p className="mt-4 font-semibold text-slate-900">Step 2: Personalised treatment plan</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            Approved patients receive a customised plan that may include prescription medication (for
            example Mounjaro or Wegovy), nutritional guidance, behavioural coaching, and ongoing
            medical monitoring rather than a one size kit.
          </p>
          <p className="mt-4 font-semibold text-slate-900">Step 3: Ongoing clinical support</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            Continuous care includes access to clinicians, health coaches, in-app messaging, and
            progress tracking so accountability and side effect questions have a channel.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Science positioning in public copy</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Mounjaro</strong> is described as a dual action medicine targeting{" "}
          <strong>GLP-1 and GIP</strong> receptors for enhanced weight and metabolic effects in trial
          populations. <strong>Wegovy</strong> mimics GLP-1 to increase fullness and reduce cravings.
          Marketing cites trial style ranges such as roughly <strong>15–21% body weight change over
          time</strong> for semaglutide class therapy when combined with lifestyle change; individual
          curves vary with adherence, dose, and tolerability.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why patients consider Numan</p>
        <Points
          items={[
            "Fully digital convenience: no GP surgery visit, no high street pharmacy queue, no paper prescription chain in the marketing story.",
            "Clinically approved treatments prescribed by licensed clinicians based on eligibility.",
            "Holistic approach: behaviour change, nutrition, and coaching alongside medicine.",
            "Discreet service: plain outer packaging, confidential consultations, secure platform.",
            "Subscription flexibility: pause, cancel, or adjust delivery schedules in promotional copy subject to medical review rules.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery explained</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Weight loss medicines ship to your home through <strong>secure couriers such as Royal
          Mail</strong>, with tracking notifications. Packaging is designed for privacy: branding may
          appear inside the box rather than on the outer shell in marketing descriptions.
        </p>
        <Points
          items={[
            "First order: often described as delivered within about 48 hours after prescription approval.",
            "Ongoing orders: typically on a 28-day rhythm aligned to common pen supplies.",
            "Delivery type: next-day service is cited for weight loss medication in promotional summaries.",
            "Someone may need to be available for injectable lines; tracking helps coordinate receipt.",
            "Delivery dates manageable through the user account in many funnels.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          <strong>Delivery management:</strong> automated subscription dispatch roughly every 28 days,
          dispatch emails, live tracking numbers, options to reschedule, pause, or cancel shipments
          within policy, secure inner packaging for medicine integrity, and careful handling for
          injectables to maintain effectiveness.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Monthly subscription pricing (illustrative)</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Example bands: basic plans from around <strong>£139 per month</strong>,{" "}
            <strong>Wegovy roughly £149–£299 per month</strong>,{" "}
            <strong>Mounjaro roughly £199–£339 per month</strong> depending on dose.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Monthly fees typically bundle <strong>prescription medication, clinical consultations,
            ongoing support, health coaching, and home delivery</strong>, which can simplify budgeting
            versus itemised private clinic bills.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Annualised private spend may land around <strong>£2,500–£3,500</strong> depending on
            molecule and dose in public cost discussions; validate with your own basket.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Offers and subscription benefits</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Numan frequently promotes <strong>introductory discounts</strong>,{" "}
            <strong>referral rewards</strong> (marketing cites up to about <strong>£100 off</strong> in
            some campaigns), and <strong>promotional codes</strong>. Subscription benefits described
            include consistent deliveries, fewer manual reorders, and continuous clinician access for
            safety and motivation.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Expected experience and safety</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing suggests gradual sustainable loss, better energy for some users, improved eating
          habits, and confidence gains, with noticeable change for many within roughly one to six
          months depending on baseline and adherence. Safety relies on eligibility screening,
          clinician supervision, ongoing monitoring, and channels to report side effects.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Who Numan suits</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Typical positioning includes adults with BMI in overweight or obesity ranges who struggled
          with diet and exercise alone, want medically supported loss, and prefer a private online
          healthcare experience. Final eligibility is always clinical.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Numan versus diet-only change (headline)</p>
        <Points
          items={[
            "Medical support: Yes on Numan versus no on informal dieting alone.",
            "Prescription medication: Available when eligible versus not available from lifestyle blogs.",
            "Convenience: Fully online pathway versus limited digital structure for self-guided diets.",
            "Personalisation: High through clinical plans versus low for generic meal templates.",
            "Delivery: Home courier versus not applicable for non-supply routes.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Does someone need to be home for delivery?",
              a: "Injectable lines benefit from prompt receipt and refrigeration; tracking and signature options help coordinate that.",
            },
            {
              q: "Is Numan NHS funded?",
              a: "This is a private digital route; NHS shared care depends on your GP practice.",
            },
            {
              q: "Can I pause my subscription?",
              a: "Marketing describes pause and cancel options; medical review rules may still apply before supply restarts.",
            },
            {
              q: "How fast is the first parcel?",
              a: "Public copy often cites about 48 hours after approval for first orders; stock and postcode affect reality.",
            },
            {
              q: "Do referral credits stack with intro offers?",
              a: "Campaign rules change; read the promotion terms at checkout.",
            },
            {
              q: "Mounjaro or Wegovy first?",
              a: "Your clinician selects the molecule based on history and eligibility, not marketing order on a webpage.",
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
          Numan competes as a <strong>full stack digital obesity clinic</strong>: GLP-1 class
          medicines where appropriate, coaching, subscription logistics, and discreet delivery. Cost
          sits above DIY dieting but bundles medical oversight and convenience; weigh monthly totals on
          Health Wise against simpler pharmacies if you only need minimal support around the pen.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Numan
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
