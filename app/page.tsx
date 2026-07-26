import type { Metadata } from "next";
import Link from "next/link";
import { InquiryActions } from "./components/InquiryActions";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "./components/SiteShell";
import { JsonLd } from "./seo";
import { baseUrl, buildWhatsappHref, company, getPage } from "./site-data";

export const metadata: Metadata = {
  title: "Venus beautiful | Private Label Eye Makeup Supplier",
  description:
    "Private label lash serum, mascara, and eyeliner supplier for beauty brands, wholesalers, and importers. Wholesale, packaging, samples, and OEM support from Shenzhen, China.",
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    type: "website",
    siteName: "Venus beautiful",
    title: "Venus beautiful | Private Label Eye Makeup Supplier",
    description:
      "Lash serum, mascara, and eyeliner supply for beauty brands, wholesalers, importers, and private label buyers.",
    url: `${baseUrl}/`,
    images: [
      {
        url: `${baseUrl}/images/lash-serum-white.jpg`,
        width: 1200,
        height: 630,
        alt: "Private label lash serum product for eye makeup buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus beautiful | Private Label Eye Makeup Supplier",
    description:
      "Lash serum, mascara, and eyeliner supply for beauty brands, wholesalers, importers, and private label buyers.",
    images: [`${baseUrl}/images/lash-serum-white.jpg`],
  },
};

const commercialPages = [
  "private-label-lash-serum",
  "lash-serum-manufacturer",
  "private-label-mascara-manufacturer",
  "private-label-eyeliner-manufacturer",
  "cosmetic-packaging-manufacturer",
  "wholesale-lash-serum",
  "wholesale-mascara",
  "wholesale-eyeliner",
  "custom-lash-serum-packaging",
];

const productImages = [
  { src: "/images/lash-serum-white.jpg", alt: "White lash serum tube and box for private label buyers" },
  { src: "/images/mascara-hero.jpg", alt: "Venus beautiful mascara tube, brush, and outer box" },
  { src: "/images/eyeliner-hero.jpg", alt: "Liquid eyeliner pen and packaging for private label orders" },
  { src: "/images/eyeliner-colors.jpg", alt: "Black and brown liquid eyeliner color options" },
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
          name: "Venus beautiful | Private Label Eye Makeup Supplier",
          description:
            "Venus beautiful supplies private label lash serum, mascara, eyeliner, and cosmetic packaging for wholesale and OEM buyers.",
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
            <h1>Private label lash serum, mascara, and eyeliner</h1>
            <p>
              Venus beautiful supplies lash serum, mascara, liquid eyeliner, and related cosmetic packaging for beauty
              brands, wholesalers, importers, and ecommerce sellers that need wholesale, private label, light
              customization, or OEM orders.
            </p>
            <div className="cta-row">
              <a
                className="button primary"
                href={buildWhatsappHref("lash serum, mascara, eyeliner, private label eye makeup, or wholesale order")}
              >
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
            <img
              src="/images/lash-serum-white.jpg"
              alt="White Venus beautiful lash serum tube and box for eye makeup buyers"
            />
          </div>
        </section>

        <section className="trust-strip" aria-label="Supplier details">
          <div>
            <strong>{company.shortName}</strong>
            <span>Registered Shenzhen supplier</span>
          </div>
          <div>
            <strong>15 years</strong>
            <span>Factory production experience</span>
          </div>
          <div>
            <strong>5,000+ m²</strong>
            <span>Facility with 22 injection molding machines</span>
          </div>
          <div>
            <strong>Flexible supply</strong>
            <span>Wholesale, private label, light customization, OEM</span>
          </div>
        </section>

        <section className="supplier-capabilities">
          <p className="eyebrow">Supplier capabilities</p>
          <h2>Wholesale and private label eye makeup support from one supplier team</h2>
          <p>
            We manufacture eyeliner, mascara, lash serum, and eyebrow serum for brands, wholesalers, importers, salons,
            and ecommerce sellers. Our team has 15 years of factory production experience and mainly serves European
            and American markets. We support ready stock, mixed small orders, private label customization, and OEM
            requirements. As a cosmetic packaging manufacturer, we also produce mascara bottles, liquid eyeliner
            containers, lip gloss bottles, and lipstick tubes.
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
            <h2>Real product and packaging visuals for eye makeup buyers</h2>
            <p>
              Product images show tube appearance, box style, brush and applicator details, packaging finish, and sample
              presentation for wholesale and private label orders. We can review formula details, label wording, and
              packaging requirements with you before bulk production.
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
            <h2>Eye makeup manufacturer with 15 years of factory production experience</h2>
            <p>
              Venus beautiful is the export brand of {company.legalName}. We manufacture eyeliner, mascara, lash serum,
              and eyebrow serum, with ready stock, mixed small orders, private label customization, and OEM support for
              buyers in Europe, the Americas, and other export markets.
            </p>
            <ul>
              <li>Product focus: eyeliner, mascara, lash serum, eyebrow serum, and cosmetic packaging</li>
              <li>Quality focus: product consistency, formula safety, and stable delivery</li>
              <li>Certificate and qualification documents available for order review</li>
              <li>Manufacturing capability: 5,000+ m² facility and 22 injection molding machines</li>
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
          topic="lash serum, mascara, eyeliner, private label eye makeup, or wholesale order"
          primaryLabel="Request catalog on WhatsApp"
          secondaryLabel="Email product requirements"
        />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
