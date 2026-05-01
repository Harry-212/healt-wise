"use client";

import Link from "next/link";
import {
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

export default function AshcroftPharmacyContent() {
  const providerUrl =
    "https://www.ashcroftpharmacy.co.uk/online-doctor/weight-loss/?utm_source=healthwise360";

  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Ashcroft Pharmacy"
      fileRef="HW-ASHCROFT-2026"
      title="Ashcroft Pharmacy Weight Loss Treatment Review: Safe Online Access to Mounjaro, Wegovy and More"
      subtitle="Official dossier: how Ashcroft’s online doctor process works, treatment range, delivery expectations, and safety notes (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Saxenda · tablets"
      providerName="Ashcroft Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Ashcroft Pharmacy" },
        { k: "Treatments", v: "Mounjaro · Wegovy · Saxenda · tablets" },
        { k: "Fulfilment", v: "Home delivery" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/ashcroft.webp"
      heroProviderLogoAlt="Ashcroft Pharmacy"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Trying to lose weight can feel frustratingly slow. Many people cut calories, try meal
          plans, walk more, maybe even pay for a gym they barely use — and still hit a wall. That’s
          often the point where prescription treatment starts entering the conversation.
        </p>
        <p className="text-slate-800 leading-relaxed">
          For some people, medications like{" "}
          <Link href="/what-is-wegovy" className="font-semibold underline underline-offset-2">
            Wegovy
          </Link>{" "}
          and{" "}
          <Link href="/what-is-mounjaro" className="font-semibold underline underline-offset-2">
            Mounjaro
          </Link>
          may offer extra support, particularly when lifestyle changes alone haven’t been enough.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That’s where Ashcroft Pharmacy weight loss treatment has gained attention in the UK.
          Through its online doctor service, Ashcroft Pharmacy provides access to regulated weight
          loss medication, online consultation, home delivery, and ongoing pharmacy support — all
          without a traditional GP appointment.
        </p>
        <p className="text-slate-800 leading-relaxed">
          But what actually makes Ashcroft Pharmacy worth considering? Let’s look closer.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is Ashcroft’s online doctor for weight loss?
        </p>
        <div className="mt-3 border border-slate-200/90 bg-white/70 p-5 shadow-sm sm:p-6">
          <p className="text-slate-800 leading-relaxed">
            Ashcroft Pharmacy offers a digital prescribing service for eligible patients seeking
            prescription weight loss treatment. Rather than booking in-person appointments, the
            process is handled online. Typically, it works like this:
          </p>
          <Points
            items={[
              "Complete a health assessment",
              "Receive a medical review",
              "Prescribed treatment if suitable",
              "Home delivery",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Simple on paper. But the bigger appeal may be access — for many people, traditional
            routes can be slow or uncertain. That seems to be the gap this service is trying to
            fill.
          </p>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why choose Ashcroft Pharmacy for weight loss treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Convenient access to prescription weight loss medication
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Instead of arranging appointments and repeat visits, you can manage much of the
              process online. That may be useful if you:
            </p>
            <Points
              items={[
                "Have a busy schedule",
                "Prefer privacy",
                "Want faster access to treatment",
                "Don’t want to navigate long NHS waiting times",
              ]}
            />
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Wide choice of weight loss treatments
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              One thing that sets Ashcroft apart is range. Available treatments may include:
            </p>
            <Points items={["Mounjaro", "Wegovy", "Rybelsus", "Mysimba", "Orlistat", "Xenical"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              That matters because not every treatment suits every person. Some may prefer weekly
              injections; others may want tablets. Budget can influence the decision too.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Free online consultation before prescribing
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              This isn’t simply adding medication to a cart. Before treatment approval, you
              complete a consultation covering:
            </p>
            <Points items={["BMI", "Medical history", "Existing medication", "General suitability"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Prescription-only medicines aren’t casual purchases. A regulated review helps reduce
              risk and aims to avoid inappropriate prescribing.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              4. Fast delivery — including next-day options
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Ashcroft Pharmacy states next-day delivery may be available when orders are placed
              before 2pm Monday to Friday. That could mean treatment arrives very quickly compared
              with routes where approval and dispatch can drag on.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              5. Discreet packaging and direct home delivery
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Privacy can be underestimated. Ashcroft appears to address this through:
            </p>
            <Points
              items={[
                "Discreet packaging",
                "Direct-to-patient shipping",
                "Secure medication handling",
              ]}
            />
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How Ashcroft Pharmacy delivers weight loss medication safely
        </p>
        <div className="mt-3 space-y-4 border border-slate-200/90 bg-white/70 p-5 shadow-sm sm:p-6">
          <div>
            <p className="font-bold text-slate-900">Pharmacy-controlled dispatch</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Orders are dispensed directly through Ashcroft Pharmacy, which may help support:
            </p>
            <Points items={["Authentic supply", "Quality control", "Regulatory compliance"]} />
          </div>
          <div className="border-t border-slate-200/80 pt-4">
            <p className="font-bold text-slate-900">Secure packaging systems</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Products are packaged to protect medication integrity, patient safety, and
              confidentiality — especially relevant for temperature-sensitive treatments.
            </p>
          </div>
          <div className="border-t border-slate-200/80 pt-4">
            <p className="font-bold text-slate-900">Fast transit to reduce delays</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Shorter delivery windows may help reduce treatment interruptions, particularly for
              GLP-1 medications.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Weight loss medications available at Ashcroft Pharmacy
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Injection treatments</p>
            <Points items={["Mounjaro", "Wegovy", "Saxenda"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              These medications may support reduced hunger, portion control, and sustained weight
              loss efforts — though realistically, medication alone rarely does all the work.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Tablet treatments</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Some patients may prefer oral options. Available choices may include:
            </p>
            <Points items={["Orlistat", "Mysimba", "Rybelsus"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Ashcroft may also offer supporting supplies (e.g. pen needles, wipes, sharps bins)
              that can make treatment management easier.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            How much does Ashcroft Pharmacy weight loss treatment cost?
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing depends on product and dose. Entry-level costs may start around{" "}
            <strong>£11.99</strong> for some Orlistat options and <strong>£100+</strong> for
            certain tablets. Typical starting prices may include Mounjaro from around{" "}
            <strong>£149.99</strong> and Wegovy from around <strong>£119.99</strong>, with higher
            doses generally costing more.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Who might use this service?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Ashcroft Pharmacy may suit people who struggle losing weight through lifestyle changes
            alone, want medically supported treatment, prefer online healthcare, need fast access,
            and value privacy and home delivery. It may be less appropriate for people wanting
            ongoing face-to-face clinical support.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Frequently asked questions
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {[
            {
              q: "Can I get Wegovy through Ashcroft Pharmacy?",
              a: "Yes, Wegovy may be available through Ashcroft Pharmacy after completing an online consultation and receiving approval.",
            },
            {
              q: "Does Ashcroft offer Mounjaro?",
              a: "Yes, Mounjaro is listed among available weight loss treatments, subject to suitability assessment.",
            },
            {
              q: "Does Ashcroft Pharmacy provide next-day delivery?",
              a: "Next-day delivery may be available for eligible orders placed before 2pm Monday to Friday.",
            },
            {
              q: "How much does Ashcroft Pharmacy weight loss treatment cost?",
              a: "Costs may range from around £11.99 for capsules to £300+ per month for higher-dose injections, depending on treatment.",
            },
            {
              q: "Is Ashcroft Pharmacy a regulated provider?",
              a: "Ashcroft Pharmacy operates as a licensed pharmacy, supplying prescription treatment with medical screening.",
            },
            {
              q: "Are tablets available instead of injections?",
              a: "Yes. Options may include Orlistat, Mysimba and Rybelsus.",
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
          If you want a practical way to access prescription weight loss medication online, Ashcroft
          Pharmacy weight loss treatment appears to offer a credible option. Its mix of regulated
          prescribing, fast delivery, treatment choice, and ongoing support will likely appeal to
          people who want convenience without sacrificing safety.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Access to treatments like Mounjaro and Wegovy, paired with discreet home delivery, makes
          the service more than just an online storefront. It may not suit everyone, but for
          patients looking for private, faster access, it’s one provider worth considering.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Ashcroft Pharmacy
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}

