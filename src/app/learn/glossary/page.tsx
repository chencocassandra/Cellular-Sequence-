import Link from "next/link";
import { glossaryEntries } from "@/lib/glossary";

export const metadata = {
  title: "Ingredient glossary",
  description: "Cosmetic peptides we sell: what they are, mechanism notes, and evidence-strength badges.",
};

export default function GlossaryIndexPage() {
  return (
    <div>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Glossary</p>
          <h1 className="mt-3 font-serif text-5xl">Ingredient glossary</h1>
          <p className="mt-5 text-lg text-ink-soft">
            Shop actives only. Research-only names stay in the encyclopaedia and cannot be purchased.
          </p>
        </div>
      </header>
      <ul className="mx-auto max-w-3xl divide-y divide-line border-x border-b border-line">
        {glossaryEntries.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/learn/glossary/${entry.slug}`} className="block px-4 py-5 hover:bg-ivory lg:px-6">
              <p className="font-serif text-2xl">{entry.name}</p>
              <p className="mt-1 text-sm text-ink-soft">{entry.inci}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-bronze">{entry.evidence}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
