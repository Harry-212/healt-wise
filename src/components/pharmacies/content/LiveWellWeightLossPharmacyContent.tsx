"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://livewellweightloss.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function LiveWellWeightLossPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Live Well Weight Loss"
      fileRef="HW-LIVE-WELL-2026"
      title="Live Well Weight Loss (UK): Mounjaro, Wegovy, GPhC Pharmacy and Ongoing Clinical Care"
      subtitle="Licensed UK pharmacy weight loss service with pharmacist prescriber assessment, transparent pen pricing, discreet tracked delivery, follow up care, and how it differs from anonymous checkout sellers. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy · UK pharmacy"
      providerName="Live Well Weight Loss"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Live Well Weight Loss (GPhC 9012516 — verify premises on register)",
        },
        { k: "Treatments", v: "Mounjaro · Wegovy (prescription injectables, dose dependent)" },
        {
          k: "Fulfilment",
          v: "UK discreet dispatch · tracking · next day style turnaround where feasible",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Live Well Weight Loss.webp"
      heroProviderLogoAlt="Live Well Weight Loss"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          When you buy weight loss injections online in the UK, the provider matters as much as the
          price. Live Well Weight Loss presents itself as a licensed, GPhC registered pharmacy
          service built around clinically approved GLP-1 therapy, especially{" "}
          <strong>Mounjaro (tirzepatide)</strong> and <strong>Wegovy (semaglutide)</strong>, with
          prescribing, dispensing, and follow up described as one journey rather than a single
          anonymous transaction.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises how that journey is supposed to work, what delivery and pricing
          look like in public copy, and what reviewers say, so you can line Live Well up next to
          other regulated options. Always confirm live rules and prices on{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            livewellweightloss.co.uk
          </a>
          .
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Regulated service and specialist team</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            <strong>Fully licensed pharmacy.</strong> Live Well states that supply runs through a
            GPhC registered UK pharmacy, which matters because Mounjaro and Wegovy are prescription
            only medicines. They cannot legally be supplied without a qualified prescriber assessment.
            That is the line between regulated care and risky grey market or social media sellers.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            <strong>Specialist weight management focus.</strong> Their team includes independent
            prescribers and GPhC registered pharmacists with experience in medical weight management.
            The pitch is that weight treatment is not a side SKU clicked into a basket, but a service
            with assessment, monitoring, and dose decisions shaped to the patient.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            Verify the exact premises and superintendent on the{" "}
            <a
              href="https://www.pharmacyregulation.org/registers/pharmacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
            >
              GPhC register
            </a>{" "}
            before your first order, even if marketing copy reads confidently.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>How the service flows in four steps</p>
        <div className="mt-3 space-y-4">
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Step 1: Online consultation</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              You answer structured questions about health history, weight, and medicines so a
              prescriber can judge whether GLP-1 therapy fits UK style eligibility norms such as BMI
              and relevant comorbidities. The goal is alignment with clinical guidance, not a race to
              checkout.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Step 2: Expert assessment</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              A qualified pharmacist prescriber reviews the file, discusses side effects and
              titration, and selects dose and schedule if treatment is appropriate. That is described
              as real clinical oversight rather than a questionnaire that auto prints a prescription.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Step 3: Discreet delivery</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              After a prescription is issued, pens are dispensed from the UK pharmacy and sent to
              your address with plain outer packaging and tracking on many lines. Patient feedback
              often mentions discreet shipping without obvious branding that advertises weight loss at
              the door.
            </p>
          </div>
          <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
            <p className="font-bold text-slate-900">Step 4: Ongoing support</p>
            <p className="mt-2 text-slate-800 leading-relaxed">
              Live Well describes continuing care after the first box: progress checks, dose
              adjustments where appropriate, and maintenance style guidance for people who want help
              sustaining change rather than stopping at the first delivery.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Products and what public pricing often includes</p>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900">Mounjaro</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Weekly tirzepatide injection with dual incretin activity. Marketing ties it to
              appetite control and meaningful weight change when paired with lifestyle change. Public
              listings often show multiple strengths with illustrative bands around{" "}
              <strong>£144 to £289 per pen</strong> depending on strength, sometimes described as
              inclusive of basic consumables such as needles, wipes, and a disposal bin. Confirm the
              exact SKU bundle at checkout.
            </p>
          </div>
          <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
            <h2 className="font-sans text-lg font-bold text-slate-900">Wegovy</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Weekly semaglutide pen with trial evidence in obesity indications. Public copy often
              lists dose dependent illustrative pricing roughly <strong>£105 to £199 per pen</strong>
              . Discreet delivery and dose choice are presented as alternatives for patients who fit
              semaglutide based therapy better than tirzepatide, which is a prescriber decision.
            </p>
          </div>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Delivery, tracking, and speed</p>
        <Points
          items={[
            "Plain outer cartons to reduce obvious branding at the doorstep.",
            "Online tracking so you can plan around work or caring duties.",
            "Many patients report quick processing and efficient delivery, with next day dispatch where stock and location allow.",
            "Cold chain expectations should follow carrier guidance and the PIL once pens arrive.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing and monthly budgeting</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Live Well emphasises visible per pen pricing rather than opaque subscription stacks. For
            weekly GLP-1 therapy, total private monthly spend across the UK market often lands in a
            broad <strong>£120 to £300 plus</strong> band depending on dose and product, so headline
            pen prices are only part of the spreadsheet.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Their narrative stresses no hidden fees and no bait and switch cheap lure that explodes
            later. You should still read consultation frequency, repeat review charges if any, and
            delivery tier line items on the live basket.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Reviews and what verified patients say</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Independent review summaries for Live Well are often strong, frequently cited around{" "}
            <strong>4.7 out of 5</strong>, with recurring praise for communication, dispatch speed,
            and professional tone during follow up.
          </p>
          <blockquote className="mt-4 border-l-4 border-emerald-800/30 pl-4 text-sm italic text-slate-700">
            <p>&ldquo;Excellent service, great communication and delivery speed.&rdquo;</p>
            <p className="mt-2">
              &ldquo;Helpful and responsive team, easy to contact and very supportive.&rdquo;
            </p>
            <p className="mt-2">
              &ldquo;Discreet, fast delivery, exactly what you want for medications.&rdquo;
            </p>
          </blockquote>
          <p className="mt-3 text-sm text-slate-600">
            Star averages hide outliers. Sort by date and read how the company responds when
            something goes wrong.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Safety, titration, and maintenance</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          GLP-1 injectables need respectful titration, review of gastrointestinal symptoms, and clear
          plans for what to do if side effects limit dose. Live Well describes ongoing check ins so
          treatment is sustained safely rather than left on autopilot after the first prescription.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Maintenance style support covers habits, lifestyle planning, and discussions around
          longer run weight stability. That perspective matters because many quick sellers ship a
          box and disappear.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why this model matters compared with grey sellers</p>
        <Points
          items={[
            "Safety first prescribing rather than checkout automation.",
            "Genuine UK pharmacy supply with professional cold chain awareness.",
            "Continuing clinical dialogue instead of silent repeat boxes.",
            "Transparent headline pen prices for budgeting.",
            "Discreet logistics for a sensitive therapeutic area.",
            "Review patterns that reflect real UK patient experience when you read widely.",
          ]}
        />
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Live Well only injectables?",
              a: "Public marketing focuses on Mounjaro and Wegovy pens. Check the live formulary if you need oral alternatives.",
            },
            {
              q: "Will the outer box advertise weight loss?",
              a: "They emphasise discreet outer packaging. Inner pharmacy labelling still applies for safe identification and use.",
            },
            {
              q: "Can I change dose without speaking to the prescriber?",
              a: "Responsible UK models should not encourage unsupervised dose jumps. Follow the plan you are given and request review if problems arise.",
            },
            {
              q: "How does this compare to subscription clinics?",
              a: "Positioning stresses itemised pen pricing and pharmacy oversight. Your total cost still depends on consultation cadence and dose.",
            },
            {
              q: "Are needles always bundled with Mounjaro pens?",
              a: "Marketing sometimes bundles consumables with certain SKUs. Read the product page for the line you select.",
            },
            {
              q: "How do I verify the pharmacy registration?",
              a: "Match the premises name and address on Live Well’s site to the GPhC pharmacy register before paying.",
            },
          ].map((f) => (
            <div key={f.q} className="border-t border-slate-200/70 pt-4 first:border-t-0 first:pt-0">
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-2 text-slate-800 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <p className={sectionLabel}>Closing view</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Choosing where to buy weight loss medicine affects your health, your safety, and your
          budget. Live Well Weight Loss markets a medically supervised, GPhC backed alternative to
          anonymous checkout sellers: assessment, expert dosing, discreet delivery, transparent pen
          prices, and continuing support around Mounjaro or Wegovy.
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Line it up next to other serious UK providers on dose matched tables, read current
          clinical terms, and only proceed when you are comfortable with the prescriber&apos;s plan
          for you, not only with a third party summary.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Live Well Weight Loss
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
