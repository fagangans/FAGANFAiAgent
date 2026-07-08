type ChatMessage = { role: "user" | "assistant"; content: string };

export async function askOpenRouter(system: string, messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error("OPENROUTER_API_KEY belum diisi");

  const model = process.env.OPENROUTER_MODEL || "qwen/qwen3-30b-a3b";

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: system }, ...messages],
    }),
    signal: AbortSignal.timeout(20000),
  });

  if (!res.ok) {
    throw new Error(`OpenRouter request failed with status ${res.status}`);
  }

  const data = await res.json();
  const text: string = data?.choices?.[0]?.message?.content ?? "";

  if (!text.trim()) throw new Error("OpenRouter returned an empty response");
  return text;
}
