"use client";

import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://fyldeclinic.co.uk/";

export default function FyldeClinicPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Fylde Clinic"
      fileRef="HW-FYLDE-2026"
      title="Fylde Clinic Weight Loss Treatment Review: Online Access to Mounjaro, Wegovy and Clinician-Led Support in the UK"
      subtitle="Official dossier: how Fylde Clinic works, temperature-controlled delivery, pricing context and FAQs (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · UK online pharmacy"
      providerName="Fylde Clinic"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Fylde Clinic (UK-regulated online pharmacy)" },
        { k: "Treatments", v: "Mounjaro · Wegovy (where appropriate)" },
        { k: "Fulfilment", v: "Tracked delivery · 2–8°C insulated packaging (injectables)" },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-emerald-100 bg-emerald-50/50 p-5 shadow-sm"><p className="text-slate-800 leading-relaxed"><strong className="text-emerald-900">Provider Overview:</strong> Fylde Clinic is presented as a UK online route into clinician-led weight management. A fair assessment depends on how the pathway works in practice — the initial consultation, suitability checks, ongoing support, and the realities of dispatch and delivery for prescription treatments. This dossier provides independent context about Fylde Clinic to help you compare providers on more than headlines.</p></div>
        <p className="text-slate-800 leading-relaxed">
          Weight loss tends to get framed as a discipline problem. Eat less. Move more. Try harder.
          But for many people, that advice barely scratches the surface. Appetite regulation, long-term
          habits, stress, metabolic factors — these can all complicate what sounds simple in theory.
          That may help explain why prescription treatments like Mounjaro and Wegovy have become
          increasingly considered across the UK.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Fylde Clinic weight loss treatment is one provider operating in that space. Through a
          clinician-led online model, Fylde Clinic offers medical assessment, prescription treatment,
          temperature-controlled home delivery and ongoing support for eligible patients. For some
          people, that may be a practical alternative to traditional in-person clinics.
        </p>
        <p className="text-slate-800 leading-relaxed">
          This guide looks at how Fylde Clinic works, what treatments may be available, how delivery
          is managed, what costs may look like, and why some patients consider it for medically
          supervised weight management.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          What is Fylde Clinic weight loss treatment?
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Fylde Clinic is a UK-regulated online pharmacy and weight loss provider offering
            prescription-only medications following clinician review. Rather than attending
            appointments in person, patients typically:
          </p>
          <Points
            items={[
              "Complete an online consultation",
              "Undergo a medical assessment",
              "Receive treatment approval if suitable",
              "Have medication delivered to their home",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Simple structure — but arguably the stronger point is medical oversight. This is not
            simply ordering medication online; treatment is assessed before prescribing. That
            distinction matters.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why choose Fylde Clinic for weight loss products?
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Clinician-led medical oversight
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Before treatment is issued, factors such as BMI, medical history, existing medications,
              and treatment goals are reviewed. That may help support safer prescribing and creates a
              meaningful difference from unregulated sellers, where medication can sometimes be
              accessed without proper checks. For many patients, that alone may justify choosing a
              regulated provider.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Access to clinically endorsed weight loss injections
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Fylde Clinic focuses heavily on injectable treatments including Mounjaro and Wegovy —
              established prescription treatments used within medical weight management.
            </p>
            <p className="mt-3 text-slate-800 leading-relaxed">
              <strong>Mounjaro</strong> is a weekly injectable medication that may help regulate
              appetite and support weight reduction. Some published evidence has suggested substantial
              weight loss may be possible within structured programmes, though outcomes can vary — and
              they do; results are rarely identical from one person to the next.
            </p>
            <p className="mt-3 text-slate-800 leading-relaxed">
              <strong>Wegovy</strong> may support appetite control and help reduce food cravings.
              Clinical research has associated it with meaningful average weight loss in appropriate
              patients, especially alongside lifestyle support. Again, &quot;average&quot; does a lot
              of work — individual outcomes may differ.
            </p>
            <p className="mt-3 text-slate-800 leading-relaxed">
              They may help by reducing appetite, increasing satiety, and supporting lower calorie
              intake — not by replacing behaviour change, but perhaps by making it easier to sustain.
            </p>
          </div>

          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Personalised online consultation
            </h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Patients complete an online consultation covering health details, weight and BMI,
              current medications, and treatment goals. A clinician reviews the information; further
              clarification may sometimes be requested — which, if anything, tends to reinforce the
              seriousness of the assessment.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          How Fylde Clinic delivery works
        </p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Same-day dispatch</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Fylde states approved orders may be dispatched the same day using Royal Mail Tracked 24.
              That may support relatively fast delivery; for some patients, treatment may arrive
              within 24 to 48 hours, though remote areas may occasionally differ.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Real-time tracking</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Tracking appears included, allowing patients to monitor delivery from dispatch to
              arrival — a practical detail, but useful.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Temperature-controlled delivery</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Injectable treatments are shipped in insulated packaging designed to maintain{" "}
              <strong>2–8°C</strong> for up to <strong>72 hours</strong>. That may help protect
              medication stability during transit — and with GLP-1 medications, that matters.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">UK-wide home delivery</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Medication is delivered directly to your address — no pharmacy collection, no clinic
              pickup, just direct shipment. That simplicity likely appeals to many patients.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Patient experience and delivery reliability
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Delivery speed is one thing; consistency is another. Reported feedback appears to highlight
          fast order processing, reliable next-day arrivals in many cases, well-packaged supplies, and
          included accessories such as sharps bins and needles. Those details may sound minor, but they
          can improve treatment practicality quite a bit.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Service management and ongoing support
        </p>
        <div className="mt-3 space-y-4">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <p className="font-bold text-slate-900">Pharmacist review before dispatch</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Orders are reviewed by a pharmacist before shipping. If concerns arise, additional
              information may be requested; if treatment is considered unsuitable, orders may be
              cancelled with refund — arguably how responsible prescribing should work.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <p className="font-bold text-slate-900">Faulty pen replacements</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Fylde also appears to offer replacement support for damaged or faulty pens, subject to
              verification — a useful safeguard.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <p className="font-bold text-slate-900">Clinical support during treatment</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Patients may access support for treatment questions, delivery issues, and medication
              guidance — that may matter more over time than people expect.
            </p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            How much does Fylde Clinic weight loss treatment cost?
          </p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing depends on medication and dose. <strong>Wegovy</strong> appears to start around{" "}
            <strong>£99</strong>; higher doses increase in price. <strong>Mounjaro</strong> appears to
            start around <strong>£134</strong> — again, higher strengths cost more.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Pricing may include prescription processing, medication, tracked UK delivery, and sharps
            bin — that bundled model may compare favourably with providers charging extra shipping.
            Fylde Clinic states tracked UK delivery is included, with no separate shipping charge.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
            Is Fylde Clinic competitive on price?
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            It appears so — at least relative to some UK competitors. Still, lower cost should
            probably not be the only metric; support and safe prescribing arguably matter just as
            much.
          </p>
        </section>
      </div>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Positive customer feedback
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Verified reviews seem to mention recurring themes: fast delivery (often within 24 hours),
          competitive pricing compared with some alternatives, responsive support, and thorough checks
          in medical screening that may increase confidence. Taken together, that may explain why the
          service has attracted attention. Reviews should always be read critically.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Who might consider Fylde Clinic?
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This service may suit people who want medically supervised weight loss treatment, prefer
          online access rather than in-person clinics, need reliable home delivery, value privacy, and
          want structured support. It may be less ideal for patients preferring ongoing face-to-face
          clinical care — fair to acknowledge that.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm">
          Why some patients choose Fylde Clinic
        </p>
        <Points
          items={[
            "Clinician-led prescribing — assessment before treatment",
            "Fast tracked delivery — often very quick dispatch",
            "Temperature-controlled shipping — especially relevant for injections",
            "Competitive pricing — often positioned lower than some competitors",
            "Ongoing support — beyond first order",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Can I get Wegovy from Fylde Clinic?",
              a: "Yes, Wegovy may be available through Fylde Clinic after an online consultation and clinician approval.",
            },
            {
              q: "Does Fylde Clinic offer Mounjaro for weight loss?",
              a: "Yes, Mounjaro appears to be one of its core weight loss treatments, subject to eligibility review.",
            },
            {
              q: "How much does Fylde Clinic weight loss treatment cost?",
              a: "Pricing may start around £134 for Mounjaro and £99 for Wegovy, with higher doses costing more.",
            },
            {
              q: "Does Fylde Clinic provide temperature-controlled delivery?",
              a: "Yes. Injectable medications appear to be shipped in insulated packaging designed to maintain 2–8°C during transit.",
            },
            {
              q: "Is Fylde Clinic regulated?",
              a: "Fylde Clinic operates as a regulated UK provider using clinician review and pharmacist oversight before treatment is supplied.",
            },
            {
              q: "Is delivery included in the price?",
              a: "Fylde Clinic states tracked UK delivery is included, with no separate shipping charge.",
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
          If you&apos;re looking for a private route into prescription weight loss treatment, Fylde
          Clinic weight loss treatment appears to offer a credible option. Access to treatments such as
          Mounjaro and Wegovy, paired with clinician-led assessment, temperature-controlled delivery
          and ongoing support, gives the service more substance than a simple online pharmacy model.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Will it suit everyone? Probably not — some patients may still prefer traditional
          clinic-based care. But for those prioritising convenience, regulated prescribing and reliable
          home delivery, Fylde Clinic may be worth considering as part of a medically supervised
          long-term weight management plan.
        </p>
      </section>
    </PharmacyDossierPage>
  );
}
