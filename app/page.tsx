import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryActions } from "./components/InquiryActions";
import { SiteFooter, SiteHeader } from "./components/SiteShell";
import { baseUrl, company, getPage } from "./site-data";

export const metadata: Metadata = {
  title: "Venus beautiful | Private Label Lash Serum and Mascara Supplier",
  description:
    "Venus beautiful helps beauty buyers source private label lash serum, mascara, wholesale eye makeup, light customization, and OEM orders from Shenzhen, China.",
  alternates: {
    canonical: `${baseUrl}/`,
  },
};

const commercialPages = [
  "private-label-lash-serum",
  "lash-serum-manufacturer",
  "private-label-mascara-manufacturer",
  "wholesale-lash-serum",
  "wholesale-mascara",
  "custom-lash-serum-packaging",
];

const productImages = [
  { src: "/images/lash-serum-detail-1.jpeg", alt: "Lash serum tube and box for private label buyers" },
  { src: "/images/lash-serum-detail-2.jpeg", alt: "Eye makeup product packaging for wholesale orders" },
  { src: "/images/lash-serum-detail-3.jpeg", alt: "Custom eye makeup packaging reference" },
  { src: "/images/lash-serum-packaging.jpg", alt: "Packaged lash serum products for supplier catalog" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="hero-copy">
            <p className="eyebrow">Private label eye makeup supplier</p>
            <h1>Lash serum and mascara sourcing for beauty brands</h1>
            <p>
              Venus beautiful helps wholesale buyers, ecommerce sellers, and new beauty brands discuss lash serum,
              mascara, packaging, light customization, and OEM order requirements with a Shenzhen supplier.
            </p>
            <div className="cta-row">
              <a className="button primary" href="#inquiry">
                Request catalog
              </a>
              <Link className="button secondary" href="/private-label-lash-serum/">
                View lash serum options
              </Link>
            </div>
            <div className="badge-row">
              <span>Wholesale supply</span>
              <span>Private label</span>
              <span>Light customization</span>
              <span>OEM discussion</span>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/images/lash-serum-hero.jpeg" alt="Private label lash serum product for eye makeup buyers" fill priority sizes="(max-width: 900px) 100vw, 46vw" />
          </div>
        </section>

        <section className="trust-strip" aria-label="Supplier details">
          <div>
            <strong>{company.shortName}</strong>
            <span>Registered Shenzhen cosmetics company</span>
          </div>
          <div>
            <strong>Focus</strong>
            <span>Lash serum, mascara, eye makeup</span>
          </div>
          <div>
            <strong>Buyer paths</strong>
            <span>Wholesale, private label, light customization, OEM</span>
          </div>
        </section>

        <section className="section-heading">
          <p className="eyebrow">Buyer pathways</p>
          <h2>Choose the page that matches your purchase path</h2>
        </section>
        <section className="page-card-grid">
          {commercialPages.map((slug) => {
            const page = getPage(slug);
            return (
              <Link className="page-card" href={`/${slug}/`} key={slug}>
                <span>{page.eyebrow}</span>
                <strong>{page.h1}</strong>
                <p>{page.description}</p>
              </Link>
            );
          })}
        </section>

        <section className="image-band">
          <div>
            <p className="eyebrow">Product references</p>
            <h2>Real product and packaging visuals for first conversations</h2>
            <p>
              Product images are used to start practical discussions about tube appearance, packaging, logo, samples,
              and quantity. Final claims and label wording should be confirmed for your market.
            </p>
          </div>
          <div className="image-grid">
            {productImages.map((image) => (
              <div className="product-thumb" key={image.src}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 50vw, 22vw" />
              </div>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div>
            <p className="eyebrow">How to start</p>
            <h2>From inquiry to quote</h2>
          </div>
          <ol>
            <li>
              <strong>Send requirements</strong>
              <span>Product, quantity, country, packaging, and whether you need wholesale, private label, or OEM.</span>
            </li>
            <li>
              <strong>Confirm product path</strong>
              <span>Ready stock, light customization, or deeper OEM discussion.</span>
            </li>
            <li>
              <strong>Review samples and packaging</strong>
              <span>Check product feel, tube, box, logo, and label wording before bulk order.</span>
            </li>
            <li>
              <strong>Prepare quote and lead time</strong>
              <span>Pricing and timing depend on quantity, packaging, customization, and shipping plan.</span>
            </li>
          </ol>
        </section>

        <InquiryActions
          topic="lash serum, mascara, private label eye makeup, or wholesale order"
          primaryLabel="Request catalog on WhatsApp"
          secondaryLabel="Email product requirements"
        />
      </main>
      <SiteFooter />
      <a className="mobile-whatsapp" href="#inquiry">
        Send inquiry
      </a>
    </>
  );
}
