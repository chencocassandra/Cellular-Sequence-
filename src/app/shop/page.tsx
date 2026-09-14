import { CategoryNav, ProductGrid } from "@/components/ShopCatalog";
import { PageHero } from "@/components/PageHero";
import { Reviews } from "@/components/Reviews";
import { TgaExplainerLink } from "@/components/TgaStatusBadge";
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
        title="Shop topical peptides"
        intro={shopPeptidesIntro}
      />
      <div className="mx-auto max-w-7xl px-4 pt-6 lg:px-6">
        <TgaExplainerLink />
      </div>
      <CategoryNav />
      <ProductGrid items={products} />
      <Reviews />
    </div>
  );
}
