"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection, GuideTable } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";
import { blogImgPath, BMI_HERO_PNG, BMI_INLINE_PNG } from "./blog-assets";

const SHARE_PATH = "/blog/what-is-bmi-calculator";
const HERO_SRC = blogImgPath(BMI_HERO_PNG);
const INLINE_SRC = blogImgPath(BMI_INLINE_PNG);

const TOC = [
  { id: "what-is-bmi", label: "What is BMI and how to calculate it" },
  { id: "bmi-categories", label: "BMI categories used in the UK" },
  { id: "healthy-bmi", label: "What is a healthy BMI?" },
  { id: "how-to-calculate", label: "How to calculate BMI step-by-step" },
  { id: "treatment-eligibility", label: "BMI and weight loss treatment eligibility" },
  { id: "bmi-limitations", label: "The limitations of BMI" },
  { id: "nhs-practice", label: "How the NHS uses BMI" },
  { id: "calculator-vs-bmr-tdee", label: "BMI vs BMR and TDEE" },
  { id: "next-steps", label: "What to do after calculating your BMI" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const SOCIAL_HASHTAGS =
  "#BMICalculatorUK #BodyMassIndex #HealthMetrics #WegovyEligibility #MounjaroEligibility #CalorieTrackerUK #Healthwise360";

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}${SHARE_PATH}`;

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${darkMode ? "text-slate-300" : "text-slate-900"}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}
            >
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to Blog
          </Link>

          <div className="flex items-center gap-3">
            <Moon className={`h-4 w-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`} />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${darkMode ? "bg-slate-700" : "bg-slate-200"}`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`h-4 w-4 rounded-full shadow transition-all ${darkMode ? "translate-x-6 bg-slate-900" : "translate-x-0 bg-white"}`}
              />
            </button>
            <Sun className={`h-4 w-4 ${darkMode ? "text-yellow-400" : "text-slate-400"}`} />
          </div>
        </div>

        <BlogArticleColumn toc={TOC} darkMode={darkMode}>

          <header className={`mb-8 border-b pb-8 ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            BMI Calculator UK: What Your Number Means, How to Use It, and What Comes Next
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              30 May 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              10 min read
            </span>
          </div>

          <BlogArticleHeroImage
            src={HERO_SRC}
            alt="BMI Calculator UK — Modern clinic scale and health trackers"
          />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <GuideSection darkMode={darkMode} id="what-is-bmi" heading="What Is BMI and How Do You Calculate It?">
                <p className="text-lg md:text-xl">
                  BMI, representing Body Mass Index, is a number calculated from your height and weight that is used to estimate whether your body weight falls within a healthy range for your height. The formula is straightforward:
                </p>
                <p className="font-mono text-center bg-slate-100 dark:bg-slate-900 p-4 rounded-xl text-lg font-semibold my-4">
                  BMI = weight (kg) ÷ height (m²)
                </p>
                <p>
                  For example, a person who weighs 80 kg and is 1.75 m tall has a BMI of 80 ÷ (1.75 × 1.75) = <strong>26.1</strong>, which falls in the overweight category.
                </p>
                <p>
                  If you prefer to use stones, pounds, and feet, our interactive <Link href="/tools/bmi-calculator" className="font-medium text-emerald-600 hover:underline">BMI calculator UK</Link> tool accepts all UK measurement formats, including kg, lbs, stone, cm, and feet or inches. It returns your result instantly alongside NHS-aligned category context.
                </p>
                <p>
                  BMI does not measure body fat directly. However, it is widely used by NHS clinicians, NICE guidelines, and private healthcare providers as a quick, standardised screening tool that helps identify when further health assessment may be appropriate.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="bmi-categories" heading="BMI Categories Used in the UK (NHS Standard)">
                <p>
                  The NHS uses the following BMI classifications for adults aged 18 and over:
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["BMI Range", "Category"]}
                    rows={[
                      { cells: ["Below 18.5", "Underweight"] },
                      { cells: ["18.5 to 24.9", "Healthy weight"] },
                      { cells: ["25.0 to 29.9", "Overweight"] },
                      { cells: ["30.0 to 34.9", "Obese (Class I)"] },
                      { cells: ["35.0 to 39.9", "Obese (Class II)"] },
                      { cells: ["40.0 and above", "Obese (Class III) / Severely obese"] },
                    ]}
                  />
                </div>
                <p>
                  These thresholds are based on World Health Organisation (WHO) guidance and are used consistently across NHS services, NICE clinical guidelines, and UK private healthcare providers when making weight-related assessments.
                </p>
                <p>
                  It is important to note that these categories are screening tools, not diagnoses. A BMI in the overweight or obese range does not automatically mean a person has or will develop health problems, and a BMI in the healthy range does not guarantee good metabolic health.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="healthy-bmi" heading="What Is a Healthy BMI in the UK?">
                <p>
                  For most UK adults, a healthy BMI sits between <strong>18.5 and 24.9</strong>. Within this range, research consistently shows a lower population-level risk of weight-related conditions such as type 2 diabetes, hypertension, cardiovascular disease, and certain cancers.
                </p>
                <p>
                  However, "healthy BMI" is a statistical concept, not a personal verdict. Factors such as age, sex, ethnicity, muscle mass, bone density, and where fat is stored in the body all affect individual health risk in ways that BMI cannot capture.
                </p>
                <p>
                  For UK adults of South Asian, Black African, or Black Caribbean heritage, Public Health England and NICE note that health risks associated with excess weight may occur at lower BMI thresholds, with overweight sometimes defined as BMI 23+ and obesity as BMI 27.5+ in these populations.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="how-to-calculate" heading="How to Calculate BMI in the UK: Step-by-Step">
                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Using Metric Measurements (kg and cm)
                </h3>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Measure your height in centimetres (e.g. 170 cm = 1.70 m)</li>
                  <li>Weigh yourself in kilograms (e.g. 75 kg)</li>
                  <li>Multiply your height in metres by itself: 1.70 × 1.70 = 2.89</li>
                  <li>Divide your weight by that number: 75 ÷ 2.89 = <strong>25.9</strong></li>
                </ol>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Using Imperial Measurements (stone and feet)
                </h3>
                <p>
                  The formula in imperial units is:
                </p>
                <p className="font-mono text-center bg-slate-100 dark:bg-slate-900 p-4 rounded-xl text-lg font-semibold my-4">
                  BMI = (weight in pounds ÷ height in inches²) × 703
                </p>
                <p>
                  Because this involves multiple conversions, using an online calculator is considerably more practical. To make this easy, our [healthy BMI UK](/tools/bmi-calculator) calculator handles all conversions automatically. You can enter your measurements in whatever format you use and the result updates in real time.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Quick Reference: BMI by Height and Weight
                </h3>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Height", "Weight", "BMI", "Category"]}
                    rows={[
                      { cells: ["5'4\" (163 cm)", "9 st (57 kg)", "21.4", "Healthy"] },
                      { cells: ["5'4\" (163 cm)", "11 st (70 kg)", "26.3", "Overweight"] },
                      { cells: ["5'4\" (163 cm)", "14 st (89 kg)", "33.4", "Obese"] },
                      { cells: ["5'8\" (173 cm)", "11 st (70 kg)", "23.4", "Healthy"] },
                      { cells: ["5'8\" (173 cm)", "13 st (83 kg)", "27.7", "Overweight"] },
                      { cells: ["5'8\" (173 cm)", "17 st (108 kg)", "36.1", "Obese"] },
                      { cells: ["6'0\" (183 cm)", "13 st (83 kg)", "24.8", "Healthy"] },
                      { cells: ["6'0\" (183 cm)", "15 st (95 kg)", "28.4", "Overweight"] },
                      { cells: ["6'0\" (183 cm)", "19 st (121 kg)", "36.1", "Obese"] },
                    ]}
                  />
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="treatment-eligibility" heading="BMI and Weight Loss Treatment Eligibility in the UK">
                <p>
                  This is where calculating your BMI goes beyond what most standard calculators offer. Your BMI result is directly relevant to whether you may qualify for prescription weight loss treatments in the UK, particularly GLP-1 medications such as Wegovy (semaglutide) and Mounjaro (tirzepatide).
                </p>

                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  What BMI Is Needed for Wegovy in the UK?
                </h3>
                <p>
                  Based on NICE guidance and typical private prescribing criteria in the UK:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong>BMI 30 or above</strong>: this is generally the clearest group considered for GLP-1 prescribing, with no additional health conditions required.
                  </li>
                  <li>
                    <strong>BMI 27 to 29.9</strong>: this may be considered when weight-related health conditions are also present, including type 2 diabetes, high blood pressure, dyslipidaemia, obstructive sleep apnoea, or prediabetes.
                  </li>
                  <li>
                    <strong>BMI below 27</strong>: prescription weight loss injections are not typically the first line of support, meaning lifestyle changes and a broader medical review tend to lead the way.
                  </li>
                </ul>
                <p>
                  For a full breakdown of Wegovy eligibility criteria in the UK, including what health conditions count and how private assessments work, we invite you to read our thorough <Link href="/what-is-wegovy" className="font-medium text-emerald-600 hover:underline">Wegovy weight loss guide</Link> to learn more about the qualification pathways.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  What BMI Is Needed for Mounjaro in the UK?
                </h3>
                <p>
                  Mounjaro (tirzepatide) follows broadly similar BMI thresholds to Wegovy under UK prescribing frameworks:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong>BMI 30 or above</strong>: typically eligible for assessment, subject to a comprehensive medical history review.
                  </li>
                  <li>
                    <strong>BMI 27 to 29.9</strong>: possible with qualifying comorbidities, at the prescriber's clinical discretion.
                  </li>
                </ul>
                <p>
                  NICE approved Mounjaro for use in weight management in the UK, with the rollout now underway through specialist NHS services. For detailed information on how eligibility works across NHS and private routes, see our <Link href="/what-is-mounjaro" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss guide</Link> which outlines the necessary clinical steps.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  BMI Is Not the Whole Story
                </h3>
                <p>
                  A BMI result, even one that falls within the eligible range, does not guarantee access to prescription weight loss treatment. A full clinical assessment will also consider:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Medical history and existing conditions</li>
                  <li>Current medications (some interact with GLP-1 treatments)</li>
                  <li>Mental health history</li>
                  <li>Personal weight loss goals</li>
                  <li>Previous weight management attempts</li>
                </ul>
                <p>
                  BMI is the entry point for the conversation, not the endpoint. Always discuss eligibility with a licensed prescriber.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="bmi-limitations" heading="The Limitations of BMI: What It Does Not Measure">
                <p>
                  BMI is a population-level tool applied to individuals, and that gap between its intended use and its actual use creates several important limitations:
                </p>

                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  BMI Does Not Measure Body Fat
                </h3>
                <p>
                  BMI uses weight-for-height as a proxy for body fat, but weight includes muscle, bone, water, and organ mass as well as fat. A highly muscular person may have a BMI in the overweight range with a very low body fat percentage. Conversely, a person with a healthy BMI may carry a higher proportion of visceral fat, particularly in the abdominal region, than their number suggests.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  BMI and Ethnicity
                </h3>
                <p>
                  Research shows that people of South Asian heritage tend to accumulate visceral fat, the type associated with metabolic risk, at lower BMI values than people of white European heritage. The same pattern, though to a lesser degree, is observed in some East Asian and Black African populations. NICE has acknowledged this and suggests lower intervention thresholds for these groups.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  BMI and Older Adults
                </h3>
                <p>
                  Muscle mass naturally decreases with age, meaning an older adult may have a healthy BMI while carrying a higher proportion of body fat than a younger person at the same BMI. Conversely, BMI may underestimate frailty risk in people over 70.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  BMI and Sex
                </h3>
                <p>
                  Women typically have a higher percentage of body fat than men at the same BMI due to physiological differences in fat distribution. Standard BMI thresholds do not account for this directly.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Better Metrics to Use Alongside BMI
                </h3>
                <p>
                  For a more complete picture, clinicians and health researchers often use BMI in combination with:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong>Waist circumference</strong>: a direct measure of central adiposity (abdominal fat), which is more closely associated with metabolic risk than overall BMI.
                  </li>
                  <li>
                    <strong>Waist-to-height ratio</strong>: dividing waist circumference by height; a ratio above 0.5 in adults is associated with elevated cardiovascular risk.
                  </li>
                  <li>
                    <strong>Body fat percentage</strong>: measured via DEXA scan, bioelectrical impedance, or skinfold callipers, which is more accurate but less widely available.
                  </li>
                  <li>
                    <strong>Blood tests</strong>: fasting glucose, HbA1c, lipid panel, and liver function can reveal metabolic risk invisible to BMI.
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-practice" heading="BMI and the NHS: How It Is Used in Clinical Practice">
                <p>
                  The NHS uses BMI routinely across a wide range of services:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong>GP consultations</strong>: BMI is recorded as part of standard health checks and chronic disease management.
                  </li>
                  <li>
                    <strong>Weight management referrals</strong>: NHS Tier 2 and Tier 3 weight management services typically require BMI 30+ (or 28+ with comorbidities) for referral.
                  </li>
                  <li>
                    <strong>Surgical eligibility</strong>: bariatric surgery on the NHS generally requires BMI 40+ (or 35+ with serious comorbidities) and a documented history of non-surgical attempts.
                  </li>
                  <li>
                    <strong>Drug prescribing</strong>: NICE guidance for weight loss medications including Wegovy, Mounjaro, Mysimba, and Orlistat all include BMI-based eligibility criteria.
                  </li>
                  <li>
                    <strong>Screening programmes</strong>: certain cancer and cardiovascular screening criteria include BMI thresholds.
                  </li>
                </ul>
                <p>
                  Understanding your BMI in the context of these NHS benchmarks helps you have more informed conversations with healthcare providers.
                </p>
              </GuideSection>

              <div className="my-10">
                <BlogArticleHeroImage
                  src={INLINE_SRC}
                  alt="Metabolic, calorie, and metabolic tracking dashboard"
                  priority={false}
                  showFullImage
                />
              </div>

              <GuideSection darkMode={darkMode} id="calculator-vs-bmr-tdee" heading="BMI Calculator vs. BMR and TDEE: Understanding All Three Numbers">
                <p>
                  Our advanced <Link href="/tools/bmi-calculator" className="font-medium text-emerald-600 hover:underline">BMI calculator UK</Link> tool provides three separate metrics. Here is how they relate to each other:
                </p>

                <h3 className={`mt-6 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  BMI (Body Mass Index)
                </h3>
                <p>
                  What it tells you: whether your weight-to-height ratio falls within population-defined healthy, overweight, or obese ranges. Used for clinical screening and treatment eligibility.
                </p>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  BMR (Basal Metabolic Rate)
                </h3>
                <p>
                  What it tells you: how many calories your body burns at complete rest, representing the minimum energy required for basic functions like breathing, circulation, and cell repair. It is calculated using the Mifflin–St Jeor equation, which uses your weight, height, age, and sex.
                </p>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 my-4 space-y-2">
                  <p className="font-semibold text-sm uppercase tracking-wider text-slate-400">Mifflin–St Jeor formula:</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Men: BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age) + 5</li>
                    <li>Women: BMR = (10 × weight in kg) + (6.25 × height in cm) − (5 × age) − 161</li>
                  </ul>
                </div>

                <h3 className={`mt-10 text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  TDEE (Total Daily Energy Expenditure)
                </h3>
                <p>
                  What it tells you: your estimated total calorie burn across a full day, including BMR plus activity. Calculated by multiplying BMR by an activity factor:
                </p>
                <div className={`my-6 overflow-hidden rounded-xl border ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
                  <GuideTable
                    headers={["Activity Level", "Multiplier", "Example"]}
                    rows={[
                      { cells: ["Sedentary (little or no exercise)", "1.2", "Desk job, no exercise"] },
                      { cells: ["Lightly active (1 to 3 days per week)", "1.375", "Walking, light gym"] },
                      { cells: ["Moderately active (3 to 5 days per week)", "1.55", "Regular gym sessions"] },
                      { cells: ["Very active (6 to 7 days per week)", "1.725", "Daily training"] },
                      { cells: ["Extremely active (physical job plus training)", "1.9", "Manual labour + sport"] },
                    ]}
                  />
                </div>
                <p>
                  TDEE is the most useful number for anyone trying to understand calorie needs for weight maintenance or gradual reduction.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="next-steps" heading="What to Do After Calculating Your BMI">
                <p>
                  Your BMI result is a starting point, not a conclusion. Here is what each category broadly suggests as a next step:
                </p>
                <ul className="space-y-4 pl-5">
                  <li className="relative pl-2 before:absolute before:-left-3 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500">
                    <strong>Underweight (below 18.5)</strong>: Speak with a GP. Unexplained low BMI may relate to nutritional deficiencies, disordered eating, thyroid conditions, or other health factors requiring investigation.
                  </li>
                  <li className="relative pl-2 before:absolute before:-left-3 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500">
                    <strong>Healthy weight (18.5 to 24.9)</strong>: Maintain current habits. Monitor waist circumference as an additional health metric. If you have concerns about energy, fatigue, or specific conditions, a GP check-up is worthwhile regardless of BMI.
                  </li>
                  <li className="relative pl-2 before:absolute before:-left-3 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500">
                    <strong>Overweight (25 to 29.9)</strong>: Consider lifestyle changes such as dietary adjustments and increased activity. If weight-related conditions are present including hypertension, pre-diabetes, and sleep apnoea, this is worth discussing with a GP. Prescription weight loss treatment may be relevant for some people in this range as discussed in the eligibility context above.
                  </li>
                  <li className="relative pl-2 before:absolute before:-left-3 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500">
                    <strong>Obese (30 and above)</strong>: Discuss options with a GP. NHS weight management services, lifestyle programmes, and prescription treatments including GLP-1 medications may all be relevant. In this situation, exploring the options and pricing available privately is highly useful. You can check our independent <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">mounjaro vs wegovy vs saxenda comparison</Link> hub, which provides verified price data across licensed UK providers.
                  </li>
                </ul>
              </GuideSection>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  FAQ: BMI Calculator UK
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      1. What is a healthy BMI for a woman in the UK?
                    </h3>
                    <p>
                      The NHS uses the same BMI range for both men and women: 18.5 to 24.9 is considered healthy weight. However, because women typically carry a higher proportion of body fat than men at the same BMI, some clinicians consider waist circumference or body fat percentage as supplementary metrics. For women, a waist circumference below 80 cm (31.5 inches) is generally associated with lower metabolic risk.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      2. What is a healthy BMI for a man in the UK?
                    </h3>
                    <p>
                      The same NHS standard applies: 18.5 to 24.9. For men, a waist circumference below 94 cm (37 inches) is the supplementary NHS guidance for lower metabolic risk, rising to high risk above 102 cm (40 inches).
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      3. How accurate is BMI as a health measure?
                    </h3>
                    <p>
                      BMI is accurate at what it is designed to measure: weight relative to height. It is not accurate as a measure of body fat, metabolic health, or individual disease risk. It works well as a population-level screening tool and a starting point for clinical conversations. For individual assessment, it should be used alongside waist circumference, blood tests, and clinical judgement.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      4. At what BMI does the NHS offer weight loss treatment?
                    </h3>
                    <p>
                      NHS weight management services typically require BMI 30 or above for referral. Wegovy and Mounjaro are available through NHS specialist services with BMI thresholds of 30+ (or 35+ in some NICE pathway frameworks), subject to specific eligibility criteria. NHS GP services can advise on local availability and referral pathways.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      5. Can I use a BMI calculator in stone and feet?
                    </h3>
                    <p>
                      Yes. Our interactive <Link href="/tools/bmi-calculator" className="font-medium text-emerald-600 hover:underline">BMI calculator UK</Link> tool accepts height in feet/inches and weight in stone, pounds, or kg, in any combination. Results update in real time as you type.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      6. Is BMI different for Asian adults in the UK?
                    </h3>
                    <p>
                      Yes. Public Health England and NICE acknowledge that people of South Asian, East Asian, and some other Asian heritage groups face higher metabolic risk at lower BMI values. The suggested adjusted thresholds are: overweight at BMI 23+, and obese at BMI 27.5+. These adjusted thresholds are increasingly used in clinical practice, though not yet universally applied across all NHS services.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      7. Does BMI affect my eligibility for Wegovy or Mounjaro?
                    </h3>
                    <p>
                      BMI is one of the key eligibility criteria for GLP-1 weight loss treatments in the UK. Generally, BMI 30+ may qualify without additional conditions, while BMI 27 to 29.9 may qualify with weight-related health conditions such as high blood pressure, type 2 diabetes, or sleep apnoea. However, eligibility is always determined by a licensed prescriber following a full clinical assessment, meaning BMI alone is not sufficient. For price and provider comparison, you can visit our comprehensive <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">mounjaro vs wegovy vs saxenda comparison</Link> dashboard.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      8. What is a normal BMI for a 60-year-old in the UK?
                    </h3>
                    <p>
                      The standard NHS BMI range (18.5–24.9) applies across adult age groups, including those over 60. However, for older adults, maintaining a BMI slightly above the healthy range (around 25–27) may be associated with lower all-cause mortality in some research, sometimes called the "obesity paradox." Additionally, muscle mass naturally declines with age, so BMI may underestimate adiposity in older adults. A GP can provide age-appropriate guidance.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  BMI is the most widely used clinical screening measure for body weight in the UK: simple to calculate, consistently applied across NHS and private healthcare, and directly relevant to weight loss treatment eligibility. However, it is most useful when understood alongside its limitations: it does not measure body fat directly, it does not account for muscle mass or body composition, and it requires adjustment for certain ethnic groups.
                </p>
                <p>
                  To summarise:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    A <strong>healthy BMI</strong> for UK adults is <strong>18.5 to 24.9</strong>.
                  </li>
                  <li>
                    <strong>Overweight</strong> is defined as BMI <strong>25 to 29.9</strong>; <strong>obese</strong> as <strong>30 and above</strong>.
                  </li>
                  <li>
                    BMI thresholds of <strong>27+ and 30+</strong> are typically relevant for prescription weight loss treatment eligibility in the UK.
                  </li>
                  <li>
                    BMI is most useful <strong>alongside</strong> waist circumference, blood tests, and clinical assessment, not as a standalone verdict.
                  </li>
                </ul>
                <p>
                  Use our free [BMI calculator UK](/tools/bmi-calculator) to calculate your number in any UK measurement format, understand your category in NHS-aligned context, and explore what your result might mean for weight management options.
                </p>
                <p>
                  For those whose BMI falls in the overweight or obese range and who are exploring what treatment options exist, our interactive <Link href="/compare/mounjaro-vs-wegovy-vs-saxenda" className="font-medium text-emerald-600 hover:underline">weight loss treatment comparison</Link> tool and our page highlighting the <Link href="/prices/cheapest-options-uk" className="font-medium text-emerald-600 hover:underline">cheapest weight loss treatment UK</Link> options provide independent, verified price data across more than 60 GPhC-registered pharmacies, with no provider affiliation influencing the results.
                </p>
                <p className={`text-sm leading-relaxed mt-8 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  <span className="font-semibold text-slate-600 dark:text-slate-300">Suggested hashtags:</span>{" "}
                  {SOCIAL_HASHTAGS}
                </p>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="BMI Calculator UK: What Your Number Means, How to Use It, and What Comes Next"
                description="Understand your BMI category, NHS thresholds, limitations, weight loss treatment eligibility, and what to do with your result."
              />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
