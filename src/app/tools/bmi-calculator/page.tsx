import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BmiCalculatorClient from "@/components/tools/BmiCalculatorClient";
import InternalLinks from "@/components/content/InternalLinks";
import { internalLinksFor } from "@/lib/internal-linking";
import {
  BMI_CALCULATOR_FAQ_BMI_ITEMS,
  BMI_CALCULATOR_FAQ_BMR_TDEE_ITEMS,
  bmiCalculatorFaqJsonLd,
  bmiCalculatorWebPageJsonLd,
} from "@/lib/seo/bmi-calculator-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/tools/bmi-calculator",
  title:
    "BMI calculator UK (2026) — weight loss treatment & Wegovy eligibility",
  metaDescription:
    "Free BMI calculator UK: cm/feet, kg/lbs/stone. See your BMI category, what it means for prescription weight loss treatment, Wegovy/Mounjaro context, FAQs, and links to compare prices.",
  openGraphTitle:
    "BMI calculator UK — what is my BMI & am I eligible for Wegovy?",
  openGraphDescription:
    "Calculate BMI for UK adults, understand NHS-style categories, and explore treatment context with clear next steps to Wegovy, Mounjaro, and price comparisons.",
  imagePath: "/window.svg",
  imageAlt: "Health Wise — BMI calculator UK",
});

export default function BmiCalculatorPage() {
  const faqLd = bmiCalculatorFaqJsonLd();
  const webLd = bmiCalculatorWebPageJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webLd) }}
      />
      <BmiCalculatorClient />
      <article className="relative z-20 border-t border-slate-200/80 bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <p
            id="bmi-weight-loss-treatment-uk"
            className="scroll-mt-28 text-xs font-semibold uppercase tracking-wide text-emerald-800"
          >
            Clinical context
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What BMI means for weight loss treatment in the UK
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            BMI (body mass index) is a quick screening number—weight relative to
            height. It does not measure body fat directly, but UK clinicians
            often use it alongside your history to think about{" "}
            <Link
              href="/what-is-wegovy"
              className="font-medium text-violet-800 underline decoration-violet-300 underline-offset-2 hover:text-violet-950"
            >
              Wegovy
            </Link>
            ,{" "}
            <Link
              href="/what-is-mounjaro"
              className="font-medium text-violet-800 underline decoration-violet-300 underline-offset-2 hover:text-violet-950"
            >
              Mounjaro
            </Link>
            , and other options. Our tool helps you estimate BMI and understand
            typical private eligibility bands—not to replace a consultation.
          </p>

          <h3 className="mt-10 text-lg font-bold text-slate-900">
            BMI requirement for Wegovy and Mounjaro (typical UK framing)
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
            <li>
              <strong>BMI 30 or above (obesity):</strong> often the clearest
              group for discussing GLP-1 weight loss medicines privately,
              assuming no contraindications.
            </li>
            <li>
              <strong>BMI 27–29.9 (overweight):</strong> treatment may be
              considered when{" "}
              <strong>weight-related health conditions</strong> are present
              (for example, high blood pressure, dyslipidaemia, obstructive sleep
              apnoea, or prediabetes)—your prescriber decides.
            </li>
            <li>
              <strong>Under BMI 27:</strong> prescription weight loss injections
              are usually not the first option; lifestyle change and broader
              medical review tend to lead.
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            If you are asking{" "}
            <strong className="font-medium text-slate-800">
              am I eligible for Wegovy in the UK
            </strong>
            , the answer always depends on a full assessment—BMI is only one
            part. See{" "}
            <Link
              href="/what-is-wegovy#eligibility-uk"
              className="font-medium text-violet-800 underline underline-offset-2"
            >
              Wegovy eligibility (UK)
            </Link>{" "}
            and{" "}
            <Link
              href="/what-is-mounjaro#eligibility-uk"
              className="font-medium text-violet-800 underline underline-offset-2"
            >
              Mounjaro eligibility (UK)
            </Link>{" "}
            on our guides for detail.
          </p>

          <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg ring-1 ring-slate-200/80">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=75&w=1600"
              alt="Healthcare professional reviewing health measurements with a patient in a modern clinical setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What is BMI?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            BMI compares your weight to your height using the formula{" "}
            <span className="font-medium text-slate-900">
              weight ÷ height²
            </span>{" "}
            (with height in metres and weight in kilograms). It is widely used
            because it is simple and consistent, which helps public health and
            clinical pathways talk about risk at a population level.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            For individuals, BMI is a starting point: athletes with high muscle
            mass, some older adults, and certain ethnic groups may need
            different interpretations—your clinician may also look at waist
            size, blood tests, medications, and medical history.
          </p>

          <h2 className="mt-14 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            BMI and weight loss treatment in the UK
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Prescription medicines such as{" "}
            <Link
              href="/wegovy-price-comparison"
              className="font-medium text-violet-800 underline underline-offset-2"
            >
              Wegovy
            </Link>{" "}
            and{" "}
            <Link
              href="/mounjaro-price-comparison"
              className="font-medium text-violet-800 underline underline-offset-2"
            >
              Mounjaro
            </Link>{" "}
            are not bought off the shelf: a qualified prescriber must review
            risks and benefits. BMI thresholds help triage who might be
            suitable, especially in private services that mirror NICE-style
            criteria, but they never tell the whole story.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            When you are ready to compare pathways and monthly costs, our{" "}
            <Link
              href="/compare/wegovy-vs-mounjaro"
              className="font-medium text-violet-800 underline underline-offset-2"
            >
              Wegovy vs Mounjaro
            </Link>{" "}
            page and{" "}
            <Link
              href="/prices/cheapest-options-uk"
              className="font-medium text-violet-800 underline underline-offset-2"
            >
              cheapest options UK
            </Link>{" "}
            hub connect research to action—always alongside professional advice.
          </p>

          <h2 className="mt-14 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Is BMI accurate?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            BMI is <strong className="font-medium text-slate-900">accurate</strong>{" "}
            for what it is designed to do: summarise weight-for-height. It is{" "}
            <strong className="font-medium text-slate-900">not accurate</strong>{" "}
            as a personal body fat measurement, and it can misclassify muscular
            people as overweight or miss risk in people with higher visceral fat
            at a &quot;healthy&quot; BMI.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Reliable decisions about GLP-1 treatment rely on a prescriber&apos;s
            judgement, monitoring, and your follow-up—not on any online
            calculator alone. Use this page to learn and prepare questions; use
            appointments to decide.
          </p>

          <h2
            id="faq"
            className="mt-16 scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            FAQ
          </h2>
          <h3 className="mt-8 scroll-mt-28 text-lg font-bold text-slate-900">
            BMI &amp; UK weight loss treatment
          </h3>
          <dl className="mt-4 space-y-8">
            {BMI_CALCULATOR_FAQ_BMI_ITEMS.map((item) => (
              <div key={item.q}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.q}
                </dt>
                <dd className="mt-2 leading-relaxed text-slate-700">{item.a}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-12 scroll-mt-28 text-lg font-bold text-slate-900">
            BMR &amp; TDEE (metabolism &amp; calories)
          </h3>
          <dl className="mt-4 space-y-8">
            {BMI_CALCULATOR_FAQ_BMR_TDEE_ITEMS.map((item) => (
              <div key={item.q}>
                <dt className="text-lg font-semibold text-slate-900">
                  {item.q}
                </dt>
                <dd className="mt-2 leading-relaxed text-slate-700">{item.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
            <p className="text-sm font-semibold text-slate-900">
              Continue your journey
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li>
                <Link
                  href="/compare/wegovy-vs-mounjaro"
                  className="font-medium text-violet-800 underline underline-offset-2"
                >
                  Compare treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/prices/cheapest-options-uk"
                  className="font-medium text-violet-800 underline underline-offset-2"
                >
                  Compare prices UK
                </Link>
              </li>
              <li>
                <Link
                  href="/what-is-wegovy"
                  className="font-medium text-violet-800 underline underline-offset-2"
                >
                  What is Wegovy?
                </Link>
              </li>
              <li>
                <Link
                  href="/what-is-mounjaro"
                  className="font-medium text-violet-800 underline underline-offset-2"
                >
                  What is Mounjaro?
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-16 border-t border-slate-200 pt-12">
            <InternalLinks links={internalLinksFor("bmiCalculator")} />
          </div>
        </div>
      </article>
    </>
  );
}
