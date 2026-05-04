import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_INBOX = "contact@healthwise360.co.uk";

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
      { error: "You must confirm you have read the Terms and Conditions and Privacy Policy." },
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

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "Healthwise360 <onboarding@resend.dev>";

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

  const { error } = await resend.emails.send({
    from,
    to: [CONTACT_INBOX],
    replyTo: email,
    subject: `[Website contact] ${firstName} ${lastName}`,
    text,
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
