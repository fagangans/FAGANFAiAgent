import { getContent } from "@/lib/content";
import { buildSystemPrompt } from "@/lib/systemPrompt";
import { askGemini } from "@/lib/gemini";
import { ai4chat } from "@/lib/ai4chat";
import { askOpenRouter } from "@/lib/openrouter";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

function isValidHistory(value: unknown): value is ChatMessage[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.length <= MAX_MESSAGES &&
    value.every(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length > 0 &&
        m.content.length <= MAX_MESSAGE_LENGTH
    )
  );
}

export async function POST(request: Request) {
  if (!process.env.GEMINI_API_KEY && !process.env.OPENROUTER_API_KEY) {
    return new Response("Chat AI belum dikonfigurasi (GEMINI_API_KEY / OPENROUTER_API_KEY belum diisi).", {
      status: 503,
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!isValidHistory(messages)) {
    return new Response("Invalid messages", { status: 400 });
  }

  const content = await getContent();
  const system = buildSystemPrompt(content);

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        let text: string;
        try {
          const prompt = [
            system,
            ...messages.map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`),
          ].join("\n\n");
          text = await ai4chat(prompt);
        } catch {
          try {
            text = await askGemini(system, messages);
          } catch {
            text = await askOpenRouter(system, messages);
          }
        }
        controller.enqueue(encoder.encode(text));
      } catch (error) {
        const message = error instanceof Error ? error.message : "Terjadi kesalahan.";
        controller.enqueue(encoder.encode(`\n\n[Maaf, terjadi gangguan: ${message}]`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
