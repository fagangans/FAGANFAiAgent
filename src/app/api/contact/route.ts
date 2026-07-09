import { Resend } from "resend";

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
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const contactTo = process.env.CONTACT_TO_EMAIL?.trim() || "faiagents7@gmail.com";
  const from = process.env.RESEND_FROM?.trim() || "FAiAgent Website <onboarding@resend.dev>";

  if (!resendApiKey) {
    return new Response("Form kontak belum dikonfigurasi (RESEND_API_KEY belum diisi).", {
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
  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: contactTo,
      replyTo: email,
      subject: `Pesan baru dari ${name} (Form Kontak Website)`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    });

    if (error) throw new Error(error.message);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    console.error(`Contact form email failed: ${detail}`);
    return new Response("Gagal mengirim pesan, coba lagi sebentar.", { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
