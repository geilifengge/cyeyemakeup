import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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
  assert.match(html, /<title>Venus beautiful \| Private Label Eye Makeup Supplier<\/title>/i);
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
  assert.match(html, /Black and brown color options/i);
  assert.match(html, /src="\/images\/eyeliner-hero\.jpg"/i);
  assert.match(html, /https:\/\/wa\.me\/8618144490882/i);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /private-label-eyeliner-cost-moq-samples/i);
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
  assert.doesNotMatch(html, /href="\/private-label-lash-serum\/"|href="\/contact\/"|this page|positioning/i);
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
  assert.match(html, /https:\/\/wa\.me\/8618144490882/i);
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
