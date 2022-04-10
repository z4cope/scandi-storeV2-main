export const generateTotalPrice = (cart, currSymbol) => {
  return cart.reduce((previous, current) => {
    let totalAmount = current.prices.find(
      (price) => price.currency.symbol === currSymbol
    )?.amount;
    return totalAmount * current.qty + previous;
  }, 0);
};
