"use client";

import type { User } from "@supabase/supabase-js";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export type SupabaseAuthContextValue = {
  user: User | null;
  ready: boolean;
  signOut: () => Promise<void>;
};

const SupabaseAuthContext = createContext<SupabaseAuthContextValue | null>(null);

/** Routes where a visitor can sign in (or needs auth state) without a full page load. */
const AUTH_AWARE_PATH_PREFIXES = ["/my-hub", "/tools/weight-loss-tracker", "/admin-dashboard"];

function isAuthAwarePath(pathname: string | null): boolean {
  if (!pathname) return false;
  return AUTH_AWARE_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

/** `@supabase/ssr` stores the session in non-httpOnly `sb-<ref>-auth-token[.N]` cookies. */
function hasSupabaseSessionCookie(): boolean {
  return /(?:^|;\s*)sb-[^=;]*-auth-token(?:\.\d+)?=/.test(document.cookie);
}

export function SupabaseAuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(() => !isSupabaseConfigured());
  const [clientNeeded, setClientNeeded] = useState(false);

  /**
   * The Supabase bundle (~200 KB incl. realtime) is only worth downloading
   * when someone could be signed in: a session cookie exists, or they are on
   * an auth-aware route where they may sign in client-side. Anonymous
   * visitors on content pages skip it entirely.
   */
  useEffect(() => {
    if (!isSupabaseConfigured() || clientNeeded) return;
    if (hasSupabaseSessionCookie() || isAuthAwarePath(pathname)) {
      setClientNeeded(true);
    } else {
      setReady(true);
    }
  }, [pathname, clientNeeded]);

  useEffect(() => {
    if (!clientNeeded) {
      return;
    }

    let cancelled = false;
    let subscription: { unsubscribe: () => void } | null = null;

    const start = async () => {
      if (cancelled) return;
      const { createBrowserSupabaseClient } = await import("@/lib/supabase/client");
      if (cancelled) return;
      const supabase = createBrowserSupabaseClient();
      void supabase.auth.getSession().then(({ data: { session } }) => {
        if (cancelled) return;
        setUser(session?.user ?? null);
        setReady(true);
      });
      const {
        data: { subscription: sub },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        if (!cancelled) setUser(session?.user ?? null);
      });
      subscription = sub;
    };

    const idle =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(start, { timeout: 2500 })
        : null;
    const timeoutId = idle == null ? setTimeout(start, 0) : null;

    return () => {
      cancelled = true;
      if (idle != null) cancelIdleCallback(idle);
      if (timeoutId != null) clearTimeout(timeoutId);
      subscription?.unsubscribe();
    };
  }, [clientNeeded]);

  const signOut = useCallback(async () => {
    if (!isSupabaseConfigured()) return;
    const { createBrowserSupabaseClient } = await import("@/lib/supabase/client");
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  }, [router]);

  const value = useMemo(
    () => ({ user, ready, signOut }),
    [user, ready, signOut],
  );

  return (
    <SupabaseAuthContext.Provider value={value}>{children}</SupabaseAuthContext.Provider>
  );
}

export function useSupabaseAuth(): SupabaseAuthContextValue {
  const ctx = useContext(SupabaseAuthContext);
  if (!ctx) {
    throw new Error("useSupabaseAuth must be used within SupabaseAuthProvider");
  }
  return ctx;
}
