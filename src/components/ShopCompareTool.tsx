"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { TgaStatusBadge } from "@/components/TgaStatusBadge";
import { tgaMarkForProduct } from "@/lib/compliance";
import { products } from "@/lib/products";

const MAX = 3;

export function ShopCompareTool() {
  const comparables = products.filter((p) => p.category === "peptide-serums" || p.slug === "recovery-barrier-balm");
  const [selected, setSelected] = useState<string[]>(["snap-8-serum", "ghk-cu-ahk-cu-scalp-serum"]);
  const rows = useMemo(
    () => comparables.filter((p) => selected.includes(p.slug)),
    [comparables, selected],
  );

  function toggle(slug: string) {
    setSelected((cur) => {
      if (cur.includes(slug)) return cur.filter((s) => s !== slug);
      if (cur.length >= MAX) return cur;
      return [...cur, slug];
    });
  }

  return (
    <div className="mt-8">
      <p className="text-sm text-ink-soft">
        Compare our topical products only. This is not a table against other brands.
      </p>
      <div className="mt-4 border border-line">
        {comparables.map((p) => (
          <label key={p.slug} className="flex cursor-pointer items-center gap-3 border-b border-line px-3 py-2 text-sm last:border-0">
            <input
              type="checkbox"
              checked={selected.includes(p.slug)}
              onChange={() => toggle(p.slug)}
              disabled={!selected.includes(p.slug) && selected.length >= MAX}
            />
            <span>{p.name}</span>
          </label>
        ))}
      </div>
      {rows.length >= 2 ? (
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border border-line bg-ivory px-3 py-2">Field</th>
                {rows.map((p) => (
                  <th key={p.slug} className="border border-line bg-ivory px-3 py-2">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-line px-3 py-2">Price</th>
                {rows.map((p) => (
                  <td key={p.slug} className="border border-line px-3 py-2">
                    {p.price}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="border border-line px-3 py-2">Format</th>
                {rows.map((p) => (
                  <td key={p.slug} className="border border-line px-3 py-2">
                    {p.labelDetail ?? p.category}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="border border-line px-3 py-2">TGA mark</th>
                {rows.map((p) => (
                  <td key={p.slug} className="border border-line px-3 py-2">
                    <TgaStatusBadge mark={tgaMarkForProduct(p)} />
                  </td>
                ))}
              </tr>
              <tr>
                <th className="border border-line px-3 py-2">Ingredients</th>
                {rows.map((p) => (
                  <td key={p.slug} className="border border-line px-3 py-2">
                    {p.ingredientSlugs?.length
                      ? p.ingredientSlugs.map((slug, i) => (
                          <span key={slug}>
                            {i > 0 ? ", " : ""}
                            <Link href={`/learn/glossary/${slug}`} className="underline underline-offset-2">
                              {slug}
                            </Link>
                          </span>
                        ))
                      : "See product card"}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="border border-line px-3 py-2">Summary</th>
                {rows.map((p) => (
                  <td key={p.slug} className="border border-line px-3 py-2 text-ink-soft">
                    {p.summary}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-6 text-sm text-ink-soft">Select at least two products.</p>
      )}
    </div>
  );
}
