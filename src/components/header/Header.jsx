import React, { useContext } from "react";
import { HeaderCartButton } from "./HeaderCartButton";
import { styled } from "styled-components";
import { modalContext } from "../../context/modal-context";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
    </StyledHeader>
  );
};

const StyledHeader = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  color: white;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  & > h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;
