export default {
    isTokenValid: false,
    accessToken: localStorage.getItem("token") || null, // makes sure the user is logged in even after
    isAdmin: false,
    lastLoginTime: localStorage.getItem("lastLoginTime") || null,
};