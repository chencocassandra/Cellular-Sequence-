"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";

const floaters = [
  {
    src: "/images/product-ghk-cu.png",
    alt: "GHK-Cu copper peptide serum vial",
    className: "left-[8%] top-[12%] w-[38%] sm:w-[32%]",
    duration: "4.6s",
    delay: "0s",
    speed: 0.035,
  },
  {
    src: "/images/product-snap-8-serum.png",
    alt: "SNAP-8 peptide serum vial",
    className: "right-[6%] top-[4%] w-[36%] sm:w-[30%]",
    duration: "5.4s",
    delay: "0.9s",
    speed: -0.025,
  },
  {
    src: "/images/product-nad-patches.png",
    alt: "NAD+ support patches",
    className: "bottom-[8%] left-[18%] w-[42%] sm:w-[36%]",
    duration: "6s",
    delay: "1.6s",
    speed: 0.05,
  },
  {
    src: "/images/product-needling-pen-v2.jpg",
    alt: "Professional facial needling pen",
    className: "bottom-[18%] right-[10%] w-[28%] sm:w-[24%]",
    duration: "5s",
    delay: "0.4s",
    speed: -0.04,
  },
];

export function HomeHeroVisual() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    const nodes = Array.from(layer.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    function update() {
      const y = window.scrollY;
      for (const node of nodes) {
        const speed = Number(node.dataset.parallax) || 0;
        node.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      }
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
    <div ref={layerRef} className="relative mx-auto aspect-[4/5] w-full max-w-lg lg:aspect-[5/6]">
      <div className="absolute inset-6 bg-[#f3eee4] sm:inset-8" />
      {floaters.map((item) => (
        <div
          key={item.src}
          data-parallax={item.speed}
          className={`absolute will-change-transform ${item.className}`}
        >
          <div
            className="float-bob relative aspect-[3/4] overflow-hidden bg-paper shadow-[0_18px_40px_rgba(28,25,21,0.12)]"
            style={
              {
                "--float-duration": item.duration,
                "--float-delay": item.delay,
              } as CSSProperties
            }
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 18vw, 40vw"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-6 lg:py-20">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-bronze">Cellular Sequence</p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
            One stop for clinical-grade peptides, microneedling, and patches.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Leave-on peptide cosmetics, cosmetic needling tools, and transdermal patches — with
            research-only compounds kept in the encyclopaedia, never in the cart.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
