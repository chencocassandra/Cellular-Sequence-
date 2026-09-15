import Image from "next/image";
import { ProtocolCategoryTabs } from "@/components/ProtocolCategoryTabs";
import { TgaExplainerLink } from "@/components/TgaStatusBadge";
import { TrustBar } from "@/components/TrustBar";

export function ProtocolLandingHero() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <div className="grid grid-cols-2 items-center gap-4 sm:gap-8 lg:gap-12">
          <div>
            <h1 className="font-serif text-2xl leading-[1.08] sm:text-4xl md:text-5xl">
              A clinic-inspired peptide protocol, explained simply.
            </h1>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft sm:mt-6 sm:text-base">
              <li>Peptides and protocols for skin, health and injury recovery, available to buy</li>
              <li>Research-only compounds kept clearly separate from products you can buy</li>
              <li>A searchable encyclopaedia for the science behind the labels</li>
            </ul>
            <TrustBar />
            <p className="mt-3 text-sm text-ink-soft">
              Each product has a colour mark. It tells you if that item is a cosmetic, an
              approved medicine, or research only. <TgaExplainerLink />
            </p>
          </div>
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/hero-cellular-sequence-kit.png"
              alt="Cellular Sequence kit: cosmetic peptide serums, needling pen, hydra stamps, cooling case, prep pads, gloves and cartridge injector"
              fill
              priority
              unoptimized
              sizes="50vw"
              className="hero-photo-fade object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper/70 via-transparent to-paper/20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/15 via-transparent to-paper/55"
            />
          </div>
        </div>
        <ProtocolCategoryTabs />
      </div>
    </section>
  );
}
