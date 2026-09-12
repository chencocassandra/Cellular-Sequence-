import { CategoryNav, ProductGrid } from "@/components/ShopCatalog";
import { PageHero } from "@/components/PageHero";
import { shopPeptidesIntro } from "@/lib/navigation";
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
        title="Shop the Peptides"
        intro={shopPeptidesIntro}
      />
      <CategoryNav />
      <ProductGrid items={products} />
    </div>
  );
}
