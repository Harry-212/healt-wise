import Link from "next/link";

export default function AuthCodeErrorPage() {
  return (
    <div className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-4 py-12 text-center">
      <h1 className="text-2xl font-bold text-slate-900">Sign-in link problem</h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        We could not complete sign-in from that link. It may have expired or already been used. Try signing in again
        from My Hub.
      </p>
      <Link
        href="/my-hub/login"
        className="mt-8 inline-flex justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
      >
        Back to sign in
      </Link>
    </div>
  );
}
