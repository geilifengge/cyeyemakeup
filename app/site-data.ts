export const baseUrl = "https://cyeyemakeup.com";

export const company = {
  brand: "Venus beautiful",
  legalName: "Chuangyuan Cosmetics Manufacturing (Shenzhen) Co., Ltd.",
  shortName: "Chuangyuan",
  whatsappDisplay: "+86 181 4449 0882",
  whatsappNumber: "8618144490882",
  email: "sunnyzhou16888@gmail.com",
  location: "Shenzhen, Guangdong, China",
  address:
    "Phase 2 2F-030, South China International Leather and Leather Raw and Auxiliary Materials Logistics Zone, Pinghu Street, Longgang District, Shenzhen, Guangdong, China",
};

export const navItems = [
  { href: "/private-label-lash-serum", label: "Lash Serum" },
  { href: "/private-label-mascara-manufacturer", label: "Mascara" },
  { href: "/wholesale-lash-serum", label: "Wholesale" },
  { href: "/custom-lash-serum-packaging", label: "Packaging" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function buildWhatsappHref(topic: string) {
  const message = [
    "Hello Venus beautiful,",
    `I would like to request details for ${topic}.`,
    "Please send catalog, MOQ, sample, packaging, and quote information.",
  ].join("\n");

  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type SitePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  summary: string;
  heroImage?: string;
  heroAlt?: string;
  primaryCta: string;
  secondaryCta: string;
  badges: string[];
  sections: {
    title: string;
    body: string;
    bullets: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  related: string[];
};

export const pages: Record<string, SitePage> = {
  "private-label-lash-serum": {
    slug: "private-label-lash-serum",
    title: "Private Label Lash Serum Manufacturer | Venus beautiful",
    description:
      "Private label lash serum supplier for beauty brands, wholesalers, and ecommerce sellers. Service details cover formula direction, packaging, logo, MOQ, samples, and OEM options.",
    h1: "Private label lash serum for beauty brands and wholesale buyers",
    eyebrow: "Lash serum private label",
    summary:
      "Venus beautiful supplies cosmetic lash serum with private label packaging, tube color, logo, and ingredient direction options. Share your quantity, market, and packaging requirements to receive quotation details.",
    heroImage: "/images/lash-serum-hero.jpeg",
    heroAlt: "Blue lash serum tube and brush for private label cosmetic orders",
    primaryCta: "Ask for private label options",
    secondaryCta: "Request lash serum catalog",
    badges: ["Private label", "Light customization", "OEM orders", "Wholesale supply"],
    sections: [
      {
        title: "What buyers can customize",
        body:
          "For lash serum orders, buyers usually need a ready product with brand adjustments or a more detailed OEM service option. Customization can cover tube appearance, logo, outer box, color direction, and ingredient preferences, depending on order size.",
        bullets: [
          "Logo or graphic design on tube and box",
          "Tube color and packaging style options",
          "Ingredient direction such as vegan, herbal, or peptide-positioned formulas when available",
          "Sample and quotation check before bulk order",
        ],
      },
      {
        title: "Suitable orders",
        body:
          "Suitable for brand owners, beauty wholesalers, salons, and online sellers sourcing lash serum supply, private label packaging, or OEM support.",
        bullets: [
          "New beauty brands testing a lash serum line",
          "Distributors looking for wholesale lash care products",
          "Sellers comparing low MOQ private label options",
          "Buyers preparing packaging or catalog requests",
        ],
      },
      {
        title: "Information to send first",
        body:
          "The fastest quotes come from clear order details. If your product plan is still early, send the available information and our sales team will confirm the next items needed.",
        bullets: [
          "Target market and sales channel",
          "Expected order quantity or sample quantity",
          "Packaging photos, tube color, or logo file if available",
          "Required claims, ingredient preferences, and compliance questions",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you make a lash serum with my brand name?",
        answer:
          "Yes, private label service can include logo, packaging, tube appearance, and brand presentation. Final options depend on quantity, packaging choice, and available formula direction.",
      },
      {
        question: "Can I use lash growth serum wording?",
        answer:
          "Many buyers use that phrase when searching, but public packaging and claims should match the documents and rules for your market. We recommend cosmetic appearance wording unless stronger proof is available.",
      },
      {
        question: "What is the best first step?",
        answer:
          "Send your country, order quantity, preferred packaging style, and whether you need ready wholesale goods, light customization, or OEM support.",
      },
    ],
    related: ["lash-serum-manufacturer", "wholesale-lash-serum", "custom-lash-serum-packaging"],
  },
  "lash-serum-manufacturer": {
    slug: "lash-serum-manufacturer",
    title: "Lash Serum Manufacturer for Wholesale and OEM Orders | Venus beautiful",
    description:
      "Shenzhen lash serum supplier for manufacturing, packaging, samples, private label, and OEM orders.",
    h1: "Lash serum manufacturer for wholesale, private label, and OEM orders",
    eyebrow: "Manufacturer and supplier",
    summary:
      "Chuangyuan supplies lash serum buyers with product direction, MOQ, sample planning, packaging, lead time, and shipping requirement support.",
    heroImage: "/images/lash-serum-packaging.jpg",
    heroAlt: "Packaged lash serum products prepared for beauty brand supply",
    primaryCta: "Send lash serum requirements",
    secondaryCta: "Ask about samples",
    badges: ["Shenzhen supplier", "3 ml item", "Packaging support", "Sample support"],
    sections: [
      {
        title: "Supply scope",
        body:
          "The current lash serum item is a cosmetic liquid serum in tube packaging. Supply options can cover ready stock, light customization, and OEM order requirements.",
        bullets: [
          "Capacity around 3 ml",
          "Private label and custom brand name options",
          "Logo, packaging, tube, color, and ingredient direction options",
          "Sample, quotation, and lead time confirmation by order",
        ],
      },
      {
        title: "Order support",
        body:
          "We support buyers that need direct lash serum supply, private label support, sample planning, packaging details, and quotation information.",
        bullets: [
          "What can be customized",
          "What information is needed for a quote",
          "How samples and MOQ should be discussed",
          "Which claims need confirmation before public use",
        ],
      },
      {
        title: "Label and claim support",
        body:
          "For lash serum packaging, we can review ingredient details, label text, claim direction, and market requirements with you before bulk production.",
        bullets: [
          "Review cosmetic appearance wording and product documents",
          "Confirm ingredient and label requirements",
          "Check tube, box, and website wording before printing",
          "Prepare packaging text based on the agreed product direction",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you support OEM lash serum?",
        answer:
          "OEM service is available, especially around packaging, branding, tube choice, color direction, and ingredient preferences. Deeper formula work depends on the order requirements.",
      },
      {
        question: "Where are you located?",
        answer:
          "The company is based in Shenzhen, Guangdong, China, with registered business information under Chuangyuan Cosmetics Manufacturing (Shenzhen) Co., Ltd.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Send your quantity, target market, packaging style, logo needs, and whether you need ready wholesale supply, light customization, or OEM support.",
      },
    ],
    related: ["private-label-lash-serum", "lash-serum-moq-samples-lead-time", "contact"],
  },
  "private-label-mascara-manufacturer": {
    slug: "private-label-mascara-manufacturer",
    title: "Private Label Mascara Manufacturer | Venus beautiful",
    description:
      "Private label mascara supplier for beauty brands and wholesale buyers. Service details cover mascara type, tube, brush, color, packaging, MOQ, and OEM needs.",
    h1: "Private label mascara manufacturer for wholesale and OEM orders",
    eyebrow: "Mascara private label",
    summary:
      "Venus beautiful supplies mascara for eye makeup buyers that need wholesale orders, private label packaging, and OEM support. Start with your mascara type, quantity, packaging idea, and target market.",
    heroImage: "/images/lash-serum-detail-2.jpeg",
    heroAlt: "Eye makeup product packaging for private label mascara and lash serum buyers",
    primaryCta: "Ask for mascara options",
    secondaryCta: "Get eye makeup catalog",
    badges: ["Mascara supply", "Private label", "Wholesale orders", "Packaging options"],
    sections: [
      {
        title: "Mascara project options",
        body:
          "Mascara buyers usually compare brush style, tube appearance, waterproof or washable direction, color, and packaging. We can help clarify which options fit your order size.",
        bullets: [
          "Private label mascara with brand packaging",
          "Wholesale mascara order support",
          "Tube, brush, and box specification confirmation",
          "Color and product direction questions",
        ],
      },
      {
        title: "Suitable orders",
        body:
          "For beauty brands, wholesalers, importers, and ecommerce sellers sourcing mascara supply, private label packaging, or OEM production.",
        bullets: [
          "New brands launching eye makeup products",
          "Wholesalers adding mascara to an eye makeup catalog",
          "Sellers comparing bulk or private label options",
          "Teams that need tube and box customization",
        ],
      },
      {
        title: "What to prepare",
        body:
          "Mascara quotes depend heavily on packaging and product direction. Product photos, tube samples, or a short order request help speed up quotation.",
        bullets: [
          "Mascara type such as waterproof, lengthening, or volumizing",
          "Tube color, cap style, and brush specification",
          "Expected quantity and launch timing",
          "Logo, label, and outer box needs",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I order mascara with my own logo?",
        answer:
          "Private label service can include logo, tube appearance, outer box, and product direction. Final options depend on order quantity and available packaging choices.",
      },
      {
        question: "Can you supply wholesale mascara?",
        answer:
          "Yes, wholesale mascara supply is supported. Send quantity, product type, and target country so we can prepare a more practical quote.",
      },
      {
        question: "Should mascara and lash serum be on one order?",
        answer:
          "They can be discussed together as an eye makeup or lash care line, especially if you need matching packaging or a catalog-style quote.",
      },
    ],
    related: ["wholesale-mascara", "private-label-lash-serum", "contact"],
  },
  "wholesale-lash-serum": {
    slug: "wholesale-lash-serum",
    title: "Wholesale Lash Serum Supplier | Venus beautiful",
    description:
      "Wholesale lash serum supplier for beauty distributors and ecommerce sellers. Request MOQ, samples, packaging, private label, and quote requirements.",
    h1: "Wholesale lash serum supply for distributors and beauty sellers",
    eyebrow: "Wholesale lash serum",
    summary:
      "If you need lash serum for resale, start with quantity, market, packaging needs, and whether you want ready product or light private label customization.",
    heroImage: "/images/lash-serum-detail-1.jpeg",
    heroAlt: "Lash serum product and packaging for wholesale cosmetic orders",
    primaryCta: "Get wholesale quote",
    secondaryCta: "Ask MOQ and samples",
    badges: ["Wholesale", "Samples", "Packaging", "Resale supply"],
    sections: [
      {
        title: "Wholesale order support",
        body:
          "Wholesale buyers often need fast clarity on MOQ, sample availability, packaging, and shipment timing. Our first quotation reply focuses on those items.",
        bullets: [
          "Order quantity and carton planning",
          "Ready product versus light branding needs",
          "Sample quantity and sample packaging",
          "Target country and delivery expectations",
        ],
      },
      {
        title: "When to choose wholesale",
        body:
          "Wholesale is usually better than OEM when you need to test demand, build a catalog quickly, or place smaller repeated orders.",
        bullets: [
          "You already have a buyer or resale channel",
          "You need a clear order option before custom formula work",
          "You want packaging support without a complex development process",
          "You need clear MOQ and lead time first",
        ],
      },
      {
        title: "Quote information",
        body:
          "A useful quote needs more than a product name. Please include the business context so the response can match your buying plan.",
        bullets: [
          "Quantity range",
          "Target country",
          "Private label or no private label",
          "Packaging requirements and launch timing",
        ],
      },
    ],
    faqs: [
      {
        question: "Is wholesale lash serum different from private label?",
        answer:
          "Wholesale can be ready product or lightly customized product. Private label focuses more on your brand presentation, packaging, and logo.",
      },
      {
        question: "Can I ask for low MOQ?",
        answer:
          "Yes. Share your expected order size and customization level. Low MOQ depends on packaging, logo, and product option availability.",
      },
      {
        question: "Do you provide catalog information?",
        answer:
          "Yes. Use WhatsApp or the inquiry form to request the current eye makeup and lash care catalog.",
      },
    ],
    related: ["private-label-lash-serum", "lash-serum-moq-samples-lead-time", "contact"],
  },
  "wholesale-mascara": {
    slug: "wholesale-mascara",
    title: "Wholesale Mascara Supplier for Beauty Buyers | Venus beautiful",
    description:
      "Wholesale mascara supplier for distributors, brands, and ecommerce sellers. Request bulk mascara, packaging, brush style, MOQ, and private label details.",
    h1: "Wholesale mascara supply for beauty brands and distributors",
    eyebrow: "Wholesale mascara",
    summary:
      "Use this service page if you are comparing wholesale mascara, bulk mascara, or mascara with light private label packaging. Send your product type, quantity, and packaging direction to start.",
    heroImage: "/images/lash-serum-detail-3.jpeg",
    heroAlt: "Eye makeup packaging for wholesale mascara supplier inquiries",
    primaryCta: "Get mascara quote",
    secondaryCta: "Request product list",
    badges: ["Bulk mascara", "Wholesale", "Private label", "Eye makeup"],
    sections: [
      {
        title: "Wholesale mascara buying details",
        body:
          "Mascara orders depend on type, brush, tube, packaging, and market requirements. Clear product specifications help us prepare a faster quote.",
        bullets: [
          "Waterproof, lengthening, volumizing, or natural-looking product direction",
          "Tube and brush specification confirmation",
          "Logo and outer box needs",
          "Bulk quantity and sample planning",
        ],
      },
      {
        title: "Brand and wholesale order focus",
        body:
          "Venus beautiful supplies mascara for your own brand, wholesale catalog, or eye makeup product line.",
        bullets: [
          "We focus on your own brand or wholesale supply",
          "Tube, brush, logo, and outer box support",
          "Product claims and packaging text can be reviewed before printing",
          "The quote can match your target market and order plan",
        ],
      },
      {
        title: "Next step",
        body:
          "Send a short order request and any packaging photos or specifications. We will reply with the information needed to compare options.",
        bullets: [
          "Product type",
          "Quantity range",
          "Tube or brush specification",
          "Private label, wholesale, or OEM order type",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you supply bulk mascara?",
        answer:
          "Yes, bulk mascara supply is supported. The best quote starts with quantity, tube style, and product direction.",
      },
      {
        question: "Can mascara packaging be customized?",
        answer:
          "Packaging options can include tube color, logo, label, and outer box. Available options depend on quantity and packaging stock.",
      },
      {
        question: "Can I combine mascara and lash serum in one inquiry?",
        answer:
          "Yes. If you are building an eye makeup line, send both products in one message and mention whether you need matching packaging.",
      },
    ],
    related: ["private-label-mascara-manufacturer", "custom-lash-serum-packaging", "contact"],
  },
  "custom-lash-serum-packaging": {
    slug: "custom-lash-serum-packaging",
    title: "Custom Lash Serum Packaging and Tube Options | Venus beautiful",
    description:
      "Custom lash serum packaging support for tube color, logo, box, ingredient direction, and private label presentation for beauty brand orders.",
    h1: "Custom lash serum packaging for private label beauty brands",
    eyebrow: "Packaging and light customization",
    summary:
      "Packaging often decides whether a lash serum product feels ready for retail. Share your tube style, color, logo, and box requirements so we can confirm available options.",
    heroImage: "/images/lash-serum-detail-4.jpeg",
    heroAlt: "Lash serum packaging and tube options for private label buyers",
    primaryCta: "Ask packaging options",
    secondaryCta: "Send logo and box requirements",
    badges: ["Tube color", "Logo", "Outer box", "Ingredient direction"],
    sections: [
      {
        title: "Custom packaging scope",
        body:
          "The current private label service can include logo, tube, cap, and outer box changes before deeper formula development. This is useful for buyers testing a new brand line.",
        bullets: [
          "Logo or graphic design on product packaging",
          "Tube color and cap options",
          "Outer box sample and layout confirmation",
          "Ingredient direction and label wording questions",
        ],
      },
      {
        title: "What affects MOQ",
        body:
          "Customization level affects MOQ. Simple logo or packaging choices are usually easier than unique molds or deep formula changes.",
        bullets: [
          "Stock packaging versus custom packaging",
          "Printing method and color count",
          "Formula and ingredient requirements",
          "Sample confirmation before bulk order",
        ],
      },
      {
        title: "Packaging requirements",
        body:
          "A complete packaging request does not need to be perfect. A few product photos and a quantity range are enough for an initial quotation.",
        bullets: [
          "Brand logo file if available",
          "Tube and box sample images",
          "Target retail price or channel",
          "Expected order quantity and timeline",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I customize the tube and box?",
        answer:
          "Yes, tube and box customization is part of the private label service. Available details depend on quantity and packaging option availability.",
      },
      {
        question: "Can I request vegan or herbal product direction?",
        answer:
          "You can request that direction. Final wording should match the actual formula documents and the rules of your sales market.",
      },
      {
        question: "Can I send a product or packaging photo?",
        answer:
          "Yes. A product or packaging photo is one of the best ways to speed up quotation.",
      },
    ],
    related: ["private-label-lash-serum", "lash-serum-moq-samples-lead-time", "contact"],
  },
  "lash-serum-moq-samples-lead-time": {
    slug: "lash-serum-moq-samples-lead-time",
    title: "Lash Serum MOQ, Samples, and Lead Time | Venus beautiful",
    description:
      "Buyer guide for lash serum MOQ, samples, quotation details, lead time, packaging, and private label information needed before ordering.",
    h1: "Lash serum MOQ, samples, and lead time questions",
    eyebrow: "Buying questions",
    summary:
      "Before ordering lash serum, buyers usually need to clarify MOQ, sample availability, packaging, quotation details, and timeline. This guide explains what to prepare.",
    heroImage: "/images/lash-serum-detail-1.jpeg",
    heroAlt: "Lash serum samples and packaging for buyer quotation",
    primaryCta: "Ask MOQ and samples",
    secondaryCta: "Send quote details",
    badges: ["MOQ", "Samples", "Lead time", "Quotation"],
    sections: [
      {
        title: "MOQ depends on customization",
        body:
          "A ready product order, a private label package, and a deeper OEM order can have different MOQ requirements. The first step is to identify which service option you need.",
        bullets: [
          "Ready wholesale product",
          "Logo and packaging customization",
          "Tube, color, and box customization",
          "Formula or ingredient direction requirements",
        ],
      },
      {
        title: "Sample questions",
        body:
          "Samples help buyers check product texture, packaging feel, and brand presentation before a larger order.",
        bullets: [
          "Ask whether sample packaging matches bulk packaging",
          "Confirm sample quantity and shipping destination",
          "Check label wording before bulk printing",
          "Share feedback clearly after sample check",
        ],
      },
      {
        title: "Lead time",
        body:
          "A sample lead time from current product information is about 15 days, but final timing depends on order quantity, packaging, and customization details.",
        bullets: [
          "Ready stock can be faster when available",
          "Printed packaging adds time",
          "Special packaging or formula requests need confirmation",
          "Shipping method affects final arrival time",
        ],
      },
    ],
    faqs: [
      {
        question: "What MOQ should I expect?",
        answer:
          "One current product shows 50 pcs for ordering and about 100 pcs for some customization options. Please confirm the exact MOQ for your order before planning a launch.",
      },
      {
        question: "What should I send for a quote?",
        answer:
          "Send product, quantity, country, packaging requirement, logo needs, target timeline, and whether you need wholesale, private label, or OEM.",
      },
      {
        question: "Is 15 days guaranteed?",
        answer:
          "No. About 15 days is sample timing from current product information. Final lead time must be confirmed by order details.",
      },
    ],
    related: ["private-label-lash-serum", "custom-lash-serum-packaging", "contact"],
  },
  faq: {
    slug: "faq",
    title: "FAQ for Lash Serum and Mascara Wholesale Buyers | Venus beautiful",
    description:
      "Frequently asked questions for lash serum, mascara, private label, wholesale, light customization, OEM, MOQ, samples, and packaging.",
    h1: "FAQ for lash serum and mascara buyers",
    eyebrow: "Buyer FAQ",
    summary:
      "These answers help beauty buyers prepare a clear inquiry for lash serum, mascara, private label packaging, wholesale supply, or OEM orders.",
    primaryCta: "Ask a question on WhatsApp",
    secondaryCta: "Send inquiry details",
    badges: ["Lash serum", "Mascara", "Private label", "Wholesale"],
    sections: [
      {
        title: "Fastest way to get useful answers",
        body:
          "A clear inquiry helps us avoid vague replies. Share the product, quantity, country, and customization needs at the start.",
        bullets: [
          "Product: lash serum, mascara, or both",
          "Quantity range",
          "Private label, wholesale, or OEM order type",
          "Packaging requirements and launch timing",
        ],
      },
      {
        title: "Label and packaging wording",
        body:
          "For eye-area cosmetic products, we can review ingredient details, claim direction, label wording, and packaging text before production.",
        bullets: [
          "Confirm ingredient and label requirements",
          "Match public claims with product documents",
          "Use suitable cosmetic appearance wording",
          "Check packaging text before printing",
        ],
      },
    ],
    faqs: [
      {
        question: "What products are the main focus?",
        answer:
          "The English site focuses first on lash serum and mascara, with private label, wholesale, light customization, and OEM orders.",
      },
      {
        question: "Do you offer private label?",
        answer:
          "Yes. Private label service can include logo, tube appearance, packaging, box design, and product direction.",
      },
      {
        question: "Can I request OEM?",
        answer:
          "Yes. OEM orders can be evaluated after you share target product, order size, packaging requirements, and market requirements.",
      },
      {
        question: "Can you keep my inquiry details clear?",
        answer:
          "Yes. Use the form or WhatsApp button and include product, quantity, country, and customization needs so the first reply can stay focused.",
      },
    ],
    related: ["private-label-lash-serum", "private-label-mascara-manufacturer", "contact"],
  },
  about: {
    slug: "about",
    title: "About Chuangyuan and Venus beautiful | Eye Makeup Supplier",
    description:
      "Learn about Chuangyuan Cosmetics Manufacturing (Shenzhen) Co., Ltd. and Venus beautiful, a Shenzhen supplier for lash serum, mascara, and eye makeup private label orders.",
    h1: "About Chuangyuan and Venus beautiful",
    eyebrow: "Company profile",
    summary:
      "Venus beautiful is the export brand for Chuangyuan Cosmetics Manufacturing (Shenzhen) Co., Ltd., focused first on lash serum, mascara, wholesale supply, light customization, and OEM orders.",
    heroImage: "/images/business-license-landscape.jpg",
    heroAlt: "Business license for Chuangyuan Cosmetics Manufacturing Shenzhen",
    primaryCta: "Contact Venus beautiful",
    secondaryCta: "Request company details",
    badges: ["Shenzhen, China", "Beauty supply", "Eye makeup", "Import and export"],
    sections: [
      {
        title: "Company information",
        body:
          "Chuangyuan Cosmetics Manufacturing (Shenzhen) Co., Ltd. is registered in Shenzhen, Guangdong, China. The business scope includes cosmetics, personal care products, hair accessories, daily chemical products, packaging-related goods, and import/export activity.",
        bullets: [
          "Registered in 2025",
          "Located in Longgang District, Shenzhen",
          "Export brand: Venus beautiful",
          "Main site focus: lash serum and mascara",
        ],
      },
      {
        title: "How we want buyers to use this site",
        body:
          "This website introduces our B2B product supply and service options. It helps buyers prepare the right order details for supplier quotation.",
        bullets: [
          "Request catalog information",
          "Ask about MOQ and samples",
          "Request private label packaging details",
          "Prepare wholesale or OEM order requirements",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Venus beautiful the company name?",
        answer:
          "Venus beautiful is the export brand. The registered company name is Chuangyuan Cosmetics Manufacturing (Shenzhen) Co., Ltd.",
      },
      {
        question: "Where is the company based?",
        answer:
          "The company is based in Shenzhen, Guangdong, China.",
      },
      {
        question: "What should buyers contact you for?",
        answer:
          "Buyers should contact us for lash serum, mascara, wholesale supply, light customization, private label packaging, and OEM orders.",
      },
    ],
    related: ["contact", "faq", "private-label-lash-serum"],
  },
  contact: {
    slug: "contact",
    title: "Contact Venus beautiful for Lash Serum and Mascara Orders",
    description:
      "Contact Venus beautiful by WhatsApp or email for lash serum, mascara, wholesale, private label, packaging, and OEM inquiries.",
    h1: "Contact Venus beautiful",
    eyebrow: "Inquiry entry",
    summary:
      "Send your product, quantity, country, customization needs, and launch timing. We will use those details to provide catalog, MOQ, samples, packaging, and quote options.",
    primaryCta: "Send WhatsApp inquiry",
    secondaryCta: "Email product requirements",
    badges: ["WhatsApp", "Email", "Catalog request", "Quote request"],
    sections: [
      {
        title: "What to include",
        body:
          "A complete first message helps us reply with useful next steps instead of generic questions.",
        bullets: [
          "Product: lash serum, mascara, or both",
          "Quantity and target country",
          "Wholesale, private label, light customization, or OEM",
          "Packaging requirements, logo needs, and timeline",
        ],
      },
      {
        title: "Contact details",
        body:
          "Use WhatsApp for the fastest response. Email is available when you need to send files, packaging photos, specifications, or a detailed order request.",
        bullets: [
          `WhatsApp: ${company.whatsappDisplay}`,
          `Email: ${company.email}`,
          `Location: ${company.location}`,
          "Company: Chuangyuan Cosmetics Manufacturing (Shenzhen) Co., Ltd.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I send images or packaging requirements?",
        answer:
          "Yes. Packaging and product photos are useful, especially for mascara tube, lash serum tube, box design, and brand presentation.",
      },
      {
        question: "Should I ask for catalog or quote first?",
        answer:
          "If you are exploring, ask for the catalog. If you already know quantity and packaging needs, ask for a quote.",
      },
      {
        question: "Can I contact you before registering my brand?",
        answer:
          "Yes. Many buyers contact suppliers while still shaping the product line. Share the current plan and we can confirm available next steps.",
      },
    ],
    related: ["private-label-lash-serum", "private-label-mascara-manufacturer", "faq"],
  },
};

export const allPageSlugs = Object.keys(pages);

export function getPage(slug: string) {
  return pages[slug];
}
