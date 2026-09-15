import { ShopCompareTool } from "@/components/ShopCompareTool";
import { TgaExplainerLink } from "@/components/TgaStatusBadge";

export const metadata = {
  title: "Compare shop peptides",
  description: "Compare Cellular Sequence topical serums and aftercare. Not a competitor table.",
};

export default function ShopComparePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 lg:px-6">
      <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Shop</p>
      <h1 className="mt-2 font-serif text-4xl">Compare topical products</h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Side-by-side for items we sell. Encyclopaedia research names are compared separately and
        cannot be purchased.
      </p>
      <p className="mt-3">
        <TgaExplainerLink />
      </p>
      <ShopCompareTool />
    </div>
  );
}
