import NavItem from 'components/atoms/NavItem/NavItem';
import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/group114.png';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  padding: 1rem 10rem;

  align-content: center;
`;

const MenuNavWrapper = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0;
  padding: 0;
`;

const ImgLogo = styled.img`
  width: 15rem;
  height: 6rem;
  object-fit: contain;
`;

const Nav = () => (
  <NavWrapper>
    <ImgLogo src={Logo} />
    <MenuNavWrapper>
      <NavItem
        exact
        activeStyle={{ borderBottom: '1px solid ' }}
        as={NavLink}
        to="/"
      >
        Strona główna
      </NavItem>
      <NavItem
        activeStyle={{ borderBottom: '1px solid ' }}
        as={NavLink}
        to="/onas"
      >
        o nas
      </NavItem>
      <NavItem
        activeStyle={{ borderBottom: '1px solid ' }}
        as={NavLink}
        to="/zabiegi"
      >
        zabiegi
      </NavItem>
      <NavItem
        activeStyle={{ borderBottom: '1px solid ' }}
        as={NavLink}
        to="/cennik"
      >
        cennik
      </NavItem>
      <NavItem
        activeStyle={{ borderBottom: '1px solid ' }}
        as={NavLink}
        to="/kontakt"
      >
        kontakt
      </NavItem>
    </MenuNavWrapper>
  </NavWrapper>
);

export default Nav;
