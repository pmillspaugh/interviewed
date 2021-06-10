const initialState = {
  loggedIn: false,
  authToken: null,
  name: '',
  companyList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        loggedIn: true,
        authToken: action.payload.authToken,
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
