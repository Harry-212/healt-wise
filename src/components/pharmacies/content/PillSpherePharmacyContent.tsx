"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.pillsphere.com/online-clinic/weight-loss";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function PillSpherePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="PillSphere"
      fileRef="HW-PILLSPHERE-2026"
      title="PillSphere (UK): Online Clinic Weight Loss, Clinical Review and Home Delivery"
      subtitle="Online pharmacy and telehealth clinic offering prescription weight treatments after consultation, pharmacy dispensing, tracked Royal Mail style logistics, discreet packaging, and competitive monthly bands in customer narratives. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro-class · Wegovy-class · GLP-1 injectables · orals where listed"
      providerName="PillSphere"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "PillSphere (GPhC 9012694 — verify premises on register)",
        },
        {
          k: "Pathway",
          v: "Consultation · prescriber review · optional video or ID checks · dispensing · courier dispatch",
        },
        {
          k: "Fulfilment",
          v: "Tracked delivery · plain packaging · cold chain when required",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/PillSphere.webp"
      heroProviderLogoAlt="PillSphere"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Choosing a sustainable weight loss route online means picking providers that combine{" "}
          <strong>regulated prescribing</strong>, clear logistics, and honest pricing.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            PillSphere
          </a>{" "}
          operates as an online pharmacy and clinic so eligible patients can access prescription
          therapies without a bricks-and-mortar visit, aligned with mainstream UK telehealth practice.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise walks through how PillSphere describes consultation steps, delivery safeguards,
          typical UK cost anchors, and what reviewers emphasise so you can benchmark against other
          dossiers.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How PillSphere works (overview)</p>
        <Points
          items={[
            "Complete an online consultation.",
            "Receive assessment by a qualified prescriber.",
            "Obtain a personalised treatment plan when suitable.",
            "Have medication dispensed and delivered to your home.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Why patients consider PillSphere</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="font-semibold text-slate-900">Medically supervised prescribing</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            Treatments are framed as clinically approved with eligibility screening, side effect
            awareness, and dose titration over time rather than anonymous marketplace checkout.
          </p>
          <p className="mt-4 font-semibold text-slate-900">Convenience</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            Everything routes through digital consultation and home delivery, helpful when travel or
            waiting lists are barriers.
          </p>
          <p className="mt-4 font-semibold text-slate-900">Privacy</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            Discreet packaging, confidential consultations, and secure data handling are recurring
            themes.
          </p>
          <p className="mt-4 font-semibold text-slate-900">Pricing narratives</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            Customer commentary often cites competitive pricing versus some high street pharmacy bands,
            though dose and molecule still dominate monthly totals.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Step-by-step service pathway</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              t: "Step 1: Online consultation",
              d: "Questionnaire covering weight, BMI, medical history, current medicines, and lifestyle so suitability can be judged.",
            },
            {
              t: "Step 2: Clinical review",
              d: "Licensed prescriber evaluation; you may supply extra detail, attend video consults, or verify identity when policies require.",
            },
            {
              t: "Step 3: Prescription approval",
              d: "Private prescription when appropriate with tailored medicine choice and ongoing monitoring expectations.",
            },
            {
              t: "Step 4: Dispensing",
              d: "Pharmacy team checks accuracy, dose, and packaging integrity.",
            },
            {
              t: "Step 5: Home delivery",
              d: "Shipment direct to your address after approval.",
            },
          ].map((s) => (
            <div key={s.t} className="border border-slate-200/90 bg-[#fbf9f4] p-5 sm:col-span-2">
              <p className="font-bold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Delivery service</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Industry parallels cited alongside PillSphere describe <strong>Royal Mail tracked</strong>{" "}
          delivery, courier backups on some lanes, and secure outer cartons. Review snippets mention{" "}
          <strong>prompt delivery</strong>, quick reliable turnaround, and parcels arriving within a few
          days in many cases.
        </p>
        <Points
          items={[
            "Processing often quoted around 1–2 working days with total delivery roughly 2–5 days depending on service tier.",
            "Some UK competitors advertise next-day after approval; PillSphere timelines should be confirmed at checkout for your SKU.",
            "Plain unbranded packaging limits visible clues about contents.",
            "Cold chain: refrigerated injectables may use insulated packs and timed dispatch; be available to receive when carriers require signature.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>How logistics are managed</p>
        <Points
          items={[
            "Address and identity confirmation before release.",
            "Pharmacy checks, secure packing, tracking numbers assigned.",
            "Email or SMS updates with tracking links and ETA guidance.",
            "Missed deliveries: redelivery attempts, depot holds, or reschedule options via courier apps.",
            "Temperature control when medicines demand it, aligned with UK pharmacy regulations.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Cost expectations</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Illustrative UK private bands in supporting material span roughly{" "}
            <strong>£173–£313 per month</strong> depending on product and dose, with lower starter tiers
            cheaper before titration climbs.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Consultation fees elsewhere often land around <strong>£20–£50</strong> initially and{" "}
            <strong>£10–£30</strong> for follow-ups; PillSphere may bundle consults into headline totals,
            so read basket line items.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Delivery may be <strong>free</strong> or about <strong>£2.95–£4.95</strong> for faster
            tiers on comparable services. Annual spend themes cluster roughly{" "}
            <strong>£1,800–£3,000+</strong> for year-round private GLP-1 style care.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Differentiators</p>
          <Points
            items={[
              "End-to-end digital journey from consult to payment to parcel.",
              "Patient-focused UX and turnaround messaging.",
              "Review-backed value claims versus some incumbent pharmacies.",
              "Positive sentiment on delivery reliability and product quality in aggregate feedback.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Safety and legitimacy checklist</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Legitimate UK services should show qualified prescribers, mandatory consultation, transparent
          pricing, and HTTPS protected checkout. Always verify live{" "}
          <strong>GPhC pharmacy registration</strong>, superintendent details, and prescriber credentials
          on official registers rather than third-party summaries alone.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Considerations</p>
        <Points
          items={[
            "Private costs can be substantial over titration.",
            "Not every applicant passes medical screening.",
            "Ongoing monitoring may be required for GLP-1 therapy.",
            "Best outcomes combine medication with nutrition, movement, and behaviour change.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Closing positioning</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          PillSphere presents a familiar UK recipe: clinician gated prescribing, pharmacy fulfilment, and
          discreet tracked delivery with pricing that reviewers often call competitive. Readers comparing{" "}
          <strong>home-delivered weight loss injections</strong> or searching for a{" "}
          <strong>regulated online clinic</strong> should still validate dose-specific quotes on PillSphere
          itself and cross-link to Health Wise comparison tables for parity checks.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Does PillSphere always use Royal Mail?",
              a: "Marketing emphasises tracked postal services; courier hybrids may appear for certain stock or regions.",
            },
            {
              q: "Will I need a video consultation?",
              a: "Some pathways request video or extra verification when risk flags trigger enhanced checks.",
            },
            {
              q: "How fast after approval?",
              a: "Reviewers cite a few days in many cases; stock, dose, and postage tier change the answer.",
            },
            {
              q: "Is cold chain guaranteed?",
              a: "Ask support how insulated packs perform in heatwaves and what to do if tracking stalls.",
            },
            {
              q: "Can I compare PillSphere with NHS supply?",
              a: "Yes, but eligibility and monthly cost profiles differ sharply; model total private spend including consult bundles.",
            },
            {
              q: "Where is GPhC verification?",
              a: "Use the official pharmacy register with the legal entity named on your dispensing paperwork.",
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
          PillSphere fits shoppers who want a <strong>supervised digital clinic</strong>,{" "}
          <strong>plain-parcel privacy</strong>, and <strong>logistics that reviewers describe as
          dependable</strong>. Stack their live basket against other Health Wise pharmacies at your actual
          maintenance dose before committing long term.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit PillSphere
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
