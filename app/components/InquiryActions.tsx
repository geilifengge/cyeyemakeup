"use client";

import { FormEvent, MouseEvent, useState } from "react";
import { company } from "../site-data";

type InquiryActionsProps = {
  topic: string;
  primaryLabel: string;
  secondaryLabel: string;
};

function getInitialLandingPage() {
  if (typeof window === "undefined") return "";
  const key = "cy_initial_landing_page";
  const existing = window.localStorage.getItem(key);
  if (existing) return existing;
  const current = window.location.href;
  window.localStorage.setItem(key, current);
  return current;
}

function getInitialUtm() {
  if (typeof window === "undefined") return "";
  const key = "cy_initial_utm";
  const existing = window.localStorage.getItem(key);
  if (existing) return existing;
  const params = new URLSearchParams(window.location.search);
  const utm = Array.from(params.entries())
    .filter(([name]) => name.startsWith("utm_"))
    .map(([name, value]) => `${name}=${value}`)
    .join("&");
  window.localStorage.setItem(key, utm || "none");
  return utm || "none";
}

function buildMessage(topic: string, cta: string, extra?: string) {
  const currentPage = typeof window === "undefined" ? "" : window.location.href;
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

  return [
    "Hello Venus beautiful,",
    `I would like to receive details for ${topic}.`,
    extra || "Please send catalog, MOQ, sample, packaging, and quote information.",
    sourceNote ? `[Request page: ${sourceNote}]` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function whatsappUrl(message: string) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function InquiryActions({
  topic,
  primaryLabel,
  secondaryLabel,
}: InquiryActionsProps) {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [country, setCountry] = useState("");
  const [needs, setNeeds] = useState("");

  const primaryHref = `https://wa.me/${company.whatsappNumber}`;
  const secondaryHref = (() => {
    const subject = encodeURIComponent(`${secondaryLabel} - ${topic}`);
    const body = encodeURIComponent(
      [
        `Hello Venus beautiful,`,
        "",
        `I am interested in ${topic}.`,
        "Product:",
        "Quantity:",
        "Country:",
        "Private label / wholesale / OEM needs:",
      ].join("\n"),
    );
    return `mailto:${company.email}?subject=${subject}&body=${body}`;
  })();

  function onPrimaryClick(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = whatsappUrl(buildMessage(topic, primaryLabel));
  }

  function onEmailClick(event: MouseEvent<HTMLAnchorElement>) {
    const subject = encodeURIComponent(`${secondaryLabel} - ${topic}`);
    const body = encodeURIComponent(
      [
        "Hello Venus beautiful,",
        "",
        `I am interested in ${topic}.`,
        "Product:",
        "Quantity:",
        "Country:",
        "Private label / wholesale / OEM needs:",
        "",
        `I reached you from ${window.location.href}`,
      ].join("\n"),
    );
    event.currentTarget.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const extra = [
      product ? `Product: ${product}` : "",
      quantity ? `Quantity: ${quantity}` : "",
      country ? `Country: ${country}` : "",
      needs ? `Needs: ${needs}` : "",
    ]
      .filter(Boolean)
      .join("; ");
    window.open(whatsappUrl(buildMessage(topic, "Form inquiry", extra)), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="inquiry-panel" id="inquiry">
      <div className="inquiry-copy">
        <p className="panel-kicker">Request product details</p>
        <h2>Send requirements for catalog, MOQ, samples, or quote.</h2>
        <p>
          Share product type, quantity, country, packaging, and service needs so the sales team can reply with practical
          catalog and quotation details.
        </p>
        <div className="cta-row">
          <a className="button primary" href={primaryHref} data-cta={primaryLabel} onClick={onPrimaryClick}>
            {primaryLabel}
          </a>
          <a className="button secondary" href={secondaryHref} data-cta={secondaryLabel} onClick={onEmailClick}>
            {secondaryLabel}
          </a>
        </div>
      </div>
      <form className="mini-form" onSubmit={onSubmit}>
        <label>
          Product
          <input
            value={product}
            onChange={(event) => setProduct(event.target.value)}
            placeholder="Lash serum, mascara, eyeliner, or packaging"
          />
        </label>
        <label>
          Quantity
          <input
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            placeholder="Example: 100 pcs, 500 pcs"
          />
        </label>
        <label>
          Country
          <input
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            placeholder="Target market or shipping country"
          />
        </label>
        <label className="wide">
          Custom needs
          <textarea
            value={needs}
            onChange={(event) => setNeeds(event.target.value)}
            placeholder="Logo, tube color, box, formula direction, OEM, wholesale, timeline"
          />
        </label>
        <button className="button primary wide" type="submit">
          Send form details by WhatsApp
        </button>
      </form>
    </div>
  );
}
