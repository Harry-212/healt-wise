"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.simpleonlinepharmacy.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function SimpleOnlinePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Simple Online Pharmacy"
      fileRef="HW-SIMPLEONLINE-2026"
      title="Simple Online Pharmacy (UK): Regulated Weight Loss, Clinician Review and Home Delivery"
      subtitle="UK registered online pharmacy framing clinician led GLP-1 and related weight management, a four step digital pathway, discreet fulfilment, transparent pricing themes and ongoing support. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Other prescription options where offered"
      providerName="Simple Online Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Simple Online Pharmacy (GPhC 9011287 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Online assessment · UK clinician review · prescription if appropriate · pharmacy dispensing · courier delivery",
        },
        {
          k: "Fulfilment",
          v: "Fast dispatch after approval · next day options where stated · plain packaging · tracked carriers where offered",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Simple Online Pharmacy.webp"
      heroProviderLogoAlt="Simple Online Pharmacy"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          When people search for safe, convenient weight loss support online they meet many sellers of
          medicines, injections and programmes. Not every route meets the same standards.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Simple Online Pharmacy
          </a>{" "}
          presents itself as a regulated UK healthcare service with clinician led prescribing and home
          delivery. Below is how their public narrative describes regulation, the care pathway, delivery,
          typical costs and why patients might pick them.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises that positioning so you can compare it with our price tables and other
          pharmacy dossiers. Always confirm live checkout, eligibility rules and GPhC premises details on
          official sources before you pay.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Trusted UK pharmacy and regulation</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Marketing stresses a <strong>UK registered pharmacy</strong> operating under standards that
            align with bodies such as the <strong>Medicines and Healthcare products Regulatory Agency
            (MHRA)</strong> and <strong>General Pharmaceutical Council (GPhC)</strong>. That framing implies:
          </p>
          <Points
            items={[
              "Medicines described as genuine from approved supply routes.",
              "Prescriptions issued by qualified UK clinicians after assessment.",
              "Treatments positioned as legally prescribed and clinically appropriate where approved.",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Public health messaging often warns against unregulated weight loss injections; licensed pharmacy
            routes are presented as the safer contrast.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Four step online pathway</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          The journey is described as quick and fully digital, reducing friction versus traditional GP and
          counter visits.
        </p>
        <Points
          items={[
            "Step 1 · Online assessment: short consultation covering medical history, current weight and health, lifestyle; intended to check suitability.",
            "Step 2 · Clinical review: UK registered doctor or prescriber evaluates eligibility, contraindications and dose choice.",
            "Step 3 · Prescription and dispensing: if approved, pharmacy staff prepare medication, run safety checks and pack securely.",
            "Step 4 · Delivery: courier dispatch to the patient’s address without an in person GP or pharmacy trip.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The overall pitch is <strong>fast</strong>, <strong>convenient</strong> and{" "}
          <strong>confidential</strong>.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Clinician led medicines (marketing context)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Unlike retailers that only sell products, the brand describes <strong>clinician led weight
          management</strong>: prescribing tied to medical need, follow up and dose adjustments over time.
          Frequently named injectables include <strong>Mounjaro (tirzepatide)</strong> and{" "}
          <strong>Wegovy (semaglutide)</strong>, alongside other prescription or non prescription lines where
          listed. Effects cited in educational copy include appetite reduction, blood sugar regulation and
          support for sustainable loss alongside lifestyle change. Some summaries reference clinical study
          ranges such as up to around <strong>20% body weight change</strong> in suitable cohorts when
          medicines combine with behaviour change; individual results vary.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Ongoing support and tools</p>
        <Points
          items={[
            "Access to healthcare professionals and follow up reviews.",
            "Guidance on diet and lifestyle alongside medication.",
            "A dedicated weight loss app with expert led content.",
            "Support framed around nutrition and behavioural science.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The stated aim is better long term adherence, confidence and outcomes than medication dispensed
          without wraparound care.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery: speed, discretion and handling</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Promotional copy highlights <strong>fast dispatch after approval</strong>,{" "}
          <strong>next day delivery</strong> where available, <strong>plain unbranded packaging</strong>{" "}
          for privacy, and pharmacy led packing with appropriate storage and transport. Injectable cold chain
          lines may use insulated packaging to protect stability in transit. Couriers are described as
          trusted, with tracking and reliable windows where offered.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How orders reach your address</p>
        <Points
          items={[
            "Address and patient detail checks before dispatch to limit errors.",
            "Preparation, safety checks, secure pack and handover to courier after approval.",
            "Email or SMS style updates and tracking so patients can monitor progress.",
            "Delivery to home or another suitable location for convenience.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing themes (illustrative)</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Summaries cite <strong>Wegovy from around £99</strong> for introductory doses, with prices rising
            at higher strengths. Messaging emphasises <strong>no separate prescription fees</strong>,{" "}
            <strong>competitive headline pricing</strong>, <strong>free delivery on orders over about
            £35</strong>, and possible extra charges for premium or next day options. Private treatment is
            never free; value is argued through clinician oversight, genuine medicines and support versus
            unsafe or ineffective alternatives.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Convenience versus traditional care</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            The service contrasts itself with long GP waits by offering <strong>home based access</strong>,{" "}
            <strong>24/7 online availability</strong> with human support in stated hours, and{" "}
            <strong>nationwide UK reach</strong> with consistent delivery narratives.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Safety and patient protection</p>
        <Points
          items={[
            "Clinical screening and eligibility checks before prescribing.",
            "Prescription only medicines supplied only when appropriate.",
            "Ongoing guidance on dosing and side effect support.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Why marketing says patients choose them</p>
        <Points
          items={[
            "Convenience: online consultation through to delivery.",
            "Speed: fast approval and dispatch narratives.",
            "Safety: regulated pharmacy with clinician prescribing.",
            "Support: education, app and professional input.",
            "Privacy: discreet fulfilment.",
            "Pricing: transparent bands and free delivery thresholds where advertised.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Simple Online Pharmacy regulated?",
              a: "Their materials describe a UK registered pharmacy framework with MHRA and GPhC aligned governance. Always verify the exact dispensing premises on the live GPhC register.",
            },
            {
              q: "How does the consultation work?",
              a: "You complete an online assessment, a UK clinician reviews it, and if appropriate a prescription is issued for pharmacy dispensing and courier delivery.",
            },
            {
              q: "Which injectables are mentioned?",
              a: "Marketing commonly references Mounjaro and Wegovy alongside other lines; suitability is clinician determined.",
            },
            {
              q: "How fast is delivery?",
              a: "Copy cites fast dispatch after approval and next day options in many cases, plus tracking where provided.",
            },
            {
              q: "What about cost?",
              a: "Illustrative bands mention Wegovy from around £99 at low doses, dose tier increases, free delivery over about £35 and no prescription fee in stated bundles.",
            },
            {
              q: "Is packaging discreet?",
              a: "Yes, public messaging promises plain outer packs for confidentiality.",
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
          Simple Online Pharmacy markets a rounded private pathway: regulated supply, structured assessment,
          clinician oversight, discreet logistics and transparent pricing themes from roughly £99 entry points
          on cited Wegovy lines plus free delivery thresholds. Cross check any dose you need against Health
          Wise comparison tables and the provider’s live checkout.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Simple Online Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
