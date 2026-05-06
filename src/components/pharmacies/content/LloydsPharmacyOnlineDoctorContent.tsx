"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://onlinedoctor.lloydspharmacy.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function LloydsPharmacyOnlineDoctorContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Lloyds Pharmacy Online Doctor"
      fileRef="HW-LLOYDS-OD-2026"
      title="Lloyds Pharmacy Online Doctor (UK): Mounjaro, Wegovy, Tablets, Coaching and Delivery"
      subtitle="Clinician led online weight loss service under the LloydsPharmacy brand: prescription injections and tablets, optional nutrition coaching, consultation and delivery options, indicative costs. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · Orlistat · Xenical · nutrition coaching (optional)"
      providerName="Lloyds Online Doctor"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Lloyds Pharmacy Online Doctor (GPhC 9011437 — verify dispensing premises)",
        },
        {
          k: "Treatments",
          v: "Mounjaro · Wegovy · Orlistat · Xenical · 12 week nutrition coaching (optional)",
        },
        {
          k: "Fulfilment",
          v: "Home · ParcelShop · same day LloydsPharmacy collect (stock/cut off) · cold chain injectables",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Lloyds Pharmacy.webp"
      heroProviderLogoAlt="Lloyds Pharmacy"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-blue-900">About Lloyds Online Doctor:</strong> Navigating online weight loss treatments can be complex. Lloyds Online Doctor is one of several UK-registered services offering prescription medication alongside professional guidance. Before proceeding with any treatment, it is essential to review the specific fulfillment policies, consultation requirements, and support structures that Lloyds Online Doctor provides.</p></div>
        <p className="text-slate-800 leading-relaxed">
          When you want prescription weight loss treatment in the UK, the provider needs to be
          trustworthy and regulated. Lloyds Pharmacy Online Doctor is positioned as part of the
          wider LloydsPharmacy brand: an online, clinician led route that supplies medically
          appropriate medicines after assessment, with delivery to your home or another chosen
          address so you can avoid a physical clinic visit if you are suitable for remote care.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Public messaging says the service fits people who struggle with diet and exercise alone,
          need prescription only support, want a confidential digital pathway, and prefer
          professional backing alongside medication. Health Wise summarises how that pathway is
          described on{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            onlinedoctor.lloydspharmacy.com
          </a>
          . Confirm eligibility, prices, and cut offs there before you pay.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Weight loss products and coaching</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="font-semibold text-slate-900">Prescription injections</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            <strong>Mounjaro (tirzepatide).</strong> Weekly injection positioned for appetite
            control, glucose regulation, and slower digestion. Marketing cites suitability for adults
            with BMI 30 or higher, or 27 or higher with weight related health conditions. Clinical
            averages in trials are described as substantial when medication is paired with diet and
            activity change. Multiple strengths are listed with prices that rise by dose, for
            example from around <strong>£179.99</strong> upward in public examples up to roughly{" "}
            <strong>£309.99</strong> bands depending on strength.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Wegovy (semaglutide).</strong> Weekly injection framed as reducing hunger and
            slowing digestion for qualifying patients, again alongside lifestyle change. Multiple
            dosage options appear in listings from around <strong>£99.99</strong> upward through
            higher dose packs (marketing cites up to roughly <strong>£289.99</strong> depending on
            strength).
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Benefits commonly listed for injectables include better appetite control, longer term
            weight change when combined with healthy diet and physical activity, and evidence from
            clinical studies. Supply remains conditional on a qualified clinician after a full
            consultation.
          </p>
          <p className="mt-4 font-semibold text-slate-900">Prescription tablets</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            <strong>Orlistat 120mg.</strong> Blocks absorption of roughly up to a third of dietary
            fat; typically taken three times daily with meals. Example packs are quoted around{" "}
            <strong>£50.00</strong> for 28 days and <strong>£140.00</strong> for 84 days.
          </p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            <strong>Xenical 120mg.</strong> Branded orlistat class option with similar positioning and
            pricing band to generic listings.
          </p>
          <p className="mt-4 font-semibold text-slate-900">Nutrition coaching</p>
          <p className="mt-2 text-slate-800 leading-relaxed">
            Optional structured support over about <strong>12 weeks</strong>, priced around{" "}
            <strong>£65.00</strong> in marketing copy, with tailored advice, meal ideas, and
            motivational resources intended to help you get more from medication led weight
            management.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Consultation, review, prescribing, aftercare</p>
        <div className="mt-3 space-y-4 text-slate-800 leading-relaxed">
          <p>
            <strong>Online questionnaire.</strong> Described as secure and roughly five minutes,
            covering health, BMI, history, and goals. Some patients may need to upload a short video
            for ID and measured weight to support safety.
          </p>
          <p>
            <strong>Clinician review.</strong> UK clinicians with NHS experience assess suitability
            and safety. Extra verification steps may apply when BMI or identity checks need
            clarification.
          </p>
          <p>
            <strong>After approval.</strong> You can order medication when prescribed. Messaging to
            clinicians is available, with same day style responses often quoted for messages sent{" "}
            <strong>before 4pm</strong>. Follow up support, reorder reminders, and progress checks
            are part of the continuity story rather than a one off script only.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Delivery and logistics</p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Next day style delivery</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Often about <strong>£4.95 to £5.95</strong>. Orders approved before{" "}
              <strong>5pm Monday to Friday</strong> commonly aim for arrival within one to two working
              days. Weekend or late approvals usually roll to early the next week.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Standard delivery</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              <strong>Free</strong> in many funnels, typically <strong>five to seven working days</strong>.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">ParcelShop collection</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Free standard ParcelShop pickup in about <strong>three to four days</strong>; next day
              ParcelShop tier around <strong>£2.95</strong> where offered.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Same day collection</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              May be available from a local LloydsPharmacy store when product is in stock and you
              order before <strong>5pm</strong>. Not guaranteed at every branch or SKU.
            </p>
          </div>
        </div>
        <p className="mt-4 text-slate-800 leading-relaxed">
          Delivery is described as discreet and compliant. Injectables such as Wegovy may ship with
          temperature controlled packaging. Tracking helps you plan receipt. Some medicines must go
          to your home rather than a third party address for correct handling. If a parcel is lost
          or stolen <strong>after</strong> delivery, refunds may not apply, so planned receipt
          matters.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Service timing and ongoing support</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Clinicians often respond same day to messages sent before 4pm. Prescription approval and
          shipping are described as quick enough to enable next day delivery in many cases, with
          standard delivery when you are not urgent or want zero postage.
        </p>
        <Points
          items={[
            "Direct messaging through treatment where offered.",
            "Reorder reminders and interval style progress checks.",
            "Optional nutrition coaching add on.",
            "FAQs and lifestyle guidance for side effect awareness.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Likely costs</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>New consultation</strong> often from around <strong>£69.99</strong>, sometimes
            with introductory offers. <strong>Mounjaro</strong> illustrative bands about{" "}
            <strong>£179.99 to £309.99</strong> by strength. <strong>Wegovy</strong> about{" "}
            <strong>£99.99 to £289.99</strong>. Tablets as above. Coaching about{" "}
            <strong>£65</strong> for 12 weeks. Add delivery (next day fees above, standard free)
            plus repeats for a realistic monthly budget.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Why buyers cite this route</p>
          <Points
            items={[
              "Qualified UK prescribers after structured assessment.",
              "Fully remote pathway from consultation to parcel.",
              "Several fulfilment options including ParcelShop and store collect.",
              "Cold chain aware shipping for injectables when required.",
              "Messaging and reminders rather than silent repeat supply.",
              "Brand familiarity and pharmacy infrastructure versus anonymous sellers.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Safety notes</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-800 leading-relaxed">
          <li>Injections and tablets are prescription only: proper consultation is mandatory.</li>
          <li>
            Avoid unregulated &quot;cheap&quot; listings online that skip clinical oversight or sell
            unknown stock.
          </li>
          <li>
            GLP-1 and orlistat class drugs need planned monitoring for appetite, digestion, and
            glucose effects where relevant.
          </li>
        </ul>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Do I ever need to visit a GP surgery first?",
              a: "The pathway is built to be remote for suitable patients, with digital verification when required. Your GP may still need to know about medicines for coordinated care.",
            },
            {
              q: "Is nutrition coaching required?",
              a: "It is described as optional structured support for patients who want dietary coaching alongside medication.",
            },
            {
              q: "Why does next day mention 5pm approval?",
              a: "Cut offs tie dispatch to pharmacy working hours. Late or weekend approvals usually slip to the next working window.",
            },
            {
              q: "Can Wegovy go to a ParcelShop?",
              a: "Some medicines may be restricted to home delivery for handling reasons. Read the options your checkout offers for that SKU.",
            },
            {
              q: "How do I compare Lloyds with other UK providers?",
              a: "Match dose and pen count on Health Wise tables, then add consultation, coaching, and postage lines from each basket.",
            },
            {
              q: "Where do I verify pharmacy registration?",
              a: "Use GPhC pharmacy search with the premises linked from Lloyds Online Doctor support pages.",
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
          Lloyds Pharmacy Online Doctor packages regulated consultation, a broad prescription menu
          from injectables to tablets, flexible fulfilment, transparent fee bands for consultation
          and postage, and continuity through messaging and optional coaching. For readers who want a
          recognised UK pharmacy brand with experienced clinicians and temperature aware injectable
          logistics, it is a mainstream option to weigh against other dossiers on Health Wise.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Lloyds Online Doctor
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
