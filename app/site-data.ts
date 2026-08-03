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
  { href: "/private-label-eyeliner-manufacturer", label: "Eyeliner" },
  { href: "/wholesale-lash-serum", label: "Wholesale" },
  { href: "/cosmetic-packaging-manufacturer", label: "Packaging" },
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
      "Private label lash serum supplier for beauty brands, wholesalers, and ecommerce sellers. We provide formula direction, packaging, logo, MOQ, samples, and OEM support.",
    h1: "Private label lash serum for beauty brands and wholesale buyers",
    eyebrow: "Lash serum private label",
    summary:
      "Venus beautiful supplies cosmetic lash serum with private label packaging, tube color, logo, and ingredient direction options. Share your quantity, market, and packaging requirements to receive quotation details.",
    heroImage: "/images/lash-serum-white.jpg",
    heroAlt: "White Venus beautiful lash serum tube and box for private label cosmetic orders",
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
        title: "Who should order",
        body:
          "Suitable for brand owners, beauty wholesalers, salons, and online sellers looking for lash serum supply, private label packaging, or OEM support.",
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
    heroImage: "/images/lash-serum-white.jpg",
    heroAlt: "White Venus beautiful lash serum product and packaging for beauty brand supply",
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
      "Private label mascara manufacturer for beauty brands and wholesale buyers. Compare formula direction, brush, tube, packaging, MOQ, samples, and OEM order options.",
    h1: "Private label mascara manufacturer for wholesale and OEM orders",
    eyebrow: "Mascara private label",
    summary:
      "Venus beautiful supplies mascara for eye makeup buyers that need wholesale orders, private label packaging, and OEM support. Start with your mascara type, quantity, packaging idea, and target market.",
    heroImage: "/images/mascara-hero.jpg",
    heroAlt: "Venus beautiful mascara tube, brush, and box for private label orders",
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
        title: "Formula, brush, and packaging brief",
        body:
          "A useful mascara brief connects the desired wear result with the applicator and the retail presentation. This lets us check suitable product direction before discussing the final component and printing choices.",
        bullets: [
          "Waterproof, washable, lengthening, volumizing, or curling direction",
          "Brush shape, applicator feel, tube capacity, and cap preference",
          "Black, brown, or another requested color direction",
          "Logo, label, outer box, and target retail positioning",
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
      {
        title: "MOQ, samples, and production planning",
        body:
          "Private label mascara cost and timing change with the product direction, order quantity, packaging, printing, and destination. We confirm these details on a quote rather than publishing a price that may not match your chosen specification.",
        bullets: [
          "Ask for the MOQ for ready wholesale, logo printing, and custom packaging separately",
          "Confirm whether the sample uses the same tube, brush, and box as the planned bulk order",
          "Share the destination country early so label and shipping questions can be reviewed",
          "Confirm production and delivery timing after the packaging and quantity are agreed",
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
      {
        question: "What affects a private label mascara quote?",
        answer:
          "The main drivers are product direction, order quantity, selected tube and brush, logo or box printing, sample requirements, and shipping destination. Send those details for a quote matched to your project.",
      },
    ],
    related: ["wholesale-mascara", "private-label-eyeliner-manufacturer", "private-label-lash-serum", "private-label-eyeliner-cost-moq-samples"],
  },
  "private-label-eyeliner-manufacturer": {
    slug: "private-label-eyeliner-manufacturer",
    title: "Private Label Eyeliner Manufacturer and Supplier | Venus beautiful",
    description:
      "Private label liquid eyeliner supplier for beauty brands, wholesalers, and importers. Ask about black and brown colors, logo, packaging, MOQ, samples, and OEM orders.",
    h1: "Private label eyeliner manufacturer for beauty brands and wholesalers",
    eyebrow: "Liquid eyeliner private label",
    summary:
      "Venus beautiful supplies liquid eyeliner pens for wholesale, private label, and OEM orders. Share your color, quantity, logo, packaging, and target market so we can prepare product and quotation details.",
    heroImage: "/images/eyeliner-hero.jpg",
    heroAlt: "Liquid eyeliner pen, applicator tip, and box for private label supply",
    primaryCta: "Ask for eyeliner options",
    secondaryCta: "Request eye makeup catalog",
    badges: ["Liquid eyeliner", "Black and brown", "Private label", "OEM support"],
    sections: [
      {
        title: "Eyeliner product options",
        body:
          "The current eyeliner range includes pen-style liquid eyeliner with a fine applicator tip. Product and packaging options are confirmed by order quantity and target market.",
        bullets: [
          "Black and brown color options",
          "Fine-tip liquid eyeliner pen format",
          "Tube, cap, logo, and outer box options",
          "Wholesale, private label, and OEM order support",
        ],
      },
      {
        title: "Private label and packaging",
        body:
          "We can review your logo, tube finish, box layout, label wording, and color requirements before bulk production. Available printing and packaging choices depend on the selected component and quantity.",
        bullets: [
          "Logo printing and brand presentation",
          "Tube color and surface finish direction",
          "Outer box layout and packaging text",
          "Sample check before bulk printing",
        ],
      },
      {
        title: "Information for a quotation",
        body:
          "Send the available details even if the project is still being prepared. Our sales team will confirm any missing product, packaging, and shipping information.",
        bullets: [
          "Black, brown, or another requested color",
          "Expected quantity and target country",
          "Logo file or packaging reference image",
          "Required sample timing and launch plan",
        ],
      },
      {
        title: "Cost, MOQ, samples, and lead time",
        body:
          "Eyeliner quotations are built from the order scope rather than one public price. Quantity, product format, selected component, printing, outer box, sample work, and destination all affect the final commercial plan.",
        bullets: [
          "Ask for separate options for ready wholesale, logo printing, and private label packaging",
          "Confirm sample cost, freight, and whether the sample reflects the planned bulk presentation",
          "Share a required launch date so production and shipping timing can be checked together",
          "Use the eyeliner cost and MOQ guide when you are preparing a first quote request",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I order eyeliner with my own logo?",
        answer:
          "Yes. Private label options can include the logo, tube appearance, label, and outer box. Final options and MOQ depend on the selected packaging.",
      },
      {
        question: "Which eyeliner colors are available?",
        answer:
          "The current product images show black and brown options. Please confirm current color availability and quantity requirements when requesting a quote.",
      },
      {
        question: "Can I request an eyeliner sample?",
        answer:
          "Yes. Ready samples and customized samples can be discussed before bulk production. Sample cost, customization cost, freight, and timing are confirmed for each request.",
      },
      {
        question: "What should I send for an eyeliner quote?",
        answer:
          "Send your color, quantity, country, logo and packaging needs, and whether you need wholesale, private label, or OEM service.",
      },
      {
        question: "What affects private label eyeliner cost?",
        answer:
          "The main cost drivers are quantity, selected pen and packaging, logo or box printing, sample requirements, product direction, and shipping destination. We quote against the final requirement list so the result is practical for your order.",
      },
    ],
    related: ["wholesale-eyeliner", "private-label-mascara-manufacturer", "cosmetic-packaging-manufacturer", "private-label-eyeliner-cost-moq-samples"],
  },
  "wholesale-eyeliner": {
    slug: "wholesale-eyeliner",
    title: "Wholesale Eyeliner and Bulk Liquid Eyeliner Supplier | Venus beautiful",
    description:
      "Wholesale eyeliner supplier for distributors, beauty brands, and importers. Request bulk liquid eyeliner, colors, packaging, MOQ, samples, and private label options.",
    h1: "Wholesale eyeliner and bulk liquid eyeliner supply",
    eyebrow: "Wholesale eyeliner",
    summary:
      "Venus beautiful supplies pen-style liquid eyeliner for wholesale and bulk orders. Send your color, quantity, destination country, packaging needs, and whether you need ready products or private label service.",
    heroImage: "/images/eyeliner-colors.jpg",
    heroAlt: "Black and brown liquid eyeliner products for wholesale and bulk orders",
    primaryCta: "Get wholesale eyeliner quote",
    secondaryCta: "Request eyeliner catalog",
    badges: ["Wholesale eyeliner", "Bulk orders", "Black and brown", "Private label option"],
    sections: [
      {
        title: "Wholesale eyeliner options",
        body:
          "We supply liquid eyeliner for distributors, importers, beauty brands, and ecommerce sellers. Product availability, packaging, MOQ, and lead time are confirmed for each order.",
        bullets: [
          "Pen-style liquid eyeliner with a fine applicator tip",
          "Black and brown color options shown in the current range",
          "Ready wholesale products or private label packaging",
          "Single-product or combined eye makeup orders",
        ],
      },
      {
        title: "Bulk order information",
        body:
          "A practical bulk eyeliner quotation starts with the product format and quantity. Packaging and printing choices can change both MOQ and production timing.",
        bullets: [
          "Expected quantity for each color",
          "Destination country and preferred shipping method",
          "Ready packaging, logo printing, or custom outer box",
          "Required sample and delivery timing",
        ],
      },
      {
        title: "Wholesale or private label",
        body:
          "Choose wholesale supply when speed and product availability matter most. Choose private label when the order needs your logo, tube appearance, box layout, or coordinated brand presentation.",
        bullets: [
          "Wholesale for resale and catalog expansion",
          "Private label for your own brand presentation",
          "Sample review before customized bulk printing",
          "OEM requirements evaluated from your specifications",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I buy liquid eyeliner in bulk?",
        answer:
          "Yes. Send the required quantity, color, country, and packaging preference so we can confirm current product options, MOQ, samples, and quotation details.",
      },
      {
        question: "Can wholesale eyeliner include my logo?",
        answer:
          "Yes. Logo printing and outer box options can be added through private label service. Available methods and MOQ depend on the selected tube and packaging.",
      },
      {
        question: "Can I order black and brown eyeliner together?",
        answer:
          "The current range shows black and brown options. Mixed-color order details depend on current availability and the quantity required for each color.",
      },
      {
        question: "Can eyeliner ship with mascara or lash serum?",
        answer:
          "Yes. We can prepare a combined eye makeup quotation when you send the quantity and packaging requirements for each product.",
      },
    ],
    related: ["private-label-eyeliner-manufacturer", "wholesale-mascara", "contact"],
  },
  "cosmetic-packaging-manufacturer": {
    slug: "cosmetic-packaging-manufacturer",
    title: "Cosmetic Packaging Manufacturer and Supplier | Venus beautiful",
    description:
      "Cosmetic packaging manufacturer and supplier for mascara bottles, eyeliner containers, lip gloss bottles, and lipstick tubes. Ask about custom components, samples, molds, and bulk orders.",
    h1: "Cosmetic packaging manufacturer for eye makeup and lip products",
    eyebrow: "Cosmetic packaging manufacturer",
    summary:
      "Chuangyuan manufactures cosmetic packaging for mascara, eyeliner, lip gloss, and lipstick products. We support component selection, color and finish requirements, logo decoration, mold evaluation, samples, and bulk production.",
    heroImage: "/images/mascara-hero.jpg",
    heroAlt: "Mascara tube, brush, and box representing cosmetic packaging manufacturing",
    primaryCta: "Request packaging options",
    secondaryCta: "Send component requirements",
    badges: ["5,000+ m² facility", "22 injection molding machines", "Custom components", "OEM and ODM"],
    sections: [
      {
        title: "Packaging products we manufacture",
        body:
          "Our packaging experience focuses on color cosmetic components. Buyers can request existing component options or send a reference sample or technical drawing for evaluation.",
        bullets: [
          "Mascara bottles, caps, wipers, and brush combinations",
          "Liquid eyeliner and eyeliner cream containers",
          "Lip gloss bottles and applicator packaging",
          "Lipstick tubes and related color cosmetic components",
        ],
      },
      {
        title: "Custom cosmetic packaging support",
        body:
          "We support packaging projects from component selection through decoration and bulk production. The available process depends on structure, material, finish, quantity, and whether a new mold is required.",
        bullets: [
          "Component color, surface finish, and material direction",
          "Logo printing and brand decoration requirements",
          "Existing mold selection or new mold evaluation",
          "Sample confirmation before bulk production",
        ],
      },
      {
        title: "Information needed for a packaging quote",
        body:
          "Send as much product and component detail as you have. A physical sample, drawing, reference photo, or target capacity makes the first review more accurate.",
        bullets: [
          "Packaging type and intended cosmetic product",
          "Capacity, dimensions, material, and component structure",
          "Color, finish, logo, and decoration requirements",
          "Order quantity, destination country, and target timeline",
        ],
      },
    ],
    faqs: [
      {
        question: "Are you a cosmetic packaging manufacturer or a trading company?",
        answer:
          "Chuangyuan has cosmetic packaging manufacturing operations in Shenzhen, including a facility of more than 5,000 square meters and 22 injection molding machines.",
      },
      {
        question: "Can you make custom mascara tubes?",
        answer:
          "Yes. Mascara packaging requests can cover the bottle, cap, wiper, brush, color, finish, and logo decoration. Send a reference sample or specification for review.",
      },
      {
        question: "Can you supply liquid eyeliner containers?",
        answer:
          "Yes. We manufacture packaging for liquid eyeliner and eyeliner cream. Available structures, applicators, colors, and finishes are confirmed from your requirements.",
      },
      {
        question: "Can you develop a new cosmetic packaging mold?",
        answer:
          "New mold projects can be evaluated from a physical sample, technical drawing, dimensions, material requirements, and estimated order quantity.",
      },
    ],
    related: ["custom-lash-serum-packaging", "private-label-mascara-manufacturer", "private-label-eyeliner-manufacturer"],
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
    heroImage: "/images/lash-serum-white.jpg",
    heroAlt: "White lash serum tube and box for wholesale cosmetic orders",
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
    heroImage: "/images/mascara-hero.jpg",
    heroAlt: "Venus beautiful mascara product and packaging for wholesale supplier inquiries",
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
    related: ["private-label-mascara-manufacturer", "private-label-eyeliner-manufacturer", "contact"],
  },
  "custom-lash-serum-packaging": {
    slug: "custom-lash-serum-packaging",
    title: "Custom Lash Serum Packaging and Tube Options | Venus beautiful",
    description:
      "Custom lash serum packaging support for tube color, logo, box, ingredient direction, and private label presentation for beauty brand orders.",
    h1: "Custom lash serum packaging for private label beauty brands",
    eyebrow: "Packaging and light customization",
    summary:
      "Packaging often decides whether a lash serum product feels ready for retail. Share your tube style, color, logo, box requirements, order quantity, and target market so we can confirm available options.",
    heroImage: "/images/lash-serum-white.jpg",
    heroAlt: "White lash serum tube and box for private label packaging buyers",
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
        title: "What affects MOQ and packaging cost",
        body:
          "Customization level affects MOQ and packaging cost. Simple logo or stock component choices are usually easier to quote than unique molds, special printing, or deep formula changes.",
        bullets: [
          "Stock packaging versus custom packaging",
          "Printing method and color count",
          "Formula and ingredient requirements",
          "Sample confirmation before bulk order",
        ],
      },
      {
        title: "Packaging requirements and sample check",
        body:
          "A complete packaging request does not need to be perfect. A few reference photos and a quantity range are enough for an initial quotation; a sample check then helps confirm the product, tube, printing, and box before bulk production.",
        bullets: [
          "Brand logo file if available",
          "Tube and box sample images",
          "Target retail price or channel",
          "Expected order quantity and timeline",
        ],
      },
      {
        title: "Prepare a retail-ready packaging brief",
        body:
          "Good packaging decisions connect your buyer, retail channel, and product claim direction. We can review the practical production details after you share the intended market and the information you already have.",
        bullets: [
          "Target market and intended sales channel",
          "Required product name, label language, and claim direction for review",
          "Tube, cap, outer box, and finish references",
          "Whether you need ready wholesale goods, light customization, or OEM support",
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
      {
        question: "What should I send for a lash serum packaging quote?",
        answer:
          "Send your quantity, target country, logo file if available, tube and box references, preferred finish, and required timeline. We will confirm the available packaging route, samples, MOQ, and quote details.",
      },
    ],
    related: ["private-label-lash-serum", "lash-serum-moq-samples-lead-time", "contact"],
  },
  "private-label-eyeliner-cost-moq-samples": {
    slug: "private-label-eyeliner-cost-moq-samples",
    title: "Private Label Eyeliner Cost, MOQ, Samples and Lead Time | Venus beautiful",
    description:
      "Buyer guide to private label eyeliner cost, MOQ, samples, packaging, logo printing, production timing, and the details needed for an accurate OEM quote.",
    h1: "Private label eyeliner cost, MOQ, samples, and lead time",
    eyebrow: "Eyeliner quote guide",
    summary:
      "Private label eyeliner cost depends on the exact product and order plan. This guide explains the details that affect a quote, so buyers can request MOQ, samples, packaging, and lead-time information with fewer unknowns.",
    heroImage: "/images/eyeliner-hero.jpg",
    heroAlt: "Liquid eyeliner pen and packaging for private label cost and MOQ planning",
    primaryCta: "Request eyeliner quote details",
    secondaryCta: "Send eyeliner requirements",
    badges: ["Cost drivers", "MOQ", "Samples", "Lead time"],
    sections: [
      {
        title: "What affects private label eyeliner cost",
        body:
          "There is no useful single eyeliner price for every buyer. A ready product order, a logo-printing project, and a custom packaging or OEM project use different components, quantities, and production steps.",
        bullets: [
          "Order quantity and the number of colors or variants",
          "Liquid eyeliner pen, applicator, tube, cap, and selected packaging",
          "Logo printing, label work, outer box, and requested surface finish",
          "Sample work, customization level, destination, and shipping plan",
        ],
      },
      {
        title: "Choose the right order route first",
        body:
          "Choosing the service route early makes the MOQ and quotation discussion more accurate. We can compare the practical options once we know whether speed, branding, or deeper customization is the main priority.",
        bullets: [
          "Ready wholesale supply for buyers focused on current availability",
          "Private label service for logo, packaging, and retail presentation",
          "OEM support for projects with more specific product or packaging requirements",
          "Combined eyeliner, mascara, or lash serum requests when a coordinated line is needed",
        ],
      },
      {
        title: "Samples and production timing",
        body:
          "Samples are useful for checking the product, applicator, packaging feel, and brand presentation before bulk production. Final timing is confirmed after the quantity, packaging, printing, and shipping method are agreed.",
        bullets: [
          "Confirm whether the sample represents the planned bulk product and packaging",
          "Review logo, label wording, and outer box before bulk printing",
          "Share the destination country and desired launch date early",
          "Confirm production time and shipping time separately on the quotation",
        ],
      },
      {
        title: "Send a quote-ready request",
        body:
          "You do not need every detail to start. The information below is enough for our team to identify the missing items and prepare a more useful first response.",
        bullets: [
          "Black, brown, or another requested eyeliner color",
          "Expected quantity and target market",
          "Logo file, packaging reference, or product image if available",
          "Required samples, customization level, and launch timeline",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does private label eyeliner cost?",
        answer:
          "Cost depends on quantity, selected pen and packaging, printing, sample work, product direction, and shipping destination. Send those details for a quote matched to your project instead of relying on a generic online price.",
      },
      {
        question: "What is the MOQ for private label eyeliner?",
        answer:
          "MOQ depends on whether you need ready wholesale supply, logo printing, or a more customized private label or OEM order. We confirm the applicable MOQ after reviewing the selected product and packaging.",
      },
      {
        question: "Can I order eyeliner samples before bulk production?",
        answer:
          "Yes. Ready samples and customized samples can be discussed before a bulk order. Sample cost, freight, available customization, and timing are confirmed for each request.",
      },
      {
        question: "What is the lead time for private label eyeliner?",
        answer:
          "Lead time is confirmed after quantity, components, logo or box printing, sample approval, and shipping plan are clear. Share your launch date so production and delivery timing can be checked together.",
      },
    ],
    related: ["private-label-eyeliner-manufacturer", "wholesale-eyeliner", "private-label-mascara-manufacturer", "cosmetic-packaging-manufacturer"],
  },
  "lash-serum-moq-samples-lead-time": {
    slug: "lash-serum-moq-samples-lead-time",
    title: "Lash Serum MOQ, Samples, and Lead Time | Venus beautiful",
    description:
      "Buyer guide for lash serum MOQ, samples, quotation details, lead time, packaging, and private label information needed before ordering.",
    h1: "Lash serum MOQ, samples, and lead time questions",
    eyebrow: "Buying questions",
    summary:
      "Before ordering lash serum, prepare your MOQ, sample, packaging, and timeline requirements. Here is what to confirm before requesting a quotation.",
    heroImage: "/images/lash-serum-white.jpg",
    heroAlt: "White lash serum product and packaging for sample and quotation requests",
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
          "Samples let you check product texture, packaging feel, and brand presentation before a larger order.",
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
          "A typical first-order MOQ in the current supplier information is 100 pieces. Exact MOQ depends on the product, packaging, logo, and customization level, so please confirm it on the quotation.",
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
    title: "FAQ for Eye Makeup Wholesale and Private Label Buyers | Venus beautiful",
    description:
      "Frequently asked questions for lash serum, mascara, eyeliner, private label, wholesale, OEM, MOQ, samples, payment, shipping, and packaging.",
    h1: "FAQ for eye makeup wholesale and private label buyers",
    eyebrow: "Buyer FAQ",
    summary:
      "Find practical order information for lash serum, mascara, eyeliner, private label packaging, wholesale supply, OEM service, samples, payment, and shipping.",
    primaryCta: "Ask a question on WhatsApp",
    secondaryCta: "Send inquiry details",
    badges: ["Lash serum", "Mascara", "Eyeliner", "Private label"],
    sections: [
      {
        title: "Fastest way to get useful answers",
        body:
          "A clear inquiry helps us avoid vague replies. Share the product, quantity, country, and customization needs at the start.",
        bullets: [
          "Product: lash serum, mascara, eyeliner, or a combined eye makeup order",
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
      {
        title: "Order terms at a glance",
        body:
          "MOQ, sample cost, payment, production time, and shipping are confirmed on each quotation because product and customization requirements vary.",
        bullets: [
          "Typical first-order MOQ starts around 100 pieces",
          "Customized samples usually require 10-15 days",
          "Bulk production commonly takes about 15-30 days",
          "Express, air, and sea shipping options are available",
        ],
      },
    ],
    faqs: [
      {
        question: "What products are the main focus?",
        answer:
          "We currently present lash serum, mascara, and liquid eyeliner, with wholesale, private label, light customization, and OEM order support.",
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
        question: "How can I get a sample?",
        answer:
          "Ready samples without a customized logo may be available without a product charge, while the buyer pays freight. Customized samples may include printing or setup charges. We confirm the exact sample policy before shipment.",
      },
      {
        question: "How long does a customized sample take?",
        answer:
          "Customized samples usually take about 10-15 days after the product, logo, packaging, and sample requirements are confirmed.",
      },
      {
        question: "Can you help with packaging and logo design?",
        answer:
          "Yes. We can review logo placement, Pantone color references, tube or bottle appearance, outer box layout, and packaging specifications. New mold work requires a sample or technical drawing.",
      },
      {
        question: "What are the payment terms?",
        answer:
          "The current standard terms are 30% deposit and 70% balance before shipment by T/T. Small orders may require full payment by T/T or PayPal. Final terms are stated on the quotation.",
      },
      {
        question: "How can orders be shipped?",
        answer:
          "Small orders can usually ship by DHL, FedEx, UPS, or another express service, often taking about 3-7 business days after dispatch. Larger orders can ship by air or sea according to cost and timing requirements.",
      },
    ],
    related: ["private-label-lash-serum", "private-label-mascara-manufacturer", "private-label-eyeliner-manufacturer"],
  },
  about: {
    slug: "about",
    title: "About Chuangyuan and Venus beautiful | Eye Makeup Manufacturer",
    description:
      "Learn about Chuangyuan Cosmetics Manufacturing (Shenzhen) Co., Ltd., an eye makeup manufacturer with 15 years of factory production experience.",
    h1: "Eye makeup manufacturing by Chuangyuan and Venus beautiful",
    eyebrow: "Company profile",
    summary:
      "Venus beautiful is the export brand of Chuangyuan Cosmetics Manufacturing (Shenzhen) Co., Ltd. We manufacture eyeliner, mascara, lash serum, and eyebrow serum for ready stock, mixed small orders, private label, and OEM requirements.",
    heroImage: "/images/business-license-landscape.jpg",
    heroAlt: "Business license for Chuangyuan Cosmetics Manufacturing Shenzhen",
    primaryCta: "Contact Venus beautiful",
    secondaryCta: "Request company details",
    badges: ["15 years production experience", "Shenzhen, China", "Private label", "Export supply"],
    sections: [
      {
        title: "Eye makeup manufacturing experience",
        body:
          "We are a professional manufacturer specializing in eye makeup products, with 15 years of factory production experience. Our main product range covers eyeliner, mascara, lash serum, and eyebrow serum.",
        bullets: [
          "Eye makeup product manufacturing",
          "Ready stock and mixed small orders",
          "Private label customization",
          "OEM requirements evaluated by product and quantity",
        ],
      },
      {
        title: "Quality and market support",
        body:
          "We mainly serve European and American markets and also support buyers in other export markets. Product quality, formula safety, and delivery stability are controlled throughout order preparation and production.",
        bullets: [
          "Certificate and qualification documents available for review",
          "Product and sample confirmation before bulk production",
          "Formula and packaging requirements checked by order",
          "Production and delivery timing confirmed on each quotation",
        ],
      },
      {
        title: "Product and packaging capabilities",
        body:
          "In addition to finished eye makeup products, our manufacturing operations include a facility of more than 5,000 square meters and 22 injection molding machines for color cosmetic packaging components.",
        bullets: [
          "Mascara bottles and related packaging components",
          "Liquid eyeliner and eyeliner cream containers",
          "Lip gloss bottles and lipstick tubes",
          "Component selection, molding, decoration, samples, and bulk production",
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
        question: "Which products do you manufacture?",
        answer:
          "We manufacture eyeliner, mascara, lash serum, eyebrow serum, and related color cosmetic packaging components.",
      },
      {
        question: "Which order types do you support?",
        answer:
          "We support ready stock, mixed small orders, private label customization, and OEM requirements. MOQ, samples, production time, and packaging options are confirmed for each order.",
      },
      {
        question: "Can buyers review certificates and qualification documents?",
        answer:
          "Yes. Available certificate, qualification, formula, and product documents can be reviewed according to the selected product and destination market requirements.",
      },
    ],
    related: ["contact", "faq", "private-label-eyeliner-manufacturer"],
  },
  contact: {
    slug: "contact",
    title: "Contact Venus beautiful for Private Label Eye Makeup Orders",
    description:
      "Contact Venus beautiful by WhatsApp or email for lash serum, mascara, eyeliner, wholesale, private label, packaging, and OEM inquiries.",
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
          "Product: lash serum, mascara, eyeliner, packaging, or a combined order",
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
          "Yes. Packaging and product photos are useful, especially for mascara, eyeliner, lash serum, tube or bottle selection, box design, and brand presentation.",
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
    related: ["private-label-lash-serum", "private-label-mascara-manufacturer", "private-label-eyeliner-manufacturer"],
  },
};

export const allPageSlugs = Object.keys(pages);

export function getPage(slug: string) {
  return pages[slug];
}
