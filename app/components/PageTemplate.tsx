import Link from "next/link";
import { InquiryActions } from "./InquiryActions";
import { SiteFooter, SiteHeader } from "./SiteShell";
import { company, getPage, SitePage } from "../site-data";
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
              <a className="button primary" href="#inquiry">
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
              <span>{company.email}</span>
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

        <section className="supplier-proof">
          <div>
            <p className="eyebrow">Supplier reference</p>
            <h2>Company details buyers can check before a quote</h2>
            <p>
              Venus beautiful is the buyer-facing brand of {company.legalName}, based in {company.location}. Inquiry
              conversations focus on product type, order quantity, packaging, samples, lead time, and market-ready label
              wording before bulk production.
            </p>
            <ul>
              <li>Registered Shenzhen cosmetics company information</li>
              <li>Product focus: lash serum, mascara, and eye makeup supply</li>
              <li>Buyer paths: wholesale, private label, light customization, and OEM discussion</li>
            </ul>
          </div>
          <div className="proof-card">
            <img src="/images/business-license.jpg" alt="Business license reference for Chuangyuan Cosmetics Manufaturing" loading="lazy" />
          </div>
        </section>

        <section className="faq-section">
          <div>
            <p className="eyebrow">Procurement answers</p>
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
          <p className="eyebrow">Related buying paths</p>
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
      <a className="mobile-whatsapp" href="#inquiry">
        Send inquiry
      </a>
    </>
  );
}
