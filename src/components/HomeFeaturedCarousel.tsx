import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductPhoto } from "@/components/ProductPhoto";
import { TgaStatusBadge } from "@/components/TgaStatusBadge";
import { displayAud } from "@/lib/cart";
import { tgaMarkForProduct } from "@/lib/compliance";
import { homeFeaturedProductSlugs } from "@/lib/navigation";
import { products } from "@/lib/products";

const featured = homeFeaturedProductSlugs
  .map((slug) => products.find((p) => p.slug === slug))
  .filter((p): p is (typeof products)[number] => Boolean(p));

export function HomeFeaturedCarousel() {
  return (
    <section className="border-b border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Featured</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">Protocol bestsellers</h2>
          </div>
          <Link href="/shop" className="text-[11px] uppercase tracking-[0.16em]">
            Shop all →
          </Link>
        </div>
        <div className="-mx-4 mt-10 overflow-x-auto px-4 pb-2 [scrollbar-width:thin]">
          <ul className="flex snap-x snap-mandatory gap-4">
            {featured.map((product) => (
              <li
                key={product.slug}
                className="w-[min(78vw,280px)] shrink-0 snap-start border border-line bg-paper p-4"
              >
                <ProductPhoto
                  src={product.image}
                  alt={product.name}
                  className="mb-4 aspect-[4/5]"
                  sizes="280px"
                  labelName={product.name}
                  labelDetail={product.labelDetail}
                  labelFooter={product.labelFooter}
                />
                <TgaStatusBadge mark={tgaMarkForProduct(product)} />
                <h3 className="mt-2 font-serif text-xl">
                  <Link href={`/shop/${product.slug}`} className="hover:text-bronze-deep">
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{displayAud(product.price)}</p>
                <AddToCartButton slug={product.slug} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
