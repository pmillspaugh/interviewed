import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export default reducer;
