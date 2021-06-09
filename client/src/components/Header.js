import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';
import ThemeToggleSwitch from './ui/ThemeToggleSwitch';

const Header = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <NavWrapper>
      <Link to='/'>
        <Menu color={theme.currentTheme.colorPrimary} />
      </Link>
      {/* <Link to='/'>
        <h1>Interviewed</h1>
      </Link> */}
      <ThemeToggleSwitch />
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
