import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("wholesale-eyeliner");

export const metadata: Metadata = buildPageMetadata(page);

export default function WholesaleEyelinerPage() {
  return <PageTemplate page={page} />;
}
