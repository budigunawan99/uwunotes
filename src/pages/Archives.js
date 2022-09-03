import React, { useContext } from "react";
import styled from "styled-components";
import NoteContext from "../context/NoteContext";
import NoteList from "../components/Notes/NoteList";
import Fallback from "./Fallback";

const Archives = () => {
  const { archivedNotes, totalArchivedNotes } = useContext(NoteContext);
  return (
    <>
      <Section>
        {totalArchivedNotes > 0 ? (
          <NoteList notes={archivedNotes} />
        ) : (
          <Fallback message="No Notes Found" />
        )}
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 4%;
`;

export default Archives;
