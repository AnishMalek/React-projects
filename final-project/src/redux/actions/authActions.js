export function login(user) {
  return { type: 'LOGIN', payload: user };
}

export function logout() {
  return { type: 'LOGOUT' };
}

export function addFavorite(movie) {
  return { type: 'ADD_FAVORITE', payload: movie };
}
