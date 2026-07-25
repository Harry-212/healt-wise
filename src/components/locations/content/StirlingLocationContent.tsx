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
  "Weight Loss Treatment in Stirling: NHS and Private Options";

export default function StirlingLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Stirling overview" },
      { id: "support", label: "Support available in Stirling" },
      { id: "nhs-service", label: "NHS Forth Valley service" },
      { id: "self-refer", label: "How to self-refer" },
      { id: "programmes", label: "Local NHS programmes" },
      { id: "diabetes", label: "Type 2 diabetes remission" },
      { id: "glp1-nhs", label: "NHS Mounjaro and Wegovy" },
      { id: "private", label: "Private treatment" },
      { id: "which-route", label: "Which route is appropriate" },
      { id: "activity", label: "Local physical activity" },
      { id: "bariatric", label: "Bariatric surgery" },
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
          <span className={strong}>Stirling</span>
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
              Last reviewed · 23 July 2026
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
              heading="Weight Loss Treatment in Stirling: NHS and Private Options"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                People looking for weight-loss treatment in Stirling have several
                possible routes, but access depends on their health, BMI,
                existing medical conditions and whether they qualify for
                NHS-funded support.
              </p>
              <p className={p}>
                Local options include NHS Forth Valley&apos;s Adult Weight
                Management Service, digital and group-based lifestyle programmes,
                individual dietitian support, physical-activity referral schemes
                and private prescription treatment.
              </p>
              <p className={p}>
                However, access to weight-loss medication through NHS Forth
                Valley is currently limited. A test service for GLP-1 medicines
                reached its planned capacity and is not accepting new referrals
                at the time of writing. NHS bariatric surgery referrals in Forth
                Valley are also temporarily unavailable while the service is
                redesigned.
              </p>
              <p className={p}>
                This guide explains the current NHS and private options for
                adults living in Stirling and the wider Forth Valley area. For a
                wider UK view of how treatments compare, see our{" "}
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
              heading="Weight-loss support available in Stirling"
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
                        NHS Forth Valley Adult Weight Management
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Lifestyle, nutrition and behavioural support
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Self-referral for eligible programmes
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Second Nature
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Digital programme with professional support
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Through NHS Forth Valley assessment
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Counterweight groups
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Dietitian-led lifestyle and activity sessions
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Through NHS Forth Valley
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Specialist individual support
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        One-to-one dietitian appointments
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Assessment through the local service
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Active Living for Life
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Supported physical activity for people with health needs
                        or low activity levels
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Professional referral
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Check current local terms
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS GLP-1 treatment
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Medication and clinical monitoring for selected patients
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        No new referrals currently accepted
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded where available
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Private prescription treatment
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Clinical assessment, medicine and monitoring
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Apply to a regulated provider
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Self-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Bariatric surgery
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Surgical treatment for severe or complex obesity
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS route currently unavailable locally
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded or private
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={`mt-4 ${p}`}>
                The right starting point depends on whether you need general
                lifestyle support, structured dietitian input, treatment for a
                related condition, prescription medication or specialist
                assessment. A{" "}
                <Link href="/tools/bmi-calculator" className={linkCls}>
                  BMI calculator
                </Link>{" "}
                can help you prepare for that conversation with your GP or
                clinician.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="nhs-service"
              heading="NHS Forth Valley Adult Weight Management Service"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                NHS Forth Valley operates an Adult Weight Management Service for
                people aged over 18 who live within the Forth Valley area.
              </p>
              <p className={p}>
                The service provides free advice and programmes intended to
                support healthier lifestyle changes, weight reduction and
                long-term weight management. Support may be delivered through
                group sessions or individual appointments. Some programmes have
                specific eligibility requirements relating to BMI or existing
                medical conditions.
              </p>
              <p className={p}>
                The service is not suitable during pregnancy or breastfeeding.
                People who meet the relevant requirements can generally
                self-refer for lifestyle and behavioural support using the NHS
                Forth Valley request-for-help form.
              </p>
              <p className={p}>
                Self-referral does not currently provide direct access to GLP-1
                medication or bariatric surgery. The local form specifically
                states that these routes cannot be requested through lifestyle
                self-referral.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="self-refer"
              heading="How to self-refer in Stirling"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Adults living in the NHS Forth Valley area can complete the
                online self-referral form for lifestyle and behavioural-change
                support.
              </p>
              <p className={p}>The form asks for information including:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Your Stirling or Forth Valley postcode.</li>
                <li>Current height and weight.</li>
                <li>Calculated BMI.</li>
                <li>Contact details.</li>
                <li>Preferred times for an initial call.</li>
                <li>The type of support you are seeking.</li>
                <li>
                  Any additional communication or interpretation requirements.
                </li>
              </ul>
              <p className={p}>
                After the form is submitted, the Adult Weight Management Service
                should contact the applicant to arrange a telephone appointment
                and discuss which support may be suitable.
              </p>
              <p className={p}>
                The service can also be contacted through the Adult Weight
                Management Team at Stirling Health and Care Village. Current
                contact details are published on the NHS Forth Valley website.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="programmes"
              heading="NHS weight-management programmes available locally"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                NHS Forth Valley currently describes several programmes for
                eligible adults.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Second Nature digital programme
              </h3>
              <p className={`mt-2 ${p}`}>
                Second Nature is a digital programme intended to support
                long-term healthy habits and general health improvement.
              </p>
              <p className={p}>The NHS-funded programme includes:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>An initial 12-week programme.</li>
                <li>Continued access to the Second Nature app.</li>
                <li>
                  Support from a registered dietitian or nutritionist.
                </li>
                <li>Digital weighing scales.</li>
                <li>A recipe book and supporting handbook.</li>
              </ul>
              <p className={p}>
                Participants need access to a smartphone, tablet or computer.
                Acceptance is subject to assessment and the programme&apos;s
                eligibility requirements.
              </p>
              <p className={p}>This option may suit people who prefer:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Remote support.</li>
                <li>App-based learning and tracking.</li>
                <li>Regular professional guidance.</li>
                <li>
                  A programme that can fit around work or caring
                  responsibilities.
                </li>
                <li>
                  Continued access to digital resources after the initial
                  programme.
                </li>
              </ul>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Counterweight lifestyle groups
              </h3>
              <p className={`mt-2 ${p}`}>
                NHS Forth Valley also offers Counterweight-style lifestyle
                programmes.
              </p>
              <p className={p}>
                The lifestyle-only programme is delivered online by a dietitian.
                Sessions are approximately one hour and require access to an
                internet-enabled device.
              </p>
              <p className={p}>
                A lifestyle-and-activity version combines dietitian support with
                approximately 20 to 30 minutes of suitable physical activity.
                Local venues can include Raploch Community Campus, as well as
                venues elsewhere in the Forth Valley area.
              </p>
              <p className={p}>Sessions cover topics such as:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Healthier eating.</li>
                <li>Becoming more active.</li>
                <li>Identifying realistic lifestyle changes.</li>
                <li>Maintaining weight loss.</li>
                <li>Managing progress over the longer term.</li>
              </ul>
              <p className={p}>
                Sessions are initially more frequent, followed by periodic
                maintenance support. Availability can vary during the year, so a
                particular programme may not be running when someone first
                contacts the service.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Individual specialist support
              </h3>
              <p className={`mt-2 ${p}`}>
                Group programmes are not appropriate for everyone.
              </p>
              <p className={p}>
                NHS Forth Valley can provide individualised support for people
                who have additional needs, require adaptations or would find
                group participation unsuitable.
              </p>
              <p className={p}>
                After an assessment, a person may be offered another suitable
                programme or approximately five to six individual appointments
                with a dietitian. Appointments can take place at Stirling
                Community Hospital, online by video call or by telephone.
              </p>
              <p className={p}>This route may be helpful for people who:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Have additional learning needs.</li>
                <li>Need language or communication adjustments.</li>
                <li>Have complex dietary requirements.</li>
                <li>Cannot participate effectively in groups.</li>
                <li>Need a more personalised plan.</li>
              </ul>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="diabetes"
              heading="Type 2 diabetes remission support"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                NHS Forth Valley also describes an intensive programme intended
                to help eligible people living with type 2 diabetes achieve and
                maintain remission.
              </p>
              <p className={p}>The programme involves three main stages:</p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>
                  Total diet replacement using nutritionally formulated soups and
                  shakes.
                </li>
                <li>Gradual food reintroduction.</li>
                <li>Long-term weight maintenance.</li>
              </ol>
              <p className={p}>
                This is a structured clinical programme rather than a general
                crash diet. Participation requires assessment, and changes to
                diabetes medication may need to be coordinated with the
                person&apos;s GP or diabetes team.
              </p>
              <p className={p}>
                People with type 2 diabetes should not start an intensive
                low-calorie programme independently without clinical supervision.
                For wider habit support alongside clinical care, see our{" "}
                <Link href="/diet" className={linkCls}>
                  diet guidance
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="glp1-nhs"
              heading="Can Stirling residents receive Mounjaro or Wegovy through the NHS?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Access to weight-loss medication in NHS Forth Valley is currently
                restricted.
              </p>
              <p className={p}>
                NHS Forth Valley began testing a new pathway in February 2026 for
                people living with obesity who might benefit from GLP-1
                medicines. The medicines listed by the service include
                tirzepatide, semaglutide and liraglutide.
              </p>
              <p className={p}>
                Only a limited number of patients could be included in the test
                pathway. The service has now reached its planned capacity and is
                not currently accepting new referrals. NHS Forth Valley states
                that it is evaluating the programme and will publish further
                updates about future access when available.
              </p>
              <p className={p}>Therefore:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  Lifestyle and behavioural support may still be available
                  through self-referral.
                </li>
                <li>
                  GLP-1 medication cannot currently be requested using the
                  self-referral form.
                </li>
                <li>
                  Living in Stirling does not automatically provide NHS access to{" "}
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>{" "}
                  or{" "}
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>
                  .
                </li>
                <li>
                  People should not assume that private eligibility rules are the
                  same as NHS criteria.
                </li>
                <li>
                  The position may change as NHS Forth Valley reviews its trial.
                </li>
              </ul>
              <p className={p}>
                People already being treated for type 2 diabetes may have a
                separate diabetes-care pathway. Medication prescribed for
                diabetes should not be assumed to be available for weight loss
                alone. You can also review{" "}
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
              heading="Private weight-loss treatment in Stirling"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Stirling residents who are unable to access NHS medication may
                consider a regulated private provider.
              </p>
              <p className={p}>
                Private providers may offer licensed treatment such as:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  <Link href="/what-is-mounjaro" className={linkCls}>
                    Mounjaro
                  </Link>
                  , containing tirzepatide.
                </li>
                <li>
                  <Link href="/what-is-wegovy" className={linkCls}>
                    Wegovy
                  </Link>
                  , containing semaglutide.
                </li>
                <li>
                  Licensed{" "}
                  <Link href="/what-is-saxenda" className={linkCls}>
                    liraglutide
                  </Link>{" "}
                  treatment where clinically appropriate.
                </li>
                <li>Other prescription weight-management medicines.</li>
              </ul>
              <p className={p}>
                These are prescription-only treatments. A qualified healthcare
                professional must assess the patient before issuing a
                prescription. The assessment should review BMI, medical
                conditions, current medicines, treatment goals and possible
                contraindications.
              </p>
              <p className={p}>A legitimate provider should not:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Guarantee approval before assessment.</li>
                <li>Sell medication through social-media messages.</li>
                <li>Supply unlicensed powder for home mixing.</li>
                <li>
                  Encourage treatment for purely cosmetic weight loss.
                </li>
                <li>
                  Allow patients to choose or change their own dose without
                  clinical guidance.
                </li>
                <li>
                  Supply medicine without appropriate follow-up arrangements.
                </li>
              </ul>
              <p className={p}>
                Private access may be faster, but it still requires responsible
                prescribing and clinical monitoring.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="which-route"
              heading="Mounjaro, Wegovy or lifestyle support: which route is appropriate?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                There is no single best treatment for every Stirling resident.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                NHS lifestyle support may be appropriate when:
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>You want help improving your diet and activity.</li>
                <li>You do not meet medication criteria.</li>
                <li>You prefer to begin without medicine.</li>
                <li>You need help maintaining weight after treatment.</li>
                <li>
                  You want access to dietitian-led or digital programmes.
                </li>
                <li>
                  Your health professional recommends behavioural support first.
                </li>
              </ul>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Private prescription treatment may be considered when:
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>You meet the medicine&apos;s clinical criteria.</li>
                <li>
                  A qualified prescriber considers treatment appropriate.
                </li>
                <li>
                  You understand the benefits, limitations and possible side
                  effects.
                </li>
                <li>You are prepared to attend ongoing reviews.</li>
                <li>
                  You can afford treatment beyond the introductory dose.
                </li>
                <li>
                  You are willing to make supporting dietary and activity
                  changes.
                </li>
              </ul>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Specialist individual support may be more suitable when:
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>Group programmes are unsuitable.</li>
                <li>
                  You have additional physical, learning or communication needs.
                </li>
                <li>
                  Your relationship with food requires more careful assessment.
                </li>
                <li>
                  Existing medical conditions complicate weight management.
                </li>
                <li>Previous approaches have not worked.</li>
              </ul>

              <p className={`mt-4 ${p}`}>
                Medication should not be treated as a replacement for clinical
                support, nutrition or sustainable behaviour change. Use our{" "}
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
              id="activity"
              heading="Local physical-activity support in Stirling"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Stirling residents who need help becoming more active may be
                eligible for Active Living for Life.
              </p>
              <p className={p}>
                The programme is delivered by Active Stirling and is intended for
                people with particular health conditions or those living an
                inactive lifestyle who need support becoming more active.
              </p>
              <p className={p}>Activities may include:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Health walks.</li>
                <li>Strength and balance classes.</li>
                <li>Personalised gym-based activity.</li>
                <li>Water aerobics.</li>
                <li>Home-based workouts.</li>
                <li>
                  Fit for Life classes led by a qualified referral instructor.
                </li>
              </ul>
              <p className={p}>
                Participants are reviewed during the programme, and plans are
                developed to help them continue being active after completing the
                initial 12 weeks. Services are delivered from The Peak and other
                venues in the Stirling area.
              </p>
              <p className={p}>
                Free health walks are also available in and around Stirling for
                people returning to activity, managing a long-term condition or
                advised by a healthcare professional to become more active.
              </p>
              <p className={p}>
                These local services provide a more meaningful Stirling-specific
                option than simply recommending generic walking routes around
                landmarks. For broader movement ideas, see our{" "}
                <Link href="/exercise" className={linkCls}>
                  exercise guidance
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="bariatric"
              heading="Bariatric surgery in NHS Forth Valley"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                NHS Forth Valley&apos;s bariatric surgery route is currently
                unavailable while the service is being redesigned. The health
                board states that it cannot presently refer patients for
                consideration of NHS surgical options.
              </p>
              <p className={p}>
                The service will update its information when the pathway becomes
                available again.
              </p>
              <p className={p}>
                People considering private bariatric surgery should investigate:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>The experience and registration of the surgical team.</li>
                <li>Pre-operative assessments.</li>
                <li>The procedure being recommended.</li>
                <li>Hospital and anaesthetic costs.</li>
                <li>Dietitian and psychological support.</li>
                <li>Follow-up duration.</li>
                <li>Blood tests and nutritional monitoring.</li>
                <li>Management of complications.</li>
                <li>The cost of revisions or additional treatment.</li>
              </ul>
              <p className={p}>
                NHS Forth Valley warns that the Adult Weight Management Service
                is not funded to provide follow-up support for people who have
                undergone private or NHS bariatric surgery. It also notes that
                ongoing tests following private treatment should normally be
                provided by the private company rather than assumed to be covered
                by the person&apos;s GP practice.
              </p>
              <p className={p}>
                This makes the quality and duration of a private clinic&apos;s
                aftercare particularly important.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="costs"
              heading="What does private treatment cost?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                The cost of private treatment varies according to:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>The medicine selected.</li>
                <li>Prescribed dose.</li>
                <li>Provider.</li>
                <li>Consultation fees.</li>
                <li>Delivery charges.</li>
                <li>Included clinical reviews.</li>
                <li>Nutrition or behavioural support.</li>
                <li>Cancellation terms.</li>
                <li>Maintenance-dose pricing.</li>
              </ul>
              <p className={p}>
                A low starting price may only apply to the initial dose. Costs
                can increase if the prescribed dose changes.
              </p>
              <p className={p}>Before choosing a provider, calculate:</p>
              <pre
                className={`overflow-x-auto rounded-xl border p-4 text-sm leading-relaxed ${border} ${boxBg} ${p}`}
              >
                {`Medicine cost
+ consultation fees
+ delivery
+ required supplies
+ follow-up costs
= estimated total monthly cost`}
              </pre>
              <p className={p}>
                Use the Healthwise360{" "}
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
                pages for current provider data rather than inserting fixed
                prices into this local guide. Prices can change more frequently
                than local NHS pathway information.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="pharmacy"
              heading="How to check a private online pharmacy"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                All pharmacies legally operating in Great Britain, including
                Scotland, must be registered with the General Pharmaceutical
                Council.
              </p>
              <p className={p}>
                The GPhC pharmacy register allows patients to search by pharmacy
                name or registration number and confirm whether the pharmacy
                premises are registered. The register is the authoritative way to
                check whether a Great Britain-based pharmacy is operating
                legally. Our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className={linkCls}
                >
                  pharmacy safety and GPhC verification guide
                </Link>{" "}
                walks through the same checks in more detail.
              </p>
              <p className={p}>
                Before ordering treatment for delivery to Stirling:
              </p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>Search the pharmacy on the GPhC register.</li>
                <li>
                  Confirm that the registered address matches the provider&apos;s
                  published details.
                </li>
                <li>Check which pharmacy will dispense the medicine.</li>
                <li>Verify the prescriber&apos;s professional registration.</li>
                <li>Confirm that a proper consultation is required.</li>
                <li>
                  Read the provider&apos;s delivery and temperature-control
                  policy.
                </li>
                <li>
                  Check what support is available after the medicine arrives.
                </li>
                <li>
                  Review its cancellation, refund and missed-delivery terms.
                </li>
                <li>Check whether the provider will communicate with your GP.</li>
                <li>
                  Avoid any seller requesting payment through social media or
                  personal bank transfer.
                </li>
              </ol>
              <p className={p}>
                The MHRA advises that GLP-1 medicines should not be bought from
                unregulated sellers, beauty salons or social-media accounts.
                Counterfeit products may appear convincing but can contain
                incorrect or dangerous substances. For spotting unsafe sellers,
                see{" "}
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
              heading="Safety information before treatment"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Common side effects of GLP-1 and related treatments can include:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Nausea.</li>
                <li>Vomiting.</li>
                <li>Diarrhoea.</li>
                <li>Constipation.</li>
                <li>Reduced appetite.</li>
                <li>Abdominal discomfort.</li>
              </ul>
              <p className={p}>
                Persistent vomiting or diarrhoea can cause serious dehydration.
                Severe abdominal pain that spreads to the back and does not
                resolve can be a warning sign of pancreatitis and requires urgent
                medical attention. More detail is available in our{" "}
                <Link
                  href="/helpful-guides/mounjaro-side-effects-uk"
                  className={linkCls}
                >
                  Mounjaro side effects guide
                </Link>
                .
              </p>
              <p className={p}>
                People using semaglutide should seek urgent advice if they
                experience sudden blindness or rapidly worsening eyesight.
              </p>
              <p className={p}>Tell the prescriber about:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Diabetes and diabetes medication.</li>
                <li>Insulin use.</li>
                <li>Previous pancreatitis.</li>
                <li>Gallbladder problems.</li>
                <li>Significant digestive conditions.</li>
                <li>Pregnancy or plans to become pregnant.</li>
                <li>Breastfeeding.</li>
                <li>Current contraception.</li>
                <li>Planned surgery or deep sedation.</li>
                <li>All prescription and non-prescription medicines.</li>
              </ul>
              <p className={p}>
                GLP-1 treatments should not be used during pregnancy or
                breastfeeding. People taking Mounjaro with an oral contraceptive
                are advised to use an additional barrier method for four weeks
                after starting and for four weeks after each dose increase, or
                discuss a suitable non-oral method with a healthcare
                professional.
              </p>
              <p className={p}>
                Anyone undergoing surgery or a procedure involving general
                anaesthesia or deep sedation should inform the healthcare and
                anaesthetic teams. Treatment should not be stopped without first
                discussing it with the prescribing clinician.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="questions"
              heading="Questions to ask a private provider"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Before starting treatment, ask:
              </p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>Who will conduct my clinical assessment?</li>
                <li>How can I verify the prescriber?</li>
                <li>Which registered pharmacy will dispense my medicine?</li>
                <li>What is included in the advertised monthly price?</li>
                <li>Will the cost increase at a higher dose?</li>
                <li>How often will my progress be reviewed?</li>
                <li>What happens if I experience side effects?</li>
                <li>Will you inform my GP?</li>
                <li>
                  How is temperature-sensitive medicine delivered to Stirling?
                </li>
                <li>
                  What happens if the parcel is delayed or arrives warm?
                </li>
                <li>Can I speak to a clinician before making payment?</li>
                <li>
                  What support is available if I need to stop treatment?
                </li>
                <li>
                  How do you manage contraception, pregnancy and surgery?
                </li>
                <li>
                  What happens if my prescription application is declined?
                </li>
              </ol>
              <p className={p}>
                A provider should answer these questions clearly before asking
                for a long-term payment commitment.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="plan"
              heading="A practical starting plan for Stirling residents"
            >
              <h3 className={`text-lg font-semibold ${strong}`}>
                Step 1: Review your current health
              </h3>
              <p className={`mt-2 ${p}`}>
                Calculate your BMI and note any weight-related conditions,
                current medicines and previous approaches you have tried. Start
                with the{" "}
                <Link href="/tools/bmi-calculator" className={linkCls}>
                  BMI calculator
                </Link>{" "}
                if you need a quick reference before speaking to a clinician.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 2: Check NHS Forth Valley support
              </h3>
              <p className={`mt-2 ${p}`}>
                Review the current Adult Weight Management programmes and
                complete the self-referral form if you are seeking lifestyle or
                behavioural support.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 3: Discuss relevant health conditions
              </h3>
              <p className={`mt-2 ${p}`}>
                Speak to your GP or healthcare team if weight is affecting
                diabetes, blood pressure, mobility, sleep or other medical
                conditions.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 4: Consider local activity support
              </h3>
              <p className={`mt-2 ${p}`}>
                Ask whether Active Living for Life or a local health walk would
                provide an appropriate and supported way to become more active.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 5: Check current medication availability
              </h3>
              <p className={`mt-2 ${p}`}>
                Do not rely on outdated articles suggesting that NHS Mounjaro or
                Wegovy is routinely available in Stirling. NHS Forth Valley&apos;s
                test pathway is currently full and closed to new referrals.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 6: Compare private providers carefully
              </h3>
              <p className={`mt-2 ${p}`}>
                Compare total monthly costs, registration, prescribing
                standards, delivery arrangements and ongoing clinical support
                using the{" "}
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
                Step 7: Make a clinical decision
              </h3>
              <p className={`mt-2 ${p}`}>
                Begin prescription treatment only after a qualified prescriber
                has reviewed your health and determined that the medicine is
                suitable.
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
                    Can Stirling residents self-refer for weight-management
                    support?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Yes. Adults living in the Forth Valley area can self-refer
                    for lifestyle and behavioural support. Self-referral is not
                    currently available for GLP-1 medication or bariatric
                    surgery.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Is Mounjaro available through NHS Forth Valley?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    NHS Forth Valley tested a limited GLP-1 pathway beginning in
                    February 2026. The service has reached capacity and is not
                    accepting new referrals at the time of writing.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I get Wegovy privately in Stirling?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    A regulated private provider may prescribe Wegovy following a
                    clinical assessment if you meet the relevant criteria and
                    treatment is considered appropriate.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Where are individual NHS appointments held?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Individualised Adult Weight Management appointments may be
                    held at Stirling Community Hospital or Falkirk Community
                    Hospital. Online and telephone appointments may also be
                    offered.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Does NHS Forth Valley offer bariatric surgery referrals?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    The local NHS bariatric pathway is currently unavailable
                    while the service is redesigned. NHS Forth Valley is not
                    presently referring patients for surgical consideration.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I join a local exercise programme?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Active Living for Life supports people with health conditions
                    or inactive lifestyles through supervised activities in
                    Stirling. Access generally involves a professional referral.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Should I select the cheapest online pharmacy?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Not on price alone. Check the pharmacy&apos;s GPhC
                    registration, prescriber, consultation quality, delivery
                    arrangements, follow-up and costs at later doses.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I buy Mounjaro through social media?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    No. Prescription weight-loss treatment should only be
                    supplied by a legitimate pharmacy following a consultation
                    and prescription from a healthcare professional. See our{" "}
                    <Link
                      href="/pharmacy-safety-gphc-verification"
                      className={linkCls}
                    >
                      GPhC verification guide
                    </Link>{" "}
                    before ordering.
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
                Stirling residents can access meaningful local support through
                NHS Forth Valley, including digital programmes, dietitian-led
                groups, individual appointments and type 2 diabetes remission
                support.
              </p>
              <p className={p}>
                The local position on medication and surgery is more restricted.
                NHS Forth Valley&apos;s GLP-1 test pathway has reached capacity
                and is closed to new referrals, while its bariatric pathway is
                undergoing redesign.
              </p>
              <p className={p}>
                Private treatment may be available to clinically eligible
                patients, but it should only be accessed through a qualified
                prescriber and a GPhC-registered pharmacy.
              </p>
              <p className={p}>
                The best route is not automatically the newest medicine or the
                lowest advertised price. It is the option that is medically
                suitable, properly monitored and realistic to maintain over the
                longer term.
              </p>
              <p className={`text-sm ${muted}`}>Last reviewed: 23 July 2026</p>
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
              heading="Practical next steps for Stirling residents"
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
                medical advice, diagnosis or treatment from a doctor, pharmacist,
                dietitian or other qualified healthcare professional. NHS
                pathways, eligibility requirements and medicine availability may
                change. Confirm current information with NHS Forth Valley or your
                chosen provider before making treatment decisions.
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
                  href="/blog/best-weight-loss-treatment-in-perth"
                  className={linkCls}
                >
                  Perth
                </Link>
                ,{" "}
                <Link
                  href="/blog/best-weight-loss-treatment-in-paisley"
                  className={linkCls}
                >
                  Paisley
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/best-weight-loss-treatment-in-glasgow"
                  className={linkCls}
                >
                  Glasgow
                </Link>
                .
              </p>
            </section>
          </article>

          <div className="mt-14">
            <GuideSharePanel
              url={shareUrl}
              title={PAGE_TITLE}
              description="Explore NHS and private weight-loss treatment options in Stirling, including NHS Forth Valley programmes, GLP-1 access, costs and pharmacy safety."
            />
          </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
