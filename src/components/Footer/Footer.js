import React from "react";
import styled from "styled-components";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <>
      <FooterComponent>
        <FooterContent />
      </FooterComponent>
    </>
  );
};

const FooterComponent = styled.footer`
  background-color: #f48fb1;
  color: #000;
  min-height: 35px;
  padding: 1%;
  text-align: center;
`;

export default Footer;
