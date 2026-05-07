"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://pharmulous.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function PharmulousPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Pharmulous"
      fileRef="HW-PHARMULOUS-2026"
      title="Pharmulous (UK): GP Led Online Pharmacy, Mounjaro, Wegovy, Safety First"
      subtitle="Premier GP steered online pharmacy: UK registered doctors review consultations, GPhC licensed dispensing, verified UK wholesalers, integrated pricing for consultation prescription needles and cold chain delivery, Trustpilot Excellent narrative with large review volume, encrypted data handling and discreet home delivery. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · GP level clinical review"
      providerName="Pharmulous"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v:
            "Pharmulous (marketing: GPhC UK pharmacy; Health Wise compare row 9012252 — verify on register)",
        },
        {
          k: "Model",
          v: "Secure questionnaire · manual medical review · prescription · internal dispensing · confidential shipment",
        },
        {
          k: "Fulfilment",
          v: "Medical grade insulated cold chain for pens · sealed professional packs · prompt dispatch · no external pharmacy branding on boxes",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/pharmulous.webp"
      heroProviderLogoAlt="Pharmulous"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Pharmulous
          </a>{" "}
          presents as a <strong>GP led</strong> online pharmacy where weight loss sits under the same rigour many
          expect from a traditional surgery. They specialise in <strong>Mounjaro</strong> and <strong>Wegovy</strong>{" "}
          access with emphasis on <strong>safety first</strong>, clinical excellence and convenience.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises their four step pathway, reputation claims, delivery experience patients report and
          pricing bundles for comparison shopping.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Trusted, regulated service</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "GP led clinical team: consultations reviewed by experienced UK registered doctors and clinicians.",
              "GPhC registered UK pharmacy adhering to professional standards.",
              "Authenticity narrative: medicines from verified UK wholesalers only.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>How the service works</p>
        <Points
          items={[
            "Step 1 · Secure online consultation covering BMI, history and current medicines.",
            "Step 2 · Expert medical review with manual clinician assessment and suitability focus.",
            "Step 3 · Clinical approval and prescription routing to internal dispensing.",
            "Step 4 · Discreet home delivery in confidential packaging.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Key benefits (marketing)</p>
        <Points
          items={[
            "GP oversight framing broader clinical judgement than dispensing alone.",
            "Excellent Trustpilot reputation cited, with over a thousand reviews praising staff and seamless service.",
            "Comprehensive care: medical guidance throughout treatment.",
            "Discreet confidential journey with encrypted data storage.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Injectable pens (<strong>Mounjaro</strong> and <strong>Wegovy</strong>) use{" "}
          <strong>medical grade insulated</strong> packaging to protect temperature in transit. Patients often describe
          goods arriving <strong>sealed</strong> and <strong>cold to the touch</strong> as a quality signal. Dispatch
          is <strong>swift</strong> with frequent praise for turnaround after approval. Outer boxes avoid external
          pharmacy name or medicine type for privacy.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing themes</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Mounjaro</strong> about <strong>£149 to £170</strong> for the initial <strong>2.5 mg</strong> dose in
            marketing. <strong>Wegovy</strong> starter doses about <strong>£124 to £140</strong>.{" "}
            <strong>Integrated pricing</strong> commonly bundles consultation, private prescription,{" "}
            <strong>injection needles</strong> and <strong>cold chain delivery</strong>.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Safety and legitimacy</p>
          <Points
            items={[
              "Patient education on injection technique and lifestyle adjustments.",
              "Responsible prescribing to UK BMI threshold norms.",
              "Dedicated support for treatment and ordering questions.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why patients choose Pharmulous (summary)</p>
        <Points
          items={[
            "Preference for General Practitioner led governance.",
            "Strong ratings for communication and delivery speed.",
            "Private clinic style environment online.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Pharmulous positions itself as a <strong>safe reliable expert led</strong> bridge between internet convenience
          and surgery grade caution for modern GLP‑1 therapy.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Pharmulous GP led?",
              a: "Marketing states UK registered doctors and clinicians review consultations in a GP steered model.",
            },
            {
              q: "What injectables are featured?",
              a: "Mounjaro and Wegovy are the headline GLP‑1 lines.",
            },
            {
              q: "Are needles included?",
              a: "Integrated pricing is described as covering injection needles alongside consultation, prescription and cold chain delivery.",
            },
            {
              q: "How is Trustpilot described?",
              a: "Excellent rating with 1000+ reviews referenced in briefing materials.",
            },
            {
              q: "How is cold chain described?",
              a: "Medical grade insulation with patient reports of cold to the touch arrival.",
            },
            {
              q: "What starter prices are quoted?",
              a: "Illustrative bands cite Mounjaro 2.5mg about £149 to £170 and Wegovy starters about £124 to £140.",
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
          Pharmulous fits readers who want doctor level sign off, bundled needle supply and discreet cold logistics.
          Compare live totals on Health Wise against other GP adjacent clinics; if review volume and communication matter,
          their Trustpilot story is a stated differentiator.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Pharmulous
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
