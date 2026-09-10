import type { Metadata } from "next";
import Link from "next/link";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Inquiry received | Venus beautiful",
  description: "Your product inquiry has been sent to the Venus beautiful sales team.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="simple-hero">
          <div className="simple-hero-inner">
            <p className="eyebrow">Inquiry received</p>
            <h1>Thank you. The sales team has your requirements.</h1>
            <p>
              We will review the product, quantity, target market, formula, and packaging details you supplied before
              replying.
            </p>
            <div className="cta-row">
              <Link className="button primary" href="/product-catalog">
                Continue browsing products
              </Link>
              <Link className="button secondary" href="/packaging-catalog">
                View packaging references
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
