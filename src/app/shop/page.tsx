import { CategoryNav, ProductGrid } from "@/components/ShopCatalog";
import { PageHero } from "@/components/PageHero";
import { products } from "@/lib/products";

export const metadata = {
  title: "Shop",
  description:
    "Consumer protocol products — cosmetics, devices and permitted supplements. Research peptides are not sold.",
};

export default function ShopPage() {
  return (
    <div>
      <PageHero
        kicker="Shop"
        title="Shop the protocol"
        intro="Cosmetic peptide serums, facial needling systems, cooling, hygiene and permitted supplements. Research-only peptides are documented in the encyclopaedia and cannot be added to the cart."
      />
      <CategoryNav />
      <ProductGrid items={products} />
    </div>
  );
}
