import { CategoryNav, ProductGrid } from "@/components/ShopCatalog";
import { PageHero } from "@/components/PageHero";
import { Reviews } from "@/components/Reviews";
import { shopPeptidesIntro } from "@/lib/navigation";
import { pageSeo } from "@/lib/marketing";
import { products } from "@/lib/products";

export const metadata = {
  title: pageSeo.shop.title,
  description: pageSeo.shop.description,
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
      <Reviews />
    </div>
  );
}
