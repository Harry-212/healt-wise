"use client";

import Image from "next/image";
import { imgbbDisplaySrc } from "@/lib/imgbb-display-src";

/**
 * Hero image via Next `Image` so `/_next/image` can serve **WebP/AVIF**
 * (smaller than raw PNG from ImgBB). ImgBB *page* URLs still work via
 * `imgbbDisplaySrc` → `/api/imgbb` (those stay `unoptimized` = no WebP).
 */
export default function BlogArticleHeroImage({
  src,
  alt,
  priority = true,
  /** Use for infographics or text-heavy images: full frame visible, no side crop. */
  showFullImage = false,
}: {
  src: string;
  alt: string;
  /** Set false if the hero is below the fold (rare on article templates). */
  priority?: boolean;
  showFullImage?: boolean;
}) {
  const resolved = imgbbDisplaySrc(src);
  const viaApi = resolved.startsWith("/api/");

  const frame =
    "rounded-2xl border border-slate-200/80 bg-slate-50/60 shadow-sm ring-1 ring-slate-900/5";

  if (showFullImage) {
    return (
      <div className="mx-auto w-full min-w-0 max-w-full sm:max-w-2xl md:max-w-3xl">
        <div className={`overflow-hidden ${frame}`}>
          <Image
            src={resolved}
            alt={alt}
            width={1600}
            height={900}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, min(768px, 48rem)"
            className="h-auto w-full object-contain object-center"
            quality={75}
            priority={priority}
            unoptimized={viaApi}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-full sm:max-w-2xl md:max-w-3xl">
      <div className={`relative aspect-video w-full overflow-hidden ${frame}`}>
        <Image
          src={resolved}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, min(768px, 48rem)"
          className="object-cover object-center"
          quality={70}
          priority={priority}
          unoptimized={viaApi}
        />
      </div>
    </div>
  );
}
