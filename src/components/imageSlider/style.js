import styled from "styled-components";

export const SliderWrapper = styled.div`
  background: url(${({ src }) => src}) center / cover no-repeat;
  width: 141px;
  height: 185px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Arrow = styled.div`
  background: url(${({ src }) => src}) center / contain no-repeat;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
