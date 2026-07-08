// Ported from FaganLenwy WhatsApp bot (WhatsApp/scrape/Ai4Chat.js).
// Unofficial ai4chat.co-backed endpoint, used as a free, no-API-key fallback.
export async function ai4chat(prompt: string): Promise<string> {
  const url = new URL(
    "https://yw85opafq6.execute-api.us-east-1.amazonaws.com/default/boss_mode_15aug"
  );
  url.search = new URLSearchParams({
    text: prompt,
    country: "Europe",
    user_id: "Av0SkyG00D",
  }).toString();

  const response = await fetch(url.toString(), {
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 11; Infinix)",
      Referer: "https://www.ai4chat.co/pages/riddle-generator",
    },
    signal: AbortSignal.timeout(20000),
  });

  if (!response.ok) {
    throw new Error(`Ai4Chat request failed with status ${response.status}`);
  }

  const result = (await response.text()).trim();
  if (!result) {
    throw new Error("Ai4Chat returned an empty response");
  }

  return formatAi4ChatAnswer(result);
}

// Ported from WhatsApp/lib/textFormatter.js, adapted for a Markdown-rendering
// web chat UI instead of WhatsApp's plain-text *bold* convention.
export function formatAi4ChatAnswer(raw: string): string {
  let text = raw.trim();

  if (
    (text.startsWith('"') && text.endsWith('"')) ||
    (text.startsWith("'") && text.endsWith("'"))
  ) {
    text = text.slice(1, -1);
  }

  text = text
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t")
    .replace(/\\r/g, "")
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, "")
    .trim();

  return text;
}
