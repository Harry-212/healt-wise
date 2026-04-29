import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GUIDE_IMAGES } from "@/lib/guide-images";
import {
  helpfulGuidePath,
  HELPFUL_GUIDES_HUB_PATH,
} from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Helpful Health Guides",
  description:
    "Clear, evidence-based guides on GLP-1 treatments, pharmacy safety, and UK healthcare regulation. Written to help you make safer, more informed decisions.",
  openGraph: {
    title: "Helpful Health Guides",
    description:
      "Clear, evidence-based guides on GLP-1 treatments, pharmacy safety, and UK healthcare regulation.",
    type: "website",
  },
  alternates: {
    canonical: HELPFUL_GUIDES_HUB_PATH,
  },
};

const CATEGORIES = [
  "Medications",
  "Pharmacy Safety",
  "Safety Checks",
  "Nutrition",
  "Side Effects",
  "Regulation",
] as const;

type Category = (typeof CATEGORIES)[number];

const CATEGORY_COLORS: Record<
  Category,
  {
    accent: string;
    badgeDefault: string;
    badgeHover: string;
    pillInactive: string;
    pillHover: string;
    pillActive: string;
  }
> = {
  Medications: {
    accent: "bg-blue-600",
    badgeDefault: "bg-blue-100 text-blue-700",
    badgeHover: "group-hover:bg-blue-600 group-hover:text-white",
    pillInactive: "border-blue-500/60 text-blue-300",
    pillHover: "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
    pillActive: "bg-blue-600 border-blue-600 text-white",
  },
  "Pharmacy Safety": {
    accent: "bg-teal-600",
    badgeDefault: "bg-teal-100 text-teal-700",
    badgeHover: "group-hover:bg-teal-600 group-hover:text-white",
    pillInactive: "border-teal-500/60 text-teal-300",
    pillHover: "hover:bg-teal-600 hover:border-teal-600 hover:text-white",
    pillActive: "bg-teal-600 border-teal-600 text-white",
  },
  "Safety Checks": {
    accent: "bg-indigo-600",
    badgeDefault: "bg-indigo-100 text-indigo-700",
    badgeHover: "group-hover:bg-indigo-600 group-hover:text-white",
    pillInactive: "border-indigo-500/60 text-indigo-300",
    pillHover: "hover:bg-indigo-600 hover:border-indigo-600 hover:text-white",
    pillActive: "bg-indigo-600 border-indigo-600 text-white",
  },
  Nutrition: {
    accent: "bg-orange-500",
    badgeDefault: "bg-orange-100 text-orange-700",
    badgeHover: "group-hover:bg-orange-500 group-hover:text-white",
    pillInactive: "border-orange-500/60 text-orange-300",
    pillHover: "hover:bg-orange-500 hover:border-orange-500 hover:text-white",
    pillActive: "bg-orange-500 border-orange-500 text-white",
  },
  "Side Effects": {
    accent: "bg-rose-600",
    badgeDefault: "bg-rose-100 text-rose-700",
    badgeHover: "group-hover:bg-rose-600 group-hover:text-white",
    pillInactive: "border-rose-500/60 text-rose-300",
    pillHover: "hover:bg-rose-600 hover:border-rose-600 hover:text-white",
    pillActive: "bg-rose-600 border-rose-600 text-white",
  },
  Regulation: {
    accent: "bg-amber-500",
    badgeDefault: "bg-amber-100 text-amber-700",
    badgeHover: "group-hover:bg-amber-500 group-hover:text-white",
    pillInactive: "border-amber-500/60 text-amber-300",
    pillHover: "hover:bg-amber-500 hover:border-amber-500 hover:text-white",
    pillActive: "bg-amber-500 border-amber-500 text-white",
  },
};

const ALL_GUIDES = [
  {
    slug: "mounjaro-weight-loss-injection-uk",
    title:
      "Mounjaro Weight Loss Injection UK (2026): How It Works, Results, Eligibility & Cost",
    description:
      "The complete guide to Mounjaro (tirzepatide) in the UK—how the dual GLP-1/GIP mechanism works, clinical weight loss results, eligibility criteria, and what it costs.",
    category: "Medications" as Category,
    readTime: "6 min read",
  },
  {
    slug: "mounjaro-weight-loss-plateau",
    title:
      "Why Weight Loss Slows on Mounjaro: Understanding Plateaus & Long-Term Progress",
    description:
      "Weight loss slowing after the first weeks on Mounjaro is normal. Here's why it happens, what it means for your progress, and how to stay on track.",
    category: "Medications" as Category,
    readTime: "4 min read",
  },
  {
    slug: "mounjaro-prescription-timeline-uk",
    title:
      "How Long Does It Take to Get Mounjaro in the UK? Prescription & Delivery Timeline",
    description:
      "From consultation to delivery, most patients receive Mounjaro within 1–3 days. Here's what to expect at each stage and how to avoid common delays.",
    category: "Medications" as Category,
    readTime: "3 min read",
  },
  {
    slug: "mounjaro-delivery-storage-uk",
    title:
      "Mounjaro Delivery & Storage UK: Temperature Rules, Safety Checks & What to Do",
    description:
      "Mounjaro must be refrigerated between 2°C and 8°C. Learn how to check your delivery, what the temperature rules mean, and what to do if something goes wrong.",
    category: "Pharmacy Safety" as Category,
    readTime: "3 min read",
  },
  {
    slug: "how-we-verify-uk-pharmacies-gphc-safety-standards",
    title:
      "How We Verify UK Pharmacies: GPhC Checks & Safety Standards Explained",
    description:
      "We check every pharmacy against the GPhC register before listing. Discover the multi-layer verification process that keeps your purchases safe.",
    category: "Pharmacy Safety" as Category,
    readTime: "5 min read",
  },
  {
    slug: "mounjaro-pregnancy-risk-fertility-contraception",
    title:
      "Mounjaro and Pregnancy Risk: What You Need to Know About Fertility & Contraception",
    description:
      "Mounjaro can indirectly increase fertility as metabolic health improves. Here's what the clinical guidance says and what steps you should take.",
    category: "Medications" as Category,
    readTime: "4 min read",
  },
  {
    slug: "switching-wegovy-to-mounjaro-uk",
    title:
      "Switching from Wegovy to Mounjaro in the UK: Safe Transition Guide",
    description:
      "Thinking of switching from Wegovy to Mounjaro? This guide covers why patients switch, the clinical differences, how to transition safely, and what to expect.",
    category: "Medications" as Category,
    readTime: "4 min read",
  },
  {
    slug: "mounjaro-multivitamins-uk",
    title:
      "Multivitamins and Mounjaro in the UK: Do You Really Need Them?",
    description:
      "Mounjaro reduces appetite, which can lower nutrient intake. We cut through the influencer noise and explain what the clinical evidence says about multivitamins.",
    category: "Medications" as Category,
    readTime: "4 min read",
  },
  {
    slug: "local-vs-online-pharmacies-mounjaro-uk",
    title:
      "Local vs Online Pharmacies for Mounjaro in the UK: What's the Better Choice?",
    description:
      "Online pharmacies are cheaper, but local pharmacies offer face-to-face clinical support. Here's an honest breakdown of both options for Mounjaro patients.",
    category: "Pharmacy Safety" as Category,
    readTime: "4 min read",
  },
  {
    slug: "mounjaro-gp-notification-uk",
    title:
      "Do UK Pharmacies Inform Your GP About Mounjaro? (Complete Guide)",
    description:
      "Yes—pharmacies are required to notify your GP when dispensing Mounjaro. Here's why, how the process works, and what happens to your medical records.",
    category: "Regulation" as Category,
    readTime: "3 min read",
  },
  {
    slug: "switching-pharmacies-mounjaro-wegovy-uk",
    title:
      "Switching Pharmacies for Mounjaro or Wegovy in the UK: Step-by-Step Guide",
    description:
      "Want to switch pharmacy for your Mounjaro or Wegovy prescription? Here's how to compare regulated providers, what documents you need, and how to switch safely.",
    category: "Pharmacy Safety" as Category,
    readTime: "4 min read",
  },
  {
    slug: "mounjaro-calorie-cycling-weight-loss",
    title:
      "Mounjaro Calorie Cycling: A Smarter Approach to Sustainable Weight Loss",
    description:
      "Calorie cycling is a flexible nutrition strategy that can complement Mounjaro's appetite regulation—helping to prevent plateaus and improve long-term adherence.",
    category: "Nutrition" as Category,
    readTime: "4 min read",
  },
  {
    slug: "mounjaro-early-weight-loss-why-it-slows",
    title:
      "Why Weight Loss Is Faster at the Start on Mounjaro (And Why It Slows Down)",
    description:
      "Rapid early weight loss on Mounjaro is normal—but why does it slow? We explain the biology, what plateaus mean, and how to keep progressing sustainably.",
    category: "Medications" as Category,
    readTime: "3 min read",
  },
  {
    slug: "mounjaro-nutrition-guide-uk",
    title:
      "Mounjaro Nutrition Guide: What to Eat for Better Weight Loss Results",
    description:
      "Mounjaro controls appetite—but what you eat determines the quality of your results. A practical, evidence-based guide to nutrition while using tirzepatide.",
    category: "Nutrition" as Category,
    readTime: "5 min read",
  },
  {
    slug: "mounjaro-menopause-weight-loss-uk",
    title:
      "Mounjaro and Menopause: A Complete UK Guide to Weight Loss Support",
    description:
      "Menopause-related weight gain has distinct hormonal causes. Here's how Mounjaro's dual GLP-1/GIP mechanism can help, who is eligible, and how to maximise results.",
    category: "Medications" as Category,
    readTime: "5 min read",
  },
  {
    slug: "mounjaro-wegovy-health-benefits-uk",
    title:
      "Health Benefits of Mounjaro and Wegovy: Beyond Weight Loss",
    description:
      "Mounjaro and Wegovy do more than reduce weight. From improved blood sugar control to cardiovascular benefits, here's what the clinical evidence shows.",
    category: "Medications" as Category,
    readTime: "5 min read",
  },
  {
    slug: "mounjaro-bmi-cutoff-stopping-uk",
    title:
      "Mounjaro BMI Cutoffs in the UK: Why Stopping Too Early Can Backfire",
    description:
      "Many UK patients are stopped on Mounjaro once they reach a 'normal' BMI. Here's why that approach is flawed and what the evidence says about long-term maintenance.",
    category: "Medications" as Category,
    readTime: "4 min read",
  },
  {
    slug: "norovirus-mounjaro-wegovy-uk",
    title:
      "Norovirus & Mounjaro/Wegovy (UK Guide): Symptoms, Risks & Safe Recovery",
    description:
      "Norovirus can feel more intense on GLP-1 medications. Here's why, what symptoms to watch for, when to delay your injection, and how to recover safely.",
    category: "Side Effects" as Category,
    readTime: "4 min read",
  },
  {
    slug: "mounjaro-eligibility-bmi-requirements-uk",
    title:
      "Mounjaro UK Eligibility Guide (2026): BMI Rules, Requirements & Exceptions",
    description:
      "Who qualifies for Mounjaro in the UK? A clear breakdown of BMI thresholds, accepted conditions, ethnicity adjustments, and what happens when your BMI drops.",
    category: "Medications" as Category,
    readTime: "4 min read",
  },
  {
    slug: "mounjaro-feeling-cold-why-fixes",
    title:
      "Why Do You Feel Cold on Mounjaro? Causes, Science & Simple Fixes",
    description:
      "Unusual cold sensitivity is a commonly reported side effect of Mounjaro. Here's the physiological explanation and what you can do about it.",
    category: "Side Effects" as Category,
    readTime: "3 min read",
  },
  {
    slug: "mounjaro-skin-pain-causes-treatment",
    title:
      "Mounjaro Skin Pain Explained: Causes, Symptoms & How to Treat It",
    description:
      "Some Mounjaro users report skin sensitivity, burning, or pain from light touch. Here's what may be causing it and how to manage symptoms effectively.",
    category: "Side Effects" as Category,
    readTime: "4 min read",
  },
  {
    slug: "mounjaro-constipation-relief-uk",
    title: "Mounjaro Constipation: Easy Ways to Find Relief",
    description:
      "Constipation is a common early side effect of Mounjaro. Here's why it happens and the most effective hydration, fibre, movement, and OTC strategies to ease symptoms.",
    category: "Side Effects" as Category,
    readTime: "3 min read",
  },
  {
    slug: "mounjaro-side-effects-uk",
    title:
      "Mounjaro Side Effects: What to Expect and How to Manage Them (UK Guide)",
    description:
      "A complete, honest overview of Mounjaro side effects—from common digestive symptoms to rare serious reactions—and evidence-based strategies to manage each one.",
    category: "Side Effects" as Category,
    readTime: "5 min read",
  },
  {
    slug: "restarting-mounjaro-after-break-uk",
    title: "Restarting Mounjaro After a Break: UK Guide",
    description:
      "Restarting Mounjaro after a gap is often possible—even with a lower BMI. Here's how break length affects your restart dose, what providers need, and how to do it safely.",
    category: "Medications" as Category,
    readTime: "3 min read",
  },
  {
    slug: "mounjaro-delivery-times-uk",
    title:
      "Mounjaro Delivery Times UK: Why Safety Matters More Than Speed",
    description:
      "Online pharmacies advertise fast Mounjaro delivery—but safe prescribing takes time. Here's what the dispensing process involves and how to choose a provider you can trust.",
    category: "Pharmacy Safety" as Category,
    readTime: "3 min read",
  },
  {
    slug: "fake-online-pharmacy-uk-how-to-spot-stay-safe",
    title:
      "How to Identify a Fake Online Pharmacy and Stay Safe (UK Guide)",
    description:
      "Online pharmacies are convenient—but fake sites sell counterfeit medicines. Learn the warning signs, who regulates UK pharmacies, and how to verify a provider before you buy.",
    category: "Safety Checks" as Category,
    readTime: "4 min read",
  },
  {
    slug: "kwikpen-disposal-recycling-uk",
    title:
      "Safe Disposal & Recycling of Eli Lilly KwikPens in the UK (Mounjaro)",
    description:
      "Used Mounjaro KwikPens must be disposed of safely. Here's how to handle needles, where to put the pen body, and what UK rules say about sharps and unused medication.",
    category: "Safety Checks" as Category,
    readTime: "3 min read",
  },
  {
    slug: "travel-insurance-mounjaro-users-uk",
    title: "Travel Insurance for Mounjaro Users: UK Guide",
    description:
      "Travelling on Mounjaro is usually straightforward. Here's what insurers ask, why disclosure matters, what your policy should cover, and a pre-trip checklist.",
    category: "Safety Checks" as Category,
    readTime: "4 min read",
  },
  {
    slug: "mounjaro-hot-weather-safety-uk",
    title: "Mounjaro and Hot Weather: Staying Safe in the Heat (UK Guide)",
    description:
      "Heat and GLP-1 medication can increase dehydration risk—even if you don't feel thirsty. Hydration, sun protection, and when to seek help while using Mounjaro in summer.",
    category: "Safety Checks" as Category,
    readTime: "3 min read",
  },
  {
    slug: "glp1-content-removed-weight-loss-advice-uk",
    title:
      "Why Weight Loss Treatment Content Is Being Removed by Social Media: Impact on Weight Loss Advice in the UK",
    description:
      "Platforms are restricting content about Mounjaro and Wegovy. We examine what's being removed, why it matters, and how to find trustworthy guidance.",
    category: "Regulation" as Category,
    readTime: "4 min read",
  },
];

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function HelpfulGuidePage({ searchParams }: Props) {
  const { category } = await searchParams;
  const filtered = category
    ? ALL_GUIDES.filter((g) => g.category === category)
    : ALL_GUIDES;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Helpful Health Guides | Health Wise",
    description:
      "Clear, evidence-based guides on GLP-1 treatments, pharmacy safety, and UK healthcare regulation.",
    url: `${siteOrigin()}${HELPFUL_GUIDES_HUB_PATH}`,
    hasPart: ALL_GUIDES.map((g) => ({
      "@type": "Article",
      name: g.title,
      url: `${siteOrigin()}${helpfulGuidePath(g.slug)}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-slate-900 px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-14 md:px-10 md:pb-20 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Health Wise
          </p>
          <h1 className="mt-3 max-w-2xl text-balance text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Your Helpful Health Guides
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
            Evidence-based guidance on GLP-1 treatments, pharmacy safety, and
            UK healthcare regulation—so you can make safer, more informed
            decisions.
          </p>

          {/* Category filter pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {/* ALL pill */}
            <Link
              href={HELPFUL_GUIDES_HUB_PATH}
              className={`group relative overflow-hidden rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                !category
                  ? "border-white bg-white text-slate-900"
                  : "border-slate-600 text-slate-300 hover:border-white hover:bg-white hover:text-slate-900"
              }`}
            >
              <span className="relative z-10">ALL</span>
                  <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            {CATEGORIES.map((cat) => {
              const colors = CATEGORY_COLORS[cat];
              const isActive = category === cat;
              return (
                <Link
                  key={cat}
                  href={`${HELPFUL_GUIDES_HUB_PATH}?category=${encodeURIComponent(cat)}`}
                  className={`group relative overflow-hidden rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? colors.pillActive
                      : `${colors.pillInactive} ${colors.pillHover}`
                  }`}
                >
                  <span className="relative z-10">{cat.toUpperCase()}</span>
                  <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Guide grid ── */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          {filtered.length === 0 ? (
            <p className="text-slate-500">
              No guides found in this category.{" "}
              <Link
                href={HELPFUL_GUIDES_HUB_PATH}
                className="font-medium text-emerald-700 hover:underline"
              >
                View all guides
              </Link>
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((guide, index) => (
                <GuideCard
                  key={guide.slug}
                  guide={guide}
                  imagePriority={index < 9}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/** Splits a title at the first ":" so the subtitle starts on a new line. */
function SplitTitle({ text }: { text: string }) {
  const idx = text.indexOf(":");
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx + 1)}
      <br />
      {text.slice(idx + 1).trimStart()}
    </>
  );
}

type Guide = (typeof ALL_GUIDES)[number];

function GuideCard({
  guide,
  imagePriority,
}: {
  guide: Guide;
  imagePriority: boolean;
}) {
  const colors = CATEGORY_COLORS[guide.category];
  const thumbnail = GUIDE_IMAGES[guide.slug];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
      {/* Thumbnail image area */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={guide.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading={imagePriority ? "eager" : "lazy"}
            priority={imagePriority}
            unoptimized
          />
        ) : (
          <div className={`h-full w-full ${colors.accent} opacity-20`} />
        )}
        {/* Category accent stripe at bottom of image */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.accent}`}>
          <div className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${colors.badgeDefault} ${colors.badgeHover}`}
            >
              {guide.category}
            </span>
            <span className="text-[11px] font-medium text-slate-400">
              {guide.readTime}
            </span>
          </div>
          <div className="h-1 w-1 rounded-full bg-slate-200 transition-all duration-300 group-hover:scale-150 group-hover:bg-emerald-400" />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-emerald-800">
          <Link
            href={helpfulGuidePath(guide.slug)}
            className="after:absolute after:inset-0"
          >
            <SplitTitle text={guide.title} />
          </Link>
        </h2>

        {/* Description */}
        <p className="mt-3 flex-1 line-clamp-3 text-sm leading-relaxed text-slate-500 transition-colors group-hover:text-slate-600">
          {guide.description}
        </p>

        {/* Footer / CTA */}
        <div className="mt-6 border-t border-slate-100 pt-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 transition-all duration-300 group-hover:bg-emerald-600">
            <span className="text-xs font-semibold text-slate-500 transition-colors group-hover:text-white">
              Read Guide
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
