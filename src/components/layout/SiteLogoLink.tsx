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
 * Site logo links to home. `/_next/image` on this Hostinger deploy always
 * returns `Content-Disposition: attachment` regardless of next.config.ts
 * headers() — harmless for normal `<img>` rendering (browsers ignore that
 * header for subresource loads), it only turns "open image in new tab"
 * into a download.
 */
export default function SiteLogoLink({
  className = "",
  imageClassName = "h-9 w-auto max-w-[118px] object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)] sm:h-14 sm:max-w-none md:h-[4.5rem]",
  width = 800,
  height = 250,
  priority = false,
  onClick,
}: SiteLogoLinkProps) {
  const logoLabel = `${SITE_BRAND_NAME} logo`;
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex min-w-0 items-center py-1 transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${SITE_BRAND_NAME} home`}
    >
      <Image
        src={SITE_LOGO_SRC}
        alt={logoLabel}
        title={logoLabel}
        width={width}
        height={height}
        className={imageClassName}
        fetchPriority={priority ? "high" : "low"}
        priority={priority}
      />
    </Link>
  );
}
