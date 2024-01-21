import { createContext, useReducer, useState } from "react";

export const cartContext = createContext({
  addedMeals: [],
  addedMealsHandler: () => {},
});

const ADDED_MEALS_TYPE = "ADDED_MEALS";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
  switch (action.type) {
    case ADDED_MEALS_TYPE: {
      const prevMeals = state.addedMeals; // => []
      const mealAction = action.payload; /// mealAction => {id: title: }

      if (prevMeals.length === 0) {
        return {
          ...state,
          addedMeals: [mealAction],
        };
      }

      const isMealsExists = prevMeals.find((meal) => meal.id === mealAction.id);
      console.log(isMealsExists);

      if (isMealsExists === undefined) {
        return {
          ...state,
          addedMeals: [...prevMeals, mealAction],
        };
      }

      const newAddedMeals = prevMeals.map((meal) => {
        if (meal.id === mealAction.id) {
          return {
            ...meal,
            amount: meal.amount + mealAction.amount, /// meal.amount == 1 ///  ///mealAction.amount =4
          };
        }
        return meal;
      });

      return {
        ...state,
        addedMeals: newAddedMeals,
      };
    }

    case INCREMENT: {
      const prevMeals = state.addedMeals;
      const mealID = action.payload;

      const newAddedMeals = prevMeals.map((meal) => {
        if (meal.id === mealID) {
          return {
            ...meal,
            amount: meal.amount + 1,
          };
        }
        return meal;
      });

      return {
        ...state,
        addedMeals: newAddedMeals,
      };
    }

    case DECREMENT: {
      const prevMeals = state.addedMeals;
      const mealID = action.payload;

      const newAddedMeals = prevMeals.map((meal) => {
        if (meal.id === mealID) {
          return {
            ...meal,
            amount: meal.amount - 1,
          };
        }
        return meal;
      });

      return {
        ...state,
        addedMeals: newAddedMeals,
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  addedMeals: [],
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const addedMealsHandler = (newMeal) => {
    console.log(newMeal);
    dispatch({ type: ADDED_MEALS_TYPE, payload: newMeal });
  };

  const increaseMealAmountHandler = (id) => {
    dispatch({ type: INCREMENT, payload: id });
  };

  const decreseMealAmountHandler = (id) => {
    dispatch({ type: DECREMENT, payload: id });
  };

  const totalAmount = cartState.addedMeals.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);

  return (
    <cartContext.Provider
      value={{
        addedMeals: cartState.addedMeals,
        addedMealsHandler,
        onIncrease: increaseMealAmountHandler,
        onDecrease: decreseMealAmountHandler,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
