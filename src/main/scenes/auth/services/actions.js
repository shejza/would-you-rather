export const actions = {
  setAuthUser
};
function setAuthUser(id) {
  return (dispatch) => {
      localStorage.setItem('authId', id);
      dispatch(success(id));
      //window.location.href = '/app';
  };

  function success(id) {
    return {
      type: 'SET_AUTH_USER',
      id,
    };
  }

  function failure(error) {
    return {
      type: 'SET_AUTH_USER_ERROR',
      error,
    };
  }
}
