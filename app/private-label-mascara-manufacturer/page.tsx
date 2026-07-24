import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { baseUrl, getPage } from "../site-data";

const page = getPage("private-label-mascara-manufacturer");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${baseUrl}/private-label-mascara-manufacturer/` },
};

export default function PrivateLabelMascaraManufacturerPage() {
  return <PageTemplate page={page} />;
}

