import type { Metadata } from "next";
import Link from "next/link";
import TrustSignals from "@/components/trust/TrustSignals";
import {
  WHAT_IS_WEGOVY_PILL_DESCRIPTION,
  WHAT_IS_WEGOVY_PILL_PATH,
  WHAT_IS_WEGOVY_PILL_TITLE,
  whatIsWegovyPillJsonLd,
} from "@/lib/seo/what-is-wegovy-pill-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import {
  WHY_CHOOSE_HEALTHWISE360_ALT,
  WHY_CHOOSE_HEALTHWISE360_SRC,
} from "@/lib/site-assets";

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: WHAT_IS_WEGOVY_PILL_PATH,
    title: WHAT_IS_WEGOVY_PILL_TITLE,
    metaDescription: WHAT_IS_WEGOVY_PILL_DESCRIPTION,
    openGraphTitle: "What Is the Wegovy Pill? Everything You Need To Know About",
    openGraphDescription:
      "A plain UK guide to the Wegovy pill: what is in it, how it works, whether it works and where it stands in the UK.",
    imagePath: WHY_CHOOSE_HEALTHWISE360_SRC,
    imageAlt: WHY_CHOOSE_HEALTHWISE360_ALT,
  }),
  title: { absolute: WHAT_IS_WEGOVY_PILL_TITLE },
};

const linkClass =
  "font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950";
const h2Class = "text-2xl font-bold tracking-tight text-slate-900 md:text-3xl";
const h3Class = "text-lg font-bold text-slate-900 sm:text-xl";

export default function WhatIsWegovyPillPage() {
  const jsonLd = whatIsWegovyPillJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="w-full">
        {/* Section 1: Hero */}
        <section
          id="what-is-the-wegovy-pill"
          className="scroll-mt-28 w-full border-b border-slate-200/80 bg-gradient-to-b from-[#f4f7f5] to-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12 md:px-8 md:py-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 ring-1 ring-emerald-200/70">
                UK Treatment Guide
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12]">
                What Is the Wegovy Pill? A Plain UK Guide
              </h1>
              <p
                id="hero-answer"
                className="mt-4 text-base font-medium leading-relaxed text-slate-800 sm:text-lg"
              >
                The Wegovy pill, also called the Wegovy tablet, is a once daily
                weight loss tablet that contains semaglutide. The MHRA approved it
                in the UK on 11 June 2026. It is prescription only, and it was
                not on the NHS when it was approved.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                This guide provides clear, practical information about oral
                semaglutide in the UK: how the daily tablet works, who is
                eligible, what clinical trials found, and how it compares to the
                weekly injection. For step-by-step dosing and safety answers, see
                our{" "}
                <Link href="/wegovy-tablet-faqs" className={linkClass}>
                  Wegovy tablet FAQs
                </Link>
                , or read our overview of the injection at{" "}
                <Link href="/what-is-wegovy" className={linkClass}>
                  What is Wegovy
                </Link>
                .
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200/90 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-950 sm:text-base">
                <p>
                  <strong>Medical note:</strong> This guide provides general
                  information and is not medical advice. Only a licensed UK
                  healthcare professional can determine if prescription weight
                  loss medication is clinically suitable for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 leading-relaxed text-slate-800 sm:px-6 sm:py-14 md:py-16">
          {/* Section 2: What is in the Wegovy pill? */}
          <section id="what-is-in-the-wegovy-pill" className="scroll-mt-28 space-y-6">
            <h2 className={h2Class}>What is in the Wegovy pill?</h2>
            <p className="leading-relaxed">
              What does the Wegovy pill contain? The active ingredient in the
              Wegovy pill is semaglutide. Who makes the Wegovy pill? Novo Nordisk
              makes both the tablet and the Wegovy weekly injection. The tablet
              comes in four strengths: 1.5 mg, 4 mg, 9 mg and 25 mg.
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className={h3Class}>What type of drug is the Wegovy pill?</h3>
                <p className="leading-relaxed">
                  Is the Wegovy pill a GLP-1? Yes. It is a GLP-1 medicine, also
                  called a GLP-1 receptor agonist. It copies a gut hormone called
                  GLP-1 that your body makes after you eat. Is the Wegovy pill
                  semaglutide? Yes. Semaglutide is the active ingredient, and it is
                  the same medicine as in the injection.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className={h3Class}>What is the Wegovy pill called?</h3>
                <p className="leading-relaxed">
                  The brand name is Wegovy, the same as the injection. What is the
                  Wegovy tablet? It is the Wegovy pill under another name. What are
                  Wegovy tablets? They are the same as the Wegovy pill. What is oral
                  Wegovy? That is a third name for the same medicine. What is the
                  new Wegovy pill? It is the tablet form of Wegovy, approved in the
                  UK in June 2026. The medicine inside is oral semaglutide.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className={h3Class}>Is the Wegovy pill the same as Rybelsus?</h3>
                <p className="leading-relaxed">
                  No. Rybelsus is also a semaglutide tablet, but it is licensed
                  for type 2 diabetes. The Wegovy pill is licensed for weight
                  loss and weight maintenance. A prescriber decides which one is
                  right for you.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: How does the Wegovy pill work? */}
          <section id="how-does-the-wegovy-pill-work" className="scroll-mt-28 space-y-6">
            <h2 className={h2Class}>How does the Wegovy pill work?</h2>
            <p className="leading-relaxed">
              So what does the Wegovy pill do? It copies GLP-1, a hormone that tells
              your body you have eaten. How does oral Wegovy work? In the same way
              as the injection. How does the Wegovy tablet work? The same way too.
              The patient leaflet says it works on receptors in the brain that
              control your appetite. You may feel full sooner and feel hungry less
              often, so you eat less. It is also meant to slow how fast food
              leaves your stomach.
            </p>
            <p className="leading-relaxed">
              Because it is a tablet, it has to get through your stomach and into
              your blood. That is why the rules are strict: an empty stomach for at
              least 8 hours, a sip of plain water, and a 30 minute wait before you
              eat or drink. Find the full steps in our{" "}
              <Link href="/wegovy-tablet-faqs" className={linkClass}>
                Wegovy tablet FAQs
              </Link>
              .
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className={h3Class}>
                  How does the Wegovy pill work for weight loss?
                </h3>
                <p className="leading-relaxed">
                  The tablet works on your appetite. It helps you eat less. That
                  is why it is licensed for use with a reduced calorie diet and
                  more physical activity. The tablet helps, but food and movement
                  still matter.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className={h3Class}>
                  How long does the Wegovy pill take to work?
                </h3>
                <p className="leading-relaxed">
                  You start on 1.5 mg once a day. You stay on each dose for at
                  least one month, and then your prescriber can raise it to 4 mg, 9
                  mg and 25 mg. That means at least three months on the lower doses
                  before you reach 25 mg. Weight loss is gradual and different
                  for each person. How quickly does the Wegovy pill work? That
                  depends on your dose, your diet, your activity and how well you
                  cope with side effects. Your prescriber will review your
                  progress.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Does the Wegovy pill work? */}
          <section id="does-the-wegovy-pill-work" className="scroll-mt-28 space-y-6">
            <h2 className={h2Class}>Does the Wegovy pill work?</h2>
            <p className="leading-relaxed">
              Yes, for many people, but not for everyone. Do Wegovy pills work
              better for some people than others? Yes. Results are different for
              each person, and the tablet works best with a reduced calorie diet
              and more physical activity.
            </p>

            <div className="space-y-2">
              <h3 className={h3Class}>How effective is the Wegovy pill?</h3>
              <p className="leading-relaxed">
                The main trial is called OASIS 4. After 64 weeks, adults who took
                the 25 mg tablet had lost 13.6% of their body weight on average.
                People who took a dummy tablet lost 2.2%. That figure counts
                everyone who started the trial. Among people who kept taking the
                tablet, the average was 16.6%.
              </p>
              <p className="leading-relaxed">
                These are averages. Some people lose less and some lose more. The
                licence says to use the tablet with a reduced calorie diet and more
                physical activity. The trial looked at the 25 mg dose, and you start
                on a much lower dose.
              </p>
            </div>
          </section>

          {/* Section 5: Difference between pill and injection */}
          <section
            id="difference-between-wegovy-pill-and-injection"
            className="scroll-mt-28 space-y-6"
          >
            <h2 className={h2Class}>
              What is the difference between the Wegovy pill and the injection?
            </h2>
            <p className="leading-relaxed">
              What is different about the Wegovy pill is how you take it. The
              medicine is the same, semaglutide. Here is how the two compare:
            </p>

            {/* Comparison shown as plain list per checklist requirements */}
            <ul className="space-y-3 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <p>
                  <strong>The pill:</strong> one tablet every day, with strict
                  rules about an empty stomach, a sip of water and a 30 minute
                  wait.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <p>
                  <strong>The injection:</strong> one pen, once a week, with its
                  own dose steps.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <p>
                  <strong>Doses:</strong> the tablet goes from 1.5 mg to 25 mg a
                  day. The injection has its own doses. The numbers cannot be
                  compared with each other.
                </p>
              </li>
            </ul>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className={h3Class}>
                  Is the Wegovy pill the same as the injection?
                </h3>
                <p className="leading-relaxed">
                  It is the same medicine in a different form. If you use the 2.4
                  mg weekly injection, your prescriber can move you straight to
                  the 25 mg tablet. You start one week after your last injection.
                  Never swap one for the other on your own.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className={h3Class}>
                  Is the Wegovy pill just as effective as the injection?
                </h3>
                <p className="leading-relaxed">
                  We cannot say for certain. The tablet and the injection were
                  tested in different trials, with different people and different
                  lengths of time. Their results cannot be compared fairly. Ask
                  your prescriber which one suits you better.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Who can take the Wegovy pill? */}
          <section id="who-can-take-the-wegovy-pill" className="scroll-mt-28 space-y-6">
            <h2 className={h2Class}>Who can take the Wegovy pill?</h2>
            <p className="leading-relaxed">
              Adults aged 18 and over can be prescribed the Wegovy pill if they
              have a BMI of 30 or more. It is also licensed for a BMI of 27 to
              under 30 if you have at least one weight related health problem. A
              prescriber checks your health and your other medicines first. It is
              not recommended for under 18s. Not sure of your BMI? Use our{" "}
              <Link href="/tools/bmi-calculator" className={linkClass}>
                BMI calculator
              </Link>
              .
            </p>
            <p className="leading-relaxed">
              Do not use the tablet in pregnancy or while breastfeeding. If you
              could become pregnant, you need to use contraception. Stop the
              tablet at least 2 months before you plan to try for a baby, and talk
              to your prescriber first.
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className={h3Class}>What is the Wegovy pill used for?</h3>
                <p className="leading-relaxed">
                  It is used for weight loss and weight maintenance, along with a
                  reduced calorie diet and more physical activity.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className={h3Class}>What is the Wegovy pill dosage?</h3>
                <p className="leading-relaxed">
                  What dose is the Wegovy pill? The starting dose is 1.5 mg once a
                  day. The dose can then go up to 4 mg, 9 mg and 25 mg, with at
                  least one month at each step. What is the Wegovy pill maintenance
                  dose? It is 25 mg. Only your prescriber changes your dose. See
                  the dose chart in our{" "}
                  <Link href="/wegovy-tablet-faqs" className={linkClass}>
                    Wegovy tablet FAQs
                  </Link>
                  .
                </p>
                <p className="leading-relaxed">
                  Most side effects affect the stomach, such as feeling sick, being
                  sick, diarrhoea and constipation. The urgent signs are listed in
                  our{" "}
                  <Link href="/wegovy-tablet-faqs" className={linkClass}>
                    Wegovy tablet FAQs
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Is the Wegovy pill available in the UK? */}
          <section id="is-the-wegovy-pill-available-in-the-uk" className="scroll-mt-28 space-y-6">
            <h2 className={h2Class}>Is the Wegovy pill available in the UK?</h2>
            <p className="leading-relaxed">
              There are three different questions here: is it approved, is it
              available, and is it on the NHS. The answers are not the same.
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className={h3Class}>Is the Wegovy pill approved in the UK?</h3>
                <p className="leading-relaxed">
                  Yes. When was the Wegovy pill approved in the UK? The MHRA
                  approved the Wegovy tablet on 11 June 2026. Is the Wegovy pill
                  licensed in the UK? Yes. Approved and licensed mean the same
                  here. The medicine has met UK standards for safety, quality and
                  how well it works. It is the first oral GLP-1 tablet approved in
                  the UK for weight management.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className={h3Class}>
                  When will the Wegovy pill be available in the UK?
                </h3>
                <p className="leading-relaxed">
                  It can already be prescribed privately. Some UK pharmacies list
                  the tablets, but stock can be limited. The Medicines.org.uk
                  entry for the 25 mg tablet says it is not currently marketed in
                  the UK. Ask the pharmacy before you pay. Use a pharmacy that is
                  registered with the{" "}
                  <a
                    href="https://www.pharmacyregulation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    GPhC
                  </a>
                  . You cannot buy the tablet without a prescription.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className={h3Class}>Is the Wegovy pill available on the NHS?</h3>
                <p className="leading-relaxed">
                  Not yet. NICE decides what the NHS pays for, and it has not
                  recommended the tablet. Its assessment is not finished, and we
                  found no date. Until then, you can only get it privately.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Where to go next */}
          <section id="where-to-go-next" className="scroll-mt-28 space-y-6">
            <h2 className={h2Class}>Where to go next</h2>
            <p className="leading-relaxed">
              Ready for the practical questions? Read our{" "}
              <Link href="/wegovy-tablet-faqs" className={linkClass}>
                Wegovy tablet FAQs
              </Link>{" "}
              for how to take it, when to take it and what to ask your
              prescriber. To read about the weekly injection, go to{" "}
              <Link href="/what-is-wegovy" className={linkClass}>
                What is Wegovy
              </Link>
              .
            </p>
          </section>

          <div className="border-t border-slate-200 pt-8 text-xs text-slate-500">
            <p>
              Last reviewed: October 2026. Sources include regulatory filings
              with the{" "}
              <a
                href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                MHRA
              </a>
              , the OASIS 4 clinical trial report, and clinical guidelines from
              the{" "}
              <a
                href="https://www.pharmacyregulation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                General Pharmaceutical Council
              </a>{" "}
              and NICE.
            </p>
          </div>
        </div>

        <TrustSignals />
      </article>
    </>
  );
}
