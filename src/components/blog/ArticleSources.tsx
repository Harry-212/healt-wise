import { getArticleSources } from "@/lib/blog-article-sources";

/** "Sources & further reading" list at the end of a blog article. */
export default function ArticleSources({
  slug,
  darkMode = false,
}: {
  slug: string;
  darkMode?: boolean;
}) {
  const sources = getArticleSources(slug);
  if (sources.length === 0) return null;

  return (
    <section id="sources" className="mt-12 scroll-mt-28">
      <h2
        className={`text-xl font-semibold ${
          darkMode ? "text-slate-100" : "text-slate-900"
        }`}
      >
        Sources &amp; further reading
      </h2>
      <p
        className={`mt-2 text-sm ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Official UK guidance and published research on the topics covered in
        this article.
      </p>
      <ol className="mt-5 space-y-3">
        {sources.map((src, i) => (
          <li
            key={src.href}
            className={`flex gap-4 rounded-xl border p-4 ${
              darkMode
                ? "border-slate-800 bg-slate-900/60"
                : "border-slate-100 bg-slate-50/60"
            }`}
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                darkMode ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-600"
              }`}
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <a
                href={src.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold underline-offset-2 hover:underline ${
                  darkMode ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {src.label}
              </a>
              <p
                className={`mt-0.5 text-xs ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {src.publisher}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
