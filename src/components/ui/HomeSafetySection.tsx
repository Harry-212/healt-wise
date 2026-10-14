import { Stethoscope } from "lucide-react";
import HomeSectionCard from "@/components/ui/HomeSectionCard";

const STEPS = [
  {
    title: "Find the GPhC number on the pharmacy's website.",
    desc: "It is usually in the footer.",
  },
  {
    title: "Check it on the official GPhC register.",
    desc: "The name and address should match.",
  },
  {
    title: "Expect a health questionnaire.",
    desc: "A real online pharmacy for weight loss injections will always ask about your weight, health, and other medicines.",
  },
];

const OFFICIAL_LINKS = [
  { label: "GPhC pharmacy register", href: "https://www.pharmacyregulation.org/registers" },
  { label: "MHRA Yellow Card (report side effects)", href: "https://yellowcard.mhra.gov.uk/" },
  { label: "NHS advice on weight loss medicines", href: "https://www.nhs.uk/live-well/healthy-weight/" },
] as const;

export default function HomeSafetySection() {
  return (
    <HomeSectionCard id="safety">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100">
          <Stethoscope className="h-6 w-6 text-emerald-700" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Is it safe to buy weight loss injections online?
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Yes, if you use a UK online pharmacy registered with the GPhC,
            and a prescriber checks your health first. Never buy weight loss
            injections from a website that does not ask about your health.
            Follow these 3 steps before you pay:
          </p>
        </div>
      </div>

      <ol className="mt-6 list-decimal space-y-3 pl-9 text-base leading-relaxed text-slate-700">
        {STEPS.map((step) => (
          <li key={step.title}>
            <strong className="text-slate-900">{step.title}</strong>{" "}
            {step.desc}
          </li>
        ))}
      </ol>

      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600">
        <strong className="text-slate-900">Red flags:</strong> no GPhC
        number, no questions about your health, prices far below every other
        pharmacy, or selling &quot;weight loss pens&quot; without a
        prescription.
      </p>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {OFFICIAL_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-800 underline decoration-emerald-300/80 underline-offset-2 transition hover:text-emerald-950"
          >
            {link.label}
          </a>
        ))}
      </div>
    </HomeSectionCard>
  );
}
