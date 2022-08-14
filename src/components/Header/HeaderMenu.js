import React from "react";
import styled from "styled-components";

const HeaderMenu = ({expand, setExpand}) => {
  return (
    <Button
      aria-label="Click to open sidebar"
      onClick={() => {
        setExpand(!expand);
      }}
    >
      ☰
    </Button>
  );
};

const Button = styled.button`
  color: #000;
  position: fixed;
  font-size: 22px;
  display: block;
  width: 20px;
  right: 5%;
  top: 17px;
  min-width: 44px;
  min-height: 44px;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  @media (min-width: 750px) {
    display: none;
  }
`;

export default HeaderMenu;
