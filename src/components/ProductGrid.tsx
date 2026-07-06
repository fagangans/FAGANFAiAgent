import Reveal from "@/components/Reveal";

type Product = {
  name: string;
  tag: string;
  desc: string;
  url: string;
  cta: string;
};

/* Deterministic accent per card so the grid feels colorful yet on-brand */
const ACCENTS = [
  "from-orange-500 to-amber-400",
  "from-amber-500 to-orange-400",
  "from-orange-600 to-orange-400",
  "from-amber-400 to-orange-500",
  "from-orange-500 to-rose-400",
  "from-amber-500 to-orange-600",
];

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((product, idx) => {
        const isInternal = product.url.startsWith("/") || product.url === "#";
        return (
          <Reveal key={product.name} delay={idx * 80}>
            <a
              href={product.url || "#"}
              target={isInternal ? undefined : "_blank"}
              rel={isInternal ? undefined : "noopener noreferrer"}
              className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${
                  ACCENTS[idx % ACCENTS.length]
                } text-lg font-bold text-white shadow-sm transition duration-300 group-hover:scale-110`}
              >
                {product.name.replace(/^FAi?/i, "").charAt(0).toUpperCase() || "F"}
              </div>

              <span className="mt-4 inline-block w-fit rounded-full bg-orange-50 px-3 py-0.5 text-xs font-medium text-orange-700">
                {product.tag}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{product.desc}</p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600">
                {product.cta}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}
