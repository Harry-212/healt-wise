"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.mylondonpharmacy.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function MyLondonPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="My London Pharmacy"
      fileRef="HW-MY-LONDON-2026"
      title="My London Pharmacy: UK Online Weight Loss, Mounjaro-Class Pathways and Next-Day Delivery"
      subtitle="Registered UK online pharmacy positioning around short digital assessment, licensed prescribers, GLP-1 and dual incretin injectables where suitable, a patient portal, and discreet nationwide delivery. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy-class GLP-1 · weekly injectables · subscription options"
      providerName="My London Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "My London Pharmacy (GPhC 9011790 — verify premises on register)",
        },
        {
          k: "Access",
          v: "Digital consultation (~2 min stated) · clinician review · prescription often included without separate fee (confirm live funnel)",
        },
        {
          k: "Fulfilment",
          v: "Next-day UK delivery (stated) · discreet packaging · tracked couriers · cold chain where required",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/my london pharmacy.webp"
      heroProviderLogoAlt="My London Pharmacy"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Busy lives, long NHS waits, and noisy online sellers make it harder to pick a{" "}
          <strong>safe, supervised</strong> weight loss route.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            My London Pharmacy
          </a>{" "}
          markets itself as a UK registered online pharmacy where licensed clinicians oversee
          treatment, data is handled securely, and medicines are sourced through legitimate supply
          chains rather than social marketplace risk.
        </p>
        <p className="text-slate-800 leading-relaxed">
          UK regulator messaging around <strong>counterfeit weight loss injections</strong> from
          unverified sources is a recurring theme; My London Pharmacy leans on{" "}
          <strong>MHRA authorised medicines</strong>, <strong>UK licensed prescribers</strong>, and
          structured screening as its counter narrative. Health Wise explains how they describe the
          journey end to end so you can compare speed, price, and portal support with other dossiers.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Three-step online journey</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Step 1: Online consultation in about two minutes on public pages, capturing medical history, current weight and BMI, conditions, and medicines so prescribing stays indication-appropriate.",
              "Step 2: Clinical review by a UK qualified clinician; if eligible, a prescription is issued and marketing often states no separate prescription fee in bundled funnels.",
              "Step 3: Personalised treatment plan emphasising GLP-1 receptor agonists and GIP-inclusive dual incretin injectables where suitable, titrated to your profile rather than a generic one-size kit.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Treatments and mechanism (as described publicly)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing highlights weekly injectable medicines that act on appetite and craving circuits,
          supporting sustainable loss when paired with professional oversight. Promotional copy may cite
          headline trial-style figures such as up to around <strong>25% weight change</strong> in some
          study contexts when products are used correctly; individual results vary with dose, adherence,
          side effects, and lifestyle.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Weekly and monthly plans:</strong> flexibility between weekly injection schedules and
          monthly subscription packaging lets patients align billing and titration with budget and
          routine, subject to prescriber instructions.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Patient portal and continuity</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          My London Pharmacy promotes a <strong>dedicated patient portal</strong> for tracking
          progress, managing prescriptions, accessing follow-up support, and messaging clinicians. That
          matters because GLP-1 class therapy is rarely “set and forget”: dose changes, side effect
          questions, and reorder timing benefit from a documented channel.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Fast discreet delivery</p>
        <div className="mt-3 space-y-3 text-slate-800 leading-relaxed">
          <p>
            <strong>Speed:</strong> next-day UK delivery is a headline claim after approval, with many
            orders described as <strong>processed within about 24 hours</strong> before the courier leg.
          </p>
          <p>
            <strong>Privacy:</strong> plain outer cartons without obvious medication branding support
            confidential receipt at home.
          </p>
          <p>
            <strong>Logistics:</strong> although every micro-step is not published, the service aligns
            with common UK pharmacy practice: protective inner packaging, temperature-controlled lanes
            for cold medicines, tracked services, and direct delivery to the patient address with careful
            address validation.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Nationwide reach</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Branding references London but fulfilment is described as{" "}
          <strong>UK-wide</strong>: rural and urban patients alike access the same digital consult and
          courier model without travelling to a bricks-and-mortar clinic.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing snapshot</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Public examples cite programmes <strong>from about £145 per month</strong> for medicines
            such as Mounjaro in promotional positioning, often bundling{" "}
            <strong>medication, clinical assessment, and ongoing support</strong>. Confirm dose-specific
            pricing and any separate delivery premiums on the live checkout.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Value story</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Private medical weight loss is never pocket change; My London Pharmacy argues faster access
            than many NHS queues, personalised care, continuous monitoring, and transparent monthly
            framing versus opaque clinic bills. Only your finances and clinician advice can validate
            that trade-off.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why digital weight services are growing</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Demand drivers commonly cited include packed schedules, NHS capacity pressure, and wider
          awareness of injectable obesity medicines. Online models promise convenience, speed, and
          accessibility without booking GP slots, commuting to clinics, or taking repeated half days off
          work.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Safety and oversight</p>
        <Points
          items={[
            "Treatments remain clinically supervised end to end.",
            "Prescriptions issue only after appropriate screening.",
            "Aligned with UK expectations for obesity pharmacotherapy eligibility.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Privacy and customer care</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Fully online consultations, confidential records, discreet shipping, and{" "}
          <strong>phone and email support</strong> are highlighted for patients who prefer low visibility
          treatment paths.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Advantages versus traditional in-person clinics</p>
        <Points
          items={[
            "No travel requirement for core consultation steps.",
            "Faster access narrative versus long waiting lists in some regions.",
            "Often lower headline cost than premium private clinic bundles.",
            "Home-based administration of the whole pathway.",
            "Flexible treatment plans tailored to individual goals.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>End-to-end service bundle</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing presents an integrated stack: consultation, prescription, medicine supply,
          delivery, and ongoing support without juggling multiple disconnected vendors.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Who should consider this pharmacy</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Suitable readers may include people who struggled with diet-only approaches, want medically
          supervised GLP-1 or dual incretin therapy, value privacy and speed, live far from specialist
          clinics, or need structured digital follow-up through a portal.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Do I need to live in London?",
              a: "No. The name reflects branding; delivery is marketed as nationwide across the UK.",
            },
            {
              q: "How fast is next-day delivery?",
              a: "It typically applies after clinical approval and pharmacy release; islands, weather, and stock can extend windows.",
            },
            {
              q: "Is the two-minute questionnaire enough for everyone?",
              a: "Complex histories may trigger longer reviews or extra questions before prescribing.",
            },
            {
              q: "Weekly injections versus monthly billing?",
              a: "You inject on the weekly schedule your prescriber sets; subscription packaging may still bill monthly—align both in your diary.",
            },
            {
              q: "How do I avoid counterfeit pens?",
              a: "Use only GPhC-registered pharmacies with visible clinical screening; avoid marketplace sellers offering prescription injectables without assessment.",
            },
            {
              q: "Should I tell my NHS GP?",
              a: "Shared care and blood monitoring are easier when your GP knows what you take; ask your clinician how correspondence is handled.",
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
          My London Pharmacy competes on <strong>regulated supply</strong>,{" "}
          <strong>rapid discreet logistics</strong>, <strong>portal-based continuity</strong>, and{" "}
          <strong>monthly pricing themes</strong> for modern injectable obesity medicines. Stack their
          live quote against Health Wise comparison tables and keep safety screening documentation
          handy if your NHS team coordinates care.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit My London Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
