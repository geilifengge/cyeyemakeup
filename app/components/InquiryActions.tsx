"use client";

import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { buildEmailHref, buildWhatsappHref } from "../site-data";
import { buildAttributedWhatsappHref } from "./WhatsappInquiryLink";

type InquiryActionsProps = {
  topic: string;
  primaryLabel: string;
  secondaryLabel: string;
};

// Enable only after crystal, Fengge, and Aaron have confirmed receipt of a real test submission.
const formSubmitEnabled = false;
const formSubmitEndpoint = "https://formsubmit.co/crystal@cyeyemakeup.com";

export function InquiryActions({
  topic,
  primaryLabel,
  secondaryLabel,
}: InquiryActionsProps) {
  const [product, setProduct] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [country, setCountry] = useState("");
  const [needs, setNeeds] = useState("");
  const [discoverySource, setDiscoverySource] = useState("");
  const [pageSource, setPageSource] = useState("");

  useEffect(() => {
    const updateSource = () => {
      const params = new URLSearchParams(window.location.search);
      const utm = Array.from(params.entries())
        .filter(([name]) => name.startsWith("utm_"))
        .map(([name, value]) => `${name}=${value}`)
        .join("&");
      setPageSource(`${window.location.pathname || "/"}${utm ? ` | ${utm}` : ""}`);
    };
    const selectProduct = (event: Event) => {
      const value = (event as CustomEvent<{ value?: string }>).detail?.value;
      if (value) setProduct(value);
    };
    updateSource();
    window.addEventListener("catalog-product-selected", selectProduct);
    return () => window.removeEventListener("catalog-product-selected", selectProduct);
  }, []);

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
    if (formSubmitEnabled) return;
    event.preventDefault();
    const extra = [
      customerEmail ? `Email: ${customerEmail}` : "",
      product ? `Product: ${product}` : "",
      quantity ? `Quantity: ${quantity}` : "",
      country ? `Country: ${country}` : "",
      needs ? `Needs: ${needs}` : "",
      discoverySource ? `Found us via: ${discoverySource}` : "",
      pageSource ? `Page/source: ${pageSource}` : "",
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
      <form
        className="mini-form"
        action={formSubmitEnabled ? formSubmitEndpoint : undefined}
        method={formSubmitEnabled ? "POST" : undefined}
        onSubmit={onSubmit}
      >
        <input type="hidden" name="_cc" value="Fengge@cyeyemakeup.com,aaron@cyeyemakeup.com" />
        <input type="hidden" name="_subject" value={`Website inquiry — ${topic}`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://cyeyemakeup.com/thank-you" />
        <input type="hidden" name="page_source" value={pageSource} />
        <input className="form-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        <label>
          Your email
          <input
            type="email"
            name="email"
            value={customerEmail}
            onChange={(event) => setCustomerEmail(event.target.value)}
            placeholder="you@company.com"
            required
          />
        </label>
        <label>
          Product
          <input
            name="product"
            value={product}
            onChange={(event) => setProduct(event.target.value)}
            placeholder="Lash serum, mascara, eyeliner, or packaging"
            required
          />
        </label>
        <label>
          Quantity
          <input
            name="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            placeholder="Example: 100 pcs, 500 pcs"
          />
        </label>
        <label>
          Country
          <input
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            placeholder="Target market or shipping country"
          />
        </label>
        <label className="wide">
          Custom needs
          <textarea
            name="requirements"
            value={needs}
            onChange={(event) => setNeeds(event.target.value)}
            placeholder="Logo, tube color, box, formula direction, OEM, wholesale, timeline"
            required
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
          {formSubmitEnabled ? "Send inquiry by email" : "Send form details by WhatsApp"}
        </button>
        <p className="form-route-note wide">
          Prefer email? Write to <a href="mailto:crystal@cyeyemakeup.com">crystal@cyeyemakeup.com</a>, <a href="mailto:Fengge@cyeyemakeup.com">Fengge@cyeyemakeup.com</a>, or <a href="mailto:aaron@cyeyemakeup.com">aaron@cyeyemakeup.com</a>.
        </p>
      </form>
    </div>
  );
}
