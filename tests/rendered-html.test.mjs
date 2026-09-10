import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  const requestUrl = path.startsWith("http") ? path : `https://localhost${path}`;

  return worker.fetch(
    new Request(requestUrl, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders homepage SEO and buyer trust signals", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Private Label Eye Makeup &amp; Contract Manufacturer \| China<\/title>/i);
  assert.match(html, /property="og:image"/i);
  assert.match(html, /name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /type="application\/ld\+json"/i);
  assert.match(html, /"@type":"Organization"/);
  assert.match(html, /"@type":"WebPage"/);
  assert.match(html, /"@type":"Service"/);
  assert.match(html, /"dateModified":"2026-09-10"/);
  assert.match(html, /"areaServed":"Worldwide"/);
  assert.match(html, /Chuangyuan Cosmetics Manufacturing \(Shenzhen\) Co\., Ltd\./);
  assert.match(html, /Wholesale and private label eye makeup support/);
  assert.match(html, /Private label lash serum, mascara, eyeliner, and brow gel/i);
  assert.match(html, /cosmetics-contract-manufacturer/i);
  assert.match(html, /private-label-brow-gel/i);
  assert.match(html, /private-label-eyeliner-manufacturer/i);
  assert.match(html, /15 years.*factory production experience/i);
  assert.match(html, /5,000\+ m² facility/i);
  assert.match(html, /Direct answer/i);
  assert.match(html, /data-cta="Request catalog"/i);
  assert.match(html, /class="header-contact header-whatsapp"[^>]+href="https:\/\/wa\.me\/8613530944931/i);
  assert.match(html, /data-cta="Header WhatsApp"/i);
  assert.match(html, /crystal@cyeyemakeup\.com/i);
  assert.match(html, /Fengge@cyeyemakeup\.com/i);
  assert.match(html, /aaron@cyeyemakeup\.com/i);
  assert.doesNotMatch(html, /Bella@|Leo@|Emma@/i);
  assert.match(html, /CY-LS-01/);
  assert.match(html, /PK-MT-02/);
  assert.doesNotMatch(html, /Lily@cyeyemakeup\.com/i);
  assert.match(html, /Beauty brands, wholesalers, importers, distributors, salons, and ecommerce sellers/i);
  assert.match(html, /src="\/images\/lash-serum-white\.jpg"/);
  assert.doesNotMatch(html, /\/_vinext\/image|Initial UTM|Current page|CTA:/i);
});

test("renders the curated product and packaging catalogs with traceable references", async () => {
  const catalog = await render("/product-catalog");
  assert.equal(catalog.status, 200);
  const catalogHtml = await catalog.text();
  assert.match(catalogHtml, /Eye Makeup &amp; Packaging Product Catalog/i);
  assert.match(catalogHtml, /"@type":"CollectionPage"/);
  assert.match(catalogHtml, /CY-LS-01/);
  assert.match(catalogHtml, /CY-BG-03/);
  assert.match(catalogHtml, /PK-PE-04/);
  assert.match(catalogHtml, /Listing MOQ/);
  assert.match(catalogHtml, /supplier product records collected on 9 September 2026/i);
  assert.match(catalogHtml, /Custom-logo lash serum with presentation box/i);
  assert.match(catalogHtml, /Minimal white-tube lash serum/i);
  assert.match(catalogHtml, /<link rel="canonical" href="https:\/\/cyeyemakeup\.com\/product-catalog"/i);

  const packaging = await render("/packaging-catalog");
  assert.equal(packaging.status, 200);
  const packagingHtml = await packaging.text();
  assert.match(packagingHtml, /Mascara &amp; Eyeliner Packaging Catalog/i);
  assert.match(packagingHtml, /PK-MT-01/);
  assert.match(packagingHtml, /PK-ET-04/);
  assert.match(packagingHtml, /PK-PE-04/);
  assert.doesNotMatch(packagingHtml, /CY-LS-01/);
});

test("server-renders the contract manufacturing and brow gel opportunity pages", async () => {
  const manufacturing = await render("/cosmetics-contract-manufacturer");
  assert.equal(manufacturing.status, 200);
  const manufacturingHtml = await manufacturing.text();
  assert.match(manufacturingHtml, /Cosmetics contract manufacturer for private label eye makeup/i);
  assert.match(manufacturingHtml, /qualified production facilities/i);
  assert.match(manufacturingHtml, /Selected mascara formulas with available standard black or white tubes can start from 500 units/i);
  assert.match(manufacturingHtml, /"dateModified":"2026-09-10"/);
  assert.match(manufacturingHtml, /<link rel="canonical" href="https:\/\/cyeyemakeup\.com\/cosmetics-contract-manufacturer"/i);

  const brow = await render("/private-label-brow-gel");
  assert.equal(brow.status, 200);
  const browHtml = await brow.text();
  assert.match(browHtml, /Private label brow gel manufacturer for beauty brands/i);
  assert.match(browHtml, /CY-BG-01/);
  assert.match(browHtml, /CY-BG-02/);
  assert.match(browHtml, /CY-BG-03/);
  assert.match(browHtml, /listed from 500 pieces/i);
  assert.match(browHtml, /"@type":"FAQPage"/);
  assert.match(browHtml, /<link rel="canonical" href="https:\/\/cyeyemakeup\.com\/private-label-brow-gel"/i);
});

test("redirects only the public HTTP host while allowing local production preview", async () => {
  const publicResponse = await render("http://cyeyemakeup.com/private-label-eyeliner-manufacturer");
  assert.equal(publicResponse.status, 301);
  assert.equal(
    publicResponse.headers.get("location"),
    "https://cyeyemakeup.com/private-label-eyeliner-manufacturer",
  );

  const publicWwwResponse = await render("http://www.cyeyemakeup.com/private-label-eyeliner-manufacturer?utm_source=test");
  assert.equal(publicWwwResponse.status, 301);
  assert.equal(
    publicWwwResponse.headers.get("location"),
    "https://cyeyemakeup.com/private-label-eyeliner-manufacturer?utm_source=test",
  );

  const localResponse = await render("http://localhost/private-label-eyeliner-manufacturer");
  assert.equal(localResponse.status, 200);
});

test("server-renders the private label eyeliner page and buyer FAQs", async () => {
  const response = await render("/private-label-eyeliner-manufacturer");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Private label eyeliner manufacturer for beauty brands and wholesalers/i);
  assert.match(html, /Black and brown liquid eyeliner pens/i);
  assert.match(html, /src="\/images\/eyeliner-hero\.jpg"/i);
  assert.match(html, /https:\/\/wa\.me\/8613530944931/i);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /"@type":"Service"/);
  assert.match(html, /Private Label Eyeliner Manufacturer \| MOQ &amp; Samples/i);
  assert.match(html, /"dateModified":"2026-09-08"/);
  assert.match(html, /Direct answer/i);
  assert.match(html, /Order route/i);
  assert.match(html, /pen structure, packaging, printing, product direction, and quantity/i);
  assert.match(html, /Match the formula with the pen and applicator/i);
  assert.match(html, /Approve the sample before bulk production/i);
  assert.match(html, /private-label-eyeliner-cost-moq-samples/i);
});

test("server-renders the optimized private label mascara page", async () => {
  const response = await render("/private-label-mascara-manufacturer");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Private label mascara manufacturer for wholesale and OEM orders/i);
  assert.match(html, /Mascara Manufacturer &amp; Supplier \| Private Label MOQ 500/i);
  assert.match(html, /Direct answer/i);
  assert.match(html, /Starting MOQ/i);
  assert.match(html, /MOQ starts from 500 units for selected mascara formulas using available standard black or white tubes/i);
  assert.match(html, /normal custom-color tube MOQ is 10,000 units/i);
  assert.match(html, /develop the closest feasible direction for sampling/i);
  assert.match(html, /Sample development normally takes 10-15 days/i);
  assert.match(html, /bulk production by our manufacturing partner normally takes 20-40 days/i);
  assert.match(html, /Free design support is available/i);
  assert.match(html, /How did you find us\? \(optional\)/i);
  assert.match(html, /ChatGPT/i);
  assert.match(html, /Perplexity/i);
  assert.match(html, /href="#inquiry"/i);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /"@type":"Service"/);
  assert.match(html, /"dateModified":"2026-09-03"/);
  assert.match(html, /Confirm formula, wiper, brush, and tube compatibility/i);
  assert.match(html, /<link rel="canonical" href="https:\/\/cyeyemakeup\.com\/private-label-mascara-manufacturer"/i);
  assert.doesNotMatch(html, /17\.5|CP0456|CP0149|CP0036|CP0037|Transmo/i);
});

test("server-renders formula matching with formula-specific compliance controls", async () => {
  const response = await render("/private-label-lash-serum");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Formula matching and custom development/i);
  assert.match(html, /customer-provided formula and develop the closest feasible direction/i);
  assert.match(html, /An exact match is not promised/i);
  assert.match(html, /formula-specific document set before production/i);
  assert.doesNotMatch(html, /CP0033|CP0035|bimatoprost|BIMA|cloprosten/i);
});

test("server-renders conditional tube color MOQ rules", async () => {
  const response = await render("/custom-lash-serum-packaging");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Available standard black or white tubes can start from 500 units/i);
  assert.match(html, /combined production is available/i);
  assert.match(html, /normal custom-color tube MOQ is 10,000 units/i);
});

test("server-renders wholesale mascara with synchronized MOQ and lead times", async () => {
  const response = await render("/wholesale-mascara");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Wholesale Mascara Supplier \| MOQ from 500 Units/i);
  assert.match(html, /Available standard black or white tubes: starting MOQ 500 units/i);
  assert.match(html, /normal custom-color tube MOQ is 10,000 units/i);
  assert.match(html, /Sample development normally takes 10-15 days/i);
  assert.match(html, /bulk production by our manufacturing partner normally takes 20-40 days/i);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /Direct answer/i);
  assert.match(html, /Product system/i);
  assert.match(html, /"@type":"Service"/);
  assert.match(html, /Bulk and wholesale mascara supplier for beauty brands/i);
  assert.match(html, /From Shenzhen, China, we supply wholesale and bulk mascara/i);
  assert.match(html, /"dateModified":"2026-09-08"/);
  assert.doesNotMatch(html, /CP0033|CP0035|TRANSMO|\bBIMA\b|bimatoprost|cloprosten/i);
});

test("server-renders the eyeliner cost, MOQ, samples, and lead-time guide", async () => {
  const response = await render("/private-label-eyeliner-cost-moq-samples");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Private label eyeliner cost, MOQ, samples, and lead time/i);
  assert.match(html, /How much does private label eyeliner cost\?/i);
  assert.match(html, /Direct answer/i);
  assert.doesNotMatch(html, /eyeliner manufacturing plant cost|build or equip a new eyeliner factory/i);
  assert.doesNotMatch(html, /"@type":"Service"/);
  assert.match(html, /"dateModified":"2026-09-08"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/cyeyemakeup\.com\/private-label-eyeliner-cost-moq-samples"/i);
});

test("server-renders commercial page schemas and clean internal links", async () => {
  const response = await render("/private-label-lash-serum");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<link rel="canonical" href="https:\/\/cyeyemakeup\.com\/private-label-lash-serum"/i);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /Company details buyers can check before a quote/);
  assert.match(html, /Business license for Chuangyuan Cosmetics Manufacturing/);
  assert.doesNotMatch(html, /href="\/private-label-lash-serum\/"|href="\/contact\/"|this page/i);
  assert.doesNotMatch(html, /Search Console|keyword research|ranking|search volume|pending deploy/i);
});

test("server-renders updated company manufacturing profile", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /15 years of factory production experience/i);
  assert.match(html, /eyeliner, mascara, lash serum, and eyebrow serum/i);
  assert.match(html, /ready stock, mixed small orders, private label customization/i);
  assert.match(html, /European and American markets/i);
  assert.match(html, /Certificate and qualification documents available for review/i);
  assert.doesNotMatch(html, /10\+ years/i);
});

test("server-renders wholesale eyeliner page with direct inquiry path", async () => {
  const response = await render("/wholesale-eyeliner");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Wholesale eyeliner and bulk liquid eyeliner supply/i);
  assert.match(html, /Ready wholesale products or private label packaging/i);
  assert.match(html, /Direct answer/i);
  assert.match(html, /Branding level/i);
  assert.match(html, /"@type":"Service"/);
  assert.match(html, /"dateModified":"2026-09-01"/);
  assert.match(html, /https:\/\/wa\.me\/8613530944931/i);
  assert.match(html, /"@type":"FAQPage"/);
});

test("server-renders custom lash serum packaging with a quote-ready direct answer", async () => {
  const response = await render("/custom-lash-serum-packaging");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Direct answer/i);
  assert.match(html, /Tube structure/i);
  assert.match(html, /Available standard black or white tubes can start from 500 units/i);
  assert.match(html, /"@type":"Service"/);
  assert.match(html, /"dateModified":"2026-09-01"/);
});

test("server-renders cosmetic packaging manufacturing scope", async () => {
  const response = await render("/cosmetic-packaging-manufacturer");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Cosmetic packaging manufacturer for eye makeup and lip products/i);
  assert.match(html, /22 injection molding machines/i);
  assert.match(html, /Liquid eyeliner and eyeliner cream containers/i);
  assert.match(html, /Lip gloss bottles and applicator packaging/i);
  assert.doesNotMatch(html, /search volume|keyword|SEO strategy/i);
});


test("renders privacy controls, live security headers, and verified compliance wording", async () => {
  const homepage = await render("/");
  assert.equal(homepage.status, 200);
  assert.match(homepage.headers.get("content-security-policy") ?? "", /googletagmanager\.com/);
  assert.match(homepage.headers.get("content-security-policy") ?? "", /formsubmit\.co/);
  const homepageHtml = await homepage.text();
  assert.match(homepageHtml, /gtag\('consent', 'default'/);
  assert.match(homepageHtml, /send_page_view: analyticsConsent === 'granted'/);
  assert.match(homepageHtml, /action="https:\/\/formsubmit\.co\/crystal@cyeyemakeup\.com"/i);
  assert.match(homepageHtml, /name="_cc" value="Fengge@cyeyemakeup\.com,aaron@cyeyemakeup\.com"/i);
  assert.match(homepageHtml, /name="_next" value="https:\/\/cyeyemakeup\.com\/thank-you"/i);
  assert.match(homepageHtml, /<input(?=[^>]*type="email")(?=[^>]*name="email")(?=[^>]*required)[^>]*>/i);
  assert.match(homepageHtml, /\['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'\]/);
  assert.doesNotMatch(homepageHtml, /page_location: location\.origin \+ location\.pathname/);
  assert.match(homepageHtml, /"logo":"https:\/\/cyeyemakeup\.com\/images\/logo\.png"/);

  const privacy = await render("/privacy");
  assert.equal(privacy.status, 200);
  const privacyHtml = await privacy.text();
  assert.match(privacyHtml, /Privacy and analytics choices/i);
  assert.match(privacyHtml, /utm_source, utm_medium, utm_campaign, utm_content, and utm_term/i);
  assert.match(privacyHtml, /10 September 2026/i);
  assert.match(privacyHtml, /FormSubmit processes the submission for us and may retain it for up to 30 days/i);
  assert.match(privacyHtml, /<meta name="robots" content="index, follow"/i);
  assert.doesNotMatch(privacyHtml, /<meta name="robots" content="[^"]*noindex/i);

  const thankYou = await render("/thank-you");
  assert.equal(thankYou.status, 200);
  const thankYouHtml = await thankYou.text();
  assert.match(thankYouHtml, /Inquiry received/i);
  assert.match(thankYouHtml, /<meta name="robots" content="noindex, follow"/i);

  const compliance = await render("/certifications");
  assert.equal(compliance.status, 200);
  const complianceHtml = await compliance.text();
  assert.match(complianceHtml, /ISO 22716 validity check/i);
  assert.match(complianceHtml, /src="\/images\/certifications-overview\.jpg"/i);
  assert.match(complianceHtml, /loading="eager"[^>]+fetchPriority="high"/i);
  assert.doesNotMatch(complianceHtml, /cert-3\.jpg|cert-cpsr\.jpg/i);
});
