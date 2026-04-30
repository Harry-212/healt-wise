"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.curely.co.uk/online-doctor/weight-loss";

export default function CurelyPharmacyContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Curely"
      fileRef="HW-CURELY-2026"
      title="Curely Weight Loss Treatment Review: Online Access to Mounjaro, Wegovy and Prescription Support in the UK"
      subtitle="Official dossier: how Curely works, treatments that may be available, delivery options, pricing context and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Saxenda · Orlistat · Xenical · Alli"
      providerName="Curely"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Curely" },
        { k: "Treatments", v: "Mounjaro · Wegovy · Saxenda · Orlistat · Xenical · Alli" },
        { k: "Fulfilment", v: "Tracked delivery" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Weight loss is often framed as a discipline problem. Eat less. Move more. Stay
          consistent. That can be true in part. But it also misses a lot.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Appetite signalling, stress, medication side effects, metabolic differences — those
          factors may make weight loss harder than generic advice implies. That may be one reason
          prescription treatments such as Mounjaro and Wegovy have drawn increasing attention in
          the UK.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Curely weight loss treatment is part of that conversation. Through its online pharmacy
          model, Curely offers access to prescription weight loss medications, pharmacist-led
          consultations, tracked home delivery and ongoing support.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Curely works, what treatments may be available, how delivery
          operates, what pricing may look like, and why some patients choose it.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is Curely weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <p className="text-slate-800 leading-relaxed">
            Curely provides online access to prescription and non-prescription weight loss
            treatments, subject to clinical review where required. Patients typically:
          </p>
          <Points
            items={[
              "Complete an online consultation",
              "Receive pharmacist or prescriber review",
              "Get approved if eligible",
              "Have medication delivered to home or workplace",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Simple enough — but access is arguably the bigger point. Online treatment may reduce
            friction compared with traditional routes.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why choose Curely?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Regulated access to authentic medication
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Medication supplied through Curely appears sourced through regulated UK channels.
              That may help support:
            </p>
            <Points
              items={[
                "Genuine medication supply",
                "Appropriate dispensing controls",
                "Reduced counterfeit risk",
              ]}
            />
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Pharmacist-led online consultation
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Before treatment approval, Curely requires a health assessment. Typically this
              includes:
            </p>
            <Points items={["BMI", "Medical history", "Current medications", "Lifestyle details"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              A pharmacist or prescriber reviews the information and may recommend suitable
              options.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Wide range of weight loss treatments
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Curely appears to offer several options, including prescription injections and oral
              treatments.
            </p>
            <p className="mt-4 font-bold text-slate-900">Prescription injections</p>
            <Points items={["Mounjaro", "Wegovy", "Saxenda"]} />
            <p className="mt-4 font-bold text-slate-900">Weight loss pills</p>
            <Points items={["Orlistat", "Xenical", "Alli"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Some patients may prefer pills over injections — that flexibility can matter.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              4. Discreet packaging and privacy
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Curely states deliveries use plain packaging with no visible indication of contents,
              which may be reassuring for people who prefer discretion.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              5. Ongoing pharmacist support
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Curely appears to offer support via phone, email and pharmacist guidance — more than
              a checkout process.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How Curely works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Online consultation",
              d: "Medical questionnaire covering weight, BMI, health history, current medications, and diet/exercise info.",
            },
            {
              t: "Step 2: Review",
              d: "A pharmacist or clinician reviews eligibility and which medication may suit you. Not everyone qualifies.",
            },
            {
              t: "Step 3: Dispensing and dispatch",
              d: "If approved: prescription issued, medication dispensed, then packaged and dispatched.",
            },
          ].map((s) => (
            <div key={s.t} className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
              <p className="font-bold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Curely delivery and shipping options
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Tracked delivery options</p>
            <Points
              items={[
                "Tracked 48: ~2–3 business days (often ~£2.99, sometimes free over £20)",
                "Tracked 24: ~1–2 business days (often ~£4.39)",
                "Special Delivery Before 1pm: next working day (often ~£5.95, cut-off dependent)",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Delivery features may include tracking numbers and redelivery attempts, with
              direct-to-home or workplace shipping.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Temperature control (where needed)</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Injectables may require careful handling. Curely appears to use insulated packaging
              and cold-chain methods where required to maintain product effectiveness during
              transit.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            How much does Curely weight loss treatment cost?
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing varies by medication and dose. Some higher-dose Mounjaro may be priced in the
            low <strong>£200s+</strong> per pen, with examples reported around <strong>£230+</strong>{" "}
            for some strengths. Pill options (e.g. Orlistat / Alli) are generally lower cost.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Delivery is often free over £20, with faster services around <strong>£4–£6</strong>.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Practical considerations
          </p>
          <Points
            items={[
              "Eligibility: often BMI > 30, or BMI > 27 with related conditions (assessment dependent)",
              "Medication supports progress but doesn’t replace behaviour change",
              "Side effects and dose adjustments can occur",
              "Plan around delivery timing: approval happens before shipping starts",
            ]}
          />
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Frequently asked questions
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {[
            {
              q: "Can I get Wegovy from Curely?",
              a: "Yes, Wegovy may be available through Curely after completing a consultation and approval process.",
            },
            {
              q: "Does Curely offer Mounjaro for weight loss?",
              a: "Yes, Mounjaro appears among available treatment options, subject to suitability checks.",
            },
            {
              q: "How much does Curely weight loss treatment cost?",
              a: "Costs may range from lower-priced oral treatments up to £230+ per pen for some higher-dose injections, depending on medication and strength.",
            },
            {
              q: "Does Curely offer tracked delivery?",
              a: "Yes. Curely appears to offer Tracked 48, Tracked 24 and next-day special delivery options, with free tracked delivery over £20 in some cases.",
            },
            {
              q: "Is Curely a regulated pharmacy?",
              a: "Curely operates as a UK-regulated online pharmacy with pharmacist-led review and licensed dispensing.",
            },
            {
              q: "Are non-injection alternatives available?",
              a: "Yes. Options may include Orlistat, Xenical and Alli.",
            },
          ].map((item) => (
            <div key={item.q} className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
              <p className="font-bold text-slate-900">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Conclusion</h2>
        <p className="mt-3 text-slate-800 leading-relaxed">
          If you’re looking for a private route to prescription weight loss treatment, Curely
          appears to offer a practical option. Access to medications such as Mounjaro and Wegovy,
          combined with pharmacist-led assessment, tracked delivery and discreet packaging, gives
          it more depth than a basic online storefront.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          It may not suit everyone, but for those prioritising convenience, privacy and medically
          supervised access, it may be worth considering.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Curely
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}

