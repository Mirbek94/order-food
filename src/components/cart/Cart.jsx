import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import { CartItem } from "./CartItem";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { modalContext } from "../../context/modal-context";
import { cartContext } from "../../context/cart-context";

export const Cart = () => {
  const { closeModal } = useContext(modalContext);
  const { addedMeals } = useContext(cartContext);

  return (
    <Modal closeModal={closeModal}>
      <Content>
        <ul>
          {addedMeals.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </ul>
        <PriceContainer className="price">
          <h3>Total Amount</h3>
          <b>$200.00</b>
        </PriceContainer>
        <ActionsButton>
          <Button onClick={closeModal} variant="outlined">
            Close
          </Button>
          <Button>Order</Button>
        </ActionsButton>
      </Content>
    </Modal>
  );
};

const Content = styled("section")`
  padding: 40px 32px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    max-height: 360px;
    overflow-y: scroll;
  }
`;

const ActionsButton = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 24px;
`;

const PriceContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
  & h3 {
    font-size: 20px;
    font-weight: 700;
    color: #222222;
  }
  & b {
    font-size: 22px;
    font-weight: 600;
    color: #8a2b06;
  }
`;
