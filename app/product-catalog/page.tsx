import type { Metadata } from "next";
import { CatalogLanding } from "../components/ProductCatalog";
import { baseUrl } from "../site-data";

export const metadata: Metadata = {
  title: "Eye Makeup & Packaging Product Catalog | Venus beautiful",
  description: "Compare 12 finished eye makeup and 12 packaging references for wholesale, private label, and OEM projects. Ask about MOQ, samples, branding, and lead time.",
  alternates: { canonical: `${baseUrl}/product-catalog` },
};

export default function ProductCatalogPage() {
  return <CatalogLanding locale="en" mode="all" />;
}
