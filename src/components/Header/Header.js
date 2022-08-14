import React, { useState, useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import HeaderBrand from "./HeaderBrand";
import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const [expand, setExpand] = useState(false);
  const node = useRef();

  useOnClickOutside({
    ref: node,
    handler: () => setExpand(false),
  });

  return (
    <>
      <HeaderComponent>
        <HeaderBrand />
        <div ref={node}>
          <HeaderMenu expand={expand} setExpand={setExpand} />
          <HeaderNav expand={expand} />
        </div>
      </HeaderComponent>
    </>
  );
};

const HeaderComponent = styled.header`
  background-color: #f48fb1;
  min-height: 10px;
  position: sticky;
  top: 0;
  z-index: 1;
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export default Header;
