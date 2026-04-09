import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Helpful Health Guides | Health Wise",
  description:
    "Clear, evidence-based guides on GLP-1 treatments, pharmacy safety, and UK healthcare regulation. Written to help you make safer, more informed decisions.",
  openGraph: {
    title: "Helpful Health Guides | Health Wise",
    description:
      "Clear, evidence-based guides on GLP-1 treatments, pharmacy safety, and UK healthcare regulation.",
    type: "website",
  },
  alternates: {
    canonical: "/helpful-guide",
  },
};

const ALL_GUIDES = [
  {
    slug: "mounjaro-weight-loss-injection-uk",
    title:
      "Mounjaro Weight Loss Injection UK (2026): How It Works, Results, Eligibility & Cost",
    description:
      "The complete guide to Mounjaro (tirzepatide) in the UK—how the dual GLP-1/GIP mechanism works, clinical weight loss results, eligibility criteria, and what it costs.",
    category: "Medications",
    readTime: "6 min read",
    accentClass: "bg-blue-600",
  },
  {
    slug: "mounjaro-weight-loss-plateau",
    title:
      "Why Weight Loss Slows on Mounjaro: Understanding Plateaus & Long-Term Progress",
    description:
      "Weight loss slowing after the first weeks on Mounjaro is normal. Here's why it happens, what it means for your progress, and how to stay on track.",
    category: "Medications",
    readTime: "4 min read",
    accentClass: "bg-violet-600",
  },
  {
    slug: "mounjaro-prescription-timeline-uk",
    title:
      "How Long Does It Take to Get Mounjaro in the UK? Prescription & Delivery Timeline",
    description:
      "From consultation to delivery, most patients receive Mounjaro within 1–3 days. Here's what to expect at each stage and how to avoid common delays.",
    category: "Medications",
    readTime: "3 min read",
    accentClass: "bg-slate-700",
  },
  {
    slug: "mounjaro-delivery-storage-uk",
    title:
      "Mounjaro Delivery & Storage UK: Temperature Rules, Safety Checks & What to Do",
    description:
      "Mounjaro must be refrigerated between 2°C and 8°C. Learn how to check your delivery, what the temperature rules mean, and what to do if something goes wrong.",
    category: "Pharmacy Safety",
    readTime: "3 min read",
    accentClass: "bg-teal-600",
  },
  {
    slug: "how-we-verify-uk-pharmacies-gphc-safety-standards",
    title:
      "How We Verify UK Pharmacies: GPhC Checks & Safety Standards Explained",
    description:
      "We check every pharmacy against the GPhC register before listing. Discover the multi-layer verification process that keeps your purchases safe.",
    category: "Pharmacy Safety",
    readTime: "5 min read",
    accentClass: "bg-emerald-600",
  },
  {
    slug: "mounjaro-pregnancy-risk-fertility-contraception",
    title:
      "Mounjaro and Pregnancy Risk: What You Need to Know About Fertility & Contraception",
    description:
      "Mounjaro can indirectly increase fertility as metabolic health improves. Here's what the clinical guidance says and what steps you should take.",
    category: "Medications",
    readTime: "4 min read",
    accentClass: "bg-rose-600",
  },
  {
    slug: "switching-wegovy-to-mounjaro-uk",
    title:
      "Switching from Wegovy to Mounjaro in the UK: Safe Transition Guide",
    description:
      "Thinking of switching from Wegovy to Mounjaro? This guide covers why patients switch, the clinical differences, how to transition safely, and what to expect.",
    category: "Medications",
    readTime: "4 min read",
    accentClass: "bg-indigo-600",
  },
  {
    slug: "mounjaro-multivitamins-uk",
    title:
      "Multivitamins and Mounjaro in the UK: Do You Really Need Them?",
    description:
      "Mounjaro reduces appetite, which can lower nutrient intake. We cut through the influencer noise and explain what the clinical evidence says about multivitamins.",
    category: "Medications",
    readTime: "4 min read",
    accentClass: "bg-purple-600",
  },
  {
    slug: "local-vs-online-pharmacies-mounjaro-uk",
    title:
      "Local vs Online Pharmacies for Mounjaro in the UK: What's the Better Choice?",
    description:
      "Online pharmacies are cheaper, but local pharmacies offer face-to-face clinical support. Here's an honest breakdown of both options for Mounjaro patients.",
    category: "Pharmacy Safety",
    readTime: "4 min read",
    accentClass: "bg-cyan-600",
  },
  {
    slug: "mounjaro-gp-notification-uk",
    title:
      "Do UK Pharmacies Inform Your GP About Mounjaro? (Complete Guide)",
    description:
      "Yes—pharmacies are required to notify your GP when dispensing Mounjaro. Here's why, how the process works, and what happens to your medical records.",
    category: "Regulation",
    readTime: "3 min read",
    accentClass: "bg-slate-600",
  },
  {
    slug: "switching-pharmacies-mounjaro-wegovy-uk",
    title:
      "Switching Pharmacies for Mounjaro or Wegovy in the UK: Step-by-Step Guide",
    description:
      "Want to switch pharmacy for your Mounjaro or Wegovy prescription? Here's how to compare regulated providers, what documents you need, and how to switch safely.",
    category: "Pharmacy Safety",
    readTime: "4 min read",
    accentClass: "bg-sky-600",
  },
  {
    slug: "mounjaro-calorie-cycling-weight-loss",
    title:
      "Mounjaro Calorie Cycling: A Smarter Approach to Sustainable Weight Loss",
    description:
      "Calorie cycling is a flexible nutrition strategy that can complement Mounjaro's appetite regulation—helping to prevent plateaus and improve long-term adherence.",
    category: "Nutrition",
    readTime: "4 min read",
    accentClass: "bg-orange-500",
  },
  {
    slug: "mounjaro-early-weight-loss-why-it-slows",
    title:
      "Why Weight Loss Is Faster at the Start on Mounjaro (And Why It Slows Down)",
    description:
      "Rapid early weight loss on Mounjaro is normal—but why does it slow? We explain the biology, what plateaus mean, and how to keep progressing sustainably.",
    category: "Medications",
    readTime: "3 min read",
    accentClass: "bg-rose-500",
  },
  {
    slug: "mounjaro-nutrition-guide-uk",
    title:
      "Mounjaro Nutrition Guide: What to Eat for Better Weight Loss Results",
    description:
      "Mounjaro controls appetite—but what you eat determines the quality of your results. A practical, evidence-based guide to nutrition while using tirzepatide.",
    category: "Nutrition",
    readTime: "5 min read",
    accentClass: "bg-green-600",
  },
  {
    slug: "mounjaro-menopause-weight-loss-uk",
    title:
      "Mounjaro and Menopause: A Complete UK Guide to Weight Loss Support",
    description:
      "Menopause-related weight gain has distinct hormonal causes. Here's how Mounjaro's dual GLP-1/GIP mechanism can help, who is eligible, and how to maximise results.",
    category: "Medications",
    readTime: "5 min read",
    accentClass: "bg-fuchsia-600",
  },
  {
    slug: "mounjaro-wegovy-health-benefits-uk",
    title:
      "Health Benefits of Mounjaro and Wegovy: Beyond Weight Loss",
    description:
      "Mounjaro and Wegovy do more than reduce weight. From improved blood sugar control to cardiovascular benefits, here's what the clinical evidence shows.",
    category: "Medications",
    readTime: "5 min read",
    accentClass: "bg-blue-500",
  },
  {
    slug: "mounjaro-bmi-cutoff-stopping-uk",
    title:
      "Mounjaro BMI Cutoffs in the UK: Why Stopping Too Early Can Backfire",
    description:
      "Many UK patients are stopped on Mounjaro once they reach a 'normal' BMI. Here's why that approach is flawed and what the evidence says about long-term maintenance.",
    category: "Medications",
    readTime: "4 min read",
    accentClass: "bg-zinc-700",
  },
  {
    slug: "norovirus-mounjaro-wegovy-uk",
    title:
      "Norovirus & Mounjaro/Wegovy (UK Guide): Symptoms, Risks & Safe Recovery",
    description:
      "Norovirus can feel more intense on GLP-1 medications. Here's why, what symptoms to watch for, when to delay your injection, and how to recover safely.",
    category: "Side Effects",
    readTime: "4 min read",
    accentClass: "bg-teal-500",
  },
  {
    slug: "mounjaro-eligibility-bmi-requirements-uk",
    title:
      "Mounjaro UK Eligibility Guide (2026): BMI Rules, Requirements & Exceptions",
    description:
      "Who qualifies for Mounjaro in the UK? A clear breakdown of BMI thresholds, accepted conditions, ethnicity adjustments, and what happens when your BMI drops.",
    category: "Medications",
    readTime: "4 min read",
    accentClass: "bg-blue-700",
  },
  {
    slug: "mounjaro-feeling-cold-why-fixes",
    title:
      "Why Do You Feel Cold on Mounjaro? Causes, Science & Simple Fixes",
    description:
      "Unusual cold sensitivity is a commonly reported side effect of Mounjaro. Here's the physiological explanation and what you can do about it.",
    category: "Side Effects",
    readTime: "3 min read",
    accentClass: "bg-sky-500",
  },
  {
    slug: "mounjaro-skin-pain-causes-treatment",
    title:
      "Mounjaro Skin Pain Explained: Causes, Symptoms & How to Treat It",
    description:
      "Some Mounjaro users report skin sensitivity, burning, or pain from light touch. Here's what may be causing it and how to manage symptoms effectively.",
    category: "Side Effects",
    readTime: "4 min read",
    accentClass: "bg-orange-600",
  },
  {
    slug: "mounjaro-constipation-relief-uk",
    title: "Mounjaro Constipation: Easy Ways to Find Relief",
    description:
      "Constipation is a common early side effect of Mounjaro. Here's why it happens and the most effective hydration, fibre, movement, and OTC strategies to ease symptoms.",
    category: "Side Effects",
    readTime: "3 min read",
    accentClass: "bg-lime-600",
  },
  {
    slug: "mounjaro-side-effects-uk",
    title:
      "Mounjaro Side Effects: What to Expect and How to Manage Them (UK Guide)",
    description:
      "A complete, honest overview of Mounjaro side effects—from common digestive symptoms to rare serious reactions—and evidence-based strategies to manage each one.",
    category: "Side Effects",
    readTime: "5 min read",
    accentClass: "bg-red-600",
  },
  {
    slug: "restarting-mounjaro-after-break-uk",
    title: "Restarting Mounjaro After a Break: UK Guide",
    description:
      "Restarting Mounjaro after a gap is often possible—even with a lower BMI. Here's how break length affects your restart dose, what providers need, and how to do it safely.",
    category: "Medications",
    readTime: "3 min read",
    accentClass: "bg-emerald-700",
  },
  {
    slug: "mounjaro-delivery-times-uk",
    title:
      "Mounjaro Delivery Times UK: Why Safety Matters More Than Speed",
    description:
      "Online pharmacies advertise fast Mounjaro delivery—but safe prescribing takes time. Here's what the dispensing process involves and how to choose a provider you can trust.",
    category: "Pharmacy Safety",
    readTime: "3 min read",
    accentClass: "bg-violet-600",
  },
  {
    slug: "glp1-content-removed-weight-loss-advice-uk",
    title:
      "Why GLP-1 Content Is Being Removed: Impact on Weight Loss Advice in the UK",
    description:
      "Platforms are restricting content about Mounjaro and Wegovy. We examine what's being removed, why it matters, and how to find trustworthy guidance.",
    category: "Regulation",
    readTime: "4 min read",
    accentClass: "bg-amber-500",
  },
] as const;

const CATEGORIES = [
  "Medications",
  "Pharmacy Safety",
  "Nutrition",
  "Side Effects",
  "Regulation",
] as const;

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
    url: "https://health-wise.co.uk/helpful-guide",
    hasPart: ALL_GUIDES.map((g) => ({
      "@type": "Article",
      name: g.title,
      url: `https://health-wise.co.uk/${g.slug}`,
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
            <Link
              href="/helpful-guide"
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                !category
                  ? "border-white bg-white text-slate-900"
                  : "border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
              }`}
            >
              ALL
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/helpful-guide?category=${encodeURIComponent(cat)}`}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === cat
                    ? "border-white bg-white text-slate-900"
                    : "border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </Link>
            ))}
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
                href="/helpful-guide"
                className="font-medium text-emerald-700 hover:underline"
              >
                View all guides
              </Link>
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

type Guide = (typeof ALL_GUIDES)[number];

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/60">
      {/* Visual Header / Accent Bar */}
      <div className={`relative h-2 w-full ${guide.accentClass}`}>
        <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
              {guide.category}
            </span>
            <span className="text-[11px] font-medium text-slate-400">{guide.readTime}</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-slate-200 group-hover:scale-150 group-hover:bg-emerald-400 transition-all duration-300" />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-emerald-800">
          <Link href={`/${guide.slug}`} className="after:absolute after:inset-0">
            {guide.title}
          </Link>
        </h2>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3 group-hover:text-slate-600 transition-colors">
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
