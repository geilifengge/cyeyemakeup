import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("lash-serum-moq-samples-lead-time");

export const metadata: Metadata = buildPageMetadata(page);

export default function LashSerumMoqPage() {
  return <PageTemplate page={page} />;
}
