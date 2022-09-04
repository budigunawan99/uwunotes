import React, { useState } from "react";
import styled from "styled-components";

const ALLOWED_CHAR_LENGTH = 50;

const NoteModalInput = ({ titleModal, action, closeModal }) => {
  const initialValue = {
    title: "",
    content: "",
  };

  const [inputs, setInputs] = useState(initialValue);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((previousInputs) => ({
      ...previousInputs,
      [name]: name === "title" ? value.slice(0, ALLOWED_CHAR_LENGTH) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    action({
      title: inputs.title,
      body: inputs.content,
    });
    setInputs(initialValue);
    closeModal();
  };

  return (
    <>
      <Container>
        <Modal>
          <Header>
            <Title>{titleModal}</Title>
          </Header>
          <Line />
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>
                Title{" "}
                <span>
                  {ALLOWED_CHAR_LENGTH - inputs.title.length} char left
                </span>
              </Label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Type note title"
                value={inputs.title || ""}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Content</Label>
              <TextArea
                id="content"
                name="content"
                placeholder="Type note content"
                value={inputs.content || ""}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <MenuGroup>
              <ButtonClose onClick={closeModal}>Close</ButtonClose>
              <ButtonSave type="submit">Save</ButtonSave>
            </MenuGroup>
          </Form>
        </Modal>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(24, 14, 18, 0.5);
`;

const Modal = styled.div`
  box-shadow: 0 4px 8px 0 rgba(52, 73, 94, 0.2);
  border-radius: 25px;
  overflow: hidden;
  color: #000;
  background-color: #fff;
  width: 50%;
  min-width: 265px;
  padding: 2%;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Header = styled.div`
  margin: 0 5%;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Line = styled.hr`
  border: 0;
  border-bottom: 0.25px solid #000;
`;

const Form = styled.form`
  display: grid;
  grid-row-gap: 15px;
  padding: 15px 0;
`;

const FormGroup = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: lighter;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #000;
  border-radius: 15px;
  min-width: 44px;
  min-height: 44px;
  font-family: inherit;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  border: 1px solid #000;
  border-radius: 15px;
  min-width: 44px;
  min-height: 44px;
  font-family: inherit;
  font-size: 14px;
  height: 150px;
`;

const MenuGroup = styled.div`
  margin-top: 15px;
  text-align: right;
`;

const ButtonClose = styled.button`
  border-radius: 15px;
  padding: 0 20px;
  margin-left: 10px;
`;

const ButtonSave = styled.button`
  border-radius: 15px;
  padding: 0 20px;
  margin-left: 10px;
  background-color: #f48fb1;
  color: #000;
`;

export default NoteModalInput;
