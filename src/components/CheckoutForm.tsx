"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useCart } from "@/components/CartProvider";
import { formatAud, parsePrice } from "@/lib/cart";
import { products } from "@/lib/products";

export function CheckoutForm() {
  const router = useRouter();
  const { lines, clear, count } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const total = useMemo(() => {
    return lines.reduce((sum, line) => {
      const product = products.find((p) => p.slug === line.slug);
      if (!product) return sum;
      return sum + parsePrice(product.price) * line.quantity;
    }, 0);
  }, [lines]);

  if (count === 0) {
    return <p className="text-ink-soft">Your cart is empty.</p>;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const id = `DEMO-${Date.now()}`;
    window.localStorage.setItem(
      "lp-last-order-v1",
      JSON.stringify({ id, name, email, address, total, lines, fake: true }),
    );
    clear();
    router.push(`/checkout/confirmation?order=${encodeURIComponent(id)}`);
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-5">
      <p className="border border-line bg-ivory px-4 py-3 text-sm text-ink-soft">
        You order here. We arrange fulfilment. You are not sent to another marketplace.
        This checkout is still a demo — no card is charged.
      </p>
      <p className="text-lg">
        Estimated total <span className="font-medium">{formatAud(total)}</span>
      </p>
      <div>
        <label htmlFor="co-name" className="text-sm">
          Name
        </label>
        <input
          id="co-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full border border-line bg-paper px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="co-email" className="text-sm">
          Email
        </label>
        <input
          id="co-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full border border-line bg-paper px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="co-address" className="text-sm">
          Delivery note (not shipped)
        </label>
        <textarea
          id="co-address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 w-full border border-line bg-paper px-3 py-2"
          rows={3}
        />
      </div>
      <button type="submit" className="bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-paper">
        Place demo order
      </button>
    </form>
  );
}
