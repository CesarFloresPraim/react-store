import authApi from "../../../api/authApi";

class AuthService {
  loginUser = (credentials) =>
    authApi().post("api/token/refresh/", credentials);
  refreshToken = (token) => authApi().post('api/token/refresh/', token);
}

export default new AuthService();
