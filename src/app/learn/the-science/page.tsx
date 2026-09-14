import Link from "next/link";
import { TgaExplainerLink } from "@/components/TgaStatusBadge";

const blocks = [
  {
    heading: "What a peptide is",
    body: "Peptides are short chains of amino acids. In this shop they are leave-on cosmetic ingredients. In the encyclopaedia, some names are prescription medicines or research-only compounds that we do not sell.",
  },
  {
    heading: "Topical delivery vs injection",
    body: "A serum sits on and in the outer layers of skin. An injectable medicine is a different legal and safety category. Shop products are not for injection. Encyclopaedia research entries are not a shopping list.",
  },
  {
    heading: "What is better established vs still emerging",
    body: "Registered medicines have labelled uses and large trials. Cosmetic peptides often have smaller, mixed studies about appearance. We say so on each encyclopaedia page with an evidence grade and a TGA mark.",
  },
  {
    heading: "Skin barrier and needling",
    body: "Cosmetic needling disrupts the surface. Aftercare and hygiene matter more than adding more actives. See the aftercare hub before you combine tools and serums.",
  },
  {
    heading: "How we grade evidence",
    body: "Grades A–E sit on encyclopaedia entries: approved clinical use down to mechanistic notes only. Cosmetic shop copy stays in appearance language even when a related encyclopaedia page is detailed.",
  },
  {
    heading: "How to read an ingredient list",
    body: "INCI names (for example Copper Tripeptide-1, Palmitoyl Pentapeptide-4) are the cosmetic names. Open the glossary for those we sell. Names like BPC-157 are encyclopaedia-only.",
  },
  {
    heading: "TGA versus cosmetic rules",
    body: "A TGA-approved medicine is not the same as a cosmetic serum. Each product and peptide name carries a mark. Research peptides are labelled Not TGA approved.",
  },
  {
    heading: "What we will never sell",
    body: "Grey-market injectables, research-only peptides as cart items, and anabolic oils or tablets. Those libraries stay educational.",
  },
];

export const metadata = {
  title: "The Science",
  description:
    "Plain-language notes on topical peptides, evidence, and how this shop stays separate from injectable research compounds.",
};

export default function TheSciencePage() {
  return (
    <div>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Learn</p>
          <h1 className="mt-3 font-serif text-5xl">The science, in plain language</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Educate-to-sell: enough mechanism to be honest, not enough swagger to sound like a
            biohacking clinic.
          </p>
          <p className="mt-4">
            <TgaExplainerLink />
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl space-y-12 px-4 py-12 lg:px-6">
        {blocks.map((block) => (
          <section key={block.heading}>
            <h2 className="font-serif text-2xl">{block.heading}</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{block.body}</p>
          </section>
        ))}
        <nav className="flex flex-col gap-2 border-t border-line pt-8 text-sm">
          <Link href="/learn/glossary" className="text-bronze-deep">
            Ingredient glossary →
          </Link>
          <Link href="/peptides/compare" className="text-bronze-deep">
            Compare encyclopaedia peptides →
          </Link>
          <Link href="/shop/compare" className="text-bronze-deep">
            Compare shop serums →
          </Link>
          <Link href="/learn/faqs" className="text-bronze-deep">
            FAQs →
          </Link>
        </nav>
      </div>
    </div>
  );
}
