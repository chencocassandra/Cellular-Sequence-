import { marketing } from "@/lib/marketing";

const icons = [
  { label: "Instagram", href: marketing.social.instagram },
  { label: "TikTok", href: marketing.social.tiktok },
  { label: "Facebook", href: marketing.social.facebook },
] as const;

export function SocialLinks({ inverted = false }: { inverted?: boolean }) {
  const color = inverted ? "text-paper/75 hover:text-paper" : "text-ink hover:text-bronze-deep";

  return (
    <nav aria-label="Social media" className="flex items-center gap-3">
      {/* PLACEHOLDER: social profile URLs — edit marketing.social */}
      {icons.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`text-[11px] uppercase tracking-[0.14em] ${color}`}
          rel="noreferrer"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
