"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.fellahealth.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function FellaHealthPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Fella Health"
      fileRef="HW-FELLA-2026"
      title="Fella Health (UK): Men’s Metabolic Programme, GLP‑1 and 1‑to‑1 Coaching"
      subtitle="Digital clinic focused on male weight management: GPhC pharmacy route, board certified metabolic clinicians, GLP‑1 tools inside a behavioural programme, video coaching, optional labs, cold chain delivery and subscription style pricing with an outcome guarantee (terms apply). Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Coaching-led metabolic care"
      providerName="Fella Health"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v:
            "Fella Health (marketing cites GPhC 9012625; Health Wise compare row 9012918 — verify active pharmacy on register)",
        },
        {
          k: "Model",
          v: "Eligibility quiz · virtual consult · labs if needed · prescription · dedicated coach · biweekly video sessions",
        },
        {
          k: "Fulfilment",
          v: "Insulated 2–8°C packs · plain outer · premium tracked courier · automated titration refills",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/fella.webp"
      heroProviderLogoAlt="Fella Health"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Fella Health
          </a>{" "}
          positions itself as a men’s specialised digital clinic rather than a generic online pharmacy. The
          “metabolic programme” pairs GLP‑1 medicines such as <strong>Mounjaro</strong> and{" "}
          <strong>Wegovy</strong> with structured <strong>one to one health coaching</strong> for patients who
          have cycled through diets or yo yo loss patterns.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises how their public copy describes clinical oversight, onboarding, logistics and
          subscription economics so you can compare with pharmacy only routes on our site.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulated clinical programme</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Supply framed through UK pharmacies registered with the General Pharmaceutical Council (public materials cite registration 9012625).",
              "Medical team described as board certified clinicians specialising in metabolic health and men’s weight management.",
              "GLP‑1 agents presented as one lever inside a wider evidence based behaviour change framework, not a stand alone product sale.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Onboarding and ongoing care</p>
        <Points
          items={[
            "Step 1 · Eligibility quiz screening BMI and health profile for GLP‑1 candidacy.",
            "Step 2 · Virtual consultation with a licensed professional (not questionnaire only).",
            "Step 3 · Lab work when needed (HbA1c, kidney and liver markers, etc.).",
            "Step 4 · Personalised plan: approved medication plus a dedicated health coach assignment.",
            "Step 5 · Fortnightly one to one video coaching for habits, side effect management and optimisation.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Programme benefits (marketing)</p>
        <Points
          items={[
            "Built for men: physiological and psychological barriers to loss called out explicitly.",
            "Holistic support: coaching framed as improving GLP‑1 success rates versus medication alone.",
            "Uninterrupted supply: titration and reorders managed so doses are less likely to lapse.",
            "Medical outcome guarantee: refund pathways if defined weight milestones are missed while following the programme (subject to terms).",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Injectable shipments use <strong>insulated packaging and ice packs</strong> to hold roughly{" "}
          <strong>2°C to 8°C</strong>. Outer parcels are <strong>plain</strong> without Fella Health branding or
          weight loss wording for home or office privacy. After approval, <strong>premium tracked couriers</strong>{" "}
          typically target <strong>about one to two business days</strong>. Refills can be{" "}
          <strong>automated from coaching progress</strong> so the next month’s supply arrives before pens run out.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Subscription style pricing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Because the offer is a full programme, pricing reflects coaching and monitoring.{" "}
            <strong>Monthly subscriptions often start near £199</strong> covering medicine (Wegovy or Mounjaro per
            plan), <strong>one to one video coaching</strong>, <strong>clinician and metabolic reviews</strong>, and{" "}
            <strong>temperature controlled delivery</strong>. Intro promos of roughly <strong>£20–£40 off</strong> the
            first month appear in marketing.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety and legitimacy themes</p>
          <Points
            items={[
              "Structured monitoring rather than one off dispensing.",
              "Metabolic focus beyond scale weight (blood sugar, cardiovascular narratives).",
              "Encrypted platform for consultations and records.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why patients gravitate to Fella (summary)</p>
        <Points
          items={[
            "Dedicated coaching uncommon at standard pharmacies.",
            "Virtual visits plus optional laboratory screening.",
            "Men’s health specialisation and community positioning.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The conclusion Fella invites is that obesity care becomes a <strong>team sport</strong>: GLP‑1 potency
          plus coaching and medical supervision aimed at durable results for men reclaiming health.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Fella Health only for men?",
              a: "Their marketing centres male physiology and psychology; confirm current eligibility on site.",
            },
            {
              q: "Does Fella include coaching?",
              a: "Yes — fortnightly one to one video coaching is core to the described programme.",
            },
            {
              q: "Are blood tests required?",
              a: "Sometimes — materials describe labs for metabolic safety when clinically indicated.",
            },
            {
              q: "What does monthly pricing cover?",
              a: "Bundles typically include GLP‑1 medication, coaching, clinician reviews, monitoring and cold chain delivery.",
            },
            {
              q: "Is there a money back guarantee?",
              a: "Marketing references medical outcome guarantees if milestone criteria are met while following the programme — read live terms.",
            },
            {
              q: "Which GLP‑1 medicines are named?",
              a: "Wegovy and Mounjaro appear as programme tools where prescribed.",
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
          Fella Health targets men who want premium wraparound care, not a pen in a box. Expect subscription level
          spend near £199 monthly with promos possible, coaching cadence every two weeks, and logistics tuned for
          cold GLP‑1 stability. If pharmacy only pricing is your priority, contrast this programme fee with Health
          Wise dose tables; if accountability drives adherence, the coaching layer may justify the premium.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Fella Health
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
