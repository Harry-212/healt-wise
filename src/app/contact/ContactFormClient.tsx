"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

type Status = "idle" | "submitting" | "success" | "error";

const PROFILE_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "Select your profile" },
  { value: "visitor", label: "Visitor / prospective patient" },
  { value: "patient", label: "Patient" },
  { value: "clinician", label: "Clinician / healthcare professional" },
  { value: "media", label: "Media" },
  { value: "business", label: "Business partner" },
  { value: "other", label: "Other" },
];

export default function ContactFormClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);
    const honeypot = String(fd.get("website") ?? "");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          profile,
          message,
          acceptedTerms,
          website: honeypot,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setProfile("");
      setMessage("");
      setAcceptedTerms(false);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  };

  return (
    <div className="relative isolate min-h-[70vh] overflow-hidden bg-linear-to-br from-[#e6f4ea] via-[#d8efe0] to-[#c5e6d4] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <DecorativeCurves />

      <div className="relative z-10 mx-auto max-w-6xl">
        <nav className="mb-8 text-sm font-medium text-emerald-900/70" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-emerald-950">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-emerald-800/50">
              →
            </li>
            <li className="text-emerald-950">Contact</li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
          <header className="max-w-xl lg:pt-4">
            <h1 className="text-balance text-4xl font-bold leading-[1.12] tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl xl:text-[3.5rem]">
              Questions about {SITE_BRAND_NAME}?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-emerald-900/85 sm:text-xl">
              We read every message and usually reply within 1–2 business days. Our business email
              is{" "}
              <a
                href="mailto:contact@healthwise360.co.uk"
                className="font-semibold text-emerald-800 underline decoration-emerald-400/80 underline-offset-4 hover:text-emerald-950"
              >
                contact@healthwise360.co.uk
              </a>
              .
            </p>
            <p className="mt-4 text-base leading-relaxed text-emerald-900/75 sm:text-lg">
              Please do not include sensitive medical information in this form; use a secure
              channel with your clinician for clinical matters.
            </p>
          </header>

          <div
            id="contact-form"
            className="scroll-mt-24 rounded-[1.75rem] bg-white p-6 shadow-xl shadow-emerald-950/10 ring-1 ring-emerald-950/5 sm:p-8 lg:p-10"
          >
            {status === "success" ? (
              <div className="py-6 text-center">
                <p className="text-xl font-semibold text-emerald-950">Thank you</p>
                <p className="mt-3 text-base text-slate-600">
                  Your message has been sent. We will get back to you by email if needed.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-slate-800">
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={(ev) => setFirstName(ev.target.value)}
                      required
                      autoComplete="given-name"
                      className="min-h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-base text-slate-900 outline-none ring-emerald-500/30 transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4"
                      placeholder="First name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-slate-800">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={(ev) => setLastName(ev.target.value)}
                      required
                      autoComplete="family-name"
                      className="min-h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-base text-slate-900 outline-none ring-emerald-500/30 transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-800">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    required
                    autoComplete="email"
                    className="min-h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-base text-slate-900 outline-none ring-emerald-500/30 transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="profile" className="text-sm font-semibold text-slate-800">
                    Profile
                  </label>
                  <select
                    id="profile"
                    name="profile"
                    value={profile}
                    onChange={(ev) => setProfile(ev.target.value)}
                    required
                    className="min-h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-base text-slate-900 outline-none ring-emerald-500/30 transition focus:border-emerald-400 focus:bg-white focus:ring-4"
                  >
                    {PROFILE_OPTIONS.map((opt) => (
                      <option key={opt.value || "empty"} value={opt.value} disabled={opt.value === ""}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                    required
                    rows={6}
                    className="resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none ring-emerald-500/30 transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4"
                    placeholder="How can we help?"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4 text-sm leading-snug text-slate-700">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(ev) => setAcceptedTerms(ev.target.checked)}
                    required
                    className="mt-0.5 size-4 shrink-0 rounded border-slate-300 text-emerald-600 accent-emerald-600"
                  />
                  <span>
                    I have read the{" "}
                    <Link
                      href="/terms-of-service"
                      className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {errorMessage ? (
                  <p className="text-sm font-medium text-red-600" role="alert">
                    {errorMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 min-h-14 w-full touch-manipulation rounded-xl bg-emerald-700 text-lg font-semibold text-white shadow-md shadow-emerald-900/15 transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DecorativeCurves() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute -right-24 top-0 h-[min(90vw,520px)] w-[min(90vw,520px)] text-emerald-600/12"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.75" />
      </svg>
      <svg
        className="absolute -left-32 bottom-0 h-[min(70vw,400px)] w-[min(70vw,400px)] text-teal-600/10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M-20 380 Q120 280 200 200 T420 40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M40 400 Q180 300 260 220 T480 80"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
