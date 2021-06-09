import * as actionTypes from './actionTypes';

const toggleTheme = () => ({
  type: actionTypes.TOGGLE_THEME,
  payload: null,
});

const loginUser = () => ({
  type: actionTypes.LOGIN_USER,
  payload: null,
});

export { toggleTheme, loginUser };
