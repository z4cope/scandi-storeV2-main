export const handelPrice = (prices, symbol) => {
  const productPrice = prices?.find(
    (price) => price.currency.symbol === symbol
  )?.amount;

  return productPrice;
};
