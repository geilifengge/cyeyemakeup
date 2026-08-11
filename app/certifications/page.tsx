import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("certifications");

export const metadata: Metadata = buildPageMetadata(page);

export default function CertificationsPage() {
  return <PageTemplate page={page} />;
}
