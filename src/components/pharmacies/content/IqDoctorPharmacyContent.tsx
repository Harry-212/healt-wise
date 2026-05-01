"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.iqdoctor.co.uk/treatments/weight-loss/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function IqDoctorPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="IQ Doctor"
      fileRef="HW-IQ-DOCTOR-2026"
      title="IQ Doctor (UK): Mounjaro, Wegovy, Saxenda, Orlistat and Xenical with Online Prescribing"
      subtitle="How IQ Doctor combines online consultation, UK prescriber review, regulated pharmacy dispensing, and tracked delivery for weight loss medicines. Indicative prices, cold chain, reviews, and what to check before you order. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · Saxenda · Orlistat · Xenical · supplies"
      providerName="IQ Doctor"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "IQ Doctor (GPhC 9010411 — verify dispensing premises on register)",
        },
        {
          k: "Treatments",
          v: "Mounjaro · Wegovy · Saxenda · Orlistat · Xenical · ancillaries (where listed)",
        },
        { k: "Fulfilment", v: "Royal Mail / DPD · tracked · cold chain for injectables when required" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/iq doctor.webp"
      heroProviderLogoAlt="IQ Doctor"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          IQ Doctor runs as a UK online pharmacy and healthcare channel for people who want
          prescription weight loss treatment without visiting a walk in clinic first. The route is
          deliberately structured: you complete a questionnaire, a UK based prescriber decides if
          medicine is appropriate, and a UK pharmacy dispatches to your address if you are approved.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise maps that model here so you can compare it with other providers. Nothing on
          this page replaces the product copy, eligibility rules, or live prices on{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            iqdoctor.co.uk
          </a>
          , and nothing here is personal medical advice.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>What is listed in the weight loss category</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Public category pages group injections and tablets together. Lines that commonly appear
            include:
          </p>
          <Points
            items={[
              "Mounjaro (tirzepatide): weekly GLP-1/GIP injection where prescribed.",
              "Wegovy (semaglutide): weekly GLP-1 injection widely used for weight management.",
              "Saxenda (liraglutide): daily injectable option for some patients.",
              "Orlistat 120mg: generic fat absorption limiting tablets.",
              "Xenical 120mg: branded or generic orlistat style supply where offered.",
              "Ancillaries: needles, sharps disposal containers, and related supplies where appropriate.",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            These medicines are used because many patients report feeling fuller for longer, fewer
            cravings, and easier calorie control when therapy is combined with diet and activity
            change. Individual response still varies by dose, adherence, side effects, and medical
            context.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Easy access through consultation and review</p>
        <div className="mt-3 space-y-4 text-slate-800 leading-relaxed">
          <p>
            <strong>Online consultation.</strong> You start with a confidential health questionnaire
            covering medical history, current medicines, and lifestyle. That is the information a
            prescriber needs before any prescription only product is considered.
          </p>
          <p>
            <strong>Prescriber review.</strong> UK based qualified prescribers assess whether a
            weight loss medicine is appropriate and safe. This is the regulatory line between
            marketing interest and legal supply.
          </p>
          <p>
            <strong>Prescription approval.</strong> If approved, the prescription is sent to a UK
            registered pharmacy for dispensing. If the prescriber decides treatment is not
            suitable, the order is declined and you are usually refunded rather than receiving
            silent supply.
          </p>
          <p>
            <strong>Clinical safety.</strong> Treatments sit behind clinical review so supply is
            not treated like a retail basket checkout. That matters for mobility limits, busy
            schedules, or patchy access to local services, but it does not remove the need for your
            own GP to stay in the loop where you have complex conditions.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Regulation and why it matters in this market</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          IQ Doctor describes itself as operating within UK pharmaceutical law, with medicines
          dispensed from UK pharmacy premises and oversight from qualified prescribers. In a market
          where unregulated sellers and social media listings appear, that framing is about genuine
          medicine, lawful prescribing, and storage handled by professionals rather than anonymous
          reshippers.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Always cross check the exact supplying pharmacy and superintendent on the{" "}
          <a
            href="https://www.pharmacyregulation.org/registers/pharmacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            GPhC register
          </a>{" "}
          before you pay, even if a third party article praises the brand.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Injections versus tablets</p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Injection pens</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Mounjaro, Wegovy, and Saxenda are aimed at different cadences (weekly versus daily) and
              different clinical profiles. Pens are designed for home use with titration and
              monitoring. Evidence for weight change is strongest when medication sits alongside
              sustained habit change, not instead of it.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Orlistat and Xenical</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Oral options limit dietary fat absorption and can sit at a lower headline price than
              injectables for some patients. Mechanism, side effects, and monitoring differ from GLP-1
              pens, so suitability is still a prescriber decision.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Delivery methods, timing, and cold chain</p>
        <div className="mt-3 space-y-3 text-slate-800 leading-relaxed">
          <p>
            After approval, IQ Doctor typically arranges delivery through Royal Mail and DPD style
            services, with tracked options and temperature controlled packing when injectables need
            it.
          </p>
          <Points
            items={[
              "Royal Mail Standard First Class: often quoted around one to two working days after dispatch.",
              "Royal Mail Special Delivery: options such as by 1pm or by 11am next working day where offered.",
              "DPD next working day: where available after dispatch.",
              "Timelines are measured from prescription approval and dispatch, not from the moment you first open the form.",
              "Orders approved before 3pm on a working day are often dispatched the same day; after 3pm, weekends, or bank holidays usually move to the next working day.",
            ]}
          />
          <p>
            Cold chain packs commonly use insulated materials and pharmacy grade ice packs. IQ Doctor
            also recommends receiving cold chain parcels in person where possible, so parcels are not
            left on a step where heat or sun swings temperature.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>How delivery to your address is managed</p>
        <Points
          items={[
            "Checkout asks for precise address details so medication routes to the right door.",
            "Tracked services let you and the pharmacy team monitor progress after dispatch.",
            "Temperature sensitive lines may require signature or in person receipt to protect integrity.",
            "If delivery fails, parcels often return to a depot. IQ Doctor states they cannot replace items that may have breached safe temperature limits because of a missed delivery, which is why planning receipt matters.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Indicative UK prices (verify at checkout)</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Public listings often show starting points such as{" "}
            <strong>Mounjaro from about £174.99</strong>, <strong>Wegovy from about £122.99</strong>,{" "}
            <strong>Orlistat 120mg from about £19.99</strong>, <strong>Xenical from about £34.99</strong>
            , <strong>Saxenda from about £50.99</strong>, and small ancillaries around{" "}
            <strong>£2.49 to £2.99</strong>. Dose, pack size, and promotions change totals.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Bulk buys, referral schemes, and promotional windows sometimes reduce headline cost.
            Always read the basket line by line.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Reviews and reputation (balanced)</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Independent platforms such as Trustpilot often show a strong overall score for IQ Doctor,
            frequently cited around <strong>4.6 out of 5</strong>, with praise for fast delivery and
            straightforward ordering.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Negative threads sometimes mention premium delivery not matching the paid tier,
            occasional communication friction, or refund and support accessibility. Read a spread of
            recent dated reviews, not only the top line rating.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Benefits shoppers often associate with IQ Doctor</p>
        <Points
          items={[
            "Fully online consultation and prescribing pathway without a clinic visit.",
            "UK regulated dispensing narrative with prescriber gatekeeping.",
            "Tracked and express capable delivery through familiar carriers.",
            "Cold chain style packaging for sensitive injectables.",
            "Broad catalogue spanning injections, tablets, and small supplies.",
            "Competitive positioning on headline prices versus many other UK private listings.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Before you buy: practical checks</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-800 leading-relaxed">
          <li>Every product is prescription only. Approval exists for your safety and legal compliance.</li>
          <li>
            Temperature sensitive packs need a sensible receipt plan. Missed deliveries can waste a
            pen as well as money.
          </li>
          <li>Weight outcomes vary with metabolism, adherence, diet, and activity.</li>
          <li>Use your prescriber and the PIL as the primary instructions for use and when to seek help.</li>
        </ul>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is IQ Doctor only for injections?",
              a: "No. Public menus usually list GLP-1 style pens and oral options such as Orlistat or Xenical, always subject to approval.",
            },
            {
              q: "Which carriers are used?",
              a: "Royal Mail and DPD style tracked services are commonly described. Exact carrier and service level depend on stock, postcode, and checkout selection.",
            },
            {
              q: "What if I am not approved?",
              a: "The stated model is decline rather than unsafe supply, with refund pathways. Confirm the current policy text on site.",
            },
            {
              q: "Does the 3pm cut off apply every day?",
              a: "Same day dispatch rules usually refer to working days and exclude weekends and bank holidays. Read the live dispatch banner when you order.",
            },
            {
              q: "How should I compare price with other pharmacies?",
              a: "Match molecule, strength, and pens per month, then use Health Wise comparison tables plus the provider basket.",
            },
            {
              q: "Why does in person receipt matter for injectables?",
              a: "Temperature stability can be lost on a sunny porch or shared hallway. Signature or attended delivery reduces that risk.",
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
          IQ Doctor fits the familiar UK pattern of online intake, prescriber review, pharmacy
          fulfilment, and courier delivery, with extra attention wherever cold chain applies. For
          many readers that is exactly the bundle they want: legitimate supply without a physical
          clinic visit, provided the clinical bar stays real rather than cosmetic.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          No service is perfect. Delivery and support edge cases exist everywhere. If you want a
          wide weight loss formulary with transparent carrier options, IQ Doctor is a reasonable name
          to shortlist next to other GPhC backed routes, then verify today&apos;s rules, prices, and
          registration yourself.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit IQ Doctor
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
