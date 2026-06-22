import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default async function IntegrasiPage() {
  const content = await getContent();
  const { hero, channels } = content.integrasi;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-20">
        <div
          aria-hidden
          className="animate-float absolute -left-20 top-4 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl"
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-4xl font-bold text-slate-900">{hero.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {channels.map((channel, idx) => (
            <Reveal key={channel.name} delay={idx * 80}>
              <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white">
                  ⚡
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{channel.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{channel.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
