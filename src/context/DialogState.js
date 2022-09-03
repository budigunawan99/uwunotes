import React, { useState } from "react";
import NoteDialog from "../components/Notes/NoteDialog";
import DialogContext from "./DialogContext";

const DialogState = ({ children }) => {
  const initialAttribute = {
    isOpened: false,
    title: "",
    message: "",
    dangerMode: false,
    action: () => undefined,
  };
  const [attribute, setAttribute] = useState(initialAttribute);

  const closeDialog = () => {
    setAttribute((attribute) => ({
      ...attribute,
      isOpened: false,
    }));
  };

  return (
    <DialogContext.Provider
      value={{
        setAttribute,
        closeDialog,
      }}
    >
      {children}
      {attribute.isOpened && (
        <NoteDialog {...attribute} closeDialog={closeDialog} />
      )}
    </DialogContext.Provider>
  );
};

export default DialogState;
