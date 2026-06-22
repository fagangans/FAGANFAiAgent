import { getContent } from "@/lib/content";

export default async function TentangPage() {
  const content = await getContent();
  const { hero, mission, stats } = content.tentang;

  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900">{hero.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">{mission.title}</h2>
          <p className="mt-4 text-slate-600">{mission.desc}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-emerald-600">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
