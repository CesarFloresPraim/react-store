import AuthService from "./auth.service";
import actions from "./auth.action";

//Call auth api
// export const loginUser = (credentials) => (dispatch) => {
// 	AuthService.loginUser(credentials)
// 		.then((response) => dispatch(actions.loginUser(response.data)))
// 		.catch((error) => dispatch(actions.loginUserError(error.message)));
// };

//Fake api
//Call auth api
export const loginUser = (credentials) => (dispatch) => {
  dispatch(actions.loginUser({ token: "123456" })); //If response success
  //dispatch(actions.loginUserError({message: 'Wrong credentials'})); //If response error
};

export const verifyAuth = (jwt) => (dispatch) => {
  if (jwt.token !== null) dispatch(actions.refreshToken({ token: jwt.token }));
  else
    dispatch(
      actions.refreshTokenError({ message: "Token expired, need re-login" })
    ); //If response error
};

export const logoutUser = () => (dispatch) => {
  dispatch(actions.logoutUser());
};
