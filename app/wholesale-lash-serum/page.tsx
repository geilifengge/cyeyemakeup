import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { baseUrl, getPage } from "../site-data";

const page = getPage("wholesale-lash-serum");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${baseUrl}/wholesale-lash-serum/` },
};

export default function WholesaleLashSerumPage() {
  return <PageTemplate page={page} />;
}

