"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import { ArrowLeft, Moon, Sun, Calendar, Clock } from "lucide-react";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import { GuideSection } from "@/components/guide/GuideLayout";
import { siteOrigin } from "@/lib/seo/site-origin";

const TOC = [
  { id: "basics", label: "Discover Mounjaro basics" },
  { id: "effect", label: "Mounjaro’s weight loss effect" },
  { id: "progression", label: "Navigate the dosage progression" },
  { id: "factors", label: "Examine dosage factors" },
  { id: "side-effects", label: "Address potential side effects" },
  { id: "dosing-plan", label: "Build a clear dosing plan" },
  { id: "lasting", label: "Take steps for lasting results" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "conclusion", label: "Conclusion" },
];

const HERO_IMAGE = "https://i.ibb.co.com/N28zDM17/image.png";

function DosageScheduleTable({ darkMode }: { darkMode: boolean }) {
  const cell = darkMode ? "border-slate-700 px-3 py-2 text-slate-300" : "border-slate-200 px-3 py-2 text-slate-700";
  const head = darkMode ? "border-slate-700 bg-slate-900 text-slate-200" : "border-slate-200 bg-slate-50 text-slate-900";
  const wrap = darkMode ? "border-slate-700" : "border-slate-200/80";
  return (
    <div
      className={`my-6 w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-xl border [-webkit-overflow-scrolling:touch] ${wrap}`}
    >
      <table className="w-full min-w-[520px] border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr className={head}>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Dosage (weekly)</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Typical duration</th>
            <th className={`border-b px-3 py-2 font-semibold ${cell}`}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["2.5 mg", "4 weeks", "Starter dose; assess tolerance"],
            ["5 mg", "4 weeks", "Stronger appetite control"],
            ["7.5 mg", "4 weeks", "Noticeable loss often accelerates"],
            ["10 mg", "4 weeks", "Moderate–high dose for many"],
            ["12.5 mg", "4 weeks", "Further benefit; watch side effects"],
            ["15 mg", "Ongoing", "Highest recommended; monitor closely"],
          ].map(([dose, dur, note]) => (
            <tr key={dose}>
              <td className={`border-b ${cell}`}>{dose}</td>
              <td className={`border-b ${cell}`}>{dur}</td>
              <td className={`border-b ${cell}`}>{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        className={`px-3 py-2 text-xs ${darkMode ? "border-t border-slate-700 text-slate-500" : "border-t border-slate-200 text-slate-500"}`}
      >
        Illustrative schedule only—your prescriber will personalise titration and intervals.
      </p>
    </div>
  );
}

export default function ArticleClient() {
  const [darkMode, setDarkMode] = useState(false);
  const shareUrl = `${siteOrigin()}/blog/the-truth-about-mounjaro-dosage-for-weight-loss-effectiveness`;

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"}`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        {/* TOP NAVIGATION HEADER */}
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
            Back to News
          </Link>

          <div className="flex items-center gap-3">
            <Moon className={`h-4 w-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`} />
            <button
              type="button"
              onClick={toggleDarkMode}
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

        {/* HERO HEADER */}
        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            The Truth About Mounjaro Dosage for Weight Loss Effectiveness
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              15 Apr 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              12 min read
            </span>
          </div>

          <BlogArticleHeroImage src={HERO_IMAGE} alt="Mounjaro dosing and weight loss effectiveness" />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>

        {/* CONTENT SPLIT LAYOUT */}
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {/* LEFT: TOC */}
          {TOC.length > 0 && (
            <GuideTocSidebar key={TOC.map((t) => t.id).join("-")} toc={TOC} />
          )}

          {/* RIGHT: ARTICLE BODY */}
          <div className="min-w-0 flex-1 max-w-3xl">
            <article className={`space-y-8 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
              <p className="text-lg md:text-xl">
                Whether you have struggled with multiple diets or you are just beginning your weight loss journey, you
                may be curious about Mounjaro dosage for weight loss. Mounjaro (tirzepatide), originally approved for
                type 2 diabetes, has garnered significant attention for its off-label use in shedding pounds.
                Researchers have found that it can help reduce calorie intake, support your metabolism, and make it
                easier to lose weight. This guide unpacks what Mounjaro is, how it works, and how you can navigate its
                dosing schedule effectively.
              </p>
              <p>
                By the end, you will have the information you need to discuss potential options with your healthcare
                provider, use Mounjaro safely, and maximise the chance of real, lasting results.
              </p>

              <GuideSection darkMode={darkMode} id="basics" heading="Discover Mounjaro basics">
                <p>
                  Mounjaro is a weekly prescription injection that primarily addresses type 2 diabetes by improving
                  insulin sensitivity and regulating blood sugar. It contains tirzepatide, which acts on two key
                  incretin pathways. While officially licensed for diabetes, it is also commonly prescribed off-label
                  for weight loss because it targets appetite and food intake (Healthline).
                </p>
                <p>
                  Its dual action mimics both GIP and GLP-1, influencing appetite and digestion more strongly than many
                  single-hormone options—so you may feel full sooner and satisfied with smaller meals. Use for weight
                  management remains off-label; always speak with a medical professional to see if Mounjaro fits your
                  plan.
                </p>
                <p>
                  For broader context on outcomes and safety, see{" "}
                  <Link
                    href="/what-is-mounjaro"
                    className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                  >
                    what Mounjaro is and how it is used
                  </Link>
                  , our overview of{" "}
                  <Link
                    href="/blog/mounjaro-weight-loss-benefits-backed-by-science"
                    className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                  >
                    Mounjaro weight loss benefits
                  </Link>
                  , and{" "}
                  <Link
                    href="/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you"
                    className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                  >
                    whether Mounjaro is safe and right for you
                  </Link>
                  . Dosing and outcomes vary by person—the more you understand, the better you can partner with your
                  care team.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="effect" heading="Uncover Mounjaro’s weight loss effect">
                <p>
                  Effectiveness is tied to dual hormonal action on GIP and GLP-1 receptors, regulating blood sugar and
                  fullness. GLP-1 slows gastric emptying and signals satiety; GIP supports insulin release in a
                  glucose-dependent way (Healthline). Together they can lower calorie intake and make portions easier to
                  manage.
                </p>
                <p>
                  Many patients notice early changes within roughly weeks two to four—helpful if past progress felt slow.
                  For a deeper dive, read{" "}
                  <Link
                    href="/blog/does-mounjaro-really-work-for-weight-loss-find-out-here"
                    className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                  >
                    how Mounjaro works for weight loss
                  </Link>
                  .
                </p>
                <p>
                  Mounjaro is not a miracle fix. It works best with balanced eating and regular movement—walks, gym
                  sessions, or whatever you can sustain. If you plateau, your clinician can review dose, nutrition, and
                  activity rather than you pushing changes alone.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="progression" heading="Navigate the dosage progression">
                <p>
                  Dosing for weight loss usually follows a stepped titration: start low, then increase in small steps
                  about every four weeks so your digestive system can adapt and side effects stay manageable (ZAVA).
                </p>
                <p>
                  A common pattern starts at 2.5 mg weekly for four weeks, then 5 mg, then 7.5 mg, and so on, up to a
                  maximum of 15 mg. Higher tolerated doses are associated with greater average weight loss in trials—but
                  titration should never be rushed without medical oversight.
                </p>
                <DosageScheduleTable darkMode={darkMode} />
                <p>
                  Some people reach goals at 10 mg or 12.5 mg and stay there; others need the top dose. You might also
                  stay longer on a step if nausea or GI symptoms flare. Discuss every change with your prescriber,
                  especially if you have comorbidities or take other medicines.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="factors" heading="Examine dosage factors">
                <p>
                  No single plan fits everyone. Weight, age, conditions, and goals all shape response. If you have a
                  sensitive gut, your clinician may keep you on lower doses longer.
                </p>
                <p>
                  In a 72-week study, roughly{" "}
                  <strong className={darkMode ? "text-white" : "text-slate-900"}>15%</strong> body-weight reduction was
                  reported at 5 mg weekly, about <strong className={darkMode ? "text-white" : "text-slate-900"}>19.5%</strong>{" "}
                  at 10 mg, and about <strong className={darkMode ? "text-white" : "text-slate-900"}>20.9%</strong> at 15
                  mg (Forbes Health, summarising trial data). Higher dose can mean more loss on average—but skipping
                  steps can sharply increase side effects.
                </p>
                <p>
                  Consider daily life: intense nausea can disrupt work or caring for family. Sometimes a moderate dose
                  (e.g. 7.5–10 mg) delivers steady loss without wiping you out—even if you have a deadline like a wedding.
                </p>
                <p>
                  Plateaus are normal. Your doctor might adjust the dose, or you might tweak protein, training, or sleep.
                  For another angle on strengths and titration, see{" "}
                  <Link
                    href="/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust"
                    className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                  >
                    Mounjaro dosage for weight loss: facts you can trust
                  </Link>
                  .
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="side-effects" heading="Address potential side effects">
                <p>
                  GI symptoms—nausea, vomiting, diarrhoea—are common, especially after starting or stepping up (ZAVA).
                  Fullness can feel strong because emptying slows. Many effects ease after a few weeks on a stable dose,
                  which is why gradual titration matters.
                </p>
                <p>
                  If symptoms stay intense, your clinician may pause escalation or step back to a better-tolerated dose.
                  Rotate injection sites (abdomen, thigh, arm) weekly to reduce local reactions.
                </p>
                <p>
                  Hydration, balanced meals, and gentle activity support tolerance. Track how you feel and report
                  anything persistent.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="dosing-plan" heading="Build a clear dosing plan">
                <p>
                  Start from concrete goals—e.g. percentage weight change or steadier meal patterns—and align titration
                  timing with your prescriber. If you are nausea-prone, five- or six-week blocks instead of four may be
                  sensible.
                </p>
                <p>
                  Log weight, waist, energy, and appetite so plateaus show up as data, not guesswork. For typical
                  trajectories, browse{" "}
                  <Link
                    href="/what-is-mounjaro#weight-loss-results"
                    className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                  >
                    Mounjaro weight loss results
                  </Link>{" "}
                  and practical injection habits in{" "}
                  <Link
                    href="/helpful-guides/mounjaro-weight-loss-injection-uk"
                    className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                  >
                    Mounjaro weight loss injections (UK)
                  </Link>
                  .
                </p>
                <p>
                  Stack medication with meal planning, activity, and stress care—hormonal support multiplies when
                  lifestyle levers move too. Revisit nutrition and training as your weight changes.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="lasting" heading="Take steps for lasting results">
                <p>
                  After strong initial loss, evidence suggests many people regain weight if tirzepatide is stopped
                  without maintenance habits (Healthline). Long-term or maintenance dosing may be part of the picture for
                  some—not everyone needs 15 mg forever; some settle at a moderate dose while monitoring appetite and
                  weight.
                </p>
                <p>
                  In the UK, use only regulated supply routes. For comparing licensed providers and prices, use our{" "}
                  <Link
                    href="/mounjaro-price-comparison"
                    className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                  >
                    Mounjaro price comparison
                  </Link>{" "}
                  — Health Wise does not sell medicines.
                </p>
                <p>
                  Friends, family, or structured support can help you stay consistent. Watch for creeping cravings or
                  weight—small signals may mean a dose review or habit refresh, not “failure.”
                </p>
              </GuideSection>

              <section
                id="faq"
                className={`mt-16 border-t pt-10 ${darkMode ? "border-slate-800" : "border-slate-200"}`}
              >
                <h2 className={`mb-8 text-3xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      How does Mounjaro dosing usually increase for weight loss?
                    </h3>
                    <p>
                      Many pathways titrate every few weeks from a low start toward a maximum, with changes based on
                      tolerance, side effects, and goals—always under prescriber supervision.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Do higher Mounjaro doses always mean more weight loss?
                    </h3>
                    <p>
                      Trials often show greater average loss at higher tolerated doses, but individuals differ. Rushing
                      titration can worsen side effects; some people thrive on a moderate maintenance dose.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      What side effects are common when the dose goes up?
                    </h3>
                    <p>
                      Nausea, vomiting, diarrhoea, bloating, and reduced appetite are common, especially after increases.
                      Many improve with time; ongoing severe symptoms need medical review.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Can I stop Mounjaro once I reach my goal weight?
                    </h3>
                    <p>
                      Studies suggest regain is common after stopping without strong maintenance. Plan tapering,
                      possible maintenance dosing, and lifestyle with your clinician—do not stop suddenly on your own.
                    </p>
                  </div>
                  <div>
                    <h3 className={`mb-3 text-xl font-bold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      Is this article medical advice?
                    </h3>
                    <p>
                      No. Health Wise provides independent information. Dosing must be decided by a qualified prescriber
                      who knows your full history.
                    </p>
                  </div>
                </div>
              </section>

              <GuideSection darkMode={darkMode} id="conclusion" heading="Conclusion">
                <p>
                  Your Mounjaro dosage for weight loss should evolve with tolerance, side effects, and goals. The path
                  usually starts low and rises in careful steps while you track symptoms and progress. Staying in sync
                  with your clinician and combining medicine with sustainable habits gives you the best chance to achieve
                  and keep meaningful loss.
                </p>
                <p>
                  The schedules and study figures here are educational—they do not replace personalised advice. By
                  understanding titration, realistic dose–response patterns, and strategies to limit setbacks, you are
                  better placed to act with confidence. The next step is a conversation with your healthcare team and a
                  plan you can follow for the long term.
                </p>
              </GuideSection>

              <GuideSection darkMode={darkMode} id="references" heading="References">
                <ol className="list-decimal space-y-2 pl-5 text-sm">
                  <li>Healthline—overview of tirzepatide / Mounjaro mechanism and weight-related reporting.</li>
                  <li>ZAVA—patient-facing information on GLP-1 medicines and titration principles.</li>
                  <li>Forbes Health—summary of trial weight outcomes across Mounjaro dose strengths.</li>
                </ol>
              </GuideSection>
            </article>

            <div className="mt-10">
              <GuideSharePanel
                url={shareUrl}
                title="The Truth About Mounjaro Dosage for Weight Loss Effectiveness"
                description="Find the ideal mounjaro dosage for weight loss to maximise your results with clear, expert-backed guidance."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
