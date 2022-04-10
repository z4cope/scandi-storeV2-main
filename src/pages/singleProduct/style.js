import styled from "styled-components";

export const SingleProductWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 10;
`;

export const ProductGallery = styled.div`
  margin: auto;
  display: flex;
  flex: 1;
`;

export const ProductImageVarients = styled.div`
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
  flex-direction: column;
  width: 79px;
  margin-right: 1.5rem;
`;

export const ProductMiniImage = styled.div`
  background: url(${({ src }) => src}) center / cover no-repeat;
  width: 100%;
  height: 87.61px;
  margin-bottom: 32.39px;
`;

export const ProductMainImage = styled.div`
  background: url(${({ src }) => src}) center / cover no-repeat;
  width: 610px;
  height: 511px;
  margin-right: 100px;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 292px;
  height: 511px;
`;

export const SingleProductTitle = styled.h2`
  margin-bottom: 43px;
  font-size: 30px;
`;

export const ProductType = styled.h2`
  margin-bottom: 6px;
  font-size: 18px;
`;

export const Swatches = styled.div`
  margin-bottom: 40px;
  display: flex;
`;

export const Price = styled.h2`
  margin: 40px 0px 10px 0px;
  font-size: 18px;
`;

export const PriceValue = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const AddToCartBtn = styled.button`
  margin-bottom: 40px;
  width: 292px;
  min-height: 52px;
  border-radius: 0;
  color: #fff;
  font-size: 16px;
  border: none;
  background-color: #5ece7b;
`;

export const OutOfStock = styled.button`
  margin-bottom: 40px;
  width: 292px;
  min-height: 52px;
  border-radius: 0;
  color: #fff;
  font-size: 16px;
  border: none;
  background-color: #ff5a31;
  cursor: not-allowed;
`;

export const ProductDescription = styled.p`
  width: 292px;
`;
