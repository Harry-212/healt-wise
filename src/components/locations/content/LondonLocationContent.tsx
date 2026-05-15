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
  "Best Weight Loss Treatment London: What Actually Works, Who It Suits, and How to Choose Safely";

export default function LondonLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Why best weight loss treatment in ${name} is personal` },
      { id: "landscape", label: "London's weight loss landscape" },
      { id: "works", label: "What usually works best" },
      { id: "injections", label: "Medical weight loss injections in London" },
      { id: "balloons", label: "Gastric balloons and bands" },
      { id: "multi", label: "Multidisciplinary programmes" },
      { id: "clinic", label: "Choosing a clinic in London" },
      { id: "timelines", label: "What timelines are realistic" },
      { id: "different-people", label: 'What about the "best" option for different people' },
      { id: "myths", label: "Weight loss myths people still believe" },
      { id: "habits", label: "How food, sleep, and stress affect results" },
      { id: "compare-safe", label: "How to compare options safely" },
      { id: "search-intent", label: "Why London search intent is different" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps (UK wide, including London)" },
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
          {toc.length > 0 ? <GuideTocSidebar key="uk-loc-toc-london" toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection darkMode={darkMode} id="intro" heading={`Why best weight loss treatment in ${name} is personal`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  AI Overview: The best weight loss treatment in London is usually not one single option, but a structured plan that may combine medical weight loss injections such as Wegovy or Mounjaro, clinician led nutrition support, behaviour change, and, for some people, procedures like gastric balloons or surgery. The right choice depends on BMI, health conditions, previous weight loss attempts, access to a qualified prescriber, and how much supervision you need for safe, sustainable results.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  London is full of weight loss options, and that is exactly why the decision can feel messy. Some people want a quick answer, others need a medically supervised plan, and many are simply tired of diets that work for two weeks and then fall apart. The truth is a little less glamorous than the adverts suggest: the best weight loss treatment in London is usually the one that matches your health profile, your budget, and your ability to stick with it for months rather than days.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Start comparisons on{" "}
                  <Link className={linkCls} href="/compare/best-weight-loss-treatments-uk">
                    best weight loss treatments in the UK
                  </Link>
                  , then read{" "}
                  <Link className={linkCls} href="/editorial-policy">
                    editorial policy
                  </Link>{" "}
                  so marketing claims sit next to how we review providers.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="landscape" heading="London's weight loss landscape">
                <p className={p}>
                  London is unusual because it offers almost every type of weight management approach in one city. You can find private clinics, hospital based obesity services, dietitian led programmes, non surgical procedures, and prescription only medications all within the same borough or travel radius. That range is useful, but it can also create confusion, especially when every provider claims to have the best treatment.
                </p>

                <p className={p}>
                  For a searcher, the main question is not just what works? It is also what is appropriate for me? Someone with a BMI above 35 and related health concerns may need something very different from someone who wants to lose 6 to 8 kg and improve energy. London&apos;s size also matters in practical terms. Waiting times, travel time, parking, appointment access, and whether follow up happens in person or online can all shape the experience more than people expect.
                </p>

                <p className={p}>
                  From an evidence point of view, weight loss treatments tend to fall into a few broad groups. There are lifestyle based programmes, medical weight loss injections, specialist weight management clinics, endoscopic options like gastric balloons, and surgical approaches for people with severe obesity or significant comorbidities. The right pathway usually depends on whether the goal is mild fat loss, moderate clinical weight loss, or long term obesity management.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="works" heading="What usually works best">
                <p className={p}>
                  If you want the short answer, the most successful weight loss treatments are the ones that combine several things at once. A medication alone may reduce appetite, but if eating habits, sleep, stress, and physical activity are ignored, results may be smaller or less durable than expected. On the other hand, lifestyle advice alone may help, but some people struggle to maintain enough calorie control without medical support.
                </p>

                <p className={p}>
                  In London, the strongest results often come from multidisciplinary weight management programmes. That means the person is not just handed a diet sheet. They may see a clinician, a dietitian, and sometimes a psychologist or physical activity specialist. This matters because weight gain is rarely caused by one thing. It may involve shift work, stress eating, insulin resistance, menopause, medication side effects, low activity, or years of repeated dieting.
                </p>

                <p className={p}>A useful way to think about it is this:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Lifestyle programmes are often the first step.</li>
                  <li>Medication based treatment may suit people who need extra appetite control.</li>
                  <li>Procedures may help when obesity is more severe or when other methods have not worked.</li>
                  <li>Surgery is usually reserved for specific clinical cases and is not the default answer.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That is why a serious clinic in London will usually assess BMI, medical history, blood pressure, diabetes risk, eating patterns, and previous attempts before suggesting anything. Screen discussion points with the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  before appointments, not as a diagnosis.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="injections" heading="Medical weight loss injections in London">
                <p className={p}>
                  Medical weight loss injections are one of the most searched options in London right now, and for good reason. Medicines such as Wegovy (semaglutide) and Mounjaro (tirzepatide) can reduce appetite and help people eat less without feeling constantly hungry. That does not mean they are magic. They are still medicines, not shortcuts.
                </p>

                <p className={p}>
                  These treatments are often discussed because they can produce meaningful weight loss for suitable patients when they are used correctly and monitored properly. They may be particularly helpful for people who have obesity, weight related health conditions, or repeated difficulty sustaining weight loss through diet alone. However, they are not appropriate for everyone, and they are not designed to replace sensible eating or long term follow up.
                </p>

                <p className={p}>A London clinic that uses these medicines responsibly should usually explain:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>who is eligible,</li>
                  <li>what BMI thresholds apply,</li>
                  <li>whether there are any exclusions,</li>
                  <li>how dose escalation works,</li>
                  <li>what side effects to expect,</li>
                  <li>and what happens if the medicine is not tolerated.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That last point matters more than people realise. Side effects such as nausea, fullness, constipation, reflux, and reduced appetite can be manageable, but they should be discussed properly. If a provider glosses over them, that is a warning sign. A legitimate weight management service should also talk about pregnancy planning, pancreatitis history, gallbladder risk, and whether other medicines might interact with treatment.
                </p>

                <p className={p}>
                  The most important nuance is this: these injections may help reduce body weight, but they still work best inside a broader plan. Without protein intake, hydration, sleep, and movement, results may plateau or feel harder to maintain. Read{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/compare/wegovy-vs-mounjaro">
                    Wegovy versus Mounjaro
                  </Link>
                  , and{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-side-effects-uk">
                    Mounjaro side effects UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="balloons" heading="Gastric balloons and bands">
                <p className={p}>
                  For people who want a non surgical but more procedural option, gastric balloons are sometimes part of the conversation in London. A balloon is placed temporarily in the stomach to help create fullness and reduce meal size. It may suit people who need a structured intervention but are not ready for surgery.
                </p>

                <p className={p}>
                  A gastric band is a different matter and is much less commonly promoted now than it once was. In modern practice, banding has fallen out of favour in many settings because long term results can be variable and complications may occur. Some searchers still type it in because it remains part of the general weight loss vocabulary, but it is not always the best contemporary option.
                </p>

                <p className={p}>
                  The value of a balloon is that it can act as a short term reset, particularly when paired with dietitian support. The limitation is obvious: if the person does not change habits during the treatment window, weight regain may follow. That is not a failure of the device itself so much as a reminder that obesity management is behavioural as well as mechanical.
                </p>

                <p className={p}>
                  London clinics that offer procedural options should explain duration, removal, expected weight loss range, possible discomfort, reflux symptoms, and what lifestyle support is built around the procedure. If they only talk about fast results, the patient should probably slow down.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="multi" heading="Multidisciplinary programmes">
                <p className={p}>
                  This is where some of the strongest long term outcomes often come from. A multidisciplinary programme may include:
                </p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>medical assessment,</li>
                  <li>nutrition planning,</li>
                  <li>behaviour change support,</li>
                  <li>exercise guidance,</li>
                  <li>and regular progress reviews.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  These programmes are helpful because they reduce the chance that weight loss becomes a lonely, unsustainable project. In a city like London, where schedules are crowded and routines are fragmented, a plan that builds accountability can make a real difference. It is not always the most exciting option, but it is often the most durable.
                </p>

                <p className={p}>
                  A good programme may also help people who have tried and failed many times. That pattern often produces shame, and shame tends to make adherence worse. When a service handles that well, the patient is more likely to stay engaged. That is part of E-E-A-T in a practical sense: expertise is not just about prescribing the right medicine, but about understanding what makes people stop following a plan.
                </p>

                <p className={p}>
                  In many cases, the best path is not injections or lifestyle. It is injections plus lifestyle, or procedure plus dietitian support, or medical care plus long term behavioural change. London has enough providers to make this combination possible, but not every provider will offer it in a balanced way. Pair programmes with{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-nutrition-guide-uk">
                    Mounjaro nutrition guide UK
                  </Link>{" "}
                  style meal structure when GLP 1 medicines enter the plan.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="clinic" heading="Choosing a clinic in London">
                <p className={p}>
                  The clinic question matters because quality varies. In London, a provider should not just advertise weight loss. It should show medical accountability, transparent assessment, clear follow up, and realistic expectations.
                </p>

                <p className={p}>A sensible checklist includes:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>named clinicians,</li>
                  <li>proper consultation before prescribing,</li>
                  <li>clear eligibility criteria,</li>
                  <li>follow up support,</li>
                  <li>side effect management,</li>
                  <li>and registered premises or regulated supply where relevant.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  You should also look at whether the clinic appears to push one treatment no matter what. That is often a sign that commercial incentives are doing the talking. A more trustworthy clinic will explain why one option might suit a person better than another. For example, a patient with a history of reflux may need a different approach from someone who is mainly struggling with appetite and snacking.
                </p>

                <p className={p}>
                  London&apos;s advantage is choice, but choice only helps if it is informed. A provider that explains why a treatment may not work for you is often more credible than one that promises dramatic results for everyone. Verify regulation using our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="timelines" heading="What timelines are realistic">
                <p className={p}>
                  This is one of the most useful questions, and one of the most abused in search results. People want to know how fast weight loss can happen, but the answer depends on the amount to lose, the method used, and whether the goal is short term loss or long term maintenance.
                </p>

                <p className={p}>
                  A sensible pace for many adults is roughly 0.5 to 1 kg per week under proper supervision, although some people will lose faster at the start because of water weight or medication related appetite reduction. That means 5 kg might take around 5 to 10 weeks for many people, while 20 kg may take several months. Faster is not always better, especially if it involves excessive restriction or dehydration.
                </p>

                <p className={p}>
                  Claims about losing 40 kg in 5 months should be treated carefully. It may be possible in exceptional cases under specialist supervision, but it is not a standard goal and it should not be framed as normal. If weight loss is very rapid, the risk of muscle loss, nutrient deficiencies, gallstones, fatigue, and rebound regain can increase.
                </p>

                <p className={p}>
                  A better question than how fast can I lose it? is what pace can I sustain without wrecking my health? That is a far better predictor of long term success. If injections plateau, read{" "}
                  <Link className={linkCls} href="/helpful-guides/mounjaro-weight-loss-plateau">
                    weight loss plateau guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="different-people"
                heading='What about the "best" option for different people'
              >
                <p className={p}>
                  Different people need different tools. That is the part most adverts skip.
                </p>

                <p className={p}>
                  For someone with a lower BMI who wants modest fat loss, a structured nutrition and activity programme may be enough. For someone with obesity and strong hunger signals, a GLP 1 medication may be the missing piece. For someone with more severe obesity, metabolic complications, or years of failed attempts, a specialist pathway including endoscopic or surgical options may be more appropriate.
                </p>

                <p className={p}>
                  That is why the phrase best weight loss treatment London is a useful search term but a weak medical question on its own. The right follow up question is best for whom? Once that is clear, the options become easier to compare. Model budgets on{" "}
                  <Link className={linkCls} href="/mounjaro-price-comparison">
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/wegovy-price-comparison">
                    Wegovy price comparison
                  </Link>
                  .
                </p>

                <p className={p}>A smart London patient should ask:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>What outcome is realistic in 3 months?</li>
                  <li>What about 12 months?</li>
                  <li>What happens if I stop the treatment?</li>
                  <li>What monitoring is included?</li>
                  <li>What support exists if I plateau?</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Those questions usually separate serious providers from superficial ones.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="myths" heading="Weight loss myths people still believe">
                <p className={p}>
                  London search behaviour shows people still want simple hacks. That is understandable. Busy city life encourages shortcuts. But a few popular ideas need context.
                </p>

                <p className={subh}>The 7 second morning trick</p>
                <p className={p}>
                  There is no credible evidence that a single 7 second morning trick can drive meaningful fat loss on its own. A morning routine may help with consistency, but weight loss still comes from calorie balance, movement, and sustained behaviour change. If a habit makes a person more structured, it can be useful. If it is sold as a miracle, it is probably not worth much.
                </p>

                <p className={subh}>Superfoods for belly fat</p>
                <p className={p}>
                  No food burns belly fat by itself. Some foods may help with satiety, stable blood sugar, or better diet quality, but spot reduction is not how human fat loss works. Still, some foods are genuinely helpful in a fat loss plan because they make it easier to stay in a calorie deficit.
                </p>

                <p className={p}>Examples include:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Greek yogurt,</li>
                  <li>eggs,</li>
                  <li>beans and lentils,</li>
                  <li>oats,</li>
                  <li>salmon,</li>
                  <li>leafy greens,</li>
                  <li>berries,</li>
                  <li>and high fibre vegetables.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  These are not magic foods. They are just sensible foods that support fullness and nutrition.
                </p>

                <p className={subh}>Fast weight loss always means success</p>
                <p className={p}>
                  Not necessarily. Sometimes fast loss is mostly water. Sometimes it is muscle. Sometimes it is the beginning of an unsustainable cycle. A good London clinic should talk about body composition, not only the number on the scale.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="habits" heading="How food, sleep, and stress affect results">
                <p className={p}>
                  It is easy to overfocus on treatments and underfocus on daily habits. Yet for many people, the real bottlenecks are sleep debt, stress, and convenience eating. London life can be intense. Long commutes, late dinners, social drinking, and irregular work patterns all make weight management harder.
                </p>

                <p className={p}>
                  Sleep is especially underrated. Poor sleep can increase hunger and reduce self control. Stress can drive snacking, grazing, or reward eating after a hard day. If someone is only using medication without addressing those patterns, they may still lose weight, but the process could be harder than it needs to be.
                </p>

                <p className={p}>
                  This is why the best programmes in London often include behavioural support. That may sound less glamorous than a prescription, but it is often the difference between temporary loss and sustainable change.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="compare-safe" heading="How to compare options safely">
                <p className={p}>When comparing London providers, it helps to think in layers.</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>First, check whether the treatment is medically appropriate.</li>
                  <li>Second, check whether the provider is properly regulated.</li>
                  <li>Third, check whether there is support after the first prescription or procedure.</li>
                  <li>Fourth, check whether the expected outcome is realistic.</li>
                  <li>Fifth, check the total cost, not just the headline price.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  A low monthly price can become expensive if reviews, follow up, and delivery are extra. A high price does not guarantee quality either. The best signal is usually the quality of the consultation and the clarity of the safety information.
                </p>

                <p className={p}>
                  If a provider can explain why one option may suit your BMI, health history, and goals better than another, that is a strong sign. If they only offer one product and call it the answer for everyone, that is a weak one. Scan risks with{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="search-intent" heading="Why London search intent is different">
                <p className={p}>
                  People searching in London are often comparing private and specialist options, not just asking for general advice. That means the content has to do more than define obesity or repeat generic diet tips. It has to answer the practical question: what are the real treatment pathways in a city like London?
                </p>

                <p className={p}>
                  That is why a strong page for this keyword should cover medical weight loss injections, multidisciplinary support, gastric balloons and procedural options, realistic timelines, clinic choice, and safety. It should also sound like it knows the difference between marketing language and clinical reality. That balance is what helps content feel useful to both users and search engines. Read how we judge evidence in{" "}
                  <Link className={linkCls} href="/methodology">
                    methodology
                  </Link>
                  .
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
                heading="Practical next steps (UK wide, including London)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare brands on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      Mounjaro versus Wegovy versus Saxenda
                    </Link>
                    .
                  </li>
                  <li>
                    Use the{" "}
                    <Link className={linkCls} href="/tools/bmi-calculator">
                      BMI calculator
                    </Link>{" "}
                    before booking paid consults.
                  </li>
                  <li>
                    If your GP mentions NHS pacing, read{" "}
                    <Link className={linkCls} href="/helpful-guides/mounjaro-prescription-timeline-uk">
                      Mounjaro prescription timeline UK
                    </Link>
                    .
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
                  The best weight loss treatment in London is rarely the flashiest one. It is usually the option that combines medical credibility, realistic expectations, and enough support to keep going after the first few weeks. For some people, that means Wegovy or Mounjaro under proper supervision. For others, it means a structured programme, a gastric balloon, or a longer term behavioural plan. The important part is not chasing the loudest claim. It is choosing the safest, most sustainable route for your body, your routine, and your goals.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby reads:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-westminster">
                    Westminster
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-reading">
                    Reading
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
