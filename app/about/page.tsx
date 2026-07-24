import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { buildPageMetadata } from "../seo";
import { getPage } from "../site-data";

const page = getPage("about");

export const metadata: Metadata = buildPageMetadata(page);

export default function AboutPage() {
  return <PageTemplate page={page} />;
}
