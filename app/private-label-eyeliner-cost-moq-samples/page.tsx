import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("private-label-eyeliner-cost-moq-samples");

export const metadata: Metadata = buildPageMetadata(page);

export default function PrivateLabelEyelinerCostMoqSamplesPage() {
  return <PageTemplate page={page} />;
}
