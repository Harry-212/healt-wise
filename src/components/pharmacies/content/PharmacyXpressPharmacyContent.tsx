"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://pharmacy-xpress.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export type PharmacyXpressRouteSlug = "pharmacy-xpress" | "pharmacy-express";

type Props = { routeSlug: PharmacyXpressRouteSlug };

export default function PharmacyXpressPharmacyContent({ routeSlug }: Props) {
  const discountCode = "";
  const hasDiscount = false;
  const displayName = routeSlug === "pharmacy-express" ? "Pharmacy Express" : "Pharmacy-Xpress";
  const visitLabel = routeSlug === "pharmacy-express" ? "Pharmacy Express" : "Pharmacy-Xpress";

  return (
    <PharmacyDossierPage
      slugLabel={displayName}
      fileRef="HW-PHARMACY-XPRESS-2026"
      title={`${displayName} (UK): Health First GLP‑1 Platform, Human Review, Express Delivery`}
      subtitle="UK online pharmacy framed around health first support: clinician led decisions after a detailed assessment, habit and aftercare messaging, no lock in contracts, fast cut off dispatch, free delivery thresholds, cold chain for injectables, Xenical and Alli oral options, transparent starting prices and MHRA or NICE aligned eligibility themes. Primary marketing domain pharmacy-xpress.co.uk. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Orlistat · Alli"
      providerName={displayName}
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v:
            routeSlug === "pharmacy-express"
              ? "Compare table id pharmacy-express (GPhC 9012468 on Health Wise row for pharmacy-express.co.uk). This dossier follows Pharmacy-Xpress brief at pharmacy-xpress.co.uk; verify both domains if you use compare links."
              : "Pharmacy-Xpress at pharmacy-xpress.co.uk (confirm GPhC premises on live site and register).",
        },
        {
          k: "Model",
          v: "Sign up · weight management questionnaire · human prescriber review · dispense · tracked delivery",
        },
        {
          k: "Fulfilment",
          v: "Orders by 3pm for rapid dispatch · often 24 to 48h · free delivery over £40 on many lines · plain outers · cold chain for pens",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/pharmaexpress.webp"
      heroProviderLogoAlt={displayName}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            {displayName}
          </a>{" "}
          markets a <strong>health first</strong> UK online pharmacy where the “support mechanism” for long term habits
          sits beside dispensing. For <strong>Mounjaro</strong> or <strong>Wegovy</strong> style GLP‑1 access they
          emphasise a <strong>clinically governed</strong> platform, safety messaging and professional guidance on
          obesity related risk.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise captures their assessment protocol, pricing transparency, logistics and safeguards for readers
          comparing UK routes.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Trusted, regulated positioning</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "100% UK based licensed pharmacy narrative with legitimate supply chain sourcing.",
              "Clinician led final treatment plans after detailed medical assessment.",
              "Professional oversight aligned with latest MHRA and NICE guidance themes, including metabolic targets and food noise language.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>How the service works</p>
        <Points
          items={[
            "Step 1 · Complete online consultation covering BMI and risk factors such as type 2 diabetes or heart disease.",
            "Step 2 · Pharmacist or prescriber review: a human professional evaluates answers before approval, not automation only.",
            "Step 3 · Tracked home delivery after dispensing with monitoring until the parcel arrives.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Key benefits (marketing)</p>
        <Points
          items={[
            "High customer satisfaction cited as 4.9 out of 5.",
            "No lock in contracts; month to month flexibility.",
            "Comprehensive aftercare: follow up emails with tips, nutrition guidance and progress tracking.",
            "Free professional support and advice for side effects such as nausea or digestive changes.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Orders by 3:00 PM</strong> are described as prioritised for the fastest dispatch, often landing in
          about <strong>24 to 48 hours</strong>. Many weight loss treatments qualify for <strong>free delivery</strong>{" "}
          on orders <strong>over £40</strong>. Medicines ship in <strong>secure plain packaging</strong>. Injectable pens
          such as <strong>Mounjaro</strong> or <strong>Wegovy</strong> use <strong>specialist cold chain packaging</strong>{" "}
          in transit.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing themes</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Mounjaro</strong> from <strong>£149.99</strong> in marketing, described as about{" "}
            <strong>£25 per dose</strong> at the starter tier. <strong>Wegovy</strong> from <strong>£149.99</strong>.
            Oral routes include <strong>Xenical (Orlistat)</strong> and <strong>Alli</strong>.{" "}
            <strong>Value transparency</strong>: price typically bundles online consultation, private prescription and
            medication.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety and legitimacy</p>
          <Points
            items={[
              "Strict BMI eligibility: commonly BMI 30+ or 27+ with weight related conditions.",
              "Clear contraindication warnings for MTC/MEN 2 thyroid cancer history and pancreatitis.",
              "UK licensed pens only, framed against black market risk.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why patients choose {displayName} (summary)</p>
        <Points
          items={[
            "Very high stated rating (4.9/5) for customer experience.",
            "Aftercare and habit building advice beyond the first box.",
            "3pm cut off narrative for rapid delivery.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Their conclusion blends <strong>express logistics</strong> with <strong>clinical depth</strong>: medication
          plus behavioural support for sustainable weight management.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Which GLP‑1 medicines are priced from £149.99?",
              a: "Marketing lists both Mounjaro and Wegovy starting from £149.99, with Mounjaro starter tier also described per dose.",
            },
            {
              q: "Is delivery free?",
              a: "Many lines advertise free delivery on orders over £40; confirm basket rules.",
            },
            {
              q: "Are subscriptions mandatory?",
              a: "No lock in contracts; month to month management is emphasised.",
            },
            {
              q: "What oral options appear?",
              a: "Xenical (Orlistat) and Alli are named as non injectable alternatives where suitable.",
            },
            {
              q: "How fast is dispatch?",
              a: "Orders before 3pm are pitched for fastest processing, often 24 to 48 hour arrival.",
            },
            {
              q: "Who approves treatment?",
              a: "A human expert prescriber reviews the questionnaire before approval.",
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
          {displayName} targets readers who want fast logistics, strong review scores and explicit clinical gates. Use
          Health Wise tables to sanity check dose ladders; if aftercare emails and habit tips matter to you, their model
          may feel more rounded than bare dispensers.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit {visitLabel}
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
