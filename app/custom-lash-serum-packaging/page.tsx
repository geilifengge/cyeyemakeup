import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { baseUrl, getPage } from "../site-data";

const page = getPage("custom-lash-serum-packaging");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${baseUrl}/custom-lash-serum-packaging/` },
};

export default function CustomLashSerumPackagingPage() {
  return <PageTemplate page={page} />;
}

