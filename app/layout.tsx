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
    "Shenzhen manufacturer of lash serum, mascara, and eyeliner for wholesale and private label. Request MOQ, samples, packaging options, and a B2B catalog.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Venus beautiful",
    title: "Wholesale & Private Label Eye Makeup | Manufacturer in China",
    description:
      "Shenzhen manufacturer of lash serum, mascara, and eyeliner for wholesale and private label, with MOQ, samples, packaging options, and B2B supply.",
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
      "Shenzhen manufacturer of lash serum, mascara, and eyeliner for wholesale and private label, with MOQ, samples, packaging options, and B2B supply.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var analyticsConsent = 'denied';
try { analyticsConsent = localStorage.getItem('cy_ga_consent_v2') === 'granted' ? 'granted' : 'denied'; } catch (e) {}
gtag('consent', 'default', {
  analytics_storage: analyticsConsent,
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
var analyticsLocation = new URL(location.origin + location.pathname);
var campaignParams = new URLSearchParams(location.search);
['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function(name) {
  var value = campaignParams.get(name);
  if (value) analyticsLocation.searchParams.set(name, value.slice(0, 100));
});
gtag('config', 'G-40SQ9J25KV', {
  allow_google_signals: false,
  allow_ad_personalization_signals: false,
  send_page_view: analyticsConsent === 'granted',
  page_location: analyticsLocation.href
});`,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-40SQ9J25KV" />
        <OrganizationJsonLd />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
