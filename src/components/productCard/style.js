import styled from "styled-components";

export const CartImg = styled.div`
  background: url(${({ src }) => src}) center / 24px no-repeat;
  width: 24px;
  height: 24px;
  background-color: #5ece7b;
  padding: 1.5rem;
  border-radius: 100px;
  position: absolute;
  top: 320px;
  right: 10%;
  opacity: 0;
  transition: all 0.3s ease;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 386px;
  height: 444px;
  padding: 16px;
  transition: all 0.3s ease;
  position: relative;
  h2 {
    margin: 1rem 0rem;
  }
  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    ${CartImg} {
      opacity: 1;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 18px;
  }
`;

export const OutOfStockLayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ inStock }) => (inStock ? null : "#fff")};
  opacity: 0.5;
  z-index: 5;
  h3 {
    font-weight: 400;
    font-size: 24px;
    position: absolute;
    top: 162px;
    left: 106px;
  }
`;

export const ProductImage = styled.div`
  background: url(${({ src }) => src}) center / contain no-repeat;
  height: 330px;
  position: relative;
`;
