export function auth_user(state = { id: null }, action) {
  switch (action.type) {
    case 'SET_AUTH_USER':
      return {
        id: action.id,
      };
    case 'SET_AUTH_USER_ERROR':
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
  