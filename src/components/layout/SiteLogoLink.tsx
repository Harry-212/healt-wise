import Link from "next/link";
import Image from "next/image";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { SITE_LOGO_SRC } from "@/lib/site-assets";

type SiteLogoLinkProps = {
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onClick?: () => void;
};

/**
 * Site logo links to home. Served directly (not via `/_next/image`) so
 * "Open image in new tab" displays inline instead of forcing a download.
 */
export default function SiteLogoLink({
  className = "",
  imageClassName = "h-9 w-auto max-w-[118px] object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)] sm:h-14 sm:max-w-none md:h-[4.5rem]",
  width = 800,
  height = 250,
  priority = false,
  onClick,
}: SiteLogoLinkProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex min-w-0 items-center py-1 transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${SITE_BRAND_NAME} home`}
    >
      <Image
        src={SITE_LOGO_SRC}
        alt={`${SITE_BRAND_NAME} logo`}
        width={width}
        height={height}
        className={imageClassName}
        fetchPriority={priority ? "high" : "low"}
        priority={priority}
        unoptimized
      />
    </Link>
  );
}
