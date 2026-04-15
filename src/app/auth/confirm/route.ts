import { createServerClient } from "@supabase/ssr";
import type { EmailOtpType } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * PKCE / SSR email links (signup, recovery, etc.): verify token on the server
 * and set the session cookie, then redirect to `next`.
 *
 * Email href example (reset password):
 * {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery&next=%2Fmy-hub%2Flogin%2Fset-password
 */
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const token_hash = requestUrl.searchParams.get("token_hash");
  const type = requestUrl.searchParams.get("type") as EmailOtpType | null;
  let next = requestUrl.searchParams.get("next") ?? "/tools/weight-loss-tracker";
  if (!next.startsWith("/") || next.startsWith("//")) {
    next = "/tools/weight-loss-tracker";
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const toError = () => NextResponse.redirect(new URL("/auth/auth-code-error", requestUrl.origin));

  if (!token_hash || !type || !url || !key) {
    return toError();
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options),
        );
      },
    },
  });

  const { error } = await supabase.auth.verifyOtp({
    type,
    token_hash,
  });

  if (error) {
    return toError();
  }

  return NextResponse.redirect(new URL(next, requestUrl.origin));
}
