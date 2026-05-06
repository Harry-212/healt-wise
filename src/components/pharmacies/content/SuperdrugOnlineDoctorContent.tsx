"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://onlinedoctor.superdrug.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function SuperdrugOnlineDoctorContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Superdrug Online Doctor"
      fileRef="HW-SUPERDRUG-OD-2026"
      title="Superdrug Online Doctor (UK): Weight Loss Consultations, Delivery or Pharmacy Collection"
      subtitle="Established retailer backed online doctor route for prescription weight management, doctor reviewed questionnaires, discreet logistics or Superdrug pickup, cold chain injectables and bundled pricing themes. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · GLP-1 injections where listed · Collection option"
      providerName="Superdrug Online Doctor"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Superdrug Online Doctor fulfilment (GPhC 9010736 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Online questionnaire · doctor review · prescription if suitable · delivery or Superdrug collection",
        },
        {
          k: "Fulfilment",
          v: "Royal Mail and courier partners · signature delivery · optional pharmacy pickup · insulated cold chain for injectables",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/superdrag.webp"
      heroProviderLogoAlt="Superdrug"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-emerald-900">Provider Overview:</strong> Superdrug Online Doctor is positioned as a UK digital route into clinician-reviewed weight management, with options for delivery or collection depending on the pathway. Comparing providers is easier when you understand how each step works — the assessment questions, clinician review, ongoing support, and fulfilment logistics. This page summarises independent context about Superdrug Online Doctor to help you make a more informed choice.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Demand for medically supervised GLP-1 weight loss continues to grow; picking a familiar retail
          brand can feel reassuring.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Superdrug Online Doctor
          </a>{" "}
          markets regulated access with transparent turnaround messaging, flexible fulfilment and bundled
          pricing themes on medicines such as Mounjaro and Wegovy where clinically appropriate.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise pulls together how their public documentation describes the workflow, delivery stack,
          indicative costs and safeguards so you can contrast them with other UK dossiers.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulated medical framework</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Materials emphasise registration with UK healthcare regulators, supply via{" "}
            <strong>GPhC registered pharmacies</strong> and prescribing only after legitimate assessment.
            Weight loss injections remain prescription only; Superdrug contrasts that model with social media
            or unknown sellers linked to counterfeit risk.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Four step service outline</p>
        <Points
          items={[
            "Online consultation capturing weight, BMI, medical history, medicines and lifestyle.",
            "Doctor review with many queries answered inside about 24 hours in marketing claims.",
            "Prescription approval with tailored medication and dose planning.",
            "Delivery to an address you choose or collection from a local Superdrug pharmacy.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Highlighted patient benefits</p>
        <Points
          items={[
            "Accessibility: skip GP bookings and waiting rooms when the online route suits.",
            "Privacy: plain parcels, confidential consultations and secure messaging with doctors.",
            "Continuity: repeat ordering, doctor messaging and progress tooling on suitable plans.",
            "Education packs: guides, food diaries and trackers bundled with some weight loss orders.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery partners and timelines</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Orders ship in <strong>plain packaging</strong> via partners such as{" "}
          <strong>Royal Mail</strong> and couriers including <strong>CitySprint</strong> or{" "}
          <strong>Gophr</strong> where stated. Typical public timelines cite{" "}
          <strong>dispatch within about five working days</strong> after prescription approval and{" "}
          <strong>two to three working days</strong> in transit, implying roughly a week door to door in many
          cases. Patients receive confirmations, tracking and ETA style updates after dispatch.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Cold chain for injectables</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Medicines such as <strong>Mounjaro</strong> or <strong>Wegovy</strong> may travel in{" "}
          <strong>insulated kits</strong> engineered to maintain manufacturer temperature bands during
          courier legs, reducing potency risk from heat excursions.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Address handling and collection flexibility</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Home or workplace delivery generally requires <strong>signature on receipt</strong>. Alternatively,
          patients may <strong>collect from Superdrug pharmacies</strong> if that suits unpredictable
          schedules. Marketing mentions verified addresses and controlled distribution to limit loss or
          mishandling.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative Wegovy style pricing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Summaries list <strong>starter doses near £99 monthly</strong>, mid strengths roughly{" "}
            <strong>£119 to £192</strong>, higher strengths up to about <strong>£205+</strong>, and{" "}
            <strong>maintenance tiers up to roughly £285</strong>. Wider medication averages from external
            comparisons land near <strong>£160 to £268 monthly</strong> depending on molecule and strength.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>What bundles claim to include</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Unlike some fee stacked clinics, Superdrug often advertises{" "}
            <strong>consultation review, prescription, delivery and support materials</strong> inside the
            headline price, supporting easier budgeting.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Safety and counterfeit awareness</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Regulatory warnings repeat risks from unverified sellers: fake drugs, wrong strengths or adulterants.
          Superdrug leans on its high street heritage plus regulated prescribing to reassure patients seeking
          genuine supply.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Service speed summary</p>
        <Points
          items={[
            "Doctor review commonly within 24 hours.",
            "Dispatch within about five working days after approval.",
            "Transit about two to three working days thereafter.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Repeat treatment planning</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Chronic therapy needs continuity. Superdrug promotes straightforward <strong>reorders</strong>,{" "}
          <strong>dose adjustments</strong> when clinically appropriate and reminders to{" "}
          <strong>order roughly two weeks ahead</strong> so doses do not lapse during busy fulfillment periods.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why marketing stresses differentiation</p>
        <Points
          items={[
            "Recognisable national brand with long pharmacy heritage.",
            "Hybrid online consult plus in store pharmacy support when you collect.",
            "Transparent dose tier pricing tables on many SKUs.",
            "Nationwide delivery across England, Scotland and Wales with regional caveats as listed.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Limitations called out in summaries</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Expect occasional <strong>regional availability constraints</strong>, possible{" "}
          <strong>stock gaps</strong> on popular GLP-1 pens and the absence of certain subscription models
          compared with app first startups. These caveats mirror wider UK market friction rather than unique
          failures.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I collect instead of waiting for courier delivery?",
              a: "Yes, Superdrug Online Doctor advertises pharmacy collection at participating Superdrug stores when offered for your treatment.",
            },
            {
              q: "How long until medication arrives?",
              a: "Public timing cites roughly five working days to dispatch after approval plus two to three working days delivery, so about a week total in many scenarios.",
            },
            {
              q: "Does Superdrug ship cold chain injectables?",
              a: "Marketing describes insulated packaging aligned with manufacturer cold chain expectations for suitable pens.",
            },
            {
              q: "What price bands appear for Wegovy?",
              a: "Illustrative tables mention about £99 entry doses up to roughly £285 maintenance tiers; compare against Health Wise tables for your exact strength.",
            },
            {
              q: "Is consultation bundled?",
              a: "Many SKUs bundle consultation review, prescription and delivery into the advertised monthly price; verify your basket.",
            },
            {
              q: "Do deliveries need a signature?",
              a: "Home delivery narratives emphasise signed receipt for secure handover of prescription medicines.",
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
          Superdrug Online Doctor blends trusted retail familiarity with digital prescribing, optional
          pharmacy pickup, discreet logistics and bundled consultation pricing across roughly £99 to £300+
          illustrative monthly bands. If hybrid fulfilment matters to you, weigh their timelines against
          faster niche couriers profiled elsewhere on Health Wise.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Superdrug Online Doctor
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
