"use client";

import Link from "next/link";
import {
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
  ProviderCta,
} from "./_dossier";

const providerUrl = "https://pharmacyme.co.uk/go/hw360";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function PharmacyMePharmacyContent() {
  const discountCode = "hw360";
  const hasDiscount = true;

  return (
    <PharmacyDossierPage
      slugLabel="Pharmacy + Me"
      fileRef="HW-PHARMACYME-2026"
      title="Pharmacy + Me weight management review"
      subtitle="Independent provider review of Pharmacy + Me: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · online assessment · prescriber review · continuity of care"
      providerName="Pharmacy + Me"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Pharmacy + Me (operated by PHARMKG Ltd, GPhC-registered pharmacy, registration number 9012604)",
        },
        {
          k: "Pathway",
          v: "Free online clinical assessment · review by UK-registered Pharmacist Independent Prescriber",
        },
        {
          k: "Fulfilment",
          v: "Royal Mail Tracked 24 (£4.99) · plain, unbranded packaging with temperature monitoring",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/pharmacy-me.webp"
      heroProviderLogoAlt="Pharmacy + Me"
      heroProviderLogoClassName="h-10 w-auto max-w-[min(100%,20rem)] object-contain object-center sm:h-12 md:h-14 md:max-w-[min(100%,24rem)]"
      heroProviderLogoUnoptimized
    >
      <section className="space-y-4">
        <p className={paragraphClass}>
          Pharmacy + Me is an independent, UK-registered online pharmacy operated by PHARMKG Ltd (GPhC registration number 9012604), specialising in clinician-led prescription weight-management treatments including Mounjaro and Wegovy. Every patient assessment is individually reviewed by a named UK-registered Pharmacist Independent Prescriber, ensuring that treatment is approved and supplied only where clinically appropriate.
        </p>
        <p className={paragraphClass}>
          The service is built around ongoing continuity of care rather than a one-off transactional sale. Patients have direct messaging access to the clinical team at any time (with replies typically within 24 hours), potential side effects are actively monitored, and doses are regularly reviewed as treatment progresses. Healthwise360 also allows you to{" "}
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
          across all leading registered providers.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Clinical care and transparent pricing</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            Pricing at Pharmacy + Me is straightforward: a single one-off price per dose without any hidden subscription locks or recurring cancellation fees. The initial online consultation is completely free of charge, and patients are only billed if their prescription is clinically approved by the prescriber. Repeat orders undergo full clinical review, and patients switching medications (between Mounjaro and Wegovy) or transferring from another provider can do so smoothly subject to prescriber approval.
          </p>
          <p className={paragraphClass}>
            Pharmacy + Me labels, assembles, and dispenses all medications directly from its verified registered pharmacy premises in Waltham Cross / Roydon, meaning no third-party pharmacy is involved in the dispensing process.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Delivery, cold chain and packaging</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            Medications are dispatched using Royal Mail Tracked 24 at a flat rate of £4.99. Deliveries generally arrive within 24 hours of prescriber approval (for example, orders approved on a Monday typically arrive on Wednesday). All parcels are sent nationwide across the UK in discreet, unbranded packaging, accompanied by temperature-monitoring indicators and clear storage instructions.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Why choose Pharmacy + Me?</p>
        <div className="mt-3 space-y-4">
          <Points
            items={[
              "Independent GPhC-registered pharmacy — operated by PHARMKG Ltd (GPhC 9012604), dispensing directly without third-party intermediaries",
              "Named Pharmacist Independent Prescriber — individual clinical assessments with replies within 24 hours and ongoing clinical support",
              "Continuity of care model — proactive side-effect monitoring, dose reviews, and smooth medication transfers",
              "Transparent single-dose pricing — no subscriptions to cancel, free online consultation, pay only if approved",
              "Tracked cold-chain delivery — Royal Mail Tracked 24 (£4.99) in discreet, temperature-guarded packaging",
            ]}
          />
        </div>
      </section>

      <PharmacyPriceCompareHint />

      <section className="rounded-md border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm leading-relaxed text-slate-700">
          Healthwise360 does not prescribe or dispense medicines. Always verify live pricing, clinical eligibility, and delivery policies directly with the provider before starting any medical treatment. Verify Pharmacy + Me on the official{" "}
          <a
            href="https://www.pharmacyregulation.org/registers/pharmacy/9012604"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-800 underline-offset-2 hover:underline"
          >
            General Pharmaceutical Council (GPhC) register (registration number 9012604)
          </a>
          .
        </p>
        <ProviderCta
          url={providerUrl}
          name="Pharmacy + Me"
          copyCode={discountCode}
          className={`${PHARMACY_PROVIDER_CTA_CLASSNAME} mt-4`}
        >
          Visit Pharmacy + Me (Use Code hw360)
        </ProviderCta>
      </section>
    </PharmacyDossierPage>
  );
}
