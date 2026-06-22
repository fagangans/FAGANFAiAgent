# FAiAgent

Website jualan AI chatbot WhatsApp, dibangun dengan Next.js (App Router) + TypeScript + Tailwind CSS.

## Halaman

- `/` — Landing page (hero, fitur, cara kerja, testimoni, CTA)
- `/fitur` — Detail fitur AI Agent
- `/integrasi` — Channel & integrasi yang didukung
- `/harga` — Paket harga (Starter, Growth, Enterprise)
- `/tentang` — Tentang perusahaan
- `/kontak` — Form kontak / request demo
- `/admin` — Panel admin untuk mengedit semua teks website (perlu login)

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Panel Admin

Buka `/admin`, login dengan password yang diset di environment variable `ADMIN_PASSWORD` (default: `admin123` jika tidak diset — **ganti ini di production**, lihat `.env.example`).

Semua teks di setiap halaman dapat diedit dari panel admin dan disimpan ke `src/data/content.json`, lalu langsung tampil di website tanpa perlu deploy ulang.

## Build production

```bash
npm run build
npm run start
```
