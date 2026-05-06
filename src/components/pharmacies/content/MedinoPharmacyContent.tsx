"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.medino.com/";
const policyUrl = "https://www.medino.com/policy/weight-loss-treatments";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function MedinoPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Medino"
      fileRef="HW-MEDINO-2026"
      title="Medino Weight Loss (UK): Pharmacist Review, PGD Supply and Fast Delivery"
      subtitle="Online pharmacist assessed pathways to licensed weight loss medicines, including Patient Group Direction supply where legal, plus discreet tracked logistics and bundled headline pricing on many funnels. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro-class · Wegovy-class · daily injectables · oral fat absorption medicines"
      providerName="Medino"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Medino Pharmacy (GPhC 9011921 — verify superintendent and premises on register)",
        },
        {
          k: "Pathway",
          v: "Online consultation · pharmacist review · PGD or other lawful supply routes",
        },
        {
          k: "Fulfilment",
          v: "Discreet packaging · free next-day delivery on many lines (as stated) · trusted couriers",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Medino.webp"
      heroProviderLogoAlt="Medino"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-slate-900">Why research Medino?</strong> Every online pharmacy has a distinct approach to patient care, pricing, and medication delivery. This independent dossier breaks down how Medino handles weight management consultations, offering you a clear look at their service structure so you can compare it against your personal health needs and preferences.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Accessing evidence based weight treatments through traditional routes can mean long waits,
          repeated appointments, and diary friction.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Medino
          </a>{" "}
          markets a streamlined home based alternative: professional healthcare review, licensed
          medicines where appropriate, and rapid delivery once approved.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Their{" "}
          <a
            href={policyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            weight loss treatments policy
          </a>{" "}
          explains PGD boundaries and safety expectations alongside product pages. Health Wise walks
          through how the service is described so you can compare speed, price ladder, and oversight
          style with other UK dossiers.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Treatments in scope</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Medino groups medicines used in medical weight management rather than over the counter
            “shortcuts”:
          </p>
          <Points
            items={[
              "Weekly injection therapies such as tirzepatide-based and semaglutide-based medicines.",
              "Daily injectable options for appetite control where listed.",
              "Oral capsules that reduce dietary fat absorption for patients who prefer not to inject.",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Supply follows professional assessment; safety remains the stated priority over basket
            conversion.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Consultation process</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              t: "Step 1: Online questionnaire",
              d: "Medical history, current weight and BMI, prior weight loss attempts, existing conditions, and related risk factors so suitability can be judged.",
            },
            {
              t: "Step 2: Pharmacist review",
              d: "A qualified pharmacist reviews the submission. Extra steps may include follow-up questions, video or phone contact, and identity or detail verification.",
            },
            {
              t: "Step 3: Personalised decision",
              d: "If appropriate, the clinician selects medicine and starting dose; not every applicant is approved, which Medino presents as a deliberate safety stance.",
            },
            {
              t: "Step 4: Confidential handling",
              d: "Consultations are treated as private clinical records; you can ask questions without attending a physical clinic.",
            },
          ].map((s) => (
            <div key={s.t} className="border border-slate-200/90 bg-[#fbf9f4] p-5">
              <p className="font-bold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Why that structure helps patients</p>
        <Points
          items={[
            "Convenience: fewer GP surgery visits for qualifying pathways.",
            "Speed: assessments completed quickly online relative to traditional queues.",
            "Privacy: sensitive weight and medication topics handled confidentially.",
            "Safety: pharmacist review reduces casual misuse of potent medicines.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Patient Group Directions (PGD)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Medino describes use of <strong>Patient Group Direction (PGD)</strong> frameworks for certain
          prescription only medicines, meaning a pharmacist can supply defined treatments without a
          separate traditional GP prescription when legal criteria are met. Under that model the
          pharmacist assesses eligibility, supplies directly if appropriate, and the service remains
          framed as fully compliant with UK healthcare regulation.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery from pharmacy to your door</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Public copy highlights <strong>free next-day delivery on many treatments</strong>, rapid
          processing after approval, and <strong>direct delivery to the address you choose</strong>.
        </p>
        <Points
          items={[
            "Order approval: once the pharmacist approves, the order is processed for dispensing.",
            "Packaging: medicines are packed for stability and privacy.",
            "Dispatch: trusted courier services carry the parcel.",
            "Delivery: the package goes to your named address, removing a high-street collection step for many patients.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          <strong>Discretion:</strong> unbranded outer packaging, confidential handling of medical
          information, and no obvious content labelling on the outside are emphasised for people who
          want a low profile delivery.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Timeframes:</strong> same-day or next-day <em>processing</em> after approval and
          next-day delivery on many orders are common marketing claims, so a window of about{" "}
          <strong>24–48 hours from approval</strong> is a reasonable planning anchor in many mainland
          cases, subject to stock, cut-off times, and postcode.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Transparent pricing (illustrative bands)</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Medino often bundles <strong>consultation, medicine, and delivery</strong> into an
            all-inclusive headline so hidden fee surprises are less likely, though always read the
            line items in your basket.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Example ranges from public summaries: entry level treatments around{" "}
            <strong>£49.99</strong>, injectable starter doses from roughly <strong>£99.99</strong>, mid
            range <strong>£119.99–£229.99</strong>, and higher strength or advanced options up to about{" "}
            <strong>£649.00</strong> depending on molecule, dose, and supply length.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Value and effectiveness expectations</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Higher advanced treatment prices can still be framed as value when they bundle clinical
            oversight, time saved versus repeated private appointments, and access to therapies that
            are not always easy to source locally.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Medino notes that some programmes can deliver up to around <strong>20% average weight</strong>{" "}
            change <em>when combined with lifestyle change</em>, with variation by health status,
            adherence, diet, and activity. Medication is presented as part of a wider plan, not a
            stand-alone switch.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Treatment design: titration and orals</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Injectable options are described for longer term appetite and glycaemic support. Oral
          fat-reduction medicines suit patients who want to avoid needles. Many injectable plans follow{" "}
          <strong>gradual dose escalation</strong> to limit side effects and support sustainable
          progress; your prescriber sets the schedule.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Safety, regulation, and unsuitable orders</p>
        <Points
          items={[
            "Pharmacist-led assessments and identity or history checks as required.",
            "Ongoing access to guidance for questions that arise after supply.",
            "If you are not suitable, Medino states the order may not be fulfilled and can be refunded rather than pushed through.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Convenience versus traditional healthcare</p>
        <Points
          items={[
            "Avoids long NHS or private clinic waiting lists for some eligible patients.",
            "Home-based care from consultation through delivery.",
            "Flexible timing to complete forms online.",
            "Reordering paths designed to keep treatment continuous when still appropriate.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Patient experience</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Review ecosystem commentary is often positive on <strong>fast delivery</strong>,{" "}
          <strong>competitive pricing</strong>, <strong>simple ordering</strong>, and{" "}
          <strong>professional support</strong>, though any platform will have outlier complaints;
          read recent threads and the policy page together.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Who should consider Medino</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing targets adults struggling with weight who have not reached goals with diet and
          exercise alone, people seeking clinically supported options, and those who prefer online
          healthcare. Eligibility always depends on the assessment outcome.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Benefits in summary</p>
        <Points
          items={[
            "Clinically approved treatment access where supplied lawfully.",
            "Professional oversight from qualified pharmacists.",
            "Fast delivery narrative on many lines.",
            "Transparent inclusive pricing at headline level.",
            "End-to-end online journey.",
            "Discreet packaging and confidential consultations.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Points to weigh before you buy</p>
        <Points
          items={[
            "Advanced therapies can be expensive at higher doses.",
            "Not every applicant passes assessment.",
            "Sustainable results may need long term commitment, monitoring, and lifestyle work.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is every weight loss medicine supplied by PGD?",
              a: "No. The legal route depends on the product and your assessment; the policy page explains scope.",
            },
            {
              q: "What if I am declined?",
              a: "Medino states unsuitable orders may be refunded rather than supplied, which is preferable to unsafe approval.",
            },
            {
              q: "Where is the official weight loss policy?",
              a: "Use medino.com’s weight loss treatments policy alongside each product’s eligibility text.",
            },
            {
              q: "Are cold chain injectables next-day too?",
              a: "Check the specific product page; cut-offs and carrier rules can differ for refrigerated lines.",
            },
            {
              q: "Does price always include the consult?",
              a: "Many funnels bundle consultation, drug, and delivery, but confirm the basket breakdown for your SKU.",
            },
            {
              q: "Can I use Medino if I have complex comorbidities?",
              a: "Pharmacists apply safety filters; be thorough in the questionnaire and expect follow-up questions or decline if risk is high.",
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
          Medino fits readers who want <strong>pharmacist governed UK access</strong>, a clear PGD
          story where it applies, headline bundles that include consult and postage, and logistics
          pitched for quick starts after approval. Cross-check live prices on Health Wise and keep
          your GP in the loop if shared care or duplicate prescribing could be an issue.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Medino
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
