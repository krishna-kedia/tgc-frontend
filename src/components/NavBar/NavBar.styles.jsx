import styled from "styled-components";

export const Nav = styled.nav`
  z-index: 1000;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding-left: 2vw;
  background-color: ${({ bgOut, bgIn, textOut, textIn }) => bgOut};
  justify-content: space-between;
  align-items: center;
  img {
    width: 4em;
  }

  @media (max-width: 768px) {
    padding: 0em 1em;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex: 0.6;
  flex-flow: row nowrap;
  z-index: 10;
  background-color: ${({ open, bgOut, bgIn, textOut, textIn }) => bgOut};

  li {
    font-weight: 700;
    background-color: ${({ open, bgOut, bgIn, textOut, textIn }) => bgOut};
    color: white;

    color: ${({ open, bgOut, bgIn, textOut, textIn }) => textOut};

    &:hover {
      opacity: 0.8;
    }
  }

  li:nth-child(6) {
    min-height: 29px;

    text-align: center;
    background-color: ${({ open, bgOut, bgIn, textOut, textIn }) => bgOut};
    color: ${({ open, bgOut, bgIn, textOut, textIn }) => textOut};
    min-width: 100px;
    border: 2px solid ${({ open, bgOut, bgIn, textOut, textIn }) => textOut};
    border-radius: 7px;
  }

  @media (max-width: 910px) and (min-width: 768px) {
    li {
      background-color: ${({ open, bgOut, bgIn, textOut, textIn }) => bgOut};

      font-size: 0.9em;
    }

    li:nth-child(6) {
      background-color: ${({ open, bgOut, bgIn, textOut, textIn }) => bgOut};

      min-height: 23px;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ open, bgOut, bgIn, textOut, textIn }) => bgIn};
    position: fixed;
    transform: ${({ open, bgOut, bgIn, textOut, textIn }) =>
      open ? "translateX(-100%)" : "translateX(0)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    right: -300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      background-color: ${({ open, bgOut, bgIn, textOut, textIn }) => bgOut};
      padding: 15px 35px;
      color: ${({ open, bgOut, bgIn, textOut, textIn }) => textIn};
    }

    li:nth-child(6) {
      text-align: left !important;

      border: none;
      color: ${({ open, bgOut, bgIn, textOut, textIn }) => textIn};
    }
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  top: 25px;
  right: 25px;
  z-index: 20;
  display: none;
  background-color: transparent;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    z-index: 1000;
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ open }) => (open ? "#000" : "#F05680")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
