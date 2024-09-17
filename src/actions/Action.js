export const setLoading = (loading) => ({
  type: 'SET_LOADING',
  payload: loading,
});

export const setAuth = (isAuthenticated) => ({
  type: 'SET_AUTH',
  payload: isAuthenticated,
});