"use client";

import Link from "next/link";
import { useState } from "react";

const PROFILE_OPTIONS = [
  { value: "General question", label: "General question" },
  { value: "Data or factual correction", label: "Data or factual correction" },
  { value: "Editorial or media", label: "Editorial or media" },
  { value: "Business or partnership", label: "Business or partnership" },
  { value: "Other", label: "Other" },
] as const;

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

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

      const data = (await res.json().catch(() => ({}))) as { error?: string; ok?: boolean };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again or email us directly.",
        );
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
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-emerald-800/10 bg-white/80 p-8 shadow-lg shadow-emerald-950/5 ring-1 ring-emerald-950/5 backdrop-blur-md sm:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-semibold text-emerald-950">Thank you — your message was sent.</p>
        <p className="mt-3 text-base leading-relaxed text-emerald-900/80">
          We usually reply within 1–2 business days. If it is urgent, you can also reach us at{" "}
          <a
            href="mailto:contact@healthwise360.co.uk"
            className="font-semibold text-emerald-800 underline decoration-emerald-400/80 underline-offset-4 hover:text-emerald-950"
          >
            contact@healthwise360.co.uk
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-xl bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-emerald-800/10 bg-white/80 p-6 shadow-lg shadow-emerald-950/5 ring-1 ring-emerald-950/5 backdrop-blur-md sm:p-8"
      noValidate
    >
      <h2 className="text-xl font-bold tracking-tight text-emerald-950 sm:text-2xl">Send a message</h2>
      <p className="mt-2 text-sm leading-relaxed text-emerald-900/75">
        Fields marked <span className="text-red-700">*</span> are required.
      </p>

      {/* Honeypot — hidden from users */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="contact-first" className="block text-sm font-medium text-emerald-950">
            First name <span className="text-red-700">*</span>
          </label>
          <input
            id="contact-first"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-emerald-900/15 bg-white/95 px-3.5 py-2.5 text-emerald-950 shadow-inner shadow-emerald-950/5 outline-none ring-emerald-600/0 transition-[box-shadow,border-color] placeholder:text-emerald-900/35 focus:border-emerald-600/50 focus:ring-2 focus:ring-emerald-600/25"
            placeholder="Jane"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="contact-last" className="block text-sm font-medium text-emerald-950">
            Last name <span className="text-red-700">*</span>
          </label>
          <input
            id="contact-last"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-emerald-900/15 bg-white/95 px-3.5 py-2.5 text-emerald-950 shadow-inner shadow-emerald-950/5 outline-none ring-emerald-600/0 transition-[box-shadow,border-color] placeholder:text-emerald-900/35 focus:border-emerald-600/50 focus:ring-2 focus:ring-emerald-600/25"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-email" className="block text-sm font-medium text-emerald-950">
          Email <span className="text-red-700">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-emerald-900/15 bg-white/95 px-3.5 py-2.5 text-emerald-950 shadow-inner shadow-emerald-950/5 outline-none ring-emerald-600/0 transition-[box-shadow,border-color] placeholder:text-emerald-900/35 focus:border-emerald-600/50 focus:ring-2 focus:ring-emerald-600/25"
          placeholder="you@example.com"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="contact-profile" className="block text-sm font-medium text-emerald-950">
          Topic <span className="text-red-700">*</span>
        </label>
        <select
          id="contact-profile"
          name="profile"
          required
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-emerald-900/15 bg-white/95 px-3.5 py-2.5 text-emerald-950 shadow-inner shadow-emerald-950/5 outline-none ring-emerald-600/0 transition-[box-shadow,border-color] focus:border-emerald-600/50 focus:ring-2 focus:ring-emerald-600/25"
        >
          <option value="">Select a topic</option>
          {PROFILE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="block text-sm font-medium text-emerald-950">
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full resize-y rounded-xl border border-emerald-900/15 bg-white/95 px-3.5 py-2.5 text-emerald-950 shadow-inner shadow-emerald-950/5 outline-none ring-emerald-600/0 transition-[box-shadow,border-color] placeholder:text-emerald-900/35 focus:border-emerald-600/50 focus:ring-2 focus:ring-emerald-600/25"
          placeholder="How can we help?"
        />
      </div>

      <div className="mt-5 flex gap-3 rounded-xl border border-emerald-900/10 bg-emerald-50/50 p-4">
        <input
          id="contact-terms"
          name="acceptedTerms"
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-emerald-800/30 text-emerald-800 focus:ring-emerald-600"
        />
        <label htmlFor="contact-terms" className="text-sm leading-relaxed text-emerald-900/90">
          I have read and agree to the{" "}
          <Link
            href="/terms-of-service"
            className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
          >
            Privacy Policy
          </Link>
          . <span className="text-red-700">*</span>
        </label>
      </div>

      {errorMessage && (
        <p className="mt-4 text-sm font-medium text-red-800" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-950/15 transition-[background-color,opacity] hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
