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
  "Weight Loss Treatment in Wigan: NHS and Private Options";

export default function WiganLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Wigan overview" },
      { id: "support", label: "Support available in Wigan" },
      { id: "be-well", label: "Be Well Wigan" },
      { id: "nhs", label: "NHS weight management" },
      { id: "digital", label: "NHS Digital programme" },
      { id: "mounjaro-nhs", label: "NHS Mounjaro access" },
      { id: "private", label: "Private treatment" },
      { id: "which-best", label: "Which option is best" },
      { id: "costs", label: "Private treatment costs" },
      { id: "pharmacy", label: "Check an online pharmacy" },
      { id: "safety", label: "Safety information" },
      { id: "questions", label: "Questions to ask" },
      { id: "plan", label: "Practical starting plan" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Final thoughts" },
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
  const tableBorder = darkMode ? "border-slate-700" : "border-slate-200";
  const linkCls =
    "font-medium text-emerald-600 underline-offset-2 hover:underline";

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog/topic/locations"
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

        <nav
          aria-label="Breadcrumb"
          className={`mb-8 flex flex-wrap items-center gap-2 text-xs font-medium ${muted}`}
        >
          <Link href="/" className={linkCls}>
            Home
          </Link>
          <span>/</span>
          <Link href="/blog/topic/locations" className={linkCls}>
            Locations
          </Link>
          <span>/</span>
          <span className={strong}>Wigan</span>
        </nav>

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
              Independent guide · July 2026
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
              heading="Weight Loss Treatment in Wigan: NHS and Private Options"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Finding weight-loss support in Wigan is not simply a matter of
                choosing between{" "}
                <Link href="/what-is-mounjaro" className={linkCls}>
                  Mounjaro
                </Link>
                ,{" "}
                <Link href="/what-is-wegovy" className={linkCls}>
                  Wegovy
                </Link>{" "}
                or a diet plan. The right route depends on your health, BMI,
                existing medical conditions, treatment history, personal
                preferences and whether you qualify for NHS-funded care.
              </p>
              <p className={p}>
                Wigan residents can access local lifestyle and activity support
                through Be Well Wigan, national NHS digital programmes, emerging
                NHS prescribing pathways and regulated private providers. Each
                option has different eligibility rules, waiting times, costs and
                levels of clinical support.
              </p>
              <p className={p}>
                This guide explains the main weight-loss treatment options
                available to people living in Wigan and the wider Greater
                Manchester area. For a wider view of how treatments compare, see
                our{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className={linkCls}
                >
                  UK weight loss treatment comparison
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="support"
              heading="Weight-loss support available in Wigan"
            >
              <div className={`overflow-x-auto rounded-xl border ${border}`}>
                <table
                  className={`w-full min-w-[640px] border-collapse text-sm ${p}`}
                >
                  <thead>
                    <tr
                      className={
                        darkMode ? "bg-slate-800/80" : "bg-slate-100"
                      }
                    >
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        Treatment route
                      </th>
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        What it provides
                      </th>
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        How to access it
                      </th>
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        Typical cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Be Well Wigan
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Nutrition guidance, physical activity and healthy-habit
                        support
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Contact Be Well Wigan directly
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Some resources and activities are free; other services
                        may charge
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS Digital Weight Management Programme
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Twelve-week online behavioural and lifestyle support
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Referral through an eligible healthcare route
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS prescription treatment
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Clinical assessment, prescribing and wraparound support
                        for selected eligible patients
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Eligible patients are contacted through their GP pathway
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Private weight-loss provider
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Clinical assessment, prescription treatment and ongoing
                        monitoring
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Apply directly to a regulated provider
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Self-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        GP and specialist support
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Assessment of weight-related conditions and possible
                        referral
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Contact your GP practice
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={`mt-4 ${p}`}>
                The most appropriate starting point depends on whether you
                primarily need lifestyle support, treatment for a weight-related
                health condition, prescription medicine or specialist care. A{" "}
                <Link href="/tools/bmi-calculator" className={linkCls}>
                  BMI calculator
                </Link>{" "}
                can help you prepare for that conversation with your GP or
                clinician.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="be-well"
              heading="Be Well Wigan: local lifestyle and nutrition support"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Be Well Wigan provides local information and activities designed
                to help residents improve their nutrition, become more active and
                develop healthier habits. Its current resources cover balanced
                diets, calories, food portions, protein, fibre, hydration,
                managing hunger, meal planning and maintaining behavioural
                change.
              </p>
              <p className={p}>
                Be Well also offers physical activity across Wigan Borough,
                including group exercise, swimming, walking, cycling, Couch to 5K
                and activities for people who may face barriers caused by health
                conditions, disability or reduced mobility.
              </p>
              <p className={p}>
                Local Be Well facilities include Wigan Life Centre, Robin Park
                Leisure Centre, Standish Leisure Centre, Ashton Leisure Centre,
                Hindley facilities, Howe Bridge Leisure Centre and Leigh Leisure
                Centre.
              </p>
              <p className={p}>This support may be particularly useful if you:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  Want help improving eating habits before considering
                  medication.
                </li>
                <li>Need a realistic plan for becoming more active.</li>
                <li>
                  Are taking prescription treatment and need lifestyle support
                  alongside it.
                </li>
                <li>
                  Have stopped treatment and want help maintaining progress.
                </li>
                <li>Prefer community or face-to-face activities.</li>
              </ul>
              <p className={p}>
                Be Well Wigan is not a replacement for a medical assessment. It
                is a practical local starting point for nutrition, activity and
                sustainable habit support. For broader habit and food ideas, you
                can also browse our{" "}
                <Link href="/diet" className={linkCls}>
                  diet guidance
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="nhs"
              heading="NHS weight-management support for Wigan residents"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                The NHS provides several types of weight-management support.
                Depending on your circumstances, this may include behavioural
                programmes, medication, specialist referral or surgery.
              </p>
              <p className={p}>
                The NHS advises that weight-management programmes may include
                one-to-one coaching, group support, cognitive behavioural
                approaches, online exercise, healthy-eating advice and recipes.
                Some programmes allow self-referral, while specialist services
                usually require assessment and referral.
              </p>
              <p className={p}>
                Because local services and referral routes can change, Wigan
                residents should check:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Their GP practice website.</li>
                <li>The current NHS Greater Manchester information.</li>
                <li>Be Well Wigan.</li>
                <li>Their community pharmacy.</li>
                <li>
                  Any referral information provided by their healthcare
                  professional.
                </li>
              </ul>
              <p className={p}>
                An NHS Greater Manchester notice published in 2024 stated that
                Wigan&apos;s specialist weight-management service had been
                suspended while Greater Manchester services were reviewed. This
                is why older search results may not reflect the current pathway.
              </p>
              <p className={p}>
                Do not assume that an old clinic listing or outdated referral
                form is still active. Ask your GP practice which pathway
                currently applies to your postcode and medical circumstances.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="digital"
              heading="NHS Digital Weight Management Programme"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Some Wigan residents may qualify for the NHS Digital Weight
                Management Programme.
              </p>
              <p className={p}>
                The programme is a twelve-week online behavioural and lifestyle
                service for adults living with obesity who also have type 2
                diabetes, high blood pressure or both. It can be accessed using a
                smartphone, tablet or computer.
              </p>
              <p className={p}>
                Referral may be available through a GP practice or another
                approved healthcare route. NHS Greater Manchester advises
                eligible residents to ask their GP practice or community pharmacy
                about the programme.
              </p>
              <p className={p}>This option may suit people who:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Meet the programme&apos;s medical criteria.</li>
                <li>Prefer online support.</li>
                <li>Want structured behavioural help.</li>
                <li>
                  Need support managing weight alongside diabetes or
                  hypertension.
                </li>
                <li>
                  Cannot easily attend regular face-to-face appointments.
                </li>
              </ul>
              <p className={p}>
                The programme is not an online prescription service. It focuses
                on behavioural and lifestyle support.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="mounjaro-nhs"
              heading="Can Wigan residents get Mounjaro on the NHS?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/what-is-mounjaro" className={linkCls}>
                  Mounjaro
                </Link>{" "}
                contains tirzepatide and is recommended by NICE for certain
                adults managing overweight or obesity. NHS England is introducing
                access gradually because prescribing requires trained healthcare
                professionals, regular clinical reviews and behavioural support.
              </p>
              <p className={p}>
                The current NHS Greater Manchester position is that GP practices
                are identifying eligible patients with the highest BMIs and
                greatest health risks. Invitations are sent directly by GP
                practices, and NHS Greater Manchester currently asks people not
                to contact their surgery solely to request the service.
              </p>
              <p className={p}>
                Patients who receive tirzepatide through this pathway must also
                agree to take part in wraparound support covering nutrition,
                physical activity and long-term behavioural change.
              </p>
              <p className={p}>
                This means that living in Wigan does not automatically make
                someone eligible for NHS Mounjaro. Eligibility is based on
                clinical need and the phased Greater Manchester rollout.
              </p>
              <p className={p}>
                A private provider may apply different criteria within the
                medicine&apos;s licensed indication, but private access still
                requires an assessment by a qualified prescriber. You can also
                review{" "}
                <Link
                  href="/helpful-guides/mounjaro-eligibility-bmi-requirements-uk"
                  className={linkCls}
                >
                  Mounjaro BMI and eligibility guidance
                </Link>{" "}
                before a clinical conversation.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="private"
              heading="Private weight-loss treatment in Wigan"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Wigan residents may also access prescription weight-loss
                treatment privately through a physical clinic or regulated online
                provider.
              </p>
              <p className={p}>
                Private access does not mean treatment is available without
                medical checks. GLP-1 and related weight-management medicines are
                prescription-only. A consultation must take place before a
                prescription is issued so that a healthcare professional can
                assess suitability, medical history, current medicines and
                potential risks.
              </p>
              <p className={p}>Private providers may offer treatments such as:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  <strong className={strong}>Mounjaro</strong>, containing
                  tirzepatide. Read more in{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    what is Mounjaro
                  </Link>
                  .
                </li>
                <li>
                  <strong className={strong}>Wegovy</strong>, containing
                  semaglutide. See{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    what is Wegovy
                  </Link>
                  .
                </li>
                <li>
                  <strong className={strong}>
                    Saxenda or another licensed liraglutide brand
                  </strong>
                  , where clinically appropriate. Compare background in{" "}
                  <Link href="/what-is-saxenda" className={linkCls}>
                    what is Saxenda
                  </Link>
                  .
                </li>
                <li>Other licensed weight-management medicines.</li>
              </ul>
              <p className={p}>
                Not every treatment will be suitable or available for every
                patient. The NHS explains that eligibility for weight-loss
                medicine depends partly on BMI and whether the person has health
                conditions affected by their weight. Medicines are normally used
                alongside nutrition and physical-activity support.
              </p>
              <p className={p}>
                A responsible provider should not guarantee approval before
                completing a proper assessment.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="which-best"
              heading="Mounjaro, Wegovy or lifestyle support: which is best?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                There is no single treatment that is best for every Wigan
                resident.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Local lifestyle support may be suitable when:
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>You want to improve eating and activity habits.</li>
                <li>You do not meet prescribing criteria.</li>
                <li>You prefer to avoid medication.</li>
                <li>You need support maintaining weight after treatment.</li>
                <li>Your clinician recommends lifestyle changes first.</li>
              </ul>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Prescription treatment may be considered when:
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>You meet the relevant clinical criteria.</li>
                <li>
                  Previous lifestyle efforts have not produced sufficient
                  improvement.
                </li>
                <li>Your weight is affecting your health.</li>
                <li>
                  A qualified prescriber decides the likely benefits outweigh the
                  risks.
                </li>
                <li>
                  You can attend follow-up reviews and engage with lifestyle
                  support.
                </li>
              </ul>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Specialist assessment may be needed when:
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>You have severe or complex obesity.</li>
                <li>You have several weight-related medical conditions.</li>
                <li>Previous treatment has not worked.</li>
                <li>
                  Your mental health, eating behaviour or medicines may be
                  affecting your weight.
                </li>
                <li>Bariatric surgery needs to be considered.</li>
              </ul>

              <p className={`mt-4 ${p}`}>
                A comparison website can explain treatments and prices, but it
                cannot decide which treatment is medically suitable for you. Use
                our{" "}
                <Link
                  href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                  className={linkCls}
                >
                  treatment comparison pages
                </Link>{" "}
                for information only, then decide with a clinician.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="costs"
              heading="What does private treatment cost?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Private weight-loss treatment costs vary by provider, medicine,
                dose and the services included.
              </p>
              <p className={p}>
                When comparing providers, look beyond the lowest headline price.
                Check whether the advertised cost includes:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>The prescribed medicine.</li>
                <li>Initial consultation.</li>
                <li>Repeat clinical reviews.</li>
                <li>Delivery.</li>
                <li>Needles or other supplies.</li>
                <li>Dose changes.</li>
                <li>Side-effect support.</li>
                <li>Nutrition or behavioural guidance.</li>
                <li>Cancellation or refund terms.</li>
              </ul>
              <p className={p}>
                The lowest starting-dose price may not represent the amount you
                will pay later. Some medicines use gradual dose escalation, which
                can affect monthly treatment costs.
              </p>
              <p className={p}>
                Healthwise360&apos;s{" "}
                <Link href="/mounjaro-price-comparison" className={linkCls}>
                  Mounjaro price comparison
                </Link>
                ,{" "}
                <Link href="/wegovy-price-comparison" className={linkCls}>
                  Wegovy price comparison
                </Link>{" "}
                and{" "}
                <Link href="/saxenda-price-comparison" className={linkCls}>
                  Saxenda price comparison
                </Link>{" "}
                pages should be used to compare the current provider information,
                rather than placing fixed prices in this Wigan guide.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="pharmacy"
              heading="How to check an online pharmacy"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Before paying a private provider that delivers to Wigan, verify
                the pharmacy independently.
              </p>
              <p className={p}>
                The General Pharmaceutical Council maintains the official
                register of pharmacies in Great Britain. You can search using the
                pharmacy name or registration number and compare the registered
                information with the details displayed on the provider&apos;s
                website. Our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className={linkCls}
                >
                  pharmacy safety and GPhC verification guide
                </Link>{" "}
                walks through the same checks in more detail.
              </p>
              <p className={p}>Check that:</p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>The pharmacy appears on the GPhC register.</li>
                <li>
                  The website name and registered pharmacy details match.
                </li>
                <li>A clinical consultation is required.</li>
                <li>
                  The prescriber&apos;s name and professional registration can be
                  verified.
                </li>
                <li>There is a clear process for reporting side effects.</li>
                <li>
                  The provider explains follow-up and dose-review arrangements.
                </li>
                <li>
                  Prescription medicines are not offered through direct messages
                  or social-media payment.
                </li>
                <li>
                  The provider explains how temperature-sensitive medicine is
                  delivered.
                </li>
              </ol>
              <p className={p}>
                The MHRA warns that products sold through unregulated websites or
                social media may be fake, contaminated, incorrectly dosed or
                contain undeclared ingredients. Prescription weight-loss
                medicines should only be supplied after a proper clinical
                assessment.
              </p>
              <p className={p}>
                An unusually low price is not enough evidence that a provider is
                trustworthy. For spotting unsafe sellers, see{" "}
                <Link
                  href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe"
                  className={linkCls}
                >
                  how to spot a fake online pharmacy
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="safety"
              heading="Safety information before starting treatment"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                GLP-1 and related medicines can cause side effects. Common
                problems include nausea, vomiting and diarrhoea. In some cases,
                these symptoms can contribute to severe dehydration. More detail
                is available in our{" "}
                <Link
                  href="/helpful-guides/mounjaro-side-effects-uk"
                  className={linkCls}
                >
                  Mounjaro side effects guide
                </Link>
                .
              </p>
              <p className={p}>
                Seek urgent medical help for severe abdominal pain that spreads
                to the back and does not go away, as this may be a sign of
                pancreatitis. People taking semaglutide should also seek urgent
                advice for sudden blindness or rapidly worsening eyesight.
              </p>
              <p className={p}>Tell your prescriber about:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>All prescription and non-prescription medicines.</li>
                <li>Diabetes medication or insulin.</li>
                <li>Previous pancreatitis or gallbladder problems.</li>
                <li>Severe digestive problems.</li>
                <li>Pregnancy plans.</li>
                <li>Breastfeeding.</li>
                <li>
                  Upcoming surgery or procedures involving anaesthesia.
                </li>
                <li>Any previous reaction to weight-loss medicine.</li>
              </ul>
              <p className={p}>
                GLP-1 medicines should not be used during pregnancy. The MHRA
                also advises people taking Mounjaro with an oral contraceptive to
                use an additional barrier method for four weeks after starting
                treatment and for four weeks after each dose increase, or to
                discuss a non-oral contraceptive method with a healthcare
                professional.
              </p>
              <p className={p}>
                Anyone having surgery should tell the healthcare team and
                anaesthetist that they are taking a GLP-1 medicine. Do not stop
                prescribed treatment without discussing it with your clinician.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="questions"
              heading="Questions to ask a weight-loss provider"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Before starting private treatment, ask:
              </p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>Who will assess my application?</li>
                <li>How can I verify the prescriber&apos;s registration?</li>
                <li>Which registered pharmacy will dispense the medicine?</li>
                <li>What happens if I experience side effects?</li>
                <li>How often will my treatment be reviewed?</li>
                <li>What information will be shared with my GP?</li>
                <li>What is included in the monthly price?</li>
                <li>How will the medicine be delivered to Wigan?</li>
                <li>What happens if delivery is delayed or arrives warm?</li>
                <li>What support is available if I stop treatment?</li>
                <li>How are pregnancy, contraception and surgery handled?</li>
                <li>Can I speak to a clinician before paying?</li>
              </ol>
              <p className={p}>
                A provider that avoids basic safety questions should not be
                chosen solely because it offers a low price.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="plan"
              heading="A practical starting plan for Wigan residents"
            >
              <h3 className={`text-lg font-semibold ${strong}`}>
                Step 1: Review your health
              </h3>
              <p className={`mt-2 ${p}`}>
                Check your BMI and note any weight-related conditions, current
                medicines and previous weight-management efforts. Start with the{" "}
                <Link href="/tools/bmi-calculator" className={linkCls}>
                  BMI calculator
                </Link>{" "}
                if you need a quick reference before speaking to a clinician.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 2: Contact local support
              </h3>
              <p className={`mt-2 ${p}`}>
                Review Be Well Wigan&apos;s nutrition and physical-activity
                resources. Ask which local activities or support services fit
                your needs.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 3: Speak to your GP when appropriate
              </h3>
              <p className={`mt-2 ${p}`}>
                Your GP can assess conditions that may affect your weight,
                discuss NHS support and explain whether a referral pathway is
                available.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 4: Check digital NHS eligibility
              </h3>
              <p className={`mt-2 ${p}`}>
                Ask whether you qualify for the NHS Digital Weight Management
                Programme, particularly if you have obesity alongside type 2
                diabetes or high blood pressure.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 5: Compare private providers carefully
              </h3>
              <p className={`mt-2 ${p}`}>
                Compare the total cost, GPhC registration, clinical process,
                ongoing support and delivery terms using the{" "}
                <Link href="/mounjaro-price-comparison" className={linkCls}>
                  Mounjaro
                </Link>
                ,{" "}
                <Link href="/wegovy-price-comparison" className={linkCls}>
                  Wegovy
                </Link>{" "}
                and{" "}
                <Link href="/saxenda-price-comparison" className={linkCls}>
                  Saxenda
                </Link>{" "}
                comparison tables.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 6: Make a clinically informed decision
              </h3>
              <p className={`mt-2 ${p}`}>
                Choose treatment only after a qualified healthcare professional
                has reviewed your circumstances.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="faq"
              heading="Frequently asked questions"
            >
              <div className="space-y-6">
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    What is the best weight-loss treatment in Wigan?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    There is no universal best treatment. The right option may be
                    Be Well Wigan support, an NHS programme, prescription
                    medicine or specialist referral. The decision should depend
                    on your health, eligibility, preferences and clinical
                    assessment.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I self-refer to weight-loss support in Wigan?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Some local lifestyle support can be accessed directly. Other
                    NHS services require referral through a GP, community
                    pharmacy or healthcare professional. Check the current Be
                    Well Wigan and NHS Greater Manchester information.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I ask my Wigan GP for Mounjaro?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    NHS Greater Manchester is currently identifying eligible
                    patients through GP records and contacting those considered
                    highest priority. Its current guidance asks patients not to
                    contact their surgery solely to request the service.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can an online pharmacy deliver weight-loss treatment to
                    Wigan?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Regulated online pharmacies may deliver prescription
                    treatment to Wigan after a proper clinical assessment.
                    Confirm that the pharmacy is registered with the GPhC and
                    check its delivery, temperature-control and follow-up
                    arrangements. Our{" "}
                    <Link
                      href="/pharmacy-safety-gphc-verification"
                      className={linkCls}
                    >
                      GPhC verification guide
                    </Link>{" "}
                    explains what to check.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Is a private prescription guaranteed?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    No. A responsible prescriber may decline treatment if you do
                    not meet the relevant criteria or if the medicine is not
                    considered safe for you.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Does Be Well Wigan prescribe Mounjaro or Wegovy?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Be Well Wigan primarily provides nutrition, activity and
                    wellbeing support. Do not assume that participation includes
                    a medicine prescription. Ask the service or your GP about the
                    current local prescribing pathway.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Should I choose the cheapest provider?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Price matters, but it should be considered alongside
                    regulation, clinical assessment, follow-up, delivery,
                    side-effect support and the total cost at later doses.
                  </p>
                </div>
              </div>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="conclusion"
              heading="Final thoughts"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Wigan residents have more than one route to weight-management
                support. Local services such as Be Well Wigan can help with
                nutrition, physical activity and long-term habits. NHS digital
                programmes may support people who meet specific medical criteria,
                while the Greater Manchester Mounjaro rollout is currently
                prioritising selected patients through GP-led identification.
                Private treatment is another option, but it must involve a
                qualified prescriber and a regulated pharmacy.
              </p>
              <p className={p}>
                The most suitable treatment is not necessarily the newest
                medicine or the provider with the lowest advertised price. It is
                the option that is clinically appropriate, properly monitored and
                realistic to maintain.
              </p>
              <div
                className={`mt-6 rounded-xl border p-4 text-sm leading-relaxed ${border} ${boxBg}`}
              >
                <p className={p}>
                  Health Wise compares UK providers independently. Read our{" "}
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
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="next-steps"
              heading="Practical next steps for Wigan residents"
            >
              <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                <li>
                  <Link
                    href="/compare/mounjaro-vs-wegovy-vs-saxenda"
                    className={linkCls}
                  >
                    Compare best weight loss treatments in the UK
                  </Link>
                </li>
                <li>
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    Check your BMI before a GP or clinic appointment
                  </Link>
                </li>
                <li>
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
                  <Link
                    href="/pharmacy-safety-gphc-verification"
                    className={linkCls}
                  >
                    Verify pharmacy safety and GPhC registration
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
                This article provides general information and does not replace
                advice, diagnosis or treatment from a doctor, pharmacist or other
                qualified healthcare professional. Eligibility, NHS pathways,
                provider services and medicine availability can change. Confirm
                current information before making treatment decisions.
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
                  href="/blog/best-weight-loss-treatment-in-preston"
                  className={linkCls}
                >
                  Preston
                </Link>
                ,{" "}
                <Link
                  href="/blog/best-weight-loss-treatment-in-oldham"
                  className={linkCls}
                >
                  Oldham
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/best-weight-loss-treatment-in-manchester"
                  className={linkCls}
                >
                  Manchester
                </Link>
                .
              </p>
            </section>
          </article>

          <div className="mt-14">
            <GuideSharePanel
              url={shareUrl}
              title={PAGE_TITLE}
              description="Explore NHS and private weight-loss treatment options in Wigan, including Be Well support, Mounjaro access, online pharmacies, costs and safety checks."
            />
          </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
