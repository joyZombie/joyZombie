import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = "http://localhost:8080/api/user/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserProfile = () => {
  return axios.get(API_URL + AuthService.getCurrentUser().id, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserProfile,
  getModeratorBoard,
  getAdminBoard,
};
