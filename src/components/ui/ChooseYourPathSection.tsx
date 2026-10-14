import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowDownNarrowWide, Scale, ShieldCheck } from "lucide-react";
import HomeSectionCard from "@/components/ui/HomeSectionCard";

const PATHS: {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
  cta: string;
}[] = [
  {
    id: "lowest-price",
    icon: ArrowDownNarrowWide,
    title: "Find the lowest price",
    desc: "Compare weight loss injection prices by dose, from the lowest price up.",
    href: "/prices/cheapest-options-uk",
    cta: "See lowest prices",
  },
  {
    id: "mounjaro-vs-wegovy",
    icon: Scale,
    title: "Choose between Mounjaro and Wegovy",
    desc: "A simple weight loss injections comparison for the UK, side by side.",
    href: "/compare/wegovy-vs-mounjaro",
    cta: "Compare the two",
  },
  {
    id: "check-pharmacy",
    icon: ShieldCheck,
    title: "Check if a pharmacy is safe",
    desc: "Look up any pharmacy's GPhC number before you order.",
    href: "/pharmacy-safety-gphc-verification",
    cta: "Check a pharmacy",
  },
];

export default function ChooseYourPathSection() {
  return (
    <HomeSectionCard>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        What would you like to do?
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
        Use our free weight loss injection price checker for the UK in the
        way that suits you.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PATHS.map((path) => {
          const Icon = path.icon;
          return (
            <div
              key={path.id}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-bold text-slate-900">{path.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{path.desc}</p>
              <Link
                href={path.href}
                className="mt-auto inline-flex h-10 w-full items-center justify-center rounded-lg border-2 border-emerald-600/55 bg-emerald-50/90 px-3 text-center text-sm font-bold text-emerald-950 shadow-sm transition hover:border-emerald-700/70 hover:bg-emerald-100/90 active:scale-[0.98]"
              >
                {path.cta}
              </Link>
            </div>
          );
        })}
      </div>
    </HomeSectionCard>
  );
}
