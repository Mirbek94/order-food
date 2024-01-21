import React from "react";
import styled from "styled-components";
import { MealsImage } from "../../assets";

export const MealsSummary = () => {
  return (
    <section>
      <MainImageWrapper>
        <img src={MealsImage} alt="" />
      </MainImageWrapper>

      <MealsSummaryContainer>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </MealsSummaryContainer>
    </section>
  );
};

const MainImageWrapper = styled("div")`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
  & > img {
    object-fit: contain;
    width: 100%;
  }
`;

const MealsSummaryContainer = styled("div")`
  text-align: center;
  max-width: 45rem;
  width: 100%;
  margin: 0 auto;
  background-color: #383838;
  color: white;
  border-radius: 16px;
  padding: 3rem 1rem;
  box-shadow: 0px 6px 16px 0px #0000004d;
  margin-top: -10rem;
  position: relative;
  & > h2 {
    font-size: 2rem;
  }
`;
