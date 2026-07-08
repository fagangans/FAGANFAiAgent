"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { SiteContent } from "@/lib/content";
import { MenuIcon, CloseIcon } from "./icons";

export default function Navbar({ content }: { content: SiteContent }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking.current = false;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [{ label: "Home", href: "/" }, ...content.nav.links];
  const waLink = `https://wa.me/${content.site.phone.replace(/[^0-9]/g, "")}`;

  return (
    <header className="sticky top-0 z-50 px-0 pt-0 transition-all duration-300 sm:px-4 sm:pt-3">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "sm:rounded-2xl border border-white/60 bg-white/70 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border-b border-transparent bg-white/0 backdrop-blur-0"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white">
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
                className={`text-sm font-medium transition hover:text-orange-600 ${
                  isActive ? "text-orange-600" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 sm:inline-block"
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
        <div className="mx-auto max-w-7xl border-t border-slate-100 bg-white/95 px-6 py-4 shadow-lg backdrop-blur-xl sm:rounded-b-2xl md:hidden">
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
                    isActive ? "bg-orange-50 text-orange-600" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-orange-500 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              {content.nav.ctaLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
