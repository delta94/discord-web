const initialState = {
  user: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return state.user;
    default:
      return state;
  }
};

export const selectUser = (state) => state;

export default user;
