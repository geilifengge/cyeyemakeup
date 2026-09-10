import Link from "next/link";
import { company, navItems } from "../site-data";
import { WhatsappInquiryLink } from "./WhatsappInquiryLink";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <img className="brand-logo" src="/images/logo.png" alt="Venus beautiful" />
        <span>
          <small>Eye makeup supplier</small>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <WhatsappInquiryLink
        className="header-contact header-whatsapp"
        topic="eye makeup catalog, MOQ, samples, or a quotation"
        cta="Header WhatsApp"
        ariaLabel="Contact Venus beautiful on WhatsApp"
      >
        WhatsApp
      </WhatsappInquiryLink>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{company.brand}</strong>
        <p>{company.legalName}</p>
        <p>{company.location}</p>
      </div>
      <div>
        <p>WhatsApp: {company.whatsappDisplay}</p>
        {company.emails.map((item) => (
          <p key={item}>Email: {item}</p>
        ))}
      </div>
      <div>
        <Link href="/product-catalog">Product catalog</Link>
        <Link href="/packaging-catalog">Packaging catalog</Link>
        <Link href="/private-label-lash-serum">Lash serum</Link>
        <Link href="/private-label-mascara-manufacturer">Mascara</Link>
        <Link href="/private-label-eyeliner-manufacturer">Eyeliner</Link>
        <Link href="/cosmetic-packaging-manufacturer">Packaging</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <WhatsappInquiryLink
      className="floating-whatsapp"
      topic="eyeliner, mascara, lash serum, eyebrow serum, or cosmetic packaging"
      cta="Floating WhatsApp"
      ariaLabel="Contact Venus beautiful on WhatsApp"
    >
      <span>WhatsApp</span>
      <strong>{company.whatsappDisplay}</strong>
    </WhatsappInquiryLink>
  );
}
