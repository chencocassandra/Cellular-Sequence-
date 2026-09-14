"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatAud, parsePrice } from "@/lib/cart";
import { SHOP_POSITIONING } from "@/lib/compliance";
import { products } from "@/lib/products";

export function CartView() {
  const { lines, setQuantity, remove, clear, count } = useCart();
  const rows = lines
    .map((line) => {
      const product = products.find((p) => p.slug === line.slug);
      if (!product) return null;
      const unit = parsePrice(product.price);
      return { line, product, unit, lineTotal: unit * line.quantity };
    })
    .filter((row): row is NonNullable<typeof row> => Boolean(row));
  const total = rows.reduce((sum, row) => sum + row.lineTotal, 0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Cart</p>
      <h1 className="mt-2 font-serif text-4xl">Your protocol cart</h1>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{SHOP_POSITIONING}</p>
      <p className="mt-3 border border-line bg-paper px-4 py-3 text-sm text-ink-soft">
        Checkout is not live yet. You can add and remove products to test a routine. Nothing will
        be charged.
      </p>

      {count === 0 ? (
        <p className="mt-10 text-ink-soft">
          Your cart is empty.{" "}
          <Link href="/shop" className="underline underline-offset-2">
            Continue shopping
          </Link>
          .
        </p>
      ) : (
        <div className="mt-10">
          <ul className="divide-y divide-line border border-line bg-paper">
            {rows.map(({ line, product, lineTotal }) => (
              <li
                key={line.slug}
                className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-serif text-xl">{product.name}</p>
                  <p className="text-sm text-ink-soft">{product.price} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <label className="sr-only" htmlFor={`qty-${line.slug}`}>
                    Quantity for {product.name}
                  </label>
                  <input
                    id={`qty-${line.slug}`}
                    type="number"
                    min={1}
                    value={line.quantity}
                    onChange={(e) => setQuantity(line.slug, Number(e.target.value))}
                    className="w-16 border border-line bg-ivory px-2 py-1 text-sm"
                  />
                  <p className="w-20 text-right text-sm">{formatAud(lineTotal)}</p>
                  <button
                    type="button"
                    className="text-[11px] uppercase tracking-[0.14em] text-ink-soft"
                    onClick={() => remove(line.slug)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-lg">
              Estimated total <span className="font-medium">{formatAud(total)}</span>
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={clear}
                className="border border-line px-4 py-3 text-[11px] uppercase tracking-[0.16em]"
              >
                Clear cart
              </button>
              <Link
                href="/checkout"
                className="bg-ink px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-paper"
              >
                Fake checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
