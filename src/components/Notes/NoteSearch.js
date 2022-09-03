import React, { useContext } from "react";
import styled from "styled-components";
import NoteContext from "../../context/NoteContext";

const NoteSearch = () => {
  const { keyword, setKeyword } = useContext(NoteContext);

  const handleChange = (event) => {
    const value = event.target.value;
    setKeyword(value);
  };

  return (
    <>
      <Section>
        <Form>
          <FormInput
            type="search"
            id="search"
            name="search"
            placeholder="   🔎︎ Type title of note ..."
            aria-label="Search note"
            value={keyword}
            onChange={handleChange}
          />
        </Form>
      </Section>
    </>
  );
};

const Section = styled.section`
  width: 100%;
  background-color: #fcdde8;
  padding: 44px;
`;

const Form = styled.form`
  position: relative;
`;

const FormInput = styled.input`
  padding: 5px;
  border: 1px solid #180e12;
  border-radius: 15px;
  min-width: 44px;
  min-height: 44px;
  font-family: inherit;
  width: 100%;
`;

export default NoteSearch;
