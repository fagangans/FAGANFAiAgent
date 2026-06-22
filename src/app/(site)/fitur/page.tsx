import Link from "next/link";
import { getContent } from "@/lib/content";

export default async function FiturPage() {
  const content = await getContent();
  const { hero, sections } = content.fitur;

  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900">{hero.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className="flex flex-col gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm md:flex-row md:items-center"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
                {idx + 1}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                <p className="mt-2 text-slate-600">{section.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-500 py-14">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white">Coba semua fitur ini sekarang</h2>
          <Link
            href="/kontak"
            className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-emerald-600 shadow-md transition hover:bg-emerald-50"
          >
            Mulai Gratis
          </Link>
        </div>
      </section>
    </>
  );
}
