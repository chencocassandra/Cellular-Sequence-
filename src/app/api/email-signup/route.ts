import { NextResponse } from "next/server";

/**
 * PLACEHOLDER integration point for email capture.
 * Wire this handler to Mailchimp, Klaviyo, or another list tool later.
 * Do not hardcode a provider SDK until that choice is confirmed.
 */
export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
  }

  // PLACEHOLDER: send `email` to the chosen ESP here.
  // Example (do not enable until configured):
  // await fetch(process.env.EMAIL_LIST_WEBHOOK_URL, { method: "POST", body: JSON.stringify({ email }) });

  console.info("[PLACEHOLDER email signup — not sent to a provider yet]", email);

  return NextResponse.json({
    ok: true,
    provider: "placeholder",
    message: "Stored locally in logs only until an email tool is connected.",
  });
}
