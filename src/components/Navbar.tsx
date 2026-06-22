import Link from "next/link";
import type { SiteContent } from "@/lib/content";

export default function Navbar({ content }: { content: SiteContent }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white">
            F
          </span>
          {content.site.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {content.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/kontak"
          className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
        >
          {content.nav.ctaLabel}
        </Link>
      </nav>
    </header>
  );
}
