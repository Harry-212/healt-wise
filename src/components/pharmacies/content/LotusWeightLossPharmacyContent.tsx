"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.lotusweightloss.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function LotusWeightLossPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Lotus Weight Loss"
      fileRef="HW-LOTUS-2026"
      title="Lotus Weight Loss (UK): Mounjaro, Wegovy, Orlistat, CQC Clinic and The Lotus Programme"
      subtitle="Specialist UK weight loss clinic combining clinician led prescribing, GPhC pharmacy supply, structured lifestyle programme, discreet tracked delivery, subscriptions and loyalty. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · Orlistat · UK regulated pathway"
      providerName="Lotus Weight Loss"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Lotus Weight Loss (CQC registered service, GPhC 9010938 — verify current entries)",
        },
        { k: "Treatments", v: "Mounjaro · Wegovy · Orlistat (subject to assessment)" },
        {
          k: "Fulfilment",
          v: "Royal Mail 24 / DPD · tracked · refrigerated injectable packs · home or workplace only",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Lotus Weight Loss.webp"
      heroProviderLogoAlt="Lotus Weight Loss"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Lotus Weight Loss describes itself as a UK specialist clinic rather than a quick fix diet
          brand. The model pairs medically prescribed weight loss medicines with structured
          support programmes and personalised care, under UK healthcare regulation, aimed at safe and
          sustainable management rather than informal marketplace supply.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise walks through what they advertise on{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            lotusweightloss.co.uk
          </a>
          : products, programme content, delivery rules, price examples, and how that compares in
          broad terms with generic online sellers. Always verify registration snapshots and your
          own eligibility on their live pages.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Clinically oriented medicines</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            <strong>GLP-1 and dual incretin injectables (weekly pens).</strong>
          </p>
          <Points
            items={[
              "Mounjaro (tirzepatide): dual GLP-1 and GIP action; appetite and metabolic pathways emphasised in marketing.",
              "Wegovy (semaglutide): GLP-1 weekly pen framed for fullness and reduced hunger.",
            ]}
          />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Promotional copy cites clinical research where combined with lifestyle change some trial
            populations achieve roughly <strong>15% to 20% body weight change</strong>; individual
            results vary with adherence, side effects, and baseline health.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            <strong>Orlistat 120mg.</strong> Daily capsules that reduce fat absorption, offering an
            oral route for patients who are not ready for injectables. Pricing in marketing examples
            lands around <strong>£59.99</strong> for a one month style supply.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>The Lotus Programme</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Lotus promotes a structured lifestyle layer that can sit beside medication or be bought on
          its own. The programme is described as roughly <strong>12 weeks</strong> with weekly
          guidance, tools for meals, calories, water, weight and BMI, meal plans, movement tips,
          expert resources, and a private community for motivation. The intent is support from
          first prescription through habit change, not only a box of pens.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulation and clinician led care</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Lotus highlights registration with the <strong>Care Quality Commission (CQC)</strong> as
          the UK regulator for relevant health and social care activities, dispensing through{" "}
          <strong>GPhC registered pharmacies</strong>, and clinician reviewed decisions rather than
          automated prescribing. Wegovy and Mounjaro remain prescription only in the UK and require
          proper medical assessment before supply.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Ordering in three steps</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
            <p className="font-bold text-slate-900">Step 1: Online consultation</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Confidential questionnaire on history, lifestyle, and goals, described as a few
              minutes.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
            <p className="font-bold text-slate-900">Step 2: Clinical review</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              UK doctor or pharmacist suitability decision; prescription included without an extra fee
              in many funnels when bundled that way.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
            <p className="font-bold text-slate-900">Step 3: Dispatch</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              UK regulated pharmacy fulfilment, plain discreet outer pack, tracked free next working
              day style delivery on many mainland orders via Royal Mail 24 or DPD before weekday cut
              offs.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Delivery methods and timeframes</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Parcels use tracked delivery with discreet outer packaging and no obvious Lotus branding or
          medical labels on the outside, aimed at privacy. Orders before <strong>1pm on weekdays</strong>{" "}
          are often quoted for <strong>next working day</strong> delivery. After 1pm or on weekends,
          arrival within about <strong>two working days</strong> is typical, with up to roughly{" "}
          <strong>three to four working days</strong> in some cases.
        </p>
        <Points
          items={[
            "Deliveries must go to a residential or workplace address: no PO Boxes, parcel lockers, or pickup stations.",
            "Remote UK areas such as Scottish Highlands or Channel Islands may need up to about three extra working days.",
            "If delivery fails, couriers leave redelivery instructions; Lotus can help rearrange.",
            "If you misuse a pickup only address and the parcel returns, replacement cost may not be covered.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>How delivery to your address is managed</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Packaging keeps outer surfaces minimal: usually only your name and delivery address
          visible. Injectable lines ship with refrigerated packaging to protect cold chain; move pens
          into your fridge promptly after receipt per the PIL.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing examples and subscriptions</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Marketing cites <strong>Mounjaro</strong> from around <strong>£169.99</strong> per month
            style supply with <strong>free sharps box, needles, and swabs</strong>.{" "}
            <strong>Wegovy</strong> from around <strong>£99.99</strong>.{" "}
            <strong>Orlistat</strong> around <strong>£59.99</strong> per month in examples.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Loyalty:</strong> repeat orders may earn around <strong>5% credit</strong> in
            loyalty programmes. <strong>Subscriptions</strong> bundle medication, programme access,
            and ongoing clinical support with roughly <strong>5% savings</strong> versus one off buys
            in some promotions, with flexibility to change dose, shift delivery dates, pause, or
            cancel subject to current terms.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Ongoing support</p>
          <Points
            items={[
              "Clinical access for treatment questions, side effects, and dosing discussions.",
              "Progress tracking via programme tools and reminders.",
              "Private community for motivation; seasonal offers, referrals, and loyalty rewards mentioned in marketing.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Lotus versus many generic online weight loss sellers</p>
        <Points
          items={[
            "UK healthcare regulation narrative: CQC plus GPhC dispensing.",
            "Clinician led prescribing rather than anonymous checkout.",
            "Free tracked next day delivery on many UK mainland orders.",
            "Discreet packaging.",
            "Structured Lotus Programme available.",
            "Subscription and loyalty options.",
            "Home or workplace delivery only (no locker routing).",
            "Online first journey with clear public pricing themes.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Safety before you decide</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-800 leading-relaxed">
          <li>All listed prescription medicines require clinical assessment.</li>
          <li>Medication assists loss but does not replace lifestyle foundations.</li>
          <li>
            Failed delivery can threaten cold chain for injectables: plan someone to receive and
            refrigerate promptly.
          </li>
        </ul>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Must I buy The Lotus Programme to get GLP-1 pens?",
              a: "Programme and medication can be bundled or separated depending on the live product bundle you pick.",
            },
            {
              q: "Can I pause a subscription?",
              a: "Public copy emphasises flexible pause, cancel, or date moves; read the subscription terms that apply at checkout.",
            },
            {
              q: "Why no PO Box?",
              a: "UK regulated supply for injectables expects a stable attended address for cold chain and accountability.",
            },
            {
              q: "How do I verify CQC and pharmacy details?",
              a: "Use CQC and GPhC public registers with the legal entity names Lotus publishes on site.",
            },
            {
              q: "Is next day guaranteed?",
              a: "Marketing uses typical timelines; remote postcodes and stock issues can extend windows.",
            },
            {
              q: "How should I compare monthly cost?",
              a: "Include pens, programme fees if any, loyalty credits, and subscription savings assumptions in one spreadsheet row.",
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
          Choosing Lotus means choosing a regulated clinic narrative with Mounjaro, Wegovy, or
          Orlistat where suitable, GPhC backed dispensing, discreet tracked logistics, transparent
          headline pricing themes, optional structured programme support, and subscription mechanics
          for continuity. Stack those claims against your budget and whether you want coaching heavy
          care versus pharmacy minimal contact elsewhere on Health Wise.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Lotus Weight Loss
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
