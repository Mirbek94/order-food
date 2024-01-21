import { useContext } from "react";
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { MealsSummary } from "./components/meals/MealsSummary";
import { modalContext } from "./context/modal-context";

function App() {
  const { isModalOpen } = useContext(modalContext);
  return (
    <>
      <Header />
      <MealsSummary />
      <Meals />
      {isModalOpen && <Cart />}
    </>
  );
}

export default App;
