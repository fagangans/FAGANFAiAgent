import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { GrowthIllustration } from "@/components/Illustrations";

export default async function TentangPage() {
  const content = await getContent();
  const { hero, mission, stats } = content.tentang;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20">
        <div
          aria-hidden
          className="animate-drift absolute -left-20 top-4 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-4xl font-bold text-slate-900">{hero.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900">{mission.title}</h2>
              <p className="mt-4 text-slate-600">{mission.desc}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-4">
              <GrowthIllustration className="h-56 w-full" />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 100}>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
