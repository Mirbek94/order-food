import { createContext, useState } from "react";

export const modalContext = createContext({
  isModalOpen: false,
  closeModal: () => {},
  openModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <modalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </modalContext.Provider>
  );
};
