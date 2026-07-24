import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { baseUrl, getPage } from "../site-data";

const page = getPage("wholesale-mascara");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${baseUrl}/wholesale-mascara` },
};

export default function WholesaleMascaraPage() {
  return <PageTemplate page={page} />;
}
