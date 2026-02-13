import { NextResponse } from "next/server";

type SignUpPayload = {
  name?: string;
  company?: string;
  email?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#039;";
      default:
        return char;
    }
  });

export async function POST(request: Request) {
  let payload: SignUpPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const name = payload.name?.trim();
  const company = payload.company?.trim();
  const email = payload.email?.trim();

  if (!name || !company || !email) {
    return NextResponse.json(
      { error: "Name, company, and email are required." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Provide a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.SIGNUP_NOTIFICATION_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json(
      { error: "Email delivery is not configured on the server." },
      { status: 500 }
    );
  }

  const messageBody = {
    from: fromEmail,
    to: [toEmail],
    subject: "New 0100 Academy sign-up",
    reply_to: email,
    html: `
      <p>You have a new request from the 0100 Academy sign-up form.</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    `,
    text: [
      "New 0100 Academy sign-up",
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
    ].join("\n"),
  };

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageBody),
  });

  if (!resendResponse.ok) {
    const detail = await resendResponse.text();
    console.error("Resend API error:", detail);
    return NextResponse.json(
      { error: "Unable to send email notification right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
