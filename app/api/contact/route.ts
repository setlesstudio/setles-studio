import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(val: unknown): string {
  return typeof val === "string" ? val.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;") : "";
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const service = sanitize(body.service);
  const message = sanitize(body.message);

  if (!name || !email || !service || service === "Select a service" || !message) {
    return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const company = sanitize(body.company);
  const phone = sanitize(body.phone);
  const website = sanitize(body.website);
  const images = sanitize(body.images);
  const deadline = sanitize(body.deadline);
  const budget = sanitize(body.budget);

  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:6px 12px;font-weight:600;color:#1C1814;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#4A443D">${value}</td></tr>`
      : "";

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#FAF7F2;font-family:sans-serif">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid rgba(28,24,20,0.08)">
    <div style="background:#F26A1B;padding:28px 32px">
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700">New Project Inquiry</h1>
      <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:14px">Setles Studio — Contact Form</p>
    </div>
    <div style="padding:28px 32px">
      <table style="width:100%;border-collapse:collapse">
        ${row("Full Name", name)}
        ${row("Company", company)}
        ${row("Email", email)}
        ${row("Phone / WhatsApp", phone)}
        ${row("Website", website)}
        ${row("Service Required", service)}
        ${row("Number of Images", images)}
        ${row("Deadline", deadline)}
        ${row("Budget", budget)}
      </table>
      <div style="margin-top:20px;padding:16px;background:#FAF7F2;border-radius:10px">
        <p style="margin:0 0 6px;font-weight:600;color:#1C1814;font-size:14px">Project Details</p>
        <p style="margin:0;color:#4A443D;font-size:14px;line-height:1.6;white-space:pre-wrap">${message}</p>
      </div>
    </div>
    <div style="padding:16px 32px;background:#FAF7F2;border-top:1px solid rgba(28,24,20,0.06)">
      <p style="margin:0;font-size:12px;color:#9E9890">Reply directly to this email to respond to ${name}.</p>
    </div>
  </div>
</body>
</html>`;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Setles Studio Contact" <${process.env.SMTP_USER}>`,
      to: "setlesstudio@gmail.com",
      replyTo: email,
      subject: "New Contact Form Inquiry - Setles Studio",
      html,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
