"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.genmeds.co.uk/";

export default function GenmedsPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Genmeds"
      fileRef="HW-GENMEDS-2026"
      title="Genmeds Weight Loss Treatment Review: Buying Mounjaro and Wegovy Online from a UK Registered Pharmacy"
      subtitle="Official dossier: pharmacy-led access, listed prices, accessories, delivery notes and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · UK online pharmacy"
      providerName="Genmeds"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Model", v: "UK-registered online pharmacy" },
        { k: "Listed from (guide)", v: "Mounjaro £179.99 · Wegovy £129.99" },
        { k: "Fulfilment", v: "Consultation · discreet courier-style delivery" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/GenMeds.webp"
      heroProviderLogoAlt="Genmeds"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Trying to choose an online provider for weight loss medication can be harder than choosing
          the medication itself. There are dozens of online clinics now offering access to treatments
          like Mounjaro and Wegovy, but not all operate the same way. Some build in subscriptions. Some
          push coaching add-ons. Some focus more narrowly on medication supply.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Genmeds weight loss treatment seems to sit closer to that second model — a pharmacy-led
          approach, rather than a broader weight loss programme. Through Genmeds, eligible patients may
          access prescription injections online, complete a clinical consultation, and receive
          treatment delivered to their chosen address.
        </p>
        <p className="text-slate-800 leading-relaxed">
          For people who simply want regulated access to medication without paying for extra layers
          they may not use, that may be part of the appeal. This guide looks at how Genmeds works,
          what treatments it offers, how delivery appears to be handled, likely costs, and why some
          patients consider it.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          What is Genmeds?
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Genmeds is a UK-registered online pharmacy offering prescription treatments remotely.
            Rather than attending a clinic or GP in person, patients can usually:
          </p>
          <Points
            items={[
              "Complete an online consultation",
              "Receive a clinical review",
              "Be prescribed treatment if appropriate",
              "Have medication delivered directly",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            That model has become increasingly common. What may distinguish Genmeds, though, is its
            simpler pharmacy-first structure — less &quot;membership platform,&quot; more direct
            medication access. That could suit some people; it may not suit others who want
            coaching-heavy programmes.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why choose Genmeds for weight loss products?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Access to prescription weight loss injections
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Genmeds currently lists access to <strong>Mounjaro — from £179.99</strong> and{" "}
              <strong>Wegovy — from £129.99</strong>. Both may support weight management by
              influencing appetite and satiety signals; they may help some patients feel fuller
              sooner, reduce hunger, and lower calorie intake over time. That doesn&apos;t mean
              effortless results — medication may support behaviour change; it doesn&apos;t replace
              it.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to essential injection supplies
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Genmeds also lists support supplies: sharps bin (£2.99), 100 Ultra Pen Needles (£6.99),
              extra needles with swabs (£1.99). That may be helpful for people starting injections at
              home — not every provider makes those accessories easy to add.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How Genmeds weight loss medications work
        </p>
        <div className="mt-3 space-y-3">
          <p className="text-slate-800 leading-relaxed">
            <strong>Mounjaro</strong> is a once-weekly injection used in weight management support.
            It may help regulate appetite and improve fullness signals; clinical studies have
            suggested meaningful outcomes for some patients when paired with diet and lifestyle
            adjustments — though response can vary.
          </p>
          <p className="text-slate-800 leading-relaxed">
            <strong>Wegovy</strong> is also a weekly injectable; it works by acting on pathways
            involved in hunger regulation. For some patients, that may make calorie control feel more
            manageable — support, not magic.
          </p>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How Genmeds works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Complete an online consultation",
              d: "Covering medical history, current health information, and weight loss goals — replacing a traditional in-person appointment and fulfilling legal requirements for prescription-only medicines.",
            },
            {
              t: "Step 2: Clinical review",
              d: "A qualified prescriber reviews the information and may decide whether treatment is appropriate. Not everyone should expect automatic approval — and frankly, that is reassuring.",
            },
            {
              t: "Step 3: Prescription and delivery",
              d: "If approved: medication is dispensed, securely packaged, and sent to your chosen address — where the delivery process starts.",
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
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How Genmeds delivery appears to work
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Address confirmation</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Patients provide a delivery address at checkout (home, workplace, or alternative
              trusted address). Accuracy matters — a simple address error can delay treatment.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Discreet packaging</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Genmeds appears to use plain packaging with no obvious product details visible
              externally — fairly standard among reputable online pharmacies, and for good reason.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Courier delivery</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Exact delivery windows do not appear prominently stated; delivery seems likely handled
              through tracked courier services, which is common across UK online pharmacies. Some
              customer feedback has referenced fast delivery — courier timing can still vary.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Safe supply and pharmacy handling</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Medication appears supplied through regulated pharmacy processes — supporting product
              authenticity, safe dispensing, and UK regulatory compliance. That is fundamental.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            How much does Genmeds weight loss treatment cost?
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Current listed prices in this guide include <strong>Mounjaro — £179.99</strong> and{" "}
            <strong>Wegovy — £129.99</strong> as retail product figures. The consultation may be
            included in pricing or may appear at checkout — worth checking carefully before ordering.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Public pricing does not always clearly specify delivery fees; delivery may be included or
            added at checkout — both models are common. Factor in low-cost accessories (sharps bin,
            needles, swabs) where needed.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Is Genmeds good value?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Possibly — especially for people who do not want subscription-style pricing. Genmeds
            appears less focused on membership, coaching, or platform charges; more direct. Whether
            that is &quot;better&quot; depends on what support you want.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why some patients choose Genmeds
        </p>
        <Points
          items={[
            "UK-regulated pharmacy model",
            "Simpler pharmacy-led approach — not everyone wants an app, coach, and recurring programme",
            "Discreet delivery and plain packaging",
            "Independent reviews have referenced fast shipping, helpful communication, reliable service",
          ]}
        />
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why medical oversight still matters
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Prescription weight loss medications are not suitable for everyone; they generally require
          assessment. They may be considered for patients with <strong>BMI over 30</strong>, or{" "}
          <strong>BMI over 27</strong> with related health conditions. Genmeds appears to follow
          consultation-first prescribing, which aligns with UK standards.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider Genmeds?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want access to prescription weight loss injections, prefer
          online pharmacy convenience, do not want subscription programmes, value privacy, and want
          straightforward medication supply. It may be less suited to those wanting intensive
          coaching support.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I buy Wegovy from Genmeds?",
              a: "Yes, Wegovy appears available through Genmeds following a consultation and approval.",
            },
            {
              q: "Does Genmeds offer Mounjaro for weight loss?",
              a: "Yes, Mounjaro is listed among available treatments.",
            },
            {
              q: "How much does Genmeds weight loss treatment cost?",
              a: "Listed prices currently appear to start around £179.99 for Mounjaro and £129.99 for Wegovy, excluding any potential delivery or consultation costs that may apply at checkout.",
            },
            {
              q: "Does Genmeds deliver weight loss medication to your home?",
              a: "Yes. Approved prescriptions appear delivered to your chosen address in discreet packaging, likely using courier services.",
            },
            {
              q: "Does Genmeds sell needles and sharps bins?",
              a: "Yes. Support supplies such as pen needles, swabs and sharps bins are listed alongside treatment products.",
            },
            {
              q: "Is Genmeds a regulated UK pharmacy?",
              a: "Yes, Genmeds operates as a UK-registered online pharmacy under regulatory standards.",
            },
          ].map((f) => (
            <div key={f.q} className="border-t border-slate-200/70 pt-4 first:border-t-0 first:pt-0">
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-2 text-slate-800 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Conclusion
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          If you&apos;re looking for a more direct, pharmacy-led route to prescription weight loss
          treatment, Genmeds weight loss treatment may be worth considering. Access to Mounjaro and
          Wegovy, straightforward online consultations, discreet delivery and practical
          accessories gives it a slightly different feel from subscription-heavy online clinics.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will it suit everyone? Probably not — some people may prefer broader coaching-based
          programmes. But if you value regulated access, simpler pricing and a more traditional online
          pharmacy model, Genmeds appears to offer a credible option for medically supported weight
          management.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
