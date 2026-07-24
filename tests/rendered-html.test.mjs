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
  assert.match(html, /<title>Venus beautiful \| Private Label Lash Serum and Mascara Supplier<\/title>/i);
  assert.match(html, /property="og:image"/i);
  assert.match(html, /name="twitter:card" content="summary_large_image"/i);
  assert.match(html, /type="application\/ld\+json"/i);
  assert.match(html, /"@type":"Organization"/);
  assert.match(html, /"@type":"WebPage"/);
  assert.match(html, /Chuangyuan Cosmetics Manufacturing \(Shenzhen\) Co\., Ltd\./);
  assert.match(html, /Wholesale and private label eye makeup support/);
  assert.match(html, /src="\/images\/lash-serum-hero\.jpeg"/);
  assert.doesNotMatch(html, /Manufaturing|\/_vinext\/image|Initial UTM|Current page|CTA:/i);
});

test("server-renders commercial page schemas and clean internal links", async () => {
  const response = await render("/private-label-lash-serum");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<link rel="canonical" href="https:\/\/cyeyemakeup\.com\/private-label-lash-serum"/i);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.match(html, /Company details buyers can check before a quote/);
  assert.match(html, /Business license reference for Chuangyuan Cosmetics Manufacturing/);
  assert.doesNotMatch(html, /href="\/private-label-lash-serum\/"|href="\/contact\/"|this page|positioning/i);
  assert.doesNotMatch(html, /Search Console|keyword research|ranking|search volume|pending deploy/i);
});
