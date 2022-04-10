//Styled component
import styled from "styled-components";

export const AttributeName = styled.h2`
  margin-bottom: 8px;
`;
export const AttributeTypeWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const AttributeType = styled.button`
  width: 63px;
  height: 45px;
  border-radius: 0;
  background-color: #fff;
  border: 1px solid #000;
  margin: 0 12px 40px 0;
`;

export const VariantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Color = styled.button`
  width: 63px;
  height: 45px;
  border-radius: 0;
  background-color: ${({ color }) => color};
  border: 1px solid #000;
  margin: 0 12px 40px 0;
`;

export const VariantBox = styled.div`
  background: ${({ active }) => (active ? "black" : "transparent")};
  color: ${({ active }) => (active ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid black;
`;
