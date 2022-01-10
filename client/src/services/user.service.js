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
    return axios.put(API_URL + "setuseremail/" + AuthService.getCurrentUser().id, {"email": email}, { headers: authHeader() });
};

const setUserPassword = (password) => {
    return axios.put(API_URL + "setuserpassword/" + AuthService.getCurrentUser().id, {"password": password}, { headers: authHeader() });
};

const setUserName = (name) => {
    return axios.put(API_URL + "setusername/" + AuthService.getCurrentUser().id, {"name": name}, { headers: authHeader() });
};

const setUserDescription = (description) => {
    return axios.put(API_URL + "setuserdescription/" + AuthService.getCurrentUser().id, {"description": description}, { headers: authHeader() });
};

const setUserGender = (gender) => {
    return axios.put(API_URL + "setusergender/" + AuthService.getCurrentUser().id, {"gender": gender}, { headers: authHeader() });
};

const setUserExpCompany = (exp_company) => {
    return axios.put(API_URL + "setuserexpcompany/" + AuthService.getCurrentUser().id, {"exp_company": exp_company}, { headers: authHeader() });
};

const setUserExpTotal = (exp_total) => {
    return axios.put(API_URL + "setuserexptotal/" + AuthService.getCurrentUser().id, {"exp_total": exp_total}, { headers: authHeader() });
};

const setUserPicture = (formData) => {
    return axios.put(API_URL + "uploadprofilepic/" + AuthService.getCurrentUser().id, {formData}, { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserProfile,
  getModeratorBoard,
  getAdminBoard,
  setUserEmail,
  setUserPassword,
  setUserName,
  setUserDescription,
  setUserGender,
  setUserExpCompany,
  setUserExpTotal,
  setUserPicture
};
