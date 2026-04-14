"use client";

/**
 * Hero image keeps aspect ratio; display width is capped at ~32% of the
 * article column (compact hero).
 */
export default function BlogArticleHeroImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mx-auto flex w-full min-w-0 justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element -- natural sizing for varied remote assets */}
      <img
        src={src}
        alt={alt}
        className="mx-auto h-auto w-auto max-w-[32%] rounded-2xl border border-slate-200/80 shadow-sm ring-1 ring-slate-900/5"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
