import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';
import ThemeToggleSwitch from './ui/ThemeToggleSwitch';
import { colors } from '../theme';

const Header = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <NavWrapper theme={theme}>
      <Link to='/'>
        <Menu color={colors.darkGreen} />
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
  box-shadow: 0 0 10px ${(p) => p.theme.currentTheme.shadowPrimary};
`;

export default Header;
