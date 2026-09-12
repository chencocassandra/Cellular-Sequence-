"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { StatusBadge } from "@/components/StatusBadge";
import { searchOilTablets } from "@/lib/oilsTablets";

export function OilTabletSearch({
  size = "lg",
  autoFocus = false,
}: {
  size?: "lg" | "md";
  autoFocus?: boolean;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const results = useMemo(() => searchOilTablets(q).slice(0, 8), [q]);

  return (
    <form
      className="relative w-full"
      onSubmit={(e) => {
        e.preventDefault();
        if (q.trim()) router.push(`/oils-tablets?q=${encodeURIComponent(q.trim())}`);
      }}
    >
      <label className="sr-only" htmlFor="oils-tablets-search">
        Search an oil or tablet compound
      </label>
      <input
        id="oils-tablets-search"
        value={q}
        autoFocus={autoFocus}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search testosterone, trenbolone, SERMs, SARMs…"
        className={`w-full border border-line bg-paper text-ink outline-none placeholder:text-ink-soft/70 focus:border-bronze ${
          size === "lg" ? "px-5 py-4 text-base md:text-lg" : "px-3 py-2.5 text-sm"
        }`}
      />
      {q.trim() && (
        <div className="absolute z-30 mt-1 w-full border border-line bg-paper shadow-[0_20px_50px_rgba(28,25,21,0.12)]">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-ink-soft">No matching entries.</p>
          ) : (
            <ul>
              {results.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/oils-tablets/${e.slug}`}
                    className="flex flex-col gap-2 border-b border-line px-4 py-3 last:border-0 hover:bg-ivory"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-medium">{e.name}</span>
                      <div className="flex flex-wrap gap-1">
                        {e.badges.map((b) => (
                          <StatusBadge key={b} badge={b} size="sm" />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-ink-soft">{e.chemicalClass}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </form>
  );
}
