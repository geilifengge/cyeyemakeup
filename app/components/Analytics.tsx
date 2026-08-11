"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

type ConsentChoice = "granted" | "denied";

const consentKey = "cy_ga_consent_v2";
const landingKey = "cy_initial_landing_path";

const copy = {
  en: {
    title: "Analytics privacy",
    text: "With your permission, Google Analytics helps us understand which product pages lead to business inquiries. We never send form entries or URL query parameters.",
    accept: "Allow analytics",
    decline: "Decline",
    settings: "Analytics settings",
  },
  es: {
    title: "Privacidad de analítica",
    text: "Con tu permiso, Google Analytics nos ayuda a saber qué páginas generan consultas comerciales. Nunca enviamos formularios ni parámetros de la URL.",
    accept: "Permitir analítica",
    decline: "Rechazar",
    settings: "Configurar analítica",
  },
  fr: {
    title: "Confidentialité des statistiques",
    text: "Avec votre accord, Google Analytics nous aide à comprendre quelles pages génèrent des demandes commerciales. Aucun formulaire ni paramètre d’URL n’est envoyé.",
    accept: "Autoriser",
    decline: "Refuser",
    settings: "Réglages statistiques",
  },
  de: {
    title: "Datenschutz bei Analytics",
    text: "Mit Ihrer Zustimmung zeigt uns Google Analytics, welche Produktseiten zu Geschäftsanfragen führen. Formulardaten und URL-Parameter werden nie übertragen.",
    accept: "Analytics erlauben",
    decline: "Ablehnen",
    settings: "Analytics-Einstellungen",
  },
  pt: {
    title: "Privacidade de analytics",
    text: "Com sua permissão, o Google Analytics nos ajuda a entender quais páginas geram consultas comerciais. Nunca enviamos dados de formulário nem parâmetros da URL.",
    accept: "Permitir analytics",
    decline: "Recusar",
    settings: "Configurar analytics",
  },
  el: {
    title: "Απόρρητο στατιστικών",
    text: "Με τη συγκατάθεσή σας, το Google Analytics μας βοηθά να κατανοούμε ποιες σελίδες οδηγούν σε εμπορικά αιτήματα. Δεν αποστέλλουμε δεδομένα φόρμας ή παραμέτρους URL.",
    accept: "Αποδοχή analytics",
    decline: "Απόρριψη",
    settings: "Ρυθμίσεις analytics",
  },
} as const;

function languageCopy() {
  const language = document.documentElement.lang.toLowerCase().split("-")[0] as keyof typeof copy;
  return copy[language] || copy.en;
}

function safePath() {
  return window.location.pathname || "/";
}

function setGoogleConsent(choice: ConsentChoice) {
  window.gtag?.("consent", "update", {
    analytics_storage: choice,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function Analytics() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    let stored: ConsentChoice | null = null;
    try {
      const value = window.localStorage.getItem(consentKey);
      stored = value === "granted" || value === "denied" ? value : null;
    } catch {
      stored = null;
    }

    const stateFrame = window.requestAnimationFrame(() => {
      setChoice(stored);
      setShowPanel(stored === null);
    });
    if (stored) setGoogleConsent(stored);

    const initialLanding = (() => {
      if (stored !== "granted") return safePath();
      try {
        const existing = window.localStorage.getItem(landingKey);
        if (existing) return existing;
        const current = safePath();
        window.localStorage.setItem(landingKey, current);
        return current;
      } catch {
        return safePath();
      }
    })();

    const track = (name: string, label: string) => {
      let currentConsent: string | null = null;
      try {
        currentConsent = window.localStorage.getItem(consentKey);
      } catch {
        currentConsent = null;
      }
      if (currentConsent !== "granted" || typeof window.gtag !== "function") return;
      window.gtag("event", name, {
        cta_label: label.slice(0, 100),
        page_path: safePath(),
        initial_landing_page: initialLanding,
      });
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
      if (form.classList.contains("mini-form")) track("form_inquiry", "form_submit");
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      window.cancelAnimationFrame(stateFrame);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  const updateChoice = (next: ConsentChoice) => {
    try {
      window.localStorage.setItem(consentKey, next);
      if (next === "granted" && !window.localStorage.getItem(landingKey)) {
        window.localStorage.setItem(landingKey, safePath());
      }
    } catch {
      // Consent still applies for this page when persistent storage is unavailable.
    }
    setGoogleConsent(next);
    setChoice(next);
    setShowPanel(false);
  };

  const labels = typeof document === "undefined" ? copy.en : languageCopy();

  return (
    <>
      {showPanel ? (
        <aside className="analytics-consent" role="dialog" aria-label={labels.title}>
          <div>
            <strong>{labels.title}</strong>
            <p>{labels.text}</p>
            <a className="analytics-privacy-link" href="/privacy">Privacy details</a>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => updateChoice("denied")}>{labels.decline}</button>
            <button className="consent-primary" type="button" onClick={() => updateChoice("granted")}>{labels.accept}</button>
          </div>
        </aside>
      ) : (
        <button className="analytics-settings" type="button" onClick={() => setShowPanel(true)}>
          {labels.settings}{choice ? `: ${choice === "granted" ? "on" : "off"}` : ""}
        </button>
      )}
    </>
  );
}
