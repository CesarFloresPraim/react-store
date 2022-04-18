import initialState from "./auth.initialState";
import actionTypes from "./auth.actionTypes";

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_AUTH_TOKEN_SUCCESS:
      localStorage.setItem("token", payload.accessToken);
      localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
      return { ...state, ...payload };
    case actionTypes.GET_AUTH_TOKEN_ERROR:
      return { ...state, ...payload };
    case actionTypes.REFRESH_TOKEN_SUCCESS:
      localStorage.setItem("token", payload.accessToken);
      localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
      return { ...state, ...payload };
    case actionTypes.REFRESH_TOKEN_ERROR:
      return { ...state, ...payload };
    case actionTypes.DESTROY_TOKEN_SUCCESS:
      localStorage.removeItem("token");
      localStorage.removeItem("lastLoginTime");
      return { ...state, ...payload };
    case actionTypes.DESTROY_TOKEN_ERROR:
      localStorage.removeItem("token");
      localStorage.removeItem("lastLoginTime");
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default authReducer;