"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center">
        <p className="text-lg font-semibold text-orange-700">Terima kasih!</p>
        <p className="mt-2 text-sm text-orange-600">
          Pesan Anda telah terkirim. Tim kami akan menghubungi Anda segera.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="name">
          Nama
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-orange-500 focus:outline-none"
          placeholder="Nama lengkap Anda"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-orange-500 focus:outline-none"
          placeholder="nama@email.com"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700" htmlFor="message">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-orange-500 focus:outline-none"
          placeholder="Ceritakan kebutuhan bisnis Anda"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
      >
        Kirim Pesan
      </button>
    </form>
  );
}
