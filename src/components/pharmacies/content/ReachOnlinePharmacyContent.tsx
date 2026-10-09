"use client";

import Link from "next/link";
import {
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
  ProviderCta,
} from "./_dossier";

const providerUrl = "https://reachonlinepharmacy.com/weight-loss/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function ReachOnlinePharmacyContent() {
  const discountCode = "Welcome10health";
  const hasDiscount = true;

  return (
    <PharmacyDossierPage
      slugLabel="Reach Online Pharmacy"
      fileRef="HW-REACH-2026"
      title="Reach Online Pharmacy weight management review"
      subtitle="Independent provider review of Reach Online Pharmacy: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · online questionnaire · clinician review · delivery"
      providerName="Reach Online Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Reach Online Pharmacy (GPhC-registered pharmacy, registration number 1093332)",
        },
        {
          k: "Pathway",
          v: "Online clinical questionnaire · review by UK-registered clinicians",
        },
        {
          k: "Fulfilment",
          v: "Royal Mail/courier tracked delivery · orders approved by 4pm dispatched next day",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Reach Online Pharmacy.webp"
      heroProviderLogoAlt="Reach Online Pharmacy"
      heroProviderLogoClassName="h-10 w-auto max-w-[min(100%,20rem)] object-contain object-center sm:h-12 md:h-14 md:max-w-[min(100%,24rem)]"
    >
      <section className="space-y-4">
        <p className={paragraphClass}>
          Reach Online Pharmacy is a UK-based, GPhC-registered pharmacy
          offering prescription weight-loss treatments, including Mounjaro
          and Wegovy injections. Patients complete an online medical
          assessment, reviewed by UK-registered clinicians, before any
          prescription is issued.
        </p>
        <p className={paragraphClass}>
          Reach is part of a bricks-and-mortar pharmacy group trading for
          over 30 years. Health Wise also lets you{" "}
          <Link
            href="/mounjaro-price-comparison"
            className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
          >
            compare UK Mounjaro pharmacy prices
          </Link>{" "}
          and{" "}
          <Link
            href="/wegovy-price-comparison"
            className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
          >
            compare Wegovy pharmacy prices
          </Link>{" "}
          when checking ongoing treatment costs.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Dispatch and ongoing support</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            Orders approved by 4pm are dispatched the next day, using Royal
            Mail or courier tracked delivery. Delivery is charged separately
            from the treatment price: standard delivery (2-3 days) costs
            £4.99, tracked 24/48-hour delivery costs £5.99, and guaranteed
            1pm next-day delivery for temperature-controlled products costs
            £9.99.
          </p>
          <p className={paragraphClass}>
            Reach includes a short online clinical consultation with every
            order, needles and a sharps container where required, and access
            to a progress-checker app for ongoing monitoring.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Why choose Reach Online Pharmacy?</p>
        <div className="mt-3 space-y-4">
          <Points
            items={[
              "Established pharmacy group — bricks-and-mortar pharmacies trading for 30+ years, GPhC approved verified premises",
              "Clinical support included — short online consultation, needles and sharps container included, progress-checker app",
              "Tracked delivery — next-day dispatch for orders approved by 4pm, with a guaranteed 1pm temperature-controlled option",
            ]}
          />
        </div>
      </section>

      <PharmacyPriceCompareHint />

      <section className="rounded-md border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm leading-relaxed text-slate-700">
          Health Wise does not prescribe or sell medicines. Check live
          eligibility, pricing, delivery terms, and clinical suitability
          directly with the provider before starting any treatment. Verify
          the supplying pharmacy on the{" "}
          <a
            href="https://www.pharmacyregulation.org/registers/pharmacy/1093332"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-800 underline-offset-2 hover:underline"
          >
            GPhC register (Reach Online Pharmacy, registration 1093332)
          </a>
          .
        </p>
        <ProviderCta
          url={providerUrl}
          name="Reach Online Pharmacy"
          className={`${PHARMACY_PROVIDER_CTA_CLASSNAME} mt-4`}
        >
          Visit Reach Online Pharmacy
        </ProviderCta>
      </section>
    </PharmacyDossierPage>
  );
}
