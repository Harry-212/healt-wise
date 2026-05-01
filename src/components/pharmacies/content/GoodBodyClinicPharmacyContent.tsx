"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://health.goodbodyclinic.com/weight-loss-treatments/";

export default function GoodBodyClinicPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="GoodBody Clinic"
      fileRef="HW-GOODBODY-2026"
      title="GoodBody Clinic Weight Loss Review: Online Access to Wegovy, Medical Support and Home Delivery in the UK"
      subtitle="Official dossier: programme-style prescribing, nurse and doctor oversight, subscriptions, delivery often included and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Wegovy · medically supervised · UK"
      providerName="GoodBody Clinic"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Model", v: "Online prescribing · health testing · weight programme" },
        { k: "Pricing guide", v: "~£129/mo examples · 3- / 6- / 12-mo bundles" },
        { k: "Delivery", v: "Partner pharmacy · often included · discreet" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/goodbody.webp"
      heroProviderLogoAlt="GoodBody Clinic"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Losing weight often gets reduced to simple advice. Eat less. Exercise more. Stay disciplined.
          Most people who have actually struggled with weight know it rarely works that neatly. Hunger
          can be persistent; progress can stall; life gets in the way. For some people, medically
          supported treatment may offer something standard diet plans do not — structure,
          accountability, and in some cases, biological support.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That is where GoodBody Clinic weight loss treatment has started drawing attention. Through
          its online prescribing platform, GoodBody Clinic offers access to prescription weight loss
          medication, ongoing clinical oversight, subscription treatment plans and home delivery. It is
          not positioned as a simple online shop — it appears to function more like a structured
          treatment programme.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how GoodBody Clinic works, what medications may be available, how
          delivery and subscriptions operate, pricing expectations, and why some patients may consider
          it for longer-term weight management.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          What is GoodBody Clinic?
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            GoodBody Clinic is a UK-based provider offering health testing services alongside a
            medically supervised weight loss programme. Its weight loss service appears built around
            more than just medication access. Typically, the model combines:
          </p>
          <Points
            items={[
              "Clinical assessment",
              "Prescription treatment",
              "Doctor and nurse oversight",
              "Follow-up support",
              "Repeat prescription options",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Not every online provider includes much support after the first order — some do little more
            than ship medication. GoodBody seems to be trying to offer more than that.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why choose GoodBody Clinic for weight loss treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Prescription-based treatment, not generic supplements
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              GoodBody does not appear to focus on ordinary diet products or over-the-counter
              supplements. Its programme may include prescription medications such as Wegovy and other
              prescribed weight loss treatments following review — treatment linked to medical
              suitability, not simply consumer demand.
            </p>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Wegovy may help support weight management by influencing appetite-related pathways — reduce
              hunger, increase fullness, help lower calorie intake. That does not mean effortless weight
              loss, but it may make dietary changes easier for some people to sustain.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Structured medical oversight
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Patients may have access to nurses, doctors, progress reviews, and dose adjustments — a
              different experience from buying medication with no follow-up. In practice, support often
              matters more than people expect.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. A programme rather than a one-off purchase
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              GoodBody appears to sell a treatment pathway: ongoing prescriptions, subscription supply,
              regular check-ins, renewals tied to review. For long-term weight management, that may be a
              strength.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How GoodBody Clinic works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Online clinical assessment",
              d: "Health assessment including weight and BMI, medical history, current medication use, and uploaded health information — determining whether treatment may be appropriate.",
            },
            {
              t: "Step 2: Medical review",
              d: "A healthcare professional reviews your information and may decide eligibility and which treatment may suit you. Not everyone will be approved — part of safe prescribing.",
            },
            {
              t: "Step 3: Prescription and pharmacy fulfilment",
              d: "If approved: prescription is issued, partner pharmacy prepares medication, order is packaged and dispatched — then delivery begins.",
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
          How GoodBody Clinic delivery works
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Ordering process</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Flow generally: select a treatment plan → complete assessment → await approval →
              prescription goes to pharmacy partner → medication fulfilled and shipped. That process may
              reduce risk compared with unregulated sellers.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Fulfilment and shipping</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Medication is dispensed through registered pharmacy channels; shipping via delivery
              partners; estimated delivery dates may be provided at checkout. Orders appear typically
              processed on business days — no weekend dispatch seems standard.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Patient-friendly delivery features</p>
            <Points
              items={[
                "Address verification",
                "Delivery updates",
                "Tracking, where available",
                "Discreet packaging",
              ]}
            />
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Is shipping included?</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Delivery often appears included — which may mean no surprise shipping charges, easier cost
              planning, and better transparency at checkout compared with providers adding postage
              later.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Subscription pricing and costs
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Published examples suggest around <strong>£129 per month</strong> for some 28-day plans,
            some <strong>3-month plans under £500</strong>, and 6- and 12-month bundles that may lower
            effective monthly costs — figures may vary by medication but provide a rough benchmark.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Patients may choose <strong>one-time purchase</strong> or <strong>ongoing subscription</strong>
            . Subscriptions may offer lower cost per supply, automatic continuity, and support built in —
            though not everyone likes subscription models.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Service delivery timeframes
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Orders may be processed once prescription approval is complete; dispatch typically Monday
            through Friday; many orders may arrive within a few business days — broadly in line with
            other pharmacy models.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Ongoing support and monitoring
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Support may include clinical check-ins, progress review, dose adjustments, and nurse and GP
          guidance — which may matter more than medication choice alone, because adherence often
          determines outcomes.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Safety, regulation and quality assurance
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          GoodBody appears to include professional prescribing, registered pharmacy dispensing, secure
          handling of health data, and regulated prescription governance — more reassurance than
          anonymous sellers offering no oversight.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why some patients choose GoodBody Clinic
        </p>
        <Points
          items={[
            "Medical oversight — support before and after prescribing",
            "Delivery confidence — tracked, discreet fulfilment",
            "Cost transparency — shipping often included",
            "Subscription flexibility — one-off and recurring options",
            "Clinical support — not left managing treatment alone",
          ]}
        />
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider GoodBody Clinic?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want medically supervised weight loss, prefer ongoing
          support rather than one-off ordering, need home delivery, value structured treatment plans,
          or have struggled with diet-only approaches. It may be less ideal for people who dislike
          subscription models or want face-to-face clinic support.
        </p>
      </section>

      <PharmacyPriceCompareHint className="mb-8 mt-2" />

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I get Wegovy through GoodBody Clinic?",
              a: "Yes, Wegovy appears available through GoodBody Clinic following medical assessment and approval.",
            },
            {
              q: "Does GoodBody Clinic include delivery in the price?",
              a: "Delivery often appears included in programme pricing, which may help avoid unexpected shipping costs.",
            },
            {
              q: "How much does GoodBody Clinic weight loss treatment cost?",
              a: "Some plans appear to start around £129 per month, with longer-term subscription bundles potentially reducing overall cost.",
            },
            {
              q: "Does GoodBody Clinic offer subscription treatment plans?",
              a: "Yes. Patients may choose one-off purchases or subscription-based treatment plans, depending on medication and preference.",
            },
            {
              q: "Is GoodBody Clinic regulated?",
              a: "GoodBody Clinic appears to operate through medically supervised prescribing and registered pharmacy fulfilment partners.",
            },
            {
              q: "Is GoodBody Clinic better than buying from a standard online seller?",
              a: "For patients who want clinical oversight, support and regulated prescribing, it may offer advantages over unregulated or anonymous sellers.",
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
          If you are looking for more than simply ordering weight loss medication online, GoodBody
          Clinic weight loss treatment appears to offer something broader. Access to treatments like
          Wegovy, paired with medical oversight, subscription support and integrated delivery, gives it a
          more structured feel than many standard online pharmacy models.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will it suit everyone? Probably not — some people may prefer simpler pay-as-you-go providers
          or traditional face-to-face care. But for patients seeking a medically supervised, longer-term
          approach to weight management, GoodBody Clinic may well be worth considering.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
