"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://thecarepharmacy.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function TheCarePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="The Care Pharmacy"
      fileRef="HW-THECAREPHARMACY-2026"
      title="The Care Pharmacy (UK): Digital Weight Loss Clinic, Multi Product Range and Tracked Delivery"
      subtitle="GPhC registered pharmacy with Bradford and Lowmoor premises framing online consultations, multiple injectable and oral obesity medicines, temperature controlled dispatch and tiered Royal Mail or DPD options. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Daily injectable alternatives · Orlistat · Saxenda where listed"
      providerName="The Care Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "The Care Pharmacy (GPhC 9010308 — verify Bradford / Lowmoor premises on register)",
        },
        {
          k: "Model",
          v: "Product page consultation · UK prescriber review · electronic prescription · GPhC dispensing · courier delivery",
        },
        {
          k: "Fulfilment",
          v: "Royal Mail Tracked 24 / Special Delivery · DPD next day · discreet outer wrap · cold chain for injectables",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/The Care Pharmacy.webp"
      heroProviderLogoAlt="The Care Pharmacy"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-slate-900">Why research The Care Pharmacy?</strong> Every online pharmacy has a distinct approach to patient care, pricing, and medication delivery. This independent dossier breaks down how The Care Pharmacy handles weight management consultations, offering you a clear look at their service structure so you can compare it against your personal health needs and preferences.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Lasting weight change rarely comes from fad diets alone; many adults need clinician approved
          medicines plus structured follow up.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            The Care Pharmacy
          </a>{" "}
          markets itself as a fully regulated UK pharmacy blending digital clinics, pharmacist oversight and
          nationwide delivery so patients can start treatment without a face to face GP visit.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise captures how they communicate product breadth, workflow, logistics and pricing themes,
          including low price guarantee messaging on selected lines such as Mounjaro in promotional copy.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Who they present themselves as</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            The Care Pharmacy describes <strong>GPhC registered pharmacies</strong> in{" "}
            <strong>Bradford</strong> and <strong>Lowmoor</strong> supervised by superintendent pharmacists.
            Their website hosts condition specific clinics spanning weight loss alongside men’s and women’s
            health and chronic disease support, signalling pharmacy grade governance rather than informal
            resellers.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Weight loss catalogue (marketing)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Rather than a single SKU, listings span multiple authorised medicines subject to suitability:
        </p>
        <Points
          items={[
            "Mounjaro weekly tirzepatide pens from about £149.99 depending on strength or pack.",
            "Wegovy weekly semaglutide pens from about £99.99 in cited summaries.",
            "Nevolat daily injection alternative from about £124.99.",
            "Orlistat 120 mg capsules from about £39.99.",
            "Saxenda injectable option near £279.99 in illustrative pricing.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Programmes emphasise <strong>free consultations</strong>, ongoing advice, diet tailoring,
          hydration and glucose coaching where relevant, and professional follow ups so medication sits
          inside broader habit change.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Five step fulfilment story</p>
        <Points
          items={[
            "Choose a medicine such as Mounjaro or Wegovy and finish a short encrypted consultation.",
            "A UK prescriber or pharmacist prescriber reviews responses under pharmacy regulations, requesting clarification if needed.",
            "Approved cases receive an electronic prescription flowing through The Care Pharmacy dispensing systems.",
            "Staff pack orders with cold chain materials for injectables or letterbox friendly packs for standard tablets when safe.",
            "Couriers deliver to your chosen UK address; refrigerated items may need signature handover.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Privacy, cold chain and secure receipt</p>
        <Points
          items={[
            "Plain outer packaging without branding that reveals contents.",
            "Temperature controlled cartons for cold medicines plus patient instructions to refrigerate promptly.",
            "Signature requirements on refrigerated or controlled drug shipments to avoid unattended drops.",
            "Nationwide coverage with NHS prescription delivery noted as free while private lanes offer paid speed tiers.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Stated delivery tiers</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          <strong>Royal Mail Tracked 24</strong> is portrayed as a standard lane arriving in about{" "}
          <strong>one to three working days</strong>, often <strong>free above £40</strong>.{" "}
          <strong>Royal Mail Special Delivery</strong> or <strong>DPD next day</strong> targets{" "}
          <strong>next working day before noon</strong> with fees near <strong>£9.99</strong> in marketing.
          Many orders <strong>dispatch within 24 hours of approval</strong>, though cold lines may limit
          dispatch to weekdays to avoid weekend spoilage. Tracking notifications help patients plan receipt,
          especially for cold shipments.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Budget planning</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Medicine bands repeat the figures above across SKUs. Delivery may be <strong>free over £40</strong>
            , roughly <strong>£3.99</strong> tracked under that threshold, or <strong>about £9.99</strong> for
            premium next day. Consultations are commonly marketed as <strong>free</strong>, leaving medication
            plus postage as the cash outlay.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Value narrative</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Promotions highlight <strong>competitive injectable pricing</strong>, occasional{" "}
            <strong>price match or guarantee language</strong> on flagship GLP-1 SKUs, and transparent listing
            of carriage thresholds so patients can optimise basket size.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why The Care Pharmacy says it stands out</p>
        <Points
          items={[
            "GPhC regulated supply chain with named superintendent pharmacists.",
            "Straightforward online consultations without mandatory GP visits.",
            "Fast discreet fulfilment via trusted carriers.",
            "Broad portfolio spanning injectables and oral therapies.",
            "Ongoing dietetic style tips and pharmacist accessible support.",
            "Clear shelf pricing with free delivery breakpoints.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is The Care Pharmacy regulated?",
              a: "They promote GPhC registration with physical pharmacies in Bradford and Lowmoor; confirm superintendent details on the official register.",
            },
            {
              q: "Which GLP-1 medicines appear?",
              a: "Marketing lists Mounjaro and Wegovy alongside other injectable and oral options; prescribing remains suitability based.",
            },
            {
              q: "How fast is delivery?",
              a: "Tracked 24 is cited as roughly one to three working days; paid next day options target before noon with cold chain friendly dispatch windows.",
            },
            {
              q: "Are consultations charged?",
              a: "Promotional copy often describes consultations as free with payment focused on medicines and shipping.",
            },
            {
              q: "Do injectables ship cold?",
              a: "Yes, insulated packaging is advertised with instructions to refrigerate immediately after delivery.",
            },
            {
              q: "What price anchors appear for Mounjaro?",
              a: "Summaries cite from about £149.99 depending on dose; compare Health Wise tables for your strength.",
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
          The Care Pharmacy blends breadth (multiple GLP-1 and oral SKUs), pharmacist led governance,
          transparent illustrative pricing from roughly £39.99 tablets to higher tier injectables, and
          logistics that scale from economical tracked post to paid next day cold chain. If you want choice
          inside one GPhC umbrella, their dossier belongs next to the other UK listings on Health Wise.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit The Care Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
