"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.secondnature.io";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function SecondNaturePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Second Nature"
      fileRef="HW-SECOND-NATURE-2026"
      title="Second Nature (UK): Mounjaro, Wegovy, Coaching App and Programme Delivery"
      subtitle="Science-led weight programme pairing prescription GLP-1 therapy where suitable with behaviour change coaching, app lessons, community support, and pharmacy partner home delivery including starter kits. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · dietitian messaging · NHS heritage context"
      providerName="Second Nature"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Second Nature programme · dispensing via registered pharmacy partners (GPhC 9013068 cited on compare row — verify)",
        },
        {
          k: "Model",
          v: "Assessment · prescription via partner · app coaching · peer groups · scheduled deliveries",
        },
        {
          k: "Fulfilment",
          v: "Tracked ~48h style parcels · Mon–Sat delivery windows · programme-aligned dispatch",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Second Nature.webp"
      heroProviderLogoAlt="Second Nature"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-blue-900">About Second Nature:</strong> Navigating online weight loss treatments can be complex. Second Nature is one of several UK-registered services offering prescription medication alongside professional guidance. Before proceeding with any treatment, it is essential to review the specific fulfillment policies, consultation requirements, and support structures that Second Nature provides.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Many digital obesity offers stop at posting pens.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Second Nature
          </a>{" "}
          markets a fuller stack: clinically oriented prescription options such as{" "}
          <strong>Mounjaro</strong> and <strong>Wegovy</strong> where eligible, layered with coaching,
          structured education, and peer accountability so habits keep pace with pharmacology.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Public positioning references NHS collaboration since <strong>2017</strong> and support for{" "}
          <strong>over 250,000 patients</strong> through structured programmes. Health Wise explains how
          they describe logistics, pricing, and outcomes so you can weigh medication-plus-coaching
          bundles against pharmacy-only sellers elsewhere on site.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>What makes Second Nature different</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            The programme blends <strong>medication</strong> with <strong>behavioural science</strong>:
            sustainable lifestyle change, maintenance psychology, and evidence-based nutrition rather than
            injection-only shortcuts.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            Dual-track care promotes appetite awareness, better food patterns, durable routines, and
            emotional eating strategies while GLP-1 medicines blunt biological drives in the background.
            Marketing cites average directional outcomes around <strong>15–25% weight change within about
            12 months</strong> for supported users, plus references to roughly{" "}
            <strong>19.1% average loss</strong> in some programme reporting contexts. Individual results
            vary widely.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>How the programme works</p>
        <div className="mt-4 space-y-4">
          <div className="border border-slate-200/90 bg-[#fbf9f4] p-5">
            <p className="font-bold text-slate-900">Step 1: Assessment and eligibility</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Medical and lifestyle review covering BMI, history, medicines, and goals so prescribing stays
              appropriate.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-[#fbf9f4] p-5">
            <p className="font-bold text-slate-900">Step 2: Prescription and onboarding</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Medication flows through <strong>registered pharmacy partners</strong>. You unlock the Second
              Nature app, receive a personalised plan, and gain access to a{" "}
              <strong>registered dietitian or nutritionist</strong> for messaging about{" "}
              <strong>five days a week</strong> in marketing materials.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-[#fbf9f4] p-5">
            <p className="font-bold text-slate-900">Step 3: App coaching and learning</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Daily lessons (read or listen), meal planning aids, progress metrics, and habit exercises
              integrate into busy schedules.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-[#fbf9f4] p-5">
            <p className="font-bold text-slate-900">Step 4: Ongoing support</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Check-ins, coaching feedback, community groups, and tracking reinforce accountability across
              months, not weeks.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Delivery to your door</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Prescription medicines dispense via licensed partners, pack securely, and ship{" "}
          <strong>directly home</strong> so patients skip retail pharmacy visits while preserving privacy.
        </p>
        <Points
          items={[
            "Delivery day choices often span Monday through Saturday for flexibility.",
            "Starter cohorts see parcels dispatched the week before programme launch so pens arrive roughly Wednesday–Saturday ahead of the official start.",
            "Delivery commonly uses about 48-hour tracked services in programme communications.",
            "Kits may arrive in multiple parcels before day one (medication, sharps bin, Bluetooth scales, recipe book depending on plan).",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Email alerts include tracking links; support teams assist if logistics slip so doses are less
          likely to gap at initiation.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Managing addresses and compliance</p>
        <Points
          items={[
            "Prescriptions verified before dispatch with packaging suited to temperature needs when injectables ship.",
            "Supply chain messaging stresses consistency and timely dispatch to avoid treatment interruptions.",
            "Dedicated support can arrange replacements or guidance after courier failures.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing overview</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Second Nature promotes <strong>all-inclusive monthly bundles</strong> covering medication,
            delivery, coaching, app access, and support. Illustrative{" "}
            <strong>Wegovy programme costs</strong> land around <strong>£149–£249 per month</strong>{" "}
            depending on dose in public summaries.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Compared with medication-only pharmacies advertising roughly <strong>£120–£295 per month</strong>
            , Second Nature may appear higher until you factor unlimited coaching, behavioural curriculum,
            and bundled logistics.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Some members access <strong>Vitality partner discounts</strong>, introductory savings, or longer
            programme incentives subject to campaign rules.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Benefits highlighted in marketing</p>
          <Points
            items={[
              "Evidence-forward positioning with cohort outcome statistics.",
              "Personal coaching from qualified nutrition professionals.",
              "Fully remote accessible journey.",
              "Long-term habit focus versus crash dieting.",
              "Community accountability groups.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Is it worth the premium?</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Second Nature suits readers wanting <strong>medically supported GLP-1 therapy</strong>,{" "}
          <strong>structured coaching</strong>, and <strong>accountability tooling</strong> rather than the
          lowest price per milligram. If you only need bare dispensing, compare medication-only dossiers on
          Health Wise for stripped-down pricing.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Does Second Nature replace my GP?",
              a: "It is a private programme layer; keep your NHS GP informed for shared care and blood monitoring where relevant.",
            },
            {
              q: "Which pharmacy dispatches the pens?",
              a: "Marketing references partner pharmacies; verify the GPhC premises named on your dispensing label.",
            },
            {
              q: "Can I choose Saturday delivery?",
              a: "Public copy mentions Saturday-capable schedules in many cohorts; confirm at onboarding.",
            },
            {
              q: "Are scales mandatory?",
              a: "Some kits include Bluetooth scales for progress tracking; plan varies by promotional bundle.",
            },
            {
              q: "How much coaching do I get?",
              a: "Dietitian messaging five days a week is advertised plus app lessons and community access.",
            },
            {
              q: "Is Mounjaro cheaper elsewhere?",
              a: "Sticker prices may be lower without coaching; weigh total outcomes support versus pure drug cost.",
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
          Second Nature competes as a <strong>premium integrated programme</strong>: GLP-1 medicines where
          prescribed, proactive logistics with tracked drops, transparent bundled pricing on Wegovy-led
          examples, and behavioural infrastructure aimed at reducing regain after pens stop. Line it up on
          Health Wise against simpler pharmacies if coaching depth is not a priority for you.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Second Nature
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
