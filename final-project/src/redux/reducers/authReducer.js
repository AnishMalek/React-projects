const initialState = {
  isAuthenticated: false,
  user: null,
  preferences: {
    favorites: [],
    watchlist: []
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return initialState;
    case 'ADD_FAVORITE':
      return {
        ...state,
        preferences: {...state.preferences,favorites: [...state.preferences.favorites, action.payload]
        }
      };
    default:
      return state;
  }
};

export default authReducer;
