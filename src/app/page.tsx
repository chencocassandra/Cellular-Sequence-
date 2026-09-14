import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { EmailSignup } from "@/components/EmailSignup";
import { HomeStartHere } from "@/components/HomeStartHere";
import { PeptideSearch } from "@/components/PeptideSearch";
import { ProductPhoto } from "@/components/ProductPhoto";
import { ProtocolLandingHero } from "@/components/ProtocolCategories";
import { ProductRating, Reviews } from "@/components/Reviews";
import { StatusBadge } from "@/components/StatusBadge";
import { TgaExplainerLink, TgaStatusBadge } from "@/components/TgaStatusBadge";
import { TopicalUseLabel } from "@/components/TopicalUseLabel";
import { tgaMarkForPeptide, tgaMarkForProduct } from "@/lib/compliance";
import { homeFeaturedProductSlugs, shopPeptidesIntro } from "@/lib/navigation";
import { peptides } from "@/lib/peptides";
import { products } from "@/lib/products";
import { pageSeo } from "@/lib/marketing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: pageSeo.home.title },
  description: pageSeo.home.description,
};

const homeShopProducts = homeFeaturedProductSlugs
  .map((slug) => products.find((p) => p.slug === slug))
  .filter((p): p is (typeof products)[number] => Boolean(p));

const examplePeptides = [
  peptides.find((p) => p.slug === "semaglutide")!,
  peptides.find((p) => p.slug === "tirzepatide")!,
  peptides.find((p) => p.slug === "ghk-cu")!,
  peptides.find((p) => p.slug === "bpc-157")!,
];

export default function Home() {
  return (
    <div>
      <ProtocolLandingHero />
      <HomeStartHere />

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">
                Optional library
              </p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                Cosmetic peptide science
              </h2>
              <p className="mt-2 font-serif text-2xl text-ink-soft">
                What topical ingredients are — without a research-vial shop.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Examples mix approved medicines, TGA-approved cosmetic ingredients, and
                research-only peptides. The mark next to the name tells you which is which.
              </p>
              <Link
                href="/peptides"
                className="mt-8 inline-flex bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-paper"
              >
                Open the encyclopaedia
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
                      <span className="flex flex-wrap justify-end gap-1">
                        <TgaStatusBadge mark={tgaMarkForPeptide(p)} />
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
            <h2 className="mt-2 font-serif text-3xl">Shop topical peptides</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{shopPeptidesIntro}</p>
            <p className="mt-3">
              <TgaExplainerLink />
            </p>
          </div>
          <Link href="/shop" className="text-[11px] uppercase tracking-[0.16em]">
            Shop all →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeShopProducts.map((product) => (
            <article key={product.slug} className="border border-line bg-paper p-5">
              <ProductPhoto
                src={product.image}
                alt={product.name}
                labelName={product.name}
                labelDetail={product.labelDetail}
                labelFooter={product.labelFooter}
              />
              {product.badge ? (
                <p className="text-[10px] uppercase tracking-[0.16em] text-bronze">
                  {product.badge}
                </p>
              ) : null}
              <div className="mt-2">
                <TgaStatusBadge mark={tgaMarkForProduct(product)} />
              </div>
              <h3 className="mt-2 font-serif text-xl">{product.name}</h3>
              <ProductRating />
              <TopicalUseLabel className="mt-2" />
              <p className="mt-1 text-sm text-ink-soft">{product.price}</p>
              <AddToCartButton slug={product.slug} />
            </article>
          ))}
        </div>
      </section>

      <Reviews />
      <EmailSignup />
    </div>
  );
}
