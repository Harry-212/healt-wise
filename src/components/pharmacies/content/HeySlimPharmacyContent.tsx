"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.heyslim.co.uk/";

export default function HeySlimPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Hey Slim"
      fileRef="HW-HEY-SLIM-2026"
      title="Hey Slim Weight Loss Review: Online Access to Mounjaro, Wegovy and Clinician-Led Support in the UK"
      subtitle="Official dossier: clinician-led programme, GLP-1 access, delivery often included, pricing ranges and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · UK"
      providerName="heySlim"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Model", v: "Clinician-led weight management programme" },
        { k: "Delivery", v: "Often 1–2 business days · included in pricing (stated)" },
        { k: "From (guide)", v: "Plans from ~£89/mo · dose-dependent Mounjaro/Wegovy" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Weight loss is often framed as discipline. Eat less. Move more. Try harder. That can be a
          misleading oversimplification. For many people, appetite regulation, metabolic adaptation,
          emotional eating, even poor sleep can make &quot;simple&quot; advice far less simple in
          practice.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Hey Slim weight loss treatment sits in that category — though it positions itself slightly
          differently. Rather than functioning as a basic online pharmacy, Hey Slim presents itself as a
          clinician-led weight management programme, combining prescribing, medical oversight and ongoing
          support. That distinction may matter for patients who want structure, not just medication.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Hey Slim works, what treatments may be available, how delivery is
          handled, pricing, and why some people consider it for medically supported weight loss.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          What is Hey Slim?
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Hey Slim is a UK-based online weight management service offering prescription treatment
            through clinician review. Patients typically move through a structured process:
          </p>
          <Points
            items={[
              "Complete an online medical intake",
              "Receive clinician evaluation",
              "Get a personalised treatment plan if suitable",
              "Have medication delivered to their home",
              "Continue treatment with ongoing monitoring",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            It appears designed more as a programme than a one-off purchase — the last point arguably
            sets it apart from simple transactional pharmacy models.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why choose Hey Slim for weight loss treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Clinician-led rather than purely transactional
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Hey Slim states UK-registered clinicians review patient information and make prescribing
              decisions — potentially deeper oversight than services relying mainly on automated screening.
              For GLP-1 treatments, side effects, dose escalation and contraindications may need monitoring.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to prescription weight loss medications
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Hey Slim focuses largely on GLP-1 based treatments including Mounjaro and Wegovy. They may
              support weight loss by influencing appetite mechanisms — increased satiety, reduced hunger,
              lower calorie intake. That does not make weight loss effortless.
            </p>
            <p className="mt-3 text-slate-800 leading-relaxed">
              These medications may affect hormone signalling involved in hunger regulation, gastric
              emptying, and craving control — which may explain why some people respond well where
              conventional dieting has failed, though not everyone responds the same.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Personalised treatment plans and ongoing support
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Treatment appears tailored using medical history, body metrics, goals, and lifestyle
              factors — prescription treatment, nutrition guidance, progress monitoring. Patients may
              also receive ongoing check-ins, patient portal messaging, and treatment adjustments over
              time.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How Hey Slim works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              t: "Step 1: Online medical intake",
              d: "Questionnaire covering health history, medications, allergies, weight and goals, lifestyle — assessing eligibility.",
            },
            {
              t: "Step 2: Provider evaluation",
              d: "A clinician reviews the information; may request detail; determines suitability and appropriate medication. Not every patient will qualify.",
            },
            {
              t: "Step 3: Personalised prescription",
              d: "If approved: prescription issued, treatment plan created, medication dispensed through a partner pharmacy.",
            },
            {
              t: "Step 4: Home delivery",
              d: "Hey Slim states delivery often arrives within 1–2 business days; shipping is generally included in treatment pricing.",
            },
            {
              t: "Step 5: Ongoing monitoring",
              d: "Support may continue through the patient portal — treatment review and adjustments as needed.",
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
          Hey Slim delivery and home shipping
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">How delivery works</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Medication is dispensed, securely packaged, sent to your home. Shipping is generally
              included in treatment pricing — hidden courier fees can change perceived value.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Discreet packaging · signature</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Packaging is described as discreet. Some deliveries may not require signature — convenient
              for busy households; others may prefer signed delivery for security.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Regulated dispensing</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Medication appears dispensed through a GPhC-registered partner pharmacy — supporting
              authenticity, legal compliance, and safe supply chain controls.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            How much does Hey Slim cost?
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Wegovy:</strong> reported ranges include roughly <strong>£79–£159</strong> initial
            month and <strong>£119–£199</strong> ongoing depending on strength.{" "}
            <strong>Mounjaro:</strong> roughly <strong>£129–£269</strong> first month,{" "}
            <strong>£169–£309</strong> ongoing. Some plans appear to start from around{" "}
            <strong>£89 per month</strong>.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing may cover clinician review, personalised plan, prescription, delivery, and ongoing
            support — a bundled model that may simplify comparison. Value depends on whether monitoring
            matters to you, not price alone.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Is Hey Slim safe and legitimate?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Based on stated model, it appears designed within UK regulatory structures — licensed
            clinicians and a GPhC-registered pharmacy partner — very different from unregulated online
            sellers.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider Hey Slim?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want medically supervised weight loss, prefer a programme over
          simple pharmacy ordering, need fast private access, value clinician involvement, and want
          support alongside medication. It may be less suitable for face-to-face in-person care.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why some patients choose Hey Slim
        </p>
        <Points
          items={[
            "Clinician-led care — more medical involvement than some competitors",
            "GLP-1 access — Mounjaro and Wegovy",
            "Fast delivery — often 1–2 business days",
            "Support structure — monitoring beyond first prescription",
            "Transparent pricing — shipping included (as stated)",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I get Wegovy through Hey Slim?",
              a: "Yes, Wegovy may be available through Hey Slim after clinician review and approval.",
            },
            {
              q: "Does Hey Slim offer Mounjaro for weight loss?",
              a: "Yes, Mounjaro appears among available treatment options, subject to suitability checks.",
            },
            {
              q: "How much does Hey Slim weight loss treatment cost?",
              a: "Costs may range from around £129–£269 initially for Mounjaro, and £79–£159 initially for Wegovy, with ongoing monthly costs varying by dose.",
            },
            {
              q: "Does Hey Slim include delivery?",
              a: "Yes. Delivery appears included in treatment pricing, with shipping often taking around 1–2 business days.",
            },
            {
              q: "Is Hey Slim a regulated provider?",
              a: "Hey Slim states treatment is provided through UK clinicians and a GPhC-registered pharmacy partner.",
            },
            {
              q: "Is Hey Slim better than a standard online pharmacy?",
              a: "Possibly, if you value ongoing monitoring and clinician involvement. If you only want prescription fulfilment, a simpler pharmacy model may also suit some patients.",
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
          If you&apos;re looking for a more structured approach to prescription weight loss treatment,
          Hey Slim weight loss treatment appears to offer something slightly different from standard online
          pharmacy providers. Access to medications such as Mounjaro and Wegovy, combined with clinician
          review, included delivery and ongoing support, gives it a programme-style feel rather than a
          one-time transaction.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will it suit everyone? Probably not — some people may prefer traditional GP-led routes or
          lower-cost pharmacy-only options. But for those wanting medically supervised treatment with
          convenience and structure, Hey Slim may be worth considering as part of a longer-term weight
          management plan.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
