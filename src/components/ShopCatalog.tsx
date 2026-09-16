import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductPhoto } from "@/components/ProductPhoto";
import { TgaStatusBadge } from "@/components/TgaStatusBadge";
import { TopicalUseLabel } from "@/components/TopicalUseLabel";
import { tgaMarkForProduct } from "@/lib/compliance";
import { displayAud } from "@/lib/cart";
import { shopNav } from "@/lib/navigation";
import type { Product } from "@/lib/types";

export function CategoryNav({ currentHref = "/shop" }: { currentHref?: string }) {
  return (
    <nav aria-label="Shop" className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 pt-8 lg:px-6">
      {shopNav.map((link) => {
        const active = currentHref === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`border px-3 py-2 text-[11px] uppercase tracking-[0.14em] ${
              active ? "border-ink bg-ink text-paper" : "border-line bg-paper"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function ProductGrid({ items }: { items: Product[] }) {
  if (items.length === 0) {
    return (
      <p className="mx-auto max-w-7xl px-4 py-16 text-ink-soft lg:px-6">
        No products in this category yet.
      </p>
    );
  }
  return (
    <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-6">
      {items.map((product) => (
        <article
          key={product.slug}
          id={product.slug}
          className="scroll-mt-36 border border-line bg-paper p-5"
        >
          <ProductPhoto
            src={product.image}
            alt={product.name}
            labelName={product.name}
            labelDetail={product.labelDetail}
            labelFooter={product.labelFooter}
          />
          {product.badge ? (
            <p className="text-[10px] uppercase tracking-[0.16em] text-bronze">{product.badge}</p>
          ) : null}
          <div className="mt-2">
            <TgaStatusBadge mark={tgaMarkForProduct(product)} />
          </div>
          <h2 className="mt-2 font-serif text-2xl">
            <Link href={`/shop/${product.slug}`} className="hover:text-bronze-deep">
              {product.name}
            </Link>
          </h2>
          <p className="mt-2 text-sm text-ink-soft">{product.summary}</p>
          {product.usageNote ? (
            <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-ink-soft">{product.usageNote}</p>
          ) : (
            <TopicalUseLabel className="mt-3" />
          )}
          {product.ingredientSlugs?.length ? (
            <p className="mt-2 text-sm text-ink-soft">
              Ingredients:{" "}
              {product.ingredientSlugs.map((slug, i) => (
                <span key={slug}>
                  {i > 0 ? ", " : ""}
                  <Link href={`/learn/glossary/${slug}`} className="underline underline-offset-2">
                    {slug}
                  </Link>
                </span>
              ))}
            </p>
          ) : null}
          <p className="mt-4 text-sm">{displayAud(product.price)}</p>
          <AddToCartButton slug={product.slug} />
          <Link
            href={`/shop/${product.slug}`}
            className="mt-3 inline-block text-[11px] uppercase tracking-[0.14em] underline underline-offset-2"
          >
            View details
          </Link>
        </article>
      ))}
    </div>
  );
}
