"use client";

import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SITE_LOGO_SRC } from "@/lib/site-assets";

export default function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error ?? "Login failed");
        return;
      }
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-svh bg-linear-to-b from-slate-50 to-slate-100 px-4 py-10">
      <div className="mx-auto flex w-full max-w-md flex-col gap-8">
        <Link href="/" className="flex justify-center">
          <Image
            src={SITE_LOGO_SRC}
            alt="Health Wise"
            width={320}
            height={100}
            className="h-14 w-auto object-contain object-center sm:h-16"
            priority
          />
        </Link>

        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-100">
              <Lock className="h-5 w-5 text-teal-700" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Admin Dashboard
              </h1>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Enter the admin password to manage Mounjaro and Wegovy compare
                tables.
              </p>
            </div>
          </div>

          {error && (
            <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500/30 transition focus:border-teal-400 focus:ring-2"
                placeholder="Enter admin password"
              />
            </label>

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 disabled:opacity-70"
            >
              {busy ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
