
"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/app/components/ui/logo";
import { navigationLinks } from "@/app/data/landing-data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        <Logo />

        <div className="hidden items-center gap-9 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="px-4 py-3 text-sm font-semibold hover:text-emerald-600"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Sign up free →
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white p-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/login" className="text-sm font-medium">
              Log in
            </Link>

            <Link
              href="/register"
              className="bg-emerald-600 p-3 text-center text-white"
            >
              Sign up free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
