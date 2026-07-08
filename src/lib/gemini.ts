type ChatMessage = { role: "user" | "assistant"; content: string };

export async function askGemini(system: string, messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY belum diisi");

  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: messages.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
      }),
      signal: AbortSignal.timeout(20000),
    }
  );

  if (!res.ok) {
    throw new Error(`Gemini request failed with status ${res.status}`);
  }

  const data = await res.json();
  const text: string =
    data?.candidates?.[0]?.content?.parts
      ?.map((p: { text?: string }) => p.text ?? "")
      .join("") ?? "";

  if (!text.trim()) throw new Error("Gemini returned an empty response");
  return text;
}
