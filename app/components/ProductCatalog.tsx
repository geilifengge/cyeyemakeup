import Link from "next/link";
import { InquiryActions } from "./InquiryActions";
import { CatalogInquiryLink } from "./CatalogInquiryLink";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "./SiteShell";
import { JsonLd } from "../seo";
import { baseUrl } from "../site-data";

export type CatalogLocale = "en" | "es" | "fr" | "de" | "pt" | "el";
export type CatalogMode = "all" | "featured" | "finished" | "packaging" | "brow";

type ProductCategory = "lash" | "mascara" | "eyeliner" | "brow" | "mascaraTube" | "eyelinerTube" | "pen";

type CatalogProduct = {
  ref: string;
  category: ProductCategory;
  image: string;
  name: string;
  moq: string;
  facts: ["volume" | "material" | "size" | "format", string][];
};

const products: CatalogProduct[] = [
  { ref: "CY-LS-01", category: "lash", image: "/images/catalog-lash-01.jpg", name: "Custom-logo lash serum with presentation box", moq: "1,000 pcs", facts: [["format", "Fine-brush serum"], ["material", "Tube and presentation box direction"]] },
  { ref: "CY-LS-02", category: "lash", image: "/images/catalog-lash-02.jpg", name: "Minimal white-tube lash serum", moq: "500 pcs", facts: [["format", "Fine-brush serum"], ["material", "Minimal white tube direction"]] },
  { ref: "CY-LS-03", category: "lash", image: "/images/catalog-lash-03.jpg", name: "Hyaluronic-acid lash and brow serum direction", moq: "10,000 pcs", facts: [["format", "Private-label serum"], ["volume", "Confirm for selected pack"]] },
  { ref: "CY-MA-01", category: "mascara", image: "/images/catalog-mascara-01.jpg", name: "Gold-finish private-label mascara", moq: "500 pcs", facts: [["format", "Finished mascara"], ["material", "Gold presentation direction"]] },
  { ref: "CY-MA-02", category: "mascara", image: "/images/catalog-mascara-02.jpg", name: "Fine-brush long-wear mascara direction", moq: "500 pcs", facts: [["format", "Fine brush"], ["material", "Finished mascara"]] },
  { ref: "CY-MA-03", category: "mascara", image: "/images/catalog-mascara-03.jpg", name: "Fiber-brush curling mascara direction", moq: "500 pcs", facts: [["format", "Fiber brush"], ["material", "Finished mascara"]] },
  { ref: "CY-EL-01", category: "eyeliner", image: "/images/catalog-eyeliner-01.jpg", name: "Classic liquid eyeliner pen", moq: "5,000 pcs", facts: [["format", "Single-ended pen"], ["material", "Private-label direction"]] },
  { ref: "CY-EL-02", category: "eyeliner", image: "/images/catalog-eyeliner-02.jpg", name: "Dual-ended black and clear eyeliner pen", moq: "10,000 pcs", facts: [["format", "2-in-1 pen"], ["material", "Black · clear"]] },
  { ref: "CY-EL-03", category: "eyeliner", image: "/images/catalog-eyeliner-03.jpg", name: "Magnetic-lash eyeliner direction", moq: "5,000 pcs", facts: [["format", "Magnetic-lash eyeliner"], ["material", "Custom-logo direction"]] },
  { ref: "CY-BG-01", category: "brow", image: "/images/catalog-brow-01.png", name: "Brow pencil gel format", moq: "1,000 pcs", facts: [["format", "Pen · pencil"], ["volume", "Confirm for selected pack"]] },
  { ref: "CY-BG-02", category: "brow", image: "/images/catalog-brow-02.jpg", name: "Clear brow sculpt gel with brush", moq: "500 pcs", facts: [["format", "Brush applicator"], ["material", "Clear gel direction"]] },
  { ref: "CY-BG-03", category: "brow", image: "/images/catalog-brow-03.jpg", name: "6 ml brow glue gel", moq: "500 pcs", facts: [["volume", "6 ml"], ["format", "Private-label brow gel"]] },
  { ref: "PK-MT-01", category: "mascaraTube", image: "/images/catalog-mtube-01.jpg", name: "Dual-ended round mascara tube", moq: "12,000 pcs", facts: [["material", "Plastic"], ["volume", "3.5 ml × 2"], ["size", "107.2 × 12.8 mm"]] },
  { ref: "PK-MT-02", category: "mascaraTube", image: "/images/catalog-mtube-02.jpg", name: "Aluminum-finish 8 ml mascara tube", moq: "12,000 pcs", facts: [["material", "PETG · ABS · aluminum"], ["volume", "About 8 ml"], ["size", "Ø15.2 × 107 mm"]] },
  { ref: "PK-MT-03", category: "mascaraTube", image: "/images/catalog-mtube-03.jpg", name: "Metal-look 8 ml mascara tube with brush", moq: "12,000 pcs", facts: [["material", "PETG · ABS · aluminum"], ["volume", "About 8 ml"], ["size", "Ø13–15.9 mm"]] },
  { ref: "PK-MT-04", category: "mascaraTube", image: "/images/catalog-mtube-04.jpg", name: "Black matte 8 ml mascara tube", moq: "10,000 pcs", facts: [["material", "PETG · ABS · aluminum"], ["volume", "About 8 ml"], ["size", "Ø15.2 × 107 mm"]] },
  { ref: "PK-ET-01", category: "eyelinerTube", image: "/images/catalog-etube-01.jpg", name: "Cylinder eyeliner or serum tube", moq: "3,000 pcs", facts: [["material", "PETG · ABS"], ["volume", "About 9 ml"], ["size", "16 × 106.6 mm"]] },
  { ref: "PK-ET-02", category: "eyelinerTube", image: "/images/catalog-etube-02.jpg", name: "Aluminum-finish eyeliner or serum tube", moq: "12,000 pcs", facts: [["material", "PETG · aluminum"], ["volume", "About 9 ml"], ["size", "Ø16.8 × 115.1 mm"]] },
  { ref: "PK-ET-03", category: "eyelinerTube", image: "/images/catalog-etube-03.jpg", name: "Black liquid eyeliner tube", moq: "10,000 pcs", facts: [["material", "PET · PETG · ABS"], ["volume", "About 8 ml"], ["size", "16 × 106.6 mm"]] },
  { ref: "PK-ET-04", category: "eyelinerTube", image: "/images/catalog-etube-04.jpg", name: "Aluminum and plastic slim tube", moq: "10,000 pcs", facts: [["material", "Aluminum · plastic"], ["volume", "About 6.8 ml"], ["size", "Ø15.2 × 107.4 mm"]] },
  { ref: "PK-PE-01", category: "pen", image: "/images/catalog-pen-01.jpg", name: "Round cosmetic pen", moq: "10,000 pcs", facts: [["material", "Plastic"], ["volume", "0.5 ml listing format"], ["size", "Ø9.7 × 125.7 mm"]] },
  { ref: "PK-PE-02", category: "pen", image: "/images/catalog-pen-02.jpg", name: "Dual-ended liquid eyeliner pen", moq: "12,000 pcs", facts: [["material", "PP · ABS"], ["format", "Dual-ended"], ["size", "Ø10.6 × 168.9 mm"]] },
  { ref: "PK-PE-03", category: "pen", image: "/images/catalog-pen-03.jpg", name: "Decorative liquid eyeliner pen", moq: "10,000 pcs", facts: [["material", "PP · ABS"], ["format", "Custom color"], ["size", "Ø9.7 × 132.5 mm"]] },
  { ref: "PK-PE-04", category: "pen", image: "/images/catalog-pen-04.jpg", name: "Crystal-cap cosmetic pen", moq: "10,000 pcs", facts: [["material", "PP · ABS"], ["format", "Crystal-cap direction"], ["size", "Ø14.8 × 110.7 mm"]] },
];

const copy = {
  en: { eyebrow: "Product selection", title: "Choose a finished eye makeup or packaging reference", intro: "Use these references to discuss format, capacity, applicator, finish, branding, and order quantity. Final specifications, MOQ, samples, documentation, and lead time are confirmed before quotation.", finished: "Finished eye makeup", packaging: "Packaging components", lash: "Lash serum", mascara: "Mascara", eyeliner: "Eyeliner", brow: "Brow gel", mascaraTube: "Mascara tubes", eyelinerTube: "Eyeliner and serum tubes", pen: "Cosmetic pens", moq: "Listing MOQ", volume: "Capacity", material: "Material / direction", size: "Size", format: "Format", ask: "Ask about this reference", all: "View all 24 references", note: "Reference specifications come from supplier product records collected on 9 September 2026. Availability, final MOQ, formula, decoration, test documents, and market claims are confirmed for the selected project before quotation.", catalogTitle: "Eye makeup and packaging reference catalog", catalogIntro: "Compare 12 finished eye makeup references and 12 packaging references, then send the reference codes with your market, quantity, branding, and launch requirements.", browTitle: "Private-label brow gel references", browIntro: "Compare three brow formats for a private-label project. Formula, applicator, pack compatibility, claims, samples, and market documentation are checked after we receive your brief.", packTitle: "Mascara, eyeliner and cosmetic pen packaging", packIntro: "Compare twelve packaging references by material, capacity, size, and format. Decoration, brush or applicator matching, samples, and production terms are confirmed for your project.", inquiry: "selected catalog reference" },
  es: { eyebrow: "Selección de producto", title: "Elija una referencia de maquillaje terminado o envase", intro: "Utilice estas referencias para definir formato, capacidad, aplicador, acabado, marca y cantidad. Confirmamos especificaciones, MOQ, muestras, documentación y plazo antes de cotizar.", finished: "Maquillaje terminado", packaging: "Componentes de envase", lash: "Sérum para pestañas", mascara: "Máscara de pestañas", eyeliner: "Delineador", brow: "Gel para cejas", mascaraTube: "Tubos de máscara", eyelinerTube: "Tubos para delineador y sérum", pen: "Lápices cosméticos", moq: "MOQ de referencia", volume: "Capacidad", material: "Material / acabado", size: "Medidas", format: "Formato", ask: "Consultar esta referencia", all: "Ver las 24 referencias", note: "Los datos proceden de registros de producto del proveedor recopilados el 9 de septiembre de 2026. Disponibilidad, MOQ final, fórmula, decoración, documentación y claims se confirman antes de cotizar.", catalogTitle: "Catálogo de referencias de maquillaje y envases", catalogIntro: "Compare 12 referencias de maquillaje terminado y 12 de envases y envíenos los códigos junto con mercado, cantidad, marca y fecha de lanzamiento.", browTitle: "Referencias de gel para cejas de marca privada", browIntro: "Compare tres formatos. Revisamos fórmula, aplicador, compatibilidad, muestras y documentación después de recibir su brief.", packTitle: "Envases para máscara, delineador y lápices cosméticos", packIntro: "Compare doce referencias por material, capacidad, medidas y formato. Confirmamos decoración, aplicador, muestras y condiciones de producción.", inquiry: "referencia seleccionada del catálogo" },
  fr: { eyebrow: "Sélection produit", title: "Choisissez une référence de maquillage fini ou d’emballage", intro: "Utilisez ces références pour préciser format, capacité, applicateur, finition, marque et quantité. Spécifications, MOQ, échantillons, documents et délais sont confirmés avant devis.", finished: "Maquillage fini", packaging: "Composants d’emballage", lash: "Sérum cils", mascara: "Mascara", eyeliner: "Eyeliner", brow: "Gel sourcils", mascaraTube: "Tubes mascara", eyelinerTube: "Tubes eyeliner et sérum", pen: "Stylos cosmétiques", moq: "MOQ de référence", volume: "Capacité", material: "Matière / finition", size: "Dimensions", format: "Format", ask: "Demander cette référence", all: "Voir les 24 références", note: "Les données proviennent des fiches fournisseur collectées le 9 septembre 2026. Disponibilité, MOQ final, formule, décor, documents et allégations sont confirmés avant devis.", catalogTitle: "Catalogue de références maquillage et emballage", catalogIntro: "Comparez 12 références de maquillage fini et 12 emballages, puis envoyez les codes avec votre marché, quantité, identité et calendrier.", browTitle: "Références de gel sourcils en marque blanche", browIntro: "Comparez trois formats. Formule, applicateur, compatibilité, échantillons et documents sont étudiés après réception du brief.", packTitle: "Emballages mascara, eyeliner et stylos cosmétiques", packIntro: "Comparez douze références par matière, capacité, dimensions et format. Décor, applicateur, échantillons et conditions sont ensuite confirmés.", inquiry: "référence catalogue sélectionnée" },
  de: { eyebrow: "Produktauswahl", title: "Wählen Sie ein Augen-Make-up- oder Verpackungsmuster", intro: "Nutzen Sie diese Referenzen für Format, Füllmenge, Applikator, Oberfläche, Branding und Menge. Spezifikation, MOQ, Muster, Dokumente und Lieferzeit bestätigen wir vor dem Angebot.", finished: "Fertiges Augen-Make-up", packaging: "Verpackungskomponenten", lash: "Wimpernserum", mascara: "Mascara", eyeliner: "Eyeliner", brow: "Augenbrauengel", mascaraTube: "Mascarahülsen", eyelinerTube: "Eyeliner- und Serumhülsen", pen: "Kosmetikstifte", moq: "Referenz-MOQ", volume: "Füllmenge", material: "Material / Ausführung", size: "Maße", format: "Format", ask: "Referenz anfragen", all: "Alle 24 Referenzen", note: "Die Angaben stammen aus Lieferanten-Produktdaten vom 9. September 2026. Verfügbarkeit, endgültige MOQ, Rezeptur, Dekoration, Dokumente und Claims werden vor dem Angebot bestätigt.", catalogTitle: "Referenzkatalog für Augen-Make-up und Verpackungen", catalogIntro: "Vergleichen Sie 12 Fertigprodukt- und 12 Verpackungsreferenzen und senden Sie Codes, Zielmarkt, Menge, Branding und Zeitplan.", browTitle: "Private-Label-Augenbrauengel", browIntro: "Vergleichen Sie drei Formate. Rezeptur, Applikator, Pack-Kompatibilität, Muster und Marktdokumente prüfen wir nach Ihrem Briefing.", packTitle: "Mascara-, Eyeliner- und Kosmetikstift-Verpackungen", packIntro: "Vergleichen Sie zwölf Referenzen nach Material, Füllmenge, Maßen und Format. Dekoration, Applikator, Muster und Produktionsbedingungen werden projektbezogen bestätigt.", inquiry: "ausgewählte Katalogreferenz" },
  pt: { eyebrow: "Seleção de produto", title: "Escolha uma referência de maquiagem pronta ou embalagem", intro: "Use as referências para definir formato, capacidade, aplicador, acabamento, marca e quantidade. Especificações, MOQ, amostras, documentos e prazo são confirmados antes da cotação.", finished: "Maquiagem pronta", packaging: "Componentes de embalagem", lash: "Sérum para cílios", mascara: "Máscara de cílios", eyeliner: "Delineador", brow: "Gel para sobrancelhas", mascaraTube: "Tubos de máscara", eyelinerTube: "Tubos de delineador e sérum", pen: "Canetas cosméticas", moq: "MOQ de referência", volume: "Capacidade", material: "Material / acabamento", size: "Medidas", format: "Formato", ask: "Consultar esta referência", all: "Ver as 24 referências", note: "Os dados vêm de registros do fornecedor coletados em 9 de setembro de 2026. Disponibilidade, MOQ final, fórmula, decoração, documentos e alegações são confirmados antes da cotação.", catalogTitle: "Catálogo de maquiagem e embalagens", catalogIntro: "Compare 12 referências de maquiagem pronta e 12 de embalagens e envie os códigos com mercado, quantidade, marca e cronograma.", browTitle: "Referências de gel para sobrancelhas de marca própria", browIntro: "Compare três formatos. Fórmula, aplicador, compatibilidade, amostras e documentação são avaliados após o briefing.", packTitle: "Embalagens para máscara, delineador e canetas cosméticas", packIntro: "Compare doze referências por material, capacidade, medidas e formato. Decoração, aplicador, amostras e condições são confirmados para o projeto.", inquiry: "referência selecionada do catálogo" },
  el: { eyebrow: "Επιλογή προϊόντος", title: "Επιλέξτε αναφορά έτοιμου μακιγιάζ ή συσκευασίας", intro: "Χρησιμοποιήστε τις αναφορές για μορφή, χωρητικότητα, εφαρμοστή, φινίρισμα, επωνυμία και ποσότητα. Προδιαγραφές, MOQ, δείγματα, έγγραφα και χρόνος επιβεβαιώνονται πριν την προσφορά.", finished: "Έτοιμο μακιγιάζ ματιών", packaging: "Στοιχεία συσκευασίας", lash: "Ορός βλεφαρίδων", mascara: "Μάσκαρα", eyeliner: "Eyeliner", brow: "Τζελ φρυδιών", mascaraTube: "Σωληνάρια μάσκαρα", eyelinerTube: "Σωληνάρια eyeliner και ορού", pen: "Καλλυντικά στυλό", moq: "MOQ αναφοράς", volume: "Χωρητικότητα", material: "Υλικό / φινίρισμα", size: "Διαστάσεις", format: "Μορφή", ask: "Ζητήστε αυτή την αναφορά", all: "Δείτε και τις 24 αναφορές", note: "Τα στοιχεία προέρχονται από αρχεία προϊόντων προμηθευτή της 9ης Σεπτεμβρίου 2026. Διαθεσιμότητα, τελικό MOQ, σύνθεση, διακόσμηση, έγγραφα και ισχυρισμοί επιβεβαιώνονται πριν την προσφορά.", catalogTitle: "Κατάλογος αναφορών μακιγιάζ και συσκευασίας", catalogIntro: "Συγκρίνετε 12 έτοιμα προϊόντα και 12 συσκευασίες και στείλτε κωδικούς, αγορά, ποσότητα, επωνυμία και χρονοδιάγραμμα.", browTitle: "Αναφορές private-label τζελ φρυδιών", browIntro: "Συγκρίνετε τρεις μορφές. Σύνθεση, εφαρμοστής, συμβατότητα, δείγματα και έγγραφα ελέγχονται μετά το brief.", packTitle: "Συσκευασίες μάσκαρα, eyeliner και καλλυντικών στυλό", packIntro: "Συγκρίνετε δώδεκα αναφορές ανά υλικό, χωρητικότητα, διαστάσεις και μορφή. Διακόσμηση, εφαρμοστής, δείγματα και όροι επιβεβαιώνονται ανά έργο.", inquiry: "επιλεγμένη αναφορά καταλόγου" },
} as const;

const categoryOrder: ProductCategory[] = ["lash", "mascara", "eyeliner", "brow", "mascaraTube", "eyelinerTube", "pen"];

function matchesMode(product: CatalogProduct, mode: CatalogMode) {
  if (mode === "all") return true;
  if (mode === "featured") return ["CY-LS-01", "CY-MA-02", "CY-EL-01", "CY-BG-02", "PK-MT-02", "PK-MT-04", "PK-ET-01", "PK-PE-02"].includes(product.ref);
  if (mode === "finished") return product.ref.startsWith("CY-");
  if (mode === "packaging") return product.ref.startsWith("PK-");
  return product.category === "brow";
}

export function ProductCatalog({ locale, mode = "all", heading = true }: { locale: CatalogLocale; mode?: CatalogMode; heading?: boolean }) {
  const t = copy[locale];
  const selected = products.filter((product) => matchesMode(product, mode));
  const groups = categoryOrder.map((category) => ({ category, items: selected.filter((product) => product.category === category) })).filter((group) => group.items.length);

  return (
    <section className="catalog-section" aria-labelledby={`catalog-${mode}-title`}>
      {heading ? <div className="catalog-heading"><p className="eyebrow">{t.eyebrow}</p><h2 id={`catalog-${mode}-title`}>{t.title}</h2><p>{t.intro}</p></div> : null}
      {groups.map(({ category, items }) => (
        <div className="catalog-group" key={category}>
          <div className="catalog-group-heading"><h3>{t[category]}</h3><span>{items.length.toString().padStart(2, "0")}</span></div>
          <div className="catalog-grid">
            {items.map((product) => (
              <article className="catalog-card" key={product.ref}>
                <div className="catalog-image"><img src={product.image} alt={`${product.ref} ${product.name}`} loading="lazy" /></div>
                <div className="catalog-card-copy"><p className="catalog-ref">{product.ref}</p><h4>{product.name}</h4><dl><div><dt>{t.moq}</dt><dd>{product.moq}</dd></div>{product.facts.map(([label, value]) => <div key={`${product.ref}-${label}`}><dt>{t[label]}</dt><dd>{value}</dd></div>)}</dl><CatalogInquiryLink productRef={product.ref} productName={product.name} label={t.ask} /></div>
              </article>
            ))}
          </div>
        </div>
      ))}
      <p className="catalog-note">{t.note}</p>
      {mode === "featured" ? <Link className="button secondary catalog-all-link" href="/product-catalog">{t.all}</Link> : null}
    </section>
  );
}

export function CatalogLanding({ locale, mode }: { locale: CatalogLocale; mode: "all" | "packaging" | "brow" }) {
  const t = copy[locale];
  const title = mode === "all" ? t.catalogTitle : mode === "packaging" ? t.packTitle : t.browTitle;
  const intro = mode === "all" ? t.catalogIntro : mode === "packaging" ? t.packIntro : t.browIntro;
  const path = mode === "all" ? "/product-catalog" : mode === "packaging" ? "/packaging-catalog" : "/private-label-brow-gel";
  return <><JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${baseUrl}${path}#webpage`, url: `${baseUrl}${path}`, name: title, description: intro, isPartOf: { "@id": `${baseUrl}/#website` }, inLanguage: locale }} /><SiteHeader /><main><section className="catalog-hero"><p className="eyebrow">{t.eyebrow}</p><h1>{title}</h1><p>{intro}</p></section><ProductCatalog locale={locale} mode={mode} heading={false} /><InquiryActions topic={`${title} — ${t.inquiry}`} primaryLabel={t.ask} secondaryLabel="Email product requirements" /></main><SiteFooter /><FloatingWhatsApp /></>;
}
