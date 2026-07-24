import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("private-label-lash-serum");

export const metadata: Metadata = buildPageMetadata(page);

export default function PrivateLabelLashSerumPage() {
  return <PageTemplate page={page} />;
}
