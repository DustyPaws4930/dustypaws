import React, { useState } from "react";
import "./Login.css";
import jwt from "jwt-decode";
import axios from "axios";
import {
  getApiPath,
  isTokenTimeOut,
  setToken,
  setTokenTimeout,
} from "../../Common";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    const loginUrl = getApiPath() + "user/login";
    axios
      .post(loginUrl, loginInfo)
      .then((res) => {
        const userToken = jwt(res.data.user); // decode your token here
        alert("Logged in!!");
        localStorage.setItem("token", userToken.user);
        setToken(userToken.user);
        console.log("user", userToken);
        // These function requires token only
        setTokenTimeout(userToken);

        console.log(isTokenTimeOut(userToken));
        console.log("user", new Date(userToken.iat));
        // window.location.href = "/";
      })
      .catch((err) => {
        alert(`Error Occured: ${err.response.data.message}`);
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form
        action="/"
        onSubmit={(e) => {
          handleSubmitBtn(e);
        }}
      >
        <div className="labelInputWrapper">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            onChange={(event) => onInputChange(event)}
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="labelInputWrapper">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            onChange={(event) => onInputChange(event)}
            name="password"
            id="password"
            placeholder="Password"
          />
          <div className="SubmitBtnWrapper">
            <input type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
