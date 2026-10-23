"use client";

import Link from "next/link";
import PharmacyPriceTable from "@/components/pharmacies/PharmacyPriceTable";
import RelatedPharmacyLinks from "@/components/pharmacies/RelatedPharmacyLinks";
import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  Points,
  ProviderCta,
} from "./_dossier";

const providerUrl = "/go/i-prescribe";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function IPrescribePharmacyContent() {
  const discountCode = "First10";
  const hasDiscount = true;

  return (
    <PharmacyDossierPage
      slugLabel="i-Prescribe"
      fileRef="HW-IPRESCRIBE-2026"
      title="i-Prescribe Weight Loss Review: Mounjaro & Wegovy Prices"
      subtitle="Independent provider review of i-Prescribe Online Pharmacy: consultation process, clinical suitability checks, registered pharmacy dispensing, Royal Mail delivery fees and total treatment costs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · online medical consultation · prescriber review · GPhC registered pharmacy"
      providerName="i-Prescribe"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Checked", v: "23 October 2026" },
        {
          k: "Provider",
          v: "I Prescribe Limited trading as i-Prescribe Online Pharmacy",
        },
        { k: "GPhC", v: "9012850" },
        {
          k: "Location",
          v: "Unit 10F, Listerhills Science Park, Bradford, BD7 1HR",
        },
        {
          k: "Pathway",
          v: "Free online health assessment · individual review by qualified UK prescriber",
        },
        {
          k: "Fulfilment",
          v: "Royal Mail Tracked 48 (£4.99) / Tracked 24 (£5.99) · plain, secure packaging",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/i-prescribe.webp"
      heroProviderLogoAlt="i-Prescribe Online Pharmacy"
      heroProviderLogoClassName="h-10 w-auto max-w-[min(100%,18rem)] object-contain object-center sm:h-12 md:h-14 md:max-w-[min(100%,22rem)]"
      heroProviderLogoUnoptimized
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-emerald-900/15 bg-emerald-50/70 p-5 shadow-sm sm:p-6">
          <p className="text-base leading-relaxed text-slate-800">
            i-Prescribe supplies Mounjaro from £160 (2.5 mg) up to £340 (15 mg), and Wegovy from £129.99 (0.25 mg) up to £229.99 (2.4 mg) as of our October 2026 price review. Operating under GPhC registration 9012850, every patient assessment is clinically reviewed before medicine is dispensed. Compare pricing across all doses below, or explore our complete{" "}
            <Link
              href="/mounjaro-price-comparison"
              className="font-semibold text-emerald-800 underline hover:text-emerald-950"
            >
              Mounjaro price comparison
            </Link>{" "}
            and{" "}
            <Link
              href="/wegovy-price-comparison"
              className="font-semibold text-emerald-800 underline hover:text-emerald-950"
            >
              Wegovy price comparison
            </Link>{" "}
            tables.
          </p>
        </div>

        <PharmacyPriceTable slug="i-prescribe" providerName="i-Prescribe" />

        <div className="mb-6 rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
          <p className={paragraphClass}>
            <strong className="text-emerald-950">About i-Prescribe:</strong> Finding the right support for weight loss can feel overwhelming, especially with so many online pharmacies and treatment options available. i-Prescribe is a UK-based online pharmacy offering private weight management consultations and access to prescription weight loss treatments for eligible adults. Based in Bradford, West Yorkshire, i-Prescribe provides an online service for people across the UK who want to explore medically supervised weight management without attending an initial face-to-face appointment.
          </p>
        </div>

        <p className={paragraphClass}>
          Its clinical approach focuses on clinical suitability, responsible prescribing, and helping patients understand their treatment options before making a decision. Healthwise360 users can claim{" "}
          <strong>£10 off their first purchase</strong> with voucher code{" "}
          <span className="font-mono font-bold text-emerald-900 bg-emerald-100/70 px-1.5 py-0.5 rounded">First10</span>, and access ongoing savings on repeat orders using code{" "}
          <span className="font-mono font-bold text-emerald-900 bg-emerald-100/70 px-1.5 py-0.5 rounded">HW360</span>.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How the i-Prescribe online consultation works</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Step 1: Complete the consultation. Patients begin by answering questions about their health, height, weight, current medicines, and previous weight management experience.",
              "Step 2: Clinical assessment. An appropriate healthcare professional reviews the information provided. Additional details or supporting evidence may be requested.",
              "Step 3: Treatment decision. If prescription treatment is considered clinically suitable, an appropriate medicine is approved. Completing the consultation does not guarantee a prescription.",
              "Step 4: Discreet delivery. Approved medication is dispensed by the registered pharmacy in Bradford and delivered in plain, secure packaging.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Key features &amp; service inclusions</p>
        <Points
          items={[
            "Transparent pricing on all doses of Mounjaro (from £160) and Wegovy (from £129.99).",
            "Initial medical questionnaire and prescriber consultation included at no extra cost.",
            "£10 discount on initial purchase with code First10.",
            "Follow-up order discounts available with voucher code HW360.",
            "Fully licensed UK pharmacy registered with the General Pharmaceutical Council (GPhC 9012850).",
            "Flexible Royal Mail delivery: Tracked 48 (£4.99) or Tracked 24 (£5.99).",
            "Ongoing treatment monitoring, review check-ins, and direct patient support.",
          ]}
        />
      </section>

      <section className="space-y-4">
        <p className={sectionLabel}>Regulatory verification and patient safety</p>
        <p className={paragraphClass}>
          When considering any online weight loss pharmacy, checking its regulatory credentials is an essential step. i-Prescribe operates under General Pharmaceutical Council (GPhC) standards from premises at Unit 10F, Listerhills Science Park, Bradford, BD7 1HR, holding registration number <strong>9012850</strong>. Consumers can verify registration status on the official GPhC register.
        </p>
        <p className={paragraphClass}>
          Prescription weight management is not suitable for everyone; eligibility depends on the particular medicine, BMI, weight-related health conditions, and individual medical circumstances. i-Prescribe also considers existing medication, pregnancy or breastfeeding, and previous treatments before approving any prescription.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-emerald-900/15 bg-emerald-50/70 p-6 text-center">
        <h3 className="text-lg font-bold text-emerald-950 sm:text-xl">
          Ready to begin your consultation with i-Prescribe?
        </h3>
        <p className="mt-2 text-sm text-slate-700">
          Use code <strong className="font-mono">First10</strong> for £10 off your first order, and <strong className="font-mono">HW360</strong> for ongoing discounts.
        </p>
        <div className="mt-5 flex justify-center">
          <ProviderCta
            url={providerUrl}
            name="i-Prescribe"
            copyCode="First10"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit i-Prescribe
          </ProviderCta>
        </div>
      </section>

      <RelatedPharmacyLinks currentSlug="i-prescribe" />
    </PharmacyDossierPage>
  );
}
