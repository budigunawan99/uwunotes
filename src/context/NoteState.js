import React, { useContext, useEffect, useState } from "react";
import NoteContext from "./NoteContext";
import DialogContext from "./DialogContext";
import ModalContext from "./ModalContext";
import getInitialData from "../data/data";

const STORAGE_KEY = "UWUNOTES_APPS";

const initialState = localStorage.getItem(STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY))
  : getInitialData;

const generateId = () => +new Date();

const NoteState = ({ children }) => {
  const [notes, setNotes] = useState(initialState);
  const [keyword, setKeyword] = useState("");
  const { setAttribute, closeDialog } = useContext(DialogContext);
  const { setModal, closeModal } = useContext(ModalContext);

  const searchedNotes = keyword
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(keyword.toLowerCase())
      )
    : notes;

  const mainNotes = searchedNotes.filter((note) => note.archived === false);
  const archivedNotes = searchedNotes.filter((note) => note.archived === true);
  const totalMainNotes = mainNotes.length;
  const totalArchivedNotes = archivedNotes.length;

  const handleArchive = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const handleRemoveDialog = (id) => {
    setAttribute({
      isOpened: true,
      title: "Delete Note",
      message: "Are you sure?",
      dangerMode: true,
      action: () => handleRemove(id),
    });
  };

  const handleRemove = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    closeDialog();
  };

  const handleInputModal = () => {
    setModal({
      isOpened: true,
      titleModal: "Form Input Note",
      action: ({ title, body }) => handleInput({ title, body }),
    });
  };

  const handleInput = ({ title, body }) => {
    setNotes([
      ...notes,
      {
        id: generateId(),
        title: title.trim(),
        body: body.trim(),
        createdAt: new Date().toJSON(),
        archived: false,
      },
    ]);
    closeModal();
  };

  useEffect(
    () => localStorage.setItem(STORAGE_KEY, JSON.stringify(notes)),
    [notes]
  );

  return (
    <NoteContext.Provider
      value={{
        keyword,
        setKeyword,
        mainNotes,
        archivedNotes,
        totalMainNotes,
        totalArchivedNotes,
        handleArchive,
        handleRemoveDialog,
        handleInputModal,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
