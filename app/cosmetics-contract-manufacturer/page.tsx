import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("cosmetics-contract-manufacturer");

export const metadata: Metadata = buildPageMetadata(page);

export default function CosmeticsContractManufacturerPage() {
  return <PageTemplate page={page} />;
}
