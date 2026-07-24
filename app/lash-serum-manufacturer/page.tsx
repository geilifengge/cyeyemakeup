import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { baseUrl, getPage } from "../site-data";

const page = getPage("lash-serum-manufacturer");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${baseUrl}/lash-serum-manufacturer/` },
};

export default function LashSerumManufacturerPage() {
  return <PageTemplate page={page} />;
}

