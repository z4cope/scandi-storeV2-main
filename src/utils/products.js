export const getProductSelectedAttributes = (product) => {
  return product.attributes.map((att) => {
    if (!att.selectedVariant) {
      att.selectedVariant = att.items[0];
    }
    return att;
  });
};
