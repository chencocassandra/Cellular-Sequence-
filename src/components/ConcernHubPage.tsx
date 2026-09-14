import { ProductGrid } from "@/components/ShopCatalog";
import { PageHero } from "@/components/PageHero";
import { TopicalUseLabel } from "@/components/TopicalUseLabel";
import { TgaExplainerLink } from "@/components/TgaStatusBadge";
import type { ConcernHub } from "@/lib/hubs";
import { products } from "@/lib/products";

export function ConcernHubPage({ hub }: { hub: ConcernHub }) {
  const items = hub.productSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <div>
      <PageHero kicker={hub.kicker} title={hub.title} intro={hub.intro} />
      <div className="mx-auto max-w-4xl px-4 py-8 lg:px-6">
        <aside className="border border-line bg-ivory px-4 py-4 text-sm leading-relaxed text-ink-soft">
          {hub.disclaimer}
        </aside>
        <TopicalUseLabel className="mt-4" />
        <p className="mt-2">
          <TgaExplainerLink />
        </p>
        {hub.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-serif text-2xl">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{section.body}</p>
          </section>
        ))}
      </div>
      <ProductGrid items={items} />
    </div>
  );
}
