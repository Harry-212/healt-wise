import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, LineChart, Syringe } from "lucide-react";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const TITLE = "Free Weight Loss Tools UK | Dose Calculators & Tracker";
const DESCRIPTION =
  "Free UK weight loss tools: Mounjaro and Wegovy click calculators, a BMI, BMR and calorie calculator, and a weight loss tracker for GLP-1 treatment.";

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/tools",
    title: TITLE,
    metaDescription: DESCRIPTION,
    openGraphTitle: TITLE,
    openGraphDescription: DESCRIPTION,
    imagePath: "/window.svg",
    imageAlt: "Healthwise360 — free weight loss tools UK",
  }),
  title: {
    absolute: TITLE,
  },
};

const TOOLS = [
  {
    href: "/tools/mounjaro-click-calculator",
    name: "Mounjaro Click Calculator",
    blurb:
      "Work out how many clicks on a Mounjaro KwikPen match your prescribed dose, with a click chart for each pen strength.",
    Icon: Syringe,
  },
  {
    href: "/tools/wegovy-click-calculator",
    name: "Wegovy Click Calculator",
    blurb:
      "Convert your Wegovy dose into pen clicks and see a dose chart for each strength of the FlexTouch pen.",
    Icon: Syringe,
  },
  {
    href: "/tools/bmi-calculator",
    name: "BMI, BMR & Calorie Calculator",
    blurb:
      "Check your BMI against NHS thresholds and estimate your daily calorie needs for weight management.",
    Icon: Calculator,
  },
  {
    href: "/tools/weight-loss-tracker",
    name: "Weight Loss Tracker",
    blurb:
      "Log your weight week by week while on Wegovy or Mounjaro and see your progress over time.",
    Icon: LineChart,
  },
] as const;

export default function ToolsHubPage() {
  return (
    <>
      <BreadcrumbJsonLd pageName="Weight Loss Tools" pagePath="/tools" />
      <div className="container mx-auto max-w-4xl px-4 pb-24 pt-8 sm:px-5 sm:py-12 md:px-6">
        <div className="mb-10 text-center sm:mb-14">
          <h1 className="mx-auto mb-4 max-w-[22ch] text-balance text-2xl font-extrabold text-slate-900 sm:mb-6 sm:max-w-none sm:text-3xl md:text-4xl">
            Free Weight Loss Tools
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
            Calculators and trackers for people using prescription weight loss
            treatment in the UK. These tools are for guidance only — always
            follow the dose your prescriber gives you.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {TOOLS.map(({ href, name, blurb, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-card p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md sm:p-7"
              >
                <Icon className="mb-4 h-6 w-6 text-emerald-600" />
                <h2 className="mb-2 text-xl font-bold text-slate-900">
                  {name}
                </h2>
                <p className="mb-4 flex-1 leading-relaxed text-slate-600">
                  {blurb}
                </p>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                  Open tool
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
