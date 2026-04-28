"use client";

import Link from "next/link";
import { Points, PharmacyDossierPage } from "./_dossier";

export default function AsdaOnlineDoctorContent() {
  const providerUrl =
    "https://onlinedoctor.asda.com/uk/weight-loss-treatment.html?utm_source=healthwise360";

  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Asda Online Doctor"
      fileRef="HW-ASDA-2026"
      title="Asda Online Doctor Weight Loss Treatment: Safe, Convenient and Affordable Weight Loss Medication in the UK"
      subtitle="Official dossier: how Asda Online Doctor works, what treatments may be available, delivery notes, pricing context, and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Wegovy · Mounjaro · Saxenda · Orlistat"
      providerName="Asda Online Doctor"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Asda Online Doctor" },
        { k: "Treatments", v: "Wegovy · Mounjaro · Saxenda · Orlistat" },
        { k: "Fulfilment", v: "Home delivery" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Losing weight is not always easy, especially when diet and exercise alone do not produce
          the results you need. For many people in the UK, prescription treatments such as weight
          loss injections and tablets can offer clinically supported help.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Asda Online Doctor weight loss treatment provides a safe, convenient, and regulated way
          to access medications like{" "}
          <Link href="/what-is-wegovy" className="font-semibold underline underline-offset-2">
            Wegovy
          </Link>
          ,{" "}
          <Link href="/what-is-mounjaro" className="font-semibold underline underline-offset-2">
            Mounjaro
          </Link>
          ,{" "}
          <Link href="/what-is-saxenda" className="font-semibold underline underline-offset-2">
            Saxenda
          </Link>
          , and Orlistat online without visiting a GP in person.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Through a fully digital process, patients can complete an online consultation, receive
          approval from UK-registered doctors, and have medication delivered discreetly to their
          home.
        </p>
        <p className="text-slate-800 leading-relaxed">
          In this guide, we explain how Asda Online Doctor works, what treatments are available,
          pricing, delivery options, and why it is a trusted provider for weight loss medication in
          the UK.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          What is Asda Online Doctor weight loss treatment?
        </p>
        <div className="mt-3 border border-slate-200/90 bg-white/70 p-5 shadow-sm sm:p-6">
          <p className="text-slate-800 leading-relaxed">
            Asda Online Doctor is an online healthcare service that allows patients to consult
            licensed UK doctors remotely and receive prescription treatment if clinically suitable.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            Its weight loss service includes access to:
          </p>
          <Points items={["Wegovy", "Mounjaro", "Saxenda", "Orlistat"]} />
          <p className="mt-4 text-slate-800 leading-relaxed">
            These treatments can help support weight loss by:
          </p>
          <Points
            items={[
              "Reducing appetite",
              "Improving satiety (feeling fuller for longer)",
              "Supporting blood sugar regulation",
              "Assisting long-term weight management",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            All prescriptions are subject to medical assessment, helping ensure treatment is
            appropriate and safe.
          </p>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Why choose Asda Online Doctor for weight loss treatment?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Convenient online access to weight loss medication
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              One of the main reasons people choose Asda Online Doctor for weight loss injections
              is convenience. The process is fully online:
            </p>
            <Points
              items={[
                "Complete a medical questionnaire",
                "Receive a doctor review",
                "Get approved if suitable",
                "Have medication delivered to your door",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              There is no need to book in-person appointments or visit a clinic, making it easier
              to fit around busy schedules.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Safe and regulated UK prescribing service
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Safety matters when buying weight loss medication online. Asda Online Doctor offers:
            </p>
            <Points
              items={[
                "UK-registered doctors",
                "Regulated pharmacy dispensing",
                "Clinical eligibility checks",
                "Legitimate prescription-only medication",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              This helps protect patients from counterfeit or unsafe products sold through
              unregulated sources.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Access to effective weight loss treatments
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Asda offers some of the most popular prescription treatments currently available in
              the UK.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
                <p className="font-bold text-slate-900">Wegovy</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  A weekly GLP-1 injection designed to reduce appetite and support sustainable
                  weight loss.
                </p>
              </div>
              <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
                <p className="font-bold text-slate-900">Mounjaro</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Another once-weekly injection that may support appetite control and metabolic
                  support.
                </p>
              </div>
              <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
                <p className="font-bold text-slate-900">Orlistat</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  A tablet that works differently by reducing fat absorption from food.
                </p>
              </div>
              <div className="border border-slate-200/90 bg-white/80 p-4 shadow-sm">
                <p className="font-bold text-slate-900">When combined with</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Calorie control, healthy nutrition and regular exercise.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              4. Personalised doctor-led support
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Unlike over-the-counter products, Asda Online Doctor provides medical supervision.
              Doctors assess:
            </p>
            <Points
              items={[
                "BMI",
                "Medical history",
                "Current medications",
                "Suitability for treatment",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">Patients can also receive:</p>
            <Points
              items={[
                "Dosage guidance",
                "Side effect advice",
                "Ongoing monitoring",
                "Dose adjustments when needed",
              ]}
            />
            <p className="mt-4 text-slate-800 leading-relaxed">
              This creates a more structured weight management plan.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          How Asda Online Doctor works step by step
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Step 1: Complete online consultation",
              d: "Provide information including weight, BMI, medical history and current medications.",
            },
            {
              t: "Step 2: Doctor review",
              d: "A UK doctor reviews your information and determines whether treatment is suitable.",
            },
            {
              t: "Step 3: Prescription approval",
              d: "If approved: a prescription is issued and medication is prepared.",
            },
            {
              t: "Step 4: Home delivery",
              d: "Treatment is securely shipped to your address.",
            },
            {
              t: "Step 5: Ongoing support",
              d: "Patients can reorder, ask questions and manage treatment online.",
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
            How long does delivery take?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Delivery times may vary, but typically orders are processed after approval, doctors may
            respond within 48 hours if extra information is needed, and treatment often arrives
            within a few days.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
            How much does Asda Online Doctor weight loss treatment cost?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing depends on medication and dosage. Typical ranges may include Wegovy from around
            <strong> £88.97 per month</strong> (higher doses up to <strong>£248.97</strong>) and
            Mounjaro from around <strong>£148.97</strong>. Tablet options like Orlistat are often
            lower cost. Most patients can expect roughly <strong>£90 to £250 per month</strong>{" "}
            depending on treatment and dose (confirm live pricing on the provider site).
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
              q: "Can I buy Wegovy online from Asda Online Doctor?",
              a: "Yes, Wegovy may be available through Asda Online Doctor after completing a medical assessment and receiving doctor approval.",
            },
            {
              q: "Is Mounjaro available through Asda Online Doctor?",
              a: "Yes, Mounjaro may be prescribed if clinically appropriate following an online consultation.",
            },
            {
              q: "Do I need a GP appointment first?",
              a: "Typically no — the consultation and review happen online.",
            },
            {
              q: "Does Asda Online Doctor deliver to your home?",
              a: "Yes, approved medications can be delivered directly to your address using discreet and secure delivery, including temperature-controlled packaging for injections.",
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
          Choosing Asda Online Doctor weight loss treatment offers a practical combination of
          safety, convenience, and affordability for people seeking medically supported weight loss
          solutions.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          With access to treatments like Wegovy, Mounjaro and Orlistat, plus discreet delivery,
          transparent pricing, and ongoing doctor support, Asda provides a trusted route to
          accessing prescription weight loss medication in the UK.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 sm:w-auto"
          >
            View Asda Online Doctor
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}

