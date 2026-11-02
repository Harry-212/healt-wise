"use client";

import { dossierOfferProps } from "@/lib/data/providers";
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
import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check";

const providerUrl = "/go/solira";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function SoliraPharmacyContent() {
  const { discountCode, hasDiscount, discountCodeLabel, secondaryDiscount, offerTerms } =
    dossierOfferProps("solira");
  return (
    <PharmacyDossierPage
      slugLabel="Solira"
      fileRef="HW-SOLIRA-2026"
      title="Solira Weight Loss UK | Prices & Delivery"
      subtitle="Independent provider review of Solira (QuickCare Pharmacy, GPhC 9013213): pharmacist-led weight management programme, Mounjaro, Wegovy & Foundayo treatment options, clinical consultations, tracked cold-chain delivery fees, and monthly treatment costs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Wegovy tablets · Foundayo · Pharmacist consultations · Royal Mail Tracked delivery"
      providerName="Solira"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Checked", v: PRICE_CHECK_DATE_LONG },
        {
          k: "Provider",
          v: "QCP1 Ltd, trading as Solira (QuickCare Pharmacy)",
        },
        { k: "GPhC Reg", v: "9013213" },
        { k: "Superintendent", v: "Jimah Alsaai MPharm" },
        {
          k: "Location",
          v: "Office 115 & 116, Millennium Business Centre, 3 Humber Road, London NW2 6DW",
        },
        { k: "Website", v: "withsolira.com" },
        {
          k: "Pathway",
          v: "Online medical questionnaire · Pharmacist assessment · Direct prescription dispensing",
        },
        {
          k: "Fulfilment",
          v: "Royal Mail Tracked 24 chilled pack (£3.99 for injections) · Royal Mail Tracked 48 (£2.99 for tablets)",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      discountCodeLabel={discountCodeLabel}
      secondaryDiscount={secondaryDiscount}
      offerTerms={offerTerms}
      heroProviderWordmark="Solira"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-emerald-900/15 bg-emerald-50/70 p-5 shadow-sm sm:p-6">
          <p className="text-base leading-relaxed text-slate-800">
            Solira provides a transparent, pharmacist-led weight management service for eligible UK adults. Mounjaro pens start from £119.99 (2.5mg), Wegovy injections start from £64.99 (0.25mg), Wegovy oral tablets start from £79.99 (1.5mg), and Foundayo oral tablets start from £79.99 (0.8mg). Pharmacist clinical assessment is included in all published prices. Compare full dose prices below, or see our comprehensive{" "}
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

        {/* Live Mounjaro & Wegovy Tables */}
        <PharmacyPriceTable slug="solira" providerName="Solira" />

        {/* Additional Oral Treatments: Wegovy Tablets & Foundayo */}
        <div className="my-8 overflow-hidden rounded-xl border border-emerald-900/15 bg-white shadow-sm ring-1 ring-emerald-950/5">
          <div className="border-b border-emerald-900/10 bg-emerald-50/70 px-5 py-4 sm:px-6">
            <h2 className="text-base font-bold text-emerald-950 sm:text-lg">
              Solira Oral Weight Loss Tablets Pricing (30-Day Supply)
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Prices verified as of {PRICE_CHECK_DATE_LONG}. Includes pharmacist consultation. £2.99 Royal Mail Tracked 48 delivery charged at checkout.
            </p>
          </div>

          <div className="grid divide-y divide-slate-100 md:grid-cols-2 md:divide-x md:divide-y-0">
            {/* Wegovy Tablets Column */}
            <div className="p-5 sm:p-6">
              <span className="mb-4 block font-bold text-slate-900">
                Wegovy Pill (30 Tablets)
              </span>
              <div className="space-y-2">
                {[
                  { dose: "1.5mg (30 tabs)", price: "£79.99" },
                  { dose: "4mg (30 tabs)", price: "£94.99" },
                  { dose: "9mg (30 tabs)", price: "£114.99" },
                  { dose: "25mg (30 tabs)", price: "£169.99" },
                ].map((item) => (
                  <div
                    key={item.dose}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 px-3.5 py-2 text-sm"
                  >
                    <span className="font-medium text-slate-700">{item.dose}</span>
                    <span className="font-bold text-slate-900">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Foundayo Column */}
            <div className="p-5 sm:p-6">
              <span className="mb-4 block font-bold text-slate-900">
                Foundayo Tablet (30 Tablets)
              </span>
              <div className="space-y-2">
                {[
                  { dose: "0.8mg (30 tabs)", price: "£79.99" },
                  { dose: "2.5mg (30 tabs)", price: "£84.99" },
                  { dose: "5.5mg (30 tabs)", price: "£89.99" },
                  { dose: "9mg (30 tabs)", price: "£107.99" },
                  { dose: "14.5mg (30 tabs)", price: "£134.99" },
                  { dose: "17.2mg (30 tabs)", price: "£139.99" },
                ].map((item) => (
                  <div
                    key={item.dose}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 px-3.5 py-2 text-sm"
                  >
                    <span className="font-medium text-slate-700">{item.dose}</span>
                    <span className="font-bold text-slate-900">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-emerald-100 bg-emerald-50/40 p-5 shadow-sm">
          <p className={paragraphClass}>
            <strong className="text-slate-950">About Solira:</strong> Finding the right support for weight loss can feel confusing, particularly when there are so many online providers offering different treatments and prices. Solira is a UK online pharmacy service offering a pharmacist-led weight management programme designed to make accessing appropriate treatment straightforward and convenient. Through its online service, Solira provides online consultations reviewed by a pharmacist and access to prescription weight management treatments (consultations are pharmacist-led, not with a doctor), including injections and tablets for eligible adults. Its focus is on responsible prescribing, clear pricing and helping patients understand their available options.
          </p>
        </div>
      </section>

      {/* What Is the Programme */}
      <section className="space-y-3">
        <p className={sectionLabel}>What Is the Solira Weight Loss Programme?</p>
        <p className={paragraphClass}>
          The Solira weight loss programme combines online health assessments with professional pharmacy care. Rather than requiring patients to attend an initial appointment in person, Solira allows individuals to complete a confidential medical questionnaire from home. A registered pharmacist reviews their health information, existing medication, and weight management needs before deciding whether treatment is clinically suitable.
        </p>
        <p className={paragraphClass}>
          This approach appeals to people who want the convenience of an online service while retaining professional clinical oversight throughout their treatment. Solira also provides educational information to help patients understand the importance of healthy nutrition, physical activity, and sustainable lifestyle changes.
        </p>
      </section>

      {/* Treatments Offered */}
      <section className="space-y-3">
        <p className={sectionLabel}>What Weight Loss Treatments Does Solira Offer?</p>
        <p className={paragraphClass}>
          Solira lists several weight management options, including weekly injectable pens and oral daily tablets:
        </p>
        <Points
          items={[
            "Mounjaro (tirzepatide): Weekly dual GIP/GLP-1 receptor agonist pens across all titration doses (2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, and 15mg).",
            "Wegovy (semaglutide): Weekly GLP-1 receptor agonist pens (0.25mg up to 2.4mg maintenance, and 7.2mg multi-pen bundles).",
            "Wegovy oral tablets: Daily semaglutide tablet formulation (1.5mg, 4mg, 9mg, and 25mg 30-day supplies).",
            "Foundayo oral tablets: Daily tablet therapy (0.8mg, 2.5mg, 5.5mg, 9mg, 14.5mg, and 17.2mg 30-day supplies).",
            "Orlistat 120mg capsules: Lipase inhibitor capsules for suitable patients.",
          ]}
        />
        <p className={paragraphClass}>
          Each medicine functions differently, and clinical suitability depends upon personal health profile, contraindications, and prescriber assessment. Treatment availability must be confirmed at the time of ordering.
        </p>
      </section>

      {/* Online Consultation Steps */}
      <section>
        <p className={sectionLabel}>How Does the Solira Online Consultation Work?</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Step 1: Complete the online consultation questionnaire. Patients submit details regarding their height, weight, medical background, concurrent medications, and weight management objectives.",
              "Step 2: Pharmacist clinical assessment. A General Pharmaceutical Council (GPhC) registered pharmacist evaluates the clinical history and may request further details before approving a prescription.",
              "Step 3: Tracked medication delivery. Upon approval, treatment is dispensed and dispatched directly to the patient's address using a tracked courier service in temperature-controlled packaging.",
            ]}
          />
        </HazardBox>
      </section>

      {/* Pricing & Maintenance */}
      <section className="space-y-3">
        <p className={sectionLabel}>How Much Does Solira Weight Loss Treatment Cost?</p>
        <p className={paragraphClass}>
          Solira operates a transparent pricing model with published rates for each treatment strength. Standard advertised pricing includes the pharmacist clinical consultation. Importantly, Solira maintains the same transparent price for each strength across both initial orders and repeat maintenance orders, rather than relying on short-lived introductory discount schemes that increase sharply on subsequent refills.
        </p>
        <p className={paragraphClass}>
          Patients should budget for the full course of treatment, as prices adjust according to the prescribed maintenance dose strength.
        </p>
      </section>

      {/* Delivery Charges */}
      <section className="space-y-3">
        <p className={sectionLabel}>Does Solira Charge for Delivery?</p>
        <p className={paragraphClass}>
          Yes. Solira applies transparent, itemised delivery charges:
        </p>
        <Points
          items={[
            "Weight loss injection pens: £3.99 per order via Royal Mail Tracked 24 in insulated, cold-chain packaging to protect medication integrity.",
            "Weight loss oral tablets & capsules: £2.99 per order via Royal Mail Tracked 48.",
            "Dispatch timing: Orders are typically dispatched within one working day following pharmacist clinical sign-off.",
            "Discreet packaging: All shipments arrive in plain, discreet parcels to preserve patient privacy.",
          ]}
        />
      </section>

      {/* Clinical Governance */}
      <section className="space-y-4">
        <p className={sectionLabel}>Clinical Governance &amp; GPhC Registration</p>
        <p className={paragraphClass}>
          Solira is the online service of <strong>QuickCare Pharmacy</strong>, owned by <strong>QCP1 Ltd</strong> (trading as Solira). The dispensing pharmacy is registered with the General Pharmaceutical Council under premises registration number <strong>9013213</strong>.
        </p>
        <p className={paragraphClass}>
          The Superintendent Pharmacist is <strong>Jimah Alsaai MPharm</strong>, who holds personal responsibility for clinical oversight, consultation reviews, and safe dispensing protocols. Patients can independently verify registration records on the official GPhC pharmacy register.
        </p>
        <p className={paragraphClass}>
          Clinical eligibility criteria generally require an adult BMI of 30 kg/m² or above, or an initial BMI of 27 kg/m² or above with documented weight-related co-morbidities (e.g. hypertension, dyslipidaemia, or obstructive sleep apnoea), subject to clinical contraindication screening.
        </p>
      </section>

      {/* Ongoing Support */}
      <section className="space-y-3">
        <p className={sectionLabel}>Ongoing Pharmacist Support</p>
        <p className={paragraphClass}>
          Patients have direct access to pharmacist guidance throughout their treatment pathway. Patients can securely message clinicians via their online account to ask questions regarding titration, side-effect management, and ongoing treatment safety. Solira also provides lifestyle and nutritional guidance to support long-term metabolic health.
        </p>
      </section>

      {/* CTA Section */}
      <section className="mt-8 rounded-xl border border-emerald-900/15 bg-emerald-50/70 p-6 text-center">
        <h3 className="text-lg font-bold text-emerald-950 sm:text-xl">
          Ready to begin your consultation with Solira?
        </h3>
        <p className="mt-2 text-sm text-slate-700">
          Complete an online health assessment reviewed by a GPhC-registered pharmacist, with tracked chilled UK delivery.
        </p>
        <div className="mt-5 flex justify-center">
          <ProviderCta
            url={providerUrl}
            name="Solira"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Start Consultation with Solira
          </ProviderCta>
        </div>
      </section>

      <RelatedPharmacyLinks currentSlug="solira" />
    </PharmacyDossierPage>
  );
}
