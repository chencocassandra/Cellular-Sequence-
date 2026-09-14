import { CartView } from "@/app/cart/CartView";

export const metadata = {
  title: "Cart",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return <CartView />;
}
