import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Peptides",
    href: "/shop/peptides",
    image: "/images/product-ghk-cu.png",
    alt: "GHK-Cu peptide serum vial",
  },
  {
    name: "Peptide Patches",
    href: "/shop/peptide-patches",
    image: "/images/product-glp1-patches.png",
    alt: "GLP-1 support patches",
  },
  {
    name: "Serums",
    href: "/shop/peptide-serums",
    image: "/images/product-snap-8-serum.png",
    alt: "SNAP-8 peptide serum vial",
  },
  {
    name: "Needling",
    href: "/shop/facial-needling",
    image: "/images/product-needling-pen-v2.jpg",
    alt: "Professional facial needling pen",
  },
  {
    name: "Bundles",
    href: "/shop/bundles",
    image: "/images/hero-cellular-sequence-kit.png",
    alt: "Cellular Sequence protocol kit",
  },
  {
    name: "Cooling & Storage",
    href: "/shop/cooling-storage",
    image: "/images/product-cooling-case.jpg",
    alt: "Peptide cooling case",
  },
  {
    name: "Preparation & Hygiene",
    href: "/shop/preparation-hygiene",
    image: "/images/product-hygiene.png",
    alt: "Needling preparation kit",
  },
  {
    name: "Accessories",
    href: "/shop/pen-accessories",
    image: "/images/product-alcohol-prep-pads.jpg",
    alt: "Alcohol prep pads",
  },
];

export function HomeCategoryCards() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Browse</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">Shop by category</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="group border border-line bg-ivory hover:border-bronze"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f3eee4]">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-end justify-between gap-3 px-4 py-4">
                <h3 className="font-serif text-2xl">{category.name}</h3>
                <span className="text-[11px] uppercase tracking-[0.16em] text-bronze-deep">Shop</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
