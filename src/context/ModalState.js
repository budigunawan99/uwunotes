import React, { useState } from "react";
import ModalContext from "./ModalContext";
import NoteModalInput from "../components/Notes/NoteModalInput";

const ModalState = ({ children }) => {
  const initialModal = {
    isOpened: false,
    titleModal: "",
    action: () => undefined,
  };
  const [modal, setModal] = useState(initialModal);

  const closeModal = () => {
    setModal((modal) => ({
      ...modal,
      isOpened: false,
    }));
  };
  return (
    <ModalContext.Provider value={{ setModal, closeModal }}>
      {children}
      {modal.isOpened && <NoteModalInput {...modal} closeModal={closeModal} />}
    </ModalContext.Provider>
  );
};

export default ModalState;
