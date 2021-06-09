import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Sun, Moon } from 'react-feather';
import { toggleTheme } from '../../actions/actionCreators';
import VisuallyHidden from './VisuallyHidden';
import { colors } from '../../theme';

const ThemeToggleSwitch = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const dispatch = useDispatch();

  const handleThemeToggleClick = () => {
    setDarkTheme(!darkTheme);
    dispatch(toggleTheme());
  };

  return (
    <ThemeToggleButton onClick={handleThemeToggleClick}>
      <ThemeToggleLabel htmlFor='toggle-switch'>
        <Moon size={18} color={colors.lightBlue} />
        <Sun size={18} color={colors.lightBlue} />
        <ThemeToggleCircle darkTheme={darkTheme}></ThemeToggleCircle>
      </ThemeToggleLabel>
      <VisuallyHidden>Change theme</VisuallyHidden>
    </ThemeToggleButton>
  );
};

const ThemeToggleButton = styled.button`
  width: 48px;
  height: 26px;
  padding: 0;
  background-color: ${colors.darkGreen};
  border: none;
  border-radius: 13px;
`;

const ThemeToggleLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ThemeToggleCircle = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  left: ${(p) => (p.darkTheme ? '24px' : '4px')};
  border-radius: 50%;
  background-color: ${colors.lightBlue};
  box-shadow: 0 0 10px ${colors.darkBlue};
  transition: 0.25s;
`;

export default ThemeToggleSwitch;