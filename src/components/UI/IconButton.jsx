import React from "react";
import { Button } from "./Button";
import { styled } from "styled-components";

const Minus = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16675 10H15.8334"
        stroke="#8A2B06"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Plus = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4.16675V15.8334"
        stroke="#8A2B06"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16675 10H15.8334"
        stroke="#8A2B06"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconButton = ({ Icon, onClick, type = "button", disabled }) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      variant="outlined"
      disabled={disabled}
    >
      {Icon ? <Minus /> : <Plus />}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  height: 50%;
  border-radius: 6px;
  padding: 0.5rem 0.875rem;
  display: grid;
  place-items: center;
  &:hover svg,
  &:hover path {
    fill: white;
    stroke: white;
  }
`;
