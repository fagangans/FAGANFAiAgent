import Link from "next/link";
import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";

export default async function HargaPage() {
  const content = await getContent();
  const { hero, plans } = content.harga;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20">
        <div
          aria-hidden
          className="animate-float-slow absolute -right-20 top-0 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{hero.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 100}>
              <div
                className={`rounded-2xl border p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  plan.highlight
                    ? "border-orange-500 bg-orange-500 text-white shadow-lg"
                    : "border-slate-100 bg-white hover:border-orange-200"
                }`}
              >
                <h3 className={`text-lg font-semibold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-4 text-3xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                  <span className="text-base font-normal">{plan.period}</span>
                </p>
                <p className={`mt-3 text-sm ${plan.highlight ? "text-orange-50" : "text-slate-600"}`}>
                  {plan.desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        plan.highlight ? "text-orange-50" : "text-slate-600"
                      }`}
                    >
                      <CheckIcon
                        className={`mt-0.5 h-4 w-4 flex-none ${plan.highlight ? "text-white" : "text-orange-500"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontak"
                  className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "bg-white text-orange-600 hover:bg-orange-50"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
