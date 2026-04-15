"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import InternalLinks from "@/components/content/InternalLinks";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import {
  buildLocationFaq,
  nationCareContext,
  UK_LOCATION_SOURCES,
} from "@/lib/content/uk-location-article-data";
import {
  LOCATIONS_IN_UK_HUB_PATH,
  UK_WEIGHT_LOSS_FLAT_INDEX_PATH,
  type UkWeightLossLocation,
} from "@/lib/data/uk-weight-loss-locations";
import { internalLinksFor } from "@/lib/internal-linking";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function UkLocationArticleClient({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { name, nation, longtails, hero } = loc;
  const care = nationCareContext(nation);
  const faqItems = useMemo(() => buildLocationFaq(loc), [loc]);
  const toc = useMemo(
    () => [
      { id: "intro", label: capitalizeHeadingWords("Overview") },
      { id: "popular-searches", label: capitalizeHeadingWords("What people search") },
      { id: "pathways", label: capitalizeHeadingWords("Treatment pathways") },
      { id: "terminology", label: capitalizeHeadingWords("Key terms") },
      { id: "sources", label: capitalizeHeadingWords("Sources") },
      { id: "trust", label: capitalizeHeadingWords("Trust & methodology") },
      { id: "next-steps", label: capitalizeHeadingWords("Next steps") },
      { id: "disclaimer", label: capitalizeHeadingWords("Disclaimer") },
      { id: "faq", label: capitalizeHeadingWords("FAQ") },
      { id: "more-uk", label: capitalizeHeadingWords("More UK guides") },
    ],
    [],
  );

  const pageTitle = capitalizeHeadingWords(`Best weight loss treatment in ${name}`);

  const p = darkMode ? "text-slate-300" : "text-slate-700";
  const muted = darkMode ? "text-slate-400" : "text-slate-600";
  const strong = darkMode ? "text-white" : "text-slate-900";
  const border = darkMode ? "border-slate-700" : "border-slate-200";
  const boxBg = darkMode ? "bg-slate-900/80" : "bg-slate-50/90";

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
            {pageTitle}
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
              Independent guide · Apr 2026
            </span>
          </div>

          <div id="intro" className="scroll-mt-28">
            <BlogArticleHeroImage
              src={hero.url}
              alt={`${name}, UK — ${hero.scene}`}
            />
            <p className={`mt-2 text-center text-xs ${muted}`}>
              Photo:{" "}
              <a
                href={hero.profileUrl}
                className="text-emerald-600 underline-offset-2 hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                {hero.photographer}
              </a>{" "}
              on {hero.source === "pexels" ? "Pexels" : "Unsplash"} · {hero.scene}
            </p>

            <div className={`mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed ${p}`}>
              <p>
                If you are trying to decide on the{" "}
                <strong className={strong}>best weight loss treatment in {name}</strong>, you
                have probably already noticed the same sentence copy-pasted across ten tabs. I am
                not going to pretend postcode changes the chemistry of semaglutide. It does,
                however, change who answers the phone when something goes wrong, how long you wait,
                and whether your GP surgery even knows you have started a pen.
              </p>
              <p>Short version: location shapes access more than it rewrites biology.</p>
              <p>
                {care.nhsFrame} People near {name} still search the same handful of phrases—Wegovy,
                Mounjaro, “online clinic,” sometimes “NHS tier 3”—and those searches can collide with
                different realities on the ground.
              </p>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          {toc.length > 0 ? <GuideTocSidebar toc={toc} /> : null}

          <div className="min-w-0 flex-1 max-w-3xl">
            <article className="space-y-8 leading-relaxed">
              <GuideSection
                darkMode={darkMode}
                id="popular-searches"
                heading={capitalizeHeadingWords(
                  `What people near ${name} actually type into Google`,
                )}
              >
                <p className={muted}>
                  These strings are not magic keywords on our side; they are a map of worry. A few
                  might be irrelevant to you. One or two could match your situation closely enough
                  that they are worth taking to a clinician almost verbatim.
                </p>
                <ul className={`list-disc space-y-2.5 pl-5 text-sm ${p}`}>
                  {longtails.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <p className={muted}>
                  If nothing on that list fits, you need not force it. Sometimes the useful question
                  is smaller: whether your surgery will accept shared care, or whether you can get a
                  repeat blood test without a three-week delay.
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="pathways"
                heading={capitalizeHeadingWords(
                  `Pathways that tend to show up around ${name}`,
                )}
              >
                <p className={p}>
                  NHS weight management in {nation} might still be the right first stop even when you
                  already know the name of a private drug. Dietitians can spot patterns—night shifts,
                  caring responsibilities, antidepressant history—that a fifteen-minute advertorial will
                  miss. The trade-off is patience. A referral letter is not a promise of pharmacotherapy;
                  it may only get you into a group that meets fortnightly.
                </p>
                <p className={p}>
                  Private GLP-1 prescribing near {name} can feel more legible: a price, a calendar
                  link, a courier tracking code. That clarity can be genuine. It can also skip the
                  boring conversations about gallstones, pregnancy planning, or whether your BMI
                  calculation should use ethnicity-adjusted thresholds (a detail some services handle
                  thoughtfully; others barely mention it). You are allowed to ask blunt questions
                  here.
                </p>
                <p className={p}>
                  Online pharmacies that deliver to {name} are neither automatically safer nor
                  automatically riskier than a bricks-and-mortar clinic. What matters is whether
                  prescribing appears proportionate—whether someone can say no—and whether cold-chain
                  logistics survive a Friday afternoon in the rain.{" "}
                  {care.postcodeNote.replace("{name}", name)}
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="terminology"
                heading={capitalizeHeadingWords(
                  "Terms that keep appearing in serious discussions (not ads)",
                )}
              >
                <p className={p}>
                  <strong className={strong}>GLP-1 receptor agonists</strong> (for example
                  semaglutide) mimic a hormone line that affects appetite and gastric emptying.{" "}
                  <strong className={strong}>Tirzepatide</strong> adds a GIP-related mechanism; it is
                  not simply “a stronger GLP-1,” though marketing sometimes implies that.{" "}
                  <strong className={strong}>Obesity pharmacotherapy</strong> is the umbrella term
                  clinicians use when they are not tied to a brand name.{" "}
                  <strong className={strong}>Titration</strong> means stepping the dose slowly because
                  side effects are dose-dependent for many people, not because the clinic wants to
                  drag out payments—though you should still read the invoice.
                </p>
                <p className={p}>
                  NICE guidance (see sources below) may influence which medicines appear on local
                  formularies; it cannot replace a consultation. MHRA safety notices occasionally shift
                  batch advice or supply. None of that nuance shows up in a headline that only shouts
                  “LOSE STONE FAST.”
                </p>
              </GuideSection>

              <GuideSection
                darkMode={darkMode}
                id="sources"
                heading={capitalizeHeadingWords("Sources you can open in a second tab")}
              >
                <p className={muted}>
                  We link out on purpose. Health Wise should not be the only tab you trust.
                </p>
                <ul className={`space-y-3 text-sm ${p}`}>
                  {UK_LOCATION_SOURCES.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {s.label}
                      </a>
                      <span className={muted}> — {s.note}</span>
                    </li>
                  ))}
                </ul>
              </GuideSection>

              <section
                id="trust"
                className={`scroll-mt-28 rounded-xl border p-5 ${border} ${boxBg}`}
              >
                <h2
                  className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {capitalizeHeadingWords(
                    "Why you should treat Health Wise as a comparator, not a prescriber",
                  )}
                </h2>
                <div className={`mt-4 space-y-3 text-sm ${p}`}>
                  <p>
                    We spend most of our time on prices, packaging quirks, and whether a provider’s
                    website matches what the GPhC register says. We cannot examine your liver function
                    tests, and we should not guess your eligibility from a paragraph about {name}. That
                    limitation is deliberate: comparison journalism sits next to medicine; it must not
                    pretend to replace it.
                  </p>
                  <p>
                    If you want the house rules in plain English:{" "}
                    <Link
                      href="/methodology"
                      className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                    >
                      methodology
                    </Link>
                    ,{" "}
                    <Link
                      href="/editorial-policy"
                      className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                    >
                      editorial policy
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <GuideSection
                darkMode={darkMode}
                id="next-steps"
                heading={capitalizeHeadingWords(
                  `Practical next steps (UK-wide, including ${name})`,
                )}
              >
                <p className={p}>
                  Numbers on a screen can narrow choices; they cannot pick a pen for you. Start
                  somewhere small: compare two providers honestly, run your BMI with measurements you
                  did not round down, then book a conversation where you are allowed to say “I am
                  scared of nausea” without being rushed.
                </p>
                <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                  <li>
                    →{" "}
                    <Link
                      href="/compare/best-weight-loss-injections-uk"
                      className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                    >
                      Best weight loss injections in the UK
                    </Link>
                  </li>
                  <li>
                    →{" "}
                    <Link
                      href="/wegovy-price-comparison"
                      className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                    >
                      Wegovy price comparison
                    </Link>{" "}
                    <span className={muted}>or</span>{" "}
                    <Link
                      href="/mounjaro-price-comparison"
                      className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                    >
                      Mounjaro price comparison
                    </Link>
                  </li>
                  <li>
                    →{" "}
                    <Link
                      href="/tools/bmi-calculator"
                      className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                    >
                      BMI calculator
                    </Link>
                  </li>
                </ul>
              </GuideSection>

              <section
                id="disclaimer"
                className="scroll-mt-28 rounded-xl border border-amber-200 bg-amber-50/90 p-4 text-sm leading-relaxed text-amber-950"
              >
                <h3 className="text-base font-semibold text-amber-950">
                  {capitalizeHeadingWords("Disclaimer")}
                </h3>
                <p className="mt-2">
                  This page is general information. Prescription medicines must be issued by someone
                  who can take responsibility for follow-up. If you are pregnant, planning pregnancy,
                  or have had pancreatitis or certain thyroid conditions, some options may be off the
                  table entirely—not merely “delayed.” When in doubt, your own clinician in {name}{" "}
                  or online should win the argument over a blog.
                </p>
              </section>

              <section id="faq" className="scroll-mt-28">
                <h2
                  className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {capitalizeHeadingWords(`FAQ — ${name}`)}
                </h2>
                <p className={`mt-2 text-sm ${muted}`}>
                  Same questions appear in the structured data on this page for search engines;
                  wording matches.
                </p>
                <div className={`mt-6 space-y-8 text-sm ${p}`}>
                  {faqItems.map((item) => (
                    <div key={item.q}>
                      <h3
                        className={`text-lg font-semibold leading-snug ${darkMode ? "text-white" : "text-slate-900"}`}
                      >
                        {capitalizeHeadingWords(item.q)}
                      </h3>
                      <p className="mt-2 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div
                id="more-uk"
                className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${darkMode ? "bg-slate-900/60" : "bg-slate-50"}`}
              >
                <h3 className={`text-lg font-semibold ${strong}`}>
                  {capitalizeHeadingWords("Other places in the UK")}
                </h3>
                <p className={`mt-2 leading-relaxed ${p}`}>
                  Paginated blog grid for these posts:{" "}
                  <Link
                    href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
                    className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                  >
                    Locations on the blog
                  </Link>
                  . Grouped by nation:{" "}
                  <Link
                    href={LOCATIONS_IN_UK_HUB_PATH}
                    className="font-medium text-emerald-600 underline-offset-2 hover:underline"
                  >
                    Locations hub
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-10">
                <InternalLinks links={internalLinksFor("blogUkLocation")} />
              </div>
            </article>

            <div className="mt-14">
              <GuideSharePanel
                url={shareUrl}
                title={pageTitle}
                description={`${name} (${nation}): NHS, private & online weight loss options — not medical advice.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
