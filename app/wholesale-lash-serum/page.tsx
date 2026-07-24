import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("wholesale-lash-serum");

export const metadata: Metadata = buildPageMetadata(page);

export default function WholesaleLashSerumPage() {
  return <PageTemplate page={page} />;
}
