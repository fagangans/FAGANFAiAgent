import { getContent } from "@/lib/content";
import Reveal from "@/components/Reveal";
import ProductGrid from "@/components/ProductGrid";

export default async function ProdukPage() {
  const content = await getContent();
  const { hero, items } = content.produk;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20">
        <div
          aria-hidden
          className="animate-drift absolute -left-24 top-6 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-drift-rev absolute -right-24 top-20 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl"
        />
        <Reveal>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-medium text-orange-700">
              {hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600">{hero.subtitle}</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <ProductGrid items={items} />
      </section>
    </>
  );
}
