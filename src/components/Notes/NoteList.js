import React from "react";
import styled from "styled-components";
import NoteListItem from "./NoteListItem";

const NoteList = ({notes}) => {

  return (
    <>
      <List>
        {notes.map((note) => (
          <NoteListItem key={note.id} {...note} />
        ))}
      </List>
    </>
  );
};

const List = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 15px;
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1250px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export default NoteList;
