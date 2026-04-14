import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type TipsZigzagSectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  ctaHref: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
  /** When true, image column is shown second (right on large screens). */
  imageRight?: boolean;
  className?: string;
};

export function TipsZigzagSection({
  eyebrow,
  title,
  children,
  ctaHref,
  ctaLabel,
  imageSrc,
  imageAlt,
  imageRight,
  className = "",
}: TipsZigzagSectionProps) {
  const textBlock = (
    <div className="flex flex-col justify-center py-2">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/90">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 sm:text-[17px]">
        {children}
      </div>
      <Link
        href={ctaHref}
        className="group mt-8 inline-flex w-fit items-center gap-1 text-sm font-semibold text-emerald-800 transition hover:text-emerald-900 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
      >
        {ctaLabel}
        <span
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden
        >
          →
        </span>
      </Link>
    </div>
  );

  const imageBlock = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-md shadow-slate-900/[0.05] sm:aspect-[16/11]">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );

  return (
    <section className={className}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {imageRight ? (
          <>
            {textBlock}
            {imageBlock}
          </>
        ) : (
          <>
            {imageBlock}
            {textBlock}
          </>
        )}
      </div>
    </section>
  );
}
