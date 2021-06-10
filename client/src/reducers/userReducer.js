const initialState = {
  loggedIn: false,
  authToken: null,
  name: '',
  companyList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      // first ~102 characters of google auth token are always the same
      const authToken = action.payload.authToken.substring(0, 100);
      return {
        ...state,
        loggedIn: true,
        authToken: authToken,
        name: action.payload.name,
      };
    case 'LOAD_COMPANY_LIST':
      return { ...state, companyList: action.payload };
    case 'ADD_COMPANY':
      return { ...state, companyList: action.payload };
    default:
      return state;
  }
};

export default userReducer;
