import React from "react";
import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  min-height: 100%;
  margin-bottom: -20px;
`;

export default Wrapper;
