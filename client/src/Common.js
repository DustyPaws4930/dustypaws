import jwt from "jwt-decode";
let tokenTimeout;
export const getApiPath = () => {
  return "http://localhost:5000/";
};

export const getToken = () => {
  let token = localStorage.getItem("token");

  if (token !== "undefined" && token !== null) {
    return jwt(token);
  } else {
    return null;
  }
};

export const getLoggedInUser = () => {
  let userToken = getToken();
  let loggedInUser = "";
  if (userToken !== null && userToken !== "undefined" && userToken !== "") {
    loggedInUser = userToken.user;
  }
  return loggedInUser;
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const isTokenTimeOut = (tokenTime) => {
  let currentTokenTime = new Date(tokenTime.iat);
  if (currentTokenTime >= tokenTimeout) return true;
  else return false;
};

export const setTokenTimeout = (token) => {
  let tokenTime = new Date(token.iat);

  tokenTimeout = tokenTime.setHours(
    tokenTime.getHours(),
    tokenTime.getMinutes() + 8,
    0,
    0
  );
};

export const deleteToken = () => {
  localStorage.removeItem("token");
};
