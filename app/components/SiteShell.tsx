import Link from "next/link";
import { company, navItems } from "../site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">CY</span>
        <span>
          <strong>{company.brand}</strong>
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
        <Link href="/faq">FAQ</Link>
      </div>
    </footer>
  );
}
