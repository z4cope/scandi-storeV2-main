import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 90%;
  margin: auto;
`;

export const HeadLine = styled.h2`
  font-weight: bold;
  font-size: 32px;
  margin-top: 80px;
  margin-bottom: 59px;
`;

export const ProductWrapper = styled.div`
  border-top: 1px solid #e5e5e5;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 16px 0px;
`;

export const ProductDetails = styled.div``;

export const ProductName = styled.h2`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 16px;
`;

export const ProductDesc = styled.h3`
  font-weight: normal;
  font-size: 30px;
  margin-top: 16px;
`;

export const Price = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  margin: 12px 0px;
`;

export const Sizes = styled.div`
  display: flex;
`;

export const ProductQuantity = styled.div`
  display: flex;
`;

export const Qunatity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 12px;
  h5 {
    margin: 30px 0px;
  }
  button {
    width: 45px;
    height: 45px;
    border: 1px solid #000;
    background: #fff;
  }
`;

export const SelectedVariants = styled.h3`
  width: 63px;
  height: 45px;
  border: 1px solid #1d1f22;
  font-weight: 400;
  font-size: 16px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const Color = styled.div`
  width: 63px;
  height: 45px;
  border: 1px solid #1d1f22;
  background: ${({ color }) => color};
  margin-right: 12px;
`;
