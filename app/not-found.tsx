import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteShell";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found">
        <p className="eyebrow">Page not found</p>
        <h1>This page is not available.</h1>
        <p>Return to the eye makeup inquiry pages or send your product requirements directly.</p>
        <div className="cta-row">
          <Link className="button primary" href="/">
            Back to home
          </Link>
          <Link className="button secondary" href="/contact">
            Contact supplier
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
