import React, {memo} from "react";
import styled from "styled-components";

const HeaderBrand = () => {
  return (
    <>
      <Brand tabIndex="0">
        <BrandImg
          src="/img/uwulogo.png"
          alt="logo UwuNotes"
          width="30"
          height="30"
        />
        <Title>UwuNotes</Title>
      </Brand>
    </>
  );
};

const Brand = styled.div`
  text-align: left;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 2em;
  margin: 0.5em;
  display: inline-block;
  color: #000;
`;

const BrandImg = styled.img`
  width: 30px;
  position: relative;
  top: 3px;
  left: 7px;
`;

export default memo(HeaderBrand);
