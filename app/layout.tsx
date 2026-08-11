import type { Metadata } from "next";
import { Analytics } from "./components/Analytics";
import { OrganizationJsonLd } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cyeyemakeup.com"),
  title: {
    default: "Wholesale & Private Label Eye Makeup | Manufacturer in China",
    template: "%s",
  },
  description:
    "Shenzhen manufacturer with 15 years of experience: lash serum, mascara, and eyeliner for wholesale and private label. Flexible MOQ, samples, and catalog via WhatsApp.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Venus beautiful",
    title: "Wholesale & Private Label Eye Makeup | Manufacturer in China",
    description:
      "Lash serum, mascara, and eyeliner for wholesale and private label, with flexible MOQ and samples.",
    url: "https://cyeyemakeup.com/",
    images: [
      {
        url: "https://cyeyemakeup.com/images/lash-serum-white.jpg",
        width: 1200,
        height: 630,
        alt: "Private label lash serum product for eye makeup buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale & Private Label Eye Makeup | Manufacturer in China",
    description:
      "Lash serum, mascara, and eyeliner for wholesale and private label, with flexible MOQ and samples.",
    images: ["https://cyeyemakeup.com/images/lash-serum-white.jpg"],
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-40SQ9J25KV" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-40SQ9J25KV');`,
          }}
        />
        <OrganizationJsonLd />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
