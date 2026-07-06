import Link from "next/link";
import type { SiteContent } from "@/lib/content";

export default function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 text-sm text-white">
              F
            </span>
            {content.site.name}
          </div>
          <p className="mt-3 max-w-sm text-sm text-slate-500">{content.footer.desc}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Navigasi</h4>
          <ul className="mt-3 space-y-2">
            {content.nav.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-500 hover:text-orange-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Kontak</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            <li>{content.site.phone}</li>
            <li>{content.site.email}</li>
            <li>{content.site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-6 text-center text-xs text-slate-400">
        {content.footer.copyright}
      </div>
    </footer>
  );
}
