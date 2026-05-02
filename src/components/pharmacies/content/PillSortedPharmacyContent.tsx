"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.pillsorted.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function PillSortedPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="PillSorted"
      fileRef="HW-PILLSORTED-2026"
      title="PillSorted (UK): Personalised Weight Loss, Telehealth, NHS Integration and Royal Mail Delivery"
      subtitle="UK online pharmacy and telehealth pathway with tailored consultations, licensed GLP-1 and oral options where suitable, ongoing clinical support, Royal Mail delivery tiers, and subscription style repeats on many lines. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Orlistat · NHS or private routing"
      providerName="PillSorted"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "PillSorted (GPhC 9011258 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Online consultation · clinician review · NHS or private options where offered",
        },
        {
          k: "Fulfilment",
          v: "Royal Mail · tracked or non-tracked · 24h / 48h tiers · discreet direct-to-door",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/PillSorted.webp"
      heroProviderLogoAlt="PillSorted"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Sustainable weight management increasingly rests on clinically proven medicines plus follow
          up, not only willpower.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            PillSorted
          </a>{" "}
          describes itself as a UK online pharmacy and telehealth provider that bundles medical review,
          personalised plans, and home delivery into one digital journey.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises how public copy frames the service: pathways, Royal Mail logistics,
          pricing bands, NHS flexibility, and how that compares with traditional GP plus counter
          collections.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Personalised treatment</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            After a quick online consultation covering <strong>medical history</strong>,{" "}
            <strong>weight and BMI</strong>, and <strong>lifestyle goals</strong>, a qualified clinician
            recommends suitable options rather than a single generic SKU for everyone.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            <strong>Medicines cited in marketing</strong> include UK licensed{" "}
            <strong>GLP-1 injectables</strong> such as <strong>tirzepatide</strong> and{" "}
            <strong>semaglutide</strong>, plus <strong>oral orlistat</strong> for patients who prefer
            tablets. Intended effects include appetite reduction, craving control, and support for
            longer term loss alongside behaviour change. Prescriptions sit behind licensed UK clinicians
            and pharmacists in the stated governance model.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Fully online telehealth convenience</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          PillSorted contrasts its model with traditional routes that can mean booking GP slots,
          visiting pharmacies, and waiting weeks for scripts. Here the funnel is online end to end:
          consult, clinician decision, then medication to your address. Sign-up is described as fast:
          create an account in minutes, choose between <strong>NHS or private</strong> service lanes
          where the platform supports both, and begin a weight loss plan digitally.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Ongoing clinical support</p>
        <Points
          items={[
            "Questions through your account.",
            "Bookable follow-up consultations when offered.",
            "Treatment adjustments when clinically appropriate.",
            "Maintenance framing: dose tweaks, treatment switches, lifestyle advice beyond the first successful months.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          That continuity aims for fewer unmanaged side effects and better odds of keeping weight off
          than one-off dispensing alone.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery method and timing</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Public materials highlight <strong>Royal Mail</strong> with <strong>tracked or non-tracked</strong>{" "}
          choices and <strong>24-hour or 48-hour</strong> speed bands so many patients avoid pharmacy
          queues entirely.
        </p>
        <Points
          items={[
            "Order review often same day in marketing narratives.",
            "Dispatch commonly next working day after approval.",
            "Transit roughly 24–48 hours, so many mainland patients see parcels within about 1–3 working days after approval.",
            "Processing typically Monday to Friday; bank holidays can add delay.",
            "Extra clinical information requests can extend timelines intentionally for safety.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Safe discreet home delivery</p>
        <Points
          items={[
            "Direct-to-door shipping removes counter pickup and public queues.",
            "Discreet outer packaging supports privacy and confidentiality.",
            "Injectable lines describe protective packaging, patient instructions, and supplementary injection guides where supplied.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Free delivery and subscriptions</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          PillSorted promotes <strong>free delivery on many services</strong>, especially recurring
          prescriptions, with <strong>automatic repeats</strong>, <strong>monthly deliveries</strong>,
          and tracking so doses are less likely to lapse. Messaging stresses transparent headline
          pricing without surprise carriage charges where bundles include postage.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Transparent pricing (illustrative)</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Marketing cites <strong>injectable programmes from roughly £91–£159+ per month</strong>{" "}
            depending on dose and plan, and <strong>oral medicines from about £21.99–£45.99</strong>.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Bundles typically aim to cover <strong>clinical consultation, prescription review, medicine
            supply, home delivery, and ongoing support</strong>, which can beat paying GP, private
            script, and courier fees separately.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Evidence based outcomes (marketing context)</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Promotional education references directional ranges such as{" "}
            <strong>about 5–10% weight change within three months</strong> and{" "}
            <strong>about 10–20% within six months</strong> for suitable patients on medication plus
            habit support, exceeding typical diet-only trajectories for many people. Individual curves
            vary with adherence, dose, and side effects.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Regulation and NHS integration</p>
        <Points
          items={[
            "Prescriptions reviewed by registered pharmacists and licensed prescribers per public claims.",
            "Operates within UK healthcare regulation with assessment and monitoring emphasised.",
            "Combines NHS prescription handling with private treatment lanes so patients can consolidate medicines in one digital hub when the product supports it.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Platform experience</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Copy stresses simple instructions, account tools to <strong>track orders</strong>,{" "}
          <strong>manage prescriptions</strong>, and <strong>contact clinicians</strong>, aiming at a
          low-friction experience for busy users who still want supervised care.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why PillSorted stands out (summary)</p>
        <Points
          items={[
            "Convenience: online pathway plus home delivery.",
            "Safety: clinically reviewed regulated treatments.",
            "Support: ongoing care and maintenance planning.",
            "Value: transparent bundles and free delivery on many repeating plans.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Who it may suit</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing aligns with people struggling through lifestyle-only attempts, busy professionals,
          readers seeking medical obesity tools, and anyone who prioritises privacy and doorstep
          delivery over repeated clinic trips.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I use NHS and private routes together?",
              a: "When the platform supports both, marketing presents unified medication management; confirm eligibility rules for each lane on live pages.",
            },
            {
              q: "Is tracked Royal Mail mandatory?",
              a: "Public copy offers tracked and non-tracked tiers; choose based on budget and how anxious you are about parcel visibility.",
            },
            {
              q: "Do weekends delay dispatch?",
              a: "Weekday processing means Friday evening orders may roll to Monday; plan buffer around bank holidays.",
            },
            {
              q: "How should I compare monthly injectable cost?",
              a: "Stack PillSorted’s illustrative bands against Health Wise Mounjaro and Wegovy tables for your exact strength.",
            },
            {
              q: "Are results guaranteed?",
              a: "No ethical provider guarantees loss percentages; cited ranges are population style guides, not personal promises.",
            },
            {
              q: "Who verifies GPhC details?",
              a: "Always cross-check the dispensing pharmacy on the official GPhC register before first payment.",
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
          PillSorted markets a <strong>modern telehealth plus pharmacy stack</strong>: personalised
          prescribing where appropriate, Royal Mail logistics with privacy, subscription convenience,
          optional NHS connectivity, and transparent bundled pricing themes. If that blend matches your
          workflow, compare live checkout totals with other Health Wise dossiers at the same GLP-1 dose.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit PillSorted
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
