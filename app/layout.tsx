import type { Metadata } from "next";
import { OrganizationJsonLd } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyeyemakeup.com"),
  title: {
    default: "Venus beautiful | Private Label Eye Makeup Supplier",
    template: "%s",
  },
  description:
    "Private label lash serum and mascara supplier for wholesale, light customization, and OEM eye makeup orders.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Venus beautiful",
    title: "Venus beautiful | Private Label Eye Makeup Supplier",
    description:
      "Lash serum and mascara sourcing for beauty brands, wholesalers, and private label buyers.",
    url: "https://cyeyemakeup.com/",
    images: [
      {
        url: "https://cyeyemakeup.com/images/lash-serum-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Private label lash serum product for eye makeup buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus beautiful | Private Label Eye Makeup Supplier",
    description:
      "Lash serum and mascara sourcing for beauty brands, wholesalers, and private label buyers.",
    images: ["https://cyeyemakeup.com/images/lash-serum-hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationJsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
