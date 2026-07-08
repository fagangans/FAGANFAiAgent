import Link from "next/link";
import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { iconForIndex } from "@/components/icons";
import { AiReplyIllustration } from "@/components/Illustrations";

export default async function FiturPage() {
  const content = await getContent();
  const { hero, sections } = content.fitur;
  const waLink = `https://wa.me/${content.site.phone.replace(/[^0-9]/g, "")}`;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20">
        <div
          aria-hidden
          className="animate-drift absolute -right-20 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{hero.title}</h1>
              <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-4">
              <AiReplyIllustration className="h-56 w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-10">
          {sections.map((section, idx) => {
            const Icon = iconForIndex(idx);
            return (
              <Reveal key={section.title} delay={idx * 80}>
                <div className="flex flex-col gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg md:flex-row md:items-center">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-orange-500 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                    <p className="mt-2 text-slate-600">{section.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-orange-500 py-14">
        <Reveal>
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="text-2xl font-bold text-white">Coba semua fitur ini sekarang</h2>
            <Link
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-orange-600 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-orange-50 hover:shadow-lg"
            >
              Mulai Gratis
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
