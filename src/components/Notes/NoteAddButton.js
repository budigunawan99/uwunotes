import React, { useContext } from "react";
import styled from "styled-components";
import NoteContext from "../../context/NoteContext";

const NoteAddButton = () => {
  const { handleInputModal } = useContext(NoteContext);
  return (
    <>
      <Button
        aria-label="add notes"
        id="noteAddButton"
        onClick={handleInputModal}
      >
        <i className="material-icons" aria-hidden="true">
          add
        </i>
      </Button>
    </>
  );
};

const Button = styled.button`
  font-size: 18px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f48fb1;
  color: #000;
  border: 0;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);
`;

export default NoteAddButton;
