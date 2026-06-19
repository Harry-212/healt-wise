"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import {
  UK_WEIGHT_LOSS_FLAT_INDEX_PATH,
  type UkWeightLossLocation,
} from "@/lib/data/uk-weight-loss-locations";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const PAGE_TITLE =
  "Best Weight Loss Treatment in Oldham: Practical, Evidence-Based Options for 2026";

export default function OldhamLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Why the best Oldham option depends on you" },
      { id: "free-nhs", label: "Free NHS and local authority programmes" },
      { id: "medical-options", label: "Medical weight loss options" },
      { id: "glp1", label: "Mounjaro, Wegovy, Ozempic and Saxenda" },
      { id: "choosing", label: "How to choose in Oldham" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Building your Oldham plan" },
      { id: "trust", label: "Why Health Wise is a comparator" },
      { id: "next-steps", label: "Practical next steps" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "more-uk", label: "Other places in the UK" },
    ],
    [],
  );

  const p = darkMode ? "text-slate-300" : "text-slate-700";
  const muted = darkMode ? "text-slate-400" : "text-slate-600";
  const strong = darkMode ? "text-white" : "text-slate-900";
  const border = darkMode ? "border-slate-700" : "border-slate-200";
  const boxBg = darkMode ? "bg-slate-900/80" : "bg-slate-50/90";
  const linkCls =
    "font-medium text-emerald-600 underline-offset-2 hover:underline";

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog?topic=locations"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${
              darkMode ? "text-slate-300" : "text-slate-900"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                darkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
          </Link>

          <div className="flex items-center gap-3">
            <Moon
              className={`h-4 w-4 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${
                darkMode ? "bg-slate-700" : "bg-slate-200"
              }`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`h-4 w-4 rounded-full shadow transition-all ${
                  darkMode
                    ? "translate-x-6 bg-slate-900"
                    : "translate-x-0 bg-white"
                }`}
              />
            </button>
            <Sun
              className={`h-4 w-4 ${
                darkMode ? "text-yellow-400" : "text-slate-400"
              }`}
            />
          </div>
        </div>

        <header className="mb-12">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600">
            {capitalizeHeadingWords("Locations in UK")}
          </p>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {PAGE_TITLE}
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${muted}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {nation}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Independent guide · May 2026
            </span>
          </div>

          <BlogArticleHeroImage src={hero.url} alt={hero.alt} />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>
        <BlogArticleColumn toc={toc} darkMode={darkMode}>
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="intro"
                heading="Why best weight loss treatment in Oldham depends on you"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  If you are trying to choose the best weight loss treatment in
                  Oldham, you probably want to know which option is safest,
                  whether NHS programmes are worth the wait, and if medications
                  like Mounjaro or Wegovy are realistic for you. In 2026, people
                  in Oldham usually get the most sustainable results from a mix
                  of free NHS lifestyle services, some local clinic support, and,
                  in specific cases, weight loss injections.
                </p>
                <p className={p}>
                  No single treatment fits everyone. The best choice depends on
                  your BMI, health conditions, budget, and how much support you
                  want around food, exercise, and your mindset. If you are still
                  comparing options, our{" "}
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    UK weight loss treatment comparison
                  </Link>{" "}
                  and{" "}
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    BMI calculator
                  </Link>{" "}
                  can help you prepare for a GP or pharmacy discussion.
                </p>
                <p className={p}>
                  When you search for the best weight loss treatment in Oldham,
                  you are really asking how you can lose weight safely and keep
                  it off, whether you should try a free NHS service, a local
                  clinic, or a private injection-based plan, and which approach
                  has the strongest evidence with the least risk for someone in
                  your situation.
                </p>
                <p className={p}>
                  Oldham, in Greater Manchester, sits within a mixed urban
                  health-system landscape. You can access free NHS-backed
                  programmes, partly funded local authority projects, and private
                  pharmacy clinics within a short distance. Your starting point,
                  including BMI, blood pressure, diabetes status, medications,
                  and everyday life, shapes what is suitable, not just what is
                  advertised.
                </p>
                <p className={p}>
                  Evidence suggests that the most successful long-term weight
                  loss treatments are integrated: calorie-controlled eating,
                  regular physical activity, professional support from a
                  dietitian, behavioural coach, or clinician, sometimes
                  medication such as GLP-1 treatment when appropriate, and
                  ongoing monitoring rather than a one-off course.
                </p>
                <p className={p}>
                  In Oldham, this tends to look like free NHS and local authority
                  funded programmes for people who want to build habits without
                  medications, local pharmacy-based clinics for people who can
                  afford private prescriptions or need faster access, and weight
                  loss injections such as Mounjaro, Wegovy, Ozempic, or Saxenda
                  for those who meet specific clinical and safety criteria.
                </p>
                <p className={p}>
                  The best option for you is likely not the one with the
                  flashiest website, but the one that fits your health, daily
                  routine, and willingness to keep going beyond the first few
                  weeks.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="free-nhs"
                heading="Free NHS and local authority programmes in Oldham"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  For many people in Oldham, the best first-step treatment is a
                  free NHS-linked weight loss programme because it focuses on
                  sustainable habits, not just the number on the scale. Services
                  like Your Health Oldham and NHS Greater Manchester tier 3
                  Choose to Change combine group support, one-to-one sessions,
                  and tailored exercise plans.
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Your Health Oldham by ABL Health
                </h3>
                <p className={p}>
                  Your Health Oldham is a key funded service in the borough,
                  jointly supported by Oldham Council and the NHS. It is not a
                  quick-fix clinic, but a health improvement service with a
                  strong focus on practical, everyday change.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    A 12-week structured weight management course covering
                    nutrition, portion control, mindful eating, and simple ways
                    to move more without a gym membership.
                  </li>
                  <li>
                    Group sessions that provide social support, which can reduce
                    the risk of dropping out. Group-based weight loss programmes
                    can help people lose more weight and keep it off longer than
                    going it alone.
                  </li>
                  <li>
                    One-to-one support from trained health coaches or lifestyle
                    coaches for people who prefer more privacy or have specific
                    concerns, such as joint pain, cultural food preferences, or
                    anxiety around eating.
                  </li>
                  <li>
                    Special-interest groups, such as men-only, women-only, or
                    culturally specific groups for ethnic minority communities,
                    which can feel more relatable and less intimidating.
                  </li>
                </ul>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  How to access
                </h3>
                <p className={p}>
                  You can usually self-refer through the Your Health Oldham
                  website, which links you to enrollment forms and local venues.
                  Your GP can also refer you, especially if they think you are at
                  higher risk for type 2 diabetes or heart disease. Some years,
                  Oldham uses a text-in system, such as texting OLDHAM to a
                  short-code number to request a callback, which is meant to make
                  it easier for busy people or those uncomfortable with online
                  forms.
                </p>
                <p className={p}>
                  This might be the best option if you want something free,
                  non-surgical, lower risk, and focused on long-term habit change
                  rather than rapid weight loss. Staff usually screen for basic
                  health issues such as blood pressure, blood sugar risk, and
                  mobility, then signpost you to diabetes prevention courses or
                  physiotherapy if needed.
                </p>
                <p className={p}>
                  If you are in Oldham and not yet eligible for weight loss
                  injections, this is often the most sensible first move:
                  building a solid foundation before adding medications.
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  NHS Greater Manchester Tier 3 Weight Management
                </h3>
                <p className={p}>
                  If your weight or health situation is more complex, the NHS may
                  offer a tier 3 service under the Choose to Change banner. These
                  services sit higher up the clinical ladder than generic
                  lifestyle groups because they include clinical assessment by a
                  specialist dietitian or obesity management team, behavioural
                  therapy for emotional eating or binge-eating patterns, and
                  specialised exercise plans for people with joint problems,
                  breathing issues, or long-term conditions.
                </p>
                <p className={p}>
                  Eligibility criteria in Greater Manchester for 2025-2026
                  typically include a BMI of 40 or more without comorbidities, or
                  a BMI of 35-39.9 alongside a serious condition such as type 2
                  diabetes, heart disease, or severe sleep apnoea. Some pathways
                  may be adapted for people of certain ethnic backgrounds, such
                  as South Asian, Black African, or Middle Eastern people, who
                  are at higher risk of diabetes at lower BMI thresholds. Access
                  is usually via GP referral rather than direct self-referral.
                </p>
                <p className={p}>
                  This pathway matters in Oldham because people in the higher BMI
                  range or with multiple health issues may need more resources
                  than a basic group course can provide. You are more likely to
                  have regular blood tests, blood pressure checks, and structured
                  follow-ups to make sure any weight loss plan is safe. If you
                  later become eligible for GLP-1 injections on the NHS, the tier
                  3 team often helps coordinate that transition.
                </p>
                <p className={p}>
                  For many people in Oldham, best does not mean the most
                  dramatic option, but the most clinically supported one. If your
                  health is fragile or you have tried several DIY diets that
                  failed, a tier 3 NHS programme can be a more realistic best
                  option than jumping straight to private medication.
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  NHS Digital Weight Management Programme
                </h3>
                <p className={p}>
                  Beyond in-person Oldham-based services, the NHS also offers a
                  digital weight management route that people can access from
                  home. The NHS Digital Weight Management Programme is an online
                  behavioural change course, usually delivered via an app or web
                  platform, for people with a BMI in the obesity range and a
                  diagnosis of type 2 diabetes or high blood pressure.
                </p>
                <p className={p}>
                  You typically need to register through your GP or a local
                  service to access the full programme. Once enrolled, it gives
                  you a 12-week structured plan focused on eating patterns,
                  physical activity, and simple self-monitoring such as tracking
                  food, movement, and mood. It uses behaviour change techniques
                  like goal-setting, problem-solving, and relapse prevention, and
                  provides automated feedback and reminders rather than intensive
                  one-to-one human contact.
                </p>
                <p className={p}>
                  Because this is a national NHS initiative, it can be available
                  to people in Oldham who meet the criteria even if local
                  face-to-face spaces are full. It can be a useful middle ground:
                  more structured than a generic app, but less intensive than a
                  full tier 3 clinic.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="medical-options"
                heading="Medical weight loss options in Oldham pharmacies"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  If you are in Oldham and want medical-style support, several
                  local pharmacies offer weight loss clinics where registered
                  clinicians can assess you, set goals, and, if appropriate,
                  prescribe private weight loss injections or tablets. These
                  options can feel faster than the NHS route, but they come with
                  out-of-pocket costs and require careful checks about safety and
                  follow-up care.
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  NHS prescription route for weight loss injections
                </h3>
                <p className={p}>
                  Since 2024-2025, NHS England, including Greater Manchester, has
                  been rolling out GLP-1 weight loss injections for adults who
                  meet strict criteria. The drug most often discussed in Oldham
                  media is Mounjaro, or tirzepatide, but the NHS may also use
                  Wegovy, semaglutide, or similar GLP-1 medications depending on
                  formularies and funding.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Adults with a BMI of 40 or more, with or without
                    comorbidities, may be considered.
                  </li>
                  <li>
                    Adults with a BMI of 35-39.9 plus a serious condition such
                    as type 2 diabetes, heart disease, or severe obesity-related
                    complications may be considered.
                  </li>
                  <li>
                    For some ethnic groups at higher risk of diabetes,
                    clinicians may apply slightly lower BMI thresholds following
                    national guidance.
                  </li>
                  <li>
                    You must usually be under 75 and not have certain
                    contraindications such as a history of pancreatitis,
                    medullary thyroid cancer, or severe gastroparesis.
                  </li>
                </ul>
                <p className={p}>
                  Access is via GP referral to a specialist obesity management or
                  diabetes care team. The prescription is then supervised with
                  regular blood tests, weight checks, and monitoring for nausea,
                  vomiting, or unexpected side effects.
                </p>
                <p className={p}>
                  Combining the injection with diet and exercise changes can help
                  eligible people lose about 10-15% of body weight over 12-24
                  months. The NHS option is often the safest and most affordable
                  long-term route because it includes monitoring and protects you
                  from risky off-label use. If you live in Oldham and are unsure
                  whether you qualify, ask your GP: &quot;I have a BMI of X and
                  I am being told I am on the borderline between type 2 diabetes
                  and pre-diabetes. Could I be considered for GLP-1 treatment on
                  the NHS?&quot;
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  Click2Pharmacy Oldham weight loss clinic
                </h3>
                <p className={p}>
                  If you do not meet NHS injection criteria but still want
                  medically supervised support, Click2Pharmacy in Oldham is a
                  local example of a pharmacy-run clinic. It may offer
                  face-to-face consultations with registered prescribers who
                  review your medical history, current medications, and
                  lifestyle, regular weight checks and progress tracking, and
                  private prescriptions for weight loss injections or tablets
                  such as Wegovy or Mounjaro-type GLP-1s if clinically
                  appropriate.
                </p>
                <p className={p}>
                  Because this is private care, the main differences from NHS
                  care are cost, access speed, and safety netting. You pay out of
                  pocket, often roughly GBP120 to GBP300 per month depending on
                  the drug, dose, and follow-up support. You may start faster
                  than the NHS waiting list, but you must still go through a
                  proper clinical assessment. Reputable clinics should offer
                  clear plans for monitoring side effects, especially nausea,
                  dehydration, and blood sugar changes, and you should still tell
                  your GP that you are using these medicines.
                </p>
                <p className={p}>
                  A best-practice private clinic in Oldham would check that you
                  are not pregnant or planning pregnancy in the short term, check
                  for contraindications, agree on a slow titration plan to reduce
                  side effects, and require repeat blood tests and periodic
                  reviews rather than a quick injection every month. A sensible
                  question to ask is: &quot;Can you show me the prescriber
                  registration and the pharmacy GPhC registration, and explain
                  how you monitor side effects and share information with my
                  GP?&quot; You can also read our guide to{" "}
                  <Link
                    href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                    className={linkCls}
                  >
                    UK pharmacy safety standards
                  </Link>{" "}
                  before comparing providers.
                </p>

                <h3
                  className={`pt-4 text-base font-semibold tracking-tight ${strong}`}
                >
                  Imaan Pharmacy on Oldham Road near Rochdale
                </h3>
                <p className={p}>
                  Imaan Pharmacy runs a dedicated weight management clinic on
                  Oldham Road, near the border with Rochdale. This is another
                  example of a local pharmacy that can offer confidential health
                  assessments in a private consultation room, regular tracking of
                  weight, waist circumference, blood pressure, and sometimes
                  simple blood tests, plus private prescriptions for drugs such
                  as Wegovy and Mounjaro-like tirzepatide GLP-1s when clinically
                  suitable.
                </p>
                <p className={p}>
                  Because this service is private and patient-paid, clarify the
                  exact monthly cost and what is included, including injections,
                  clinic visits, prescriptions, and blood tests. Ask whether the
                  pharmacy has a written policy for managing nausea, vomiting,
                  diarrhoea, or missed doses, and confirm that they will try to
                  share information with your GP if you request it.
                </p>
                <p className={p}>
                  For many people in Oldham, this kind of local pharmacy clinic
                  can feel like a middle ground: more convenient and faster than
                  NHS waiting lists, but still grounded in a bricks-and-mortar
                  clinic rather than a purely online-only provider.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="glp1"
                heading="Understanding GLP-1 weight loss treatments"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  GLP-1 weight loss injections such as Mounjaro, Wegovy, and
                  Ozempic help reduce appetite and slow how quickly food leaves
                  the stomach, which can support weight loss when combined with
                  diet and exercise. In 2025-2026, NHS Greater Manchester uses
                  these drugs mainly for adults with a BMI of 35-40 plus
                  comorbidities, or 40 plus without, while private clinics may
                  offer them to a wider range of patients who can afford them.
                </p>
                <p className={p}>
                  GLP-1 receptor agonists such as semaglutide and tirzepatide
                  mimic a natural gut hormone involved in regulating appetite,
                  slowing gastric emptying, and improving blood sugar control.
                  In weight management doses, people can lose on average
                  10-15% of body weight over 12-24 months, although results vary
                  between individuals. This is significantly more than most
                  people achieve with lifestyle changes alone, which is why
                  GLP-1s have become so prominent in Oldham and across the UK.
                </p>
                <p className={p}>
                  These drugs are not magic bullets. They only work well when
                  paired with calorie-controlled eating, regular movement, and
                  ongoing monitoring of side effects and blood sugar levels.
                  Before choosing a brand, it helps to understand{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    what Mounjaro is
                  </Link>{" "}
                  and how it differs from{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>
                  .
                </p>

                <h3
                  className={`pt-2 text-base font-semibold tracking-tight ${strong}`}
                >
                  Key differences: Mounjaro, Wegovy, Ozempic, and Saxenda
                </h3>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Mounjaro, or tirzepatide, is a dual-action GLP-1/GIP
                    receptor agonist. Some trials suggest it may lead to
                    slightly higher weight loss than pure GLP-1s, but also a
                    slightly higher chance of gastrointestinal side effects like
                    nausea and diarrhoea.
                  </li>
                  <li>
                    Wegovy, or semaglutide, is a high-dose form of semaglutide
                    used for weight management, with weekly injections. It is
                    frequently used in NHS and private settings in Oldham.
                  </li>
                  <li>
                    Ozempic, also semaglutide, is often prescribed at a lower
                    dose for type 2 diabetes, but is sometimes used off-label for
                    weight loss. The NHS usually reserves weight-loss-focused
                    prescriptions for approved products like Wegovy.
                  </li>
                  <li>
                    Saxenda, or liraglutide, is an older GLP-1-class drug,
                    typically given as a daily injection and commonly used in
                    private clinics where patients prefer a familiar brand.
                  </li>
                </ul>
                <p className={p}>
                  If you ask what will replace Mounjaro in Oldham and the UK,
                  the answer is not a single drug, but a range of GLP-1-class
                  options and alternative strategies. If supply or NHS funding
                  changes, your clinician might switch you to another GLP-1-class
                  medicine, adjust the dose, or focus more on intensive lifestyle
                  support.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="choosing"
                heading="How to choose the best option for you in Oldham"
              >
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatment in Oldham usually follows a
                  stepwise approach: start with free NHS or local authority
                  funded lifestyle support, then add medication or clinic-based
                  help only if appropriate and safe.
                </p>
                <p className={p}>
                  Ask what your BMI and health status are. If your BMI is below
                  35 and you have no major health issues, a free NHS-linked
                  programme like Your Health Oldham is often the safest and most
                  cost-effective first step. If you have a BMI of 35-40 plus
                  diabetes or heart disease, you may be on the threshold for
                  NHS-funded GLP-1s, and a GP discussion is essential.
                </p>
                <p className={p}>
                  Ask what you can comfortably afford each month. NHS programmes
                  are free, while local pharmacy-based clinics may cost roughly
                  GBP120 to GBP300 per month for injections depending on brand
                  and support. If you cannot afford this, focusing on
                  group-based or digital-only support makes more sense.
                </p>
                <p className={p}>
                  Ask how much time and mental energy you can commit. NHS and
                  some local programmes expect 12-week or longer commitments, but
                  they are low-risk and well-structured. Private clinics may feel
                  faster, but they still rely on you changing habits; if you are
                  not ready for that, even injections will disappoint.
                </p>
                <p className={p}>
                  Finally, ask whether you want long-term habit change or a
                  quick-fix solution. The evidence shows that quick fixes rarely
                  last. The best treatment for long-term success is the one you
                  can stick with beyond the first few weeks.
                </p>
                <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                  <li>
                    Use Oldham&apos;s green spaces and walking routes to build
                    movement into your day without needing a gym.
                  </li>
                  <li>
                    Talk to your GP before starting any weight loss injection,
                    even if a clinic seems easy to book.
                  </li>
                  <li>
                    Compare no more than two or three options, such as one NHS
                    programme, one local pharmacy clinic, and one GLP-1 brand, so
                    you do not get lost in choice overload.
                  </li>
                </ul>
              </GuideSection>

              <section id="faq" className="scroll-mt-28">
                <h2 className={`text-xl font-semibold ${strong}`}>
                  FAQs about weight loss treatment in Oldham
                </h2>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What is the most successful weight loss treatment for
                      people like me?
                    </h3>
                    <p className="mt-2">
                      The most successful weight loss treatments combine
                      realistic calorie reduction, regular physical activity,
                      and ongoing support, such as one-to-one counselling or
                      group programmes. In Oldham, this often means starting
                      with a free NHS or local authority weight management
                      service, then adding medication only if clinically
                      appropriate. Rapid miracle plans tend to fail long term,
                      while slower, steady change is more likely to stick.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How much do weight loss injections cost in the UK,
                      specifically around Oldham?
                    </h3>
                    <p className="mt-2">
                      Private GLP-1 injections such as Wegovy, Mounjaro types,
                      or similar medicines in Oldham-area pharmacies typically
                      range from about GBP120 to GBP300 per month, depending on
                      the brand, dose, and level of follow-up care. NHS
                      prescriptions are usually heavily subsidised or free, but
                      they are only available to eligible patients who meet
                      strict clinical criteria and are monitored by specialist
                      teams. Online-only providers may advertise lower prices,
                      but you must carefully check their safety standards and
                      whether they share data with your GP.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What qualifies you for Ozempic-style treatment on the NHS
                      in Greater Manchester?
                    </h3>
                    <p className="mt-2">
                      In the 2025-2026 NHS framework for Greater Manchester,
                      adults may qualify for Ozempic-style GLP-1 drugs for
                      weight loss purposes if they have a BMI of 40 or more, or
                      a BMI of 35-39.9 plus a serious condition such as type 2
                      diabetes, heart disease, or severe obesity-related
                      complications. They must also have no major
                      contraindications, such as a history of pancreatitis,
                      certain thyroid cancers, or severe stomach motility
                      problems. For some ethnic groups at higher risk of
                      diabetes, slightly lower BMI thresholds may apply. Access
                      is via GP referral to a specialist obesity management or
                      diabetes care team, not through direct self-referral to a
                      clinic.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      What will replace Mounjaro if it becomes unavailable or
                      less accessible in Oldham?
                    </h3>
                    <p className="mt-2">
                      There is no single drug that automatically replaces
                      Mounjaro. Clinicians may switch patients to another
                      GLP-1-class medicine such as Wegovy, Ozempic-type
                      compounds, or Saxenda, adjust doses, or rely more on
                      intensive lifestyle support and other medications. If
                      supply issues or NHS funding changes affect Mounjaro, your
                      clinician will usually discuss alternatives that match your
                      health profile and goals rather than simply stopping
                      treatment abruptly.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How can I trust that a local weight loss clinic in Oldham
                      is safe and reputable?
                    </h3>
                    <p className="mt-2">
                      Trustworthy clinics in Oldham clearly display professional
                      registration details and pharmacy registration, offer
                      written information about side effects, titration, and
                      monitoring, explain how they handle emergencies or side
                      effects such as severe nausea, vomiting, or dehydration,
                      and encourage you to keep your GP informed. If a clinic
                      feels vague about safety, hides registration details, or
                      pressures you to pay before a proper assessment, that is a
                      red flag.
                    </p>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${strong}`}>
                      How long should I expect realistic weight loss to take in
                      Oldham?
                    </h3>
                    <p className="mt-2">
                      Evidence-based guidelines suggest a safe and realistic rate
                      is about 0.5-1 kg, or 1-2 lb, per week. That means 5 kg in
                      roughly 5-10 weeks and 10-15% of body weight over 6-12
                      months, especially when combining diet, exercise, and, in
                      some cases, GLP-1 support. Claims of massive weight loss in
                      a few weeks are usually unsafe or unsustainable.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="conclusion"
                heading="Conclusion: Building your best weight loss treatment plan in Oldham"
              >
                <p className={p}>
                  Choosing the best weight loss treatment in Oldham in 2026 is
                  not about chasing one branded drug or one viral trend. It is
                  about matching your health, budget, and lifestyle to the most
                  realistic and evidence-based options available locally.
                </p>
                <p className={p}>
                  For many people, that means starting with free NHS-linked
                  services such as Your Health Oldham or digital NHS-style
                  programmes, using local pharmacy clinics for extra support or,
                  if appropriate, private GLP-1 prescriptions, and keeping your
                  GP looped in throughout the process for safety and continuity.
                </p>
                <p className={p}>
                  If you are unsure, the simplest first step is to ask your GP:
                  &quot;I am interested in weight loss treatment options in
                  Oldham, including GLP-1-type injections. Can you check my BMI,
                  health conditions, and NHS eligibility, and let me know which
                  options would be safest and most realistic for me?&quot;
                </p>
                <p className={p}>
                  This kind of conversation, grounded in local evidence and your
                  personal health profile, is the best way to turn best weight
                  loss treatment in Oldham from a marketing slogan into a
                  practical, personalised plan.
                </p>
              </GuideSection>

              <section
                id="trust"
                className={`scroll-mt-28 rounded-xl border p-5 ${border} ${boxBg}`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Why Health Wise is a comparator, not a prescriber
                </h2>
                <div className={`mt-4 space-y-3 text-sm ${p}`}>
                  <p>
                    We compare UK weight loss providers, prices, and safety
                    signals. This Oldham guide is general orientation, not a
                    diagnosis, prescription, or replacement for your GP.
                  </p>
                  <p className={muted}>
                    Read our{" "}
                    <Link href="/methodology" className={linkCls}>
                      methodology
                    </Link>{" "}
                    and{" "}
                    <Link href="/editorial-policy" className={linkCls}>
                      editorial policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps for Oldham residents"
              >
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    -{" "}
                    <Link
                      href="/compare/best-weight-loss-treatments-uk"
                      className={linkCls}
                    >
                      Compare best weight loss treatments in the UK
                    </Link>
                  </li>
                  <li>
                    -{" "}
                    <Link href="/mounjaro-price-comparison" className={linkCls}>
                      Mounjaro price comparison
                    </Link>
                    <span className={muted}> · </span>
                    <Link href="/wegovy-price-comparison" className={linkCls}>
                      Wegovy price comparison
                    </Link>
                    <span className={muted}> · </span>
                    <Link href="/saxenda-price-comparison" className={linkCls}>
                      Saxenda price comparison
                    </Link>
                  </li>
                  <li>
                    -{" "}
                    <Link href="/tools/bmi-calculator" className={linkCls}>
                      BMI calculator
                    </Link>
                  </li>
                </ul>
              </GuideSection>

              <section
                id="disclaimer"
                className="scroll-mt-28 rounded-xl border border-amber-200 bg-amber-50/90 p-4 text-sm leading-relaxed text-amber-950"
              >
                <h2 className="text-xl font-semibold text-amber-950">
                  Disclaimer
                </h2>
                <p className="mt-2">
                  This page is general information. Prescription medicines must
                  be issued by a qualified clinician who can take responsibility
                  for follow-up. If you are pregnant, planning pregnancy, or have
                  had pancreatitis or certain thyroid conditions, some options
                  may not be suitable.
                </p>
              </section>

              <section
                id="more-uk"
                className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${
                  darkMode ? "bg-slate-900/60" : "bg-slate-50"
                }`}
              >
                <h2 className={`text-xl font-semibold ${strong}`}>
                  Other places in the UK
                </h2>
                <p className={`mt-2 leading-relaxed ${p}`}>
                  Browse every UK city guide{" "}
                  <Link
                    href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
                    className={linkCls}
                  >
                    All UK location articles
                  </Link>
                  , or compare nearby guides for{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-rochdale"
                    className={linkCls}
                  >
                    Rochdale
                  </Link>
                  ,{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-bolton"
                    className={linkCls}
                  >
                    Bolton
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/best-weight-loss-treatment-in-stockport"
                    className={linkCls}
                  >
                    Stockport
                  </Link>
                  .
                </p>
              </section>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={PAGE_TITLE}
                description="Practical 2026 guide to NHS programmes, pharmacy clinics, and GLP-1 weight loss treatment options in Oldham."
              />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
