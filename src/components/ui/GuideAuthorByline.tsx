import Link from "next/link";
import {
  ALISTAIR_GREENWOOD_NAME,
  ALISTAIR_GREENWOOD_PROFILE_PATH,
} from "@/lib/seo/author-ref";

/**
 * Visible author attribution for the two principal medicine guides (Task 150).
 * Shown immediately before the "Last updated" date. It names Alistair as the
 * author only; it makes no clinical-review claim.
 */
export default function GuideAuthorByline() {
  return (
    <span data-author-byline>
      Written by{" "}
      <Link
        href={ALISTAIR_GREENWOOD_PROFILE_PATH}
        rel="author"
        className="font-bold text-slate-800 underline decoration-slate-300 underline-offset-2 hover:text-emerald-800"
      >
        {ALISTAIR_GREENWOOD_NAME}
      </Link>
    </span>
  );
}
