"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { SearchItem, SearchItemType } from "@/lib/search/static-search";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ORDER: SearchItemType[] = [
  "Treatment",
  "Compare",
  "Price",
  "Guide",
  "Blog",
  "Tool",
];

export default function SearchModal({ open, onClose }: Props) {
  const [items, setItems] = useState<SearchItem[]>([]);
  const [q, setQ] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!open || loaded) return;
    fetch("/api/search-index")
      .then((r) => r.json())
      .then((d: { items: SearchItem[] }) => {
        setItems(d.items ?? []);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, [open, loaded]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return items;
    return items.filter((i) => {
      const hay = `${i.title} ${i.keywords ?? ""} ${i.href}`.toLowerCase();
      return hay.includes(t);
    });
  }, [items, q]);

  const grouped = useMemo(() => {
    const m = new Map<SearchItemType, SearchItem[]>();
    for (const t of ORDER) m.set(t, []);
    for (const i of filtered) {
      const list = m.get(i.type);
      if (list) list.push(i);
    }
    return m;
  }, [filtered]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[400] flex items-start justify-center p-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close search"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-brand-border bg-brand-card shadow-2xl">
        <input
          autoFocus
          type="search"
          placeholder="Search treatments, comparisons, blog…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full border-b border-brand-border bg-brand-card px-4 py-3 text-brand-primary outline-none placeholder:text-brand-secondary"
        />
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {ORDER.map((type) => {
            const list = grouped.get(type) ?? [];
            if (list.length === 0) return null;
            return (
              <div key={type} className="mb-4">
                <p className="px-2 py-1 text-xs font-bold uppercase text-brand-secondary">
                  {type}
                </p>
                <ul>
                  {list.map((i) => (
                    <li key={i.href + i.title}>
                      <Link
                        href={i.href}
                        className="block rounded-lg px-3 py-2 text-sm text-brand-primary hover:bg-brand-surface"
                        onClick={onClose}
                      >
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {filtered.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-brand-secondary">
              No results
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
