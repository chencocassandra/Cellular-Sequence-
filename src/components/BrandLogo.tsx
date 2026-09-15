import Image from "next/image";
import { SITE_NAME } from "@/lib/site";

type BrandLogoProps = {
  inverted?: boolean;
  showTagline?: boolean;
};

/** Circular CS + helix mark supplied for the brand. */
export function LogoMark({ className = "h-9 w-9" }: { inverted?: boolean; className?: string }) {
  return (
    <span className={`relative inline-block shrink-0 overflow-hidden rounded-full ${className}`}>
      <Image
        src="/images/logo-cs-monogram.png"
        alt=""
        fill
        sizes="48px"
        className="object-cover"
      />
    </span>
  );
}

/** Horizontal lockup: helix + Cellular Sequence + tagline. */
export function BrandWordmark({
  className = "h-12 w-auto max-w-[260px]",
}: {
  className?: string;
}) {
  return (
    <Image
      src="/images/logo-cs-wordmark.png"
      alt={SITE_NAME}
      width={680}
      height={260}
      className={`object-contain object-left ${className}`}
    />
  );
}

export function ProductPackLabel({
  name,
  detail,
  footer = "Cosmetic use",
  size = "sm",
}: {
  name: string;
  detail?: string;
  footer?: string;
  size?: "sm" | "md";
}) {
  const compact = size === "sm";
  return (
    <div
      className={`pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-[#152536]/95 text-center ${
        compact
          ? "top-[50%] w-[22%] max-w-[118px] px-1.5 py-2"
          : "top-[50%] w-[20%] max-w-[150px] px-2.5 py-3"
      }`}
      aria-hidden="true"
    >
      <LogoMark className={compact ? "mx-auto h-5 w-5" : "mx-auto h-7 w-7"} />
      <p
        className={`mt-1 font-medium uppercase tracking-[0.16em] text-[#c4ad7a] ${
          compact ? "text-[6px]" : "text-[8px]"
        }`}
      >
        {SITE_NAME}
      </p>
      <p
        className={`mt-1.5 line-clamp-3 font-serif leading-[1.15] text-[#faf7f1] ${
          compact ? "text-[11px]" : "text-sm md:text-base"
        }`}
      >
        {name}
      </p>
      {detail ? (
        <p className={`mt-1 text-[#faf7f1]/70 ${compact ? "text-[7px]" : "text-[9px]"}`}>{detail}</p>
      ) : null}
      <p
        className={`mt-1.5 uppercase tracking-[0.12em] text-[#faf7f1]/45 ${
          compact ? "text-[6px]" : "text-[7px]"
        }`}
      >
        {footer}
      </p>
    </div>
  );
}

export function BrandLogo({ inverted = false, showTagline = true }: BrandLogoProps) {
  if (inverted) {
    return <BrandWordmark className="h-14 w-auto max-w-[280px]" />;
  }

  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-9 w-9 md:h-11 md:w-11" />
      <span className="leading-tight">
        <span className="block font-serif text-xl tracking-tight text-ink md:text-2xl">
          {SITE_NAME}
        </span>
        {showTagline ? (
          <span className="text-[10px] uppercase tracking-[0.18em] text-bronze">
            SCIENCE · PEPTIDES · LONGEVITY
          </span>
        ) : null}
      </span>
    </span>
  );
}
