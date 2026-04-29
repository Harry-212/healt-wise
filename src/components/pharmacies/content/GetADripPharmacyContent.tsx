"use client";

import { HazardBox, PharmacyDossierPage, Points } from "./_dossier";

const providerUrl = "https://getadrip.shop/";

export default function GetADripPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="GetADrip"
      fileRef="HW-GETADRIP-2026"
      title="GetADrip Weight Loss Review: Online Access to Wegovy, Mounjaro and Clinically Supervised Weight Management"
      subtitle="Official dossier: programme-style GLP-1 access, app and coaching, DPD delivery, subscription pricing and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Wegovy · Mounjaro · UK telehealth"
      providerName="Get A Drip"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Model", v: "UK telehealth · weight management programme" },
        { k: "Pricing guide", v: "~£109/mo Wegovy · ~£159/mo Mounjaro (typical)" },
        { k: "Delivery", v: "DPD · cold-chain · tracking" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Weight loss often gets framed as a discipline problem. Eat less. Move more. Stay committed.
          That advice isn&apos;t wrong exactly — it&apos;s just incomplete. For many people, appetite
          regulation, metabolic factors, emotional eating, and day-to-day routines make weight
          management more complicated than simple calorie math.
        </p>
        <p className="text-slate-800 leading-relaxed">
          That may help explain why medically supported programmes using treatments like Wegovy and
          Mounjaro have gained so much attention in the UK. GetADrip weight loss treatment takes a
          slightly broader approach than many online providers: rather than positioning itself only as
          a prescription service, GetADrip combines GLP-1 medication access, clinician oversight,
          behaviour change support, nutrition guidance and app-based tracking within a digital
          programme.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how GetADrip works, how delivery is handled, pricing, support, and why
          some patients may consider it for long-term weight management.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          What is GetADrip weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            GetADrip is a UK-based telehealth provider offering medically supervised weight management
            programmes. Unlike some providers focused primarily on prescriptions, GetADrip appears to
            position treatment as a broader programme. Patients may typically receive:
          </p>
          <Points
            items={[
              "Online consultation",
              "Clinical review",
              "Prescription treatment if appropriate",
              "Lifestyle and nutrition guidance",
              "Ongoing support via app and clinician follow-up",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Medication is part of the model — not the entire model. That wider structure may be one of
            its more distinctive features.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why choose GetADrip for weight loss treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. A more holistic approach than prescription-only providers
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Some online providers mainly focus on issuing prescriptions and dispatching medication.
              GetADrip appears to go further by combining GLP-1 treatment, behaviour change support,
              nutrition guidance, and progress monitoring — because for many patients, long-term weight
              loss problems are rarely solved by medication alone.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to clinically proven GLP-1 medications
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Available treatments include Mounjaro and Wegovy. They may help support weight management
              by influencing biological pathways linked to appetite and satiety — reducing hunger,
              increasing fullness, supporting lower calorie intake. That does not guarantee results;
              evidence suggests they may support weight reduction when paired with lifestyle changes.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Programmes that may focus on sustainability
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              GetADrip&apos;s programmes appear to range from shorter interventions to longer-term
              plans, sometimes up to 12 months — supporting habit formation, dose progression, and
              long-term maintenance. Maintenance is where many plans fail.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How GetADrip works
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            {
              t: "Step 1: Online assessment",
              d: "Questionnaire covering BMI, medical history, risk factors, and current medication use — to determine whether treatment may be appropriate. Screening matters.",
            },
            {
              t: "Step 2: Clinical review",
              d: "A UK-registered clinician reviews the assessment and may recommend Wegovy, Mounjaro, behaviour support, or nutrition guidance. Not everyone will qualify.",
            },
            {
              t: "Step 3: Ongoing support and programme access",
              d: "Once enrolled: 1-to-1 consultations, app-based reminders, progress tracking, behaviour coaching — more ongoing engagement than simpler pharmacy models.",
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
          GetADrip medication delivery and shipping
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">How delivery works</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Once approved: medication is dispensed, packaged securely, and shipped directly to your
              address. Deliveries are commonly handled through <strong>DPD</strong>; tracking is
              generally included.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Delivery timeframes</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Most orders may arrive within <strong>1–3 business days</strong> in many UK locations;
              remote areas may take longer.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Cold-chain delivery for GLP-1 injections</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Injectable medications like Mounjaro may require temperature control. GetADrip appears to
              use cold-chain packaging and temperature-sensitive shipping methods to help preserve
              product efficacy during transit.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Address verification and delivery security</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Patients provide a verified address when signing up. Some deliveries may require
              signature on arrival — reducing the risk of medicines reaching the wrong recipient.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            How much does GetADrip weight loss treatment cost?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing appears to use a <strong>subscription model</strong> — slightly different from
            one-off pharmacy purchasing. Typical examples: <strong>Mounjaro around £159 per month</strong>
            , <strong>Wegovy around £109 per month</strong>. Costs may vary by dosage and programme
            structure.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing may include medication, clinical support, and standard programme access; additional
            services such as nutritional consultations may involve separate costs — check before
            enrolling.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            App-based support and patient experience
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            GetADrip appears to include app-based tracking — progress, weight changes, reminders,
            programme milestones. Some people will value that; others may find apps unnecessary.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Patient reviews and experience
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Public reviews appear broadly positive around convenience, support, and professional
          oversight. Some challenges reportedly include occasional delivery delays and uncertainty
          around programme milestones — nuance matters; no provider is flawless.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How effective is GetADrip for weight loss?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Expected outcomes vary. Some programme materials suggest weight reduction of up to around{" "}
          <strong>22%</strong> over several months in certain cases — results depend on medication
          response, adherence, lifestyle, and baseline health. Guarantees should be viewed cautiously; a
          combined medication plus behaviour approach may offer advantages over medication alone.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why medical supervision matters
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          These medications are not appropriate for everyone. They may be considered for people with{" "}
          <strong>BMI over 30</strong>, or <strong>BMI over 27</strong> with related conditions. GetADrip
          appears to build screening and ongoing oversight into the model.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider GetADrip?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want more than prescription-only treatment, prefer online
          healthcare, value ongoing support, need home delivery, and want structured long-term weight
          management. It may be less ideal for those looking only for low-cost medication access.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why some patients choose GetADrip
        </p>
        <Points
          items={[
            "Holistic model — medication plus behaviour support",
            "Clinician oversight — ongoing supervision",
            "Cold-chain delivery — secure medication shipping",
            "Subscription access — structured continuity",
            "App-based tracking — extra support for adherence",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I get Wegovy from GetADrip?",
              a: "Yes, Wegovy may be available through GetADrip after clinical assessment and approval.",
            },
            {
              q: "Does GetADrip offer Mounjaro for weight loss?",
              a: "Yes, Mounjaro appears to be one of the prescription options available, subject to suitability checks.",
            },
            {
              q: "How much does GetADrip weight loss treatment cost?",
              a: "Pricing may start around £109 per month for Wegovy and £159 per month for Mounjaro, depending on programme structure.",
            },
            {
              q: "Does GetADrip deliver medication to your home?",
              a: "Yes. Approved prescriptions are shipped directly to patients, often through DPD using cold-chain delivery where required.",
            },
            {
              q: "Is GetADrip a regulated provider?",
              a: "GetADrip provides treatment through UK-registered clinicians with medically reviewed prescribing.",
            },
            {
              q: "Is GetADrip different from a normal online pharmacy?",
              a: "Potentially, yes. It appears to combine medication access with coaching, app tracking and longer-term support, rather than functioning purely as a dispensing service.",
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
          If you&apos;re looking for a more structured route into prescription weight management, GetADrip
          weight loss treatment appears to offer something slightly broader than many online pharmacy
          providers. Access to treatments such as Wegovy and Mounjaro, combined with clinician oversight,
          behavioural support, app-based tracking and cold-chain delivery, gives the model more depth
          than medication alone.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will that suit everyone? Probably not — some patients may prefer a simpler pharmacy-only
          route; others may value the added structure. For people looking for a medically supervised,
          more holistic and digitally managed approach to sustainable weight loss, GetADrip may be worth
          considering.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
