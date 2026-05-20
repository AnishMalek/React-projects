const initialState = {
  popular: [],
  searchResults: [],
  movieDetails: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_POPULAR_SUCCESS':
      return { ...state, loading: false, popular: action.payload };
    case 'FETCH_SEARCH_SUCCESS':
      return { ...state, loading: false, searchResults: action.payload };
    case 'FETCH_DETAILS_SUCCESS':
      return { ...state, loading: false, movieDetails: action.payload };
    case 'FETCH_MOVIES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
