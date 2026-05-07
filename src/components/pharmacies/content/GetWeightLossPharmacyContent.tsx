"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://getweightloss.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function GetWeightLossPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="GetWeightLoss"
      fileRef="HW-GETWEIGHTLOSS-2026"
      title="GetWeightLoss (UK): Pharmacist Founded Care, “No Teaser” Pricing and GLP‑1 Delivery"
      subtitle="Clinician led digital service emphasising partnership over product flipping: GPhC registered pharmacy, manual prescriber review, Mounjaro and Wegovy pathways, tracked cold chain postage, optional UKAS blood tests and nutritionist add ons, no mandatory subscriptions. Information only, not medical advice."
      scopeLabel="Scope: Tirzepatide · Semaglutide · Oral options where listed · Lifestyle hub"
      providerName="GetWeightLoss"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v:
            "GetWeightLoss (marketing cites GPhC 9012464; Health Wise compare row 9011648 — verify premises on register)",
        },
        {
          k: "Model",
          v: "5 min questionnaire · human prescriber review · internal dispensing · tracked delivery ~2 working days",
        },
        {
          k: "Fulfilment",
          v: "Medical grade 2–8°C insulated packs · plain outers · Royal Mail style tracking emails",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Get Weightloss.webp"
      heroProviderLogoAlt="GetWeightLoss"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            GetWeightLoss
          </a>{" "}
          markets a clinician led digital health service built around a <strong>partnership</strong> metaphor:
          medical therapy plus evidence based guidance and a simplified fee structure. Their headline differentiator
          is a <strong>“No Teaser” pricing policy</strong> meant to avoid intro discounts that balloon after month
          one.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise unpacks regulation, workflow, delivery and add on costs so you can judge predictability versus
          teaser led competitors.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulated pharmacist founded service</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Fully regulated UK pharmacy (public materials cite GPhC registration 9012464).",
              "Qualified UK clinicians manually review every consultation with metabolic health specialisation cited.",
              "Digital intake still ends with a human decision, not algorithm only approval.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Four step pathway</p>
        <Points
          items={[
            "Online consultation: about five minutes covering weight, height, history and medicines.",
            "Professional verification: prescribers may request clarification, photos or measurements to confirm BMI.",
            "Treatment selection: approved patients see plans that can include dual action injections such as Mounjaro or established Wegovy therapy.",
            "Tracked delivery: internal pharmacy dispensing with parcels often arriving within roughly two working days.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Key benefits</p>
        <Points
          items={[
            "Transparent pricing without teaser discounts that jump after the first invoice.",
            "No tie ins or forced subscriptions: pause or stop without cancellation penalties per marketing.",
            "Educational health hub emphasising nutrition, exercise and lifestyle medicine beyond the pen.",
            "Specialist access to pharmacists and support teams by email or booked calls for dosing or side effects.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Refrigerated lines ship in <strong>medical grade insulated packaging</strong> holding roughly{" "}
          <strong>2°C to 8°C</strong> to your door. Outer boxes stay <strong>plain and unbranded</strong>.{" "}
          <strong>Royal Mail style couriers</strong> provide tracking emails once prescriptions process.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>All inclusive pricing themes</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Bundles aim to cover <strong>consultation, private prescription and medication</strong>. Illustrative
            marketing cites programmes <strong>from about £88.75 per month</strong> at entry tiers and typical{" "}
            <strong>all inclusive GLP‑1 monthly costs from roughly £148</strong> depending on molecule and strength.{" "}
            Optional <strong>home blood test kits cost about £89</strong> for deeper metabolic or thyroid insight.{" "}
            <strong>Nutritionist sessions start near £69</strong> when purchased as add ons.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Responsible access</p>
          <Points
            items={[
              "Eligibility aligned to BMI 30+ or 27+ with weight related disease when clinically appropriate.",
              "Optional labs processed through UKAS accredited partners.",
              "GP coordination available with consent for continuity of care.",
            ]}
          />
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Why patients choose GetWeightLoss (recap)</p>
        <Points
          items={[
            "Predictable monthly costs without hidden hikes.",
            "Mobile app support for weight and injection day tracking per promotional copy.",
            "Pharmacist led empathy for sustainable behaviour change.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          Their conclusion invites readers to see obesity treatment as <strong>demystified</strong>: expert review,
          plain English coaching and a pricing model that resists bait and switch tactics.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "What is “No Teaser” pricing?",
              a: "Marketing promises the price you see upfront stays consistent rather than jumping after promotional first months.",
            },
            {
              q: "Is GetWeightLoss subscription only?",
              a: "No — they advertise freedom to pause or stop without cancellation fees.",
            },
            {
              q: "Which injectables are highlighted?",
              a: "Mounjaro and Wegovy appear as core evidence based options when approved.",
            },
            {
              q: "How fast is delivery?",
              a: "Tracked service commonly targets about two working days after processing.",
            },
            {
              q: "Are blood tests mandatory?",
              a: "No — optional home kits around £89 support deeper metabolic insight when patients choose them.",
            },
            {
              q: "Can my GP be informed?",
              a: "Yes, with consent they describe sharing treatment details for coordinated care.",
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
          GetWeightLoss sells honesty: human prescribers, insulated GLP‑1 logistics, optional labs and nutrition
          coaching, and pricing narratives built around stability. If teaser discounts elsewhere frustrate you, their
          positioning may resonate; still stack £148 style bundles against Health Wise for your exact dose before
          committing long term.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit GetWeightLoss
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
