let tokenTimeout;

export const getApiPath = () => {
  return "http://localhost:5000/";
};

export const getToken = () => {
  return localStorage.getItem("token");
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
  alert(tokenTimeout);
};
