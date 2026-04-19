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
    desc: "Doctor reviewed guides",
  },
  {
    icon: Stethoscope,
    title: "Compare prices",
    desc: "Compare weight loss treatment options from regulated providers",
  },
] as const;

export default function TrustBarMarquee() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="w-full max-w-full overflow-x-clip border-y border-brand-border bg-brand-card py-5 contain-layout">
      <div className="group flex w-full max-w-full overflow-x-clip">
        <div className="flex shrink-0 motion-safe:animate-marquee motion-safe:transform-gpu items-stretch gap-4 px-2 motion-safe:group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`a-${i}`}
                className="flex w-[280px] shrink-0 flex-col rounded-2xl border border-brand-border/60 bg-brand-surface p-6 transition-colors hover:border-brand-border"
              >
                <Icon
                  className="h-6 w-6 text-brand-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-4 font-bold text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-secondary">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div
          className="flex shrink-0 motion-safe:animate-marquee motion-safe:transform-gpu items-stretch gap-4 px-2 motion-safe:group-hover:[animation-play-state:paused]"
          aria-hidden
        >
          {loop.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`b-${i}`}
                className="flex w-[280px] shrink-0 flex-col rounded-2xl border border-brand-border/60 bg-brand-surface p-6 transition-colors hover:border-brand-border"
              >
                <Icon
                  className="h-6 w-6 text-brand-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-4 font-bold text-brand-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-secondary">
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
