"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { SiteContent } from "@/lib/content";
import { MenuIcon, CloseIcon } from "./icons";

export default function Navbar({ content }: { content: SiteContent }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [{ label: "Home", href: "/" }, ...content.nav.links];

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
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition hover:text-emerald-600 ${
                  isActive ? "text-emerald-600" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/kontak"
            className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 sm:inline-block"
          >
            {content.nav.ctaLabel}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    isActive ? "bg-emerald-50 text-emerald-600" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-emerald-500 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              {content.nav.ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
