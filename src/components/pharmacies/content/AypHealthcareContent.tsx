"use client";

import Link from "next/link";
import { Points, PharmacyDossierPage } from "./_dossier";

export default function AypHealthcareContent() {
  const providerUrl =
    "https://ayp.healthcare/weight-management-1?utm_source=healthwise360";

  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="AYP Healthcare"
      fileRef="HW-AYP-2026"
      title="AYP Healthcare Weight Management Review: Online Access to Wegovy, Mounjaro and Medically Supported Weight Loss"
      subtitle="Official dossier: how AYP Healthcare works, what treatments may be available, delivery, pricing context, and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Wegovy · Mounjaro"
      providerName="AYP Healthcare"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "AYP Healthcare" },
        { k: "Treatments", v: "Wegovy · Mounjaro" },
        { k: "Fulfilment", v: "Home delivery" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Losing weight sounds simple in theory. Eat less. Move more. Stick with it.
        </p>
        <p className="text-slate-800 leading-relaxed">
          In real life, it’s often messier than that. Appetite, stress, metabolic factors, old
          habits — they can all work against even the most disciplined plan. That may be one reason
          medically supported treatment has gained traction in the UK, especially with prescription
          options like{" "}
          <Link href="/what-is-wegovy" className="font-semibold underline underline-offset-2">
            Wegovy
          </Link>{" "}
          and{" "}
          <Link href="/what-is-mounjaro" className="font-semibold underline underline-offset-2">
            Mounjaro
          </Link>{" "}
          becoming more widely discussed.
        </p>
        <p className="text-slate-800 leading-relaxed">
          AYP Healthcare weight management positions itself in that space. Through an online
          prescribing model, AYP Healthcare offers consultations, prescription treatment, clinical
          oversight, and home delivery — all handled remotely.
        </p>
        <p className="text-slate-800 leading-relaxed">
          For some people, that may remove practical barriers that often stop treatment before it
          starts. This guide looks at how AYP Healthcare works, what treatments may be available,
          pricing, delivery, and why some patients consider it for long-term weight management.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is AYP Healthcare weight management?
        </p>
        <div className="mt-3 border border-slate-200/90 bg-white/70 p-5 shadow-sm sm:p-6">
          <p className="text-slate-800 leading-relaxed">
            AYP Healthcare provides an online service designed to help eligible patients access
            prescription weight loss treatment. Instead of traditional in-person appointments, the
            process happens digitally. Typically, it involves:
          </p>
          <Points
            items={[
              "Complete an online consultation",
              "Receive a medical assessment",
              "Select an appropriate treatment",
              "Home delivery",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            It sounds straightforward — and it mostly is. The appeal, though, is not only
            convenience. It’s access.
          </p>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why choose AYP Healthcare for weight management treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Easier access to prescription weight loss medication
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              One practical advantage is removing friction. No waiting rooms. No travel. No trying
              to fit appointments into a lunch break. With AYP, the process is managed online,
              which could suit people who want private access, need a faster route, prefer digital
              healthcare, or have struggled getting prescriptions elsewhere.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to clinically proven weight loss injections
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              AYP Healthcare focuses heavily on injectable treatments, including Mounjaro and
              Wegovy. These medications may support weight management by influencing pathways
              linked to hunger and satiety.
            </p>
            <Points items={["Mounjaro", "Wegovy"]} />
            <p className="mt-4 text-slate-800 leading-relaxed">
              They may reduce appetite, increase fullness, and lower food cravings. That does not
              mean effortless weight loss — but evidence suggests they can help some patients
              sustain calorie reduction in ways dieting alone often struggles to achieve.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Treatment that may support more than willpower alone
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              These medications do not simply “make you eat less.” They may affect hormonal signals
              tied to hunger, may slow digestion, and may support longer-term weight maintenance —
              different from crash diets built around deprivation.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How AYP Healthcare works: the 3-step process
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            {
              t: "Step 1: Online consultation",
              d: "Health questionnaire covering weight, BMI, medical history, and current medication use — determines suitability.",
            },
            {
              t: "Step 2: Treatment selection",
              d: "Once reviewed, you may choose the most appropriate option depending on goals, tolerance, availability and cost.",
            },
            {
              t: "Step 3: Home delivery",
              d: "Prescription processed, medication checked by a pharmacist, and dispatched to your address.",
            },
          ].map((s) => (
            <div key={s.t} className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
              <p className="font-bold text-slate-900">{s.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            Fast home delivery and medication handling
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Delivery is a surprisingly important part of online treatment. If supply is unreliable,
            treatment continuity suffers. AYP appears to recognize that.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Once approved, medication is dispensed professionally, securely packaged, and shipped
            directly to you. Timing varies, but treatment often appears to be dispatched quickly
            after approval. Some orders may require a signature. AYP states packaging is neutral
            and unbranded for privacy.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Safe handling for injectables may be supported through pharmacy-level quality checks,
            secure packaging, and efficient transit — particularly relevant for GLP-1 treatments.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            How much does AYP Healthcare weight management cost?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Cost depends on medication and dose. Typical injection costs may be around{" "}
            <strong>£130 per month</strong> at lower entry points and <strong>£350+</strong> at
            higher doses as treatment progresses (confirm live pricing on the provider site).
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing may include consultation, prescription, medication, clinical monitoring, and
            home delivery — a bundled structure that can make pricing easier to understand.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Ongoing monitoring and why medical supervision matters
        </p>
        <div className="mt-3 border border-slate-200/90 bg-white/70 p-5 shadow-sm sm:p-6">
          <p className="text-slate-800 leading-relaxed">
            This is not meant to be a one-time purchase. AYP Healthcare may include ongoing
            monitoring such as prescriber guidance, progress reviews, and treatment adjustments
            over time.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Prescription weight loss treatment is not suitable for everyone. It may be considered
            for people with BMI over 30, or BMI over 27 with related health risks — which is why
            proper screening is necessary.
          </p>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Frequently asked questions
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {[
            {
              q: "Can I get Wegovy through AYP Healthcare?",
              a: "Yes, Wegovy may be available through AYP Healthcare following a consultation and approval process.",
            },
            {
              q: "Does AYP Healthcare offer Mounjaro?",
              a: "Yes, Mounjaro appears to be one of the treatments offered, subject to suitability checks.",
            },
            {
              q: "How much does AYP Healthcare weight management cost?",
              a: "Pricing may range from around £130 to £350+ per month, depending on medication and dosage.",
            },
            {
              q: "Does AYP Healthcare deliver medication to your home?",
              a: "Yes. Approved prescriptions are shipped directly to patients, often with secure and sometimes signed delivery.",
            },
            {
              q: "Is AYP Healthcare a regulated provider?",
              a: "AYP Healthcare provides treatment through a medically supervised prescribing process, with pharmacy checks before dispatch.",
            },
            {
              q: "Is AYP Healthcare better than going through a GP?",
              a: "That depends. Some patients may prefer faster private access online. Others may prefer traditional GP-led care.",
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
          If you’re looking for a private route into prescription weight loss treatment, AYP
          Healthcare weight management appears to offer a credible option. Access to treatments
          like Wegovy and Mounjaro, paired with online consultations, home delivery and ongoing
          monitoring, makes it more than a simple online pharmacy model.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Could it suit everyone? Probably not. But for people wanting convenience, privacy and
          medically supervised support, it may be worth considering as part of a long-term
          strategy.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            View AYP Healthcare
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}

