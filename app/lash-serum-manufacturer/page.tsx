import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("lash-serum-manufacturer");

export const metadata: Metadata = buildPageMetadata(page);

export default function LashSerumManufacturerPage() {
  return <PageTemplate page={page} />;
}
