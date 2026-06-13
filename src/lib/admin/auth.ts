import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "hw_admin_session";
export const ADMIN_SESSION_VALUE = "authenticated";

export function getAdminDashboardPassword(): string {
  return process.env.ADMIN_DASHBOARD_PASSWORD?.trim() || "180426";
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === ADMIN_SESSION_VALUE;
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  };
}
