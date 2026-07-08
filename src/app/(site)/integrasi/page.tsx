import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@/components/icons";
import ChatMockup from "@/components/ChatMockup";
import WebWidgetMock from "@/components/WebWidgetMock";

const ACCENTS = [
  "from-orange-500 to-amber-400",
  "from-amber-500 to-orange-400",
  "from-orange-600 to-orange-400",
  "from-amber-400 to-orange-500",
];

export default async function IntegrasiPage() {
  const content = await getContent();
  const { hero, highlights } = content.integrasi;
  const [whatsappHighlight, websiteHighlight] = highlights;
  const otherProducts = content.produk.items.filter(
    (p) => !["FAiAgent", "FAiAgent Web", "FAinggris"].includes(p.name)
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20">
        <div
          aria-hidden
          className="animate-drift absolute -left-20 top-4 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{hero.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
          </div>
        </Reveal>
      </section>

      {/* Highlight: WhatsApp */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-medium text-orange-700">
                {whatsappHighlight.tag}
              </span>
              <h2 className="mt-5 text-3xl font-bold text-slate-900">{whatsappHighlight.name}</h2>
              <p className="mt-4 text-slate-600">{whatsappHighlight.desc}</p>
              <ul className="mt-6 space-y-3">
                {whatsappHighlight.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-slate-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-orange-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ChatMockup />
          </Reveal>
        </div>
      </section>

      {/* Highlight: Website */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <div>
              <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-medium text-orange-700">
                {websiteHighlight.tag}
              </span>
              <h2 className="mt-5 text-3xl font-bold text-slate-900">{websiteHighlight.name}</h2>
              <p className="mt-4 text-slate-600">{websiteHighlight.desc}</p>
              <ul className="mt-6 space-y-3">
                {websiteHighlight.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-slate-700">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-orange-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:order-1">
            <WebWidgetMock />
          </Reveal>
        </div>
      </section>

      {/* Other products in the ecosystem */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900">Produk Lain dalam Ekosistem FAiAgent</h2>
            <p className="mt-3 text-slate-600">
              Selain chatbot WhatsApp dan website, FAiAgent juga terhubung dengan produk berikut.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherProducts.map((product, idx) => (
            <Reveal key={product.name} delay={idx * 80}>
              <a
                href={product.url || "#"}
                target={product.url?.startsWith("http") ? "_blank" : undefined}
                rel={product.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
                    ACCENTS[idx % ACCENTS.length]
                  } text-lg font-bold text-white shadow-sm transition duration-300 group-hover:scale-110`}
                >
                  {product.name.replace(/^FAi?/i, "").charAt(0).toUpperCase() || "F"}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{product.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
