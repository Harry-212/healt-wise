import { NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_CONTACT_INBOX = "contact@healthwise360.co.uk";

/** `to` address for contact submissions. Override with CONTACT_INBOX when using Resend’s onboarding sender (sandbox only sends to your account email). */
function contactRecipientEmail(): string {
  const override = process.env.CONTACT_INBOX?.trim();
  if (override && isValidEmail(override)) return override;
  return DEFAULT_CONTACT_INBOX;
}

const MAX_LEN = {
  name: 120,
  email: 254,
  profile: 80,
  message: 8000,
} as const;

function trimStr(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  const s = v.trim();
  if (!s || s.length > max) return null;
  return s;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const o = body as Record<string, unknown>;

  // Honeypot — discard bots quietly
  if (typeof o.website === "string" && o.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const firstName = trimStr(o.firstName, MAX_LEN.name);
  const lastName = trimStr(o.lastName, MAX_LEN.name);
  const email = trimStr(o.email, MAX_LEN.email)?.toLowerCase() ?? null;
  const profile = trimStr(o.profile, MAX_LEN.profile);
  const message = trimStr(o.message, MAX_LEN.message);
  const acceptedTerms = o.acceptedTerms === true;

  if (!firstName || !lastName || !email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid first name, last name, and email." },
      { status: 400 },
    );
  }
  if (!profile || !message) {
    return NextResponse.json(
      { error: "Please select a profile and enter a message." },
      { status: 400 },
    );
  }
  if (!acceptedTerms) {
    return NextResponse.json(
      {
        error:
          "You must confirm you have read the Terms and Conditions and Privacy Policy.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey?.trim()) {
    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Add RESEND_API_KEY to your server environment variables.",
      },
      { status: 503 },
    );
  }

  // Resend: use a verified domain address in production (RESEND_FROM_EMAIL).
  // onboarding@resend.dev matches Resend’s quickstart for testing only.
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || "arya.wirya12@gmail.com";

  const resend = new Resend(apiKey);
  const text = [
    `Website contact form`,
    ``,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Profile: ${profile}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const safeName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
  const html = `
    <p><strong>Website contact form</strong></p>
    <p><strong>Name:</strong> ${safeName}<br/>
    <strong>Email:</strong> ${escapeHtml(email)}<br/>
    <strong>Profile:</strong> ${escapeHtml(profile)}</p>
    <p><strong>Message</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `.trim();

  const to = contactRecipientEmail();

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[Website contact] ${firstName} ${lastName}`,
    text,
    html,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      {
        error:
          "We could not send your message. Please try again later or email us directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
