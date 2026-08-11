import Link from "next/link";
import { InquiryActions } from "./InquiryActions";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "./SiteShell";
import { buildWhatsappHref, company, getPage, SitePage } from "../site-data";
import { PageJsonLd } from "../seo";

type PageTemplateProps = {
  page: SitePage;
};

export function PageTemplate({ page }: PageTemplateProps) {
  return (
    <>
      <PageJsonLd page={page} />
      <SiteHeader />
      <main>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>{page.eyebrow}</span>
        </nav>
        <section className="sub-hero">
          <div className="sub-hero-copy">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p>{page.summary}</p>
            <div className="cta-row">
              <a className="button primary" href={buildWhatsappHref(page.h1)}>
                {page.primaryCta}
              </a>
              <a className="button secondary" href="/contact">
                {page.secondaryCta}
              </a>
            </div>
            <div className="badge-row">
              {page.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
          {page.heroImage ? (
            <div className="sub-hero-image">
              <img src={page.heroImage} alt={page.heroAlt || page.h1} loading="lazy" />
            </div>
          ) : (
            <div className="contact-card">
              <strong>{company.brand}</strong>
              <span>{company.whatsappDisplay}</span>
              {company.emails.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}
        </section>

        <section className="content-grid">
          {page.sections.map((section) => (
            <article key={section.title} className="info-block">
              <p className="panel-kicker">{section.title}</p>
              <p>{section.body}</p>
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {page.gallery && page.gallery.length > 0 ? (
          <section className="gallery-section">
            {page.gallery.map((gallery) => (
              <div key={gallery.title} className="gallery-block">
                <p className="eyebrow">{gallery.title}</p>
                <p>{gallery.intro}</p>
                <div className="image-grid">
                  {gallery.images.map((image) => (
                    <figure key={image.src} className="product-thumb">
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <figcaption>{image.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ) : null}

        <section className="supplier-proof">
          <div>
            <p className="eyebrow">Supplier profile</p>
            <h2>Company details buyers can check before a quote</h2>
            <p>
              Venus beautiful is the export brand of {company.legalName}, based in {company.location}. Our team reviews
              product type, order quantity, packaging, samples, lead time, and label details with buyers before bulk
              production.
            </p>
            <ul>
              <li>Registered Shenzhen cosmetics company information</li>
              <li>15 years of factory production experience for eye makeup products</li>
              <li>Product focus: eyeliner, mascara, lash serum, eyebrow serum, and cosmetic packaging</li>
              <li>Service options: ready stock, mixed small orders, private label customization, and OEM support</li>
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

        <section className="faq-section">
          <div>
            <p className="eyebrow">Buyer questions</p>
            <h2>Questions buyers ask before sending an inquiry</h2>
          </div>
          <div className="faq-list">
            {page.faqs.map((faq) => (
              <details key={faq.question} open>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <InquiryActions topic={page.h1} primaryLabel={page.primaryCta} secondaryLabel={page.secondaryCta} />

        <section className="related-section">
          <p className="eyebrow">Related products and services</p>
          <div className="related-links">
            {page.related.map((slug) => {
              const related = getPage(slug);
              return related ? (
                <Link key={slug} href={`/${slug}`}>
                  {related.h1}
                </Link>
              ) : null;
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
