/**
 * Left ~40% band — darker scrim so copy stays off the photo; rest of hero stays bright.
 * Used on all GLP-1 compare photo heroes (price pages + triple compare hub).
 */
export function CompareHeroPhotoOverlays() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[40%] bg-[linear-gradient(to_right,rgba(2,6,23,0.9)_0%,rgba(2,6,23,0.72)_50%,rgba(2,6,23,0.28)_85%,transparent_100%)]"
        aria-hidden
      />
      {/* Mobile: copy is centred — light bottom fade only, not full-width darken */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-slate-950/60 via-slate-950/25 to-transparent lg:hidden"
        aria-hidden
      />
    </>
  );
}
