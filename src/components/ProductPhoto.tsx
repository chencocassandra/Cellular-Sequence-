import Image from "next/image";
import { LogoMark, ProductPackLabel } from "@/components/BrandLogo";
import { SITE_NAME } from "@/lib/site";

function ProductBrandChip() {
  return (
    <div className="pointer-events-none absolute left-2 top-2 z-10 flex items-center gap-1.5 bg-[#12345c] px-1.5 py-1">
      <LogoMark className="h-5 w-5" />
      <span className="text-[8px] font-medium uppercase tracking-[0.14em] text-[#c9a227]">
        {SITE_NAME}
      </span>
    </div>
  );
}

export function ProductPhoto({
  src,
  alt,
  className = "mb-6 aspect-[4/5]",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  brandSize = "sm",
  labelName,
  labelDetail,
  labelFooter,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  brandSize?: "sm" | "md";
  labelName?: string;
  labelDetail?: string;
  labelFooter?: string;
}) {
  const isVial = src.includes("product-vial");
  const overlayLabel = Boolean(labelName) && isVial;
  const hasPrintedLogo =
    /product-(ghk-cu|matrikine|snap-8|pdrn-|multi-peptide|nad-egf)/.test(src);
  return (
    <div className={`relative overflow-hidden ${isVial ? "bg-black" : "bg-[#f3eee4]"} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        className="object-contain"
        sizes={sizes}
      />
      {overlayLabel && labelName ? (
        <ProductPackLabel
          name={labelName}
          detail={labelDetail}
          footer={labelFooter}
          size={brandSize}
        />
      ) : hasPrintedLogo ? null : (
        <ProductBrandChip />
      )}
    </div>
  );
}
