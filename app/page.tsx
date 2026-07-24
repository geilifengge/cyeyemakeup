import type { Metadata } from "next";
import Link from "next/link";
import { InquiryActions } from "./components/InquiryActions";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "./components/SiteShell";
import { JsonLd } from "./seo";
import { baseUrl, company, getPage } from "./site-data";

export const metadata: Metadata = {
  title: "Venus beautiful | Private Label Lash Serum and Mascara Supplier",
  description:
    "Venus beautiful helps beauty buyers source private label lash serum, mascara, wholesale eye makeup, light customization, and OEM orders from Shenzhen, China.",
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    type: "website",
    siteName: "Venus beautiful",
    title: "Venus beautiful | Private Label Lash Serum and Mascara Supplier",
    description:
      "Lash serum and mascara supply for beauty brands, wholesalers, importers, and private label buyers.",
    url: `${baseUrl}/`,
    images: [
      {
        url: `${baseUrl}/images/lash-serum-hero.jpeg`,
        width: 1200,
        height: 630,
        alt: "Private label lash serum product for eye makeup buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus beautiful | Private Label Lash Serum and Mascara Supplier",
    description:
      "Lash serum and mascara supply for beauty brands, wholesalers, importers, and private label buyers.",
    images: [`${baseUrl}/images/lash-serum-hero.jpeg`],
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
  { src: "/images/lash-serum-detail-3.jpeg", alt: "Custom eye makeup packaging options" },
  { src: "/images/lash-serum-packaging.jpg", alt: "Packaged lash serum products for supplier catalog" },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${baseUrl}/#webpage`,
          url: `${baseUrl}/`,
          name: "Venus beautiful | Private Label Lash Serum and Mascara Supplier",
          description:
            "Venus beautiful helps beauty buyers source private label lash serum, mascara, wholesale eye makeup, light customization, and OEM orders from Shenzhen, China.",
          isPartOf: { "@id": `${baseUrl}/#website` },
          about: { "@id": `${baseUrl}/#organization` },
          inLanguage: "en",
        }}
      />
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="hero-copy">
            <p className="eyebrow">Private label eye makeup supplier</p>
            <h1>Lash serum and mascara supply for beauty brands</h1>
            <p>
              Venus beautiful supplies lash serum, mascara, and eye makeup products for beauty brands, wholesalers,
              importers, and ecommerce sellers that need wholesale, private label, light customization, or OEM orders.
            </p>
            <div className="cta-row">
              <a className="button primary" href="#inquiry">
                Request catalog
              </a>
              <Link className="button secondary" href="/private-label-lash-serum">
                View lash serum options
              </Link>
            </div>
            <div className="badge-row">
              <span>Wholesale supply</span>
              <span>Private label</span>
              <span>Light customization</span>
              <span>OEM orders</span>
            </div>
          </div>
          <div className="hero-media">
            <img src="/images/lash-serum-hero.jpeg" alt="Private label lash serum product for eye makeup buyers" />
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
            <strong>Service options</strong>
            <span>Wholesale, private label, light customization, OEM</span>
          </div>
        </section>

        <section className="supplier-capabilities">
          <p className="eyebrow">Supplier capabilities</p>
          <h2>Wholesale and private label eye makeup support from one supplier team</h2>
          <p>
            Venus beautiful focuses on lash serum and mascara orders for brands, wholesalers, importers, salons, and
            ecommerce sellers. Service options include ready wholesale supply, light private label changes, tube and box
            specifications, logo requirements, sample checks, and OEM order support. For lash serum buyers, quotation
            details usually include formula direction, cosmetic claim wording, packaging style, MOQ, sample quantity, and
            lead time. For mascara buyers, pricing depends on product type, brush style, tube appearance, color direction,
            carton planning, and the destination market. Share your quantity, country, launch timing, and packaging
            requirements so the sales reply can match a realistic order plan.
          </p>
        </section>

        <section className="section-heading">
          <p className="eyebrow">Products and services</p>
          <h2>Choose the product category or service option you need</h2>
        </section>
        <section className="page-card-grid">
          {commercialPages.map((slug) => {
            const page = getPage(slug);
            return (
              <Link className="page-card" href={`/${slug}`} key={slug}>
                <span>{page.eyebrow}</span>
                <strong>{page.h1}</strong>
                <p>{page.description}</p>
              </Link>
            );
          })}
        </section>

        <section className="image-band">
          <div>
            <p className="eyebrow">Product photos</p>
            <h2>Real product and packaging visuals for lash serum and mascara buyers</h2>
            <p>
              Product images show tube appearance, box style, brush and applicator details, packaging finish, and sample
              presentation for wholesale and private label orders. Final claims and label wording should be confirmed for
              your destination market.
            </p>
          </div>
          <div className="image-grid">
            {productImages.map((image) => (
              <div className="product-thumb" key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="supplier-proof home-proof">
          <div>
            <p className="eyebrow">Company profile</p>
            <h2>Registered Shenzhen supplier for eye makeup orders</h2>
            <p>
              Venus beautiful is the export brand of {company.legalName}. Public product wording stays conservative for
              eye-area cosmetics, and buyers are encouraged to confirm ingredient, label, packaging, and
              market requirements before bulk production.
            </p>
            <ul>
              <li>Product focus: lash serum, mascara, and eye makeup supply</li>
              <li>Inquiry focus: MOQ, samples, packaging, quote, and lead time</li>
              <li>Contact: {company.whatsappDisplay} and {company.email}</li>
            </ul>
          </div>
          <div className="proof-card license-card">
            <img
              className="license-image"
              src="/images/business-license-landscape.jpg"
              alt="Business license for Chuangyuan Cosmetics Manufacturing"
              loading="lazy"
            />
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
              <strong>Confirm service option</strong>
              <span>Ready stock, light customization, or OEM order support.</span>
            </li>
            <li>
              <strong>Check samples and packaging</strong>
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
      <FloatingWhatsApp />
    </>
  );
}
