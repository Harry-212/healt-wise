"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { buildLocationFaq } from "@/lib/content/uk-location-article-data";
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
  "Best Weight Loss Treatment Londonderry: What Actually Works for Safe, Lasting Results";

export default function LondonderryLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "tailored", label: "Why weight loss treatment in Londonderry needs a tailored approach" },
      { id: "includes", label: "What the best treatment usually includes" },
      { id: "injections", label: "Weight loss injections in Londonderry" },
      { id: "private-compare", label: "Why people compare private clinics" },
      { id: "nhs-ni", label: "NHS access in Northern Ireland" },
      { id: "private-differs", label: "How private access differs" },
      { id: "who-benefits", label: "Who is most likely to benefit" },
      { id: "realistic", label: "How much weight can realistically be lost" },
      { id: "trustworthy", label: "What makes a weight loss program trustworthy" },
      { id: "local", label: "Local practical factors in Londonderry" },
      { id: "brands", label: "How to think about Mounjaro, Wegovy, and Saxenda" },
      { id: "before-start", label: "What to do before starting" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including Londonderry)" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Conclusion" },
      { id: "more-uk", label: "Other places in the UK" },
    ],
    [name],
  );

  const p = darkMode ? "text-slate-300" : "text-slate-700";
  const muted = darkMode ? "text-slate-400" : "text-slate-600";
  const strong = darkMode ? "text-white" : "text-slate-900";
  const border = darkMode ? "border-slate-700" : "border-slate-200";
  const boxBg = darkMode ? "bg-slate-900/80" : "bg-slate-50/90";
  const linkCls = "font-medium text-emerald-600 underline-offset-2 hover:underline";
  const subh = `mt-6 text-base font-semibold ${strong}`;

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

  const faqItems = useMemo(() => buildLocationFaq(loc), [loc]);

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
              Independent guide · 2026
            </span>
          </div>

          <BlogArticleHeroImage src={hero.url} alt={hero.alt} />
          <div id="guide-article-hero-end" aria-hidden className="pointer-events-none h-0 w-full overflow-hidden" />
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-londonderry" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  AI Overview: The most successful weight loss treatment in Londonderry is usually a medically supervised plan that combines nutrition, behaviour change, physical activity, and, for eligible patients, prescription medications such as semaglutide or tirzepatide. The best option depends on your BMI, medical history, access to NHS or private care, and whether you need appetite control, structured coaching, or long term weight maintenance. In Northern Ireland, GP access, health board pathways, and eligibility rules can affect whether weight loss injections are available on the NHS, while private clinics may offer faster access with paid monitoring.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Londonderry residents looking for weight loss help often search for the same few things: fast results, injection options, safe medical oversight, and a plan that does not collapse after a few weeks. That search makes sense. Weight loss is rarely only about willpower. It is usually about finding the right combination of clinical support, nutrition strategy, and a method you can actually sustain in real life.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  In practice, the best weight loss treatment in Londonderry is not a single product or one miracle injection. It is more likely to be a structured, evidence based approach that takes into account your weight history, appetite patterns, work schedule, stress, sleep, and whether you are trying to lose 5 kg or a much larger amount. Some people may do best with lifestyle led support alone. Others may need prescription medication, especially if obesity or weight related conditions are already present. Map options early on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  and read{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="tailored"
                heading="Why weight loss treatment in Londonderry needs a tailored approach"
              >
                <p className={p}>
                  Londonderry, like many UK and Northern Ireland cities, sits in a real world mix of busy schedules, takeaway culture, family routines, and uneven access to medical support. That matters because weight management does not happen in a vacuum. A person who works shifts, drives long distances, or has limited time for meal prep may not respond well to generic advice like eat less and move more. The idea is technically correct, but too vague to be useful on its own.
                </p>

                <p className={p}>A better approach is to look at weight loss through three questions:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>What is driving the weight gain?</li>
                  <li>What support is realistically available?</li>
                  <li>What method can be maintained long enough to matter?</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  This is where medically supervised weight loss stands out. It may include blood tests, nutrition counselling, appetite control medication, and regular review. That structure often improves adherence and reduces the stop start pattern that many people experience with self directed dieting. It also helps identify whether the real issue is hunger, emotional eating, medication related weight gain, insulin resistance, sleep debt, or something else entirely.
                </p>

                <p className={p}>
                  For many people in Londonderry, the biggest problem is not starting a plan. It is staying with it after the first few weeks. Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  as a discussion prep tool alongside waist measurements, not as a verdict on character.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="includes" heading="What the best treatment usually includes">
                <p className={p}>
                  The most effective weight loss programmes usually share a few common features. They do not rely on one trick. They work because they combine several supports at once.
                </p>

                <p className={subh}>1. Medical assessment</p>
                <p className={p}>
                  Before anything else, a proper assessment matters. That usually means checking BMI, waist circumference, current health conditions, medications, blood pressure, and sometimes glucose or lipid markers. This is not bureaucracy for its own sake. It helps determine whether a person is suitable for medication, whether another condition is affecting weight, and whether rapid weight loss would create risk.
                </p>

                <p className={p}>
                  A good clinician should also ask about eating patterns, sleep, mood, and previous attempts. Someone who has gained weight after antidepressants, for example, may need a different plan from someone whose weight gain is mainly lifestyle related. The treatment may look similar from the outside, but the reason behind it changes the strategy.
                </p>

                <p className={subh}>2. Nutrition plan that fits real life</p>
                <p className={p}>
                  The strongest diet plan is not the most extreme one. It is the one a person can follow without burning out. In evidence based programmes, the nutrition side usually focuses on calorie reduction without starvation, higher protein intake, better satiety, fewer liquid calories, realistic meal timing, and improved food quality.
                </p>

                <p className={p}>
                  That could mean more lean protein, vegetables, legumes, fruit, and high fibre meals. It might also mean reducing snacking, late night eating, and large portions of energy dense foods. The key point is that the plan should feel workable, not punishing. If injections enter the picture, pair food skills with{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>{" "}
                  style structure even when you are not yet on a pen.
                </p>

                <p className={subh}>3. Physical activity</p>
                <p className={p}>
                  Exercise supports weight loss, but it also protects against rebound. Walking, resistance training, cycling, and low impact cardio can all help. For people who are new to exercise, walking is often the simplest place to start. It is underrated. A daily walk will not look dramatic on social media, but it can steadily improve energy balance and appetite regulation.
                </p>

                <p className={subh}>4. Behaviour change support</p>
                <p className={p}>
                  This is the part many people underestimate. Weight management is shaped by routine, stress, habits, sleep, and environment. Structured coaching can help people recognise emotional eating, plan around social events, and build repeatable habits. Without that layer, many people lose weight briefly and then regain it.
                </p>

                <p className={subh}>5. Medication when appropriate</p>
                <p className={p}>
                  For some people, especially those with obesity or obesity related health problems, prescription weight loss injections may be a very reasonable option. These medicines are not a shortcut in the lazy sense. They are tools that can reduce appetite, improve fullness, and make diet changes easier to sustain. But they are not right for everyone, and they still work best alongside nutrition and lifestyle change.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="injections" heading="Weight loss injections in Londonderry">
                <p className={p}>
                  Weight loss injections are one of the most searched topics in this area, and for good reason. They are often discussed because they can produce meaningful appetite reduction when used correctly. The main medicines people ask about are semaglutide and tirzepatide, and in some cases liraglutide.
                </p>

                <p className={p}>
                  Semaglutide is commonly associated with brands used for obesity management, while tirzepatide is often discussed as a newer option with strong appetite control effects. These medications act on hormones involved in appetite, satiety, and blood sugar regulation. In plain language, many people find they feel fuller sooner and think about food less often.
                </p>

                <p className={p}>That said, there are important caveats:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>They are not suitable for everyone.</li>
                  <li>They may cause nausea, constipation, bloating, or appetite suppression that feels too strong.</li>
                  <li>Dose increases need to be gradual.</li>
                  <li>They should be prescribed with follow up, not just handed over without review.</li>
                  <li>Stopping them abruptly can lead to regain if habits have not changed.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  For a helpful article, it is worth being clear: weight loss injections can be powerful, but they are not magic. They work best when the person also learns how to eat, move, and maintain weight once the medicine is no longer the whole story. Read{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private-compare" heading="Why people compare private clinics">
                <p className={p}>
                  People in Londonderry often compare private weight loss clinics because they want faster access, clearer communication, and more structured monitoring than they feel they can get elsewhere. That is understandable. In the private sector, the experience often feels more direct: assessment, prescription, delivery, follow up. Some clinics also offer nutrition guidance and body composition tracking.
                </p>

                <p className={p}>
                  Examples of clinics people may compare include Medi Weightloss, MD Esthetics, and Inbloom Health plus Medispa in the wider search landscape. These names appear in search because they reflect the type of medically supervised services people are actively looking for: appetite control, structured plans, and personalised monitoring. However, when reading about any clinic, the important question is not the branding. It is whether the service is properly supervised, transparent about eligibility, and careful about safety.
                </p>

                <p className={p}>If you are using clinics as comparison points, the useful checklist is:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Does the provider explain eligibility clearly?</li>
                  <li>Is the prescriber named?</li>
                  <li>Are follow up reviews included?</li>
                  <li>Are side effects discussed honestly?</li>
                  <li>Is there a plan for maintenance, not just initial loss?</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Those questions matter more than glossy before and after marketing. Verify UK registration using our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-ni" heading="NHS access in Northern Ireland">
                <p className={p}>
                  A common question is whether weight loss injections are available on the NHS in Northern Ireland. The answer is that access can exist, but it is usually limited by eligibility criteria, local pathways, and current service capacity. In other words, it is not simply a matter of asking for a prescription and receiving one automatically.
                </p>

                <p className={p}>
                  NHS routes generally prioritise people with higher BMI thresholds, obesity related health conditions, and documented need. In some cases, the first step may be lifestyle support or referral to a weight management service rather than immediate medication. That can feel slow, but it reflects the way public services triage risk and demand.
                </p>

                <p className={p}>For people in Londonderry, that means one of two things usually happens:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>They enter an NHS lifestyle or weight management pathway.</li>
                  <li>They explore private care while still keeping their GP informed.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Neither route is inherently better for everyone. NHS care may be more affordable and more integrated with your wider health record. Private care may be faster and more flexible. The right choice depends on urgency, budget, and medical suitability. Read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-prescription-timeline-uk">
                    Mounjaro prescription timeline UK
                  </Link>{" "}
                  for how waits can feel in practice.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private-differs" heading="How private access differs">
                <p className={p}>
                  Private care changes the access pathway, but not the biology. That distinction matters. A private clinic may be able to assess you more quickly, prescribe if appropriate, and organise home delivery or pickup. This can be very convenient, especially if time is limited or local NHS waiting times are long.
                </p>

                <p className={p}>But convenience comes with responsibility. You need to know:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>who is prescribing,</li>
                  <li>whether the pharmacy is registered,</li>
                  <li>how dose escalation works,</li>
                  <li>what to do if side effects occur,</li>
                  <li>and how long follow up lasts.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  A good private provider should not behave like a vending machine. If a service promises dramatic results without asking about health history, that is a warning sign. Weight loss medicines should be used in a way that respects both safety and realism. Scan red flags with{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="who-benefits" heading="Who is most likely to benefit">
                <p className={p}>
                  Not every treatment fits every person. The people most likely to benefit from medically supervised weight loss usually include those who:
                </p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>have a BMI in the overweight or obese range,</li>
                  <li>have struggled with appetite or repeated regain,</li>
                  <li>have weight related health risks,</li>
                  <li>need structured accountability,</li>
                  <li>or have not responded well to standard diet and exercise advice.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  People with certain medical histories may need extra caution. That can include a history of pancreatitis, gallbladder disease, pregnancy planning, eating disorders, or particular thyroid concerns. This is why a medical review is essential. The best treatment is the one that matches the person, not the trend.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="realistic" heading="How much weight can realistically be lost">
                <p className={p}>
                  This is where people often get misled. Rapid loss claims are everywhere, but realistic weight loss is usually steadier than the internet suggests.
                </p>

                <p className={p}>
                  A sensible target is often around 0.5 to 1 kg per week, though real world progress will vary. In some cases, early loss is faster because of water weight or appetite suppression. Later, the pace often slows. That does not mean the plan is failing. It means the body is adapting.
                </p>

                <p className={p}>A few practical timelines:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>5 kg may take about 5 to 10 weeks for many people.</li>
                  <li>10 kg may take several months.</li>
                  <li>Larger goals, such as 20 kg, often need a longer runway and probably medical support.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  The biggest mistake is trying to compress all of that into an unrealistic deadline. That often creates rebound, fatigue, and frustration. A slower plan that actually sticks is usually better than a dramatic plan that collapses after three weeks. If progress stalls on GLP 1 medicines, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trustworthy" heading="What makes a weight loss program trustworthy">
                <p className={p}>
                  For readers trying to choose between options in Londonderry, trust should be based on a few simple signals.
                </p>

                <p className={subh}>Look for:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>named clinicians,</li>
                  <li>clear medical eligibility criteria,</li>
                  <li>realistic claims,</li>
                  <li>side effect guidance,</li>
                  <li>follow up support,</li>
                  <li>and transparent pricing.</li>
                </ul>

                <p className={subh}>Be careful if you see:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>lose massive weight fast language,</li>
                  <li>no discussion of risks,</li>
                  <li>no explanation of monitoring,</li>
                  <li>vague credentials,</li>
                  <li>or a sales first tone.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Trustworthy weight loss care is usually a little less exciting than the ads. That is often a good sign. Read how we compare services in{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local" heading="Local practical factors in Londonderry">
                <p className={p}>
                  Weight loss in Londonderry is also shaped by everyday life. Access to appointments, routines, driving patterns, family meals, and food environment all matter. Someone who lives near good walking routes may find activity easier. Someone with a shift schedule may need a plan built around sleep and meal timing rather than gym intensity.
                </p>

                <p className={p}>
                  That is why locality matters, even when the medication itself does not. The treatment molecule may be the same, but the support system around it is not. If your routine makes regular in person visits hard, a remote follow up structure may matter more. If you prefer reassurance and face to face accountability, a clinic with structured review may fit better.
                </p>

                <p className={p}>
                  Nearby Northern Ireland guides:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-belfast">
                    Belfast
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-lisburn">
                    Lisburn
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-armagh">
                    Armagh
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="brands" heading="How to think about Mounjaro, Wegovy, and Saxenda">
                <p className={p}>
                  People often compare these medicines as if one is automatically best. That is too simplistic. They are different tools with different dosing schedules, side effect profiles, and practical considerations.
                </p>

                <p className={p}>
                  Wegovy is widely discussed for obesity treatment and appetite control. Mounjaro is often talked about for strong weight reduction and dual action appetite effects. Saxenda is older and may be suitable for some people who prefer a daily injection or who are assessed as appropriate for it.
                </p>

                <p className={p}>
                  The better question is not which one is strongest? but which one is suitable, available, affordable, and safe for me right now? That framing is more useful and more medically honest. Compare triplets on{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    Mounjaro versus Wegovy versus Saxenda
                  </Link>{" "}
                  and budget on{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="before-start" heading="What to do before starting">
                <p className={p}>Before starting any medical weight loss treatment, it helps to prepare a few things:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>current weight and height,</li>
                  <li>waist measurement,</li>
                  <li>medication list,</li>
                  <li>medical history,</li>
                  <li>previous dieting attempts,</li>
                  <li>and a rough idea of your goal.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  You should also think about your real reason for wanting to lose weight. That may sound obvious, but it matters. Someone who wants better health markers may stay motivated differently from someone focused on energy, confidence, fertility, or joint pain. Clear motivation helps support long term adherence. If you involve a private provider, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-gp-notification-uk">
                    Mounjaro GP notification UK
                  </Link>{" "}
                  so your surgery record stays coherent.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page on purpose. Use national guidance below, then return to Health Wise comparisons for pricing and safety.
                </p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    <a
                      className={linkCls}
                      href="https://www.nice.org.uk/guidance/ng246"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      NICE NG246 (overweight and obesity management)
                    </a>
                  </li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trust" heading="Why Health Wise is a comparator, not a prescriber">
                <p className={p}>
                  We publish educational comparisons. We do not prescribe or dispense. A registered prescriber must decide eligibility, monitoring, and dose changes.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading="Practical next steps (UK wide, including Londonderry)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare treatment types on{" "}
                    <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                      best weight loss treatments in the UK
                    </Link>
                    .
                  </li>
                  <li>
                    Prepare numbers on the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    before GP or private consults.
                  </li>
                  <li>
                    Read{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-side-effects-uk">
                      Mounjaro side effects UK
                    </Link>{" "}
                    for class effect context if injections are discussed.
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Seek help from a clinician for diagnosis, prescriptions, and personalised monitoring.
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
                  The best weight loss treatment in Londonderry is usually not the most dramatic one. It is the one that fits your medical profile, your routine, your budget, and your long term goals. For some people, that means an NHS supported route. For others, it means a private medically supervised programme with prescription medication and follow up. What matters most is safety, honesty, and sustainability.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Explore every city guide via the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Also read{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-newry">
                    Newry
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
