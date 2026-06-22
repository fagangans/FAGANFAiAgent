import Link from "next/link";
import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default async function HomePage() {
  const content = await getContent();
  const { hero, logosTitle, features, howItWorks, testimonials, ctaBanner } = content.home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div
          aria-hidden
          className="animate-float-slow absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-float absolute -right-24 top-32 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
              {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">{hero.subtitle}</p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-slate-200 pt-10">
              <Stat value={hero.stat1Value} label={hero.stat1Label} />
              <Stat value={hero.stat2Value} label={hero.stat2Label} />
              <Stat value={hero.stat3Value} label={hero.stat3Label} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-slate-100 bg-white py-8">
        <Reveal>
          <p className="text-center text-sm font-medium text-slate-400">{logosTitle}</p>
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
          {features.items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 80}>
              <div className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white">
                  ✓
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            </Reveal>
          ))}
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
            {howItWorks.steps.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 120}>
                <div className="relative rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
                </div>
              </Reveal>
            ))}
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
                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
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
