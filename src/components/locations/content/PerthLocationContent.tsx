"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
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
  "Best Weight Loss Treatment in Perth, Scotland: NHS, Pharmacy, and Medical Options Explained";

export default function PerthLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Why best weight loss treatment in Perth is personal" },
      { id: "local-view", label: "Why Perth needs a local view of weight loss" },
      { id: "pathways", label: "Main treatment pathways in Perth" },
      { id: "medicines", label: "What the medicines actually do" },
      { id: "qualify", label: "Who may qualify for treatment" },
      { id: "practice", label: "What the best treatment looks like in practice" },
      { id: "results", label: "How quickly results may appear" },
      { id: "pharmacy", label: "What a good pharmacy clinic should provide" },
      { id: "lifestyle", label: "Lifestyle support still matters" },
      { id: "mistakes", label: "Common mistakes people make" },
      { id: "factors", label: "Perth-specific factors that can help" },
      { id: "credibility", label: "How to judge whether a provider is credible" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Perth)" },
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
  const linkCls = "font-medium text-emerald-600 underline-offset-2 hover:underline";

  const faqMarkdownComponents = useMemo(
    () => ({
      p: ({ children }: { children?: React.ReactNode }) => (
        <span className="block">{children}</span>
      ),
      a: ({
        href,
        children,
      }: {
        href?: string;
        children?: React.ReactNode;
      }) =>
        href?.startsWith("/") ? (
          <Link href={href} className={linkCls}>
            {children}
          </Link>
        ) : (
          <a
            href={href}
            className={linkCls}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </a>
        ),
      strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className={strong}>{children}</strong>
      ),
    }),
    [linkCls, strong],
  );

  const faqItems = useMemo(
    () => [
      {
        q: "How much does Mounjaro cost in Scotland?",
        a: "The cost can vary widely depending on the provider, dose, and whether monitoring is included. Private monthly costs are often higher at the start because titration and follow-up add to the overall price. NHS access, when available and appropriate, is different because it is based on clinical eligibility rather than cash payment.",
      },
      {
        q: "What does the NHS in Scotland offer for weight loss?",
        a: "NHS Scotland may offer dietitian support, behavioural programmes, exercise guidance, and in some cases medication or referral into specialist services. The exact pathway depends on health board rules and whether you meet the local criteria. For many people, the NHS route is still the most comprehensive long-term option.",
      },
      {
        q: "Can I get Mounjaro from my GP in Scotland?",
        a: "Possibly, but not automatically. Some people may be assessed by their GP and referred onward, while others may need to go through a specialist or an approved pathway first. It depends on eligibility, local policy, and whether the GP practice offers or supports prescribing for this medicine.",
      },
      {
        q: "What is the 3-3-3 rule for fat loss?",
        a: "People use that phrase in different ways online, so it is not a formal clinical rule. In most weight management contexts, the useful idea behind it is simply consistency over three days, three weeks, and three months. Real fat loss usually comes from habits maintained long enough to matter, not a short burst of extreme effort.",
      },
      {
        q: "Which weight loss option is best in Perth?",
        a: "The best option depends on the person. For some, NHS support and lifestyle change will be enough. For others, a pharmacy-led or private prescription programme may be more appropriate if they qualify and need stronger appetite control.",
      },
      {
        q: "Is there a safe way to lose weight without medication?",
        a: "Yes, and for many people it is the right starting point. A structured calorie deficit, better protein intake, more movement, and regular monitoring can work well, especially when the goal is moderate weight loss rather than major medical intervention.",
      },
    ],
    [],
  );

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog?topic=locations"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${darkMode ? "text-slate-300" : "text-slate-900"}`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}
            >
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
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

        <header className="mb-12">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600">
            {capitalizeHeadingWords("Locations in UK")}
          </p>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            {PAGE_TITLE}
          </h1>
          <div className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${muted}`}>
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
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-perth" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  Perth has a practical advantage that many people overlook: it offers more than one pathway into weight management support. Some residents will be best served by NHS Tayside’s structured programme, while others may move faster through a pharmacy-led clinic or private prescriber if they are eligible. The right option depends on health status, budget, access, and how much supervision a person needs.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  It is also worth saying plainly that no single treatment is automatically “best” for everyone. A good plan in Perth is usually the one that combines medical assessment, realistic nutrition changes, movement, and follow-up. That sounds simple, but in practice it is where most people either succeed or get stuck.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local-view" heading="Why Perth needs a local view of weight loss">
                <p className={p}>
                  Perth is not a huge city, but that does not mean access is identical for everyone. Some people live close to the High Street and pharmacy services, while others may rely more heavily on GP access, public transport, or health board pathways. That difference matters when you are trying to start a weight loss programme, repeat medication, or arrange follow-up.
                </p>

                <p className={p}>
                  Weight loss is also not only about motivation. Family routines, shift work, long sitting hours, stress, and access to food all affect the result. A plan that looks neat on paper can fail quickly if it does not fit real life in Perth, especially for people balancing work, children, or long-term conditions.
                </p>

                <p className={p}>
                  The most useful approach is usually the least dramatic one. That may sound disappointing, but it is often true. Structured support, enough protein, regular walking, and accountable monitoring tend to outperform the kind of rapid promises that flood search results.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pathways" heading="Main treatment pathways in Perth">
                <h3 className={`text-xl font-semibold mt-6 mb-3 ${strong}`}>NHS Tayside adult weight management service</h3>
                <p className={p}>
                  For many people, the NHS remains the most appropriate first step. In Perth, adults may be referred into NHS Tayside’s weight management pathway if they meet local criteria, which often include BMI thresholds and related health issues such as type 2 diabetes, hypertension, or sleep apnoea. This route is especially useful for people who need multidisciplinary support rather than medication alone.
                </p>

                <p className={p}>
                  An NHS pathway may include input from dietitians, physiotherapists, psychologists, and other clinicians. That wider support can matter more than people expect. Weight gain is often linked with sleep, mood, mobility, food habits, and medication side effects, so a narrow “eat less, move more” message is rarely enough on its own.
                </p>

                <p className={p}>
                  The trade-off is time. NHS services may involve waiting, stepwise assessment, and eligibility rules. That does not make them weak; it just means they are designed to manage risk carefully and often prioritise people with greater clinical need.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-3 ${strong}`}>Pharmacy-led medical weight loss</h3>
                <p className={p}>
                  Perth also has pharmacy-led options, and these have become more visible because they can be quicker to access than NHS pathways. A pharmacist-led weight management clinic may assess your medical history, current BMI, and suitability for prescription treatment. If appropriate, a service may offer medicines such as{" "}
                  <Link className={linkCls} href="/what-is-wegovy">Wegovy</Link>{" "}
                  or{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">Mounjaro</Link>{" "}
                  alongside monitoring and lifestyle guidance. If you want to check and compare private pricing plans, you can review our{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">Mounjaro price comparison</Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">Wegovy price comparison</Link>{" "}
                  guides.
                </p>

                <p className={p}>
                  This model can work well for people who want structured care without waiting months for referral. It is not a shortcut, though. A good pharmacy-based service still needs screening, dose titration, side-effect counselling, and follow-up. Without those, the treatment may be less effective and less safe.
                </p>

                <p className={p}>
                  In Perth, local pharmacy clinics are often attractive because they feel practical and close to home. That convenience helps. But convenience should never replace proper checks, especially when a medicine is being used to affect appetite, digestion, and weight over several months.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-3 ${strong}`}>Private medical weight management</h3>
                <p className={p}>
                  Some people in Perth choose private clinics because they want faster access, more appointment availability, or a broader menu of options. In a private setting, the emphasis is often on assessment, prescription eligibility, and ongoing supervision. For people who qualify, this can mean earlier access to GLP-1 or GLP-1/GIP medication than they might get through the NHS.
                </p>

                <p className={p}>
                  Still, private does not mean better in every case. A private programme is only as good as its assessment quality, its clinician oversight, and its willingness to say no when medication is not suitable. If a provider seems too eager to prescribe without much questioning, that is a red flag rather than a benefit.
                </p>

                <p className={p}>
                  The strongest private model is usually one that looks boringly professional. It asks for a full history, explains what the medicine can and cannot do, monitors progress, and gives realistic expectations instead of marketing hype.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="medicines" heading="What the medicines actually do">
                <h3 className={`text-xl font-semibold mt-6 mb-3 ${strong}`}>Wegovy</h3>
                <p className={p}>
                  Wegovy contains semaglutide, a GLP-1 receptor agonist. In practical terms, it can reduce appetite, slow stomach emptying, and help people feel full sooner. For suitable patients, that can make calorie control far more manageable than dieting alone.
                </p>

                <p className={p}>
                  It is not a magic solution, though. The medication works best when it sits inside a bigger plan that includes food choices, activity, and follow-up. Some people lose a substantial amount of weight; others respond more modestly. That variability is normal and should be expected.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-3 ${strong}`}>Mounjaro</h3>
                <p className={p}>
                  Mounjaro contains tirzepatide, which acts on both GIP and GLP-1 pathways. That dual mechanism is one reason it has received so much attention in weight management. In many discussions, it is presented as one of the strongest prescription options for weight loss, provided the person meets the clinical criteria.
                </p>

                <p className={p}>
                  But stronger does not mean universal. Some people do better on semaglutide, some tolerate one medicine better than another, and some should not use this class at all. The decision needs to be individual, not trend-driven.
                </p>

                <h3 className={`text-xl font-semibold mt-8 mb-3 ${strong}`}>Saxenda</h3>
                <p className={p}>
                  Saxenda contains liraglutide and is taken as a daily injection. It is an older option than Wegovy or Mounjaro, but it still has a place for some patients. It may suit people who need a different dosing style or who do not respond well to other medicines.
                </p>

                <p className={p}>
                  Its main limitation is that daily injections can be less convenient, and average weight-loss outcomes are often lower than with newer options. Even so, it remains relevant in the broader treatment picture.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="qualify" heading="Who may qualify for treatment">
                <p className={p}>
                  Eligibility depends on the pathway. NHS and private services may not use exactly the same rules, but they usually consider BMI, health conditions, previous attempts at weight loss, and whether a person has any contraindications. You can check your current category using our{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">BMI calculator</Link>{" "}
                  to get a baseline estimation before a clinical consultation.
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg} my-6`}>
                  <p className={`text-base font-semibold ${strong} mb-3`}>A person may be more likely to qualify if they have:</p>
                  <ul className={`list-disc pl-6 space-y-2 ${p}`}>
                    <li>BMI over 30.</li>
                    <li>BMI over 27 or 28 with related health conditions, depending on pathway.</li>
                    <li>Type 2 diabetes, high blood pressure, fatty liver disease, sleep apnoea, or similar risks.</li>
                    <li>A history showing that lifestyle changes alone have not been enough.</li>
                  </ul>
                </div>

                <div className={`rounded-xl border p-5 ${border} ${boxBg} my-6`}>
                  <p className={`text-base font-semibold ${strong} mb-3`}>A person may not be suitable if they have:</p>
                  <ul className={`list-disc pl-6 space-y-2 ${p}`}>
                    <li>A history of pancreatitis.</li>
                    <li>Pregnancy or plans for pregnancy.</li>
                    <li>Certain thyroid conditions.</li>
                    <li>Serious eating disorder history.</li>
                    <li>A medical profile that makes appetite-suppressing treatment unsafe.</li>
                  </ul>
                </div>

                <p className={p}>
                  That screening is not bureaucracy for its own sake. It is what stops weight loss treatment from being reduced to a cosmetic purchase. These medicines affect the body in ways that deserve respect.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="practice" heading="What the best treatment looks like in practice">
                <p className={p}>
                  The best weight loss treatment in Perth is usually not just a drug, and it is not just a meal plan either. It is a system. That system should include assessment, a realistic target, nutrition advice, movement that fits your life, and ongoing review. You can compare how different pathways stack up nationally in our guide to the{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">best weight loss treatments in the UK</Link>.
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg} my-6`}>
                  <p className={`text-base font-semibold ${strong} mb-3`}>A strong treatment plan often includes:</p>
                  <ul className={`list-disc pl-6 space-y-2 ${p}`}>
                    <li>A proper baseline weight, height, BMI, and waist measurement.</li>
                    <li>Blood pressure and relevant blood tests where needed.</li>
                    <li>Review of medications that may affect weight.</li>
                    <li>A calorie strategy that can actually be followed.</li>
                    <li>Advice on protein, fibre, hydration, and meal timing.</li>
                    <li>Follow-up to measure response and manage side effects.</li>
                  </ul>
                </div>

                <p className={p}>
                  That may sound unglamorous. It is. But in weight management, boring often beats brilliant.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="results" heading="How quickly results may appear">
                <p className={p}>
                  This is where many people get misled by social media. Rapid transformation posts create false expectations, and those expectations cause frustration when real progress looks slower. In most cases, a safe and sustainable pace of loss is around 0.5 to 1 kg per week, though it can vary.
                </p>

                <p className={p}>
                  A loss of 5 kg may take around 5 to 10 weeks for many people if the plan is consistent. A larger loss of 10 to 20 kg can take several months, especially if the goal is to preserve muscle and avoid rebound weight gain. Anyone promising a dramatic loss in a few days is probably selling fantasy, not medical care.
                </p>

                <p className={p}>
                  Medication can help speed progress, but it still does not erase the need for consistency. If someone eats chaotically, sleeps badly, and barely moves, the medicine may still help, but the result will usually be less impressive than expected.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="pharmacy" heading="What a good pharmacy clinic should provide">
                <p className={p}>
                  If you are looking at pharmacy-led weight loss support in Perth, the clinic should not feel vague. It should feel organised and clinically serious. Good services usually explain who is prescribing, how reviews happen, and what happens if you experience side effects.
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg} my-6`}>
                  <p className={`text-base font-semibold ${strong} mb-3`}>A trustworthy clinic should usually offer:</p>
                  <ul className={`list-disc pl-6 space-y-2 ${p}`}>
                    <li>A clinical questionnaire and consultation.</li>
                    <li>BMI and health review.</li>
                    <li>Discussion of treatment options and reasons for choosing one.</li>
                    <li>Clear titration instructions.</li>
                    <li>Monitoring and follow-up.</li>
                    <li>Advice on when to pause or seek urgent help.</li>
                  </ul>
                </div>

                <p className={p}>
                  That level of detail matters because these medicines are not ordinary over-the-counter products. They are prescription treatments with real benefits and real risks. A proper service makes that plain.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Lifestyle support still matters">
                <p className={p}>
                  Medication can reduce appetite, but it cannot choose healthy food for you. It cannot fix chronic short sleep. It cannot rebuild muscle if you never use it. That is why the most useful plans are combined plans.
                </p>

                <div className={`rounded-xl border p-5 ${border} ${boxBg} my-6`}>
                  <p className={`text-base font-semibold ${strong} mb-3`}>In Perth, a realistic lifestyle approach might include:</p>
                  <ul className={`list-disc pl-6 space-y-2 ${p}`}>
                    <li>Walking more often around the city or local green spaces.</li>
                    <li>Building meals around protein, vegetables, and slower-release carbohydrates.</li>
                    <li>Limiting liquid calories, especially sugary drinks and alcohol.</li>
                    <li>Using simple portion rules instead of strict punishment-style dieting.</li>
                    <li>Adding resistance work or bodyweight exercise twice a week.</li>
                  </ul>
                </div>

                <p className={p}>
                  This is not about perfection. It is about making the default day a little better than the previous one. That difference compounds.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="mistakes" heading="Common mistakes people make">
                <p className={p}>
                  One of the biggest mistakes is chasing speed instead of safety. People see a social media story, compare themselves to someone else, and then assume the fastest route must be the best route. Usually it is not.
                </p>

                <p className={p}>
                  Another common mistake is stopping the moment weight starts to fall. That sounds odd, but many people become less careful once they see early progress. They eat back the deficit, skip follow-up, and then wonder why the result disappeared.
                </p>

                <p className={p}>
                  A third mistake is ignoring side effects. Nausea, reflux, constipation, and reduced appetite can all happen with GLP-1 treatment. Those effects may be manageable, but only if the person says something early rather than waiting until the problem grows.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="factors" heading="Perth-specific factors that can help">
                <p className={p}>
                  Perth has a size and layout that can actually support weight management if used well. The city is walkable in parts, and short regular movement is often more realistic than relying on long gym sessions. That matters because consistency beats intensity for many people.
                </p>

                <p className={p}>
                  Local food culture also plays a role. If meals are built around pub food, pastries, or frequent convenience snacks, progress becomes harder. If shopping and cooking habits shift even slightly toward simpler foods, the result may be much better than expected.
                </p>

                <p className={p}>
                  People in Perth may also benefit from choosing a support route that fits their routine. Someone who works odd hours may do better with a pharmacy-led plan. Someone with multiple health conditions may need the broader NHS route first. There is no single correct answer.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="credibility" heading="How to judge whether a provider is credible">
                <p className={p}>
                  A credible provider should be clear about who is responsible for your care. It should name its clinician, explain its prescribing rules, and describe what happens if treatment is not appropriate. If a service is vague on these points, caution is sensible.
                </p>

                <p className={p}>
                  You should also expect transparency around follow-up. Weight loss treatment is not only about the first prescription. The real value often appears in month two, month three, and beyond, when dose adjustments, side effect checks, and behaviour support start to matter.
                </p>

                <p className={p}>
                  A provider that avoids these details may still look polished. That does not mean it is clinically strong. The best services are usually the ones that are slightly less glamorous and much more specific.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="Frequently Asked Questions">
                <div className="space-y-6">
                  {faqItems.map((item) => (
                    <div key={item.q} className={`rounded-xl border p-5 ${border} ${boxBg}`}>
                      <p className={`text-base font-semibold ${strong}`}>{item.q}</p>
                      <div className={`mt-2 text-sm leading-relaxed ${p}`}>
                        <ReactMarkdown components={faqMarkdownComponents}>{item.a}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatment in Perth, Scotland is not the flashiest one. It is the one that matches your health needs, your budget, your eligibility, and your ability to stick with it. For some people, that means NHS Tayside support. For others, it means a pharmacy-led or private pathway with prescription medicines such as Wegovy or Mounjaro.
                </p>

                <p className={p}>
                  What matters most is that the treatment is supervised, realistic, and built around your actual life in Perth. If a plan ignores medical safety, follow-up, or local access realities, it is probably not the best plan at all. The strongest result usually comes from a careful mix of science, consistency, and honest expectations.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trust" heading="Why Health Wise is a comparator, not a prescriber">
                <p className={p}>
                  We help you compare options and questions to ask. We do not prescribe. A qualified clinician should assess eligibility, interactions, contraindications, and monitoring.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Perth)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare providers using{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      our UK comparison page
                    </Link>
                    .
                  </li>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    and bring your medical history to your GP.
                  </li>
                  <li>
                    Read{" "}
                    <Link className={linkCls} href="/what-is-mounjaro">
                      what Mounjaro is
                    </Link>{" "}
                    and{" "}
                    <Link className={linkCls} href="/what-is-wegovy">
                      what Wegovy is
                    </Link>{" "}
                    before paying for private care.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Seek help from a clinician for diagnosis, prescriptions, and personalised plans.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Explore more location guides here:{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  .
                </p>
              </GuideSection>
            </article>

            <div className="mt-12">
              <GuideSharePanel shareUrl={shareUrl} title={PAGE_TITLE} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
