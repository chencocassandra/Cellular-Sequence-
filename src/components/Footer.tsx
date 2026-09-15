import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { EmailSignup } from "@/components/EmailSignup";
import { SocialLinks } from "@/components/SocialLinks";
import { marketing } from "@/lib/marketing";
import { SITE_NAME } from "@/lib/site";
import { libraryNav, shopNav, siteCategories } from "@/lib/navigation";

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
          <Link href="/" aria-label={`${SITE_NAME} home`}>
            <BrandLogo inverted showTagline={false} />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            Topical peptide cosmetics and at-home protocols. Research compounds are not sold.
          </p>
          <div className="mt-5">
            <SocialLinks inverted />
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#c4ad7a]">Shop</p>
          <ul className="mt-3 space-y-1.5">
            {siteCategories
              .filter((c) => c.id !== "learn")
              .map((c) => (
              <li key={c.id}>
                <Link href={c.href} className="text-sm text-paper/75 hover:text-paper">
                  {c.navLabel}
                </Link>
              </li>
            ))}
            {shopNav
              .filter((link) => !siteCategories.some((c) => c.href === link.href))
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/75 hover:text-paper">
                    {link.label}
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
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#c4ad7a]">
            Educational library
          </p>
          <p className="mt-2 text-xs text-paper/55">
            Reference only. Nothing in this library can be added to the cart.
          </p>
          <ul className="mt-3 space-y-1.5">
            {libraryNav.map((link) => (
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
        Shop products are topical cosmetics and devices, not for injection. Educational information
        is not medical advice. Research-only compounds are not offered for sale.{" "}
        <Link href="/privacy" className="text-paper/70 underline decoration-white/20 underline-offset-2 hover:text-paper">
          Privacy Policy
        </Link>
        . © {new Date().getFullYear()} {SITE_NAME}.
      </div>
    </footer>
  );
}
