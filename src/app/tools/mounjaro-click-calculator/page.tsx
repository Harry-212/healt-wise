import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MounjaroClickCalculatorClient from "@/components/tools/MounjaroClickCalculatorClient";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import {
  MOUNJARO_CLICK_CALCULATOR_FAQ_ITEMS,
  mounjaroClickCalculatorArticleJsonLd,
  mounjaroClickCalculatorFaqJsonLd,
} from "@/lib/seo/mounjaro-json-ld";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/tools/mounjaro-click-calculator",
  title: "Mounjaro Click Calculator UK (2026)",
  metaDescription:
    "Free Mounjaro KwikPen click calculator for UK patients. Calculate clicks for any dose with a complete reference chart for all pen strengths.",
  openGraphTitle: "Mounjaro Click Calculator & Chart UK",
  openGraphDescription:
    "Easily calculate how many clicks are needed for your specific Mounjaro dose using our free tool. Includes a full dosage chart for UK KwikPens.",
  imagePath: "/og-image.png",
  imageAlt: "Health Wise — Mounjaro Click Calculator",
});

const RELATED_GUIDES = [
  {
    href: "/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust",
    title: "Mounjaro Dose Guide UK",
    description:
      "Understand Mounjaro strengths, titration and how dose escalation is normally managed.",
    cta: "Read the Mounjaro Dose Guide",
  },
  {
    href: "/helpful-guides/mounjaro-side-effects-uk",
    title: "Mounjaro Side Effects",
    description:
      "Learn about common Mounjaro side effects, how they may be managed and when to seek medical advice.",
    cta: "Read the Mounjaro Side Effects Guide",
  },
  {
    href: "/mounjaro-price-comparison",
    title: "Compare Mounjaro Prices UK",
    description:
      "Compare current Mounjaro prices across UK providers and all six dose strengths.",
    cta: "Compare Mounjaro Prices",
  },
  {
    href: "/helpful-guides/mounjaro-delivery-storage-uk",
    title: "Mounjaro Storage and Travel",
    description:
      "Learn how to store your Mounjaro KwikPen correctly and what to consider during delivery and travel.",
    cta: "Read the Mounjaro Storage Guide",
  },
  {
    href: "/what-is-mounjaro",
    title: "What Is Mounjaro?",
    description:
      "An introduction to tirzepatide, how Mounjaro works, dosing and its use for weight management.",
    cta: "Read the Mounjaro Guide",
  },
  {
    href: "/compare/wegovy-vs-mounjaro",
    title: "Mounjaro vs Wegovy",
    description:
      "Compare Mounjaro and Wegovy side by side, including treatment differences, dosing and UK prices.",
    cta: "Compare Mounjaro and Wegovy",
  },
] as const;

const REFERENCES = [
  {
    href: "https://medical.lilly.com/uk/products/answers/how-to-use-the-mounjaro-tirzepatide-kwikpen-219072",
    text: "Eli Lilly and Company Limited (2025) How to use the Mounjaro® (tirzepatide) KwikPen®. Last reviewed 15 August 2025.",
  },
  {
    href: "https://www.medicines.org.uk/emc/product/15485/pil",
    text: "Eli Lilly and Company Limited / electronic Medicines Compendium (emc) (2026) Mounjaro KwikPen 12.5mg solution for injection in pre-filled pen – Patient Information Leaflet (PIL). Last updated 3 September 2026.",
  },
  {
    href: "https://www.medicines.org.uk/emc/product/15482/smpc",
    text: "Eli Lilly and Company Limited / electronic Medicines Compendium (emc) (2026) Mounjaro KwikPen 5mg solution for injection in pre-filled pen – Summary of Product Characteristics (SmPC). Last updated 8 September 2026.",
  },
  {
    href: "https://www.medicines.org.uk/emc/ingredient/3374",
    text: "electronic Medicines Compendium (emc) (n.d.) Medicines containing the active ingredient tirzepatide.",
  },
  {
    href: "https://www.gov.uk/government/publications/glp-1-medicines-for-weight-loss-and-diabetes-what-you-need-to-know",
    text: "Medicines and Healthcare products Regulatory Agency (MHRA) (2026) GLP-1 medicines for weight loss and diabetes: what you need to know. Published 5 June 2025; last updated 5 February 2026.",
  },
  {
    href: "https://yellowcard.mhra.gov.uk/what-to-report",
    text: "Medicines and Healthcare products Regulatory Agency (MHRA) (n.d.) What to report to the Yellow Card scheme.",
  },
] as const;

export default function MounjaroClickCalculatorPage() {
  const articleLd = mounjaroClickCalculatorArticleJsonLd();
  const faqLd = mounjaroClickCalculatorFaqJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Tools"
        sectionPath="/tools"
        pageName="Mounjaro Click Calculator"
        pagePath="/tools/mounjaro-click-calculator"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <MounjaroClickCalculatorClient />
      <article className="relative z-20 border-t border-slate-200/80 bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <p
            id="mounjaro-calculator-guide"
            className="scroll-mt-28 text-xs font-semibold uppercase tracking-wide text-emerald-800"
          >
            Safety Context
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Understanding the Mounjaro KwikPen Clicks
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            The UK Mounjaro KwikPen is designed as a multi-dose device that
            delivers exactly four full doses of the prescribed strength. A
            standard full dose is achieved by turning the dial until it stops,
            which corresponds to exactly <strong>60 clicks</strong>.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            This tool is provided for informational purposes, to help patients
            visually understand how the volume translates into clicks.
            Attempting to extract partial doses or &quot;split&quot; a pen is
            considered an <strong>off-label use</strong>. We strongly advise
            that you only follow the dosage prescribed by your healthcare
            provider and consult them before making any adjustments to your
            treatment plan.
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6">
            <p className="text-sm font-semibold text-emerald-900">
              Important Safety Information
            </p>
            <p className="mt-2 leading-relaxed text-emerald-900/90">
              Mounjaro is a prescription-only medicine. The UK Mounjaro
              KwikPen is designed to deliver four fixed labelled doses
              according to the manufacturer&apos;s instructions. Eli
              Lilly&apos;s UK instructions direct users to turn the dose knob
              until it stops and the &quot;1&quot; symbol appears in the dose
              window when administering the prescribed full dose. Counting
              clicks to administer a partial dose is not part of the standard
              manufacturer instructions.
            </p>
            <p className="mt-3 text-sm font-semibold text-emerald-900">
              Do not use this calculator to:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1.5 text-emerald-900/90">
              <li>decide which Mounjaro dose you should take;</li>
              <li>increase your dose;</li>
              <li>decrease your dose;</li>
              <li>change to a different pen strength;</li>
              <li>extend the intended use of a KwikPen; or</li>
              <li>replace advice from your prescriber, doctor or pharmacist.</li>
            </ul>
            <p className="mt-3 leading-relaxed text-emerald-900/90">
              If you have been given individual instructions that differ from
              the standard manufacturer process, follow the advice of the
              healthcare professional responsible for your treatment.
            </p>
          </div>

          <div className="relative mt-12 aspect-16/10 w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg ring-1 ring-slate-200/80">
            <Image
              src="/blog/mounjaro-click-calculator-uk-hero-v2.png"
              alt="Mounjaro KwikPen click calculator reference chart"
              title="Mounjaro KwikPen click calculator reference chart"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How Does the Mounjaro Click Calculator Work?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            The calculator is designed to show the mathematical relationship
            between the strength of a UK Mounjaro KwikPen and a dose that has
            already been prescribed. For example, a person may have a
            particular KwikPen strength while their prescriber has given them
            specific individual instructions about their treatment.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            The calculator can help explain the proportional relationship
            between those two figures. <strong>It does not decide which dose
            is medically appropriate.</strong> Any change to your dose or pen
            strength should be discussed with the healthcare professional
            responsible for your prescription.
          </p>

          <h2 className="mt-14 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How the calculation works
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            The math behind the click calculator is simple. Since a full dose is
            always 60 clicks, you divide your desired dose by the total pen
            strength, and then multiply by 60.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="font-mono text-lg font-bold text-slate-900">
              Clicks = (Prescribed Dose ÷ Pen Strength) × 60
            </p>
          </div>
          <p className="mt-4 leading-relaxed text-slate-700">
            For example, if you have a 5mg pen and were prescribed a 2.5mg
            dose: <strong>(2.5 ÷ 5) × 60 = 30 clicks</strong>.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Mounjaro KwikPen Strengths
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Mounjaro KwikPens are available in the following strengths: 2.5
            mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg and 15 mg. Each pen is designed to
            deliver the labelled dose printed on the pen when used according
            to the manufacturer&apos;s instructions. That means a 5 mg
            KwikPen is designed to deliver a different labelled dose from a 10
            mg or 15 mg KwikPen.
          </p>

          <h3 className="mt-10 text-lg font-bold text-slate-900">
            Why Pen Strength Matters
          </h3>
          <p className="mt-3 leading-relaxed text-slate-700">
            A Mounjaro KwikPen is manufactured for a specific labelled dose.
            The relationship between the labelled strength of a pen and a
            smaller amount can be expressed mathematically, but that should
            not be confused with official dosing instructions. A mathematical
            proportion does not automatically mean that a partial dose should
            be administered. If the strength printed on your pen does not
            match the dose you believe you have been prescribed, contact your
            prescriber or dispensing pharmacy before using the pen.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Official Mounjaro KwikPen Instructions vs Click Counting
          </h2>
          <h3 className="mt-6 text-lg font-bold text-slate-900">
            Standard manufacturer instructions
          </h3>
          <p className="mt-3 leading-relaxed text-slate-700">
            The UK Mounjaro KwikPen is designed to provide four fixed labelled
            doses. For a normal full dose, the manufacturer instructs the
            user to turn the dose knob until it stops and the &quot;1&quot;
            symbol appears in the dose window. The pen should then be used
            according to the instructions supplied with the medicine.
          </p>
          <h3 className="mt-8 text-lg font-bold text-slate-900">
            Click counting
          </h3>
          <p className="mt-3 leading-relaxed text-slate-700">
            The official UK instructions do not provide a
            manufacturer-approved click chart for selecting partial doses. A
            click-based calculator can therefore only represent a
            mathematical relationship within the pen mechanism. It should not
            be interpreted as an instruction to administer a different dose.
            If your clinician has specifically instructed you to use a
            partial dose, ask them to confirm exactly how they want the
            medicine administered.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Can You Take a Partial Dose From a Mounjaro KwikPen?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            The Mounjaro KwikPen is designed to deliver the labelled dose
            printed on the pen. Partial-dose click counting is not part of
            the standard manufacturer instructions. There may be individual
            clinical situations where a prescriber gives a patient specific
            instructions that differ from the standard labelled-dose process.
            If that applies to you, follow the instructions provided by your
            prescriber. Do not use an online calculator to independently
            decide that you should take more or less Mounjaro than you have
            been prescribed.
          </p>

          <h3 className="mt-10 text-lg font-bold text-slate-900">
            Important Warnings
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
            <li>
              <strong>Always follow your prescription:</strong> Do not change
              your dosage without speaking to your clinician.
            </li>
            <li>
              <strong>Sterility and device mechanics:</strong> The KwikPen is
              built for a specific usage pattern. Reusing needles or
              manipulating the dial for partial doses may affect the sterility
              of the medication or the accuracy of the pen.
            </li>
            <li>
              <strong>The &quot;5th dose&quot; myth:</strong> While some
              residual liquid remains in the pen after 4 doses, Eli Lilly does
              not endorse extracting it. The concentration and sterility cannot
              be guaranteed.
            </li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What About Medicine Left in the Pen After Four Doses?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Some users notice that liquid appears to remain inside a Mounjaro
            KwikPen after the four intended doses have been administered. The
            manufacturer instructs users to discard the KwikPen after the
            four labelled doses have been used. Visible liquid remaining in
            the device should not automatically be treated as an additional
            dose. Trying to extract or administer medicine beyond the
            intended four-dose use falls outside the standard instructions
            for the pen. If you are unsure how many doses have been used or
            whether your pen has functioned correctly, contact your
            pharmacist or prescribing provider.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Mounjaro Dose Escalation
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Mounjaro treatment normally begins at a lower dose and may be
            increased gradually. However, progressing to the next strength is
            not simply an automatic process for every patient. Dose changes
            can depend on treatment response, side effects, tolerability,
            individual health factors, and the judgement of the prescribing
            healthcare professional. Your prescriber should tell you whether
            and when your dose should change. Do not increase your dose
            simply because a particular number of weeks has passed.
          </p>

          <h2
            id="faq"
            className="mt-16 scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Mounjaro Click Calculator FAQs
          </h2>
          <dl className="mt-4 space-y-8">
            {MOUNJARO_CLICK_CALCULATOR_FAQ_ITEMS.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.question}
                </dt>
                <dd className="mt-2 leading-relaxed text-slate-700">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            References &amp; Official Sources
          </h2>
          <ol className="mt-4 list-decimal list-inside space-y-3 text-sm leading-relaxed text-slate-700">
            {REFERENCES.map((ref) => (
              <li key={ref.href}>
                {ref.text}{" "}
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-medium text-violet-800 underline underline-offset-2"
                >
                  Available at source
                </a>{" "}
                (Accessed: 15 September 2026).
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm italic leading-relaxed text-slate-600">
            Where information on Healthwise360 differs from the latest
            manufacturer instructions, follow the manufacturer&apos;s current
            instructions and advice from your healthcare professional.
          </p>

          <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
            <p className="text-sm font-semibold text-slate-900">
              About This Calculator
            </p>
            <p className="mt-2 leading-relaxed text-slate-700">
              Healthwise360 provides the Mounjaro Click Calculator as an
              educational reference. The calculator does not prescribe
              Mounjaro, decide whether Mounjaro is suitable for you, select
              your dose, or recommend increasing or decreasing your dose, and
              it does not replace advice from a healthcare professional. It
              is intended to help explain the mathematical relationship
              between a KwikPen strength and a dose that has already been
              prescribed.
            </p>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1 text-sm text-slate-600 sm:grid-cols-3">
              <div>
                <dt className="font-semibold text-slate-900">Reviewer</dt>
                <dd>Alistair Campbell, Not medical doctor</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">
                  Reviewed date
                </dt>
                <dd>15 September 2026</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">
                  Next scheduled review
                </dt>
                <dd>1 October 2026</dd>
              </div>
            </dl>
          </div>

          <div className="mt-14">
            <p className="text-sm font-semibold text-slate-900">
              Related Mounjaro Guides
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {RELATED_GUIDES.map((guide) => (
                <div
                  key={guide.href}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-semibold text-slate-900">
                    {guide.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {guide.description}
                  </p>
                  <Link
                    href={guide.href}
                    className="mt-2 inline-block text-sm font-medium text-violet-800 underline underline-offset-2"
                  >
                    {guide.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-slate-300 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-900">
              Medical Disclaimer
            </p>
            <p className="mt-2 leading-relaxed text-slate-700">
              Mounjaro (tirzepatide) is a prescription-only medicine. This
              calculator and the information on this page are provided for
              general educational purposes only and do not constitute
              medical advice, prescribing advice or individual dosing
              instructions. Do not start, stop, increase, decrease or
              otherwise change your prescribed Mounjaro dose based on
              information from this calculator. Always follow the
              instructions supplied with your medicine and the advice of
              your doctor, pharmacist or other appropriately qualified
              healthcare professional.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
