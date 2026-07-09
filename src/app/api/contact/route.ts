import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_LEN = 2000;

function isValidBody(value: unknown): value is { name: string; email: string; message: string } {
  const v = value as Record<string, unknown>;
  return (
    !!v &&
    typeof v.name === "string" &&
    v.name.trim().length > 0 &&
    v.name.length <= 200 &&
    typeof v.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email) &&
    typeof v.message === "string" &&
    v.message.trim().length > 0 &&
    v.message.length <= MAX_LEN
  );
}

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return new Response("Form kontak belum dikonfigurasi (GMAIL_USER / GMAIL_APP_PASSWORD belum diisi).", {
      status: 503,
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  if (!isValidBody(body)) {
    return new Response("Invalid form data", { status: 400 });
  }

  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  try {
    await transporter.sendMail({
      from: `"Form Kontak FAiAgent" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Pesan baru dari ${name} (Form Kontak Website)`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    });
  } catch {
    return new Response("Gagal mengirim pesan, coba lagi sebentar.", { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
