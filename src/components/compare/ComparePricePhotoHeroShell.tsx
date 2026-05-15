"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { CompareHeroPhotoOverlays } from "@/components/compare/CompareHeroPhotoOverlays";

const DEFAULT_MIN_H =
  "min-h-[560px] sm:min-h-[620px] lg:min-h-[650px]";

/**
 * Full-bleed photo hero with left-weighted dark scrims for compare routes.
 */
export default function ComparePricePhotoHeroShell({
  imageSrc,
  imageAlt,
  children,
  minHeightClass = DEFAULT_MIN_H,
}: {
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  minHeightClass?: string;
}) {
  return (
    <section className="relative border-b border-slate-200/80">
      <div className={`relative isolate flex w-full flex-col ${minHeightClass}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-[65%_center] lg:object-center"
        />
        <CompareHeroPhotoOverlays />
        <div className="relative z-20 flex min-h-0 flex-1 flex-col">
          {children}
        </div>
      </div>
    </section>
  );
}
