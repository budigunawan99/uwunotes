import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NoteContext from "../../context/NoteContext";

const HeaderNav = ({ expand }) => {
  const { totalMainNotes, totalArchivedNotes } = useContext(NoteContext);
  return (
    <>
      <Nav expand={expand}>
        <NavImg
          src="/img/uwulogo.png"
          alt="logo drawer UwuNotes"
          width="80"
          height="80"
        />
        <NavList>
          <NavItem>
            <StyledLink to="/">
              Notes <Counter>{totalMainNotes}</Counter>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/archives">
              Archives <Counter>{totalArchivedNotes}</Counter>
            </StyledLink>
          </NavItem>
        </NavList>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  width: 100%;
  @media (max-width: 749px) {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    z-index: 10;
    background-color: #fcdde8;
    max-width: 250px;
    position: fixed;
    height: 100%;
    transform: ${({ expand }) =>
      expand ? "translate(0, 0)" : "translate(-300px, 0)"};
    transition: transform 0.3s ease;
    top: 0;
    left: 0;
  }
`;

const NavList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 7px 0;
  text-align: right;
  @media (min-width: 750px) {
    padding-right: 5em;
  }
`;

const NavItem = styled.li`
  display: inline-block;
  line-height: 24px;
  text-transform: uppercase;
  @media (max-width: 749px) {
    display: list-item;
    width: 100%;
    text-align: left;
  }
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 1.3em;
  text-decoration: none;
  color: #000;
  min-width: 44px;
  min-height: 44px;

  &:hover {
    color: #fff;
  }
`;

const NavImg = styled.img`
  display: none;
  @media (max-width: 749px) {
    display: block;
    margin: 10% auto;
  }
`;

const Counter = styled.span`
  background-color: #180e12;
  color: #fff;
  border-radius: 30%;
  padding: 0 3px;
  display: inline-block;
`;

export default HeaderNav;
