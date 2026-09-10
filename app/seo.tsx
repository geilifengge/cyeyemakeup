import type { Metadata } from "next";
import { baseUrl, company, SitePage } from "./site-data";

export function absoluteUrl(path = "") {
  if (path.startsWith("http")) return path;
  if (!path) return baseUrl;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pagePath(slug: string) {
  return `/${slug}`;
}

function pageImage(page: SitePage) {
  return page.heroImage || "/images/lash-serum-white.jpg";
}

const commercialSlugs = new Set([
  "private-label-lash-serum",
  "lash-serum-manufacturer",
  "private-label-mascara-manufacturer",
  "private-label-eyeliner-manufacturer",
  "wholesale-lash-serum",
  "wholesale-mascara",
  "wholesale-eyeliner",
  "cosmetic-packaging-manufacturer",
  "custom-lash-serum-packaging",
]);

export function buildPageMetadata(page: SitePage): Metadata {
  const url = absoluteUrl(pagePath(page.slug));
  const image = absoluteUrl(pageImage(page));
  const imageAlt = page.heroAlt || page.h1;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: company.brand,
      title: page.title,
      description: page.description,
      url,
      images: [
        {
          url: image,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}

function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
            name: company.brand,
            legalName: company.legalName,
            alternateName: company.shortName,
            url: baseUrl,
            logo: absoluteUrl("/images/logo.png"),
            image: absoluteUrl("/images/business-license-landscape.jpg"),
            description:
              "Eye makeup and cosmetic packaging manufacturer and supplier for wholesale, private label, light customization, and OEM buyers.",
            knowsAbout: [
              "Private label eye makeup",
              "Lash serum manufacturing",
              "Mascara manufacturing",
              "Liquid eyeliner manufacturing",
              "Wholesale eye makeup",
              "Cosmetic packaging",
            ],
            email: company.email,
            telephone: company.whatsappDisplay,
            address: {
              "@type": "PostalAddress",
              streetAddress: company.address,
              addressLocality: "Shenzhen",
              addressRegion: "Guangdong",
              addressCountry: "CN",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: company.whatsappDisplay,
                email: company.email,
                contactType: "sales",
                availableLanguage: ["en"],
              },
            ],
          },
          {
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`,
            url: baseUrl,
            name: company.brand,
            publisher: { "@id": `${baseUrl}/#organization` },
            inLanguage: "en",
          },
        ],
      }}
    />
  );
}

export function PageJsonLd({ page }: { page: SitePage }) {
  const url = absoluteUrl(pagePath(page.slug));
  const faqId = `${url}#faq`;
  const serviceId = `${url}#service`;
  const isCommercial = commercialSlugs.has(page.slug);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name: page.title,
            description: page.description,
            isPartOf: { "@id": `${baseUrl}/#website` },
            about: { "@id": `${baseUrl}/#organization` },
            mainEntity: [
              ...(isCommercial ? [{ "@id": serviceId }] : []),
              { "@id": faqId },
            ],
            ...(page.lastModified ? { dateModified: page.lastModified } : {}),
            inLanguage: "en",
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${baseUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: page.h1,
                item: url,
              },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": faqId,
            mainEntity: page.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
          ...(isCommercial
            ? [
                {
                  "@type": "Service",
                  "@id": serviceId,
                  name: page.h1,
                  description: page.quickAnswer || page.summary,
                  url,
                  provider: { "@id": `${baseUrl}/#organization` },
                  serviceType: page.eyebrow,
                  areaServed: "Worldwide",
                  audience: {
                    "@type": "BusinessAudience",
                    audienceType: "Beauty brands, wholesalers, importers, distributors, and ecommerce sellers",
                  },
                  inLanguage: "en",
                },
              ]
            : []),
          ...(page.gallery ?? []).flatMap((gallery) =>
            gallery.images.map((image) => ({
              "@type": "ImageObject",
              contentUrl: absoluteUrl(image.src),
              caption: image.alt,
              about: { "@id": `${baseUrl}/#organization` },
            }))
          ),
        ],
      }}
    />
  );
}
