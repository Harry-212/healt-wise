"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, KeyRound, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { SITE_LOGO_SRC } from "@/lib/site-assets";

export default function SetPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionReady, setSessionReady] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  const checkSession = useCallback(async () => {
    if (!isSupabaseConfigured()) {
      setSessionReady(true);
      setHasSession(false);
      return;
    }
    const supabase = createBrowserSupabaseClient();
    const { data } = await supabase.auth.getSession();
    setHasSession(!!data.session);
    setSessionReady(true);
  }, []);

  useEffect(() => {
    void checkSession();
  }, [checkSession]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    if (!isSupabaseConfigured()) {
      setError("This site is not connected to Supabase yet.");
      return;
    }

    setBusy(true);
    const supabase = createBrowserSupabaseClient();
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) {
        setError(updateError.message);
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
              <KeyRound className="h-5 w-5 text-violet-700" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Choose a new password</h1>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Enter a strong password below. You will be signed in automatically after it is updated.
              </p>
            </div>
          </div>

          {!isSupabaseConfigured() && (
            <p className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
              Missing Supabase environment variables. Add your project keys to continue.
            </p>
          )}

          {sessionReady && !hasSession && isSupabaseConfigured() && (
            <p className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
              This link is invalid or has expired. Request a new reset email from the sign-in page.
            </p>
          )}

          {error && (
            <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-slate-700">
                New password
              </label>
              <div className="relative mt-1.5">
                <input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  required
                  minLength={6}
                  disabled={!hasSession}
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-11 text-slate-900 outline-none ring-violet-500/30 transition focus:border-violet-400 focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700">
                Confirm password
              </label>
              <div className="relative mt-1.5">
                <input
                  id="confirm-password"
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={confirm}
                  onChange={(ev) => setConfirm(ev.target.value)}
                  required
                  minLength={6}
                  disabled={!hasSession}
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-11 text-slate-900 outline-none ring-violet-500/30 transition focus:border-violet-400 focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                  aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                  aria-pressed={showConfirm}
                >
                  {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={busy || !hasSession}
              className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 disabled:opacity-70"
            >
              Update password & continue
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-600">
            <Link href="/my-hub/login" className="font-semibold text-violet-700 hover:text-violet-800">
              Back to sign in
            </Link>
          </p>

          <p className="mt-4 flex items-start justify-center gap-2 text-center text-xs text-slate-400">
            <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <span>Use a unique password you do not reuse on other sites.</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
