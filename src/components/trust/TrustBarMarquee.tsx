import { ShieldCheck, Stethoscope, Asterisk } from "lucide-react";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Pharmacy registration checked",
    desc: "Provider and dispensing pharmacy details reviewed",
  },
  {
    icon: Asterisk,
    title: "UK weight-management providers",
    desc: "Online doctors, programmes and pharmacies in one matrix",
  },
  {
    icon: Stethoscope,
    title: "Compare prices",
    desc: "Independent totals from regulated UK providers",
  },
] as const;

type Props = {
  /** Static row of unique cards (no marquee duplication). */
  staticRow?: boolean;
};

export default function TrustBarMarquee({ staticRow = false }: Props) {
  if (staticRow) {
    return (
      <div className="w-full max-w-full overflow-x-clip border-y border-brand-border bg-brand-card py-5 contain-layout">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-4 px-4 md:px-8">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex w-full max-w-[280px] flex-col rounded-2xl border border-brand-border/60 bg-brand-surface p-6 transition-colors hover:border-brand-border sm:w-[280px]"
              >
                <Icon
                  className="h-6 w-6 text-brand-primary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="mt-4 font-bold text-brand-primary">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-secondary">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

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
                <p className="mt-4 font-bold text-brand-primary">
                  {item.title}
                </p>
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
                <p className="mt-4 font-bold text-brand-primary">
                  {item.title}
                </p>
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
