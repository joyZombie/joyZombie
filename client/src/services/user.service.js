import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = "http://localhost:8080/api/user/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserProfile = () => {
    console.log(authHeader());
  return axios.get(API_URL + AuthService.getCurrentUser().id, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const setUserEmail = (email) => {
/*     const obj = {id: AuthService.getCurrentUser().id,
        email: email}; */
    console.log(authHeader());
    return axios.put(API_URL + "setuseremail/" + AuthService.getCurrentUser().id, {"email": email}, { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserProfile,
  getModeratorBoard,
  getAdminBoard,
  setUserEmail
};
