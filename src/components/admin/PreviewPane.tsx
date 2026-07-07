import type { SiteContent } from "@/lib/content";

export default function PreviewPane({
  content,
  activeTab,
}: {
  content: SiteContent;
  activeTab: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">Pratinjau Langsung</p>
      <div className="overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-b from-orange-50 to-white p-5">
        {renderPreview(content, activeTab)}
      </div>
    </div>
  );
}

function renderPreview(content: SiteContent, tab: string) {
  switch (tab) {
    case "site":
      return (
        <div className="space-y-2 text-center">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-lg font-bold text-white">
            {content.site.name.charAt(0)}
          </span>
          <h3 className="text-lg font-bold text-slate-900">{content.site.name}</h3>
          <p className="text-sm text-slate-500">{content.site.tagline}</p>
          <p className="text-xs text-slate-400">
            {content.site.phone} · {content.site.email}
          </p>
          <p className="text-xs text-slate-400">{content.site.address}</p>
        </div>
      );

    case "nav":
      return (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-100 bg-white px-3 py-2">
          <div className="flex flex-wrap gap-3 text-xs font-medium text-slate-600">
            {content.nav.links.map((l) => (
              <span key={l.href}>{l.label}</span>
            ))}
          </div>
          <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
            {content.nav.ctaLabel}
          </span>
        </div>
      );

    case "home": {
      const { hero, features, howItWorks, testimonials, ctaBanner } = content.home;
      return (
        <div className="space-y-4 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
            {hero.badge}
          </span>
          <h2 className="text-xl font-bold text-slate-900">{hero.title}</h2>
          <p className="text-sm text-slate-600">{hero.subtitle}</p>
          <div className="flex justify-center gap-2">
            <span className="rounded-full bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white">
              {hero.ctaPrimary}
            </span>
            <span className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600">
              {hero.ctaSecondary}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center">
            <MiniStat value={hero.stat1Value} label={hero.stat1Label} />
            <MiniStat value={hero.stat2Value} label={hero.stat2Label} />
            <MiniStat value={hero.stat3Value} label={hero.stat3Label} />
          </div>

          <div className="border-t border-slate-100 pt-3 text-left">
            <p className="text-sm font-semibold text-slate-900">{features.title}</p>
            <p className="text-xs text-slate-500">{features.subtitle}</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {features.items.slice(0, 4).map((f) => (
                <div key={f.title} className="rounded-lg bg-white p-2 text-left shadow-sm">
                  <p className="text-xs font-semibold text-slate-800">{f.title}</p>
                  <p className="line-clamp-2 text-[11px] text-slate-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 text-left">
            <p className="text-sm font-semibold text-slate-900">{howItWorks.title}</p>
            <p className="text-xs text-slate-500">{howItWorks.subtitle}</p>
          </div>

          <div className="border-t border-slate-100 pt-3 text-left">
            <p className="text-sm font-semibold text-slate-900">{testimonials.title}</p>
            {testimonials.items[0] && (
              <p className="mt-1 text-xs italic text-slate-500">&ldquo;{testimonials.items[0].quote}&rdquo;</p>
            )}
          </div>

          <div className="rounded-lg bg-orange-500 p-3 text-white">
            <p className="text-sm font-semibold">{ctaBanner.title}</p>
            <p className="text-xs text-orange-50">{ctaBanner.subtitle}</p>
          </div>
        </div>
      );
    }

    case "produk":
      return (
        <div className="space-y-3 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
            {content.produk.hero.badge}
          </span>
          <h2 className="text-lg font-bold text-slate-900">{content.produk.hero.title}</h2>
          <p className="text-sm text-slate-600">{content.produk.hero.subtitle}</p>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {content.produk.items.map((p) => (
              <div key={p.name} className="rounded-lg bg-white p-2 text-left shadow-sm">
                <p className="text-xs font-semibold text-slate-800">{p.name}</p>
                <p className="text-[10px] text-orange-600">{p.tag}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "fitur":
      return (
        <div className="space-y-3 text-center">
          <h2 className="text-lg font-bold text-slate-900">{content.fitur.hero.title}</h2>
          <p className="text-sm text-slate-600">{content.fitur.hero.subtitle}</p>
          <div className="space-y-2 pt-2 text-left">
            {content.fitur.sections.map((s) => (
              <div key={s.title} className="rounded-lg bg-white p-2 shadow-sm">
                <p className="text-xs font-semibold text-slate-800">{s.title}</p>
                <p className="line-clamp-2 text-[11px] text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "integrasi":
      return (
        <div className="space-y-3 text-center">
          <h2 className="text-lg font-bold text-slate-900">{content.integrasi.hero.title}</h2>
          <p className="text-sm text-slate-600">{content.integrasi.hero.subtitle}</p>
          <div className="space-y-2 pt-2 text-left">
            {content.integrasi.highlights.map((h) => (
              <div key={h.name} className="rounded-lg bg-white p-2 shadow-sm">
                <p className="text-xs font-semibold text-slate-800">
                  {h.name} <span className="text-orange-600">· {h.tag}</span>
                </p>
                <p className="line-clamp-2 text-[11px] text-slate-500">{h.desc}</p>
              </div>
            ))}
            {content.integrasi.channels.map((c) => (
              <div key={c.name} className="rounded-lg bg-slate-50 p-2">
                <p className="text-xs font-medium text-slate-700">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "harga":
      return (
        <div className="space-y-3 text-center">
          <h2 className="text-lg font-bold text-slate-900">{content.harga.hero.title}</h2>
          <p className="text-sm text-slate-600">{content.harga.hero.subtitle}</p>
          <div className="grid grid-cols-1 gap-2 pt-2">
            {content.harga.plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-lg p-3 text-left shadow-sm ${
                  p.highlight ? "bg-orange-500 text-white" : "bg-white text-slate-800"
                }`}
              >
                <p className="text-xs font-semibold">{p.name}</p>
                <p className="text-sm font-bold">
                  {p.price}
                  <span className="text-[10px] font-normal">{p.period}</span>
                </p>
                <p className={`text-[11px] ${p.highlight ? "text-orange-50" : "text-slate-500"}`}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "tentang":
      return (
        <div className="space-y-3 text-center">
          <h2 className="text-lg font-bold text-slate-900">{content.tentang.hero.title}</h2>
          <p className="text-sm text-slate-600">{content.tentang.hero.subtitle}</p>
          <div className="rounded-lg bg-white p-3 text-left shadow-sm">
            <p className="text-xs font-semibold text-slate-800">{content.tentang.mission.title}</p>
            <p className="text-[11px] text-slate-500">{content.tentang.mission.desc}</p>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {content.tentang.stats.map((s) => (
              <MiniStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      );

    case "kontak":
      return (
        <div className="space-y-2 text-center">
          <h2 className="text-lg font-bold text-slate-900">{content.kontak.hero.title}</h2>
          <p className="text-sm text-slate-600">{content.kontak.hero.subtitle}</p>
          <div className="rounded-lg bg-white p-3 shadow-sm">
            <p className="text-xs font-semibold text-slate-800">{content.kontak.formTitle}</p>
          </div>
        </div>
      );

    case "footer":
      return (
        <div className="space-y-2 text-center">
          <p className="text-sm text-slate-600">{content.footer.desc}</p>
          <p className="text-xs text-slate-400">{content.footer.copyright}</p>
        </div>
      );

    default:
      return <p className="text-sm text-slate-400">Tidak ada pratinjau untuk bagian ini.</p>;
  }
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-sm font-bold text-slate-900">{value}</p>
      <p className="text-[10px] text-slate-500">{label}</p>
    </div>
  );
}
