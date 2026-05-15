"use client";

import type { ReactNode } from "react";
import Image from "next/image";

const SHELL_MIN_H =
  "min-h-[560px] sm:min-h-[620px] lg:min-h-[650px]";

/**
 * Full-bleed photo hero with dark scrims for compare price pages (replaces shader-only heroes).
 */
export default function ComparePricePhotoHeroShell({
  imageSrc,
  imageAlt,
  children,
}: {
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <section className="relative border-b border-slate-200/80">
      <div
        className={`relative isolate flex w-full flex-col ${SHELL_MIN_H}`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-slate-950/58"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/88 via-slate-950/48 to-slate-900/38"
          aria-hidden
        />
        <div className="relative z-20 flex min-h-0 flex-1 flex-col">
          {children}
        </div>
      </div>
    </section>
  );
}
