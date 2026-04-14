import { Suspense } from "react";
import LoginGate from "./login-gate";

export const dynamic = "force-dynamic";

type Props = { searchParams: Promise<{ signup?: string }> };

export default async function MyHubLoginPage({ searchParams }: Props) {
  const sp = await searchParams;
  const initialSignup = sp.signup === "1";
  return (
    <Suspense fallback={null}>
      <LoginGate initialSignup={initialSignup} />
    </Suspense>
  );
}
