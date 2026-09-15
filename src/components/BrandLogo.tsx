import { SITE_NAME } from "@/lib/site";

type BrandLogoProps = {
  inverted?: boolean;
  showTagline?: boolean;
};

export function LogoMark({ inverted = false, className = "h-9 w-9" }: { inverted?: boolean; className?: string }) {
  const bronze = inverted ? "#c4ad7a" : "#8c6a3d";
  const ink = inverted ? "#faf7f1" : "#1c1915";

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="18" fill="none" stroke={bronze} strokeWidth="1.15" />
      <path
        d="M19 13.5v21h11"
        fill="none"
        stroke={ink}
        strokeWidth="1.45"
        strokeLinecap="square"
      />
      <path
        d="M24.5 16c4.2 2.1 4.2 5.6 0 7.7s-4.2 5.6 0 7.7"
        fill="none"
        stroke={bronze}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
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
      <LogoMark inverted className={compact ? "mx-auto h-5 w-5" : "mx-auto h-7 w-7"} />
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
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark inverted={inverted} className="h-9 w-9 shrink-0 md:h-10 md:w-10" />
      <span className="leading-tight">
        <span
          className={`block font-serif text-xl tracking-tight md:text-2xl ${
            inverted ? "text-paper" : "text-ink"
          }`}
        >
          {SITE_NAME}
        </span>
        {showTagline ? (
          <span
            className={`text-[10px] uppercase tracking-[0.18em] sm:text-[10px] ${
              inverted ? "text-paper/55" : "text-ink-soft"
            }`}
          >
            SCIENCE · PEPTIDES · LONGEVITY
          </span>
        ) : null}
      </span>
    </span>
  );
}
