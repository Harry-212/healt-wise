/**
 * Contact form email — Nodemailer + Hostinger SMTP
 *
 * Hostinger (hPanel → Email → your mailbox → Configuration):
 * - Outgoing server: smtp.hostinger.com
 * - Port 465: SSL/TLS (recommended) → set SMTP_PORT=465 and SMTP_SECURE=true
 * - Port 587: STARTTLS → set SMTP_PORT=587 and SMTP_SECURE=false
 * - Username: full email address (same as SMTP_USER)
 * - Password: the mailbox password
 *
 * Environment variables (add in .env.local for dev, and in Hostinger Node hosting env / Vercel etc. for prod):
 *
 *   SMTP_HOST=smtp.hostinger.com          (optional; this is the default)
 *   SMTP_PORT=465                         (or 587)
 *   SMTP_SECURE=true                      (false when using 587 with STARTTLS)
 *   SMTP_USER=hello@yourdomain.com        (authenticated mailbox)
 *   SMTP_PASS=your-mailbox-password
 *   SMTP_FROM=hello@yourdomain.com        (optional; defaults to SMTP_USER — must be allowed for that mailbox)
 *   CONTACT_INBOX=contact@healthwise360.co.uk   (optional override for the recipient)
 *
 * On shared Node hosting, ensure outbound SMTP is allowed; some plans require using their documented ports only.
 *
 * Troubleshooting `535 5.7.8` / `EAUTH` (authentication failed):
 * - SMTP_USER must be the full mailbox address (e.g. info@yourdomain.com), not only the part before @.
 * - Use the email account password from hPanel → Email → that mailbox (not your Hostinger login).
 * - If the password has # & ! spaces etc., wrap it in double quotes in .env: SMTP_PASS="your pass"
 * - In hPanel email settings, try the listed outgoing host: often smtp.hostinger.com; some Titan mailboxes use smtp.titan.email — match what Hostinger shows for “Outgoing server”.
 * - Port 465: SMTP_SECURE=true. Port 587: SMTP_SECURE=false (STARTTLS).
 */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

const DEFAULT_CONTACT_INBOX = "contact@healthwise360.co.uk";

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

function createHostingerTransport(): nodemailer.Transporter | null {
  const host = process.env.SMTP_HOST?.trim() || "smtp.hostinger.com";
  const portRaw = process.env.SMTP_PORT?.trim();
  const port = portRaw ? Number(portRaw) : 465;
  if (!Number.isFinite(port) || port <= 0) return null;

  const user = process.env.SMTP_USER?.trim();
  /** Trim only leading/trailing whitespace; keeps intentional inner spaces. */
  const pass = process.env.SMTP_PASS?.replace(/^\s+|\s+$/g, "") ?? "";
  if (!user || !pass) return null;

  const secureEnv = process.env.SMTP_SECURE?.trim().toLowerCase();
  const secure =
    secureEnv === "true" ? true : secureEnv === "false" ? false : port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    /** STARTTLS on 587 — required for correct handshake with Hostinger/Titan. */
    requireTLS: port === 587 && !secure,
    auth: { user, pass },
    tls: {
      minVersion: "TLSv1.2",
    },
  });
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
      { error: "Please select a topic and enter a message." },
      { status: 400 },
    );
  }
  if (!acceptedTerms) {
    return NextResponse.json(
      {
        error:
          "You must confirm you have read the Terms of Service and Privacy Policy.",
      },
      { status: 400 },
    );
  }

  const transport = createHostingerTransport();
  if (!transport) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Set SMTP_USER, SMTP_PASS, and optionally SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_FROM on the server.",
      },
      { status: 503 },
    );
  }

  const from =
    process.env.SMTP_FROM?.trim() || process.env.SMTP_USER?.trim() || "";
  if (!from || !isValidEmail(from)) {
    return NextResponse.json(
      { error: "Invalid SMTP_FROM or SMTP_USER. Use a full email address." },
      { status: 503 },
    );
  }

  const to = contactRecipientEmail();
  const text = [
    `Website contact form`,
    ``,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Topic: ${profile}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const safeName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
  const html = `
    <p><strong>Website contact form</strong></p>
    <p><strong>Name:</strong> ${safeName}<br/>
    <strong>Email:</strong> ${escapeHtml(email)}<br/>
    <strong>Topic:</strong> ${escapeHtml(profile)}</p>
    <p><strong>Message</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `.trim();

  try {
    await transport.sendMail({
      from: `"${SITE_BRAND_NAME}" <${from}>`,
      to,
      replyTo: email,
      subject: `[Website contact] ${firstName} ${lastName}`,
      text,
      html,
    });
  } catch (error) {
    console.error("[contact] nodemailer", error);
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
