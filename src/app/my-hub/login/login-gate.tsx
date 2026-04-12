"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { SITE_LOGO_SRC } from "@/lib/site-assets";

export default function LoginGate() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const signup = searchParams.get("signup") === "1";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const title = useMemo(() => (signup ? "Create your free account" : "Sign in to My Hub"), [signup]);
  const subtitle = useMemo(
    () =>
      signup
        ? "Use the same email you will use for the weight tracker. You can start logging weigh-ins right after."
        : "Welcome back — continue to your private weight tracker.",
    [signup],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!isSupabaseConfigured()) {
      setError("This site is not connected to a database yet. Add Supabase keys to your environment.");
      return;
    }

    setBusy(true);
    const supabase = createBrowserSupabaseClient();

    try {
      if (signup) {
        const redirectUrl = `${window.location.origin}/auth/callback?next=${encodeURIComponent("/tools/weight-loss-tracker?start=1")}`;
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: redirectUrl },
        });
        if (signUpError) {
          setError(signUpError.message);
          return;
        }
        if (data.session) {
          router.push("/tools/weight-loss-tracker?start=1");
          router.refresh();
          return;
        }
        setMessage(
          "Check your email for a confirmation link, then sign in here. In Supabase, accounts always appear under Authentication → Users. If you have run the SQL in supabase/schema.sql, a copy also appears in Table editor → public.profiles.",
        );
        return;
      }

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInError) {
        setError(signInError.message);
        return;
      }
      router.push("/tools/weight-loss-tracker?start=1");
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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8"
        >
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100">
              <Lock className="h-5 w-5 text-violet-700" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">{title}</h1>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{subtitle}</p>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 text-sm leading-relaxed text-emerald-950">
            <div className="flex gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              <p>
                <span className="font-semibold text-emerald-900">Your account and tracking stay protected.</span>{" "}
                We do not sell your weigh-ins or use your results for advertising. Sign-in uses a secure Supabase
                account.
              </p>
            </div>
          </div>

          {!isSupabaseConfigured() && (
            <p className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
              Missing <code className="text-xs">NEXT_PUBLIC_SUPABASE_URL</code> or{" "}
              <code className="text-xs">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>. Copy{" "}
              <code className="text-xs">.env.example</code> to <code className="text-xs">.env.local</code> and add your
              project keys.
            </p>
          )}

          {error && (
            <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">{error}</p>
          )}
          {message && (
            <p className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                required
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none ring-violet-500/30 transition focus:border-violet-400 focus:ring-2"
                placeholder="you@example.com"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Password
              <input
                type="password"
                name="password"
                autoComplete={signup ? "new-password" : "current-password"}
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                required
                minLength={6}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none ring-violet-500/30 transition focus:border-violet-400 focus:ring-2"
                placeholder="••••••••"
              />
            </label>

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 disabled:opacity-70"
            >
              {signup ? "Create account & open tracker" : "Sign in & open tracker"}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-600">
            {signup ? (
              <>
                Already registered?{" "}
                <Link href="/my-hub/login" className="font-semibold text-violet-700 hover:text-violet-800">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                New to Health Wise?{" "}
                <Link
                  href="/my-hub/login?signup=1"
                  className="font-semibold text-violet-700 hover:text-violet-800"
                >
                  Sign up free
                </Link>
              </>
            )}
          </p>

          <p className="mt-4 text-center text-xs text-slate-400">
            Weigh-in entries are stored in your browser until you connect cloud sync. Your account is stored securely
            with Supabase. Information only — not medical advice.
          </p>
        </motion.div>

        <p className="text-center text-xs text-slate-500">
          <Link href="/tools/weight-loss-tracker" className="text-violet-700 hover:underline">
            Back to weight tracker
          </Link>
        </p>
      </div>
    </div>
  );
}
