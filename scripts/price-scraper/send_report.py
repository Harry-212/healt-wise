#!/usr/bin/env python3
"""Emails the monthly price-check report (stdlib only, no third-party packages).

Configured entirely by environment variables (GitHub Actions secrets):
  SMTP_HOST, SMTP_PORT (465 = SSL, otherwise STARTTLS), SMTP_USER, SMTP_PASSWORD,
  REPORT_EMAIL_TO (comma-separated), REPORT_EMAIL_FROM (optional, defaults to SMTP_USER).
If any required value is missing, it prints a notice and exits 0 (email is optional).

  python3 scripts/price-scraper/send_report.py --subject "..." --body-file summary.txt \
      --attach report.md --attach report.csv
"""
import argparse
import mimetypes
import os
import smtplib
import ssl
import sys
from email.message import EmailMessage

REQUIRED = ["SMTP_HOST", "SMTP_USER", "SMTP_PASSWORD", "REPORT_EMAIL_TO"]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--subject", required=True)
    parser.add_argument("--body-file", required=True)
    parser.add_argument("--attach", action="append", default=[])
    args = parser.parse_args()

    missing = [k for k in REQUIRED if not os.environ.get(k, "").strip()]
    if missing:
        print(f"::notice::Report email skipped — missing secrets: {', '.join(missing)}")
        return 0

    host = os.environ["SMTP_HOST"].strip()
    port = int(os.environ.get("SMTP_PORT", "465").strip() or "465")
    user = os.environ["SMTP_USER"].strip()
    password = os.environ["SMTP_PASSWORD"]
    recipients = [r.strip() for r in os.environ["REPORT_EMAIL_TO"].split(",") if r.strip()]
    sender = os.environ.get("REPORT_EMAIL_FROM", "").strip() or user

    msg = EmailMessage()
    msg["Subject"] = args.subject
    msg["From"] = sender
    msg["To"] = ", ".join(recipients)
    with open(args.body_file, encoding="utf-8") as f:
        msg.set_content(f.read())

    for path in args.attach:
        if not os.path.exists(path):
            print(f"::warning::Attachment not found: {path}")
            continue
        ctype, _ = mimetypes.guess_type(path)
        maintype, subtype = (ctype or "text/plain").split("/", 1)
        with open(path, "rb") as f:
            msg.add_attachment(f.read(), maintype=maintype, subtype=subtype, filename=os.path.basename(path))

    context = ssl.create_default_context()
    if port == 465:
        with smtplib.SMTP_SSL(host, port, context=context, timeout=60) as smtp:
            smtp.login(user, password)
            smtp.send_message(msg)
    else:
        with smtplib.SMTP(host, port, timeout=60) as smtp:
            smtp.starttls(context=context)
            smtp.login(user, password)
            smtp.send_message(msg)
    print(f"Report emailed to {len(recipients)} recipient(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
