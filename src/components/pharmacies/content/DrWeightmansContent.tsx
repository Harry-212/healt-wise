"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://drweightmans.com/weight-loss-treatment/";

export default function DrWeightmansContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Dr Weightmans"
      fileRef="HW-DRWEIGHTMANS-2026"
      title="Dr Weightmans Weight Loss Review: Clinically Supported Medical Weight-Loss Products, Delivery and What to Expect"
      subtitle="Official dossier: how clinically guided weight-loss products typically work, fulfilment expectations, cost components and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Weight-loss medications · clinically guided products · delivery fulfilment"
      providerName="Dr Weightmans"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Dr Weightmans" },
        { k: "Focus", v: "Clinically supported weight management" },
        { k: "Fulfilment", v: "Home delivery (varies by item)" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Weight loss can sound simple when reduced to a slogan. Eat less. Move more. Stay
          disciplined.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Most people know it rarely works that cleanly. Appetite regulation, stress, long work
          days, medication effects, and sleep can influence weight in ways generic advice often
          overlooks. That may help explain why some people explore medically supported products.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Dr Weightmans weight loss services appear to sit in that broader category. Through a
          digital-first model, Dr Weightmans appears to offer access to clinically guided weight-
          loss products, consultation pathways, delivery fulfilment and ongoing support.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how medical weight-loss products typically work through providers
          like Dr Weightmans, what types of products may be involved, how delivery tends to
          operate, what costs may arise, and what to consider before ordering.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What are medical weight-loss products?
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <p className="text-slate-800 leading-relaxed">
            Medical weight-loss products can include several categories. Some involve prescription
            medicines. Some involve nutrition-based products. Others are more service-led,
            combining digital support with physical products.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">Common categories may include:</p>
          <Points
            items={[
              "Prescription weight-loss medications (e.g. Mounjaro, Wegovy, Saxenda)",
              "Over-the-counter supplements (evidence varies)",
              "Meal replacement products (structured nutrition plans)",
              "Digital coaching and tracking tools",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why some people choose clinically supported solutions
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              More than “quick fixes”
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Many people are not looking for shortcuts. Often it&apos;s about support and risk
              reduction. Clinically guided approaches may offer:
            </p>
            <Points
              items={[
                "Medical review before treatment",
                "Structured dosing guidance",
                "Ongoing oversight",
                "Monitoring over time",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              That may reduce risks linked to self-directed product use and help avoid trial-and-
              error decisions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How medical weight-loss ordering typically works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              t: "Step 1: Initial assessment",
              d: "Questionnaire covering weight, BMI, medical history, current medications and relevant conditions.",
            },
            {
              t: "Step 2: Professional review",
              d: "A clinician or prescriber reviews eligibility and considers suitability and potential risks or interactions.",
            },
            {
              t: "Step 3: Product selection",
              d: "Options may be chosen based on clinical need, preference, budget and treatment goals.",
            },
            {
              t: "Step 4: Fulfilment",
              d: "Payment is processed, products are prepared, and orders move into delivery with tracking where available.",
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
          How delivery typically works (and why it matters)
        </p>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Standard delivery elements</p>
            <Points
              items={[
                "Secure packaging",
                "Shipment tracking (when supported)",
                "Address verification",
                "Delivery notifications",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              Delivery reliability can matter more than people expect — especially when continuity
              of treatment is important.
            </p>
          </div>

          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Cold-chain delivery (temperature-sensitive)</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Injectable treatments may require temperature control in transit. That may involve
              insulated packaging, cold packs and storage guidance on arrival.
            </p>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Patients should always follow the provider&apos;s handling instructions on receipt.
            </p>
          </div>
        </div>
        <div className="mt-4 border border-slate-200/90 bg-white/80 p-5 shadow-sm">
          <p className="font-bold text-slate-900">Typical delivery timeframes (general guidance)</p>
          <Points
            items={[
              "Standard shipping: ~3–7 business days",
              "Expedited shipping: ~1–3 business days",
              "International shipping (if offered): ~7–21+ days",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Actual timelines depend on inventory, location, weekends/holidays and shipping method.
          </p>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Cost breakdown: what you may be paying for
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Costs often involve more than the headline product price. Depending on the provider,
            you may see a mix of:
          </p>
          <Points
            items={[
              "Product costs (often dose-dependent for prescription treatments)",
              "Shipping fees (included, flat-rate or tiered by speed)",
              "Consultation or service fees (initial review and follow-up)",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            A higher price may reflect higher support levels — or it may reflect branding. Looking
            beyond price alone usually makes sense.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Key things to check before choosing a provider
          </p>
          <Points
            items={[
              "Clinical oversight: are medical professionals involved?",
              "Safety standards: regulated supply chains and clear sourcing/storage",
              "Delivery reliability: tracking and clear dispatch information",
              "Pricing transparency: avoid hidden fees",
              "Customer support: clear routes to contact someone if problems arise",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            It may also be worth checking return/refund terms and how adverse reactions are
            handled.
          </p>
        </section>
      </div>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I track my weight-loss product order?",
              a: "Often yes. Many providers (including services like Dr Weightmans) may offer tracking updates by email or via an online portal, depending on the delivery method used.",
            },
            {
              q: "How long does delivery usually take?",
              a: "Delivery may range from 1–3 business days for expedited shipping to 3–7 business days for standard delivery, depending on location, stock and fulfilment.",
            },
            {
              q: "Do prescription weight-loss products require cold-chain delivery?",
              a: "Some may. Certain injectable products (e.g. Wegovy) may require temperature-controlled shipping and handling instructions on receipt.",
            },
            {
              q: "What costs are usually included?",
              a: "Costs may include product pricing, shipping fees, consultation charges and, in some cases, ongoing support fees. Always check the checkout breakdown.",
            },
            {
              q: "Is medical review required before ordering?",
              a: "For prescription-based treatments, medical review is generally necessary and should be expected.",
            },
            {
              q: "Are online weight-loss providers safe?",
              a: "They may be, provided they use regulated supply chains, proper clinical oversight and transparent support policies. Avoid unverified sellers.",
            },
          ].map((f) => (
            <div key={f.q} className="border-t border-slate-200/70 pt-4">
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-2 text-slate-800 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Conclusion
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          If you are exploring medically supported products, Dr Weightmans weight loss services
          appear to fit within a broader model of clinically guided treatment, structured
          fulfilment and home delivery support.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will that suit everyone? Probably not. Some people may prefer traditional in-person
          support. Others may prioritise convenience and flexibility. But if the goal is informed,
          medically supported weight management with clear delivery expectations, Dr Weightmans may
          be worth considering as part of that decision.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}

