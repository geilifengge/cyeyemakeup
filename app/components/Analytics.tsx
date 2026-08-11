"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Inquiry event tracking on top of the official static GA4 snippet
 * (gtag.js) that lives in each layout <head>.
 * Events: whatsapp_inquiry / form_inquiry / email_inquiry.
 * Params: cta_label, page_path, initial_landing_page.
 */
export function Analytics() {
  useEffect(() => {
    const initialLanding = (() => {
      try {
        return window.localStorage.getItem("cy_initial_landing_page") || window.location.href;
      } catch {
        return window.location.href;
      }
    })();

    const baseParams = () => ({
      page_path: window.location.pathname,
      initial_landing_page: initialLanding,
    });

    const track = (name: string, label: string) => {
      if (typeof window.gtag === "function") {
        window.gtag("event", name, { cta_label: label, ...baseParams() });
      }
    };

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const label = anchor.getAttribute("data-cta") || anchor.textContent?.trim() || "";
      if (href.includes("wa.me")) track("whatsapp_inquiry", label || "whatsapp");
      else if (href.startsWith("mailto:")) track("email_inquiry", label || "email");
    };

    const onSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (!form.classList.contains("mini-form")) return;
      track("form_inquiry", "form_submit");
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return null;
}
