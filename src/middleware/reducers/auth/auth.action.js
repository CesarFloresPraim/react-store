import actionTypes from "./auth.actionTypes";

const loginUser = (accessData) => ({
  type: actionTypes.GET_AUTH_TOKEN_SUCCESS,
  payload: {
    accessToken: accessData.token,
    isTokenValid: true,
    lastLoginTime: new Date(Date.now()).getTime(),
  },
});

const loginUserError = (message) => ({
  type: actionTypes.GET_AUTH_TOKEN_ERROR,
  payload: { accessToken: null, isTokenValid: false },
});

const refreshToken = (accessData) => ({
  type: actionTypes.REFRESH_TOKEN_SUCCESS,
  payload: {
    accessToken: accessData.token,
    isTokenValid: true,
    lastLoginTime: new Date(Date.now()).getTime(),
  },
});

const refreshTokenError = () => ({
  type: actionTypes.REFRESH_TOKEN_ERROR,
  payload: { accessToken: null, isTokenValid: false },
});

const logoutUser = () => ({
  type: actionTypes.DESTROY_TOKEN_SUCCESS,
  payload: {
    accessToken: null,
    isTokenValid: false,
    lastLoginTime: null,
  },
});

const logoutUserError = () => ({
  type: actionTypes.DESTROY_TOKEN_ERROR,
  payload: {
    accessToken: null,
    isTokenValid: false,
    lastLoginTime: null,
  },
});
export default {
  loginUser,
  loginUserError,
  refreshToken,
  refreshTokenError,
  logoutUser,
  logoutUserError,
};
