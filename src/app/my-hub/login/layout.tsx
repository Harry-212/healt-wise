import { Suspense } from "react";

export default function MyHubLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<p className="p-8 text-center">Loading…</p>}>{children}</Suspense>;
}
