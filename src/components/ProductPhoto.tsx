import Image from "next/image";
import { ProductPackLabel } from "@/components/BrandLogo";

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
  const vial = src.includes("product-vial");
  return (
    <div className={`relative overflow-hidden ${vial ? "bg-black" : "bg-white"} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-contain"
        sizes={sizes}
      />
      {vial && labelName ? (
        <ProductPackLabel
          name={labelName}
          detail={labelDetail}
          footer={labelFooter}
          size={brandSize}
        />
      ) : null}
    </div>
  );
}
