import React, { useContext } from "react";
import styled from "styled-components";
import NoteList from "../components/Notes/NoteList";
import NoteAddButton from "../components/Notes/NoteAddButton";
import NoteContext from "../context/NoteContext";
import Fallback from "./Fallback";

const Notes = () => {
  const { mainNotes, totalMainNotes } = useContext(NoteContext);
  return (
    <>
      <Section>
        {totalMainNotes > 0 ? (
          <NoteList notes={mainNotes} />
        ) : (
          <Fallback message="No Notes Found" />
        )}
        <NoteAddButton />
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 4%;
`;

export default Notes;
