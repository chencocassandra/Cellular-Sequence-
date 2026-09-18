"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function HomeHeroVisual() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const node = layer.querySelector<HTMLElement>("[data-parallax]");
    if (!node) return;
    let frame = 0;

    function update() {
      const speed = Number(node.dataset.parallax) || 0;
      node.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={layerRef} className="relative aspect-[4/3] w-full overflow-hidden">
      <div data-parallax="0.035" className="absolute inset-[-6%] will-change-transform">
        <Image
          src="/images/hero-protocol-kit.jpg"
          alt="Cellular Sequence protocol kit: peptide serums, needling pen, cooling case, gloves and aftercare"
          fill
          priority
          unoptimized
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="hero-photo-fade object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-paper/70 via-transparent to-paper/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/15 via-transparent to-paper/55"
      />
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-8 sm:py-10 lg:grid-cols-2 lg:gap-8 lg:px-6 lg:py-12">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Cellular Sequence</p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
            One stop for clinical-grade peptides, microneedling, and patches.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Leave-on peptide cosmetics, cosmetic needling tools, and transdermal patches — with
            research-only compounds kept in the encyclopaedia, never in the cart.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-paper"
            >
              Shop Now
            </Link>
            <Link
              href="/learn"
              className="inline-flex border border-ink px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-ink hover:bg-ivory"
            >
              Learn More
            </Link>
          </div>
        </div>
        <HomeHeroVisual />
      </div>
    </section>
  );
}
