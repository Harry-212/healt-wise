import Link from "next/link";
import PharmacyPriceTable from "@/components/pharmacies/PharmacyPriceTable";
import {
  HazardBox,
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

export default function SlinicPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Slinic"
      fileRef="HW-SLINIC-2026"
      title="Slinic Review: Mounjaro and Wegovy Prices"
      subtitle="Independent provider review of Slinic: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · online assessment · video consultation · prescriber review · tracked cold-chain delivery"
      providerName="Slinic"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Prices checked", v: "20 September 2026" },
        {
          k: "Provider",
          v: "Read & Simonstone Pharmacy Ltd T/A Slinic",
        },
        { k: "GPhC", v: "1033727" },
        {
          k: "Pathway",
          v: "Online assessment & free video consultation · review by a named prescriber",
        },
        {
          k: "Fulfilment",
          v: "UK-registered pharmacy dispensing · DPD 24hr tracked cold-chain delivery, £4.99",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Slinic.webp"
      heroProviderLogoAlt="Slinic"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-emerald-900/15 bg-emerald-50/70 p-5 shadow-sm sm:p-6">
          <p className="text-base leading-relaxed text-slate-800">
            Slinic sells Mounjaro from £129 (2.5 mg) to £267 (15 mg) a pen, and Wegovy from £83 (0.25 mg starter dose) to £350 (7.2 mg) a pen, at our 20 September 2026 price check. Slinic is registered with the General Pharmaceutical Council (number 1033727), and every order is clinically evaluated before medicine is dispatched. See the price for every dose below, or{" "}
            <Link
              href="/mounjaro-price-comparison"
              className="font-semibold text-emerald-800 underline hover:text-emerald-950"
            >
              compare Mounjaro prices
            </Link>{" "}
            and{" "}
            <Link
              href="/wegovy-price-comparison"
              className="font-semibold text-emerald-800 underline hover:text-emerald-950"
            >
              compare Wegovy prices
            </Link>{" "}
            at all GPhC-registered UK pharmacies.
          </p>
        </div>

        <PharmacyPriceTable slug="slinic" providerName="Slinic" />

        <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm">
          <p className="text-slate-800 leading-relaxed">
            <strong className="text-blue-900">About Slinic:</strong> Slinic is a UK-based pharmacy and dedicated weight-management clinic operating as Read &amp; Simonstone Pharmacy Ltd (GPhC 1033727). Founded and led by Shadeia Younis MPharmS—Superintendent Pharmacist and Clinical Lead with over 25 years of UK pharmacy experience—Slinic provides a clinician-supported, medically supervised pathway for adults seeking GLP-1 and dual GIP/GLP-1 treatments including Wegovy and Mounjaro.
          </p>
        </div>

        <p className="text-slate-800 leading-relaxed">
          Navigating private weight-loss prescribers online can be difficult with hidden charges and varying standards.{" "}
          <ProviderCta
            url={providerUrl}
            name="Slinic"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Slinic
          </ProviderCta>{" "}
          distinguishes itself through transparent pricing, free clinician consultations, ongoing support check-ins, and dedicated patient care without locking customers into rigid subscriptions.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>The Slinic Mounjaro &amp; Wegovy care pathway</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Step 1: Online medical assessment. A thorough consultation questionnaire capturing current weight, BMI, medical history, and concurrent medications to ensure clinical suitability.",
              "Step 2: Free video consultation. A remote video consultation with a qualified clinician to confirm identity, discuss expectations, and review health indicators.",
              "Step 3: Review by a named prescriber. Individual clinical review by a licensed healthcare professional adhering strictly to GPhC prescribing guidelines.",
              "Step 4: Dispensing & cold-chain delivery. Dispensed by Read & Simonstone Pharmacy Ltd in the UK and shipped via DPD 24-hour tracked cold-chain delivery to preserve medication efficacy.",
              "Step 5: Free monthly clinical check-ins. Continuous monitoring, dose titration advice, and dedicated clinical support as you progress on your treatment journey.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>What&apos;s included with Slinic</p>
        <Points
          items={[
            "Fixed, competitive pricing across every dose (Mounjaro from £129, Wegovy from £83).",
            "No separate consultation or prescription fee — free online video consultation included.",
            "Free starter pack on your first Mounjaro 2.5 mg order: includes sharps bin, needles, alcohol swabs, and an injection guide.",
            "Needles and alcohol swabs provided with every repeat order at no additional charge.",
            "Free monthly clinical check-ins throughout treatment to assess tolerability and titration.",
            "No mandatory subscriptions, minimum terms, or cancellation fees.",
            "Supervised by Superintendent Pharmacist Shadeia Younis MPharmS with 25+ years experience.",
            "DPD 24-hour tracked cold-chain delivery (£4.99) with full parcel tracking to every UK mainland postcode.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing snapshot</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Slinic offers some of the most competitive starter rates in the UK: <strong>Wegovy 0.25 mg starts at £83</strong>, and <strong>Mounjaro 2.5 mg starts at £129</strong>. Maintenance pens scale predictably up to £267 for Mounjaro 15 mg and £196 for Wegovy 2.4 mg.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Consultations, clinical reviews, and repeat needles are included in the price. The only separate fee is £4.99 for DPD 24-hour temperature-controlled transit.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Delivery and cold-chain safety</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Temperature stability is critical for injectable peptides like tirzepatide and semaglutide. Slinic packages pens in insulated, temperature-controlled shippers dispatched via <strong>DPD 24-hour tracked service</strong>.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Orders are tracked end-to-end with delivery time-slot notifications so you can immediately place your pen into fridge storage upon arrival.
          </p>
        </section>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Is Slinic legit?</h2>
        <p className="mt-3 leading-relaxed text-slate-800">
          Yes. Slinic is the trading name of <strong>Read &amp; Simonstone Pharmacy Ltd</strong>, registered with the General Pharmaceutical Council (GPhC) under registration number <strong>1033727</strong>. The pharmacy operates under the clinical leadership of Superintendent Pharmacist Shadeia Younis MPharmS. Every patient undergoes an online medical assessment and video consultation before any prescription-only weight-loss medication can be dispensed.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Slinic registered with the GPhC?",
              a: "Yes. Slinic operates under Read & Simonstone Pharmacy Ltd, officially registered with the General Pharmaceutical Council under GPhC registration number 1033727.",
            },
            {
              q: "Is the video consultation really free?",
              a: "Yes. Slinic includes the online video consultation and clinical review at no extra charge, without separate prescription administration fees.",
            },
            {
              q: "What comes in the free starter pack?",
              a: "First-time Mounjaro 2.5 mg orders include a complimentary starter kit featuring a sharps bin, pen needles, alcohol swabs, and an instructional injection guide.",
            },
            {
              q: "How much is delivery for Slinic orders?",
              a: "Delivery is £4.99 via DPD 24-hour tracked cold-chain courier to ensure temperature-sensitive pens arrive safely and ready for refrigeration.",
            },
            {
              q: "Do I have to sign up for a monthly subscription?",
              a: "No. Slinic does not require long-term subscriptions or lock-in contracts. You can order pens per dose titration or clinical need without surprise charges.",
            },
          ].map((f) => (
            <div key={f.q} className="border-t border-slate-200/70 pt-4 first:border-t-0 first:pt-0">
              <h3 className="font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-slate-800 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <p className={sectionLabel}>Closing view</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Slinic combines <strong>verified GPhC pharmacy regulation</strong>, <strong>experienced pharmacist leadership</strong>, <strong>highly competitive starter pricing</strong>, and <strong>practical patient perks</strong> like free video consults and included starter supplies. As an approved Featured Partner on Healthwise360, Slinic provides an excellent option for patients seeking structured, transparent UK weight-management care.
        </p>
        <div className="mt-6">
          <ProviderCta url={providerUrl} name="Slinic" className={`${PHARMACY_PROVIDER_CTA_CLASSNAME}`}>
            Visit Slinic
          </ProviderCta>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
