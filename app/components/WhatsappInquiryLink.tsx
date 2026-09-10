"use client";

import { MouseEvent, ReactNode } from "react";
import { buildWhatsappHref, company } from "../site-data";

const landingKey = "cy_initial_landing_path";
const utmKey = "cy_initial_utm";

function readOrCreate(key: string, createValue: () => string) {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.sessionStorage.getItem(key);
    if (existing) return existing;
    const value = createValue();
    window.sessionStorage.setItem(key, value);
    return value;
  } catch {
    return createValue();
  }
}

function getInitialLandingPage() {
  return readOrCreate(landingKey, () => window.location.pathname || "/");
}

function getInitialUtm() {
  return readOrCreate(utmKey, () => {
    const params = new URLSearchParams(window.location.search);
    return (
      Array.from(params.entries())
        .filter(([name]) => name.startsWith("utm_"))
        .map(([name, value]) => `${name}=${value}`)
        .join("&") || "none"
    );
  });
}

export function buildAttributedWhatsappHref(topic: string, cta: string, extra?: string) {
  const currentPage = typeof window === "undefined" ? "" : window.location.pathname || "/";
  const initialLanding = getInitialLandingPage();
  const initialUtm = getInitialUtm();
  const sourceNote = [
    `button: ${cta}`,
    currentPage ? `current: ${currentPage}` : "",
    initialLanding ? `first visit: ${initialLanding}` : "",
    initialUtm && initialUtm !== "none" ? `source tag: ${initialUtm}` : "",
  ]
    .filter(Boolean)
    .join(" | ");
  const message = [
    "Hello Venus beautiful,",
    `I would like to receive details for ${topic}.`,
    extra || "Please send catalog, MOQ, samples, packaging, lead time, shipping, and quote information.",
    "How did you find us? Google / ChatGPT / Perplexity / Other:",
    sourceNote ? `[Request source: ${sourceNote}]` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

type WhatsappInquiryLinkProps = {
  topic: string;
  cta: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export function WhatsappInquiryLink({
  topic,
  cta,
  className,
  ariaLabel,
  children,
}: WhatsappInquiryLinkProps) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = buildAttributedWhatsappHref(topic, cta);
  }

  return (
    <a
      className={className}
      href={buildWhatsappHref(topic)}
      data-cta={cta}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
