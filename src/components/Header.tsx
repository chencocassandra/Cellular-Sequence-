"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { PromoBanner } from "@/components/PromoBanner";
import { ShopSearch } from "@/components/ShopSearch";
import { SocialLinks } from "@/components/SocialLinks";
import { useCart } from "@/components/CartProvider";
import { primaryNav } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/95 backdrop-blur">
      <PromoBanner />
      <p className="bg-ink px-4 py-2 text-center text-[11px] tracking-[0.12em] text-paper uppercase">
        Topical cosmetics and devices only — not for injection
      </p>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="shrink-0" aria-label="Longevity Protocol home">
          <BrandLogo showTagline={false} />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const hasMenu = item.groups.some((g) => g.links.length > 0);
            const active =
              item.label === "Shop"
                ? pathname === "/shop" || pathname.startsWith("/shop/")
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <div key={`${item.label}-${item.href}`} className="group relative">
                <Link
                  href={item.href}
                  className={`inline-flex items-center px-1.5 py-2 text-[10px] font-medium uppercase tracking-[0.14em] xl:px-2.5 xl:text-[11px] xl:tracking-[0.16em] ${
                    active ? "text-bronze-deep" : "text-ink hover:text-bronze-deep"
                  }`}
                >
                  {item.label}
                </Link>
                {hasMenu ? (
                  <div className="invisible absolute left-1/2 top-full z-40 w-[min(90vw,720px)] -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="border border-line bg-paper p-6 shadow-[0_24px_60px_rgba(28,25,21,0.12)]">
                      {item.description ? (
                        <p className="mb-4 max-w-xl text-sm text-ink-soft">{item.description}</p>
                      ) : null}
                      <div
                        className={`grid gap-6 ${
                          item.groups.length > 1 ? "sm:grid-cols-3" : "sm:grid-cols-2"
                        }`}
                      >
                        {item.groups.map((group) => (
                          <div key={group.heading ?? group.links[0].href}>
                            {group.heading ? (
                              <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-bronze">
                                {group.heading}
                              </p>
                            ) : null}
                            <ul className="space-y-1.5">
                              {group.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="text-sm text-ink hover:text-bronze-deep"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden xl:block">
            <SocialLinks />
          </div>
          <button
            type="button"
            className="hidden px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-ink hover:text-bronze-deep md:inline"
            onClick={() => setSearchOpen((v) => !v)}
          >
            Search
          </button>
          <Link
            href="/cart"
            className="hidden px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-ink hover:text-bronze-deep sm:inline"
          >
            Cart ({count})
          </Link>
          <button
            type="button"
            className="lg:hidden border border-line px-3 py-1.5 text-[11px] uppercase tracking-[0.16em]"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
      </div>

      {searchOpen ? (
        <div className="border-t border-line bg-paper px-4 py-3">
          <div className="mx-auto max-w-3xl">
            <ShopSearch size="md" autoFocus />
          </div>
        </div>
      ) : null}

      {open ? (
        <div className="max-h-[80vh] overflow-y-auto border-t border-line bg-paper lg:hidden">
          {primaryNav.map((item) => (
            <div key={`${item.label}-${item.href}`} className="border-b border-line">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="px-4 py-3 text-sm uppercase tracking-[0.14em]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.groups.some((g) => g.links.length > 0) ? (
                  <button
                    type="button"
                    className="px-4 py-3 text-xs text-ink-soft"
                    onClick={() =>
                      setMobileSection((s) => (s === item.href ? null : item.href))
                    }
                  >
                    {mobileSection === item.href ? "Close" : "Open"}
                  </button>
                ) : null}
              </div>
              {mobileSection === item.href
                ? item.groups.flatMap((g) => g.links).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-6 py-2 text-sm text-ink-soft"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))
                : null}
            </div>
          ))}
          <Link
            href="/cart"
            className="block px-4 py-3 text-sm uppercase tracking-[0.14em]"
            onClick={() => setOpen(false)}
          >
            Cart ({count})
          </Link>
          <div className="px-4 py-4">
            <SocialLinks />
          </div>
        </div>
      ) : null}
    </header>
  );
}
