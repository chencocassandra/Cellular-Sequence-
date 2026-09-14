"use client";

import { useCart } from "@/components/CartProvider";
import type { Product } from "@/lib/types";

const buyClass = "mt-4 w-full bg-ink py-3 text-center text-[11px] uppercase tracking-[0.16em] text-paper";

export function AddToCartButton({ slug, className }: { slug: string; className?: string }) {
  const { add } = useCart();
  return (
    <button
      type="button"
      onClick={() => add(slug)}
      className={className ?? buyClass}
    >
      Add to cart
    </button>
  );
}

export function ProductBuyActions({ product }: { product: Product }) {
  if (product.alibabaUrl) {
    return (
      <a
        href={product.alibabaUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={buyClass}
      >
        View on Alibaba
      </a>
    );
  }
  return <AddToCartButton slug={product.slug} />;
}
