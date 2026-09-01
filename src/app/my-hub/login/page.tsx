import type { Metadata } from "next";
import { Suspense } from "react";
import LoginGate from "./login-gate";
import { siteOrigin } from "@/lib/seo/site-origin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sign in to My Hub | Healthwise360",
  description: "Sign in to your private Healthwise360 Hub and weight tracker.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteOrigin()}/my-hub/login`,
  },
};

type Props = { searchParams: Promise<{ signup?: string; forgot?: string }> };

export default async function MyHubLoginPage({ searchParams }: Props) {
  const sp = await searchParams;
  const initialForgot = sp.forgot === "1";
  const initialSignup = !initialForgot && sp.signup === "1";
  return (
    <Suspense fallback={null}>
      <LoginGate initialSignup={initialSignup} initialForgot={initialForgot} />
    </Suspense>
  );
}
