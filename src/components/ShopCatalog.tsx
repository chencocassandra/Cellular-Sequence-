import Link from "next/link";
import { products, shopCategories } from "@/lib/products";
import type { Product } from "@/lib/types";

export function CategoryNav() {
  return (
    <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 pt-8 lg:px-6">
      <Link href="/shop" className="border border-line bg-paper px-3 py-2 text-[11px] uppercase tracking-[0.14em]">
        Shop all
      </Link>
      {Object.entries(shopCategories).map(([slug, cat]) => (
        <Link
          key={slug}
          href={`/shop/${slug}`}
          className="border border-line bg-paper px-3 py-2 text-[11px] uppercase tracking-[0.14em]"
        >
          {cat.title}
        </Link>
      ))}
    </div>
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
        <article key={product.slug} className="border border-line bg-paper p-5">
          <div className="mb-6 aspect-[4/5] bg-ivory-deep" />
          {product.badge ? (
            <p className="text-[10px] uppercase tracking-[0.16em] text-bronze">{product.badge}</p>
          ) : null}
          <h2 className="mt-2 font-serif text-2xl">{product.name}</h2>
          <p className="mt-2 text-sm text-ink-soft">{product.summary}</p>
          <p className="mt-4 text-sm">{product.price}</p>
          <button
            type="button"
            className="mt-4 w-full bg-ink py-3 text-[11px] uppercase tracking-[0.16em] text-paper"
          >
            Add to cart
          </button>
        </article>
      ))}
    </div>
  );
}
