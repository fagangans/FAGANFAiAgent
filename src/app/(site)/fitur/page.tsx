import Link from "next/link";
import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default async function FiturPage() {
  const content = await getContent();
  const { hero, sections } = content.fitur;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20">
        <div
          aria-hidden
          className="animate-float-slow absolute -right-20 top-0 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl"
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-4xl font-bold text-slate-900">{hero.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <Reveal key={section.title} delay={idx * 80}>
              <div className="flex flex-col gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg md:flex-row md:items-center">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
                  {idx + 1}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                  <p className="mt-2 text-slate-600">{section.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-emerald-500 py-14">
        <Reveal>
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold text-white">Coba semua fitur ini sekarang</h2>
            <Link
              href="/kontak"
              className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-emerald-600 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-lg"
            >
              Mulai Gratis
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
