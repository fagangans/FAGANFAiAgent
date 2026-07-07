import { getContent } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { ChatIcon } from "@/components/icons";

export default async function KontakPage() {
  const content = await getContent();
  const { hero } = content.kontak;
  const { phone } = content.site;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20">
      <div
        aria-hidden
        className="animate-float-slow absolute -right-20 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"
      />
      <Reveal>
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{hero.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
        </div>
      </Reveal>

      {/* AI chat — default / primary way to reach us */}
      <Reveal delay={100}>
        <div className="relative mx-auto mt-12 max-w-lg px-6">
          <div className="rounded-2xl border border-orange-200 bg-white p-5 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white">
                <ChatIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">Fai — Asisten AI FAiAgent</p>
                <p className="flex items-center gap-1 text-xs text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online sekarang
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-xl rounded-tl-none bg-orange-50 px-4 py-3 text-sm text-slate-700">
              Halo! 👋 Ada yang bisa dibantu soal FAiAgent? Kalau butuh respons cepat langsung dari tim kami,
              hubungi <span className="font-semibold text-orange-700">{phone}</span> — atau lanjutkan chat di
              sini, AI kami siap bantu 24 jam.
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">
              Klik ikon chat oranye di pojok kanan bawah layar untuk mulai ngobrol.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Contact form — secondary option */}
      <Reveal delay={200}>
        <div className="relative mx-auto mt-10 max-w-lg px-6">
          <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-slate-400">
            Atau isi form di bawah
          </p>
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
