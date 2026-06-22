import Link from "next/link";
import { getContent } from "@/lib/content";

export default async function HargaPage() {
  const content = await getContent();
  const { hero, plans } = content.harga;

  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-bold text-slate-900">{hero.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 shadow-sm ${
                plan.highlight
                  ? "border-emerald-500 bg-emerald-500 text-white shadow-lg"
                  : "border-slate-100 bg-white"
              }`}
            >
              <h3 className={`text-lg font-semibold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <p className={`mt-4 text-3xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                {plan.price}
                <span className="text-base font-normal">{plan.period}</span>
              </p>
              <p className={`mt-3 text-sm ${plan.highlight ? "text-emerald-50" : "text-slate-600"}`}>
                {plan.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      plan.highlight ? "text-emerald-50" : "text-slate-600"
                    }`}
                  >
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/kontak"
                className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-emerald-600 hover:bg-emerald-50"
                    : "bg-emerald-500 text-white hover:bg-emerald-600"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
