import Anthropic from "@anthropic-ai/sdk";
import { getContent } from "@/lib/content";
import { buildSystemPrompt } from "@/lib/systemPrompt";
import { ai4chat } from "@/lib/ai4chat";

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
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const rawMessages = (body as { messages?: unknown })?.messages;
  if (!isValidHistory(rawMessages)) {
    return new Response("Invalid messages", { status: 400 });
  }
  const messages: ChatMessage[] = rawMessages;

  const content = await getContent();
  const system = buildSystemPrompt(content);

  const encoder = new TextEncoder();

  async function runAi4ChatFallback(controller: ReadableStreamDefaultController<Uint8Array>) {
    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
    const prompt = `${system}\n\n${lastUserMessage?.content ?? ""}`.trim();
    const answer = await ai4chat(prompt);
    controller.enqueue(encoder.encode(answer));
  }

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        if (!process.env.ANTHROPIC_API_KEY) {
          await runAi4ChatFallback(controller);
          return;
        }

        const client = new Anthropic();
        const claudeStream = client.messages.stream({
          model: "claude-opus-4-8",
          max_tokens: 1024,
          system,
          messages,
        });

        for await (const event of claudeStream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch {
        try {
          await runAi4ChatFallback(controller);
        } catch (fallbackError) {
          const message =
            fallbackError instanceof Error ? fallbackError.message : "Terjadi kesalahan.";
          controller.enqueue(encoder.encode(`\n\n[Maaf, terjadi gangguan: ${message}]`));
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
