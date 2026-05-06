import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import MedicationPriceCompareTeaser from "@/components/content/MedicationPriceCompareTeaser";
import {
  WegovyDeferredBodyJourneyFlow,
  WegovyDeferredMonthTimeline,
  WegovyDeferredWeightLossChart,
  WegovyDeferredWeightProgressionChart,
} from "@/components/wegovy/wegovy-what-is-deferred";
import WegovyPageToc from "@/components/wegovy/WegovyPageToc";
import {
  wegovyArticleJsonLd,
  wegovyFaqJsonLd,
  WEGOVY_FAQ_ITEMS,
} from "@/lib/seo/wegovy-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import {
  WHY_CHOOSE_HEALTHWISE360_ALT,
  WHY_CHOOSE_HEALTHWISE360_SRC,
} from "@/lib/site-assets";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/what-is-wegovy",
  title:
    "What is Wegovy? UK guide (2026): how it works, side effects & prices",
  metaDescription:
    "Wegovy (semaglutide) explained for UK readers: GLP-1 mechanism, clinical trial weight loss, dosing titration, private prices by dose, eligibility, safety, NHS context, and verified provider comparison.",
  openGraphTitle:
    "What is Wegovy? UK guide (2026): how it works, side effects & prices | Health Wise",
  openGraphDescription:
    "Independent guide to Wegovy: mechanism, results, dosage, UK prices, safety, and how to compare providers.",
  imagePath: WHY_CHOOSE_HEALTHWISE360_SRC,
  imageAlt: WHY_CHOOSE_HEALTHWISE360_ALT,
});

export default function WhatIsWegovyPage() {
  const articleLd = wegovyArticleJsonLd();
  const faqLd = wegovyFaqJsonLd();

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
          id="what-is-wegovy"
          className="scroll-mt-28 w-full border-b border-slate-200/80 bg-background"
        >
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-5 sm:py-12 md:px-8 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col items-start">
                <h1 className="max-w-[15ch] text-left text-3xl font-bold uppercase leading-[1.05] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.02]">
                  What is Wegovy?
                </h1>
              </div>
              <div className="space-y-5 text-base leading-[1.65] text-slate-800">
                <p>
                  Wegovy® (semaglutide) is a prescription medication used
                  alongside a reduced-calorie diet and increased physical
                  activity to support weight loss and long-term weight
                  management.
                </p>
                <p>
                  It is commonly prescribed for adults living with obesity, as
                  well as for those who are overweight and have related health
                  conditions such as high blood pressure or type 2 diabetes.
                </p>
                <p>
                  In addition to helping with weight reduction, Wegovy® may also
                  lower the risk of serious cardiovascular events—including heart
                  attack, stroke, or death—in adults with existing heart disease
                  who are also overweight or obese.
                </p>
                <p>
                  Wegovy® contains semaglutide, a GLP-1 receptor agonist, and
                  should not be used together with other medications that
                  contain semaglutide or similar GLP-1 treatments.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200/90 pt-8">
              <p className="text-sm font-semibold text-slate-900">
                Authoritative external reading
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-emerald-900">
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
                    href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NEJM: pivotal semaglutide obesity trial (STEP programme)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nice.org.uk/guidance/ta875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NICE: semaglutide for overweight and obesity (guidance
                    context)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:px-6 lg:flex-row lg:gap-12 lg:py-14">
          <WegovyPageToc />
          <div className="min-w-0 flex-1 space-y-16 lg:space-y-20">
            <section
              id="how-wegovy-works"
              className="scroll-mt-28 space-y-8 text-slate-700"
            >
              <header className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  How Wegovy works in your body
                </h2>
                <p className="text-base leading-relaxed">
                  Wegovy® contains semaglutide, a medication that mimics a natural
                  hormone in the body known as GLP-1 (glucagon-like peptide-1).
                  This hormone is released after eating and plays an important
                  role in regulating appetite and digestion.
                </p>
                <p className="text-base leading-relaxed">
                  By activating GLP-1 receptors, Wegovy helps reduce hunger,
                  increase feelings of fullness, and support lower calorie intake
                  over time.
                </p>
                <p className="text-base leading-relaxed">
                  Unlike the natural hormone, which breaks down quickly,
                  semaglutide remains active in the body for longer—allowing for
                  a once-weekly injection.
                </p>
              </header>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Key effects on the body
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Wegovy works through multiple mechanisms:
                </p>
                <ol className="mt-4 list-inside list-decimal space-y-4 text-base leading-relaxed marker:font-semibold marker:text-teal-800">
                  <li>
                    <strong className="text-slate-900">Appetite regulation</strong>
                    <span className="mt-1 block pl-0 text-slate-700 md:pl-6">
                      It targets areas of the brain responsible for hunger and
                      food-related behaviour. Many users report feeling satisfied
                      with smaller portions and experiencing fewer cravings.
                    </span>
                  </li>
                  <li>
                    <strong className="text-slate-900">Slower digestion</strong>
                    <span className="mt-1 block pl-0 text-slate-700 md:pl-6">
                      Wegovy slows the rate at which food leaves the stomach. This
                      helps you feel full for longer after meals and reduces the
                      likelihood of overeating.
                    </span>
                  </li>
                  <li>
                    <strong className="text-slate-900">Reduced food cravings</strong>
                    <span className="mt-1 block pl-0 text-slate-700 md:pl-6">
                      By influencing reward pathways in the brain, it may reduce
                      the urge to snack or eat out of habit rather than hunger.
                    </span>
                  </li>
                </ol>
              </div>

              <div id="wegovy-body-journey" className="scroll-mt-24 space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Journey of Wegovy in the body
                </h3>
                <p className="text-sm text-slate-600">
                  From injection to appetite and digestion — interactive overview
                  (informational only).
                </p>
                <WegovyDeferredBodyJourneyFlow />
              </div>

              <div id="wegovy-month-timeline" className="scroll-mt-24 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Wegovy timeline: what to expect month by month
                </h3>
                <p className="text-base leading-relaxed">
                  Wegovy is designed to work gradually. The dosage is increased
                  step by step over several months to allow the body to adapt and
                  minimise side effects.
                </p>
                <p className="text-base leading-relaxed">
                  Early changes often begin with appetite reduction, while more
                  noticeable weight loss tends to develop as the dosage
                  increases.
                </p>
                <WegovyDeferredMonthTimeline />
              </div>

              <div id="wegovy-weight-progression" className="scroll-mt-24 space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Weight loss progression over time
                </h3>
                <p className="text-sm text-slate-600">
                  Illustrative chart: percentage change from baseline by month
                  marker (not a personal forecast).
                </p>
                <WegovyDeferredWeightProgressionChart />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  When does Wegovy start working?
                </h3>
                <p className="text-base leading-relaxed">
                  Many people begin to notice reduced appetite within the first few
                  weeks, even at lower doses.
                </p>
                <p className="text-base leading-relaxed">
                  However, more significant weight loss typically occurs at higher
                  doses, particularly from 1.0 mg and above.
                </p>
                <p className="text-base leading-relaxed">
                  This gradual progression is intentional, as starting with a lower
                  dose helps reduce side effects and improves long-term adherence.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Managing side effects during dose increases
                </h3>
                <p className="text-base leading-relaxed">
                  Some users may experience mild side effects, particularly when
                  increasing the dose.
                </p>
                <p className="font-medium text-slate-800">Common side effects include:</p>
                <ul className="list-inside list-disc space-y-1 text-base text-slate-700">
                  <li>Nausea</li>
                  <li>Digestive discomfort</li>
                  <li>Changes in bowel habits</li>
                </ul>
                <p className="text-base leading-relaxed">
                  These effects are usually temporary and tend to improve as the
                  body adapts.
                </p>
                <p className="text-base leading-relaxed">
                  Simple strategies such as eating smaller meals, staying
                  hydrated, and avoiding heavy foods may help reduce discomfort.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Long-term weight management
                </h3>
                <p className="text-base leading-relaxed">
                  Obesity is a complex condition influenced by biological,
                  behavioural, and environmental factors.
                </p>
                <p className="text-base leading-relaxed">
                  Wegovy supports weight loss by helping reduce calorie intake, but
                  long-term success is most effective when combined with:
                </p>
                <ul className="list-inside list-disc space-y-1 text-base text-slate-700">
                  <li>Balanced nutrition</li>
                  <li>Regular physical activity</li>
                  <li>Sustainable lifestyle changes</li>
                </ul>
                <p className="text-base leading-relaxed">
                  Clinical evidence shows that semaglutide can lead to significant
                  weight loss when used alongside these approaches.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 md:p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Trusted references
                </h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-emerald-900">
                  <li>
                    <a
                      href="https://www.nhs.uk/conditions/obesity/treatment/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      NHS — weight loss medicines
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nice.org.uk/guidance/ta875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      NICE — semaglutide for overweight and obesity (TA875)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      New England Journal of Medicine — STEP trial programme
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.thelancet.com/journals/landia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      The Lancet Diabetes &amp; Endocrinology (related research)
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
                Wegovy weight loss results (trials)
              </h2>
              <p>
                In large randomised trials of semaglutide for obesity, mean
                weight change over roughly <strong>68 weeks</strong> was
                substantially greater with active treatment than with placebo,
                on top of lifestyle intervention. Individual results vary; not
                everyone responds the same way.
              </p>
              <WegovyDeferredWeightLossChart />
            </section>

            <section
              id="dosage-plan"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Dosage &amp; treatment plan
              </h2>
              <p>
                Wegovy is injected <strong>once weekly</strong>. The dose is
                usually increased in steps (titration) to improve tolerability.
                Typical maintenance doses are individual—some people stay below
                the maximum licensed dose.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Dose (weekly)
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Typical titration phase
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">0.25 mg</td>
                      <td className="px-4 py-3">Starting dose (often month 1)</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">0.5 mg</td>
                      <td className="px-4 py-3">Step-up (often month 2)</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">1.0 mg</td>
                      <td className="px-4 py-3">Further step-up</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">1.7 mg</td>
                      <td className="px-4 py-3">Higher step toward maintenance</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">2.4 mg</td>
                      <td className="px-4 py-3">
                        Maintenance for many (not universal)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-600">
                Higher-dose semaglutide regimens have been studied in research
                settings; availability and licensing differ by product and
                country—follow your prescriber and the UK SmPC for the pen you
                are issued.
              </p>
            </section>

            <MedicationPriceCompareTeaser variant="wegovy" />

            <section
              id="wegovy-vs-others"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Wegovy vs other treatments
              </h2>
              <p>
                Quick orientation only—your clinician chooses based on health
                status, access, and preferences.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-4 py-3 font-semibold text-slate-900" />
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Wegovy (semaglutide)
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Mounjaro (tirzepatide)
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Saxenda (liraglutide)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        Dosing
                      </td>
                      <td className="px-4 py-3">Once weekly (pen)</td>
                      <td className="px-4 py-3">Once weekly (pen)</td>
                      <td className="px-4 py-3">Once daily (pen)</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        Trial weight loss (headline)
                      </td>
                      <td className="px-4 py-3">
                        Substantial mean loss vs placebo at 68 w (e.g. ~15% in
                        STEP 1–style trials)
                      </td>
                      <td className="px-4 py-3">
                        Substantial mean loss in SURMOUNT programme trials
                      </td>
                      <td className="px-4 py-3">
                        Lower mean effect than weekly GLP-1/GIP options in many
                        comparisons
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        Cost (UK private)
                      </td>
                      <td className="px-4 py-3" colSpan={3}>
                        Varies by dose and provider; compare monthly all-in
                        costs including consultation and delivery.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-slate-900">
                        Side effects
                      </td>
                      <td className="px-4 py-3" colSpan={3}>
                        GI effects common; rare serious risks exist for all
                        GLP-1 agents—seek urgent care for severe abdominal pain
                        or allergic symptoms per patient information.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link
                href="/compare/wegovy-vs-mounjaro"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 underline-offset-2 hover:underline"
              >
                Full Wegovy vs Mounjaro comparison
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section
              id="side-effects-safety"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Side effects &amp; safety
              </h2>
              <p>
                <strong>Common</strong> adverse effects can include nausea,
                vomiting, diarrhoea, constipation, and abdominal discomfort—
                often worst during titration. Eating smaller meals and
                following prescriber advice can help.
              </p>
              <p>
                <strong>Serious or rare</strong> risks discussed in official
                materials include pancreatitis, gallbladder disease, and
                hypersensitivity; contraindications apply (for example certain
                thyroid tumour histories). Read your patient information leaflet
                and seek urgent help if you have severe or persistent symptoms.
              </p>
              <ul className="list-inside list-disc space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.nice.org.uk/guidance/ta875/informationforpublic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-900 underline"
                  >
                    NHS medicines: Wegovy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-emerald-900 underline"
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
                Who can use Wegovy in the UK?
              </h2>
              <p>
                Private pathways generally mirror specialist obesity criteria in
                broad terms: often <strong>BMI ≥ 30 kg/m²</strong>, or{" "}
                <strong>BMI ≥ 27 kg/m²</strong> with weight-related conditions
                such as dysglycaemia, hypertension, or dyslipidaemia—subject to
                consultation, exclusions, and SmPC rules. NHS access is
                limited and criteria evolve; your GP or specialist can advise.
              </p>
            </section>

            <section
              id="how-to-get-wegovy-uk"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                How to get Wegovy in the UK
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong>Private online clinics &amp; pharmacies</strong> —
                  questionnaire and ID checks, then prescribing if appropriate.
                </li>
                <li>
                  <strong>Private face-to-face services</strong> — some
                  hospitals and obesity clinics offer GLP-1 treatment pathways.
                </li>
                <li>
                  <strong>NHS</strong> — may be available in selected specialist
                  services when national and local criteria are met; waiting
                  times and eligibility vary.
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/prices/cheapest-options-uk"
                  className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-300"
                >
                  Compare cheapest GLP-1 options
                </Link>
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-300"
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
                Best Wegovy providers (UK orientation)
              </h2>
              <p>
                Large UK-facing providers include{" "}
                <strong>Numan</strong>, <strong>Juniper</strong>, and{" "}
                <strong>Pharmacy2U</strong>, among others. The &quot;best&quot;
                choice depends on price transparency, clinical support,
                delivery, and whether they can continue prescribing through
                maintenance—compare using our hubs rather than a single
                headline price.
              </p>
              <div className="flex flex-wrap gap-3">
                <CompareHereLink href="/wegovy-price-comparison" />
                <Link
                  href="/compare/best-weight-loss-treatments-uk"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-emerald-300"
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
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                      aria-hidden
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm">
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-semibold text-emerald-900 underline"
                >
                  Read our GPhC verification walkthrough
                </Link>
              </p>
            </section>

            <section id="faq" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
              <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                {WEGOVY_FAQ_ITEMS.map((item) => (
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
                      src={WHY_CHOOSE_HEALTHWISE360_SRC}
                      alt={WHY_CHOOSE_HEALTHWISE360_ALT}
                      fill
                      className="object-contain object-center"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">References</h3>
                <ol className="mt-4 list-inside list-decimal space-y-2 text-sm text-slate-700">
                  <li>
                    NHS. Weight loss medicines.{" "}
                    <a
                      href="https://www.nhs.uk/conditions/obesity/treatment/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-900 underline"
                    >
                      nhs.uk
                    </a>
                  </li>
                  <li>
                    NICE. Semaglutide for managing overweight and obesity (TA875).{" "}
                    <a
                      href="https://www.nice.org.uk/guidance/ta875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-900 underline"
                    >
                      nice.org.uk
                    </a>
                  </li>
                  <li>
                    Wilding JPH et al. Once-weekly semaglutide in adults with
                    overweight or obesity. <em>N Engl J Med</em>. 2021.
                  </li>
                  <li>
                    MHRA. UK medicines regulation &amp; safety updates.{" "}
                    <a
                      href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-900 underline"
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
