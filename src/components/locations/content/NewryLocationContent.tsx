"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
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
  "Best Weight Loss Treatment in Newry: What Actually Works, Who It Suits, and How Access Usually Works";

export default function NewryLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "Best weight loss treatment in Newry" },
      { id: "what-best-means", label: "What the best treatment usually means" },
      { id: "why-compare", label: "Why Newry residents compare options" },
      { id: "glp1", label: "GLP-1 medicines and how they work" },
      { id: "most-effective", label: "What is often most effective" },
      { id: "nhs", label: "NHS routes in Northern Ireland" },
      { id: "private", label: "Private treatment in Newry" },
      { id: "saxenda-cost", label: "Saxenda cost in Newry" },
      { id: "ozempic-gp", label: "GP prescribing and Ozempic" },
      { id: "celebrity", label: "What celebrity weight loss tells us" },
      { id: "trustworthy", label: "What makes a provider trustworthy" },
      { id: "lifestyle", label: "Why lifestyle still matters" },
      { id: "side-effects", label: "Common side effects and limits" },
      { id: "plan", label: "What a good plan might look like" },
      { id: "local", label: "Local factors that matter in Newry" },
      { id: "questions", label: "Questions before starting" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator" },
      { id: "next-steps", label: "Practical next steps" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "faq", label: "FAQ" },
      { id: "conclusion", label: "Conclusion" },
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

  const faq = useMemo(() => buildLocationFaq(loc), [loc]);
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
          <a href={href} className={linkCls} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
    }),
    [],
  );

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog/topic/locations"
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
        <BlogArticleColumn toc={toc} darkMode={darkMode}>
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading="Best Weight Loss Treatment in Newry: What Actually Works, Who It Suits, and How Access Usually Works">
                <p className={`text-lg md:text-xl ${p}`}>
                  The best weight loss treatment in Newry usually depends on medical need, eligibility, and access. For many adults, the most effective options are clinically approved GLP-1 medicines such as Wegovy or Mounjaro, combined with diet, movement, and follow-up support. In practice, the &quot;best&quot; treatment is usually the one that is safe for your health profile, available through a registered clinician, and realistic for long-term use.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Newry sits in a part of Northern Ireland where people often compare private weight loss clinics, NHS routes, and online prescribing options at the same time. That can make the search feel crowded and a little confusing. One page says injections are the answer. Another insists lifestyle changes alone are enough. The truth is less dramatic, but more useful: the right choice usually depends on your BMI, health conditions, medication history, and how much support you need to stay on track.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  If you are searching for the best weight loss treatment in Newry, the useful question is not only &quot;what works fastest?&quot; It is also &quot;what is safe, sustainable, and actually available to me here?&quot; For wider context, compare the main routes in our{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    best weight loss treatments in the UK
                  </Link>{" "}
                  guide.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="what-best-means" heading="What the best treatment usually means">
                <p className={p}>
                  When people ask about the most successful weight loss treatment, they often mean the thing that leads to the biggest visible result in the shortest time. That is understandable. But success in weight loss medicine is not only about the scale.
                </p>

                <p className={p}>A treatment may be considered successful if it:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>reduces appetite enough to make calorie control easier,</li>
                  <li>helps you lose a clinically meaningful amount of weight,</li>
                  <li>is safe for your medical profile,</li>
                  <li>can be continued with proper monitoring,</li>
                  <li>and does not collapse the moment you stop taking it.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That last point matters more than people think. Some approaches can work quickly and still fail long term. Others look slower at first, but hold up better because they fit real life. In Newry, that might mean a plan that works around commuting, family meals, shift work, or limited appointment access rather than an ideal routine nobody can keep.
                </p>

                <p className={p}>For most people, the strongest results come from a combination of:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>a prescribed GLP-1 medicine where appropriate,</li>
                  <li>structured nutrition support,</li>
                  <li>physical activity that is realistic rather than extreme,</li>
                  <li>and check-ins that help prevent side effects or regain.</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="why-compare" heading="Why Newry residents compare so many options">
                <p className={p}>
                  People in Newry are not really looking for a single product. They are looking for access, confidence, and a provider they can trust. That is why searches often include names like Wegovy, Mounjaro, Saxenda, and &quot;private weight loss clinic.&quot; Those terms signal different needs, not just different brands.
                </p>

                <p className={p}>In Northern Ireland, people also have to think about:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>whether a treatment is available through the NHS,</li>
                  <li>whether private prescribing is legal and properly supervised,</li>
                  <li>whether a local or online provider can follow up safely,</li>
                  <li>and whether the medication can be supplied consistently.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That practical side is easy to ignore when a website is focused only on results before and after photos. But if you live in Newry, access is part of the treatment itself. A drug that works well but is hard to refill, poorly monitored, or sold through a questionable source is not a good option. Our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>{" "}
                  explains what to check before paying.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP-1 medicines and how they work">
                <p className={p}>
                  GLP-1 medicines are one of the main reasons modern weight management has changed so much. They are not magic, and they are not suitable for everyone. Still, for eligible patients, they can make a major difference.
                </p>

                <p className={p}>These medicines work partly by:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>reducing appetite,</li>
                  <li>slowing stomach emptying,</li>
                  <li>helping people feel full sooner,</li>
                  <li>and making it easier to eat less without constant hunger.</li>
                </ul>

                <p className={p}>The best-known names are:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>
                    <Link className={linkCls} href="/what-is-wegovy">
                      Wegovy
                    </Link>
                    , which contains semaglutide,
                  </li>
                  <li>
                    <Link className={linkCls} href="/what-is-mounjaro">
                      Mounjaro
                    </Link>
                    , which contains tirzepatide,
                  </li>
                  <li>
                    <Link className={linkCls} href="/what-is-saxenda">
                      Saxenda
                    </Link>
                    , which contains liraglutide.
                  </li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  They are similar in purpose, but not identical in how they work or how they are dosed. Some people tolerate one better than another. Some respond more strongly to one medicine. A clinician may consider factors such as BMI, diabetes risk, previous side effects, and personal preference before deciding. Compare the main options in{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    Mounjaro versus Wegovy versus Saxenda
                  </Link>
                  .
                </p>

                <p className={p}>
                  A useful way to think about them is this: they may support weight loss, but they do not replace the work of food choices, sleep, movement, and follow-up. They lower the friction. They do not remove the need for a plan.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="most-effective" heading="What is often the most effective option?">
                <p className={p}>
                  If by &quot;most effective&quot; you mean the treatment that tends to produce the largest average weight loss in studies, newer GLP-1 and dual-action medicines often lead the discussion. In general, tirzepatide and semaglutide class treatments have shown strong outcomes in clinical trials compared with older approaches.
                </p>

                <p className={p}>
                  But effective does not always mean best for a specific person in Newry.
                </p>

                <p className={p}>A treatment could be highly effective and still be a poor fit if:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>you are pregnant or planning pregnancy,</li>
                  <li>you have a history of pancreatitis or certain thyroid conditions,</li>
                  <li>you cannot tolerate nausea,</li>
                  <li>your follow-up access is weak,</li>
                  <li>or your BMI does not meet the prescribing threshold.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  So the &quot;best&quot; treatment is usually the one that balances efficacy with safety and continuity. That is more honest than chasing the most powerful medicine on paper.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs" heading="NHS routes in Northern Ireland">
                <p className={p}>
                  For many people, the NHS route is still the right first stop. That is especially true if you want a medically grounded approach and do not want to pay private pricing from the start.
                </p>

                <p className={p}>NHS pathways may include:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>GP assessment,</li>
                  <li>referral to a weight management service,</li>
                  <li>dietitian support,</li>
                  <li>behavioural advice,</li>
                  <li>and, in some cases, medication if you meet the criteria.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  The trade-off is time. NHS services can be excellent, but access is not always quick. You may need to show that you have tried lifestyle changes first. Some people find that frustrating. Still, it is not pointless. Structured support can help you identify the reasons weight gain keeps happening, especially if stress, sleep, antidepressants, or family routines are part of the picture.
                </p>

                <p className={p}>For someone in Newry, the NHS route may make sense if:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>you want lower cost,</li>
                  <li>you prefer a slower but monitored process,</li>
                  <li>or you have underlying conditions that need broader review.</li>
                </ul>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private" heading="Private treatment in Newry">
                <p className={p}>
                  Private care is often where people go when they want speed, convenience, or a specific medicine. That does not automatically make it better, but it does change the experience.
                </p>

                <p className={p}>Private treatment may offer:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>faster initial assessment,</li>
                  <li>quicker access to GLP-1 prescriptions if eligible,</li>
                  <li>remote follow-up,</li>
                  <li>home delivery of medication,</li>
                  <li>and more flexible appointment times.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That convenience is real. So is the responsibility. A good private provider should still check your medical history, ask about current medicines, explain side effects, and tell you when a treatment is not appropriate. If a provider seems too eager to prescribe without proper screening, that is a warning sign.
                </p>

                <p className={p}>
                  In other words, private does not mean casual. It should still feel clinical, structured, and clear.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="saxenda-cost" heading="How much does Saxenda cost in Newry?">
                <p className={p}>
                  People often ask about Saxenda because it is still a well-known option and sometimes appears as a first step in weight loss prescribing. The price can vary a lot depending on:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>the pharmacy,</li>
                  <li>the prescriber,</li>
                  <li>whether consultation fees are included,</li>
                  <li>how many pens are needed,</li>
                  <li>and whether follow-up is bundled into the monthly total.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Because Saxenda is a daily injection, the cost can feel different from weekly options. Some users prefer the simplicity of a weekly medicine like Wegovy or Mounjaro. Others may be more comfortable with Saxenda because they want a slower, more familiar starting point.
                </p>

                <p className={p}>
                  A useful rule: do not compare the sticker price alone. Compare the total monthly cost, including review fees, delivery, and repeat prescriptions. That gives a far clearer picture of what you will actually spend. Use our{" "}
                  <Link className={linkCls} href="/saxenda-price-comparison">
                    Saxenda price comparison
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  pages for UK-wide pricing context.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="ozempic-gp" heading="Will my GP prescribe Ozempic in Northern Ireland?">
                <p className={p}>
                  This is one of the most common questions, and the answer is: sometimes, but not simply because someone asks for it.
                </p>

                <p className={p}>
                  Ozempic is mainly a diabetes medicine, though it contains semaglutide, the same active ingredient class that appears in weight loss treatment discussions. In practice, a GP will usually follow local prescribing rules, medical need, and national guidance. A patient asking for Ozempic specifically for weight loss may not receive it unless there is a clear clinical justification and the local system supports it.
                </p>

                <p className={p}>
                  It is also important not to assume that Ozempic and Wegovy are interchangeable in access terms. They are related, but prescribing pathways can differ. A GP may be willing to discuss weight management, but that does not guarantee the exact brand a patient had in mind.
                </p>

                <p className={p}>If your goal is weight loss, the more useful conversation is usually about:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>your BMI,</li>
                  <li>health risks,</li>
                  <li>eligibility,</li>
                  <li>and which approved treatment is most appropriate.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That is a much stronger starting point than asking for a brand name alone. Read{" "}
                  <Link className={linkCls} href="/blog/mounjaro-vs-ozempic-smart-comparisons-for-better-results">
                    Mounjaro versus Ozempic
                  </Link>{" "}
                  for a plain-English comparison.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="celebrity" heading="What Kelly Clarkson's weight loss really tells us">
                <p className={p}>
                  Kelly Clarkson&apos;s rapid weight loss gets searched constantly because people want a real-world example. The problem is that celebrity stories are often incomplete. Public figures may use a mix of medical treatment, nutrition changes, activity, and professional support. They may also keep some details private.
                </p>

                <p className={p}>
                  So what can you learn from that? Mainly this: fast visible change usually does not come from one factor alone. It is more likely the result of multiple interventions happening together. A medicine may help. So might better eating patterns, regular movement, and a schedule that is easier to follow.
                </p>

                <p className={p}>
                  That is the part people should pay attention to. The celebrity headline is less useful than the underlying pattern. Quick change is usually supported change, not random change.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="trustworthy" heading="What makes a provider trustworthy">
                <p className={p}>
                  If you are comparing weight loss options in Newry, trust matters as much as price. A provider should feel measurable, not vague.
                </p>

                <p className={p}>Look for signs like:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>a named prescriber or clinician,</li>
                  <li>clear medical screening,</li>
                  <li>registered pharmacy information,</li>
                  <li>explanation of side effects,</li>
                  <li>guidance for missed doses,</li>
                  <li>and a realistic plan for follow-up.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  A trustworthy provider should also tell you when treatment is not appropriate. That is often the strongest sign of professionalism. Anyone promising a dramatic transformation with no assessment should be treated cautiously.
                </p>

                <p className={p}>
                  The same applies whether you are dealing with an online clinic or a local practice. Good medicine still looks like medicine.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lifestyle" heading="Lifestyle still matters more than people admit">
                <p className={p}>
                  Even the best weight loss treatment in Newry will usually work better when lifestyle support is included. That does not mean you need a perfect diet or a brutal gym routine. It means the basics matter.
                </p>

                <p className={p}>Useful habits include:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>eating enough protein,</li>
                  <li>keeping high-fiber foods in the diet,</li>
                  <li>reducing liquid calories,</li>
                  <li>walking more often,</li>
                  <li>and sleeping properly.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  You do not need to overhaul everything in one week. In fact, trying to do too much often backfires. A smaller, steadier plan is easier to keep. That is boring advice, but it is usually the advice that survives real life. If you use medication, the{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>{" "}
                  can help structure meals.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Common side effects and limits">
                <p className={p}>
                  Weight loss medicines can be helpful, but they are not side-effect free. Nausea is common, especially when doses go up. Some people also notice bloating, constipation, reflux, or reduced appetite that feels too strong.
                </p>

                <p className={p}>
                  This is one reason gradual titration matters. Dose increases are not there to stretch treatment artificially. They are there to improve tolerability. That may sound like a small detail, but it is one of the biggest reasons some people stay on treatment while others stop early.
                </p>

                <p className={p}>
                  There are also situations where these medicines may not be suitable. Pregnancy, certain digestive issues, or a history of specific medical conditions may change the decision entirely. That is why screening is not a formality. It is part of the treatment. Read our{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-side-effects-uk">
                    Mounjaro side effects UK
                  </Link>{" "}
                  guide for practical context.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="plan" heading="What a good plan in Newry might look like">
                <p className={p}>
                  A realistic weight loss plan in Newry usually has three parts.
                </p>

                <p className={p}>
                  First, assessment. That includes BMI, medical history, current medication, and previous attempts.
                </p>

                <p className={p}>
                  Second, treatment choice. That might be NHS-based support, private medication, or a mix of both if appropriate.
                </p>

                <p className={p}>
                  Third, follow-up. This is the part people underestimate. A treatment only works well if someone keeps checking whether it is working, whether side effects are manageable, and whether the plan still fits your life.
                </p>

                <p className={p}>
                  The ideal plan is not the most dramatic one. It is the one you can actually carry through without confusion. Start with the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  if you need a simple preparation step before a clinical conversation.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local" heading="Local factors that matter in Newry">
                <p className={p}>
                  Newry residents may face the same issues seen across Northern Ireland, but with local differences in access and routine. Travel time, work schedules, family commitments, and pharmacy availability can all shape the decision.
                </p>

                <p className={p}>
                  If you live outside the town centre or rely on courier delivery, supply consistency matters more than it may in a larger city. If you work shifts, weekly injections may be easier than daily routines. If you already know your GP practice is slow to respond, private access may feel more practical. These are not trivial details. They shape whether a treatment is sustainable.
                </p>

                <p className={p}>
                  That is why generic weight loss content often feels unhelpful. It talks about chemistry, but not logistics. Yet logistics are part of health care.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="questions" heading="What to ask before starting any treatment">
                <p className={p}>Before you begin, ask:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Is this medicine approved for weight loss?</li>
                  <li>Am I eligible based on my health profile?</li>
                  <li>What side effects should I expect?</li>
                  <li>How will dose increases work?</li>
                  <li>What happens if I miss a dose?</li>
                  <li>Who reviews me if something goes wrong?</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Those questions do not sound dramatic, but they are exactly the ones that keep people safer.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  External links are kept minimal on this page to avoid duplicating other location pages. For a national reference point, use NICE guidance below, then return to Health Wise for comparisons, medicine explainers, and provider safety checks.
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
                  Health Wise compares treatment routes, pharmacies, and practical next steps. We do not prescribe or dispense medication. A registered clinician must decide whether any treatment is appropriate for your health profile.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="next-steps" heading="Practical next steps (UK wide, including Newry)">
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare treatment categories on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      best weight loss treatments in the UK
                    </Link>
                    .
                  </li>
                  <li>
                    Compare injections on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      Mounjaro versus Wegovy versus Saxenda
                    </Link>
                    .
                  </li>
                  <li>
                    Check seller standards using{" "}
                    <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                      how we verify UK pharmacies
                    </Link>
                    .
                  </li>
                </ol>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="disclaimer" heading="Disclaimer">
                <p className={p}>
                  This article is informational and not medical advice. Speak to a GP, pharmacist prescriber, or other qualified clinician before starting, stopping, or changing treatment.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="faq" heading="FAQ">
                <div className="space-y-6">
                  {faq.map((item) => (
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
                  The best weight loss treatment in Newry is not the one with the loudest headline. It is the one that matches your medical needs, is properly supervised, and fits into real life without constant confusion. For many people, that means a clinically approved GLP-1 medicine plus lifestyle support. For others, it means starting with NHS pathways or using private care after a proper assessment.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  If you want the strongest result, focus on safety, access, and follow-up first. That is usually where good outcomes start.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-belfast">
                    Belfast
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-lisburn">
                    Lisburn
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-londonderry">
                    Londonderry
                  </Link>
                  .
                </p>
              </GuideSection>
            </article>

            <div className="mt-12">
              <GuideSharePanel shareUrl={shareUrl} title={PAGE_TITLE} />
            </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
