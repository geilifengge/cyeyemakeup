import type { Metadata } from "next";
import { PageTemplate } from "../components/PageTemplate";
import { baseUrl, getPage } from "../site-data";

const page = getPage("lash-serum-moq-samples-lead-time");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${baseUrl}/lash-serum-moq-samples-lead-time/` },
};

export default function LashSerumMoqPage() {
  return <PageTemplate page={page} />;
}

