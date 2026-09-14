import { CheckoutForm } from "@/components/CheckoutForm";

export const metadata = {
  title: "Checkout",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Checkout</p>
      <h1 className="mt-2 font-serif text-4xl">Demo checkout</h1>
      <CheckoutForm />
    </div>
  );
}
