"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business, navLinks } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const ink = transparent ? "text-ivory" : "text-espresso";
  const bar = transparent
    ? "bg-transparent"
    : "bg-ivory border-b border-line";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${bar}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between relative z-[60]">
        <Link
          href="/"
          aria-label={business.name}
          className={`font-display text-xl md:text-2xl tracking-wide ${ink}`}
        >
          <span>
            Ash <span className="font-serif-italic text-gold">&amp;</span> Oak
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[0.78rem] uppercase tracking-[0.22em] transition-colors duration-300 ${ink} ${
                  active ? "opacity-100" : "opacity-80 hover:opacity-100"
                }`}
              >
                {l.label}
                {active && (
                  <span className="block h-px bg-gold mt-1.5" aria-hidden />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={business.phoneHref}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.22em] border transition-all duration-300 ${
              transparent
                ? "border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso"
                : "border-espresso text-espresso hover:bg-espresso hover:text-ivory"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            Reserve Now
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`lg:hidden p-2 -mr-2 ${ink}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 bottom-0 top-20 bg-ivory overflow-y-auto transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="px-6 py-10 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-4 font-display text-3xl text-espresso border-b border-line"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={business.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-espresso text-ivory py-4 text-sm uppercase tracking-[0.22em]"
          >
            <Phone className="w-4 h-4" /> Reserve Now
          </a>
        </div>
      </div>
    </header>
  );
}
