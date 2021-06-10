import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';
import ThemeToggleSwitch from './ui/ThemeToggleSwitch';

const Header = () => {
  const { currentTheme } = useSelector((state) => state.theme);

  return (
    <NavWrapper theme={currentTheme}>
      <MenuLink to='/'>
        <Menu color={currentTheme.borderPrimary} />
      </MenuLink>
      <InterviewedLogo theme={currentTheme}>Interviewed</InterviewedLogo>
      <ThemeToggleSwitch />
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(p) => p.theme.borderPrimary};

  &:hover {
    border-bottom: 2px solid ${(p) => p.theme.backgroundPrimary};
    box-shadow: 0 0 10px ${(p) => p.theme.borderPrimary};
  }
`;

const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InterviewedLogo = styled.h2`
  text-decoration: none;
  font-style: italic;
  color: ${(p) => p.theme.borderPrimary};
  display: flex;
  align-items: center;
`;

export default Header;
