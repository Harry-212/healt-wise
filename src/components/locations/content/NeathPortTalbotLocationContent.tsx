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
  "Best Weight Loss Treatment Neath Port Talbot: What Actually Works and Who It Suits";

export default function NeathPortTalbotLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: `Best weight loss treatment in ${name}` },
      { id: "context", label: "Weight loss treatment in context" },
      { id: "local-search", label: "Why Neath Port Talbot residents search differently" },
      { id: "evidence", label: "What the strongest evidence points to" },
      { id: "glp1", label: "GLP-1 medicines and who they suit" },
      { id: "nhs-wales", label: "NHS support in Wales" },
      { id: "private", label: "Private treatment and what to check" },
      { id: "good-loss", label: "What good weight loss actually looks like" },
      { id: "twelve-week", label: "The 12-week plan idea" },
      { id: "333-rule", label: "The 3-3-3 rule for weight loss" },
      { id: "not-believe", label: "What not to believe" },
      { id: "decide", label: "How to decide what is right for you" },
      { id: "local-factors", label: "Local factors that can help" },
      { id: "sources", label: "Key guidance" },
      { id: "trust", label: "Why Health Wise is a comparator, not a prescriber" },
      { id: "next-steps", label: "Practical next steps" },
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
              <GuideSection darkMode={darkMode} id="intro" heading={`Best weight loss treatment ${name}: what actually works`}>
                <p className={`text-lg md:text-xl ${p}`}>
                  The most effective weight loss treatment in Neath Port Talbot usually combines medically prescribed GLP-1 medicines such as Wegovy or Mounjaro with NHS diet and lifestyle support, but eligibility depends on BMI, health conditions, and clinical review. For many people, the best path is not one single treatment but a staged plan: assessment, lifestyle changes, and, where appropriate, prescription medicine under supervision.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  Neath Port Talbot has the same basic reality as the rest of Wales: weight loss is not solved by postcode, but access to support can differ depending on local NHS pathways, waiting times, and whether someone is eligible for medication. That is why people searching for the best weight loss treatment Neath Port Talbot are usually trying to understand two things at once: what works, and what is realistically available. Compare the wider treatment routes on{" "}
                  <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                    best weight loss treatments in the UK
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="context" heading="Weight loss treatment in context">
                <p className={p}>
                  Weight loss treatment is not a single product. In practice, it usually means a combination of three things: lifestyle support, clinical assessment, and, for some people, prescription medication. The people most likely to benefit from a structured plan are those living with obesity, especially when there are related health issues such as type 2 diabetes, high blood pressure, fatty liver disease, sleep apnoea, or joint pain.
                </p>

                <p className={p}>
                  That matters because a lot of online content makes it sound like one injection will fix everything. It probably will not. GLP-1 medicines can help reduce appetite and improve fullness, but they work best when they are part of a wider plan that includes food habits, activity, sleep, and follow-up. In other words, the medicine may help the process, but it does not replace it. Read{" "}
                  <Link className={linkCls} href="/what-is-wegovy">
                    what Wegovy is
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/what-is-mounjaro">
                    what Mounjaro is
                  </Link>{" "}
                  for medicine basics.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local-search" heading="Why Neath Port Talbot residents search differently">
                <p className={p}>
                  People in Neath Port Talbot often search with a practical mindset. They want to know whether they can access something through the NHS, whether a private clinic is worth it, and how long results might take. That makes sense, because the best treatment on paper is not always the best treatment in real life.
                </p>

                <p className={p}>
                  Local access can shape the experience quite a bit. Waiting times, referral routes, and eligibility checks may vary across Welsh services, so two people with similar goals may end up taking different routes. One may be suitable for NHS lifestyle support first, while another may qualify for a GLP-1 prescription after clinical review.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="evidence" heading="What the strongest evidence points to">
                <p className={p}>
                  The most successful weight loss approach is usually the one a person can maintain. That sounds simple, but it is the part many plans fail to address. A short crash diet may produce fast scale loss, but it often does not hold.
                </p>

                <p className={p}>In clinical practice, the strongest outcomes usually come from:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>A calorie-controlled eating plan that is realistic.</li>
                  <li>Regular movement that fits the person&apos;s schedule.</li>
                  <li>Behavioural support, especially around hunger, stress, and routines.</li>
                  <li>Prescription medicine where clinically appropriate.</li>
                  <li>Ongoing monitoring rather than one-off advice.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  For many people, this combined model works better than trying to rely on exercise alone or on medication alone. It also tends to be safer than chasing dramatic short-term losses.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="glp1" heading="GLP-1 medicines and who they suit">
                <p className={p}>
                  GLP-1 medicines such as Wegovy and Mounjaro are often discussed because they can help reduce appetite and support meaningful weight loss. In general, they are considered for people with a higher BMI, especially when obesity-related conditions are also present. They are not typically first-line for everyone, and they are not automatically suitable just because someone wants to lose weight.
                </p>

                <p className={p}>The main point is eligibility. These medicines are usually prescribed after assessment, not as a casual repeat request. A clinician will normally consider:</p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>BMI.</li>
                  <li>Existing health conditions.</li>
                  <li>Previous attempts at weight loss.</li>
                  <li>Medical history.</li>
                  <li>Pregnancy plans or current pregnancy.</li>
                  <li>Risk factors such as pancreatitis or certain thyroid problems.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  That review matters because the safest treatment is not always the newest one. It is the one that fits the person&apos;s health profile. Use the{" "}
                  <Link className={linkCls} href="/tools/bmi-calculator">
                    BMI calculator
                  </Link>{" "}
                  as a preparation aid before a clinical conversation.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="nhs-wales" heading="NHS support in Wales">
                <p className={p}>
                  For people in Neath Port Talbot, NHS weight management support can be a sensible starting point. The NHS route may include dietary advice, structured lifestyle programmes, and referral to specialist services when appropriate. Some people will reach medication access through that route, while others may be advised to continue with non-drug support first.
                </p>

                <p className={p}>
                  The NHS approach can feel slower, but it is designed to be more cautious and more integrated. That can be a good thing, especially for people with complex health needs. If someone has diabetes, cardiovascular risk, or a history of weight cycling, supervised support may be more appropriate than a quick private purchase.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="private" heading="Private treatment and what to check">
                <p className={p}>
                  Private treatment may be faster, but it is not automatically better. A private clinic can be useful if it is properly regulated, medically accountable, and clear about follow-up. The issue is that some services focus on convenience first and clinical depth second.
                </p>

                <p className={p}>Before using a private clinic, it is wise to check whether:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>The prescriber is named.</li>
                  <li>The pharmacy is registered.</li>
                  <li>There is a clear review process.</li>
                  <li>Side effects are explained properly.</li>
                  <li>Dose titration is gradual.</li>
                  <li>The provider has a plan if treatment is not tolerated.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  If those details are vague, that is a warning sign. A good service should sound careful, not flashy. Verify sellers with our{" "}
                  <Link className={linkCls} href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
                    pharmacy verification guide
                  </Link>{" "}
                  and{" "}
                  <Link className={linkCls} href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe">
                    fake online pharmacy UK guide
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="good-loss" heading="What good weight loss actually looks like">
                <p className={p}>
                  A helpful way to think about weight loss is to ignore the hype and look for steady progress. For many people, a safe and realistic pace may be around 0.5 kg to 1 kg per week, though that can vary. Faster loss may happen early on, especially when water weight changes, but it should not be the main goal.
                </p>

                <p className={p}>What matters more is whether the plan improves health markers and can be maintained. That might include:</p>
                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Better blood sugar control.</li>
                  <li>Lower blood pressure.</li>
                  <li>Less breathlessness.</li>
                  <li>Improved energy.</li>
                  <li>Better sleep.</li>
                  <li>Less joint strain.</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  Those outcomes often matter more than the number on the scale alone.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="twelve-week" heading="The 12-week plan idea">
                <p className={p}>
                  A lot of people ask whether an NHS 12-week weight loss plan is free. In general, NHS lifestyle support and referral-based services may be free at the point of use, but the exact pathway depends on local criteria and service availability. If someone is referred into a structured programme, it is usually offered through the health service rather than paid for privately.
                </p>

                <p className={p}>
                  The main advantage of a 12-week plan is that it gives enough time to build habits instead of just collecting advice. Twelve weeks is long enough to notice patterns, test meals, and work out what actually fits daily life. It is also short enough that people can stay focused.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="333-rule" heading="The 3-3-3 rule for weight loss">
                <p className={p}>
                  People often ask about the 3-3-3 rule because it sounds simple and memorable. In weight loss discussions, it is usually used informally to mean a small set of daily habits done consistently, rather than a medical rule. Different versions exist, but the general idea is the same: repeat a few manageable behaviours until they become routine.
                </p>

                <p className={p}>
                  That can be useful, but it should not be mistaken for a complete treatment plan. A habit rule may help with structure, yet it does not replace calorie awareness, medical review, or long-term support. It is best seen as a practical tool, not a miracle method.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="not-believe" heading="What not to believe">
                <p className={p}>
                  Some claims around weight loss are too neat to be true. Any promise of rapid, effortless results should be treated with caution. Weight loss is influenced by appetite, hormones, sleep, stress, medicines, mobility, and environment. No single headline can cover all of that.
                </p>

                <p className={p}>
                  It is also worth being careful with content that suggests everyone can get the same medicine in the same way. That is not how clinical prescribing works. People differ, and that is exactly why assessment matters.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="decide" heading="How to decide what is right for you">
                <p className={p}>
                  If you live in Neath Port Talbot and want a sensible starting point, the decision usually comes down to three questions:
                </p>

                <ul className={`list-disc space-y-2 pl-6 ${p}`}>
                  <li>Do you need lifestyle support first?</li>
                  <li>Are you clinically eligible for prescription medicine?</li>
                  <li>Do you need NHS support, private support, or both?</li>
                </ul>

                <p className={`mt-4 ${p}`}>
                  For some people, the answer will be NHS first. For others, it may be a supervised private prescription with follow-up. And for some, it may be a slower route with no medication at all. The right answer depends on health status, goals, and access.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="local-factors" heading="Local factors that can help">
                <p className={p}>
                  Sometimes the basics make the biggest difference. Walking routes, local parks, shopping routines, and meal planning matter more than many people expect. If daily life makes exercise harder, the goal may need to be simpler: more steps, fewer convenience meals, and a more regular eating pattern.
                </p>

                <p className={p}>
                  That kind of approach sounds modest, but it can be effective. Weight loss often improves when the environment becomes easier to manage, not when willpower becomes endless.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="sources" heading="Key guidance">
                <p className={p}>
                  Outbound links stay minimal on this page to avoid duplicating other city pages. Use national guidance below, then return to Health Wise comparisons for pricing, medicine explainers, and safety checks.
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
                heading="Practical next steps (UK wide, including Neath Port Talbot)"
              >
                <ol className={`list-decimal space-y-2 pl-6 ${p}`}>
                  <li>
                    Compare treatment types on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      best weight loss treatments in the UK
                    </Link>
                    .
                  </li>
                  <li>
                    Compare GLP-1 options on{" "}
                    <Link className={linkCls} href="/compare/mounjaro-vs-wegovy-vs-saxenda">
                      Mounjaro versus Wegovy versus Saxenda
                    </Link>
                    .
                  </li>
                  <li>
                    If private treatment is involved, check timing and review expectations with{" "}
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
                  The best weight loss treatment in Neath Port Talbot is usually not a single product but a structured, medically sensible plan. For some people, that means NHS diet and lifestyle support first; for others, it may include GLP-1 medication such as Wegovy or Mounjaro if they meet the criteria.
                </p>

                <p className={`text-lg md:text-xl ${p}`}>
                  The useful question is not &quot;What is the fastest option?&quot; but &quot;What is the safest option that I can actually sustain?&quot; That shift in thinking usually leads to better results, fewer mistakes, and a treatment path that makes sense for real life in Wales.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="more-uk" heading="Other places in the UK">
                <p className={p}>
                  Browse the{" "}
                  <Link className={linkCls} href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}>
                    UK locations index
                  </Link>
                  . Nearby:{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-swansea">
                    Swansea
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-cardiff">
                    Cardiff
                  </Link>
                  ,{" "}
                  <Link className={linkCls} href="/blog/best-weight-loss-treatment-in-merthyr-tydfil">
                    Merthyr Tydfil
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
