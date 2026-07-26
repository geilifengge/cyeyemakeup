import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("cosmetic-packaging-manufacturer");

export const metadata: Metadata = buildPageMetadata(page);

export default function CosmeticPackagingManufacturerPage() {
  return <PageTemplate page={page} />;
}
