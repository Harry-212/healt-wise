"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://medhut.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function MedHutPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="MedHut"
      fileRef="HW-MEDHUT-2026"
      title="MedHut (UK): Family Run York Pharmacy, GLP‑1 and Clinician Led Review"
      subtitle="Family run online pharmacy in York combining local chemist style service with national digital fulfilment: GPhC registration, founders Jamal and Amina Hussain, pharmacist review with personal follow up, NHS and private prescription experience, cold chain for Mounjaro and Wegovy, Royal Mail Tracked 24 style delivery and competitive starter pricing. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Manual clinical verification"
      providerName="MedHut"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v:
            "MedHut, York based family pharmacy (public materials cite GPhC 9012752; Health Wise compare row aligns — verify on register)",
        },
        {
          k: "Model",
          v: "Choose treatment line and dose · health questionnaire · pharmacist verification · phone or email clarification · in house dispensing · courier",
        },
        {
          k: "Fulfilment",
          v: "Insulated 2–8°C packs for injectables · premium tracked delivery (e.g. Royal Mail Tracked 24) · neutral unbranded outers",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Medhut.webp"
      heroProviderLogoAlt="MedHut"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            MedHut
          </a>{" "}
          describes a <strong>family run</strong> online pharmacy rooted in <strong>York</strong>, blending high street
          personality with nationwide digital access. Marketing positions them against faceless corporates, with emphasis
          on <strong>clinician led care</strong>, clear communication and support for medicines such as{" "}
          <strong>Mounjaro</strong> and <strong>Wegovy</strong> when prescribed.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises their regulated credentials, four step pathway, logistics and pricing themes so you can
          line them up with other UK providers on our comparisons.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Trusted, regulated service</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "GPhC registered UK pharmacy; public copy cites registration number 9012752.",
              "Founded and managed by experienced pharmacists Jamal and Amina Hussain.",
              "Weight loss pens described as sourced through official UK medical supply chains for genuine product.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>How the service works</p>
        <Points
          items={[
            "Step 1 · Choose your treatment in the weight management area, including dose for starter or maintenance stages.",
            "Step 2 · Medical assessment via a comprehensive health questionnaire; pharmacists use this to verify BMI and contraindications.",
            "Step 3 · Clinical verification: a clinician reviews your submission; materials highlight a personal touch with phone or email contact before approval when queries arise.",
            "Step 4 · Dispensing and rapid delivery from in house pharmacy to your door once approved.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Key benefits (marketing)</p>
        <Points
          items={[
            "Personalised care and direct pharmacist access framed as a family business strength.",
            "NHS and private integration: handling NHS prescriptions cited as deepening safety and system awareness.",
            "Strong Trustpilot sentiment described as Excellent, with praise for speed and service.",
            "Flexible consultation: online forms, telephone or video where offered.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Injectable lines such as <strong>Mounjaro</strong> and <strong>Wegovy</strong> ship in{" "}
          <strong>specialist insulated packaging and cooling agents</strong> targeting about{" "}
          <strong>2°C to 8°C</strong>. Parcels use <strong>premium tracked</strong> services (for example{" "}
          <strong>Royal Mail Tracked 24</strong>) for monitoring in transit. Outer packaging is{" "}
          <strong>neutral</strong> without branding that reveals contents.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing themes</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Mounjaro</strong> starter doses are often placed in roughly the <strong>£140 to £155</strong> band.{" "}
            <strong>Wegovy</strong> starter doses commonly sit around <strong>£130 to £145</strong>. Marketing states{" "}
            <strong>no hidden costs</strong>: headline pricing typically bundles <strong>clinical review</strong> and{" "}
            <strong>private prescription</strong> with the medicine for clearer monthly budgeting.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety and legitimacy</p>
          <Points
            items={[
              "Manual pharmacist review on every order; no automated instant approval that skips checks.",
              "Education on side effects plus diet and exercise alongside medication.",
              "GPhC status and responsible pharmacist names shown for public verification.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why patients choose MedHut (summary)</p>
        <Points
          items={[
            "Preference for a family run UK business over a distant tech platform.",
            "Direct access to pharmacists Jamal or Amina for advice.",
            "Reliable fast secure cold chain delivery narrative.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The story MedHut tells is <strong>traditional pharmacy values</strong> with <strong>modern convenience</strong>:
          regulated, personal and aimed at trustworthy access to weight loss treatment nationwide.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Where is MedHut based?",
              a: "Marketing centres York as home for this family run online pharmacy.",
            },
            {
              q: "What is the GPhC number cited?",
              a: "Public materials quote 9012752; confirm the active premises on the GPhC register.",
            },
            {
              q: "Do they review orders manually?",
              a: "Yes — every order is described as receiving qualified pharmacist review rather than instant automated approval.",
            },
            {
              q: "How are GLP‑1 pens shipped?",
              a: "Insulated cold chain packs toward 2–8°C, tracked premium delivery and discreet outer boxes.",
            },
            {
              q: "Does NHS experience matter?",
              a: "They highlight NHS prescription handling as strengthening their grasp of UK safety norms and patient pathways.",
            },
            {
              q: "What price bands are quoted?",
              a: "Illustrative copy cites Mounjaro starters near £140 to £155 and Wegovy starters near £130 to £145, with consultation and prescription commonly bundled.",
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
          MedHut suits readers who want accountable pharmacist contact, York rooted family ownership and cold chain
          discipline without corporate anonymity. Cross check live prices and cut offs against Health Wise dose tables;
          if you value callback style verification, their described pathway may feel more human than questionnaire only
          routes.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit MedHut
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
