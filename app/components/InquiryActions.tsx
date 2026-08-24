"use client";

import { FormEvent, MouseEvent, useState } from "react";
import { buildEmailHref, buildWhatsappHref } from "../site-data";
import { buildAttributedWhatsappHref } from "./WhatsappInquiryLink";

type InquiryActionsProps = {
  topic: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export function InquiryActions({
  topic,
  primaryLabel,
  secondaryLabel,
}: InquiryActionsProps) {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [country, setCountry] = useState("");
  const [needs, setNeeds] = useState("");
  const [discoverySource, setDiscoverySource] = useState("");

  const primaryHref = buildWhatsappHref(topic);
  const secondaryHref = (() => {
    const subject = `${secondaryLabel} - ${topic}`;
    const body = [
      `Hello Venus beautiful,`,
      "",
      `I am interested in ${topic}.`,
      "Product:",
      "Quantity:",
      "Country:",
      "Private label / wholesale / OEM needs:",
      "How did you find us? Google / ChatGPT / Perplexity / Other:",
    ].join("\n");
    return buildEmailHref(subject, body);
  })();

  function onPrimaryClick(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = buildAttributedWhatsappHref(topic, primaryLabel);
  }

  function onEmailClick(event: MouseEvent<HTMLAnchorElement>) {
    const subject = `${secondaryLabel} - ${topic}`;
    const body = [
      "Hello Venus beautiful,",
      "",
      `I am interested in ${topic}.`,
      "Product:",
      "Quantity:",
      "Country:",
      "Private label / wholesale / OEM needs:",
      "How did you find us? Google / ChatGPT / Perplexity / Other:",
      "",
      `I reached you from ${window.location.pathname || "/"}`,
    ].join("\n");
    event.currentTarget.href = buildEmailHref(subject, body);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const extra = [
      product ? `Product: ${product}` : "",
      quantity ? `Quantity: ${quantity}` : "",
      country ? `Country: ${country}` : "",
      needs ? `Needs: ${needs}` : "",
      discoverySource ? `Found us via: ${discoverySource}` : "",
    ]
      .filter(Boolean)
      .join("; ");
    window.open(buildAttributedWhatsappHref(topic, "Form inquiry", extra), "_blank", "noopener,noreferrer");
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
        <label className="wide">
          How did you find us? (optional)
          <select
            name="discoverySource"
            value={discoverySource}
            onChange={(event) => setDiscoverySource(event.target.value)}
          >
            <option value="">Select a source</option>
            <option value="Google">Google</option>
            <option value="ChatGPT">ChatGPT</option>
            <option value="Perplexity">Perplexity</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button className="button primary wide" type="submit">
          Send form details by WhatsApp
        </button>
      </form>
    </div>
  );
}
