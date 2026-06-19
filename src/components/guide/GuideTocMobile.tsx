import type { TocEntry } from "./GuideLayout";

type Props = {
  toc: TocEntry[];
  darkMode?: boolean;
};

export default function GuideTocMobile({ toc, darkMode = false }: Props) {
  const faqIdx = toc.findIndex((e) => e.id === "faq");
  const tocMobile = faqIdx > 0 ? toc.slice(0, faqIdx) : toc;

  if (!tocMobile.length) return null;

  return (
    <details
      className={`group mb-8 rounded-2xl border xl:hidden ${
        darkMode
          ? "border-slate-700 bg-slate-900"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span
            className={`text-sm font-bold ${darkMode ? "text-slate-100" : "text-slate-800"}`}
          >
            In this guide
          </span>
          <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
            {tocMobile.length}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-5 w-5 shrink-0 transition-transform group-open:rotate-180 ${darkMode ? "text-slate-400" : "text-slate-400"}`}
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </summary>
      <ol
        className={`divide-y px-5 pb-3 ${darkMode ? "divide-slate-800" : "divide-slate-100"}`}
      >
        {tocMobile.map((entry, i) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={`flex items-center gap-3 py-3 text-sm transition-colors hover:text-emerald-600 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  darkMode
                    ? "bg-slate-800 text-slate-400"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {i + 1}
              </span>
              {entry.label}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
