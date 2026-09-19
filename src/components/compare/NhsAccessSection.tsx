import type { ReactNode } from "react";

export default function NhsAccessSection({
  medicine,
  children,
}: {
  medicine: string;
  children: ReactNode;
}) {
  return (
    <section
      id="nhs-access"
      className="border-b border-slate-200/80 bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl space-y-4 px-4 leading-relaxed text-slate-600 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Is {medicine} available on the NHS?
        </h2>
        {children}
        <p>
          This page compares private prices only. If NHS eligibility is
          relevant to you, your GP or a specialist weight management service is
          the right place to start.
        </p>
      </div>
    </section>
  );
}
