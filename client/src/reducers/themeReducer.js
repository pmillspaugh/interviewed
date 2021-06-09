import { lightTheme, darkTheme } from '../theme';

const initialState = {
  currentTheme: lightTheme,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme =
        state.currentTheme === lightTheme ? darkTheme : lightTheme;
      return {
        currentTheme: newTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;
