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
  "Weight Loss Treatment in Salisbury: NHS and Private Options";

export default function SalisburyLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Salisbury overview" },
      { id: "support", label: "Support available in Salisbury" },
      { id: "hub", label: "Wiltshire Health Improvement Hub" },
      { id: "activity", label: "Physical-activity referral" },
      { id: "digital", label: "NHS Digital programme" },
      { id: "bsw", label: "NHS services across BSW" },
      { id: "mounjaro-nhs", label: "NHS Mounjaro access" },
      { id: "wegovy-nhs", label: "NHS Wegovy access" },
      { id: "specialist", label: "Specialist services" },
      { id: "private", label: "Private treatment" },
      { id: "nhs-vs-private", label: "Private versus NHS" },
      { id: "costs", label: "Private treatment costs" },
      { id: "pharmacy", label: "Verify an online pharmacy" },
      { id: "which-option", label: "Which option is suitable" },
      { id: "safety", label: "Safety information" },
      { id: "pregnancy", label: "Pregnancy and contraception" },
      { id: "surgery", label: "Surgery and anaesthesia" },
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
          <span className={strong}>Salisbury</span>
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
              heading="Weight Loss Treatment in Salisbury: NHS and Private Options"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                People seeking weight-loss treatment in Salisbury can access
                several different forms of support. These include Wiltshire
                Council health-improvement services, NHS digital programmes, GP
                referrals, specialist weight-management services and regulated
                private prescribing.
              </p>
              <p className={p}>
                The most suitable route depends on your BMI, medical history,
                weight-related conditions, previous treatment and whether you
                meet local NHS eligibility criteria.
              </p>
              <p className={p}>
                Prescription medicines such as{" "}
                <Link href="/what-is-mounjaro" className={linkCls}>
                  Mounjaro
                </Link>{" "}
                and{" "}
                <Link href="/what-is-wegovy" className={linkCls}>
                  Wegovy
                </Link>{" "}
                are not automatically available to everyone through the NHS.
                Access in Salisbury follows the policies set by the Bath and
                North East Somerset, Swindon and Wiltshire Integrated Care Board,
                commonly called BSW ICB.
              </p>
              <p className={p}>
                This guide explains the current options for adults living in
                Salisbury and the surrounding Wiltshire area. For a wider UK view
                of how treatments compare, see our{" "}
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
              heading="Weight-loss support available in Salisbury"
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
                        What it offers
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
                        Wiltshire Health Improvement Hub
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Lifestyle coaching and help with healthy weight,
                        activity and wellbeing
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Direct contact or referral
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Council-funded support
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Physical-activity referral
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Supported exercise through participating Wiltshire
                        leisure centres
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        GP or healthcare-professional referral
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Check current local terms
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS Digital Weight Management Programme
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Twelve weeks of online nutrition, activity and
                        behavioural support
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Referral through a GP practice
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS weight-loss medicine
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Clinical assessment, medicine and wraparound support for
                        selected patients
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        GP or specialist referral
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Specialist weight-management service
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Multidisciplinary support for severe or complex obesity
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Healthcare-professional referral
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Private prescription treatment
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Clinical assessment, prescription and follow-up
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
                        Bariatric assessment
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Evaluation for weight-loss surgery where appropriate
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Specialist NHS referral or private assessment
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        NHS-funded or private
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={`mt-4 ${p}`}>
                Local lifestyle support and prescription treatment are different
                services. Joining a council programme does not automatically lead
                to an NHS prescription for Mounjaro or Wegovy. A{" "}
                <Link href="/tools/bmi-calculator" className={linkCls}>
                  BMI calculator
                </Link>{" "}
                can help you prepare for that conversation with your GP or
                clinician.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="hub"
              heading="Wiltshire Health Improvement Hub"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                The Wiltshire Health Improvement Hub provides support for
                residents who want to improve their health and make sustainable
                lifestyle changes.
              </p>
              <p className={p}>
                Its support can include healthy-weight guidance, becoming more
                active, stopping smoking, reducing alcohol consumption and
                improving general wellbeing. Wiltshire Council publishes a
                referral route and contact details for residents and
                professionals seeking health-coaching support.
              </p>
              <p className={p}>
                This may be a useful starting point for Salisbury residents who:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Want practical help changing eating habits.</li>
                <li>Need support becoming more active.</li>
                <li>
                  Are not ready or eligible for prescription treatment.
                </li>
                <li>Want help maintaining progress after medication.</li>
                <li>
                  Have several lifestyle goals that affect their weight.
                </li>
                <li>
                  Prefer individual guidance rather than a commercial diet plan.
                </li>
              </ul>
              <p className={p}>
                Health-improvement coaching is not a medical prescribing
                service. A coach cannot determine whether Mounjaro, Wegovy or
                another medicine is clinically appropriate.
              </p>
              <p className={p}>
                Prescription decisions must be made by a qualified healthcare
                professional. For broader habit ideas alongside local coaching,
                see our{" "}
                <Link href="/diet" className={linkCls}>
                  diet guidance
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="activity"
              heading="Physical-activity referral in Wiltshire"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Wiltshire Council operates a physical-activity referral pathway
                that allows a GP or another healthcare professional to refer an
                eligible person to an exercise programme at a participating local
                leisure centre.
              </p>
              <p className={p}>
                For Salisbury residents, this can provide a more structured
                alternative to being told simply to &quot;exercise more&quot;.
              </p>
              <p className={p}>A referral programme may be helpful if:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>You are currently inactive.</li>
                <li>A health condition affects your ability to exercise.</li>
                <li>You lack confidence using a gym.</li>
                <li>
                  You need an activity plan adapted to your fitness level.
                </li>
                <li>
                  Your clinician wants you to increase activity safely.
                </li>
                <li>
                  You are combining lifestyle support with prescription
                  treatment.
                </li>
              </ul>
              <p className={p}>Before joining, ask:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  Which Salisbury-area leisure centre provides the programme?
                </li>
                <li>How long does the referral last?</li>
                <li>Is there an initial assessment?</li>
                <li>Are sessions supervised?</li>
                <li>What fees apply?</li>
                <li>Can the programme accommodate mobility problems?</li>
                <li>What happens after the referral period ends?</li>
              </ul>
              <p className={p}>
                Walking around Salisbury can contribute to activity, but a
                location article should not imply that a route around the
                Cathedral Close is a medical weight-management programme.
                Residents with health conditions may benefit more from a
                structured referral and an individually appropriate activity
                plan. For broader movement ideas, see our{" "}
                <Link href="/exercise" className={linkCls}>
                  exercise guidance
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="digital"
              heading="NHS Digital Weight Management Programme"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Some Salisbury residents may qualify for the NHS Digital Weight
                Management Programme.
              </p>
              <p className={p}>
                This is a free, twelve-week online service that provides access
                to weight-management plans covering nutrition, physical activity
                and wellbeing. Participants can complete the programme using a
                smartphone, tablet or computer.
              </p>
              <p className={p}>The national eligibility criteria include:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Being aged 18 or over.</li>
                <li>Having a BMI of at least 30.</li>
                <li>Having diabetes, high blood pressure or both.</li>
              </ul>
              <p className={p}>
                A lower BMI threshold of 27.5 applies to some people from ethnic
                groups at increased risk of weight-related conditions. Access
                requires referral, normally through a GP practice.
              </p>
              <p className={p}>The programme may be appropriate for people who:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Prefer remote support.</li>
                <li>Have diabetes or hypertension.</li>
                <li>
                  Need a structured plan that fits around work or caring
                  responsibilities.
                </li>
                <li>Want recipes and nutrition guidance.</li>
                <li>Need help setting realistic activity goals.</li>
                <li>Have reliable internet access.</li>
              </ul>
              <p className={p}>
                It is a behavioural support service rather than an online
                medicine-prescribing programme.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="bsw"
              heading="NHS weight-management services across BSW"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Salisbury falls within the Bath and North East Somerset, Swindon
                and Wiltshire Integrated Care Board area.
              </p>
              <p className={p}>
                BSW states that different levels of weight-management support are
                available, ranging from general wellbeing and lifestyle services
                to more intensive specialist services for people living with
                obesity.
              </p>
              <p className={p}>
                The correct route depends on factors such as:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>BMI.</li>
                <li>Weight-related health conditions.</li>
                <li>Previous attempts to manage weight.</li>
                <li>Current medication.</li>
                <li>Psychological or eating-related concerns.</li>
                <li>Whether surgery may need to be considered.</li>
                <li>Whether the person meets current prescribing priorities.</li>
              </ul>
              <p className={p}>
                People should not assume that every GP practice can immediately
                prescribe every weight-loss medicine. NHS availability is
                determined by national guidance, local commissioning decisions,
                clinical capacity and phased eligibility criteria.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="mounjaro-nhs"
              heading="Can Salisbury residents get Mounjaro through the NHS?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/what-is-mounjaro" className={linkCls}>
                  Mounjaro
                </Link>{" "}
                contains tirzepatide. BSW began making tirzepatide available
                through selected primary-care pathways from 23 June 2025,
                following national NHS implementation guidance.
              </p>
              <p className={p}>
                During the initial rollout, BSW limited access to patients
                considered at the highest clinical risk. The published local
                criteria require:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>A BMI of 40 or more.</li>
                <li>
                  A BMI of 37.5 or more for people from certain ethnic
                  backgrounds at increased health risk.
                </li>
              </ul>
              <p className={p}>
                Patients must also have at least four of the following
                weight-related conditions:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Type 2 diabetes.</li>
                <li>High blood pressure.</li>
                <li>Cardiovascular disease.</li>
                <li>Abnormal blood-fat levels.</li>
                <li>Obstructive sleep apnoea.</li>
              </ul>
              <p className={p}>
                Access is through GP referral to an appropriate commissioned
                service, such as a specialist weight-management pathway or an
                approved remote provider.
              </p>
              <p className={p}>
                These initial NHS criteria are more restrictive than the
                medicine&apos;s wider UK marketing authorisation. This means
                someone may meet the licensed criteria for private treatment but
                not qualify under the current NHS rollout.
              </p>
              <p className={p}>
                Do not assume that a high BMI alone guarantees an NHS
                prescription.
              </p>
              <p className={p}>
                Local criteria and capacity can change, so patients should check
                the current BSW information and discuss their circumstances with
                their GP practice. You can also review{" "}
                <Link
                  href="/helpful-guides/mounjaro-eligibility-bmi-requirements-uk"
                  className={linkCls}
                >
                  Mounjaro BMI and eligibility guidance
                </Link>{" "}
                before that conversation.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="wegovy-nhs"
              heading="Is Wegovy available through NHS services?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/what-is-wegovy" className={linkCls}>
                  Wegovy
                </Link>{" "}
                contains semaglutide and is among the weight-management medicines
                listed within BSW&apos;s treatment pathway. BSW also lists
                orlistat and tirzepatide as possible medicines for eligible
                patients.
              </p>
              <p className={p}>
                NHS access to Wegovy is normally connected to an approved
                specialist or commissioned weight-management service. It is not
                necessarily available from every GP practice on request.
              </p>
              <p className={p}>
                A referral decision may take account of:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>BMI.</li>
                <li>Weight-related medical conditions.</li>
                <li>Previous lifestyle support.</li>
                <li>Previous medicine use.</li>
                <li>Suitability for specialist care.</li>
                <li>Current local service capacity.</li>
              </ul>
              <p className={p}>
                A healthcare professional should confirm which pathway is
                currently available to a Salisbury resident.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="specialist"
              heading="Specialist weight-management services for Wiltshire patients"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Some Wiltshire patients with severe or complex obesity may
                require multidisciplinary specialist support.
              </p>
              <p className={p}>
                The Bristol Weight Management and Bariatric Service accepts
                clinician referrals for eligible Wiltshire residents. Its Weight
                Assessment and Management Service provides non-surgical
                multidisciplinary support for approximately six to twelve months.
              </p>
              <p className={p}>Support may involve:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Individual dietitian appointments.</li>
                <li>Psychological assessment or support.</li>
                <li>Structured group programmes.</li>
                <li>
                  Preparation for bariatric surgery where appropriate.
                </li>
                <li>
                  Review of medical and behavioural factors affecting weight.
                </li>
                <li>Longer-term planning.</li>
              </ul>
              <p className={p}>
                This service is not based in Salisbury. However, the existence of
                a Wiltshire referral route is important because specialist
                obesity services are not always located in the patient&apos;s own
                city.
              </p>
              <p className={p}>
                The service applies separate referral criteria for Wiltshire
                patients, and referral must be made through an appropriate
                clinician.
              </p>
              <p className={p}>Specialist referral may be considered when:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Obesity is severe or medically complex.</li>
                <li>
                  Several weight-related conditions are present.
                </li>
                <li>
                  Previous interventions have not provided sufficient benefit.
                </li>
                <li>
                  Psychological or eating-related issues require specialist
                  input.
                </li>
                <li>Bariatric surgery may need to be assessed.</li>
                <li>A general lifestyle programme is not sufficient.</li>
              </ul>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="private"
              heading="Private weight-loss treatment in Salisbury"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Salisbury residents who do not qualify for NHS medication, or who
                do not want to wait for an NHS pathway, may consider private
                treatment.
              </p>
              <p className={p}>Private services may be provided by:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Registered online pharmacies.</li>
                <li>Private clinics.</li>
                <li>Regulated online-doctor services.</li>
                <li>Specialist weight-management providers.</li>
              </ul>
              <p className={p}>Potential treatment options include:</p>
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
                  treatment.
                </li>
                <li>Orlistat.</li>
                <li>
                  Other licensed medicines where clinically appropriate.
                </li>
              </ul>
              <p className={p}>
                GLP-1 and related medicines are prescription-only. A consultation
                with a healthcare professional must take place before a
                prescription is issued. The prescriber should review the
                patient&apos;s medical history, medicines, BMI, treatment goals
                and possible risks.
              </p>
              <p className={p}>
                Private treatment is not guaranteed. A responsible prescriber may
                decline an application when:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>The patient does not meet clinical criteria.</li>
                <li>Medical information is incomplete.</li>
                <li>
                  The medicine may interact with another treatment.
                </li>
                <li>There is a significant contraindication.</li>
                <li>
                  The request appears to be for cosmetic rather than medical
                  weight loss.
                </li>
                <li>Appropriate monitoring cannot be arranged.</li>
              </ul>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="nhs-vs-private"
              heading="Private versus NHS access in Salisbury"
            >
              <div className={`overflow-x-auto rounded-xl border ${border}`}>
                <table
                  className={`w-full min-w-[520px] border-collapse text-sm ${p}`}
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
                        NHS route
                      </th>
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        Private route
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Eligibility follows current BSW commissioning criteria
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Eligibility follows licensed indications and clinical
                        assessment
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        May involve strict prioritisation
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        May be available to a wider clinically eligible group
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Treatment is NHS-funded
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Patient pays the full cost
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Waiting times and service capacity may apply
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Access may be faster
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Referral may be required
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Direct application is usually possible
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Wraparound support may be mandatory
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Support varies significantly between providers
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Choice of medicine may be limited
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        More than one licensed option may be offered
                      </td>
                    </tr>
                    <tr>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Follow-up follows NHS service arrangements
                      </td>
                      <td className={`border px-3 py-2 ${tableBorder}`}>
                        Follow-up depends on the provider package
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={`mt-4 ${p}`}>
                Private access should not be described as better than NHS
                treatment. The two routes serve different circumstances and have
                different eligibility, cost and capacity considerations.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="costs"
              heading="How much does private treatment cost?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Private prices vary according to:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>The medicine.</li>
                <li>Prescribed dose.</li>
                <li>Provider.</li>
                <li>Consultation fees.</li>
                <li>Delivery charges.</li>
                <li>Clinical-review frequency.</li>
                <li>Included supplies.</li>
                <li>Nutrition support.</li>
                <li>Cancellation conditions.</li>
                <li>Maintenance-dose pricing.</li>
              </ul>
              <p className={p}>
                Patients should calculate the total ongoing cost rather than
                choosing a provider based only on the introductory dose.
              </p>
              <p className={p}>A useful calculation is:</p>
              <pre
                className={`overflow-x-auto rounded-xl border p-4 text-sm leading-relaxed ${border} ${boxBg} ${p}`}
              >
                {`Medicine
+ consultation
+ delivery
+ required supplies
+ follow-up fees
= estimated monthly cost`}
              </pre>
              <p className={p}>Questions to ask include:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Is delivery included?</li>
                <li>Does the price increase at a higher dose?</li>
                <li>Are repeat reviews included?</li>
                <li>Is there a separate prescribing fee?</li>
                <li>Is side-effect support included?</li>
                <li>What happens if treatment is declined?</li>
                <li>
                  Are refunds available for a missed or delayed delivery?
                </li>
                <li>Is the displayed price limited to new customers?</li>
              </ul>
              <p className={p}>
                Healthwise360&apos;s individual treatment-comparison pages should
                hold the frequently changing pharmacy prices. Use the{" "}
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
                pages rather than repeating a price table that may quickly become
                outdated. The Salisbury article should explain local access
                rather than inserting fixed prices.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="pharmacy"
              heading="How to verify an online pharmacy"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Before ordering prescription treatment for delivery to Salisbury,
                verify the pharmacy independently.
              </p>
              <p className={p}>
                The MHRA advises that GLP-1 medicines should only be obtained
                from a legitimate pharmacy with a prescription issued by a
                healthcare professional. It specifically warns against buying
                from social-media sellers, beauty salons and other unregulated
                sources. Our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className={linkCls}
                >
                  pharmacy safety and GPhC verification guide
                </Link>{" "}
                walks through the same checks in more detail.
              </p>
              <p className={p}>
                For pharmacies based in Great Britain, check the General
                Pharmaceutical Council register.
              </p>
              <p className={p}>Confirm:</p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>The pharmacy appears on the GPhC register.</li>
                <li>
                  The registered address matches the provider&apos;s published
                  details.
                </li>
                <li>The provider identifies the dispensing pharmacy.</li>
                <li>A clinical consultation is required.</li>
                <li>
                  The prescriber&apos;s professional registration can be
                  verified.
                </li>
                <li>There is a clear side-effect reporting process.</li>
                <li>Ongoing clinical reviews are provided.</li>
                <li>Delivery arrangements are explained.</li>
                <li>
                  Temperature-sensitive medicine is packaged appropriately.
                </li>
                <li>
                  The provider explains what happens if a delivery is delayed.
                </li>
                <li>
                  Payment is made through a legitimate business website.
                </li>
                <li>
                  Medicine is not offered as an unlicensed powder requiring home
                  mixing.
                </li>
              </ol>
              <p className={p}>
                The MHRA warns that counterfeit products can closely resemble
                genuine pre-filled pens. Products supplied as powders for
                reconstitution are not authorised GLP-1 presentations for this
                purpose and may present serious health risks. For spotting unsafe
                sellers, see{" "}
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
              id="which-option"
              heading="Mounjaro, Wegovy or lifestyle support: which option is suitable?"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                There is no single best treatment for everyone in Salisbury.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Lifestyle support may be appropriate when:
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>You want to improve nutrition and physical activity.</li>
                <li>You do not meet medicine eligibility criteria.</li>
                <li>You prefer not to use prescription treatment.</li>
                <li>You need support maintaining progress.</li>
                <li>You have several lifestyle goals.</li>
                <li>
                  Your clinician recommends behavioural support first.
                </li>
              </ul>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Prescription treatment may be considered when:
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>You meet the medicine&apos;s clinical criteria.</li>
                <li>Your weight is affecting your health.</li>
                <li>
                  Lifestyle changes alone have not been sufficient.
                </li>
                <li>
                  A prescriber believes the expected benefits outweigh the risks.
                </li>
                <li>You can participate in ongoing reviews.</li>
                <li>
                  You understand that treatment works alongside nutrition and
                  activity changes.
                </li>
              </ul>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Specialist support may be required when:
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>Obesity is severe or complex.</li>
                <li>Several medical conditions are present.</li>
                <li>Previous interventions have not worked.</li>
                <li>
                  Eating behaviour or psychological factors need assessment.
                </li>
                <li>Bariatric surgery may be appropriate.</li>
                <li>
                  Treatment requires a multidisciplinary team.
                </li>
              </ul>

              <p className={`mt-4 ${p}`}>
                A price-comparison website can help users understand differences
                between providers. It cannot diagnose obesity, determine
                individual eligibility or recommend a specific medicine. Use our{" "}
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
              id="safety"
              heading="Safety information for GLP-1 treatment"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Common side effects of GLP-1 and related medicines include:
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
                Persistent vomiting or diarrhoea can cause severe dehydration and
                may require medical attention. More detail is available in our{" "}
                <Link
                  href="/helpful-guides/mounjaro-side-effects-uk"
                  className={linkCls}
                >
                  Mounjaro side effects guide
                </Link>
                .
              </p>
              <p className={p}>
                Severe abdominal pain that spreads to the back and does not go
                away may be a symptom of pancreatitis. Anyone experiencing this
                should seek urgent medical help.
              </p>
              <p className={p}>
                People taking semaglutide should seek urgent advice for sudden
                blindness or rapidly worsening eyesight because of a rare
                potential eye complication.
              </p>
              <p className={p}>Tell your prescriber about:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Diabetes.</li>
                <li>Insulin use.</li>
                <li>Other diabetes medicine.</li>
                <li>Previous pancreatitis.</li>
                <li>Gallbladder problems.</li>
                <li>Significant digestive conditions.</li>
                <li>Kidney problems.</li>
                <li>Pregnancy plans.</li>
                <li>Breastfeeding.</li>
                <li>Current contraception.</li>
                <li>Planned surgery.</li>
                <li>All prescription and non-prescription medicines.</li>
              </ul>
              <p className={p}>
                Do not change dose, restart treatment after a break or switch
                between medicines without consulting a qualified healthcare
                professional.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="pregnancy"
              heading="Pregnancy and contraception"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                GLP-1 medicines should not be taken during pregnancy, while
                trying to become pregnant or while breastfeeding.
              </p>
              <p className={p}>Current MHRA guidance advises stopping:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  Semaglutide at least two months before trying to become
                  pregnant.
                </li>
                <li>
                  Tirzepatide at least one month before trying to become
                  pregnant.
                </li>
                <li>
                  Liraglutide immediately before trying to become pregnant.
                </li>
              </ul>
              <p className={p}>
                People taking Mounjaro with an oral contraceptive should add a
                barrier method for four weeks after starting treatment and for
                four weeks following each dose increase. Alternatively, they can
                discuss a non-oral contraceptive method with a healthcare
                professional.
              </p>
              <p className={p}>
                Anyone who becomes pregnant during treatment should contact a
                healthcare professional promptly. Related fertility and
                contraception detail is also covered in our{" "}
                <Link
                  href="/helpful-guides/mounjaro-pregnancy-risk-fertility-contraception"
                  className={linkCls}
                >
                  pregnancy and contraception guide
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="surgery"
              heading="Surgery and anaesthesia"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                GLP-1 medicines slow stomach emptying. This can increase the risk
                of stomach contents entering the airways during general
                anaesthesia or deep sedation.
              </p>
              <p className={p}>
                Patients should tell their surgeon, anaesthetist and healthcare
                team that they are taking a GLP-1 medicine before a procedure.
              </p>
              <p className={p}>
                Do not stop prescribed medicine independently. The clinical team
                may need to adjust fasting instructions, medication timing or the
                anaesthetic approach.
              </p>
              <p className={p}>
                This is relevant not only for major surgery but also for
                procedures involving deep sedation.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="questions"
              heading="Questions to ask a private Salisbury provider"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Before paying for treatment, ask:
              </p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>Who will assess my application?</li>
                <li>
                  How can I verify the prescriber&apos;s registration?
                </li>
                <li>
                  Which registered pharmacy dispenses the medicine?
                </li>
                <li>Will you communicate with my GP?</li>
                <li>
                  What information is included in the clinical assessment?
                </li>
                <li>How often will my treatment be reviewed?</li>
                <li>What happens if I experience side effects?</li>
                <li>Can I speak to a clinician before paying?</li>
                <li>Does the price increase at higher doses?</li>
                <li>Is delivery to Salisbury included?</li>
                <li>
                  How is temperature-sensitive medicine packaged?
                </li>
                <li>
                  What happens if the parcel is delayed or arrives warm?
                </li>
                <li>What happens if my application is declined?</li>
                <li>
                  What support is available when treatment stops?
                </li>
                <li>
                  How do you manage pregnancy, contraception and surgery?
                </li>
              </ol>
              <p className={p}>
                A provider should answer basic clinical and pricing questions
                clearly.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="plan"
              heading="A practical starting plan for Salisbury residents"
            >
              <h3 className={`text-lg font-semibold ${strong}`}>
                Step 1: Review your health
              </h3>
              <p className={`mt-2 ${p}`}>
                Calculate your BMI and record any weight-related conditions,
                current medicine and previous approaches you have tried. Start
                with the{" "}
                <Link href="/tools/bmi-calculator" className={linkCls}>
                  BMI calculator
                </Link>{" "}
                if you need a quick reference before speaking to a clinician.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 2: Explore Wiltshire lifestyle support
              </h3>
              <p className={`mt-2 ${p}`}>
                Contact the Wiltshire Health Improvement Hub to ask what coaching
                or healthy-weight support is currently available.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 3: Consider physical-activity referral
              </h3>
              <p className={`mt-2 ${p}`}>
                Ask your GP or healthcare professional whether a Wiltshire
                physical-activity referral would be appropriate.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 4: Check digital programme eligibility
              </h3>
              <p className={`mt-2 ${p}`}>
                People with obesity alongside diabetes or hypertension can ask
                their GP practice about the NHS Digital Weight Management
                Programme.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 5: Discuss clinical concerns with your GP
              </h3>
              <p className={`mt-2 ${p}`}>
                A GP can investigate conditions affecting weight and explain
                whether a BSW or specialist referral may be appropriate.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 6: Check current NHS medicine criteria
              </h3>
              <p className={`mt-2 ${p}`}>
                Do not assume that Mounjaro or Wegovy is routinely available. NHS
                Mounjaro access is currently prioritised using strict BMI and
                health-condition criteria.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Step 7: Compare private providers carefully
              </h3>
              <p className={`mt-2 ${p}`}>
                Compare regulation, total cost, clinical reviews, delivery
                arrangements and side-effect support using the{" "}
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
                Step 8: Begin treatment only after assessment
              </h3>
              <p className={`mt-2 ${p}`}>
                Prescription treatment should only begin after a qualified
                prescriber confirms that it is clinically appropriate.
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
                    What is the best weight-loss treatment in Salisbury?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    There is no universal best option. The right route may
                    involve Wiltshire lifestyle coaching, digital NHS support,
                    physical-activity referral, prescription medicine or
                    specialist assessment.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I self-refer for support in Salisbury?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Residents can contact Wiltshire&apos;s Health Improvement Hub
                    directly for information about lifestyle support. NHS
                    medicine and specialist services normally require clinical
                    assessment or referral.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can my Salisbury GP prescribe Mounjaro?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Mounjaro has entered the BSW primary-care pathway, but access
                    is being phased and prioritised. Initial local criteria
                    include a very high BMI and several obesity-related health
                    conditions.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I receive Wegovy through the NHS?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Wegovy may be available through approved weight-management
                    pathways for eligible patients. It is not automatically
                    available from every GP practice on request.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can an online pharmacy deliver to Salisbury?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    A regulated online pharmacy may deliver prescription
                    treatment after completing an appropriate clinical
                    assessment. Check its GPhC registration, dispensing details,
                    delivery terms and follow-up process. Our{" "}
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
                    Does Wiltshire have specialist weight-management support?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Eligible Wiltshire patients may be referred to a
                    multidisciplinary specialist service. The Bristol Weight
                    Assessment and Management Service publishes a referral route
                    specifically for Wiltshire patients.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Does joining a council weight programme include medication?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    No. Lifestyle and health-coaching services are separate from
                    medical prescribing. Medicine requires assessment and a
                    prescription from an authorised healthcare professional.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Should I choose the cheapest pharmacy?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Price is only one factor. Check registration, clinical
                    assessment, follow-up, delivery, side-effect support and the
                    cost at later doses.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I buy Mounjaro from social media?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    No. Prescription weight-loss medicine should not be purchased
                    from social-media accounts, beauty salons or unregulated
                    sellers.
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
                Salisbury residents can access several levels of
                weight-management support.
              </p>
              <p className={p}>
                Wiltshire&apos;s Health Improvement Hub and physical-activity
                referral programmes provide local lifestyle options. The NHS
                Digital Weight Management Programme may support eligible adults
                with obesity and diabetes or hypertension.
              </p>
              <p className={p}>
                People with more complex needs may require referral to a
                specialist multidisciplinary service. NHS access to Mounjaro and
                Wegovy is more restricted and follows BSW eligibility and
                prioritisation criteria.
              </p>
              <p className={p}>
                Private treatment may be available more quickly to clinically
                eligible patients, but it should only be obtained through a
                qualified prescriber and a regulated pharmacy.
              </p>
              <p className={p}>
                The right treatment is not automatically the newest medicine or
                the provider advertising the lowest starting price. It is the
                option that is clinically appropriate, properly monitored,
                affordable over time and supported by sustainable lifestyle
                changes.
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
              heading="Practical next steps for Salisbury residents"
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
                pathways, eligibility criteria and medicine availability may
                change. Confirm current details with Wiltshire Council, BSW ICB,
                your GP practice or your chosen provider.
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
                  href="/blog/best-weight-loss-treatment-in-bath"
                  className={linkCls}
                >
                  Bath
                </Link>
                ,{" "}
                <Link
                  href="/blog/best-weight-loss-treatment-in-southampton"
                  className={linkCls}
                >
                  Southampton
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/best-weight-loss-treatment-in-reading"
                  className={linkCls}
                >
                  Reading
                </Link>
                .
              </p>
            </section>
          </article>

          <div className="mt-14">
            <GuideSharePanel
              url={shareUrl}
              title={PAGE_TITLE}
              description="Explore NHS and private weight-loss treatment in Salisbury, including Wiltshire support, Mounjaro eligibility, specialist services, costs and pharmacy checks."
            />
          </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
