"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.theindependentpharmacy.co.uk/weight-loss";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function TheIndependentPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="The Independent Pharmacy"
      fileRef="HW-INDEPENDENTPHARMACY-2026"
      title="The Independent Pharmacy (UK): Regulated Weight Loss, Assessment and Tracked Delivery"
      subtitle="UK online pharmacy highlighting dual GPhC and CQC oversight, clinician reviewed questionnaires, discreet fulfilment with tiered speeds, free delivery thresholds and pharmacist reachable support. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Orlistat · Other approved lines where listed"
      providerName="The Independent Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "The Independent Pharmacy (GPhC 9012559 — verify premises on register)",
        },
        {
          k: "Model",
          v: "Browse treatment · short assessment · UK clinician and pharmacist review · dispatch after approval",
        },
        {
          k: "Fulfilment",
          v: "Plain packaging · cold-chain where needed · Royal Mail style tiers · SMS/email tracking",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/independent pharmacy.webp"
      heroProviderLogoAlt="The Independent Pharmacy"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-slate-900">Why research The Independent Pharmacy?</strong> Every online pharmacy has a distinct approach to patient care, pricing, and medication delivery. This independent dossier breaks down how The Independent Pharmacy handles weight management consultations, offering you a clear look at their service structure so you can compare it against your personal health needs and preferences.</p></div>
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            The Independent Pharmacy
          </a>{" "}
          positions itself among fully regulated UK digital pharmacies supplying prescription weight treatments
          with clinical review, discreet logistics and patient centred service. Demand for GLP‑1 therapies has
          attracted unsafe sellers; their narrative leans on statutory oversight as the counterweight.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise distils how their public materials describe assessments, carriage menus, pricing themes
          and safeguards compared with informal marketplaces.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulation and prescribing stance</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Marketing cites inspection by the <strong>General Pharmaceutical Council</strong> and{" "}
            <strong>Care Quality Commission</strong>. Prescription medicines, including injectable GLP‑1
            products, are presented as available only after an online medical assessment reviewed by qualified{" "}
            <strong>UK doctors and pharmacists</strong>. That framework aims to block counterfeit channels and
            ensure personalised suitability rather than anonymous checkout.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Ordering sequence</p>
        <Points
          items={[
            "Browse the weight loss category for medicines such as Mounjaro, Wegovy or Orlistat with visible pricing.",
            "Complete a brief health questionnaire before purchase approval.",
            "UK clinicians and pharmacists review responses; approved patients finish payment.",
            "Orders often dispatch the same day when placed before a stated cutoff (around 15:00 in summaries).",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The pathway removes GP bookings and retail queues, which matters for mobility limits, tight diaries
          or privacy preferences.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Delivery handling</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Parcels ship in <strong>plain discreet wrapping</strong>. Injectable lines that need cooling use{" "}
          <strong>appropriate insulated packaging</strong>. Once dispatched, email or SMS trackers often
          include ETA style windows. Coverage is described as UK wide with remote postcodes sometimes seeing
          longer estimates.
        </p>
        <div className="mt-4 rounded-md border border-slate-200/90 bg-white/80 p-4 text-sm text-slate-800">
          <p className="font-semibold text-slate-900">Published carriage bands (illustrative)</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
            <li>Special Delivery next working day — about £8.99</li>
            <li>Express 1–2 working days — about £4.99</li>
            <li>Standard 2–3 working days — about £2.99</li>
            <li>Free delivery on orders over about £40 depending on method selected</li>
          </ul>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing and value framing</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Product pages display injection and capsule pricing directly. Oral therapies generally open at
            lower monthly bands than GLP‑1 pens. Carriage stays between roughly <strong>£3 and £9</strong>{" "}
            unless you clear <strong>£40 baskets</strong> for free shipping on qualifying selections. Value is
            argued through bundled clinical review without surprise consultation invoices, pharmacist contact
            channels, and careful handling of sensitive medicines.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Access and support themes</p>
          <Points
            items={[
              "24/7 browsing and assessment availability.",
              "Free clinical support in UK working hours.",
              "Repeat ordering simplified after first approval.",
              "Reviews often praise prompt fulfilment and responsive service.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Safety versus non regulated sellers</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          UK regulators repeatedly warn about fake injectables sold via social media. The Independent Pharmacy
          contrasts that risk with genuine cold chain storage, legitimate prescribing and ongoing counselling
          on side effects, reinforcing that GLP‑1 agents remain prescription only territory.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Benefits recap (marketing summary)</p>
        <Points
          items={[
            "Clinical safety via GPhC plus CQC frameworks.",
            "Convenient rapid digital access with same day dispatch narratives.",
            "Affordable delivery tiers and £40 free postage threshold.",
            "Transparent tracking and discreet packs.",
            "Positive customer feedback on speed and professionalism.",
            "Protection from unverified sellers pushing illicit stock.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Who regulates The Independent Pharmacy?",
              a: "Their materials reference both GPhC pharmacy regulation and CQC oversight — confirm details on official registers.",
            },
            {
              q: "Do I need a GP referral?",
              a: "No — the advertised journey is online assessment, clinician approval and courier delivery or equivalent fulfilment.",
            },
            {
              q: "How fast is dispatch?",
              a: "Marketing claims same-day dispatch for many orders approved before roughly 15:00.",
            },
            {
              q: "When is delivery free?",
              a: "Orders above about £40 often qualify for £0 delivery depending on the shipping method you pick.",
            },
            {
              q: "Are injections temperature controlled?",
              a: "Yes — promotional copy promises suitable insulated transit for injectable therapies.",
            },
            {
              q: "Can I speak to a pharmacist?",
              a: "Support access during UK working hours is highlighted as part of the service proposition.",
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
          The Independent Pharmacy blends dual regulator storytelling, brisk fulfilment claims, pharmacist
          reachable support and tiered tracked delivery that stays inexpensive or free above typical monthly
          prescription totals. If that operational style fits your expectations, benchmark their live basket
          against Health Wise tables for each GLP‑1 strength you need.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit The Independent Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
