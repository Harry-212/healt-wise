"use client";

import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export type SupabaseAuthContextValue = {
  user: User | null;
  ready: boolean;
  signOut: () => Promise<void>;
};

const SupabaseAuthContext = createContext<SupabaseAuthContextValue | null>(null);

export function SupabaseAuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setReady(true);
      return;
    }

    let cancelled = false;
    let subscription: { unsubscribe: () => void } | null = null;

    const start = () => {
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
  }, []);

  const signOut = useCallback(async () => {
    if (!isSupabaseConfigured()) return;
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
