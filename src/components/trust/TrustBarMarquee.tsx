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

/**
 * Trust strip under price and comparison heroes: the three cards once.
 * (It used to be an animated marquee that rendered each card six times in
 * the HTML, which crawlers read as repeated page text.)
 */
export default function TrustBarMarquee() {
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
