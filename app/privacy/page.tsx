import type { Metadata } from "next";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Privacy and Analytics Choices | Venus beautiful",
  description: "How Venus beautiful handles analytics consent, inquiry data, and privacy choices.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <article className="legal-page">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy and analytics choices</h1>
          <p className="legal-intro">This page explains the limited data used by this B2B website and how you control Google Analytics.</p>
          <h2>Google Analytics</h2>
          <p>Google Analytics is set to denied by default. It receives measurement data only after you choose “Allow analytics”. Advertising storage, Google signals, and ad personalisation remain disabled. We send the page path, not URL query parameters, form entries, email addresses, or phone numbers.</p>
          <h2>WhatsApp &amp; email</h2>
          <p>When you contact us through WhatsApp or email, you choose to send product, quantity, country, packaging, and other business requirements to our sales team. Those services process the message under their own terms.</p>
          <h2>Privacy</h2>
          <p>Your analytics choice is stored in your browser. Use the “Analytics settings” button at the lower-left corner of any page to change it at any time.</p>
          <p>For privacy questions or requests concerning information you sent to us, contact Bella@cyeyemakeup.com.</p>
          <p className="legal-updated">Last updated: 11 August 2026</p>
        </article>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
