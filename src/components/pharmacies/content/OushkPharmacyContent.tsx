"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.oushkpharmacy.com/online-doctor/weight-loss";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function OushkPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Oushk Pharmacy"
      fileRef="HW-OUSHK-2026"
      title="Oushk Pharmacy Weight Loss (UK): Online Doctor, GLP-1 Pathways and Scheduled Delivery"
      subtitle="Online doctor led obesity care with health questionnaire, video verification, UK prescriber review, injectable and oral options, flexible couriers, next-day claims, and discreet packaging. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · GLP-1 injectables · oral options"
      providerName="Oushk Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Oushk Pharmacy (GPhC 9012610 — verify premises on register)",
        },
        {
          k: "Pathway",
          v: "Online doctor · video ID and weight check · prescription if suitable · scheduled delivery",
        },
        {
          k: "Fulfilment",
          v: "DPD · Royal Mail tracked · signature options · next-day UK (advertised) · discreet outer pack",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-slate-900">Why research Oushk Pharmacy?</strong> Every online pharmacy has a distinct approach to patient care, pricing, and medication delivery. This independent dossier breaks down how Oushk Pharmacy handles weight management consultations, offering you a clear look at their service structure so you can compare it against your personal health needs and preferences.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Demand for safe, medically supervised weight loss online keeps rising.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Oushk Pharmacy
          </a>{" "}
          markets a patient first service that pairs clinical expertise with convenience, discretion,
          and personalisation rather than anonymous checkout supply.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Weight is framed as a long term condition shaped by metabolism, hormones, lifestyle, and
          mental wellbeing, not a single weekend fix. Support runs from first consultation toward
          maintenance so results are described as sustainable when medical and behaviour pieces align.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Fully online convenience</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          The pathway is <strong>100% online</strong> for core steps: health assessment, video
          consultation for verification where used, prescription approval, medication order, and home
          delivery, reducing GP surgery visits while keeping professional oversight.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Step-by-step: how Oushk works</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "1. Online health consultation covering medical history, current medicines, weight, BMI, lifestyle, and goals.",
              "2. Identity and weight verification through a short video consultation in many funnels, supporting UK prescribing standards and reducing misuse.",
              "3. Clinical assessment by a UK registered prescriber who judges safety, suitability, expected outcomes, and side effect risk.",
              "4. Treatment selection after approval, including injectable GLP-1 style medicines or oral tablets and capsules where listed.",
              "5. Ordering and checkout with the ability to pick a delivery date that suits you in marketing copy.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Treatments described</p>
        <Points
          items={[
            "Weekly injections that mimic hormones controlling hunger.",
            "Daily injections for appetite control where offered.",
            "Tablet based medicines that reduce fat absorption for patients who prefer non-injectable routes.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          All options are <strong>prescription only</strong>, requiring proper medical supervision.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Ongoing support</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Beyond dispensing, Oushk promotes regular check ins, side effect advice, maintenance
          consultations, and long term weight management planning so care continues after the first box.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Safety and regulation</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing highlights UK registered prescribers and pharmacists, compliance with regulatory
          expectations, assessment before prescribing, and ongoing monitoring. The service is described
          as registered with the <strong>General Pharmaceutical Council (GPhC)</strong>, which matters
          when counterfeit or unsafe online sellers remain a concern.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Privacy</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Confidential consultations, secure data handling, and plain unbranded outer packaging with no
          obvious contents labelling support patients who want discretion at home and in shared post
          areas.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery options and logistics</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Patients can choose between several methods in promotional copy, including{" "}
          <strong>courier delivery such as DPD</strong>, <strong>Royal Mail tracked services</strong>,
          and <strong>special delivery</strong> options that may require signature. Each option balances
          speed, cost, and security differently.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Next-day delivery across the UK</strong> is advertised for many orders. After approval,
          pharmacies dispatch quickly and patients can often select a delivery date, sometimes scheduling
          weeks or months ahead when planning continuity.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Tracking:</strong> email tracking numbers, live tracking, and in some cases delivery
          time slots help you plan to be home for signature or cold chain receipt.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Managing delivery to your address</p>
        <Points
          items={[
            "Verify the delivery address at checkout; changes may be possible before dispatch depending on policy.",
            "Choose preferred delivery dates and methods where the booking tool allows.",
            "If delivery fails, couriers may redeliver or return the parcel to the pharmacy; a small redelivery fee may apply.",
            "Sensitive medicines use packaging aimed at stability; minimise transit delays and sign promptly when required.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Typical service speed</p>
        <Points
          items={[
            "Consultation completed the same day in many cases.",
            "Clinical review often within about 24–48 hours.",
            "Approval and checkout immediately after a positive decision.",
            "Dispatch shortly after approval.",
            "Delivery often next day depending on courier product and postcode.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Estimated costs</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Total cost depends on medicine type, dose, duration, and delivery option. Illustrative UK
            private ranges in supporting material often sit around <strong>£40–£100 per month</strong>{" "}
            for some tablet plans and <strong>£150–£300+ per month</strong> for injectable programmes.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Consultation fees may be included or discounted on first orders; delivery fees may be free
            or bundled depending on promotion. Value arguments centre on medical supervision,
            personalisation, reliable logistics, and follow-up rather than being the absolute lowest
            sticker price online.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Why digital obesity care is growing</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Long NHS waits, demand for faster access, and preference for home based care drive uptake.
            That growth makes choosing a <strong>regulated</strong> provider with visible prescribing
            standards more important, not less.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Benefits in summary</p>
        <Points
          items={[
            "Convenience: end-to-end online management.",
            "Medical safety: qualified professionals review cases.",
            "Personalisation: plans tailored to individual needs.",
            "Discretion: private packaging and confidential service.",
            "Speed: next-day options on many lanes.",
            "Ongoing support: advice, monitoring, follow-ups.",
            "Flexible scheduling: choose delivery dates that fit your diary.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is video verification only for new patients?",
              a: "Video checks focus on onboarding verification in marketing copy; repeat pathways may differ—read the current policy.",
            },
            {
              q: "What if I miss the courier?",
              a: "Failed delivery may trigger redelivery fees or return to pharmacy; cold chain pens can be harmed by repeated delays.",
            },
            {
              q: "Can I reschedule months ahead?",
              a: "Promotional text mentions advanced scheduling for some delivery types; confirm in the booking UI.",
            },
            {
              q: "DPD versus Royal Mail?",
              a: "Choose based on speed, signature needs, and your postcode; tracking follows the active carrier.",
            },
            {
              q: "Is Oushk suitable for mild overweight?",
              a: "Eligibility follows medical criteria and prescriber judgement, not marketing interest alone.",
            },
            {
              q: "How do I verify registration?",
              a: "Cross-check GPhC and premises details against the legal entity name on your dispensing paperwork.",
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
          Oushk Pharmacy targets patients who accept <strong>structured verification</strong> and{" "}
          <strong>scheduled logistics</strong> in exchange for regulated supply, courier choice, and
          ongoing clinical framing. Compare all-in monthly costs on Health Wise with the same Mounjaro
          or Wegovy dose you actually need, and read redelivery rules before you book a tight travel
          week.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Oushk Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
