import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import MedicationPriceCompareTeaser from "@/components/content/MedicationPriceCompareTeaser";
import {
  MounjaroDeferredBodyJourneyFlow,
  MounjaroDeferredMonthTimeline,
  MounjaroDeferredWeightLossChart,
  MounjaroDeferredWeightProgressionChart,
} from "@/components/mounjaro/mounjaro-what-is-deferred";
import MounjaroPenTilt from "@/components/mounjaro/MounjaroPenTilt";
import MounjaroPageToc from "@/components/mounjaro/MounjaroPageToc";
import InternalLinks from "@/components/content/InternalLinks";
import { internalLinksFor } from "@/lib/internal-linking";
import {
  mounjaroArticleJsonLd,
  mounjaroFaqJsonLd,
  MOUNJARO_FAQ_ITEMS,
} from "@/lib/seo/mounjaro-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/what-is-mounjaro",
  title:
    "What is Mounjaro? UK guide (2026): how it works, weight loss & prices",
  metaDescription:
    "Mounjaro (tirzepatide) explained for UK readers: dual GIP/GLP-1 mechanism, SURMOUNT trial weight loss, dosing titration, private prices by dose, eligibility, safety, NHS/NICE context, and verified provider comparison.",
  openGraphTitle:
    "What is Mounjaro? UK guide (2026): how it works, weight loss & prices | Health Wise",
  openGraphDescription:
    "Independent guide to Mounjaro: mechanism, results, dosage, UK prices, safety, and how to compare providers.",
  imagePath: "/mounjaro healt wise.png",
  imageAlt: "Mounjaro (tirzepatide) pen — UK guide on Health Wise",
});

export default function WhatIsMounjaroPage() {
  const articleLd = mounjaroArticleJsonLd();
  const faqLd = mounjaroFaqJsonLd();

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
          id="what-is-mounjaro"
          className="scroll-mt-28 w-full border-b border-slate-200/80 bg-background"
        >
          <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-5 sm:py-12 md:px-8 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col items-start gap-8">
                <h1 className="max-w-[18ch] text-left text-3xl font-bold uppercase leading-[1.05] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.02]">
                  What is Mounjaro?
                </h1>
                <MounjaroPenTilt className="w-full max-w-[280px] shrink-0" />
              </div>
              <div className="space-y-5 text-base leading-[1.65] text-slate-800">
                <p>
                  Mounjaro® (tirzepatide) is a prescription medication used to
                  support weight loss and improve metabolic health in adults. It
                  is typically prescribed for individuals living with obesity,
                  or those who are overweight with related health conditions.
                </p>
                <p>
                  It is used alongside a reduced-calorie diet and increased
                  physical activity to help patients achieve and maintain weight
                  loss over time.
                </p>
                <p>
                  Mounjaro® works differently from many other treatments by
                  targeting two key hormone pathways involved in appetite and
                  blood sugar regulation (GIP and GLP-1). It should only be used
                  under medical supervision and is not suitable for everyone.
                </p>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200/90 pt-8">
              <p className="text-sm font-semibold text-slate-900">
                Authoritative external reading
              </p>
              <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-violet-900">
                <li>
                  <a
                    href="https://www.nice.org.uk/guidance/ta1026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NICE TA1026: tirzepatide (Mounjaro) for overweight and
                    obesity
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/weight-loss-medicines/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NHS: weight loss medicines overview
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nhs.uk/medicines/mounjaro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NHS medicines: Mounjaro
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nejm.org/doi/full/10.1056/NEJMoa2307038"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-2"
                  >
                    NEJM: SURMOUNT-1 tirzepatide obesity trial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:px-6 lg:flex-row lg:gap-12 lg:py-14">
          <MounjaroPageToc />
          <div className="min-w-0 flex-1 space-y-16 lg:space-y-20">
            <section
              id="how-mounjaro-works"
              className="scroll-mt-28 space-y-8 text-slate-700"
            >
              <header className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  How Mounjaro works in your body
                </h2>
                <p className="text-base leading-relaxed">
                  Mounjaro contains tirzepatide, a dual GIP and GLP-1 receptor
                  agonist. These hormones are naturally released after eating
                  and help regulate appetite, digestion, and insulin response.
                </p>
                <p className="text-base leading-relaxed">
                  By activating both pathways, Mounjaro helps reduce hunger,
                  improve feelings of fullness, and support better control of
                  calorie intake—alongside professional lifestyle advice.
                </p>
              </header>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Key mechanisms
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Mounjaro works through multiple complementary effects:
                </p>
                <ol className="mt-4 list-inside list-decimal space-y-4 text-base leading-relaxed marker:font-semibold marker:text-violet-800">
                  <li>
                    <strong className="text-slate-900">
                      Appetite suppression
                    </strong>
                    <span className="mt-1 block pl-0 text-slate-700 md:pl-6">
                      Mounjaro acts on appetite centres in the brain, helping
                      reduce hunger signals and food cravings. Many users report
                      feeling satisfied with smaller meals and less frequent
                      snacking.
                    </span>
                  </li>
                  <li>
                    <strong className="text-slate-900">
                      Slower gastric emptying
                    </strong>
                    <span className="mt-1 block pl-0 text-slate-700 md:pl-6">
                      It slows the rate at which food leaves the stomach,
                      helping you feel fuller for longer after eating.
                    </span>
                  </li>
                  <li>
                    <strong className="text-slate-900">
                      Improved metabolic control
                    </strong>
                    <span className="mt-1 block pl-0 text-slate-700 md:pl-6">
                      By influencing insulin and blood sugar regulation,
                      Mounjaro can support metabolic health, particularly in
                      people with insulin resistance—always within a prescribed
                      care plan.
                    </span>
                  </li>
                </ol>
              </div>

              <div
                id="mounjaro-body-journey"
                className="scroll-mt-24 space-y-3"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  Journey of Mounjaro in the body
                </h3>
                <p className="text-sm text-slate-600">
                  Dual hormone pathways (GIP + GLP-1) — interactive overview
                  (informational only).
                </p>
                <MounjaroDeferredBodyJourneyFlow />
              </div>

              <div
                id="mounjaro-month-timeline"
                className="scroll-mt-24 space-y-4"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  Mounjaro timeline: what to expect
                </h3>
                <p className="text-base leading-relaxed">
                  Mounjaro is designed to work gradually, with doses increased
                  over time to allow the body to adjust and reduce side effects.
                </p>
                <p className="text-base leading-relaxed">
                  Early changes often include reduced appetite, while more
                  noticeable weight loss develops at higher doses for many
                  people.
                </p>
                <MounjaroDeferredMonthTimeline />
              </div>

              <div
                id="mounjaro-weight-progression"
                className="scroll-mt-24 space-y-3"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  Weight loss progression over time
                </h3>
                <p className="text-sm text-slate-600">
                  Illustrative chart: percentage change from baseline by month
                  marker (not a personal forecast).
                </p>
                <MounjaroDeferredWeightProgressionChart />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  When does Mounjaro start working?
                </h3>
                <p className="text-base leading-relaxed">
                  Many users begin to notice reduced appetite within the first
                  few weeks. However, more significant weight loss typically
                  occurs as the dose increases.
                </p>
                <p className="text-base leading-relaxed">
                  Higher doses are associated with stronger and more consistent
                  results for many people, particularly when combined with
                  sustainable lifestyle changes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Side effects during dose increases
                </h3>
                <p className="text-base leading-relaxed">
                  Common side effects may include nausea, diarrhoea or
                  constipation, reduced appetite, and mild gastrointestinal
                  discomfort. These effects are usually temporary and improve as
                  the body adapts.
                </p>
                <p className="text-base leading-relaxed">
                  Follow your prescriber&apos;s titration plan; seek urgent
                  advice for severe or persistent symptoms as described in your
                  patient information.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Long-term weight management
                </h3>
                <p className="text-base leading-relaxed">
                  Weight loss is a long-term process influenced by biology,
                  behaviour, and environment. Mounjaro supports this process by
                  making it easier to manage appetite and reduce calorie intake.
                </p>
                <p className="text-base leading-relaxed">
                  Clinical evidence shows that the best results occur when
                  medication is combined with healthy eating patterns, regular
                  physical activity, and ongoing behavioural support.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 md:p-6">
                <h3 className="text-lg font-bold text-slate-900">
                  Trusted references
                </h3>
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-violet-900">
                  <li>
                    <a
                      href="https://www.nice.org.uk/guidance/ta1026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      NICE TA1026 — tirzepatide for managing overweight and
                      obesity
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nhs.uk/medicines/mounjaro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      NHS — Mounjaro (tirzepatide)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nejm.org/doi/full/10.1056/NEJMoa2307038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      New England Journal of Medicine — SURMOUNT-1
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
                Mounjaro weight loss results (trials)
              </h2>
              <p>
                In large randomised trials of tirzepatide for obesity (e.g.
                SURMOUNT programme), mean weight change over extended follow-up
                was substantially greater with active treatment than with
                placebo, on top of lifestyle intervention. Individual results
                vary; not everyone responds the same way.
              </p>
              <MounjaroDeferredWeightLossChart />
            </section>

            <section
              id="dosage-plan"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Dosage &amp; treatment plan
              </h2>
              <p>
                Mounjaro is injected <strong>once weekly</strong>. The dose is
                usually increased in steps (titration) to improve tolerability.
                Licensed strengths for weight management in the UK include a
                stepped range up to a maximum maintenance dose—your prescriber
                will individualise the plan.
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
                      <td className="px-4 py-3">2.5 mg</td>
                      <td className="px-4 py-3">
                        Starting dose (often month 1)
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">5 mg</td>
                      <td className="px-4 py-3">Step-up (often month 2)</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">7.5 mg</td>
                      <td className="px-4 py-3">Further step-up</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">10 mg</td>
                      <td className="px-4 py-3">
                        Higher step toward maintenance
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3">12.5 mg</td>
                      <td className="px-4 py-3">
                        Approaching maximum for many
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">15 mg</td>
                      <td className="px-4 py-3">
                        Maximum licensed maintenance dose (not universal)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-600">
                Always follow the UK SmPC and your prescriber for the pen
                strength you are issued; titration may be slower if side effects
                occur.
              </p>
            </section>

            <MedicationPriceCompareTeaser variant="mounjaro" />

            <section
              id="mounjaro-vs-others"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                Mounjaro vs other treatments
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
                        Mounjaro (tirzepatide)
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Wegovy (semaglutide)
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-900">
                        Saxenda (liraglutide)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        Mechanism
                      </td>
                      <td className="px-4 py-3">Dual GIP + GLP-1 agonist</td>
                      <td className="px-4 py-3">GLP-1 agonist</td>
                      <td className="px-4 py-3">GLP-1 agonist (daily)</td>
                    </tr>
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
                        Substantial mean loss vs placebo in SURMOUNT programme
                        trials
                      </td>
                      <td className="px-4 py-3">
                        Substantial mean loss vs placebo at 68 w (STEP-style
                        trials)
                      </td>
                      <td className="px-4 py-3">
                        Lower mean effect than weekly GLP-1 options in many
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
                        GI effects common; rare serious risks exist—seek urgent
                        care for severe abdominal pain or allergic symptoms per
                        patient information.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link
                href="/compare/wegovy-vs-mounjaro"
                className="inline-flex items-center gap-2 text-sm font-bold text-violet-800 underline-offset-2 hover:underline"
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
                diarrhoea or constipation, reduced appetite, and mild
                gastrointestinal discomfort—often worst during titration.
              </p>
              <p>
                <strong>Serious or rare</strong> risks in official materials can
                include pancreatitis, gallbladder disease, and hypersensitivity;
                contraindications apply. Read your patient information leaflet
                and seek urgent help if you have severe or persistent symptoms.
              </p>
              <ul className="list-inside list-disc space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.nhs.uk/medicines/mounjaro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-violet-900 underline"
                  >
                    NHS medicines: Mounjaro
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-violet-900 underline"
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
                Who can use Mounjaro in the UK?
              </h2>
              <p>
                Mounjaro may be prescribed for adults who meet clinical
                criteria—for example <strong>BMI of 30 or higher</strong>, or{" "}
                <strong>BMI of 27 or higher</strong> with weight-related
                conditions—subject to consultation, exclusions, and SmPC rules.
                NHS access follows national and local commissioning (see NICE
                TA1026 and NHS England implementation guidance). Private
                pathways use their own clinical criteria.
              </p>
              <p className="text-sm text-slate-600">
                Treatment suitability must always be assessed by a qualified
                healthcare professional.
              </p>
            </section>

            <section
              id="how-to-get-mounjaro-uk"
              className="scroll-mt-28 space-y-4 text-slate-700"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                How to get Mounjaro in the UK
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  <strong>NHS</strong> — where NICE TA1026 and local
                  commissioning apply; eligibility and waiting times vary.
                </li>
                <li>
                  <strong>Private online clinics &amp; pharmacies</strong> —
                  questionnaire and ID checks, then prescribing if appropriate.
                </li>
                <li>
                  <strong>Private face-to-face services</strong> — some
                  specialist obesity services offer GLP-1/GIP treatment
                  pathways.
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/prices/cheapest-options-uk"
                  className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-violet-300"
                >
                  Compare cheapest GLP-1 options
                </Link>
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:border-violet-300"
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
                Best Mounjaro providers (UK orientation)
              </h2>
              <p>
                Large UK-facing providers include chains and online pharmacies
                such as <strong>Boots Online Doctor</strong>,{" "}
                <strong>Superdrug Online Doctor</strong>, and{" "}
                <strong>Simple Online Pharmacy</strong>, among others. The
                &quot;best&quot; choice depends on price transparency, clinical
                support, delivery, and maintenance policy—compare using our hubs
                rather than a single headline price.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/mounjaro-price-comparison"
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-violet-700"
                >
                  Compare Mounjaro prices UK
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare/best-weight-loss-injections-uk"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-violet-300"
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
                      className="mt-0.5 h-4 w-4 shrink-0 text-violet-600"
                      aria-hidden
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm">
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-semibold text-violet-900 underline"
                >
                  Read our GPhC verification walkthrough
                </Link>
              </p>
            </section>

            <section id="faq" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
              <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                {MOUNJARO_FAQ_ITEMS.map((item) => (
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
                    NHS. Mounjaro (tirzepatide).{" "}
                    <a
                      href="https://www.nhs.uk/medicines/mounjaro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-900 underline"
                    >
                      nhs.uk
                    </a>
                  </li>
                  <li>
                    NICE. Tirzepatide for managing overweight and obesity
                    (TA1026).{" "}
                    <a
                      href="https://www.nice.org.uk/guidance/ta1026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-900 underline"
                    >
                      nice.org.uk
                    </a>
                  </li>
                  <li>
                    Jastreboff AM et al. Tirzepatide once weekly for the
                    treatment of obesity. <em>N Engl J Med</em>. 2023.
                  </li>
                  <li>
                    MHRA. UK medicines regulation &amp; safety updates.{" "}
                    <a
                      href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-900 underline"
                    >
                      gov.uk
                    </a>
                  </li>
                </ol>
              </div>
            </section>

            <InternalLinks
              title="Keep exploring Health Wise"
              links={internalLinksFor("whatIsMounjaro")}
            />
          </div>
        </div>
      </article>
    </>
  );
}
