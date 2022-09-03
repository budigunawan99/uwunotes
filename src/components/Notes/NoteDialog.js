import React from "react";
import styled, { css } from "styled-components";

const NoteDialog = ({ title, message, action, dangerMode, closeDialog }) => {
  return (
    <>
      <Container>
        <Dialog>
          <Title>{title}</Title>
          <Message>{message}</Message>
          <DialogAction>
            <ButtonYes dangerMode={dangerMode} onClick={action}>
              Yes
            </ButtonYes>
            <ButtonCancel onClick={closeDialog}>Cancel</ButtonCancel>
          </DialogAction>
        </Dialog>
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

const Dialog = styled.div`
  box-shadow: 0 4px 8px 0 rgba(52, 73, 94, 0.2);
  border-radius: 10px;
  overflow: hidden;
  color: #000;
  background-color: #fff;
  width: 25%;
  min-width: 265px;
  padding: 2%;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5em;
`;

const Message = styled.p`
  margin: 0;
`;

const DialogAction = styled.div`
  margin-top: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

const ButtonCancel = styled.button`
  border-radius: 15px;
`;

const ButtonYes = styled.button`
  border-radius: 15px;
  ${({ dangerMode }) =>
    dangerMode
      ? css`
          background-color: #f33636;
          color: #fff;
        `
      : css`
          background-color: #f48fb1;
          color: #000;
        `}
`;

export default NoteDialog;
