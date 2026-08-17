import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://localhost${path}`, {
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
  assert.match(html, /<title>Wholesale &amp; Private Label Eye Makeup \| Manufacturer in China<\/title>/i);
  assert.match(html, /property="og:image"/i);
  assert.match(html, /name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /type="application\/ld\+json"/i);
  assert.match(html, /"@type":"Organization"/);
  assert.match(html, /"@type":"WebPage"/);
  assert.match(html, /Chuangyuan Cosmetics Manufacturing \(Shenzhen\) Co\., Ltd\./);
  assert.match(html, /Wholesale and private label eye makeup support/);
  assert.match(html, /Private label lash serum, mascara, and eyeliner/i);
  assert.match(html, /private-label-eyeliner-manufacturer/i);
  assert.match(html, /15 years.*factory production experience/i);
  assert.match(html, /5,000\+ m² facility/i);
  assert.match(html, /src="\/images\/lash-serum-white\.jpg"/);
  assert.doesNotMatch(html, /\/_vinext\/image|Initial UTM|Current page|CTA:/i);
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
  assert.match(html, /private-label-eyeliner-cost-moq-samples/i);
});

test("server-renders the optimized private label mascara page", async () => {
  const response = await render("/private-label-mascara-manufacturer");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Private label mascara manufacturer for wholesale and OEM orders/i);
  assert.match(html, /MOQ starts from 500 units for selected mascara formulas using available standard black or white tubes/i);
  assert.match(html, /normal custom-color tube MOQ is 10,000 units/i);
  assert.match(html, /develop the closest feasible direction for sampling/i);
  assert.match(html, /Sample development normally takes 10-15 days/i);
  assert.match(html, /bulk production by our manufacturing partner normally takes 20-40 days/i);
  assert.match(html, /Free design support is available/i);
  assert.match(html, /"@type":"FAQPage"/);
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
  assert.doesNotMatch(html, /CP0033|CP0035|TRANSMO|\bBIMA\b|bimatoprost|cloprosten/i);
});

test("server-renders the eyeliner cost, MOQ, samples, and lead-time guide", async () => {
  const response = await render("/private-label-eyeliner-cost-moq-samples");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Private label eyeliner cost, MOQ, samples, and lead time/i);
  assert.match(html, /How much does private label eyeliner cost\?/i);
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
  assert.match(html, /https:\/\/wa\.me\/8613530944931/i);
  assert.match(html, /"@type":"FAQPage"/);
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
  const homepageHtml = await homepage.text();
  assert.match(homepageHtml, /gtag\('consent', 'default'/);
  assert.match(homepageHtml, /page_location: location\.origin \+ location\.pathname/);

  const privacy = await render("/privacy");
  assert.equal(privacy.status, 200);
  assert.match(await privacy.text(), /Privacy and analytics choices/i);

  const compliance = await render("/certifications");
  assert.equal(compliance.status, 200);
  const complianceHtml = await compliance.text();
  assert.match(complianceHtml, /ISO 22716 validity check/i);
  assert.doesNotMatch(complianceHtml, /cert-3\.jpg|cert-cpsr\.jpg/i);
});
