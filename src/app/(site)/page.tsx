import Link from "next/link";
import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import ChatMockup from "@/components/ChatMockup";
import DashboardMock from "@/components/DashboardMock";
import { iconForIndex, CheckIcon } from "@/components/icons";
import { CHANNELS } from "@/components/BrandLogos";
import { STEP_ILLUSTRATIONS, AiReplyIllustration } from "@/components/Illustrations";

const showcasePoints = [
  "Balasan kontekstual yang terdengar manusiawi",
  "Eskalasi otomatis ke agen saat dibutuhkan",
  "Laporan performa real-time di satu dashboard",
];

const marqueeItems = [
  "E-Commerce",
  "Fashion & Retail",
  "Kuliner & F&B",
  "Properti",
  "Klinik & Kesehatan",
  "Pendidikan",
  "Travel & Tour",
  "Otomotif",
];

export default async function HomePage() {
  const content = await getContent();
  const { hero, logosTitle, features, howItWorks, testimonials, ctaBanner } = content.home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div
          aria-hidden
          className="animate-drift absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-drift-rev absolute -right-24 top-32 h-80 w-80 rounded-full bg-teal-300/40 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-float-slow absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                <span className="animate-soft-pulse h-2 w-2 rounded-full bg-emerald-500" />
                {hero.badge}
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 lg:mx-0">{hero.subtitle}</p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/kontak"
                  className="rounded-full bg-emerald-500 px-7 py-3 text-base font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
                >
                  {hero.ctaPrimary}
                </Link>
                <Link
                  href="/fitur"
                  className="rounded-full border border-slate-200 bg-white px-7 py-3 text-base font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-600"
                >
                  {hero.ctaSecondary}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-slate-200 pt-10 lg:mx-0">
                <Stat value={hero.stat1Value} label={hero.stat1Label} />
                <Stat value={hero.stat2Value} label={hero.stat2Label} />
                <Stat value={hero.stat3Value} label={hero.stat3Label} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={250} className="lg:order-2">
            <ChatMockup />
          </Reveal>
        </div>
      </section>

      {/* Logos */}
      <section className="overflow-hidden border-y border-slate-100 bg-white py-8">
        <Reveal>
          <p className="text-center text-sm font-medium text-slate-400">{logosTitle}</p>
        </Reveal>
        <div className="group relative mt-6 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
            {marqueeItems.map((label, i) => (
              <span key={`a-${i}`} className="whitespace-nowrap text-base font-semibold text-slate-400">
                {label}
              </span>
            ))}
          </div>
          <div aria-hidden className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
            {marqueeItems.map((label, i) => (
              <span key={`b-${i}`} className="whitespace-nowrap text-base font-semibold text-slate-400">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Satu AI untuk Semua Channel Chat</h2>
            <p className="mt-4 text-slate-600">
              Hubungkan WhatsApp dan kanal favorit pelanggan Anda — semua percakapan dibalas otomatis dari satu tempat.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {CHANNELS.map((ch, idx) => (
            <Reveal key={ch.name} delay={idx * 70}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                <span className={`${ch.color} transition duration-300 group-hover:scale-110`}>
                  <ch.Logo className="h-9 w-9" />
                </span>
                <span className="text-sm font-medium text-slate-600">{ch.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Showcase — dashboard */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
                Dashboard Analitik
              </span>
              <h2 className="mt-5 text-3xl font-bold text-slate-900">
                Pantau Semua Percakapan dalam Satu Layar
              </h2>
              <p className="mt-4 text-slate-600">
                Lihat jumlah chat masuk, tingkat balasan AI, dan konversi penjualan secara real-time. Ambil
                keputusan berdasarkan data, bukan tebakan.
              </p>
              <ul className="mt-6 space-y-3">
                {showcasePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <DashboardMock />
          </Reveal>
        </div>
      </section>

      {/* Showcase — AI reply */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <Reveal className="lg:order-2">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
            <AiReplyIllustration className="h-full w-full" />
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:order-1">
          <div>
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
              AI Generatif
            </span>
            <h2 className="mt-5 text-3xl font-bold text-slate-900">
              Membalas Pelanggan 24/7, Secepat Kilat
            </h2>
            <p className="mt-4 text-slate-600">
              AI memahami maksud pelanggan dan menjawab dengan natural — dari tanya stok, harga, hingga
              membuatkan link pembayaran. Tim Anda cukup fokus pada hal yang benar-benar penting.
            </p>
            <Link
              href="/fitur"
              className="mt-6 inline-block rounded-full bg-emerald-500 px-7 py-3 text-base font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg"
            >
              Lihat Semua Fitur
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">{features.title}</h2>
            <p className="mt-4 text-slate-600">{features.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, idx) => {
            const Icon = iconForIndex(idx);
            return (
              <Reveal key={item.title} delay={idx * 80}>
                <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900">{howItWorks.title}</h2>
              <p className="mt-4 text-slate-600">{howItWorks.subtitle}</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {howItWorks.steps.map((step, idx) => {
              const Illustration = STEP_ILLUSTRATIONS[idx % STEP_ILLUSTRATIONS.length];
              return (
                <Reveal key={step.title} delay={idx * 120}>
                  <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="overflow-hidden rounded-xl bg-emerald-50/50">
                      <Illustration className="h-40 w-full" />
                    </div>
                    <div className="mt-5 flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-slate-900">{testimonials.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.items.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 100}>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm text-slate-600">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-emerald-500 py-16">
        <Reveal>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white">{ctaBanner.title}</h2>
            <p className="mt-4 text-emerald-50">{ctaBanner.subtitle}</p>
            <Link
              href="/kontak"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-emerald-600 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-lg"
            >
              {ctaBanner.ctaLabel}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}
