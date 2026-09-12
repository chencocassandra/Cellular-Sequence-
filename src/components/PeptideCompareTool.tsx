"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type CompareItem = {
  slug: string;
  name: string;
  peptideClass: string;
  howItWorks: string;
  studiedFor: string;
  evidence: string;
  halfLife: string;
  approval: string;
  human: string;
  routes: string;
  safety: string;
};

const MAX = 4;

export function PeptideCompareTool({ items, initial }: { items: CompareItem[]; initial: string[] }) {
  const [selected, setSelected] = useState<string[]>(initial.slice(0, MAX));
  const rows = useMemo(() => items.filter((p) => selected.includes(p.slug)), [items, selected]);

  function toggle(slug: string) {
    setSelected((cur) => {
      if (cur.includes(slug)) return cur.filter((s) => s !== slug);
      if (cur.length >= MAX) return cur;
      return [...cur, slug];
    });
  }

  return (
    <div className="mt-10">
      <p className="text-sm text-ink-soft">Select 2–4 entries. Comparison is educational, not a treatment choice tool.</p>
      <div className="mt-4 max-h-64 overflow-auto border border-line">
        {items.map((p) => (
          <label key={p.slug} className="flex cursor-pointer items-center gap-3 border-b border-line px-3 py-2 text-sm last:border-0">
            <input
              type="checkbox"
              checked={selected.includes(p.slug)}
              onChange={() => toggle(p.slug)}
              disabled={!selected.includes(p.slug) && selected.length >= MAX}
            />
            <span>{p.name}</span>
            <span className="text-ink-soft">{p.peptideClass}</span>
          </label>
        ))}
      </div>

      {rows.length >= 2 ? (
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border border-line bg-ivory px-3 py-2">Field</th>
                {rows.map((p) => (
                  <th key={p.slug} className="border border-line bg-ivory px-3 py-2">
                    <Link href={`/peptides/${p.slug}`} className="text-bronze-deep">
                      {p.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ["Mechanism", "howItWorks"],
                  ["Research areas", "studiedFor"],
                  ["Evidence level", "evidence"],
                  ["Half-life", "halfLife"],
                  ["Approval status", "approval"],
                  ["Human research", "human"],
                  ["Routes studied", "routes"],
                  ["Safety evidence", "safety"],
                ] as const
              ).map(([label, key]) => (
                <tr key={label}>
                  <th className="border border-line bg-paper px-3 py-2 font-medium">{label}</th>
                  {rows.map((p) => (
                    <td key={p.slug} className="border border-line px-3 py-2 align-top text-ink-soft">
                      {p[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-6 text-ink-soft">Choose at least two peptides to compare.</p>
      )}
    </div>
  );
}
