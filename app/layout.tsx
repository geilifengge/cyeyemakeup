import type { Metadata } from "next";
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

