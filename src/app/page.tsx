import Link from "next/link";
import { PeptideSearch } from "@/components/PeptideSearch";
import { StatusBadge } from "@/components/StatusBadge";
import { homepagePathways } from "@/lib/navigation";
import { peptides } from "@/lib/peptides";
import { products } from "@/lib/products";

const examplePeptides = [
  peptides.find((p) => p.slug === "semaglutide")!,
  peptides.find((p) => p.slug === "ghk-cu")!,
  peptides.find((p) => p.slug === "semax")!,
  peptides.find((p) => p.slug === "bpc-157")!,
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-12 lg:px-6 lg:py-28">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#c4ad7a]">
              The Longevity Protocol
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-7xl">
              Understand the molecule before you touch the protocol.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
              Australia’s reference layer for peptide science — approved medicines,
              cosmetic ingredients, investigational compounds and research-only
              entries — kept deliberately separate from what you can buy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/peptides"
                className="bg-[#c4ad7a] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink"
              >
                Explore peptides
              </Link>
              <Link
                href="/shop"
                className="border border-paper/30 px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-paper"
              >
                Shop the protocol
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-white/10 bg-white/5 p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#c4ad7a]">
                Encyclopaedia search
              </p>
              <div className="mt-4">
                <PeptideSearch />
              </div>
              <p className="mt-3 text-xs text-paper/50">
                Results show regulatory-status badges immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">
          Choose a path
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {homepagePathways.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className={`flex min-h-[240px] flex-col justify-between border p-6 transition hover:border-bronze ${
                path.featured
                  ? "border-ink bg-ink text-paper md:col-span-2 lg:col-span-1"
                  : "border-line bg-paper"
              }`}
            >
              <div>
                <p
                  className={`text-[10px] uppercase tracking-[0.2em] ${
                    path.featured ? "text-[#c4ad7a]" : "text-bronze"
                  }`}
                >
                  {path.kicker}
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight">{path.label}</h2>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    path.featured ? "text-paper/70" : "text-ink-soft"
                  }`}
                >
                  {path.copy}
                </p>
              </div>
              <span className="mt-8 text-[11px] uppercase tracking-[0.16em]">
                Enter →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">
                Signature feature
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                The Peptide Encyclopaedia
              </h2>
              <p className="mt-2 font-serif text-2xl text-ink-soft">
                Understand the science.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Explore a searchable A–Z reference library covering approved peptide
                medicines, cosmetic peptides, investigational compounds and
                research-only peptides.
              </p>
              <Link
                href="/peptides"
                className="mt-8 inline-flex bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-paper"
              >
                Explore peptides
              </Link>
            </div>
            <div className="lg:col-span-7">
              <PeptideSearch />
              <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                Example results — status first
              </p>
              <ul className="mt-3 divide-y divide-line border border-line">
                {examplePeptides.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/peptides/${p.slug}`}
                      className="flex flex-col gap-2 px-4 py-4 hover:bg-ivory sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span>
                        <span className="block font-medium">{p.name}</span>
                        <span className="text-sm text-ink-soft">{p.peptideClass}</span>
                      </span>
                      <span className="flex flex-wrap gap-1">
                        {p.badges.map((b) => (
                          <StatusBadge key={b} badge={b} size="sm" />
                        ))}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Shop</p>
            <h2 className="mt-2 font-serif text-3xl">Protocol products</h2>
          </div>
          <Link href="/shop" className="text-[11px] uppercase tracking-[0.16em]">
            Shop all →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <Link
              key={product.slug}
              href="/shop"
              className="border border-line bg-paper p-5 hover:border-bronze"
            >
              <div className="mb-6 aspect-[4/5] bg-ivory-deep" />
              {product.badge ? (
                <p className="text-[10px] uppercase tracking-[0.16em] text-bronze">
                  {product.badge}
                </p>
              ) : null}
              <h3 className="mt-2 font-serif text-xl">{product.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
