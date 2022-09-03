import React, { useContext } from "react";
import styled from "styled-components";
import NoteContext from "../../context/NoteContext";

const NoteListItemMenu = ({ id, isArchived }) => {
  const { handleArchive, handleRemoveDialog } = useContext(NoteContext);

  return (
    <>
      <MenuGroup>
        <ButtonArchive onClick={() => handleArchive(id)}>
          <Icon className="material-icons" aria-hidden="true">
            {isArchived ? "unarchive" : "archive"}
          </Icon>
          {isArchived ? "Unarchive" : "Archive"}
        </ButtonArchive>
        <ButtonDelete onClick={() => handleRemoveDialog(id)}>
          <Icon className="material-icons" aria-hidden="true">
            delete
          </Icon>
          Delete
        </ButtonDelete>
      </MenuGroup>
    </>
  );
};

const MenuGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

const ButtonArchive = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
`;

const ButtonDelete = styled.button`
  background: none;
  border: none;
  color: #f33636;
  font-size: 1rem;
`;

const Icon = styled.i`
  position: relative;
  top: 5px;
  margin-right: 4px;
`;

export default NoteListItemMenu;
