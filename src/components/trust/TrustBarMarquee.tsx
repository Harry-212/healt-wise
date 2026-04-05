import { ShieldCheck, Package, Stethoscope, Asterisk } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Trusted",
    desc: "GPhC verified listings",
  },
  {
    icon: Asterisk,
    title: "UK licensed",
    desc: "UK pharmacy regulated context",
  },
  {
    icon: Package,
    title: "Capable",
    desc: "Doctor-reviewed guides",
  },
  {
    icon: Stethoscope,
    title: "Compare Prices",
    desc: "Find the best deals on Mounjaro & Wegovy",
  },
];

export default function TrustBarMarquee() {
  // Triple the items so it flows seamlessly across ultra-wide monitors
  const loop = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="w-full max-w-full overflow-x-clip border-y border-brand-border bg-brand-card py-5">
      <div className="group flex w-full max-w-full overflow-x-clip">
        <div className="flex shrink-0 animate-marquee items-stretch gap-4 px-2 group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex w-[280px] shrink-0 flex-col rounded-2xl bg-brand-surface p-6 border border-brand-border/60 transition-colors hover:border-brand-border"
              >
                <Icon
                  className="h-6 w-6 text-brand-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-4 font-bold text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-brand-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
        {/* Exact duplicate for the seamless looping effect */}
        <div
          className="flex shrink-0 animate-marquee items-stretch gap-4 px-2 group-hover:[animation-play-state:paused]"
          aria-hidden
        >
          {loop.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i + loop.length}
                className="flex w-[280px] shrink-0 flex-col rounded-2xl bg-brand-surface p-6 border border-brand-border/60 transition-colors hover:border-brand-border"
              >
                <Icon
                  className="h-6 w-6 text-brand-primary"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-bold text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-brand-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
