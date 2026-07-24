import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { baseUrl, getPage } from "../site-data";

const page = getPage("about");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${baseUrl}/about/` },
};

export default function AboutPage() {
  return <PageTemplate page={page} />;
}

