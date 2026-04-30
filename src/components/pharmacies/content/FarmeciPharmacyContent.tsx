"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://farmeci.com/";

export default function FarmeciPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Farmeci"
      fileRef="HW-FARMECI-2026"
      title="Farmeci Weight Loss Treatment Review: Online Access to Mounjaro, Wegovy and Clinician-Supervised Support in the UK"
      subtitle="Official dossier: how Farmeci works, partner-pharmacy dispensing, delivery, pricing context and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · GLP-1 · UK"
      providerName="Farmeci"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Operator", v: "My Health Stop Ltd" },
        { k: "Treatments", v: "Mounjaro · Wegovy · GLP-1 injectables (where appropriate)" },
        { k: "Fulfilment", v: "Partner pharmacies · home delivery · cold-chain (injectables)" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Weight loss can be framed as a matter of discipline, but real life tends to be less tidy
          than that. Appetite signals, long workdays, stress eating, hormones, medication side effects
          — they can all influence outcomes. For some people, prescription treatment may help bridge
          a gap that diet alone has not closed.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That seems to be where Farmeci weight loss treatment fits. Through its online healthcare
          platform, Farmeci offers access to clinician-reviewed prescription treatments, digital
          consultations, partner-pharmacy dispensing, and home delivery for eligible patients.
        </p>
        <p className="text-slate-800 leading-relaxed">
          For people exploring Mounjaro online prescription, buy Wegovy online UK, or regulated GLP-1
          weight loss injections, Farmeci is often part of that conversation. This review looks at how
          the service works, delivery, pricing, safety, and whether Farmeci may be worth considering.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          What is Farmeci weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Farmeci is an online prescribing platform operated by My Health Stop Ltd, working with
            GPhC-registered partner pharmacies and independent clinicians. Patients can generally:
          </p>
          <Points
            items={[
              "Complete an online health assessment",
              "Receive a clinician review",
              "Be prescribed treatment if appropriate",
              "Have medication shipped to their address",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            It is not simply an online storefront — or at least, it appears designed to be more than
            that. The clinical review element matters because prescription weight loss medications
            should not be treated like ordinary consumer products.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why choose Farmeci for weight loss treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Clinician-led medical oversight
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              One of Farmeci&apos;s stronger points may be its structured prescribing process.
              Treatment begins with a consultation asking about BMI, medical history, current
              medications, and relevant health conditions. A clinician then reviews whether treatment
              may be suitable. Only after approval can medication be prescribed. That may sound
              obvious, but not every online seller operates this way — and frankly, that distinction
              matters.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to evidence-based weight loss medications
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Farmeci offers access to prescription treatments such as Mounjaro, Wegovy, and GLP-1
              based injectable options — potentially other treatment pathways depending on suitability.
              These medications may support weight loss by helping regulate appetite and increasing
              satiety. They may reduce hunger signals, help people feel fuller longer, and support
              lower calorie intake over time. That does not make weight loss effortless, and it should
              not be presented that way — but it may make adherence easier for some people.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Personalised treatment support
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Farmeci does appear to position itself as more than a prescription issuer. Support may
              include dose guidance, advice on injection use, expectations around side effects, and
              follow-up support. That can matter, especially for first-time GLP-1 users — many questions
              do not appear until treatment begins.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              4. Private and convenient online access
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              The process is remote: no GP queue, no travel, no in-person pharmacy collection. For
              people balancing work, childcare or privacy concerns, that could be a genuine advantage.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How Farmeci works step by step
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Complete online assessment",
              d: "A consultation covering weight and BMI, health conditions, current medications, and lifestyle factors. This determines whether treatment may be considered.",
            },
            {
              t: "Step 2: Clinician review and prescription",
              d: "A prescribing clinician reviews the information. They may approve treatment, request more information, or decide treatment is unsuitable. Not everyone qualifies — that is a safeguard.",
            },
            {
              t: "Step 3: Dispensing through partner pharmacy",
              d: "If approved: prescription is issued, medication is dispensed by a partner pharmacy, and the order is prepared for shipping. Farmeci coordinates access; partner pharmacies handle dispensing — a structure that may reassure some patients.",
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
          Farmeci delivery and home shipping
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">How delivery works</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Once approved: medication is dispensed, securely packaged, and sent to your chosen
              address. Tracking details may be provided — relatively standard, though useful.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Delivery timeframes</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Delivery timing can vary. Some treatments may be shipped within 24–48 hours in eligible
              regions, depending on stock and courier performance — which may help maintain
              continuity of treatment. Courier delays can still happen.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Cold-chain delivery for injections</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Injectables like Mounjaro and Wegovy may require refrigerated transport. Farmeci
              indicates cold-chain conditions may be used where necessary — to help preserve potency,
              stability, and product quality. For GLP-1 injectables, that should be treated as
              non-negotiable.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Delivery to your address</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Medication is shipped directly to the address provided. Depending on circumstances, a
              signature may be required; safe delivery conditions may be your responsibility; tracking
              may be available.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            How much does Farmeci weight loss treatment cost?
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Costs depend on medication, dose and treatment duration. Some treatment pages indicate
            prices starting around <strong>£92 per dose or pen</strong>, though actual costs may vary.
            Factors may include medication type, dose escalation, and supplier pricing — higher doses
            are likely to cost more.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Farmeci generally appears to offer a <strong>free online consultation</strong> — no
            separate assessment fee unless stated — which may reduce entry costs compared with
            private clinic appointments. Shipping may be charged separately depending on address,
            delivery method, and cold-chain requirements; fees are usually disclosed at checkout.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Longer-term use may involve repeat prescriptions, follow-up orders, and ongoing
            medication spend — worth budgeting for. GLP-1 treatment is rarely a one-month strategy.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Refunds, cancellations and returns
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Prescription medicines generally cannot be returned once dispensed. Orders may sometimes be
            cancelled before dispatch, though fees may apply in some cases. Farmeci also notes certain
            administrative charges may apply in specific scenarios — not unusual, but important to
            understand.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why medical oversight matters
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Prescription weight loss treatment may be considered for people with{" "}
          <strong>BMI over 30</strong>, or <strong>BMI over 27</strong> with related health conditions
          — that is why screening matters. Not everyone should be prescribed these medications, and a
          provider that ignores that would be concerning. Farmeci appears to keep medical review
          central; that is a strength.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider Farmeci?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want medically supervised weight loss, prefer online
          healthcare access, need discreet home delivery, value clinician oversight, or have struggled
          with diet-only approaches. It may be less suited to people wanting face-to-face clinical
          care — fair to acknowledge both.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why some patients choose Farmeci
        </p>
        <Points
          items={[
            "Convenience — everything happens online",
            "Clinical oversight — treatment involves medical review",
            "Treatment access — includes options like Mounjaro and Wegovy",
            "Delivery support — tracked shipping and cold-chain handling where needed",
            "Transparent pricing — consultation appears included",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I get Wegovy from Farmeci?",
              a: "Yes, Wegovy may be available through Farmeci following a consultation and clinician approval.",
            },
            {
              q: "Does Farmeci offer Mounjaro for weight loss?",
              a: "Yes, Mounjaro appears to be among available treatment options, subject to suitability review.",
            },
            {
              q: "How much does Farmeci weight loss treatment cost?",
              a: "Some prices appear to start around £92 per dose or pen, though total costs may vary depending on medication, dosage and shipping.",
            },
            {
              q: "Does Farmeci deliver medication to your home?",
              a: "Yes. Approved prescriptions are shipped directly to your chosen address, with tracking and cold-chain handling where required.",
            },
            {
              q: "Is Farmeci regulated?",
              a: "Farmeci works with GPhC-registered partner pharmacies and independent prescribing clinicians.",
            },
            {
              q: "Are there consultation fees?",
              a: "Farmeci generally appears to offer a free online consultation, though users should confirm any charges during checkout.",
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
          If you are looking for regulated online access to prescription weight loss treatment,
          Farmeci weight loss treatment appears to offer a credible option. Access to treatments like
          Mounjaro and Wegovy, paired with clinician review, partner-pharmacy dispensing, and tracked
          home delivery, gives it more substance than a basic online pharmacy storefront.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will it suit everyone? Probably not — some people may prefer traditional GP-led routes. But
          for those prioritising convenience, privacy and medically supervised support, Farmeci may be
          worth considering as part of a longer-term weight management approach.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
