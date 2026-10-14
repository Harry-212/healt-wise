import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Calculator, Scale, Syringe } from "lucide-react";
import HomeSectionCard from "@/components/ui/HomeSectionCard";

const TOOLS: {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
}[] = [
  {
    id: "mounjaro-click-calculator",
    icon: Syringe,
    title: "Mounjaro click calculator",
    desc: "Find how many clicks give your dose on a KwikPen.",
    href: "/tools/mounjaro-click-calculator",
  },
  {
    id: "wegovy-click-calculator",
    icon: Calculator,
    title: "Wegovy click calculator",
    desc: "Work out your dose on a FlexTouch pen.",
    href: "/tools/wegovy-click-calculator",
  },
  {
    id: "bmi-calculator",
    icon: Scale,
    title: "BMI calculator",
    desc: "Check your BMI and daily calorie needs in seconds.",
    href: "/tools/bmi-calculator",
  },
];

export default function FreeToolsSection() {
  return (
    <HomeSectionCard>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Already on treatment? Use our free tools
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.id}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-bold text-slate-900">{tool.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{tool.desc}</p>
              <Link
                href={tool.href}
                className="mt-auto inline-flex h-10 w-full items-center justify-center rounded-lg border-2 border-emerald-600/55 bg-emerald-50/90 px-3 text-center text-sm font-bold text-emerald-950 shadow-sm transition hover:border-emerald-700/70 hover:bg-emerald-100/90 active:scale-[0.98]"
              >
                Open
              </Link>
            </div>
          );
        })}
      </div>
    </HomeSectionCard>
  );
}
