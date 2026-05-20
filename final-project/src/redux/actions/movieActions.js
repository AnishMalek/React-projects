import axios from 'axios';


const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchMoviesRequest() {
  return { type: 'FETCH_MOVIES_REQUEST' };
}

export function fetchPopularSuccess(movies) {
  return { type: 'FETCH_POPULAR_SUCCESS', payload: movies };
}

export function fetchSearchSuccess(movies) {
  return { type: 'FETCH_SEARCH_SUCCESS', payload: movies };
}

export function fetchDetailsSuccess(movie) {
  return { type: 'FETCH_DETAILS_SUCCESS', payload: movie };
}

export function fetchMoviesFailure(error) {
  return { type: 'FETCH_MOVIES_FAILURE', payload: error };
}

export function fetchPopularMovies() {
  return function(dispatch) {
    dispatch(fetchMoviesRequest());
    axios.get(BASE_URL + '/movie/popular?api_key=' + API_KEY)
      .then(function(response) {
        dispatch(fetchPopularSuccess(response.data.results));
      })
      .catch(function(error) {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
}

export function searchMovies(query) {
  return function(dispatch) {
    if (query === '') {
      dispatch(fetchSearchSuccess([]));
      return;
    }
    
    dispatch(fetchMoviesRequest());
    axios.get(BASE_URL + '/search/movie?api_key=' + API_KEY + '&query=' + query)
      .then(function(response) {
        dispatch(fetchSearchSuccess(response.data.results));
      })
      .catch(function(error) {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
}

export function fetchMovieDetails(id) {
  return function(dispatch) {
    dispatch(fetchMoviesRequest());
    axios.get(BASE_URL + '/movie/' + id + '?api_key=' + API_KEY + '&append_to_response=credits')
      .then(function(response) {
        dispatch(fetchDetailsSuccess(response.data));
      })
      .catch(function(error) {
        dispatch(fetchMoviesFailure(error.message));
      });
  };
}
