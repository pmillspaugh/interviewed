import * as actionTypes from './actionTypes';

const toggleTheme = () => ({
  type: actionTypes.TOGGLE_THEME,
  payload: null,
});

const loginUser = ({ authToken, name }) => ({
  type: actionTypes.LOGIN_USER,
  payload: { authToken, name },
});

const loadCompanyList = (companyList) => ({
  type: actionTypes.LOAD_COMPANY_LIST,
  payload: companyList,
});

const addCompany = (companyList) => ({
  type: actionTypes.ADD_COMPANY,
  payload: companyList,
});

export { toggleTheme, loginUser, addCompany, loadCompanyList };
