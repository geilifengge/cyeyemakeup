"use client";

type CatalogInquiryLinkProps = {
  productRef: string;
  productName: string;
  label: string;
};

export function CatalogInquiryLink({ productRef, productName, label }: CatalogInquiryLinkProps) {
  function selectProduct() {
    window.dispatchEvent(
      new CustomEvent("catalog-product-selected", {
        detail: { value: `${productRef} — ${productName}` },
      }),
    );
  }

  return (
    <a className="catalog-inquiry-link" href="#inquiry" onClick={selectProduct}>
      {label}
    </a>
  );
}
