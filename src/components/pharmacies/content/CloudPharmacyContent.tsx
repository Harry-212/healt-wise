"use client";

import { HazardBox, PharmacyDossierPage, Points } from "./_dossier";

const providerUrl =
  "https://www.cloudpharmacy.co.uk/online-doctor/weight-loss-treatments/";

export default function CloudPharmacyContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Cloud Pharmacy"
      fileRef="HW-CLOUD-2026"
      title="Cloud Pharmacy Weight Loss Treatment Review: Online Access to Wegovy, Mounjaro and Prescription Support in the UK"
      subtitle="Official dossier: how Cloud Pharmacy works, treatments that may be available, delivery/temperature handling, pricing context and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Wegovy · Mounjaro · Saxenda · Orlistat · Mysimba"
      providerName="Cloud Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Cloud Pharmacy" },
        { k: "Treatments", v: "Wegovy · Mounjaro · Saxenda · Orlistat · Mysimba" },
        { k: "Fulfilment", v: "Home delivery" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Weight loss advice can sometimes sound overly neat. Eat less. Move more. Stay consistent.
          If it were that simple, fewer people would struggle.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Real life tends to interfere. Hunger cues, stress eating, hormonal factors, sedentary
          work, family routines — all of it can make long-term progress harder than standard advice
          suggests. That may be part of why prescription treatments like Wegovy and Mounjaro have
          become more widely considered across the UK.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Cloud Pharmacy weight loss treatment sits within that growing space. Through its online
          prescribing service, Cloud Pharmacy offers consultations, access to prescription
          medication, home delivery and ongoing support — all managed remotely.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Cloud Pharmacy works, what treatments may be available, how
          delivery is handled, what pricing may look like, and why some people choose it for
          medically supported weight management.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is Cloud Pharmacy weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <p className="text-slate-800 leading-relaxed">
            Cloud Pharmacy provides online access to prescription weight loss medication, subject
            to clinical review. Patients typically:
          </p>
          <Points
            items={[
              "Complete an online consultation",
              "Receive a prescriber review",
              "Get approved if suitable",
              "Have medication delivered to their address",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            It’s a straightforward model — but convenience is only part of the appeal. Access is
            often the bigger story.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why choose Cloud Pharmacy?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Convenient access to prescription medication
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              You can manage the process from home. No waiting rooms. No second trip to collect a
              prescription. That may suit people who:
            </p>
            <Points
              items={[
                "Prefer private treatment",
                "Want quicker access",
                "Value online healthcare",
                "Have struggled through conventional routes",
              ]}
            />
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to clinically proven weight loss treatments
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Cloud Pharmacy offers access to several prescription options, including:
            </p>
            <Points items={["Wegovy", "Mounjaro", "Saxenda", "Orlistat", "Mysimba"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              GLP-1 treatments such as Wegovy and Mounjaro may help regulate appetite by increasing
              satiety and reducing hunger signals, supporting lower calorie intake. Medication
              doesn’t replace lifestyle change — but it may help some patients sustain it more
              realistically.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Tablet-based alternatives are also available
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Not everyone wants injections. Cloud Pharmacy also appears to offer oral options such
              as Orlistat and Mysimba — different mechanisms, different trade-offs.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How Cloud Pharmacy works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Online consultation",
              d: "Questionnaire covering weight, BMI, medical history, current medications and lifestyle details.",
            },
            {
              t: "Step 2: Medical review",
              d: "A prescriber reviews suitability and which medication may suit your needs. Not every applicant is approved.",
            },
            {
              t: "Step 3: Prescription and fulfilment",
              d: "If approved: prescription issued, medication prepared, packaged and dispatched.",
            },
          ].map((s) => (
            <div key={s.t} className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
              <p className="font-bold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Delivery and safe handling
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Delivery timeframes and privacy</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Timing may vary, though orders often appear to be processed shortly after approval,
              with delivery within a few working days. Cloud states packaging is plain and
              unbranded.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Temperature-controlled delivery (where needed)</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Injectable medications may require proper storage conditions. Cloud Pharmacy appears
              to use insulated packaging and cold-chain methods where needed to preserve stability
              during transit.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            How much does Cloud Pharmacy weight loss treatment cost?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing depends on medication and dose. Tablet costs may range around{" "}
            <strong>£20–£100+</strong> per month, while injection costs may sit around{" "}
            <strong>£130</strong> at lower doses and <strong>£300+</strong> at higher doses, with
            escalation increasing costs over time.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing may include consultation, prescription, medication and delivery.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Ongoing support and medical oversight
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Weight loss treatment is rarely static. Cloud Pharmacy may offer treatment reviews,
            ongoing oversight and adjustments based on progress.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Prescription weight loss medication is not suitable for everyone and may be considered
            for people with BMI above 30, or BMI above 27 with related conditions — which is why
            screening is necessary.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Frequently asked questions
        </p>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {[
            {
              q: "Can I get Wegovy from Cloud Pharmacy?",
              a: "Yes, Wegovy may be available through Cloud Pharmacy after an online consultation and approval.",
            },
            {
              q: "Does Cloud Pharmacy offer Mounjaro for weight loss?",
              a: "Yes, Mounjaro appears among available treatment options, subject to suitability checks.",
            },
            {
              q: "How much does Cloud Pharmacy weight loss treatment cost?",
              a: "Costs may range from around £20–£100+ for tablets and £130–£300+ per month for injections, depending on medication and dosage.",
            },
            {
              q: "Does Cloud Pharmacy deliver weight loss injections to your home?",
              a: "Yes. Approved prescriptions are shipped directly to your address, often with tracked delivery and temperature-controlled packaging where required.",
            },
            {
              q: "Is Cloud Pharmacy regulated?",
              a: "Cloud Pharmacy operates as a licensed pharmacy provider supplying prescription medication through a medically reviewed process.",
            },
            {
              q: "Are non-injection alternatives available?",
              a: "Yes. Options may include Orlistat and Mysimba for patients who prefer oral treatment.",
            },
          ].map((item) => (
            <div key={item.q} className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
              <p className="font-bold text-slate-900">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Conclusion</h2>
        <p className="mt-3 text-slate-800 leading-relaxed">
          If you’re looking for a private route to prescription weight loss treatment, Cloud
          Pharmacy appears to offer a practical option. Access to medications such as Wegovy and
          Mounjaro, combined with online assessment, discreet delivery and ongoing support, gives
          it more depth than a basic online checkout.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          It may not suit everyone, but for those prioritising convenience, privacy and medically
          supervised support, it may be worth considering as part of a longer-term plan.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            View Cloud Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}

