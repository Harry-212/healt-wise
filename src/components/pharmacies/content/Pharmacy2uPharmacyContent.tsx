"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.pharmacy2u.co.uk/online-doctor/weight-loss";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function Pharmacy2uPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Pharmacy2U"
      fileRef="HW-PHARMACY2U-2026"
      title="Pharmacy2U (UK): Mounjaro, Wegovy, Saxenda — Online Doctor Weight Loss"
      subtitle="Official dossier: one of the UK’s largest online pharmacies, GPhC plus CQC-regulated presentation, online doctor assessments, GLP-1 and Orlistat pathways, express delivery economics, two-month supply option for established patients, privacy and indicative private cost bands (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Saxenda · Orlistat"
      providerName="Pharmacy2U"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Pharmacy2U (GPhC 9010146 — verify premises; CQC where applicable)",
        },
        {
          k: "Pathway",
          v: "Online doctor questionnaire · UK clinician review · prescription if suitable",
        },
        {
          k: "Fulfilment",
          v: "Tracked express delivery (fees vary) · discreet packaging · home address",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/pharmacy2u.webp"
      heroProviderLogoAlt="Pharmacy2U"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Pharmacy2U publicly positions itself among the <strong>UK’s largest and most established</strong>{" "}
          online pharmacies, serving regulated healthcare to a very large patient base. The
          weight-loss lane combines <strong>online doctor</strong> access with pharmacy dispensing —
          a digital-first model for people who want clinician review without a face-to-face GP slot,
          and who value privacy and speed narratives.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Regulation in marketing copy is often described as both{" "}
          <strong>General Pharmaceutical Council (GPhC)</strong> pharmacy standards and{" "}
          <strong>Care Quality Commission (CQC)</strong> oversight for relevant regulated activities —
          always re-check badges and register entries on the official sites rather than third-party
          summaries alone.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Clinically referenced weight-loss treatments</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Their weight-loss doctor lane lists prescription medicines (not generic supplements),
          commonly including:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-800 leading-relaxed">
          <li>
            <strong>Mounjaro</strong> (tirzepatide) and <strong>Wegovy</strong> (semaglutide) — GLP-1
            class injectables with appetite and glycaemic effects per SmPC.
          </li>
          <li>
            <strong>Saxenda</strong> (liraglutide) — daily injectable in the same broad drug class in
            marketing materials.
          </li>
          <li>
            <strong>Orlistat</strong> tablets — oral fat-absorption pathway for suitable patients who
            may not be candidates for injectables or who prefer tablets.
          </li>
        </ul>
        <p className="mt-3 text-slate-800 leading-relaxed">
          GLP-1–based treatments are described as reducing appetite, increasing satiety, slowing
          gastric emptying, and supporting glucose control; trial and real-world outcomes vary widely
          by individual, dose, adherence, and lifestyle support — your prescriber applies eligibility
          rules, not marketing headlines.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Personalised treatment plans</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Before any medication, their pathway requires an online consultation covering medical history,
          weight and BMI, existing conditions, and lifestyle context. A UK-based clinician is said to
          review answers and determine suitability, aiming for safe prescribing, appropriate product
          choice, and ongoing monitoring or adjustments rather than a one-size-fits-all retail
          checkout.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Simple online process (step-by-step)</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Online consultation — questionnaire on health and weight goals.",
              "Clinical review — UK clinician reviews answers, sometimes within a few hours in marketing copy.",
              "Prescription issued — if suitable.",
              "Medication dispensed — pharmacy prepares the order.",
              "Home delivery — treatment sent to your chosen UK address.",
            ]}
          />
        </HazardBox>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Their marketing explicitly removes the need for GP appointments, pharmacy visits for collection,
          and long waiting times in the narrative — operational reality still depends on stock,
          clinician capacity, and courier performance.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Fast delivery service</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Delivery options publicised include <strong>tracked 24-hour</strong> and{" "}
          <strong>48-hour</strong> services plus <strong>click &amp; collect</strong> where offered.
          For online doctor prescriptions including weight loss, express delivery is often
          highlighted so medication arrives soon after approval. Review timelines are
          sometimes quoted around <strong>four hours</strong>, with <strong>next-day</strong>{" "}
          delivery after dispatch in many cases — confirm current cut-off times on Pharmacy2U.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Discreet packaging and address delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Medications are described as shipped in discreet, unbranded packaging with tracked delivery,
          dispatch updates, and home or chosen-address delivery — useful for confidentiality, but
          still plan someone to receive cold-chain pens promptly.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Flexible delivery costs</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          They separate product lanes clearly: for online doctor weight loss, <strong>express delivery</strong>{" "}
          is cited around <strong>£6.25 per order</strong> (verify at checkout). For private
          prescriptions more broadly, orders <strong>under £40</strong> may attract delivery fees
          while <strong>over £40</strong> may qualify for free delivery in some marketing tiers.{" "}
          <strong>NHS prescription</strong> delivery is described as completely free — do not confuse
          NHS repeat pathways with private online doctor weight-loss checkout lines.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Transparent treatment costs (illustrative)</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Illustrative public price bands sometimes seen in category copy: Wegovy injections starting roughly{" "}
            <strong>£129–£199 per month</strong> at lower strengths, with higher strengths up to
            around <strong>£289</strong> in cited examples. Mounjaro from approximately{" "}
            <strong>£179+ per month</strong>. Overall private treatment is bracketed around{" "}
            <strong>£150–£290 per month</strong> depending on drug and dose — includes consultation,
            prescription, and support narrative in the positioning.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Value for money — what the bundle claims to cover</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Their pricing story states you are paying for qualified clinician access, safe prescribing,
            ongoing advice, fast home delivery, and regulated care — compared to in-person private
            clinics, digital models often advertise lower travel cost and faster turnaround, but
            monthly drug cost still dominates long-term budgets.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Eligibility and safe prescribing</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Typical marketing eligibility mirrors other UK private providers: BMI over 30, or over 27
          with related health conditions. Monitoring and dose changes are tied to progress and
          side-effect reporting in responsible pathways.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Ongoing support, education, and two-month supply</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          They highlight expert advice access, educational resources, and holistic support
          alongside medication. For <strong>existing patients</strong>, a <strong>two-month supply</strong>{" "}
          option is described after clinical assessment — fewer consultations and fewer interruptions,
          but only where prior use and safety review justify it.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Privacy and innovation narrative</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Confidential consultations, secure data handling, and discreet delivery are emphasised for
          sensitive weight topics. Public announcements also mention continuous innovation and partnerships
          (digital weight programmes, personalised pathways) — treat partnership announcements as
          evolving; confirm what is live on Pharmacy2U today.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Comparison to traditional services</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Typical positioning contrasts Pharmacy2U with traditional clinics on access (online versus
          appointment), speed (same-day review narrative versus days or weeks), delivery (home versus
          collection), privacy (high versus moderate), and convenience (very high versus lower). Those
          axes are positioning statements — your own GP may still be essential for coordinated care.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Outcomes language (marketing caution)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Promotional pages sometimes reference strong early-month results and significant aggregate weight loss across
          users. Health Wise does not verify outcome statistics; individual
          results vary and medical obesity management should be supervised.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is the online doctor weight-loss lane the same as NHS repeats?",
              a: "No. NHS prescription delivery is a separate product line with different pricing (often free). Use the correct URL and checkout path for private weight-loss treatment.",
            },
            {
              q: "Why does express delivery add roughly £6.25?",
              a: "That figure is a commonly quoted ballpark for online doctor weight loss on their lane — courier surcharges change; read the basket breakdown every time you order.",
            },
            {
              q: "Can I get two months of Mounjaro immediately?",
              a: "The two-month supply is described for existing patients after clinical approval — new starters should expect shorter initial supplies while response is assessed.",
            },
            {
              q: "How do GLP-1 injectables differ from Orlistat?",
              a: "Different mechanisms, side-effect profiles, and eligibility. The clinician chooses based on your history — you cannot assume interchangeability.",
            },
            {
              q: "How should I compare monthly cost with other pharmacies?",
              a: "Match drug, strength, pens per month, and included services; use Health Wise Mounjaro, Wegovy, and Saxenda comparison pages.",
            },
            {
              q: "Does Pharmacy2U replace NHS specialist obesity services?",
              a: "Private online access is complementary in some journeys and insufficient in others — severe comorbidity or complex mental-health contexts may need multidisciplinary NHS care.",
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
        <p className={sectionLabel}>Conclusion</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Overall, Pharmacy2U presents as a <strong>high-trust UK digital</strong>{" "}
          route: regulated framing (GPhC/CQC), personalised clinician-led plans, fast reviews and
          next-day-style delivery claims, transparent-ish private pricing bands, Orlistat plus GLP-1
          breadth, optional two-month continuity, and strong privacy positioning. Validate every fee
          and dose price at checkout and against Health Wise comparisons before committing.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Pharmacy2U
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
