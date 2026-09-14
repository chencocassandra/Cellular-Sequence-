"use client";

import { useCart } from "@/components/CartProvider";

export function AddToCartButton({ slug, className }: { slug: string; className?: string }) {
  const { add } = useCart();
  return (
    <button
      type="button"
      onClick={() => add(slug)}
      className={
        className ??
        "mt-4 w-full bg-ink py-3 text-[11px] uppercase tracking-[0.16em] text-paper"
      }
    >
      Add to cart
    </button>
  );
}
