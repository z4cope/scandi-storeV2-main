import styled from "styled-components";

export const StyledNavWrapper = styled.div`
  width: 100%;
  min-height: 10vh;
  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: inherit;
    ul {
      display: flex;
      align-items: center;
      flex: 1 0 200px;
    }
    .nav-actions {
      text-align: right;
      justify-content: flex-end;
      li {
        margin-left: 2rem;
        cursor: pointer;
      }
    }
    img {
      width: 100%;
      height: 3%;
    }
  }
`;

export const NavElement = styled.li`
  width: 97px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: ${({ currentState, index }) =>
    currentState === index ? "2px solid #5ece7b" : 0};
`;

export const StyledCart = styled.div`
  width: 20px;
  height: 20px;
  background: url(${({ src }) => src}) center / contain no-repeat;
  position: relative;
`;

export const ProductsQty = styled.h5`
  position: absolute;
  top: -10px;
  right: -15px;
  color: #fff;
  background-color: #000;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 10vh;
  background: rgba(57, 55, 72, 0.22);
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: all 0.5s;
  pointer-events: ${({ active }) => (active ? "all" : "none")};
  z-index: 999;
`;
