"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export default function MyHubLoginPage() {
  const searchParams = useSearchParams();
  const signup = searchParams.get("signup") === "1";
  const err = searchParams.get("error");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const supabase = useMemo(() => createBrowserSupabaseClient(), []);

  async function sendMagicLink(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) {
      setStatus("Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }
    setLoading(true);
    setStatus(null);
    const origin = window.location.origin;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}/auth/callback?next=/my-hub`,
      },
    });
    setLoading(false);
    if (error) setStatus(error.message);
    else setStatus("Check your email for the magic link.");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 md:px-6">
      <h1 className="text-2xl font-bold text-slate-900">
        {signup ? "Sign up — My Hub" : "Login — My Hub"}
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        We use a secure email magic link (Supabase Auth). No password to remember.
      </p>
      {err ? (
        <p className="mt-4 rounded-lg bg-brand-danger/10 px-3 py-2 text-sm text-brand-danger">
          Sign-in failed. Try again.
        </p>
      ) : null}
      <form onSubmit={sendMagicLink} className="mt-8 space-y-4">
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2"
            autoComplete="email"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-brand-cta py-3 text-sm font-bold text-slate-900 disabled:opacity-60"
        >
          {loading ? "Sending…" : signup ? "Send sign-up link" : "Send login link"}
        </button>
      </form>
      {status ? (
        <p className="mt-4 text-sm text-brand-primary">
          {status}
        </p>
      ) : null}
      <p className="mt-8 text-center text-sm text-slate-500">
        <Link href="/" className="text-brand-primary underline">
          Back to home
        </Link>
      </p>
    </div>
  );
}
