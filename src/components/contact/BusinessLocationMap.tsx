import Link from "next/link";
import { siteBusinessGoogleMapsEmbedUrl, siteBusinessGoogleMapsUrl } from "@/lib/site-contact";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

type Props = {
  className?: string;
  heightClassName?: string;
  showOpenLink?: boolean;
  linkClassName?: string;
  variant?: "dark" | "light";
};

const FRAME_CLASS: Record<NonNullable<Props["variant"]>, string> = {
  dark: "border-slate-700/80 bg-slate-800/50",
  light: "border-emerald-800/10 bg-white/50 ring-1 ring-emerald-950/5",
};

export default function BusinessLocationMap({
  className = "",
  heightClassName = "h-48",
  showOpenLink = true,
  linkClassName = "text-sm font-medium text-emerald-400 hover:text-emerald-300",
  variant = "dark",
}: Props) {
  return (
    <div className={className}>
      <div
        className={`overflow-hidden rounded-xl border ${FRAME_CLASS[variant]} ${heightClassName}`}
      >
        <iframe
          title={`Map showing ${SITE_BRAND_NAME} office at 195-197 Wood Street, London E17 3NU`}
          src={siteBusinessGoogleMapsEmbedUrl()}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {showOpenLink ? (
        <Link
          href={siteBusinessGoogleMapsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-2 inline-block ${linkClassName}`}
        >
          Open in Google Maps
        </Link>
      ) : null}
    </div>
  );
}
