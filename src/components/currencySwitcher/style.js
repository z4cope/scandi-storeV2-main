import styled from "styled-components";

export const SwitcherWrapper = styled.div`
  width: 114px;
  height: 169px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  position: absolute;
  right: 78px;
  opacity: ${({ active }) => (active ? 1 : 0)};
  z-index: ${({ active }) => (active ? 999 : -1)};
`;

export const Currency = styled.h5`
  font-weight: 500;
  font-size: 18px;
  color: #1d1f22;
  width: 100%;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #cacaca;
  }
`;
