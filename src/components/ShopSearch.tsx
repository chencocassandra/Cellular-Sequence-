"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";

export function ShopSearch({
  size = "md",
  autoFocus = false,
}: {
  size?: "lg" | "md";
  autoFocus?: boolean;
}) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(needle) ||
          p.summary.toLowerCase().includes(needle) ||
          p.category.includes(needle),
      )
      .slice(0, 8);
  }, [q]);

  return (
    <div className="relative w-full">
      <label className="sr-only" htmlFor="shop-search">
        Search shop products
      </label>
      <input
        id="shop-search"
        value={q}
        autoFocus={autoFocus}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search serums, needling, aftercare…"
        className={`w-full border border-line bg-paper text-ink outline-none placeholder:text-ink-soft/70 focus:border-bronze ${
          size === "lg" ? "px-5 py-4 text-base md:text-lg" : "px-3 py-2.5 text-sm"
        }`}
      />
      {q.trim() ? (
        <div className="absolute z-30 mt-1 w-full border border-line bg-paper shadow-[0_20px_50px_rgba(28,25,21,0.12)]">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-ink-soft">No matching shop products.</p>
          ) : (
            <ul>
              {results.map((p) => (
                <li key={p.slug}>
                  <Link
                    href="/shop"
                    className="block border-b border-line px-4 py-3 last:border-0 hover:bg-ivory"
                  >
                    <span className="font-medium">{p.name}</span>
                    <span className="mt-0.5 block text-sm text-ink-soft">{p.price}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
