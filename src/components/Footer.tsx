import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { EmailSignup } from "@/components/EmailSignup";
import { SocialLinks } from "@/components/SocialLinks";
import { marketing } from "@/lib/marketing";
import { shopNav, siteCategories } from "@/lib/navigation";

const legalLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Our Standards", href: "/about/standards" },
  { label: marketing.referral.navLabel, href: marketing.referral.href },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <Link href="/" aria-label="Longevity Protocol home">
            <BrandLogo inverted showTagline={false} />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            Peptide literacy as a signature feature. Consumer products stay on the lawful side of the line.
          </p>
          <div className="mt-5">
            <SocialLinks inverted />
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#c4ad7a]">Browse</p>
          <ul className="mt-3 space-y-1.5">
            {siteCategories.map((c) => (
              <li key={c.id}>
                <Link href={c.href} className="text-sm text-paper/75 hover:text-paper">
                  {c.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#c4ad7a]">About</p>
          <ul className="mt-3 space-y-1.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-paper/75 hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#c4ad7a]">Shop</p>
          <ul className="mt-3 space-y-1.5">
            {shopNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-paper/75 hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-12 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <EmailSignup variant="footer" />
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-paper/50">
        Educational information is not medical advice. Approved medicines require a registered prescriber.
        Research-only compounds are not offered for sale.{" "}
        <Link href="/privacy" className="text-paper/70 underline decoration-white/20 underline-offset-2 hover:text-paper">
          Privacy Policy
        </Link>
        . © {new Date().getFullYear()} Longevity Protocol.
      </div>
    </footer>
  );
}
