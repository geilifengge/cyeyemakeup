import type { Metadata } from "next";
import { CatalogLanding } from "../components/ProductCatalog";
import { baseUrl } from "../site-data";

export const metadata: Metadata = {
  title: "Mascara & Eyeliner Packaging Catalog | Custom Tubes",
  description: "Compare mascara tubes, eyeliner and serum tubes, and cosmetic pen packaging by material, capacity, size, MOQ, and decoration options.",
  alternates: { canonical: `${baseUrl}/packaging-catalog` },
};

export default function PackagingCatalogPage() {
  return <CatalogLanding locale="en" mode="packaging" />;
}
