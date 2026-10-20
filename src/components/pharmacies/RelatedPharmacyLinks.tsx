import Link from "next/link";

/**
 * Cross-links between the partner pharmacy reviews, so a reader comparing one
 * provider can reach the others from the review itself. Only reviews that
 * exist as profile pages are listed.
 */
const RELATED: Record<string, { slug: string; name: string; blurb: string }> = {
  "pharmacy-me": {
    slug: "pharmacy-me",
    name: "Pharmacy + Me",
    blurb: "an online pharmacy with Wegovy and Mounjaro pens",
  },
  "reach-online-pharmacy": {
    slug: "reach-online-pharmacy",
    name: "Reach Online Pharmacy",
    blurb: "an online pharmacy with a weight loss service",
  },
  dosedirect: {
    slug: "dosedirect",
    name: "DoseDirect",
    blurb: "an online clinic that includes delivery",
  },
  slinic: {
    slug: "slinic",
    name: "Slinic",
    blurb: "an online clinic that includes the consultation",
  },
  "jood-life": {
    slug: "jood-life",
    name: "Jood Life",
    blurb: "an online weight loss service",
  },
};

export default function RelatedPharmacyLinks({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const others = Object.values(RELATED).filter((p) => p.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <aside
      aria-labelledby="related-pharmacies-heading"
      className="mx-auto mt-10 max-w-4xl px-4 pb-10 text-sm leading-relaxed text-slate-700 sm:px-5"
    >
      <h2
        id="related-pharmacies-heading"
        className="text-lg font-bold text-slate-900"
      >
        Compare other pharmacies we review
      </h2>
      <p className="mt-2">
        Comparing providers before you order? These reviews cover similar
        services, so you can check the same dose side by side:
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1.5">
        {others.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/pharmacies/${p.slug}`}
              className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
            >
              {p.name} review
            </Link>
            : {p.blurb}.
          </li>
        ))}
      </ul>
      <p className="mt-3">
        Or{" "}
        <Link
          href="/pharmacies"
          className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
        >
          browse every pharmacy we review
        </Link>
        .
      </p>
    </aside>
  );
}
