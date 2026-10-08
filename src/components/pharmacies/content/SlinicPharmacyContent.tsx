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
  "https://slinic.co.uk/condition/weight-loss/?utm_source=healthwise&utm_medium=referral&utm_campaign=weight-loss";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function SlinicPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Slinic"
      fileRef="HW-SLINIC-2026"
      title="Slinic weight management review"
      subtitle="Independent provider review of Slinic: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · online assessment · prescriber review · delivery"
      providerName="Slinic"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Read & Simonstone Pharmacy Ltd T/A Slinic (GPhC 1033727)",
        },
        {
          k: "Pathway",
          v: "Online assessment & video consultation · review by a named prescriber",
        },
        {
          k: "Fulfilment",
          v: "UK-registered pharmacy dispensing · next-day DPD tracked delivery, £4.99",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className={paragraphClass}>
          Slinic is a UK-based pharmacy and weight-management clinic offering
          prescription weight-loss treatments, including Mounjaro and Wegovy,
          alongside clinician-led support and ongoing care. The service is
          designed for adults looking for a structured, medically supervised
          approach to weight management.
        </p>
        <p className={paragraphClass}>
          Slinic was founded by Shadeia Younis MPharmS, Superintendent
          Pharmacist and Clinical Lead, who brings more than 25 years of
          pharmacy experience. She oversees the clinic&apos;s clinical
          standards, prescribing processes and patient care. Health Wise also
          lets you{" "}
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
        <p className={sectionLabel}>The Slinic Mounjaro bundle</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            One of Slinic&apos;s notable options is its Mounjaro bundle
            package, which combines treatment with additional support and
            services to provide a more complete weight-management programme
            rather than medication alone.
          </p>
          <p className={paragraphClass}>
            Patients complete an online assessment and consultation before
            treatment is approved, with prescribing decisions made by
            qualified healthcare professionals. Slinic is registered with the
            General Pharmaceutical Council and serves eligible patients
            across the UK, with a focus on regulated prescribing, transparent
            treatment options and continued patient support.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>What&apos;s included</p>
        <div className="mt-3 space-y-4">
          <Points
            items={[
              "Fixed pricing at every dose from £129 per pen",
              "No separate consultation fee — free video consultation",
              "Free monthly clinical check-ins throughout treatment",
              "Online medical assessment reviewed by a named prescriber",
              "Free starter pack on your first 2.5 mg order — sharps bin, needles, swabs and injection guide",
              "Needles and alcohol swabs with every order, not just your first",
              "No subscription, no minimum term, no hidden fees",
              "UK-registered pharmacy dispensing",
              "Nutrition and lifestyle support",
              "Treatment progression and dose reviews",
              "Next-day tracked cold-chain delivery to every UK postcode",
              "Delivery via DPD, £4.99 (not included in the headline price)",
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
          name="Slinic"
          className={`${PHARMACY_PROVIDER_CTA_CLASSNAME} mt-4`}
        >
          Visit Slinic
        </ProviderCta>
      </section>
    </PharmacyDossierPage>
  );
}
