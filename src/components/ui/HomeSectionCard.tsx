import type { ReactNode } from "react";

/**
 * Shared card shell for homepage sections — matches the wrapper already used
 * by OurMethodology / WhyChooseHealthWise, kept in one place now that more
 * sections use it (homepage content refresh, Oct 2026).
 */
export default function HomeSectionCard({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-24 bg-white px-4 py-3 sm:px-6 md:px-8 lg:px-10 ${className}`}
    >
      <div className="mx-auto max-w-[1400px] overflow-x-clip rounded-2xl border border-slate-200/90 bg-linear-to-br from-emerald-50/50 via-white to-slate-50/80 shadow-sm ring-1 ring-slate-100">
        <div className="mx-auto max-w-[1200px] p-5 sm:p-6 md:p-8 lg:p-10">
          {children}
        </div>
      </div>
    </section>
  );
}
