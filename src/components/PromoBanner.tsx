import Link from "next/link";
import { marketing } from "@/lib/marketing";

export function PromoBanner() {
  if (!marketing.promoBanner.enabled) return null;

  return (
    <p className="border-b border-line bg-[#d7ebf7] px-4 py-2 text-center text-[11px] uppercase tracking-[0.12em] text-ink">
      {/* PLACEHOLDER: promo / shipping announcement — edit marketing.promoBanner */}
      <Link href={marketing.promoBanner.href} className="hover:underline">
        {marketing.promoBanner.text}
      </Link>
    </p>
  );
}
