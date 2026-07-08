"use client";

import { useEffect, useRef, useState } from "react";
import { ChatIcon } from "./icons";

type Message = { role: "user" | "assistant"; content: string };

export default function InlineAIChat({ phone }: { phone: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Halo! 👋 Aku Fai, Customer Service AI dari FAiAgent. Ada yang bisa dibantu? Kalau butuh respons cepat langsung dari tim kami, hubungi ${phone}, atau lanjutkan chat di sini, aku siap bantu 24 jam.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.body) throw new Error("Tidak ada respons dari server.");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: "assistant",
          content: `Maaf, koneksi terputus. Coba lagi sebentar ya, atau hubungi kami langsung di ${phone}.`,
        };
        return copy;
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex h-[26rem] flex-col overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-lg">
      <div className="flex items-center gap-2 bg-orange-500 px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">
          <ChatIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">Fai Customer Service AI</p>
          <p className="flex items-center gap-1 text-xs text-orange-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Online sekarang
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto bg-orange-50/40 px-3 py-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
              m.role === "user"
                ? "ml-auto rounded-tr-none bg-orange-100 text-slate-800"
                : "rounded-tl-none bg-white text-slate-700 shadow-sm"
            }`}
          >
            {m.content || (sending && i === messages.length - 1 ? "..." : "")}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-slate-100 bg-white p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pertanyaan..."
          disabled={sending}
          className="flex-1 rounded-full border border-slate-200 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={sending || !input.trim()}
          className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-50"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
