import Link from "next/link";
import { company, navItems } from "../site-data";

const whatsappMessage = [
  "Hello Venus beautiful,",
  "I would like to request lash serum, mascara, or eyeliner product details.",
  "Please send catalog, MOQ, sample, packaging, and quote information.",
].join("\n");

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
      <a className="header-contact" href="/contact">
        Inquiry
      </a>
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
        <p>Email: {company.email}</p>
      </div>
      <div>
        <Link href="/private-label-lash-serum">Lash serum</Link>
        <Link href="/private-label-mascara-manufacturer">Mascara</Link>
        <Link href="/private-label-eyeliner-manufacturer">Eyeliner</Link>
        <Link href="/faq">FAQ</Link>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      aria-label="Contact Venus beautiful on WhatsApp"
    >
      <span>WhatsApp</span>
      <strong>{company.whatsappDisplay}</strong>
    </a>
  );
}
