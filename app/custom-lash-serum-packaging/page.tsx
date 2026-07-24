import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("custom-lash-serum-packaging");

export const metadata: Metadata = buildPageMetadata(page);

export default function CustomLashSerumPackagingPage() {
  return <PageTemplate page={page} />;
}
