import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductPhoto } from "@/components/ProductPhoto";
import { TgaExplainerLink, TgaStatusBadge } from "@/components/TgaStatusBadge";
import { TopicalUseLabel } from "@/components/TopicalUseLabel";
import { displayAud } from "@/lib/cart";
import { tgaMarkForProduct } from "@/lib/compliance";
import { NEEDLING_PEN_PAGE, sequenceSlugsFor } from "@/lib/merchandising";
import { products, shopCategories } from "@/lib/products";
import { NEEDLING_SERUM_INTRO, serumDetailFor } from "@/lib/serumDetails";
import type { Product } from "@/lib/types";

function bySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

function priceLabel(product: Product) {
  return displayAud(product.price);
}

function Breadcrumbs({ product }: { product: Product }) {
  const category = shopCategories[product.category];
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.14em] text-ink-soft">
      <Link href="/shop" className="underline underline-offset-2">
        Shop
      </Link>
      {category ? (
        <>
          <span aria-hidden="true"> / </span>
          <Link href={`/shop/${product.category}`} className="underline underline-offset-2">
            {category.title}
          </Link>
        </>
      ) : null}
      <span aria-hidden="true"> / </span>
      <span>{product.name}</span>
    </nav>
  );
}

function MiniProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="block border border-line bg-paper p-4">
      <ProductPhoto
        src={product.image}
        alt={product.name}
        className="mb-4 aspect-[4/5]"
        sizes="(min-width: 1024px) 25vw, 50vw"
        labelName={product.name}
        labelDetail={product.labelDetail}
        labelFooter={product.labelFooter}
      />
      <p className="font-serif text-lg leading-snug">{product.name}</p>
      <p className="mt-1 text-sm text-ink-soft">{priceLabel(product)}</p>
    </Link>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-2xl">{heading}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="text-bronze">
            —
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SequenceRow({ slugs }: { slugs: string[] }) {
  const items = slugs.map(bySlug).filter((p): p is Product => Boolean(p));
  if (items.length === 0) return null;
  return (
    <section>
      <h2 className="font-serif text-2xl">Complete your sequence</h2>
      <p className="mt-2 text-sm text-ink-soft">Related products for a considered routine — optional, not a hard sell.</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {items.slice(0, 6).map((p) => (
          <MiniProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}

function NeedlingPenDetail({ product }: { product: Product }) {
  const upgrade = bySlug(NEEDLING_PEN_PAGE.upgradeSlug);
  const sequence = sequenceSlugsFor(product.slug);
  const related = sequence
    .filter((slug) => slug !== NEEDLING_PEN_PAGE.upgradeSlug)
    .map(bySlug)
    .filter((p): p is Product => Boolean(p));

  return (
    <div>
      <div className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-10 lg:grid-cols-2 lg:px-6">
          <div>
            <ProductPhoto
              src={product.image}
              alt={product.name}
              className="aspect-[4/5]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              brandSize="md"
              labelName={product.name}
              labelDetail={product.labelDetail}
              labelFooter={product.labelFooter}
            />
          </div>
          <div>
            <Breadcrumbs product={product} />
            <h1 className="mt-5 font-serif text-4xl leading-tight">{product.name}</h1>
            <p className="mt-5 font-serif text-3xl">{priceLabel(product)}</p>
            {product.badge ? (
              <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-bronze">{product.badge}</p>
            ) : null}
            <p className="mt-3 text-lg leading-relaxed text-ink-soft">{NEEDLING_PEN_PAGE.tagline}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <TgaStatusBadge mark={tgaMarkForProduct(product)} size="md" />
              <TgaExplainerLink />
            </div>
            <AddToCartButton slug={product.slug} />
            <TopicalUseLabel className="mt-3" />
            {upgrade ? (
              <p className="mt-5 text-sm">
                <Link href={`/shop/${upgrade.slug}`} className="underline underline-offset-2">
                  Upgrade to {upgrade.name} — {priceLabel(upgrade)}
                </Link>
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 lg:px-6">
        <Section heading="What's included">
          <Bullets items={NEEDLING_PEN_PAGE.included} />
        </Section>
        <Section heading="Key features">
          <Bullets items={NEEDLING_PEN_PAGE.features} />
        </Section>
        <Section heading="How it works">
          <Bullets items={NEEDLING_PEN_PAGE.howItWorks} />
        </Section>
        <Section heading="How to use">
          <ol className="space-y-2">
            {NEEDLING_PEN_PAGE.howToUse.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span aria-hidden="true" className="text-bronze">
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Section>
        <Section heading="Cartridge information">
          <Bullets items={NEEDLING_PEN_PAGE.cartridges} />
        </Section>
        <Section heading="Preparation">
          <Bullets items={NEEDLING_PEN_PAGE.preparation} />
        </Section>
        <Section heading="Aftercare">
          <Bullets items={NEEDLING_PEN_PAGE.aftercare} />
          <p className="text-sm">
            <Link href="/concerns/aftercare" className="underline underline-offset-2">
              Aftercare hub
            </Link>{" "}
            ·{" "}
            <Link href="/learn/preparation-hygiene" className="underline underline-offset-2">
              Preparation and hygiene
            </Link>
          </p>
        </Section>
        <Section heading="FAQs">
          <dl className="space-y-5">
            {NEEDLING_PEN_PAGE.faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-medium text-ink">{item.q}</dt>
                <dd className="mt-1">{item.a}</dd>
              </div>
            ))}
          </dl>
        </Section>
        <SequenceRow slugs={sequence} />
        {related.length ? (
          <section>
            <h2 className="font-serif text-2xl">Related products</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {related.slice(0, 3).map((p) => (
                <MiniProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        ) : null}
        <p className="text-sm text-ink-soft">
          <Link href="/learn/facial-needling-guide" className="underline underline-offset-2">
            Read the cosmetic facial needling guide
          </Link>
        </p>
      </div>
    </div>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  if (product.slug === "protocol-needling-pen") {
    return <NeedlingPenDetail product={product} />;
  }

  const detail = serumDetailFor(product.slug);
  const devices = detail?.useWithSlugs.map(bySlug).filter((p): p is Product => Boolean(p)) ?? [];
  const sequence = sequenceSlugsFor(product.slug, detail?.pairsWithSlugs ?? []);

  return (
    <div>
      <div className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-10 lg:grid-cols-2 lg:px-6">
          <div>
            <ProductPhoto
              src={product.image}
              alt={product.name}
              className="aspect-[4/5]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              brandSize="md"
              labelName={product.name}
              labelDetail={product.labelDetail}
              labelFooter={product.labelFooter}
            />
          </div>

          <div>
            <Breadcrumbs product={product} />
            {product.badge ? (
              <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-bronze">
                {product.badge}
              </p>
            ) : null}
            <h1 className="mt-2 font-serif text-4xl leading-tight">{product.name}</h1>
            {detail ? (
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{detail.tagline}</p>
            ) : null}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <TgaStatusBadge mark={tgaMarkForProduct(product)} size="md" />
              <TgaExplainerLink />
            </div>

            <p className="mt-5 font-serif text-3xl">{priceLabel(product)}</p>
            <AddToCartButton slug={product.slug} />

            {product.usageNote ? (
              <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-ink-soft">
                {product.usageNote}
              </p>
            ) : (
              <TopicalUseLabel className="mt-3" />
            )}

            <p className="mt-5 text-sm leading-relaxed text-ink-soft">{product.summary}</p>

            {detail ? (
              <div className="mt-6 border border-line px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-bronze">Use with</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {devices.map((device) => (
                    <li key={device.slug}>
                      <Link href={`/shop/${device.slug}`} className="underline underline-offset-2">
                        {device.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-ink-soft">{detail.depthNote}</p>
              </div>
            ) : null}

            {product.ingredientSlugs?.length ? (
              <p className="mt-5 text-sm text-ink-soft">
                Ingredients:{" "}
                {product.ingredientSlugs.map((slug, i) => (
                  <span key={slug}>
                    {i > 0 ? ", " : ""}
                    <Link
                      href={`/learn/glossary/${slug}`}
                      className="underline underline-offset-2"
                    >
                      {slug}
                    </Link>
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {detail ? (
        <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 lg:px-6">
          <p className="border-l-2 border-bronze pl-4 leading-relaxed text-ink-soft">
            {NEEDLING_SERUM_INTRO}
          </p>

          <Section heading="What it may support">
            <Bullets items={detail.maySupport} />
            <p className="text-sm">
              Cosmetic appearance only. Nothing here is a diagnosis, a treatment, or a promise of a
              result.
            </p>
          </Section>

          <Section heading="How to use it with your device">
            <ol className="space-y-2">
              {detail.howToUse.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span aria-hidden="true" className="text-bronze">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section heading="After your session">
            <p>{detail.afterSession}</p>
            <p className="text-sm">
              <Link href="/concerns/aftercare" className="underline underline-offset-2">
                Aftercare hub
              </Link>{" "}
              ·{" "}
              <Link href="/learn/preparation-hygiene" className="underline underline-offset-2">
                Preparation and hygiene
              </Link>
            </p>
          </Section>

          <Section heading="What this is not">
            <Bullets items={detail.notThis} />
          </Section>

          <Section heading="Storage">
            <p>{detail.storage}</p>
            <p className="text-sm">
              <Link href="/learn/storage-guide" className="underline underline-offset-2">
                Storage guide
              </Link>
            </p>
          </Section>

          <SequenceRow slugs={sequence} />

          <p className="text-sm text-ink-soft">
            <Link href="/learn/facial-needling-guide" className="underline underline-offset-2">
              Read the cosmetic facial needling guide
            </Link>
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-4xl space-y-6 px-4 py-12 lg:px-6">
          <Section heading="About this product">
            <p>{product.summary}</p>
          </Section>
          <SequenceRow slugs={sequence} />
          <p className="text-sm text-ink-soft">
            <Link href="/shop" className="underline underline-offset-2">
              Back to the shop
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
