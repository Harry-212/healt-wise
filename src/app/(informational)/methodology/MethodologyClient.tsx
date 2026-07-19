"use client";

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Instrument_Serif } from "next/font/google";
import { useReducedMotion } from "framer-motion";
import {
  Scale,
  Plus,
  ShieldCheck,
  Truck,
  Check,
  X,
  ChevronRight,
  ChevronDown,
  Calendar,
  AlertTriangle,
  Send,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { useMonthYearLabel } from "@/lib/hooks/useTodayLabel";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  style: "italic",
});

/** Matches fixed NavBar clearance (`GuideTocSidebar`). */
const TOC_FIXED_TOP_PX = 112;
const ACTIVE_SECTION_TOP_PX = 148;
const HERO_END_ID = "methodology-hero-end";
/** SiteEndSection — hide TOC before recommended articles carousel. */
const KEEP_EXPLORING_ID = "keep-exploring";
const SCROLL_OFFSET_PX = 112;

type TocCoords = { left: number; width: number };

// Navigation structure
const CHAPTERS = [
  {
    id: "core-comparison",
    title: "1. Core Comparison Model",
    sections: [
      { id: "what-we-compare", title: "What We Compare" },
      { id: "calculating-total-cost", title: "Calculating Total Cost" },
      { id: "discount-vs-standard", title: "Discounts vs Standard Pricing" },
      { id: "beyond-cheapest", title: "Beyond the Cheapest Price" }
    ]
  },
  {
    id: "safety-clinical",
    title: "2. Safety & Clinical Standards",
    sections: [
      { id: "pharmacy-safety", title: "Pharmacy Safety & GPhC Checks" },
      { id: "clinical-review", title: "Clinical Prescribing Pathways" }
    ]
  },
  {
    id: "service-logistics",
    title: "3. Logistics & Maintenance",
    sections: [
      { id: "delivery-packaging", title: "Delivery & Cold-Chain Shipping" },
      { id: "maintenance-support", title: "Maintenance & Long-Term Support" }
    ]
  },
  {
    id: "trust-governance",
    title: "4. Trust & Governance",
    sections: [
      { id: "rankings-display", title: "How Providers Are Displayed" },
      { id: "affiliate-links", title: "Affiliate Disclosures" },
      { id: "keeping-updated", title: "Information Recency" },
      { id: "sources-used", title: "Sources We Use" }
    ]
  },
  {
    id: "editorial-boundaries",
    title: "5. Limits & Integrity",
    sections: [
      { id: "what-we-do-not-do", title: "What We Do Not Do" },
      { id: "corrections-updates", title: "Corrections & Provider Updates" },
      { id: "final-check", title: "Pre-Consultation Checklist" }
    ]
  }
];

// Flat list of all sections for easier mapping and scroll spy
const ALL_SECTIONS = CHAPTERS.flatMap(ch => ch.sections);

export default function MethodologyClient() {
  const [activeSection, setActiveSection] = useState(ALL_SECTIONS[0].id);
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0].id);
  const [tocCoords, setTocCoords] = useState<TocCoords | null>(null);
  const [tocVisible, setTocVisible] = useState(false);
  const tocAnchorRef = useRef<HTMLDivElement>(null);
  const tocNavRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const lastReviewed = useMonthYearLabel("July 2026");

  const syncTocCoords = () => {
    const el = tocAnchorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setTocCoords({ left: r.left, width: r.width > 0 ? r.width : 320 });
  };

  useLayoutEffect(() => {
    syncTocCoords();
    const el = tocAnchorRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => syncTocCoords());
    ro.observe(el);
    window.addEventListener("resize", syncTocCoords);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncTocCoords);
    };
  }, []);

  useEffect(() => {
    const computeVisibility = () => {
      const heroEnd = document.getElementById(HERO_END_ID);
      const passedHero =
        !heroEnd ||
        heroEnd.getBoundingClientRect().top <= ACTIVE_SECTION_TOP_PX;

      const keepExploring = document.getElementById(KEEP_EXPLORING_ID);
      const articlesSectionNear =
        !!keepExploring &&
        keepExploring.getBoundingClientRect().top <= window.innerHeight;

      setTocVisible(passedHero && !articlesSectionNear);
    };

    const computeActive = () => {
      const doc = document.documentElement;
      const nearBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 100;
      if (nearBottom) {
        const last = ALL_SECTIONS[ALL_SECTIONS.length - 1]!;
        setActiveSection(last.id);
        const parentChapter = CHAPTERS.find((ch) =>
          ch.sections.some((sec) => sec.id === last.id),
        );
        if (parentChapter) setActiveChapter(parentChapter.id);
        return;
      }

      let current = ALL_SECTIONS[0]!.id;
      for (let i = ALL_SECTIONS.length - 1; i >= 0; i--) {
        const id = ALL_SECTIONS[i]!.id;
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= ACTIVE_SECTION_TOP_PX) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
      const parentChapter = CHAPTERS.find((ch) =>
        ch.sections.some((sec) => sec.id === current),
      );
      if (parentChapter) setActiveChapter(parentChapter.id);
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        syncTocCoords();
        computeVisibility();
        computeActive();
        ticking = false;
      });
    };

    computeVisibility();
    computeActive();
    syncTocCoords();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  // Keep active TOC item visible inside the scrollable nav list
  useEffect(() => {
    if (!tocVisible) return;
    const nav = tocNavRef.current;
    if (!nav) return;
    const activeEl = nav.querySelector<HTMLElement>(
      `[data-section-id="${activeSection}"]`,
    );
    activeEl?.scrollIntoView({
      block: "nearest",
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeSection, tocVisible, reduceMotion]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET_PX;
    window.scrollTo({
      top: y,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActiveSection(id);
    const parentChapter = CHAPTERS.find((ch) =>
      ch.sections.some((sec) => sec.id === id),
    );
    if (parentChapter) setActiveChapter(parentChapter.id);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Header Hero Panel */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white pb-8 pt-10 sm:pb-10 sm:pt-12 md:pb-12 md:pt-14">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-40" />
        
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50/50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800">
            <Scale className="h-3.5 w-3.5" />
            Editorial Rigour
          </div>
          
          <h1 className="mt-5 text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Our <span className={`${instrumentSerif.className} font-serif text-emerald-600`}>Methodology</span>
          </h1>
          
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            How Healthwise360 evaluates UK weight loss treatment providers, parses price structures, verifies pharmacy safety, and measures ongoing patient support standards.
          </p>

          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 sm:mt-7">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              Last reviewed:{" "}
              <time dateTime={lastReviewed ?? undefined}>{lastReviewed ?? "July 2026"}</time>
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              100% Independent Comparison
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-xl rounded-lg border border-amber-200/70 bg-amber-50/40 px-4 py-2.5 text-xs font-medium leading-relaxed text-amber-950/80 sm:text-sm">
            We compare, we do not prescribe. All treatment decisions must be made by a GPhC-registered prescriber.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("introduction")}
            className="group mx-auto mt-6 flex flex-col items-center gap-1 text-slate-400 transition hover:text-emerald-700"
            aria-label="Scroll to methodology content"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Read below
            </span>
            <ChevronDown
              className={`h-5 w-5 ${reduceMotion ? "" : "animate-bounce"}`}
              aria-hidden
            />
          </button>
        </div>
      </section>

      <div
        id={HERO_END_ID}
        aria-hidden
        className="pointer-events-none h-0 w-full overflow-hidden"
      />

      {/* 2. Main Split Layout */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* A. Sidebar Navigation — fixed positioning (CSS sticky breaks under body overflow-x) */}
          <aside className="hidden lg:col-span-4 lg:block lg:self-start">
            <div ref={tocAnchorRef} className="relative w-full">
              <div
                className={`fixed z-30 flex max-h-[calc(100dvh-7rem)] flex-col transition-opacity duration-300 ease-out ${
                  tocVisible ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                style={{
                  top: TOC_FIXED_TOP_PX,
                  left: tocCoords?.left ?? 0,
                  width: tocCoords?.width ?? 320,
                  visibility: tocCoords ? "visible" : "hidden",
                }}
                aria-hidden={!tocVisible}
                aria-label="Methodology table of contents"
              >
                <div className="flex min-h-0 max-h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm ring-1 ring-slate-900/4">
                  <div className="shrink-0 border-b border-slate-100 px-5 py-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Methodology Index
                    </p>
                  </div>

                  <nav
                    ref={tocNavRef}
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [scrollbar-color:rgb(203_213_225)_transparent]"
                  >
                    <div className="space-y-5">
                      {CHAPTERS.map((chapter) => (
                        <div key={chapter.id} className="space-y-2">
                          <p
                            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                              activeChapter === chapter.id
                                ? "text-emerald-700"
                                : "text-slate-500"
                            }`}
                          >
                            {chapter.title}
                          </p>

                          <ul className="ml-1.5 space-y-1 border-l border-slate-100 pl-3">
                            {chapter.sections.map((section) => {
                              const isActive = activeSection === section.id;
                              return (
                                <li key={section.id}>
                                  <button
                                    type="button"
                                    data-section-id={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`group relative flex w-full items-start py-1 text-left text-[13px] font-medium leading-snug transition-all ${
                                      isActive
                                        ? "font-semibold text-slate-900"
                                        : "text-slate-500 hover:text-slate-800"
                                    }`}
                                  >
                                    <span
                                      className={`absolute -left-3 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full transition-all ${
                                        isActive
                                          ? "bg-emerald-500"
                                          : "bg-transparent group-hover:bg-slate-300"
                                      }`}
                                    />
                                    {section.title}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </nav>

                  <div className="shrink-0 border-t border-slate-100 px-4 py-4">
                    <Link
                      href="/tools/bmi-calculator"
                      className="group flex items-center justify-between rounded-xl border border-slate-200/50 bg-slate-50 p-3.5 transition hover:bg-slate-100"
                    >
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Interactive Tool
                        </p>
                        <p className="mt-0.5 text-xs font-bold text-slate-700 group-hover:text-emerald-800">
                          Check your BMI online
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* B. Core Editorial Content (Right - Scrollable) */}
          <main className="col-span-1 lg:col-span-8">
            <article className="prose prose-slate max-w-none space-y-16">
              
              {/* Introduction / Lead text */}
              <div
                id="introduction"
                className="scroll-mt-32 rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-8 shadow-sm"
              >
                <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl mb-4">
                  Introduction
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  <p>
                    Healthwise360 is an independent UK comparison website built to help adults compare regulated weight loss treatment providers more clearly before starting a consultation.
                  </p>
                  <p>
                    We compare pricing, provider information, treatment availability, pharmacy checks, delivery details, and support options across UK weight loss treatment pathways. Our goal is to make the private weight loss market easier to understand without replacing advice from a qualified prescriber.
                  </p>
                  <p className="font-medium text-slate-800">
                    We are not a pharmacy, clinic, manufacturer, or prescription service. We do not decide whether a treatment is suitable for you. That decision must always be made by an appropriately qualified healthcare professional after reviewing your medical history, BMI, current medicines, risk factors, and treatment goals.
                  </p>
                </div>
              </div>

              {/* CHAPTER 1: CORE COMPARISON MODEL */}
              <div className="space-y-12">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">Chapter 1</span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1 sm:text-3xl">Core Comparison Model</h2>
                </div>

                {/* What We Compare */}
                <section id="what-we-compare" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">01</span>
                      What We Compare
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      We continuously track and audit UK provider offerings across several dimensions to expose the full picture, ensuring patients can review total path costs rather than misleading introductory offers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    {[
                      "Weight loss treatment prices & dosage stages",
                      "Consultation and clinical review fees",
                      "Standard & temperature-controlled delivery charges",
                      "Mandatory extras, subscriptions & repeat-billing details",
                      "New-patient introductory offers vs standard rates",
                      "Pharmacy regulatory signals (GPhC registration)",
                      "Prescribing pathway details & consultation formats",
                      "Ongoing follow-up support & maintenance policies"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-5">
                    <p className="text-sm italic text-slate-600 leading-relaxed">
                      "A low starter price may look attractive, but the real cost can change once dose escalation, delivery, repeat prescriptions, support, or renewal pricing are included. That is why we encourage users to compare the complete treatment pathway before choosing a provider."
                    </p>
                  </div>
                </section>

                {/* How We Calculate Total Cost */}
                <section id="calculating-total-cost" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">02</span>
                      How We Calculate “Total Cost”
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      We do not simply scrape headlines. Where information is available, we calculate the estimated total cost a patient may pay through a regulated private provider by combining several hidden variables.
                    </p>
                  </div>

                  {/* Math Formula Panel - Premium visual */}
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
                    <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                      The Total Cost Calculation Formula
                    </p>
                    
                    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-3">
                      <div className="w-full text-center md:w-auto">
                        <div className="rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3 min-w-[120px]">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">Treatment</span>
                          <span className="text-sm font-extrabold text-slate-800">Listed Price</span>
                        </div>
                      </div>
                      
                      <Plus className="h-4 w-4 text-slate-400 shrink-0" />

                      <div className="w-full text-center md:w-auto">
                        <div className="rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3 min-w-[120px]">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">Assessment</span>
                          <span className="text-sm font-extrabold text-slate-800">Consultation Fee</span>
                        </div>
                      </div>

                      <Plus className="h-4 w-4 text-slate-400 shrink-0" />

                      <div className="w-full text-center md:w-auto">
                        <div className="rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3 min-w-[120px]">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">Logistics</span>
                          <span className="text-sm font-extrabold text-slate-800">Delivery Cost</span>
                        </div>
                      </div>

                      <Plus className="h-4 w-4 text-slate-400 shrink-0" />

                      <div className="w-full text-center md:w-auto">
                        <div className="rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3 min-w-[120px]">
                          <span className="block text-[10px] font-bold text-slate-400 uppercase">Extras</span>
                          <span className="text-sm font-extrabold text-slate-800">Mandatory Fees</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-5 text-center">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800 border border-emerald-100/50">
                        <span>= Estimated Total Patient Cost</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-600">
                    <p>
                      We do not treat every discount as equal. Some offers apply only to a first order or selected starter doses. Others require entering an automated subscription or account sign-up. 
                    </p>
                    <p className="font-medium text-slate-800">
                      Important: Prices can change quickly. Always confirm the final price, eligibility terms, delivery charges, and subscription conditions on the provider’s own website before paying.
                    </p>
                  </div>
                </section>

                {/* Discount Prices vs Standard Prices */}
                <section id="discount-vs-standard" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">03</span>
                      Discount Prices vs Standard Prices
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      We aim to make the difference between temporary promotional discounts and long-term standard costs clear so you can plan your financial commitment beyond the first month.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-amber-200/60 bg-amber-50/30 p-5 shadow-xs">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-amber-900 mb-2">Discount Prices</h4>
                      <p className="text-sm leading-relaxed text-slate-700">
                        Includes public introductory offers, temporary voucher codes, new-patient code-reductions, and limited promotions. Ideal to understand what you will pay <span className="font-semibold text-slate-900">today</span> to start treatment.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">Standard Prices</h4>
                      <p className="text-sm leading-relaxed text-slate-700">
                        The baseline list price before temporary discounts are applied. Essential to estimate the ongoing program cost once promotional periods end and you move to maintenance doses.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why We Look Beyond the Cheapest Price */}
                <section id="beyond-cheapest" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">04</span>
                      Why We Look Beyond the Cheapest Price
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      The cheapest provider is not always the best choice for every person. A safe treatment pathway requires clinical checks, clear eligibility screening, reliable pharmacy information, and realistic support.
                    </p>
                  </div>

                  <div className="rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/20 p-5 sm:p-6 shadow-xs">
                    <h4 className="font-extrabold text-slate-900 text-base mb-2">Quality & Safety Transparency Policy</h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      A provider that is slightly cheaper but unclear about pharmacy registration, prescribing responsibility, delivery conditions, or ongoing support may not be the best value. 
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 mt-2 font-medium">
                      Healthwise360 looks at both cost and safety transparency. We do not encourage users to buy prescription-only medicines from unverified sellers, social media accounts, private messages, overseas import routes, or websites that avoid proper consultation.
                    </p>
                  </div>
                </section>
              </div>

              {/* CHAPTER 2: SAFETY & CLINICAL QUALITY */}
              <div className="space-y-12">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">Chapter 2</span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1 sm:text-3xl">Safety & Clinical Standards</h2>
                </div>

                {/* Pharmacy Safety and GPhC Checks */}
                <section id="pharmacy-safety" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">05</span>
                      Pharmacy Safety and GPhC Checks
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      Before including any provider in our comparison content, we inspect and verify that their supply route is fully regulated, registered, and traceable in the UK.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      Our Regulatory Inspection Checklist
                    </h4>
                    
                    <ul className="space-y-3.5">
                      {[
                        { title: "GPhC Registration Status", desc: "Verifying the pharmacy and premises exist on the official General Pharmaceutical Council register." },
                        { title: "Traceable Premises Detail", desc: "Ensuring registered pharmacy premises address is publicly listed." },
                        { title: "Responsible Pharmacist Details", desc: "Looking for Superintendent or responsible pharmacist oversight details." },
                        { title: "Traceable Prescribing Pathway", desc: "Checking that the provider clearly states who reviews your answers and writes the prescription." },
                        { title: "No Pressure-Selling Metrics", desc: "Ensuring the site avoids unsafe marketing claims or high-pressure buy-now tactics." }
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                          <div>
                            <span className="block text-sm font-extrabold text-slate-800">{item.title}</span>
                            <span className="block text-xs text-slate-500 mt-0.5">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    GPhC registration matters because online pharmacy services in Great Britain must be registered and meet strict regulatory standards. Users should still perform their own checks using the official GPhC register before ordering.
                  </p>
                </section>

                {/* Clinical Review and Prescribing Pathway */}
                <section id="clinical-review" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">06</span>
                      Clinical Review & Prescribing Pathway
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      Prescription weight loss medicines are powerful, regulated medical treatments and are not suitable for everyone. They must never be supplied without a clinical consultation.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200/60 p-5 sm:p-6">
                    <p className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                      Clinician Questionnaire Requirements we assess:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        "Height, weight, and verified BMI check",
                        "Detailed medical history & risk factors",
                        "Active medication list & drug interactions",
                        "Pregnancy, fertility, and breastfeeding status",
                        "Previous weight loss treatments & experiences",
                        "Adverse side effect management history",
                        "GP notification details & care sharing",
                        "Clear clinical follow-up & escalation pathways"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-amber-900 uppercase">Dosing Safety Warning</p>
                      <p className="text-xs leading-relaxed text-amber-800 mt-1">
                        You should never change dose, restart treatment, switch treatment, or combine medicines without explicit clinical advice from your prescriber.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* CHAPTER 3: SERVICE LOGISTICS & PATIENT CARE */}
              <div className="space-y-12">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">Chapter 3</span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1 sm:text-3xl">Service Logistics & Patient Care</h2>
                </div>

                {/* Delivery, Packaging, and Cold-Chain Considerations */}
                <section id="delivery-packaging" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">07</span>
                      Delivery, Packaging, & Cold-Chain Shipping
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      Several weight loss treatments are temperature-sensitive (requiring maintenance between 2°C and 8°C prior to first use). Proper logistics are essential to preserve pharmaceutical integrity.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {[
                      { icon: Truck, title: "Shipping Methods", desc: "Tracking shipping times, dispatch methods, and cold pack packaging materials." },
                      { icon: ShieldCheck, title: "Temp Stability", desc: "Checking whether the provider explains how temperature checks are validated." },
                      { icon: AlertTriangle, title: "Late Deliveries", desc: "Ensuring clear guidance is provided for items arriving warm or delayed." }
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="rounded-xl border border-slate-100 bg-white p-5 shadow-xs">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 mb-3 border border-emerald-100">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-950">{item.title}</h4>
                          <p className="text-xs leading-relaxed text-slate-500 mt-1.5">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Maintenance and Long-Term Support */}
                <section id="maintenance-support" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">08</span>
                      Maintenance and Long-Term Support
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      Many people focus exclusively on the first month of treatment, but long-term planning and maintenance support are what drive successful, sustainable health outcomes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      We gather, document, and review provider policies concerning the extended phases of your journey:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                      <div>
                        <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wider">BMI Continuation Cut-offs</span>
                        <span className="block text-xs leading-relaxed text-slate-500 mt-1">
                          Some providers stop prescribing treatment abruptly once your BMI drops below 30 or 27. We highlight maintenance policies.
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wider font-sans">Switching & Breaks</span>
                        <span className="block text-xs leading-relaxed text-slate-500 mt-1">
                          We track rules for transfer patients, restart schedules following treatment breaks, and support access.
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* CHAPTER 4: TRUST & GOVERNANCE */}
              <div className="space-y-12">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">Chapter 4</span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1 sm:text-3xl">Trust, Independence & Governance</h2>
                </div>

                {/* How Providers Are Ranked or Displayed */}
                <section id="rankings-display" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">09</span>
                      How Providers Are Ranked or Displayed
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      Our comparison tables are built strictly with user-utility and clinic transparency in mind. We display data logically based on the parameters selected.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                      Core Presentation Parameters:
                    </h4>
                    
                    <ol className="space-y-3 pl-4 list-decimal marker:font-bold marker:text-emerald-700 text-sm leading-relaxed text-slate-600">
                      <li><strong>Regulatory Compliance:</strong> We prioritize verified pharmacy pathways.</li>
                      <li><strong>Price Transparency:</strong> Providers with clear cost models are preferred.</li>
                      <li><strong>Treatment Availability:</strong> Consistent stocking data affects positioning.</li>
                      <li><strong>Prescribing Pathway Integrity:</strong> Clear, traceable consultation models.</li>
                      <li><strong>Logistics Detail:</strong> Clear delivery information and packaging checks.</li>
                      <li><strong>Continuation & Maintenance Support:</strong> Long-term care support details.</li>
                    </ol>

                    <div className="mt-5 border-t border-slate-100 pt-4 flex gap-2">
                      <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                      <p className="text-xs font-medium text-slate-500 italic">
                        "We do not accept payment to place an unsafe or unclear provider above a safer, more transparent provider. A clinic may be de-prioritised if details are missing, unclear, or outdated."
                      </p>
                    </div>
                  </div>
                </section>

                {/* Affiliate Links and Commercial Relationships */}
                <section id="affiliate-links" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">10</span>
                      Affiliate Links & Commercial Relationships
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      Transparency is absolute. Some outbound links on Healthwise360 may be tracked as affiliate links. If a user clicks these links and purchases treatment, we may earn a referral commission.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-200/60 bg-amber-50/20 p-5 sm:p-6">
                    <h4 className="font-extrabold text-slate-900 text-sm uppercase tracking-wider mb-2">Our Financial Integrity Pledge</h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Affiliate relationships do not control our core comparison methodology. We never allow a provider to buy a higher safety position, alter regulatory feedback, remove legitimate consumer warnings, or override our strict safety evaluation standards. 
                    </p>
                  </div>
                </section>

                {/* How We Keep Information Updated */}
                <section id="keeping-updated" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">11</span>
                      How We Keep Information Updated
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      The UK weight loss treatment market moves rapidly. Prices, stock levels, safety guidelines, and introductory discount codes fluctuate daily.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/60 bg-slate-50 p-5">
                    <p className="text-xs leading-relaxed text-slate-500 font-medium uppercase tracking-wider mb-2">Patient Check Guidelines:</p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      While we review and update comparison tables constantly, no comparison engine can guarantee prices are accurate down to the exact second. Always double-check final checkout costs, shipping policies, subscription clauses, and pharmacy credentials on the provider’s secure site before making a payment.
                    </p>
                  </div>
                </section>

                {/* Sources We Use */}
                <section id="sources-used" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">12</span>
                      Sources We Use
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      To safeguard editorial accuracy, we source details directly from primary, authoritative, and regulatory channels rather than third-party rumor.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {[
                      "Direct Clinic & Provider Websites",
                      "GPhC Registered Pharmacy Records",
                      "Public UK Healthcare Regulations",
                      "NICE & NHS Clinical Guidelines",
                      "MHRA Safety Alerts & Guidance",
                      "Verified Direct-Provider Clarifications"
                    ].map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-3xs">
                        <FileText className="h-3.5 w-3.5 text-slate-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              {/* CHAPTER 5: LIMITS & INTEGRITY */}
              <div className="space-y-12">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">Chapter 5</span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1 sm:text-3xl">Limits & Editorial Integrity</h2>
                </div>

                {/* What We Do Not Do */}
                <section id="what-we-do-not-do" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-700 text-xs font-extrabold border border-slate-200">13</span>
                      What We Do Not Do
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      Understanding our boundaries is critical to maintaining a healthy and safe relationship with our comparison services.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-rose-100 bg-rose-50/25 p-6 shadow-xs">
                    <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <X className="h-5 w-5 text-rose-600 shrink-0" />
                      Our Scope Limits & Boundaries
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-sm text-slate-600">
                      {[
                        "We DO NOT prescribe medical treatments",
                        "We DO NOT sell, store or ship medicines",
                        "We DO NOT operate as an online pharmacy",
                        "We DO NOT evaluate patient medical eligibility",
                        "We DO NOT replace GP, prescriber, or clinical advice",
                        "We DO NOT guarantee private pharmacy stock levels",
                        "We DO NOT guarantee prescription treatment approval",
                        "We DO NOT guarantee weight loss outcomes",
                        "We DO NOT recommend unverified sellers or import routes"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                          <span className="font-semibold text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Corrections and Provider Updates */}
                <section id="corrections-updates" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">14</span>
                      Corrections and Provider Updates
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      If you believe any information listed on our comparison platform is inaccurate, outdated, or incomplete, we welcome feedback from patients, pharmacy staff, and clinical directors.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/60 bg-white p-5 sm:p-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-sm mb-2">How to Submit Correction Requests</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Please email or reach out with the specific page URL, current displayed metric, and traceable primary evidence (such as a link to official pharmacy regulatory guidelines or updated pricing sheets).
                    </p>
                    <div className="mt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-slate-800"
                      >
                        Submit Correction
                        <Send className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Final Check Before You Choose a Provider */}
                <section id="final-check" className="scroll-mt-40 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 text-xs font-extrabold border border-emerald-100">15</span>
                      Final Check Before You Choose a Provider
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      To help keep yourself secure, review this self-guided safety check before providing any payment or personal medical details to an online private prescriber.
                    </p>
                  </div>

                  {/* Elegant self-checklist card */}
                  <div className="rounded-2xl border border-slate-200/80 bg-linear-to-br from-emerald-50/30 via-white to-slate-50/50 p-6 sm:p-8 shadow-sm">
                    <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                      <Check className="h-5 w-5 text-emerald-600" />
                      The 10 Patient Safeguard Questions
                    </h4>

                    <div className="space-y-4">
                      {[
                        "Is the pharmacy name and premises clearly shown?",
                        "Can I verify the pharmacy premises on the GPhC register?",
                        "Is the total price clear before completing medical questionnaires?",
                        "Are delivery and packaging fees explicitly itemized?",
                        "Is this a one-off order or a recurring subscription agreement?",
                        "What is the provider's continuation rules once BMI falls below 30 or 27?",
                        "Is follow-up care and adverse-effects support included?",
                        "What support paths exist if my parcel is warm or late?",
                        "Will my GP be informed about my prescription where appropriate?",
                        "Is the reviewing doctor or pharmacist clearly identifiable?"
                      ].map((q, idx) => (
                        <div key={idx} className="flex gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-800 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-sm font-semibold text-slate-700">{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center pt-8 border-t border-slate-100">
                    <p className="text-base font-bold text-slate-900 leading-snug">
                      Ready to compare UK weight loss treatments?
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                      <Link
                        href="/mounjaro-price-comparison"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-xs hover:bg-emerald-500"
                      >
                        Compare Mounjaro
                      </Link>
                      <Link
                        href="/wegovy-price-comparison"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
                      >
                        Compare Wegovy
                      </Link>
                    </div>
                  </div>

                </section>
              </div>

            </article>
          </main>

        </div>
      </div>
    </div>
  );
}
