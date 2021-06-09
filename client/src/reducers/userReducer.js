const initialState = {
  loggedIn: false,
  authToken: null,
  companyList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, loggedIn: true, authToken: action.payload };
    default:
      return state;
  }
};

export default userReducer;
