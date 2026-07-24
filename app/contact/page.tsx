import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { baseUrl, getPage } from "../site-data";

const page = getPage("contact");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${baseUrl}/contact/` },
};

export default function ContactPage() {
  return <PageTemplate page={page} />;
}

