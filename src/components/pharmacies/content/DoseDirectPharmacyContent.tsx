"use client";

import Link from "next/link";
import {
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
  ProviderCta,
} from "./_dossier";

const providerUrl =
  "https://questionnaire.semble.io/eb4dacb08b394c9c1a9ea4f4d0be2cb1a9c4cd2c";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function DoseDirectPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="DoseDirect"
      fileRef="HW-DOSEDIRECT-2026"
      title="DoseDirect weight management review"
      subtitle="Independent provider review of DoseDirect: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · online questionnaire · prescriber review · delivery"
      providerName="DoseDirect"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "DoseDirect (GPhC-registered distance-selling pharmacy — registration number to be confirmed)",
        },
        {
          k: "Pathway",
          v: "Online clinical questionnaire · review by a pharmacist independent prescriber",
        },
        {
          k: "Fulfilment",
          v: "Same-day dispatch before 1pm Mon–Fri · tracked, cold-chain delivery",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className={paragraphClass}>
          DoseDirect is a GPhC-registered UK distance-selling pharmacy
          offering private online weight-management treatment, including
          Mounjaro and Wegovy. Its pharmacist-led service includes an online
          clinical questionnaire and review by a pharmacist independent
          prescriber before treatment is approved.
        </p>
        <p className={paragraphClass}>
          DoseDirect aims to keep pricing simple and competitive, with no
          separate consultation fee added to routine weight-loss orders.
          Patients are only invoiced once the prescriber is satisfied that
          treatment is clinically appropriate. Health Wise also lets you{" "}
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
            For eligible orders paid before 1pm Monday to Friday, DoseDirect
            offers same-day dispatch, excluding weekends and bank holidays.
            Medication is sent using tracked delivery, with appropriate
            cold-chain packaging where required.
          </p>
          <p className={paragraphClass}>
            Ongoing clinical support includes dose reviews, side-effect
            advice and access to the clinical team when needed. Patients can
            contact DoseDirect by phone, email and WhatsApp, with the team
            aiming to respond to emails within one working day.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Why choose DoseDirect?</p>
        <div className="mt-3 space-y-4">
          <Points
            items={[
              "Simple pricing — no separate consultation fee on routine weight-loss orders, invoicing only after clinical approval",
              "Tracked delivery — same-day dispatch for eligible orders paid before 1pm on working days, with appropriate packaging",
              "Ongoing clinical support — pharmacist-led dose reviews, side-effect advice and contact by phone, email or WhatsApp",
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
            href="https://www.pharmacyregulation.org/registers/pharmacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-800 underline-offset-2 hover:underline"
          >
            GPhC register
          </a>
          .
        </p>
        <ProviderCta
          url={providerUrl}
          name="DoseDirect"
          className={`${PHARMACY_PROVIDER_CTA_CLASSNAME} mt-4`}
        >
          Visit DoseDirect
        </ProviderCta>
      </section>
    </PharmacyDossierPage>
  );
}
