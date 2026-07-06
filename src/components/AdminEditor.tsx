"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { SiteContent } from "@/lib/content";

type JsonValue = string | number | boolean | JsonValue[] | { [key: string]: JsonValue };

const SECTION_LABELS: Record<string, string> = {
  site: "Identitas Situs",
  nav: "Navigasi",
  home: "Halaman Beranda",
  produk: "Produk & Ekosistem",
  fitur: "Halaman Fitur",
  integrasi: "Halaman Integrasi",
  harga: "Halaman Harga",
  tentang: "Halaman Tentang Kami",
  kontak: "Halaman Kontak",
  footer: "Footer",
};

export default function AdminEditor({ initialContent }: { initialContent: SiteContent }) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [activeTab, setActiveTab] = useState<string>(Object.keys(initialContent)[0]);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  function updateValue(path: (string | number)[], value: string) {
    setContent((prev) => {
      const next = structuredClone(prev) as unknown as Record<string, JsonValue>;
      let cursor: JsonValue = next;
      for (let i = 0; i < path.length - 1; i++) {
        // @ts-expect-error - dynamic nested traversal
        cursor = cursor[path[i]];
      }
      // @ts-expect-error - dynamic nested traversal
      cursor[path[path.length - 1]] = value;
      return next as unknown as SiteContent;
    });
  }

  async function handleSave() {
    setSaving(true);
    setMessage("");

    const res = await fetch("/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });

    setSaving(false);
    setMessage(res.ok ? "Tersimpan! Perubahan langsung tampil di website." : "Gagal menyimpan, coba lagi.");
  }

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  const tabs = Object.keys(content);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
        <div>
          <h1 className="text-lg font-bold text-slate-900">Panel Admin FAiAgent</h1>
          <p className="text-xs text-slate-500">Edit semua teks website tanpa coding.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-orange-300 hover:text-orange-600"
          >
            Lihat Website
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-60"
          >
            {saving ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
          <button
            onClick={handleLogout}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-500 hover:border-red-300 hover:text-red-600"
          >
            Keluar
          </button>
        </div>
      </header>

      {message && (
        <div className="mx-6 mt-4 rounded-lg bg-orange-50 px-4 py-2 text-sm text-orange-700">{message}</div>
      )}

      <div className="flex">
        <nav className="w-56 flex-none border-r border-slate-200 bg-white p-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mb-1 block w-full rounded-lg px-3 py-2 text-left text-sm font-medium ${
                activeTab === tab ? "bg-orange-50 text-orange-700" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {SECTION_LABELS[tab] ?? tab}
            </button>
          ))}
        </nav>

        <main className="flex-1 p-6">
          <FieldGroup
            value={(content as unknown as Record<string, JsonValue>)[activeTab]}
            path={[activeTab]}
            onChange={updateValue}
          />
        </main>
      </div>
    </div>
  );
}

function FieldGroup({
  value,
  path,
  onChange,
}: {
  value: JsonValue;
  path: (string | number)[];
  onChange: (path: (string | number)[], value: string) => void;
}) {
  if (typeof value === "string") {
    const isLong = value.length > 80;
    const label = String(path[path.length - 1]);

    return (
      <div className="mb-4">
        <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">
          {label}
        </label>
        {isLong ? (
          <textarea
            defaultValue={value}
            rows={3}
            onBlur={(e) => onChange(path, e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
          />
        ) : (
          <input
            type="text"
            defaultValue={value}
            onBlur={(e) => onChange(path, e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
          />
        )}
      </div>
    );
  }

  if (typeof value === "boolean" || typeof value === "number") {
    return (
      <div className="mb-4">
        <label className="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">
          {String(path[path.length - 1])}
        </label>
        <input
          type="text"
          defaultValue={String(value)}
          onBlur={(e) => onChange(path, e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
        />
      </div>
    );
  }

  if (Array.isArray(value)) {
    return (
      <div className="space-y-4">
        {value.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="mb-2 text-xs font-semibold text-orange-600">#{idx + 1}</p>
            <FieldGroup value={item} path={[...path, idx]} onChange={onChange} />
          </div>
        ))}
      </div>
    );
  }

  if (typeof value === "object" && value !== null) {
    return (
      <div>
        {Object.entries(value).map(([key, val]) => (
          <FieldGroup key={key} value={val} path={[...path, key]} onChange={onChange} />
        ))}
      </div>
    );
  }

  return null;
}
