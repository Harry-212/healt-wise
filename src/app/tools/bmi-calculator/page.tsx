import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BmiCalculatorClient from "@/components/tools/BmiCalculatorClient";
import {
  BMI_CALCULATOR_FAQ_BMI_ITEMS,
  BMI_CALCULATOR_FAQ_BMR_TDEE_ITEMS,
  bmiCalculatorFaqJsonLd,
  bmiCalculatorWebPageJsonLd,
} from "@/lib/seo/bmi-calculator-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const TITLE = "BMI, BMR & Calorie Calculator UK | Free Online Tool";
const DESCRIPTION =
  "Free BMI calculator UK: body mass index categories, NHS BMI thresholds, BMR calculator and estimated calorie needs for weight management planning.";

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/tools/bmi-calculator",
    title: TITLE,
    metaDescription: DESCRIPTION,
    openGraphTitle: TITLE,
    openGraphDescription: DESCRIPTION,
    imagePath: "/window.svg",
    imageAlt: "Healthwise360 — BMI calculator UK",
  }),
  title: {
    absolute: TITLE,
  },
};

export default function BmiCalculatorPage() {
  const faqLd = bmiCalculatorFaqJsonLd();
  const webLd = bmiCalculatorWebPageJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Tools"
        sectionPath="/tools"
        pageName="BMI Calculator UK"
        pagePath="/tools/bmi-calculator"
      />
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
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
            Free online tool
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What is a BMI calculator?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            A{" "}
            <strong className="font-medium text-slate-900">
              body mass index calculator
            </strong>{" "}
            estimates BMI from your height and weight using{" "}
            <span className="font-medium text-slate-900">
              weight ÷ height²
            </span>{" "}
            (height in metres, weight in kilograms). This{" "}
            <strong className="font-medium text-slate-900">BMI calculator UK</strong>{" "}
            page also estimates{" "}
            <strong className="font-medium text-slate-900">BMR</strong> and{" "}
            <strong className="font-medium text-slate-900">calorie needs</strong>{" "}
            so you can place your number in context—not as a diagnosis.
          </p>

          <h2
            id="bmi-categories"
            className="mt-14 scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            What Your BMI Number Means: NHS Categories & Thresholds
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            For most UK adults aged 18 and over, NHS and World Health Organisation (WHO) clinical classifications define your BMI number as follows:
          </p>

          <div className="my-6 overflow-hidden rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-bold">BMI Range</th>
                  <th className="px-4 py-3 font-bold">NHS Category</th>
                  <th className="px-4 py-3 font-bold">What It Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">Below 18.5</td>
                  <td className="px-4 py-3 text-slate-800">Underweight</td>
                  <td className="px-4 py-3 text-slate-600">May indicate nutritional deficiency or underlying conditions. Discuss with your GP.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">18.5 to 24.9</td>
                  <td className="px-4 py-3 text-emerald-800 font-semibold">Healthy weight</td>
                  <td className="px-4 py-3 text-slate-600">Associated with the lowest population-level risk of cardiometabolic conditions.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">25.0 to 29.9</td>
                  <td className="px-4 py-3 text-amber-800 font-semibold">Overweight</td>
                  <td className="px-4 py-3 text-slate-600">May increase long-term risk of type 2 diabetes and hypertension without lifestyle management.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">30.0 to 34.9</td>
                  <td className="px-4 py-3 text-rose-800 font-semibold">Obese (Class I)</td>
                  <td className="px-4 py-3 text-slate-600">Standard NHS threshold for structured weight management and private GLP-1 eligibility.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">35.0 to 39.9</td>
                  <td className="px-4 py-3 text-rose-800 font-semibold">Obese (Class II)</td>
                  <td className="px-4 py-3 text-slate-600">Meets NICE criteria for tier 3 specialised weight management and medical treatments.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">40.0 and above</td>
                  <td className="px-4 py-3 text-rose-900 font-bold">Obese (Class III / Severe)</td>
                  <td className="px-4 py-3 text-slate-600">Highest metabolic risk category; qualifies for specialist clinical interventions and bariatric pathways.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border border-emerald-900/15 bg-emerald-50/60 p-5 shadow-xs">
            <h3 className="font-bold text-emerald-950 text-base">
              Lower thresholds for ethnic minority backgrounds
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              NICE guidelines explicitly state that health risks associated with excess weight occur at lower BMI levels in adults of South Asian, Chinese, Black African, and African-Caribbean family backgrounds. For these groups, <strong>overweight starts at BMI 23.0</strong> and <strong>obesity starts at BMI 27.5</strong>.
            </p>
          </div>

          <h3 className="mt-8 text-lg font-bold text-slate-900">
            Waist circumference: The vital companion metric
          </h3>
          <p className="mt-3 leading-relaxed text-slate-700">
            BMI cannot measure where fat is stored. Visceral fat wrapped around internal organs poses greater health risks than subcutaneous fat under the skin. NHS guidance recommends measuring waist circumference:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• <strong>Women:</strong> Increased health risk at 80 cm (31.5 inches) or above; very high risk at 88 cm (34.5 inches).</li>
            <li>• <strong>Men:</strong> Increased health risk at 94 cm (37 inches) or above; very high risk at 102 cm (40 inches).</li>
          </ul>

          <h3 className="mt-8 text-lg font-bold text-slate-900">
            Weight management eligibility — what BMI can (and cannot) tell you
          </h3>
          <p className="mt-3 leading-relaxed text-slate-700">
            BMI categories help clinicians triage who may benefit from structured weight management support. In the UK, private and NHS prescription treatments such as Mounjaro (tirzepatide) and Wegovy (semaglutide) typically require:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• <strong>BMI of 30 kg/m² or above</strong> without other conditions.</li>
            <li>• <strong>BMI of 27 kg/m² or above</strong> with at least one weight-related medical condition (e.g. hypertension, dyslipidaemia, obstructive sleep apnoea, or pre-diabetes).</li>
            <li>• Reduced by 2.5 kg/m² for individuals from South Asian, Chinese, Black African, or African-Caribbean backgrounds.</li>
          </ul>

          <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-lg ring-1 ring-slate-200/80">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=75&w=1600"
              alt="Healthcare professional reviewing health measurements with a patient in a modern clinical setting"
              title="Healthcare professional reviewing health measurements with a patient in a modern clinical setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <h2
            id="bmr-calorie-needs"
            className="mt-16 scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            BMR calculator and calorie needs
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            Our{" "}
            <strong className="font-medium text-slate-900">BMR calculator</strong>{" "}
            uses the Mifflin–St Jeor equation (weight, height, age, and sex) to
            estimate calories burned at rest. Multiplying BMR by an activity
            factor gives an estimated TDEE—your approximate daily{" "}
            <strong className="font-medium text-slate-900">calorie needs</strong>{" "}
            for maintenance—then mild or moderate deficit ranges for planning.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Treat these figures as planning guides. Real needs vary with muscle
            mass, hormones, medications, and how accurately you pick an activity
            level. Agree low-calorie plans with a GP or dietitian if you have
            medical conditions.
          </p>

          <h2 className="mt-14 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Is BMI accurate?
          </h2>
          <p className="mt-4 leading-relaxed text-slate-700">
            BMI is{" "}
            <strong className="font-medium text-slate-900">accurate</strong> for
            summarising weight-for-height. It is{" "}
            <strong className="font-medium text-slate-900">not accurate</strong>{" "}
            as a personal body-fat measurement, and it can misclassify muscular
            people as overweight or miss risk in people with higher visceral fat
            at a &quot;healthy&quot; BMI.
          </p>
          <p className="mt-4 leading-relaxed text-slate-700">
            Use this page to understand BMI categories, NHS thresholds, BMR, and
            calorie needs—then take questions to a clinician when health
            decisions are involved.
          </p>

          <h2
            id="faq"
            className="mt-16 scroll-mt-28 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            FAQ
          </h2>
          <h3 className="mt-8 scroll-mt-28 text-lg font-bold text-slate-900">
            BMI categories &amp; NHS thresholds
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
            BMR &amp; calorie needs
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
              Related reading
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li>
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-medium text-emerald-800 underline underline-offset-2"
                >
                  Pharmacy safety &amp; GPhC checks
                </Link>
              </li>
              <li>
                <Link
                  href="/diet"
                  className="font-medium text-emerald-800 underline underline-offset-2"
                >
                  Diet &amp; calorie balance
                </Link>
              </li>
              <li>
                <a
                  href="#bmi-calculator-results"
                  className="font-medium text-emerald-800 underline underline-offset-2"
                >
                  Back to the calculator
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
