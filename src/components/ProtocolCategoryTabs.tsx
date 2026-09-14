"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { heroCategories } from "@/lib/navigation";

const tabFill = [
  "border-[#b5d4ea] bg-[#d7ebf7] text-ink hover:border-[#7eb6d9]",
  "border-[#d8d0c2] bg-[#e7dfd0] text-ink hover:border-[#c4b8a4]",
  "border-ink bg-ink text-paper hover:border-ink",
];

const tabEmoji: Record<string, string> = {
  purchase: "🛒",
  serums: "🧴",
  microneedling: "✦",
  aftercare: "◇",
  "cooling-storage": "❄",
  "preparation-hygiene": "▣",
  learn: "☰",
  "shop-all": "▦",
};

function isActive(pathname: string, href: string) {
  if (href === "/shop") {
    return pathname === "/shop";
  }
  if (href === "/peptides") {
    return (
      pathname === "/peptides" ||
      pathname.startsWith("/peptides/a-z") ||
      pathname.startsWith("/peptides/area")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function ProtocolCategoryTabs() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main categories" className="mt-10">
      <ul className="grid list-none grid-cols-2 gap-2 p-0 sm:grid-cols-4 lg:grid-cols-8">
        {heroCategories.map((c, index) => {
          const active = isActive(pathname, c.href);
          const dark = index % 3 === 2;
          return (
            <li key={c.id} className="h-[5.75rem]">
              <Link
                href={c.href}
                aria-current={active ? "page" : undefined}
                className={`flex h-full w-full flex-col items-center justify-center gap-1 border px-2 py-2 text-center text-[10px] font-medium uppercase leading-tight tracking-[0.1em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze ${tabFill[index % 3]} ${
                  active ? "ring-2 ring-ink ring-offset-2 ring-offset-paper" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`text-lg font-normal normal-case tracking-normal grayscale ${
                    dark ? "brightness-0 invert" : "brightness-0"
                  }`}
                >
                  {tabEmoji[c.id]}
                </span>
                <span className="line-clamp-2">{c.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
