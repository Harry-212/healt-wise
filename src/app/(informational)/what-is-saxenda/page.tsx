import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import MedicationPriceCompareTeaser from "@/components/content/MedicationPriceCompareTeaser";
import SaxendaExpectationPhases from "@/components/saxenda/SaxendaExpectationPhases";
import {
  SaxendaDeferredBodyJourneyFlow,
  SaxendaDeferredWeekDoseTimeline,
  SaxendaDeferredWeightLossChart,
  SaxendaDeferredWeightProgressionChart,
} from "@/components/saxenda/saxenda-what-is-deferred";
import SaxendaPenTilt from "@/components/saxenda/SaxendaPenTilt";
import SaxendaPageToc from "@/components/saxenda/SaxendaPageToc";
import {
  saxendaArticleJsonLd,
  saxendaFaqJsonLd,
  SAXENDA_FAQ_ITEMS,
} from "@/lib/seo/saxenda-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/what-is-saxenda",
  title:
    "What is Saxenda? UK guide (2026): daily GLP-1, weight loss & prices",
  metaDescription:
    "Saxenda (liraglutide) explained for UK readers: once-daily GLP-1 mechanism, SCALE trial results, dose escalation, private prices, eligibility, safety, and how it compares to Wegovy and Mounjaro.",
  openGraphTitle:
    "What is Saxenda? UK guide (2026): daily GLP-1, weight loss & prices | Health Wise",
  openGraphDescription:
    "Independent guide to Saxenda: how it works, 56-week trial context, UK prices, and comparison with newer weekly injections.",
  imagePath: "/saxenda health wise.png",
  imageAlt: "Saxenda (liraglutide) pen — UK guide on Health Wise",
});

export default function WhatIsSaxendaPage() {
  const articleLd = saxendaArticleJsonLd();
  const faqLd = saxendaFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <article className="w-full">
        <section
          id="what-is-saxenda"
          className="scroll-mt-28 w-full border-b border-slate-200/80 bg-background"
        >
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-5 sm:py-12 md:px-8 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col items-start gap-8">
                <h1 className="max-w-[18ch] text-left text-3xl font-bold uppercase leading-[1.05] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.02]">
                  What is Saxenda?
                </h1>
                <SaxendaPenTilt className="w-full max-w-[280px] shrink-0" />
              </div>
              <div className="space-y-5 text-base leading-[1.65] text-slate-800">
                <p>
                  Saxenda® (liraglutide) is a prescription weight loss medication
                  used for long-term weight management in adults with obesity, or
                  those who are overweight with related health conditions.
                </p>
                <p>
                  It belongs to a class of medicines known as GLP-1 receptor
                  agonists and is designed to help regulate appetite, reduce
                  calorie intake, and support gradual, sustained weight loss when
                  combined with diet and increased physical activity.
                </p>
                <p>
                  Unlike newer weekly treatments, Saxenda is administered as a{" "}
                  <strong>once-daily injection</strong>, providing continuous
                  appetite control throughout the day for those who are prescribed
                  it.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200/90 pt-8">
              <p className="text-sm font-semibold text-slate-900">
                Authoritative external reading
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-sky-900">
                <li>
                  <a
                    href="https://www.nice.org.uk/guidance/ta664"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NICE TA664: liraglutide (Saxenda) for overweight and obesity
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nice.org.uk/guidance/ta664/informationforpublic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NHS medicines: Saxenda
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nhs.uk/conditions/obesity/treatment/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NHS: weight loss medicines overview
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nejm.org/doi/full/10.1056/NEJMoa1411892"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NEJM: liraglutide 3.0 mg weight management trial (SCALE)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:px-6 lg:flex-row lg:gap-12 lg:py-14">
          <SaxendaPageToc />
          <div className="min-w-0 flex-1 space-y-16 lg:space-y-20">
            <section
              id="how-saxenda-works"
              className="scroll-mt-28 space-y-8 text-slate-700"
            >
              <header className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  How Saxenda works in the body
                </h2>
                <p className="text-base leading-relaxed">
                  Saxenda contains liraglutide, a synthetic version of the natural
                  hormone GLP-1 (glucagon-like peptide-1), which is released in
                  response to food intake. GLP-1 helps regulate hunger, digestion,
                  and energy balance.
                </p>
                <p className="text-base leading-relaxed">
                  Once administered, liraglutide binds to GLP-1 receptors in
                  multiple areas, particularly the hypothalamus (appetite control),
                  the gastrointestinal system, and the pancreas—supporting
                  metabolic regulation as part of an overall care plan.
                </p>
              </header>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Core mechanisms explained
                </h3>
                <ol className="mt-4 list-inside list-decimal space-y-4 text-base leading-relaxed marker:font-semibold marker:text-sky-800">
                  <li>
                    <strong className="text-slate-900">
                      Central appetite regulation (brain)
                    </strong>
                    <span className="mt-1 block pl-0 text-slate-700 md:pl-6">
                      Saxenda acts on the hypothalamus, reducing hunger signals
                      and influencing food-related behaviour. Many people report
                      less &quot;food noise,&quot; better portion control, and
                      lower overall calorie intake.
                    </span>
                  </li>
                  <li>
                    <strong className="text-slate-900">Delayed gastric emptying</strong>
                    <span className="mt-1 block pl-0 text-slate-700 md:pl-6">
                      Liraglutide slows how quickly food leaves the stomach,
                      prolonging fullness after meals, reducing snacking between
                      meals, and supporting more stable appetite patterns.
                    </span>
                  </li>
                  <li>
                    <strong className="text-slate-900">
                      Energy intake reduction (not a metabolism boost)
                    </strong>
                    <span className="mt-1 block pl-0 text-slate-700 md:pl-6">
                      Saxenda does not significantly increase resting metabolism.
                      It mainly helps you eat less by targeting
                      hunger-driven eating—an important distinction versus common
                      weight-loss myths.
                    </span>
                  </li>
                </ol>
              </div>

              <div id="saxenda-body-journey" className="scroll-mt-24 space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  How Saxenda regulates appetite step-by-step
                </h3>
                <p className="text-sm text-slate-600">
                  Interactive overview (informational only).
                </p>
                <SaxendaDeferredBodyJourneyFlow />
              </div>

              <div id="saxenda-week-dose-timeline" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Saxenda dosing &amp; treatment timeline
                </h3>
                <p className="text-base leading-relaxed">
                  Saxenda follows a structured dose escalation plan to improve
                  tolerability. The table below matches a typical schedule; your
                  clinician may adjust pacing.
                </p>
                <SaxendaDeferredWeekDoseTimeline />
              </div>

              <div id="saxenda-expect-over-time" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  What to expect over time
                </h3>
                <SaxendaExpectationPhases />
              </div>

              <div id="saxenda-weight-progression" className="scroll-mt-24 space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Weight loss progression over time
                </h3>
                <p className="text-sm text-slate-600">
                  Illustrative chart — not a personal forecast.
                </p>
                <SaxendaDeferredWeightProgressionChart />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  When does Saxenda start working?
                </h3>
                <p className="text-base leading-relaxed">
                  Most users begin to notice appetite changes within the first{" "}
                  <strong>1–2 weeks</strong>. Clinically meaningful weight loss
                  typically builds over several weeks, especially after reaching
                  the maintenance dose, with consistency important because dosing
                  is daily.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 md:p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Trusted references
                </h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-sky-900">
                  <li>
                    <a
                      href="https://www.nice.org.uk/guidance/ta664"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      NICE TA664 — liraglutide (Saxenda)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nice.org.uk/guidance/ta664/informationforpublic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      NHS — Saxenda
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nejm.org/doi/full/10.1056/NEJMoa1411892"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      NEJM — SCALE trial (liraglutide 3.0 mg)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thelancet.com/journals/landia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      The Lancet Diabetes &amp; Endocrinology
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      MHRA — UK medicines regulator
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section
              id="weight-loss-results"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Clinical effectiveness &amp; results
              </h2>
              <p>
                Clinical studies show that liraglutide can support meaningful
                weight loss when combined with lifestyle changes. In major trials
                published in journals such as <em>The New England Journal of
                Medicine</em>, patients using liraglutide achieved roughly{" "}
                <strong>around 5–8% average body weight loss over 56 weeks</strong>{" "}
                versus placebo in trial populations, with greater results often
                seen in those who maintained consistent use and support. Individual
                outcomes vary.
              </p>
              <SaxendaDeferredWeightLossChart />
            </section>

            <section
              id="dosage-plan"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Weekly dose escalation (reference)
              </h2>
              <p>
                Typical escalation reduces nausea risk, helps the body adapt, and
                supports adherence. Your prescriber may differ from this schedule.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
                <table className="w-full min-w-[360px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Week
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Dose (daily)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">Week 1</td>
                      <td className="px-4 py-3">0.6 mg</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">Week 2</td>
                      <td className="px-4 py-3">1.2 mg</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">Week 3</td>
                      <td className="px-4 py-3">1.8 mg</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">Week 4</td>
                      <td className="px-4 py-3">2.4 mg</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Week 5+</td>
                      <td className="px-4 py-3">3.0 mg (maintenance)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <MedicationPriceCompareTeaser variant="saxenda" />

            <section
              id="saxenda-vs-newer"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Saxenda vs newer treatments
              </h2>
              <p>
                Compared with newer weekly GLP-1 (or dual-pathway) medicines,
                Saxenda requires <strong>daily injections</strong>, typically
                produces <strong>more moderate average weight loss</strong> in trial
                populations, and has a <strong>longer track record</strong> of use
                for some patients—factors that matter for personal preference and
                clinical choice.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-4 py-3 font-semibold text-slate-900" />
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Saxenda (liraglutide)
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Wegovy (semaglutide)
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Mounjaro (tirzepatide)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        Dosing
                      </td>
                      <td className="px-4 py-3">Once daily</td>
                      <td className="px-4 py-3">Once weekly</td>
                      <td className="px-4 py-3">Once weekly</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        Mechanism
                      </td>
                      <td className="px-4 py-3">GLP-1 agonist</td>
                      <td className="px-4 py-3">GLP-1 agonist</td>
                      <td className="px-4 py-3">GIP + GLP-1 agonist</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        Trial weight loss (headline)
                      </td>
                      <td className="px-4 py-3">
                        ~5–8% mean vs placebo at 56 w (SCALE-style)
                      </td>
                      <td className="px-4 py-3">
                        Higher mean loss in STEP-style 68 w trials
                      </td>
                      <td className="px-4 py-3">
                        Higher mean loss in SURMOUNT programme trials
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">
                        Considerations
                      </td>
                      <td className="px-4 py-3" colSpan={3}>
                        Choice depends on eligibility, side effects, convenience,
                        cost, and prescriber advice—not marketing claims alone.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/compare/mounjaro-vs-saxenda"
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-800 underline-offset-2 hover:underline"
                >
                  Mounjaro vs Saxenda comparison
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/wegovy-vs-mounjaro"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 underline-offset-2 hover:underline"
                >
                  Wegovy vs Mounjaro
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            <section
              id="side-effects-safety"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Side effects &amp; safety profile
              </h2>
              <p>
                <strong>Common</strong> side effects can include nausea, vomiting,
                diarrhoea or constipation, headache, and fatigue. They are often
                linked to slower digestion and hormonal changes in appetite
                regulation, and may improve as the body adapts.
              </p>
              <p>
                <strong>Management tips:</strong> eat smaller meals, avoid very
                high-fat meals early on, stay hydrated, and increase dose only as
                prescribed. Seek urgent care for severe or persistent symptoms as
                described in your patient information.
              </p>
              <ul className="list-inside list-disc space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.nice.org.uk/guidance/ta664/informationforpublic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sky-900 underline"
                  >
                    NHS medicines: Saxenda
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sky-900 underline"
                  >
                    MHRA (UK medicines regulator)
                  </a>
                </li>
              </ul>
            </section>

            <section
              id="eligibility-uk"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Who is Saxenda suitable for?
              </h2>
              <p>
                Saxenda may be prescribed for adults with{" "}
                <strong>BMI ≥ 30</strong> (obesity) or{" "}
                <strong>BMI ≥ 27</strong> with weight-related conditions, subject
                to exclusions and specialist assessment. NICE TA664 describes use
                within specialist tier 3 weight-management pathways in the NHS
                context; private providers apply their own clinical criteria.
              </p>
              <p className="text-sm text-slate-600">
                It is not suitable for everyone, and a medical consultation is
                required before starting treatment.
              </p>
            </section>

            <section
              id="how-to-get-saxenda-uk"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                How to get Saxenda in the UK
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong>NHS</strong> — may be available via specialist
                  weight-management services when NICE and local criteria are met.
                </li>
                <li>
                  <strong>Private online clinics &amp; pharmacies</strong> —
                  consultation and prescribing if clinically appropriate.
                </li>
                <li>
                  <strong>Private specialists</strong> — obesity or endocrine
                  clinics may offer GLP-1 pathways.
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/prices/cheapest-options-uk"
                  className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-sky-300"
                >
                  Compare cheapest GLP-1 options
                </Link>
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-sky-300"
                >
                  GPhC verification guide
                </Link>
              </div>
            </section>

            <section
              id="best-providers"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Best Saxenda providers (UK orientation)
              </h2>
              <p>
                Illustrative providers in our tables include{" "}
                <strong>Boots Online Doctor</strong>,{" "}
                <strong>Superdrug Online Doctor</strong>, and{" "}
                <strong>Simple Online Pharmacy</strong>. Compare monthly all-in
                cost, consultation rules, and cold-chain delivery before you choose.
              </p>
              <div className="flex flex-wrap gap-3">
                <CompareHereLink href="/saxenda-price-comparison" />
                <Link
                  href="/compare/best-weight-loss-injections-uk"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-sky-300"
                >
                  Best injections overview
                </Link>
              </div>
            </section>

            <section
              id="trust-verification"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Trust &amp; verification
              </h2>
              <ul className="space-y-2">
                {[
                  "Only use UK pharmacies regulated by the GPhC or equivalent for supply.",
                  "Expect a proper consultation before any prescription-only medicine.",
                  "Cold-chain products should ship with appropriate packaging—ask if unsure.",
                  "Cross-check the pharmacy’s GPhC registration number on the official register.",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-sm">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
                      aria-hidden
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm">
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-semibold text-sky-900 underline"
                >
                  Read our GPhC verification walkthrough
                </Link>
              </p>
            </section>

            <section id="faq" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
              <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                {SAXENDA_FAQ_ITEMS.map((item) => (
                  <details key={item.question} className="group p-5">
                    <summary className="cursor-pointer list-none font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section
              id="medical-review"
              className="scroll-mt-28 space-y-6 border-t border-slate-200 pt-12"
            >
              <div className="overflow-hidden rounded-2xl border border-brand-border bg-slate-50/80 shadow-sm">
                <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_200px] md:items-center md:p-8">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Medically reviewed &amp; editorial standards
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      This guide is written for general education and price
                      transparency. It is reviewed against reputable UK and
                      international sources. It does not replace a consultation
                      with a prescriber who knows your history.
                    </p>
                  </div>
                  <div className="relative mx-auto aspect-3/4 w-full max-w-[200px] overflow-hidden rounded-xl border border-slate-200 md:mx-0 md:max-w-none">
                    <Image
                      src="/uk-weight-loss-medical-expert-health-wise.jpg.webp"
                      alt="Reviewed against UK clinical references by Health Wise editorial standards."
                      fill
                      className="object-cover object-[center_15%]"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">References</h3>
                <ol className="mt-4 list-inside list-decimal space-y-2 text-sm text-slate-700">
                  <li>
                    NHS. Saxenda.{" "}
                    <a
                      href="https://www.nice.org.uk/guidance/ta664/informationforpublic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-900 underline"
                    >
                      nhs.uk
                    </a>
                  </li>
                  <li>
                    NICE. Liraglutide for managing overweight and obesity (TA664).{" "}
                    <a
                      href="https://www.nice.org.uk/guidance/ta664"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-900 underline"
                    >
                      nice.org.uk
                    </a>
                  </li>
                  <li>
                    Pi-Sunyer X et al. A randomized, controlled trial of 3.0 mg of
                    liraglutide in weight management. <em>N Engl J Med</em>. 2015.
                  </li>
                  <li>
                    MHRA. UK medicines regulation &amp; safety updates.{" "}
                    <a
                      href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-900 underline"
                    >
                      gov.uk
                    </a>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
