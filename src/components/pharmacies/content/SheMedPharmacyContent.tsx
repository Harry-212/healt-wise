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

const providerUrl = "/go/shemed";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function SheMedPharmacyContent() {
  const discountCode = "HEALTH20";
  const hasDiscount = true;

  return (
    <PharmacyDossierPage
      slugLabel="SheMed"
      fileRef="HW-SHEMED-2026"
      title="SheMed Weight Loss Review: Women's Programme, Prices & Delivery"
      subtitle="Independent provider review of SheMed: women's weight management programme, clinical consultations, included at-home blood testing, GPhC registered partner dispensing, delivery fees and monthly treatment costs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Wegovy oral tablet · at-home blood testing · doctor support · discreet UK delivery"
      providerName="SheMed"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Checked", v: "23 October 2026" },
        {
          k: "Provider",
          v: "SheMed (pharmacy fulfilment by eMed Healthcare UK Limited)",
        },
        { k: "GPhC", v: "9012578" },
        { k: "Superintendent", v: "Yee Lai (GPhC 2207949)" },
        { k: "CQC Provider", v: "1-1690359844" },
        {
          k: "Location",
          v: "184 Drummond Street, London, NW1 3HP",
        },
        {
          k: "Pathway",
          v: "Online health assessment · included at-home blood test · clinical review by UK-registered prescribers",
        },
        {
          k: "Fulfilment",
          v: "Discreet next-day delivery included (advertised £0.00 standard delivery)",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/shemed.webp"
      heroProviderLogoAlt="SheMed Women's Health & Weight Management"
      heroProviderLogoClassName="h-10 w-auto max-w-[min(100%,18rem)] object-contain object-center sm:h-12 md:h-14 md:max-w-[min(100%,22rem)]"
      heroProviderLogoUnoptimized
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-emerald-900/15 bg-emerald-50/70 p-5 shadow-sm sm:p-6">
          <p className="text-base leading-relaxed text-slate-800">
            SheMed offers introductory weight loss plans starting from £59 on longer commitment terms, with Mounjaro starting from £179 (first month, £229 standard retail) and Wegovy from £79 (first month, £139 standard retail). Operates in partnership with eMed Healthcare UK Ltd (GPhC 9012578, CQC 1-1690359844). View full dose-by-dose prices below, or see our comprehensive{" "}
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
            rankings.
          </p>
        </div>

        <PharmacyPriceTable slug="shemed" providerName="SheMed" />

        <div className="mb-6 rounded-xl border border-pink-100 bg-pink-50/40 p-5 shadow-sm">
          <p className={paragraphClass}>
            <strong className="text-slate-950">About SheMed:</strong> Losing weight can be challenging, particularly when hormonal changes, perimenopause, a busy lifestyle, or underlying health conditions make progress more difficult. SheMed is a UK online weight management provider offering a medically supervised weight loss programme developed specifically for women. Unlike services that focus mainly on supplying medication, SheMed combines clinical consultations, at-home blood testing, personalised treatment plans, and continuous support.
          </p>
        </div>

        <p className={paragraphClass}>
          Healthwise360 users can take advantage of an exclusive{" "}
          <strong>20% discount on their first order</strong> using voucher code{" "}
          <span className="font-mono font-bold text-emerald-900 bg-emerald-100/70 px-1.5 py-0.5 rounded">HEALTH20</span>.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How the SheMed programme works</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Step 1: Complete an online health assessment. Patients answer questions about weight, medical history, existing medicines, and lifestyle factors to establish initial suitability.",
              "Step 2: Complete the included blood test. SheMed provides an at-home blood screening kit to evaluate relevant biomarkers and safety indicators before medication is approved.",
              "Step 3: Receive treatment and ongoing clinical care. If clinically approved, medication is dispatched for discreet next-day delivery. Patients track progress, complete check-ins, and message clinicians via the SheMed mobile app.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>What is included in the SheMed programme</p>
        <Points
          items={[
            "At-home biomarker blood screening and comprehensive clinical assessment.",
            "Introductory pricing with code HEALTH20 for 20% off your initial order.",
            "Free discreet next-day medication delivery (£0.00 standard delivery charge).",
            "Personalised weight management guidance tailored to women's hormonal health.",
            "Ongoing access to UK-registered clinicians and prescribers.",
            "Progress monitoring and structured check-ins via the dedicated SheMed app.",
            "Nutritional guides, recipe plans, lifestyle coaching, and side-effect care package.",
            "Access to an engaged online women's support community.",
          ]}
        />
      </section>

      <section className="space-y-4">
        <p className={sectionLabel}>Clinical governance, GPhC registration &amp; CQC</p>
        <p className={paragraphClass}>
          SheMed partners with <strong>eMed Healthcare UK Limited</strong>, a UK pharmacy registered with the General Pharmaceutical Council under premises registration number <strong>9012578</strong> (Superintendent Pharmacist: Yee Lai, GPhC registration 2207949). Clinical consultations, health screenings, and prescribing services are provided under Care Quality Commission (CQC) regulation (Provider ID: 1-1690359844). All clinicians are UK-registered and licensed.
        </p>
        <p className={paragraphClass}>
          Eligibility criteria typically include a BMI of 30 or above, or a BMI of 27 or above alongside relevant weight-related risk factors, subject to clinical history, blood test results, and prescriber discretion.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-emerald-900/15 bg-emerald-50/70 p-6 text-center">
        <h3 className="text-lg font-bold text-emerald-950 sm:text-xl">
          Ready to explore SheMed&apos;s women-focused weight loss programme?
        </h3>
        <p className="mt-2 text-sm text-slate-700">
          Apply voucher code <strong className="font-mono">HEALTH20</strong> at checkout to receive 20% off your first month, including at-home blood testing and free delivery.
        </p>
        <div className="mt-5 flex justify-center">
          <ProviderCta
            url={providerUrl}
            name="SheMed"
            copyCode="HEALTH20"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit SheMed
          </ProviderCta>
        </div>
      </section>

      <RelatedPharmacyLinks currentSlug="shemed" />
    </PharmacyDossierPage>
  );
}
