import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import NoteState from "./context/NoteState";
import DialogState from "./context/DialogState";
import ModalState from "./context/ModalState";
import swRegister from "./utils/swRegister";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DialogState>
      <ModalState>
        <NoteState>
          <App />
        </NoteState>
      </ModalState>
    </DialogState>
  </React.StrictMode>
);

window.addEventListener("load", () => {
  swRegister();
});
